(ns app.discovery.calc
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

        targets [(:n-ev-ia config)
                 (:n-ev-upd config)
                 (:n-ev-pr3 config)]
        times   [(:t-ia config)
                 (:t-upd config)
                 (:t-pr3 config)]
        names   ["IA" "UPD" "PR3"]
        labels  [(str "IA (" (:t-ia config) "m)")
                 (str "UPD (" (:t-upd config) "m)")
                 (str "PR3 (" (:t-pr3 config) "m)")]
        exp-bat (np/nd-to-array (:events bat-res))
        var-bat (np/nd-to-array (:variance bat-res))
        exp-gps (np/nd-to-array (:events gps-res))
        var-gps (np/nd-to-array (:variance gps-res))]

    (mapv (fn [name label time target e-bat v-bat e-gps v-gps]
            (let [expected (+ e-bat e-gps)
                  variance (+ v-bat v-gps)
                  sd       (js/Math.sqrt variance)
                  std-dev  (/ (- expected target) sd)]
              {:name     name
               :label    label
               :time     time
               :target   target
               :expected expected
               :sd       sd
               :std-dev  std-dev}))
          names labels times targets
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
  [t1 t2 label ms-events-bat-arr ms-events-gps-arr alive-bat-ms
   alive-gps-ms n-per-arm]
  (let [events-gps (- (nth ms-events-gps-arr t2) (nth ms-events-gps-arr t1))
        events-bat (- (nth ms-events-bat-arr t2) (nth ms-events-bat-arr t1))
        a-gps  (if (zero? t1) n-per-arm (nth alive-gps-ms t1))
        a-bat  (if (zero? t1) n-per-arm (nth alive-bat-ms t1))
        h-gps  (if (pos? a-gps) (/ events-gps a-gps) 0.0)
        h-bat  (if (pos? a-bat) (/ events-bat a-bat) 0.0)]
    {:interval label
     :hr (if (pos? h-bat) (/ h-gps h-bat) 0.0)}))

;; ---------------------------------------------------------------------------
;; Hazard-rate records (analytical)
;; ---------------------------------------------------------------------------

