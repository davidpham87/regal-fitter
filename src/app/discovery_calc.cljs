(ns app.discovery-calc
  (:require [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [app.discovery.gps :as gps]
            [cljs.numpy :as np]))

;; ---------------------------------------------------------------------------
;; BAT arm helpers
;; ---------------------------------------------------------------------------

(defn- bat-weibull-params
  "Returns {:scale … :shape …} for the BAT Weibull arm."
  [params]
  (let [med   (np/array #js [(:bat-med params)])
        shape (np/array #js [(:weibull-k params)])
        scale (survival/weibull-scale-from-median med shape)]
    {:scale scale :shape shape}))

(defn- bat-events-variance
  "Expected events and variance for the BAT arm."
  [params enroll-pts enroll-weights target-times n-per-arm n-total]
  (let [{:keys [scale shape]} (bat-weibull-params params)]
    (enrollment/expected-arm-events-and-variance
     survival/weibull-survival-probability
     [scale shape]
     enroll-pts enroll-weights target-times
     n-per-arm n-total)))

;; ---------------------------------------------------------------------------
;; calculate-stats
;; ---------------------------------------------------------------------------

(defn calculate-stats
  "Calculates expected events, variance, and z-scores for milestones
   at IA, UPD, and PR3 under the parametric model."
  [family params config]
  (let [[enroll-pts enroll-weights]
        (enrollment/expected-enrollment-times config)

        target-times (np/array
                      #js [(:t-ia config) (:t-upd config) (:t-pr3 config)]
                      "float64")

        n-per-arm (:n-per-arm config)
        n-total   (:n-total config)

        bat-res (bat-events-variance
                 params enroll-pts enroll-weights
                 target-times n-per-arm n-total)

        gps-res (gps/gps-events-and-variance
                 family params enroll-pts enroll-weights
                 target-times n-per-arm n-total bat-res)

        exp-bat (np/nd-to-array (:events bat-res))
        var-bat (np/nd-to-array (:variance bat-res))
        exp-gps (np/nd-to-array (:events gps-res))
        var-gps (np/nd-to-array (:variance gps-res))

        targets [(:n-ev-ia config)
                 (:n-ev-upd config)
                 (:n-ev-pr3 config)]
        labels  ["IA (46.0m)" "UPD (58.0m)" "PR3 (62.97m)"]]

    (mapv (fn [label target e-bat v-bat e-gps v-gps]
            (let [expected (+ e-bat e-gps)
                  variance (+ v-bat v-gps)
                  sd       (js/Math.sqrt variance)
                  std-dev  (/ (- expected target) sd)]
              {:label   label
               :target  target
               :expected expected
               :sd       sd
               :std-dev  std-dev}))
          labels targets
          (first exp-bat) (first var-bat)
          (first exp-gps) (first var-gps))))

;; ---------------------------------------------------------------------------
;; Survival / median helpers for curves
;; ---------------------------------------------------------------------------

(defn- bat-survival
  "BAT Weibull survival array over t-pts."
  [params t-pts]
  (let [{:keys [scale shape]} (bat-weibull-params params)]
    (survival/weibull-survival-probability t-pts scale shape)))

(defn- bat-events
  "Expected BAT arm event counts over t-pts."
  [params enroll-pts enroll-weights t-pts n-per-arm n-total]
  (let [{:keys [scale shape]} (bat-weibull-params params)]
    (enrollment/expected-arm-events
     survival/weibull-survival-probability
     [scale shape]
     enroll-pts enroll-weights t-pts
     n-per-arm n-total)))

(defn- alive-series
  "Expected patients still alive over t-pts for one arm."
  [enroll-pts enroll-weights t-pts n-per-arm n-total ev]
  (let [enrolled (enrollment/expected-arm-enrolled
                  enroll-pts enroll-weights t-pts
                  n-per-arm n-total)
        ev-1d    (np/reshape ev #js [(.-size ^js ev)])]
    (np/subtract enrolled ev-1d)))

;; ---------------------------------------------------------------------------
;; Interval-median binary search
;; ---------------------------------------------------------------------------

(defn- find-interval-median
  "Binary-searches for median survival within [t1,t2] using survival fn."
  [s-fn t1 t2]
  (let [target (* 0.5 (+ (s-fn t1) (s-fn t2)))]
    (loop [low t1 high t2 i 0]
      (if (>= i 30)
        (* 0.5 (+ low high))
        (let [mid (* 0.5 (+ low high))]
          (if (> (s-fn mid) target)
            (recur mid high (inc i))
            (recur low mid (inc i))))))))

;; ---------------------------------------------------------------------------
;; Hazard-ratio records (analytical)
;; ---------------------------------------------------------------------------

(defn- calc-hr
  "Calculates hazard ratio record between milestone indices t1 and t2."
  [t1 t2 label ms-ev-bat-arr ms-ev-gps-arr alive-bat-ms
   alive-gps-ms n-per-arm]
  (let [ev-gps (- (nth ms-ev-gps-arr t2) (nth ms-ev-gps-arr t1))
        ev-bat (- (nth ms-ev-bat-arr t2) (nth ms-ev-bat-arr t1))
        a-gps  (if (zero? t1) n-per-arm (nth alive-gps-ms t1))
        a-bat  (if (zero? t1) n-per-arm (nth alive-bat-ms t1))
        h-gps  (if (pos? a-gps) (/ ev-gps a-gps) 0.0)
        h-bat  (if (pos? a-bat) (/ ev-bat a-bat) 0.0)]
    {:interval label
     :hr (if (pos? h-bat) (/ h-gps h-bat) 0.0)}))

;; ---------------------------------------------------------------------------
;; Hazard-rate records (analytical)
;; ---------------------------------------------------------------------------

(defn- calc-hr-rates
  "Returns GPS/BAT/Pooled hazard-rate records for milestone interval."
  [t1 t2 label ms-ev-bat-arr ms-ev-gps-arr alive-bat-ms
   alive-gps-ms t-ms-arr s-bat-fn s-gps-fn s-pool-fn]
  (let [t-start   (nth t-ms-arr t1)
        t-end     (nth t-ms-arr t2)
        ev-gps    (- (nth ms-ev-gps-arr t2) (nth ms-ev-gps-arr t1))
        ev-bat    (- (nth ms-ev-bat-arr t2) (nth ms-ev-bat-arr t1))
        med-gps   (find-interval-median s-gps-fn  t-start t-end)
        med-bat   (find-interval-median s-bat-fn  t-start t-end)
        med-pool  (find-interval-median s-pool-fn t-start t-end)]
    [{:interval label :median med-gps  :events ev-gps
      :group "GPS"}
     {:interval label :median med-bat  :events ev-bat
      :group "BAT"}
     {:interval label :median med-pool
      :events (+ ev-gps ev-bat) :group "Pooled"}]))

;; ---------------------------------------------------------------------------
;; GPS point-function builders (for binary search)
;; ---------------------------------------------------------------------------

(defn- gps-point-fn
  "Returns a scalar survival function t->S for GPS arm."
  [family params]
  (let [{:keys [scale shape]} (bat-weibull-params params)
        gps-med   (np/array #js [(:gps-med params)])
        gps-shape (np/array #js [(:weibull-k params)])
        gps-scale (survival/weibull-scale-from-median gps-med gps-shape)
        gps-cf    (np/array #js [(or (:cure-frac params) 0.0)])
        gps-leak  (np/array #js [(or (:leak-yr params) 0.0)])]
    (fn [t]
      (let [ta (np/array #js [t] "float64")]
        (first (np/nd-to-array
                (case family
                  "weibull"
                  (survival/weibull-survival-probability
                   ta gps-scale gps-shape)
                  "cure"
                  (survival/cure-survival-probability
                   ta gps-cf gps-scale gps-shape)
                  "leaky"
                  (survival/leaky-cure-survival-probability
                   ta gps-cf gps-scale gps-shape gps-leak)
                  ;; fallback: weibull
                  (survival/weibull-survival-probability
                   ta gps-scale gps-shape))))))))

(defn- bat-point-fn
  "Returns a scalar survival function t->S for BAT arm."
  [params]
  (let [{:keys [scale shape]} (bat-weibull-params params)]
    (fn [t]
      (let [ta (np/array #js [t] "float64")]
        (first (np/nd-to-array
                (survival/weibull-survival-probability
                 ta scale shape)))))))

;; ---------------------------------------------------------------------------
;; Milestone events arrays
;; ---------------------------------------------------------------------------

(defn- milestone-events
  "Returns np-array of expected arm events at milestone time-points."
  [params enroll-pts enroll-weights t-milestones n-per-arm n-total]
  (let [{:keys [scale shape]} (bat-weibull-params params)]
    (enrollment/expected-arm-events
     survival/weibull-survival-probability
     [scale shape]
     enroll-pts enroll-weights t-milestones
     n-per-arm n-total)))

;; ---------------------------------------------------------------------------
;; calculate-curves (main)
;; ---------------------------------------------------------------------------

(defn calculate-curves
  "Computes complete curve data: survival grids, event accrual, alive
   counts, hazard ratios and hazard rates for the chosen family."
  [family params config]
  (let [t-pts (np/linspace 0 80 200)
        [enroll-pts enroll-weights]
        (enrollment/expected-enrollment-times config)

        n-per-arm (:n-per-arm config)
        n-total   (:n-total config)

        ;; BAT arm arrays
        s-bat  (bat-survival  params t-pts)
        ev-bat (bat-events params enroll-pts enroll-weights
                           t-pts n-per-arm n-total)

        ;; GPS arm arrays (falls back to BAT when family unknown)
        s-gps  (gps/gps-survival
                family params t-pts s-bat)
        ev-gps (gps/gps-events
                family params enroll-pts enroll-weights
                t-pts n-per-arm n-total ev-bat)

        ;; Pooled / total
        s-pool   (np/multiply (np/add s-bat s-gps) 0.5)
        ev-total (np/add ev-bat ev-gps)

        ;; Convert to plain arrays
        t-arr       (np/nd-to-array t-pts)
        s-bat-arr   (np/nd-to-array s-bat)
        s-gps-arr   (np/nd-to-array s-gps)
        s-pool-arr  (np/nd-to-array s-pool)

        ;; Alive counts
        alive-bat   (alive-series enroll-pts enroll-weights
                                  t-pts n-per-arm n-total ev-bat)
        alive-gps   (alive-series enroll-pts enroll-weights
                                  t-pts n-per-arm n-total ev-gps)
        alive-total (np/add alive-bat alive-gps)

        alive-bat-arr   (np/nd-to-array alive-bat)
        alive-gps-arr   (np/nd-to-array alive-gps)
        alive-total-arr (np/nd-to-array alive-total)

        ;; Milestone arrays
        t-milestones (np/array #js [0.0
                                    (:t-ia config)
                                    (:t-upd config)
                                    (:t-pr3 config)]
                               "float64")
        ms-ev-bat (milestone-events
                   params enroll-pts enroll-weights
                   t-milestones n-per-arm n-total)
        ms-ev-gps (gps/gps-events
                   family params enroll-pts enroll-weights
                   t-milestones n-per-arm n-total ms-ev-bat)

        ms-enroll (enrollment/expected-arm-enrolled
                   enroll-pts enroll-weights
                   t-milestones n-per-arm n-total)
        ms-enroll-arr  (np/nd-to-array ms-enroll)
        ms-ev-bat-arr  (first (np/nd-to-array ms-ev-bat))
        ms-ev-gps-arr  (first (np/nd-to-array ms-ev-gps))
        alive-bat-ms   (mapv - ms-enroll-arr ms-ev-bat-arr)
        alive-gps-ms   (mapv - ms-enroll-arr ms-ev-gps-arr)
        t-ms-arr       (np/nd-to-array t-milestones)

        ;; Point functions for binary search
        s-bat-fn   (bat-point-fn  params)
        s-gps-fn   (gps-point-fn  family params)
        s-pool-fn  (fn [t] (* 0.5 (+ (s-bat-fn t) (s-gps-fn t))))

        ;; t=36 reference values
        t-36       (np/array #js [36] "float64")
        s-bat-36   (bat-survival params t-36)
        s-gps-36   (gps/gps-survival family params t-36 s-bat-36)
        s-pool-36  (np/multiply (np/add s-bat-36 s-gps-36) 0.5)

        s-bat-36-val  (first (np/nd-to-array s-bat-36))
        s-gps-36-val  (first (np/nd-to-array s-gps-36))
        s-pool-36-val (first (np/nd-to-array s-pool-36))

        ;; Shared helper for hr / hr-rates
        hr-args [ms-ev-bat-arr ms-ev-gps-arr
                 alive-bat-ms alive-gps-ms n-per-arm]
        hr-rates-args [ms-ev-bat-arr ms-ev-gps-arr
                       alive-bat-ms alive-gps-ms t-ms-arr
                       s-bat-fn s-gps-fn s-pool-fn]]

    {:survival
     (vec (concat
           (mapv #(hash-map :time %1 :survival %2 :group "Pooled")
                 t-arr s-pool-arr)
           (mapv #(hash-map :time %1 :survival %2 :group "GPS")
                 t-arr s-gps-arr)
           (mapv #(hash-map :time %1 :survival %2 :group "BAT")
                 t-arr s-bat-arr)
           [{:time 36 :survival s-pool-36-val :group "Pooled"}
            {:time 36 :survival s-gps-36-val  :group "GPS"}
            {:time 36 :survival s-bat-36-val  :group "BAT"}]))

     :accrual
     (vec (concat
           (mapv #(hash-map :time %1 :events %2 :group "Total")
                 t-arr (first (np/nd-to-array ev-total)))
           (mapv #(hash-map :time %1 :events %2 :group "GPS")
                 t-arr (first (np/nd-to-array ev-gps)))
           (mapv #(hash-map :time %1 :events %2 :group "BAT")
                 t-arr (first (np/nd-to-array ev-bat)))))

     :alive
     (let [n-tot n-total]
       (mapv (fn [t a-tot a-gps a-bat e-tot e-gps e-bat]
               {:time t
                :total-alive a-tot :gps-alive a-gps
                :bat-alive   a-bat
                :total-died  e-tot :gps-died  e-gps
                :bat-died    e-bat
                :total-died-diff (- n-tot   e-tot)
                :gps-died-diff   (- n-per-arm e-gps)
                :bat-died-diff   (- n-per-arm e-bat)})
             t-arr
             alive-total-arr alive-gps-arr alive-bat-arr
             (first (np/nd-to-array ev-total))
             (first (np/nd-to-array ev-gps))
             (first (np/nd-to-array ev-bat))))

     :hr
     (mapv #(apply calc-hr (concat % hr-args))
           [[0 1 "0-IA"] [1 2 "IA-UPD"] [2 3 "UPD-PR3"]])

     :hazard-rates
     (vec (concat
           (apply calc-hr-rates (concat [0 1 "0-IA"]   hr-rates-args))
           (apply calc-hr-rates (concat [1 2 "IA-UPD"] hr-rates-args))
           (apply calc-hr-rates (concat [2 3 "UPD-PR3"] hr-rates-args))))

     :alive-bat-ms alive-bat-ms
     :alive-gps-ms alive-gps-ms
     :t-ms-arr     t-ms-arr
     :n-per-arm    n-per-arm}))

;; ---------------------------------------------------------------------------
;; sim->interval-medians  (unchanged)
;; ---------------------------------------------------------------------------

(defn sim->interval-medians
  "Returns interval records with :median (mean-of-medians survival time
   from simulation) and :events (mean deaths) per arm per interval.
   Returns nil when sim-result is nil."
  [sim-result]
  (when sim-result
    (let [nan? js/Number.isNaN
          safe (fn [v] (if (nan? v) nil v))
          mk   (fn [interval group med ev]
                 {:interval interval
                  :median   (or (safe med) 0.0)
                  :events   (or (safe ev)  0.0)
                  :group    group})]
      [(mk "0-IA"   "GPS"
           (:mean-med-ia-gps  sim-result)
           (:mean-n-ia-gps    sim-result))
       (mk "0-IA"   "BAT"
           (:mean-med-ia-bat  sim-result)
           (:mean-n-ia-bat    sim-result))
       (mk "0-IA"   "Pooled"
           (:mean-med-ia-pool sim-result)
           (+ (or (:mean-n-ia-bat sim-result) 0)
              (or (:mean-n-ia-gps sim-result) 0)))
       (mk "IA-UPD" "GPS"
           (:mean-med-up-gps  sim-result)
           (- (or (:mean-n-up-gps  sim-result) 0)
              (or (:mean-n-ia-gps  sim-result) 0)))
       (mk "IA-UPD" "BAT"
           (:mean-med-up-bat  sim-result)
           (- (or (:mean-n-up-bat  sim-result) 0)
              (or (:mean-n-ia-bat  sim-result) 0)))
       (mk "IA-UPD" "Pooled"
           (:mean-med-up-pool sim-result)
           (- (+ (or (:mean-n-up-bat sim-result) 0)
                 (or (:mean-n-up-gps sim-result) 0))
              (+ (or (:mean-n-ia-bat sim-result) 0)
                 (or (:mean-n-ia-gps sim-result) 0))))
       (mk "UPD-PR3" "GPS"
           (:mean-med-pr3-gps  sim-result)
           (- (or (:mean-n-pr3-gps sim-result) 0)
              (or (:mean-n-up-gps  sim-result) 0)))
       (mk "UPD-PR3" "BAT"
           (:mean-med-pr3-bat  sim-result)
           (- (or (:mean-n-pr3-bat sim-result) 0)
              (or (:mean-n-up-bat  sim-result) 0)))
       (mk "UPD-PR3" "Pooled"
           (:mean-med-pr3-pool sim-result)
           (- (+ (or (:mean-n-pr3-bat sim-result) 0)
                 (or (:mean-n-pr3-gps sim-result) 0))
              (+ (or (:mean-n-up-bat  sim-result) 0)
                 (or (:mean-n-up-gps  sim-result) 0))))])))