(defn- calc-hr-rates
  "Returns GPS/BAT/Pooled hazard-rate records for milestone interval."
  [t1 t2 label ms-events-bat-arr ms-events-gps-arr alive-bat-ms
   alive-gps-ms t-ms-arr survival-bat-fn survival-gps-fn survival-pooled-fn]
  (let [t-start   (nth t-ms-arr t1)
        t-end     (nth t-ms-arr t2)
        events-gps    (- (nth ms-events-gps-arr t2) (nth ms-events-gps-arr t1))
        events-bat    (- (nth ms-events-bat-arr t2) (nth ms-events-bat-arr t1))
        med-gps   (find-interval-median survival-gps-fn  t-start t-end)
        med-bat   (find-interval-median survival-bat-fn  t-start t-end)
        med-pool  (find-interval-median survival-pooled-fn t-start t-end)]
    [{:interval label :median med-gps  :events events-gps
      :group "GPS"}
     {:interval label :median med-bat  :events events-bat
      :group "BAT"}
     {:interval label :median med-pool
      :events (+ events-gps events-bat) :group "Pooled"}]))

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
        survival-bat  (bat-survival  params t-pts)
        events-bat (bat-events params enroll-pts enroll-weights
                               t-pts n-per-arm n-total)

        ;; GPS arm arrays (falls back to BAT when family unknown)
        survival-gps  (gps/gps-survival
                       family params t-pts survival-bat)
        events-gps (gps/gps-events
                    family params enroll-pts enroll-weights
                    t-pts n-per-arm n-total events-bat)

        ;; Pooled / total
        survival-pooled   (np/multiply (np/add survival-bat survival-gps) 0.5)
        events-total (np/add events-bat events-gps)

        ;; Convert to plain arrays
        t-arr       (np/nd-to-array t-pts)
        survival-bat-arr   (np/nd-to-array survival-bat)
        survival-gps-arr   (np/nd-to-array survival-gps)
        survival-pooled-arr  (np/nd-to-array survival-pooled)

        ;; Alive counts
        alive-bat   (alive-series enroll-pts enroll-weights
                                  t-pts n-per-arm n-total events-bat)
        alive-gps   (alive-series enroll-pts enroll-weights
                                  t-pts n-per-arm n-total events-gps)
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
        ms-events-bat (milestone-events
                       params enroll-pts enroll-weights
                       t-milestones n-per-arm n-total)
        ms-events-gps (gps/gps-events
                       family params enroll-pts enroll-weights
                       t-milestones n-per-arm n-total ms-events-bat)

        ms-enroll (enrollment/expected-arm-enrolled
                   enroll-pts enroll-weights
                   t-milestones n-per-arm n-total)
        ms-enroll-arr  (np/nd-to-array ms-enroll)
        ms-events-bat-arr  (first (np/nd-to-array ms-events-bat))
        ms-events-gps-arr  (first (np/nd-to-array ms-events-gps))
        alive-bat-ms   (mapv - ms-enroll-arr ms-events-bat-arr)
        alive-gps-ms   (mapv - ms-enroll-arr ms-events-gps-arr)
        t-ms-arr       (np/nd-to-array t-milestones)

        ;; Point functions for binary search
        survival-bat-fn   (bat-point-fn  params)
        survival-gps-fn   (gps-point-fn  family params)
        survival-pooled-fn  (fn [t] (* 0.5 (+ (survival-bat-fn t) (survival-gps-fn t))))

        ;; t=36 reference values
        t-36       (np/array #js [36] "float64")
        survival-bat-36   (bat-survival params t-36)
        survival-gps-36   (gps/gps-survival family params t-36 survival-bat-36)
        survival-pooled-36  (np/multiply (np/add survival-bat-36 survival-gps-36) 0.5)

        survival-bat-36-val  (first (np/nd-to-array survival-bat-36))
        survival-gps-36-val  (first (np/nd-to-array survival-gps-36))
        survival-pooled-36-val (first (np/nd-to-array survival-pooled-36))

        ;; Shared helper for hr / hr-rates
        hr-args [ms-events-bat-arr ms-events-gps-arr
                 alive-bat-ms alive-gps-ms n-per-arm]
        hr-rates-args [ms-events-bat-arr ms-events-gps-arr
                       alive-bat-ms alive-gps-ms t-ms-arr
                       survival-bat-fn survival-gps-fn survival-pooled-fn]]

    {:survival
     (vec (concat
           (mapv #(hash-map :time %1 :survival %2 :group "Pooled")
                 t-arr survival-pooled-arr)
           (mapv #(hash-map :time %1 :survival %2 :group "GPS")
                 t-arr survival-gps-arr)
           (mapv #(hash-map :time %1 :survival %2 :group "BAT")
                 t-arr survival-bat-arr)
           [{:time 36 :survival survival-pooled-36-val :group "Pooled"}
            {:time 36 :survival survival-gps-36-val  :group "GPS"}
            {:time 36 :survival survival-bat-36-val  :group "BAT"}]))

     :accrual
     (vec (concat
           (mapv #(hash-map :time %1 :events %2 :group "Total")
                 t-arr (first (np/nd-to-array events-total)))
           (mapv #(hash-map :time %1 :events %2 :group "GPS")
                 t-arr (first (np/nd-to-array events-gps)))
           (mapv #(hash-map :time %1 :events %2 :group "BAT")
                 t-arr (first (np/nd-to-array events-bat)))))

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
             (first (np/nd-to-array events-total))
             (first (np/nd-to-array events-gps))
             (first (np/nd-to-array events-bat))))

     :hr
     (mapv #(apply calc-hr (concat % hr-args))
           [[0 1 "0-IA"] [1 2 "IA-UPD"] [2 3 "UPD-PR3"]])

     :hazard-rates
     (vec (concat
           (apply calc-hr-rates (concat [0 1 "0-IA"]   hr-rates-args))
           (apply calc-hr-rates (concat [1 2 "IA-UPD"] hr-rates-args))
           (apply calc-hr-rates (concat [2 3 "UPD-PR3"] hr-rates-args))))

     :alive-bat-ms  alive-bat-ms
     :alive-gps-ms  alive-gps-ms
     :t-ms-arr      t-ms-arr
     :n-per-arm     n-per-arm
     :ms-events-bat-arr ms-events-bat-arr
     :ms-events-gps-arr ms-events-gps-arr}))

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
           (:mean-med-interim-analysis-gps  sim-result)
           (:mean-n-interim-analysis-gps    sim-result))
       (mk "0-IA"   "BAT"
           (:mean-med-interim-analysis-bat  sim-result)
           (:mean-n-interim-analysis-bat    sim-result))
       (mk "0-IA"   "Pooled"
           (:mean-med-interim-analysis-pool sim-result)
           (+ (or (:mean-n-interim-analysis-bat sim-result) 0)
              (or (:mean-n-interim-analysis-gps sim-result) 0)))
       (mk "IA-UPD" "GPS"
           (:mean-med-update-gps  sim-result)
           (- (or (:mean-n-update-gps  sim-result) 0)
              (or (:mean-n-interim-analysis-gps  sim-result) 0)))
       (mk "IA-UPD" "BAT"
           (:mean-med-update-bat  sim-result)
           (- (or (:mean-n-update-bat  sim-result) 0)
              (or (:mean-n-interim-analysis-bat  sim-result) 0)))
       (mk "IA-UPD" "Pooled"
           (:mean-med-update-pool sim-result)
           (- (+ (or (:mean-n-update-bat sim-result) 0)
                 (or (:mean-n-update-gps sim-result) 0))
              (+ (or (:mean-n-interim-analysis-bat sim-result) 0)
                 (or (:mean-n-interim-analysis-gps sim-result) 0))))
       (mk "UPD-PR3" "GPS"
           (:mean-med-press-release-3-gps  sim-result)
           (- (or (:mean-n-press-release-3-gps sim-result) 0)
              (or (:mean-n-update-gps  sim-result) 0)))
       (mk "UPD-PR3" "BAT"
           (:mean-med-press-release-3-bat  sim-result)
           (- (or (:mean-n-press-release-3-bat sim-result) 0)
              (or (:mean-n-update-bat  sim-result) 0)))
       (mk "UPD-PR3" "Pooled"
           (:mean-med-press-release-3-pool sim-result)
           (- (+ (or (:mean-n-press-release-3-bat sim-result) 0)
                 (or (:mean-n-press-release-3-gps sim-result) 0))
              (+ (or (:mean-n-update-bat  sim-result) 0)
                 (or (:mean-n-update-gps  sim-result) 0))))])))

(defn- population-cr2-lambda
  "Calculates lambda given IRM (experimental mOS), D (delay), and k."
  [irm d k]
  (let [numerator   (- (js/Math.pow (+ irm d) k) (js/Math.pow d k))
        denominator (js/Math.log 2)
        base        (/ numerator denominator)
        exponent    (/ 1.0 k)]
    (js/Math.pow base exponent)))

(defn- find-true-mos [s-fn]
  (if (and s-fn (< (s-fn 1000.0) 0.5))
    (loop [low 0.0 high 1000.0 i 0]
      (if (>= i 30)
        (* 0.5 (+ low high))
        (let [mid (* 0.5 (+ low high))]
          (if (> (s-fn mid) 0.5)
            (recur mid high (inc i))
            (recur low mid (inc i))))))
    js/Infinity))

(defn- find-realized-median-month
  "Finds the trial month where the expected events reach target-ev."
  [s-fn args enroll-pts enroll-weights n-per-arm n-total target-ev]
  (let [ev-fn (fn [t]
                (let [ta (np/array #js [t] "float64")
                      ev (enrollment/expected-arm-events
                          s-fn args enroll-pts enroll-weights ta
                          n-per-arm n-total)]
                  (first (np/nd-to-array ev))))]
    (if (< (ev-fn 200.0) target-ev)
      js/Infinity
      (loop [low 0.0 high 200.0 i 0]
        (if (>= i 30)
          (* 0.5 (+ low high))
          (let [mid (* 0.5 (+ low high))]
            (if (< (ev-fn mid) target-ev)
              (recur mid high (inc i))
              (recur low mid (inc i)))))))))

(defn calculate-medians [family params config]
  (let [delay (or (:delay params) 3.0)
        k (:weibull-k params)
        [enroll-pts enroll-weights] (enrollment/expected-enrollment-times config)
        n-per-arm (:n-per-arm config)
        n-total (:n-total config)
        target-ev (/ n-per-arm 2.0)

        ;; BAT trial scale (without delay)
        bat-trial-scale (survival/weibull-scale-from-median
                         (np/array #js [(:bat-med params)])
                         (np/array #js [k]))
        bat-trial-scale-val (.item bat-trial-scale 0)

        ;; GPS trial scale (without delay)
        gps-trial-scale (survival/weibull-scale-from-median
                         (np/array #js [(:gps-med params)])
                         (np/array #js [k]))
        gps-trial-scale-val (.item gps-trial-scale 0)

        ;; True scale parameters (from CR2 onset)
        bat-true-scale-val (population-cr2-lambda (:bat-med params) delay k)
        gps-true-scale-val (population-cr2-lambda (:gps-med params) delay k)

        gps-cf (np/array #js [(or (:gps-cure-frac params) (:cure-frac params) 0.0)])
        gps-leak (np/array #js [(or (:gps-leak-yr params) (:leak-yr params) 0.0)])

        bat-cf (np/array #js [(or (:bat-cure-frac params) 0.0)])
        bat-leak (np/array #js [(or (:bat-leak-yr params) 0.0)])

        ;; survival functions (true scale)
        s-bat-true-fn
        (fn [t]
          (let [ta (np/array #js [t] "float64")]
            (first (np/nd-to-array
                    (case family
                      "cure" (survival/cure-survival-probability
                              ta bat-cf bat-true-scale-val k)
                      "leaky" (survival/leaky-cure-survival-probability
                               ta bat-cf bat-true-scale-val k bat-leak)
                      (survival/weibull-survival-probability
                       ta bat-true-scale-val k))))))

        s-gps-true-fn
        (fn [t]
          (let [ta (np/array #js [t] "float64")]
            (first (np/nd-to-array
                    (case family
                      "weibull" (survival/weibull-survival-probability
                                 ta gps-true-scale-val k)
                      "cure" (survival/cure-survival-probability
                              ta gps-cf gps-true-scale-val k)
                      "leaky" (survival/leaky-cure-survival-probability
                               ta gps-cf gps-true-scale-val k gps-leak)
                      (survival/weibull-survival-probability
                       ta gps-true-scale-val k))))))]
    (let [gps-mos (find-true-mos s-gps-true-fn)
          bat-mos (find-true-mos s-bat-true-fn)
          bat-true-mos (if (= bat-mos js/Infinity)
                         js/Infinity
                         (- bat-mos delay))]
      {:bat-true-mos bat-true-mos
       :gps-true-mos (if (= gps-mos js/Infinity)
                       js/Infinity
                       (- gps-mos delay))

       ;; Realized median month on trial timeline
       :bat-realized-month
       (find-realized-median-month
        (case family
          "weibull" survival/weibull-survival-probability
          "cure" survival/cure-survival-probability
          "leaky" survival/leaky-cure-survival-probability
          survival/weibull-survival-probability)
        (case family
          "weibull" [(np/array #js [bat-trial-scale-val]) (np/array #js [k])]
          "cure" [bat-cf (np/array #js [bat-trial-scale-val]) (np/array #js [k])]
          "leaky" [bat-cf (np/array #js [bat-trial-scale-val])
                   (np/array #js [k]) bat-leak]
          [(np/array #js [bat-trial-scale-val]) (np/array #js [k])])
        enroll-pts enroll-weights n-per-arm n-total target-ev)

       :gps-realized-month
       (find-realized-median-month
        (case family
          "weibull" survival/weibull-survival-probability
          "cure" survival/cure-survival-probability
          "leaky" survival/leaky-cure-survival-probability
          survival/weibull-survival-probability)
        (case family
          "weibull" [(np/array #js [gps-trial-scale-val]) (np/array #js [k])]
          "cure" [gps-cf (np/array #js [gps-trial-scale-val]) (np/array #js [k])]
          "leaky" [gps-cf (np/array #js [gps-trial-scale-val])
                   (np/array #js [k]) gps-leak]
          [(np/array #js [gps-trial-scale-val]) (np/array #js [k])])
        enroll-pts enroll-weights n-per-arm n-total target-ev)})))
