(ns app.discovery-calc
  (:require [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [cljs.numpy :as np]))

(defn calculate-stats
  "Calculates expected events, variance, and z-scores for milestones.
   Validates standard deviation and deviation relative to target events
   across IA, UPD, and PR3 milestones under parametric model."
  [family params config]
  (let [[enroll-pts enroll-weights] (enrollment/expected-enrollment-times
                                      config)
        target-times (np/array #js [(:t-ia config)
                                    (:t-upd config)
                                    (:t-pr3 config)] "float64")

        bat-med-arr (np/array #js [(:bat-med params)])
        bat-shape-arr (np/array #js [(:weibull-k params)])
        bat-scale (survival/weibull-scale-from-median
                    bat-med-arr bat-shape-arr)
        bat-shape bat-shape-arr

        bat-res (enrollment/expected-arm-events-and-variance
                  survival/weibull-survival-probability
                  [bat-scale bat-shape]
                  enroll-pts enroll-weights target-times
                  (:n-per-arm config) (:n-total config))

        gps-res (cond
                  (= family "weibull")
                  (let [med (np/array #js [(:gps-med params)])
                        shape (np/array #js [(:weibull-k params)])
                        scale (survival/weibull-scale-from-median med shape)]
                    (enrollment/expected-arm-events-and-variance
                      survival/weibull-survival-probability
                      [scale shape]
                      enroll-pts enroll-weights target-times
                      (:n-per-arm config) (:n-total config)))

                  (= family "cure")
                  (let [med (np/array #js [(:gps-med params)])
                        shape (np/array #js [(:weibull-k params)])
                        scale (survival/weibull-scale-from-median med shape)
                        cf (np/array #js [(:cure-frac params)])]
                    (enrollment/expected-arm-events-and-variance
                      survival/cure-survival-probability
                      [cf scale shape]
                      enroll-pts enroll-weights target-times
                      (:n-per-arm config) (:n-total config)))

                  (= family "leaky")
                  (let [med (np/array #js [(:gps-med params)])
                        shape (np/array #js [(:weibull-k params)])
                        scale (survival/weibull-scale-from-median med shape)
                        cf (np/array #js [(:cure-frac params)])
                        leak (np/array #js [(:leak-yr params)])]
                    (enrollment/expected-arm-events-and-variance
                      survival/leaky-cure-survival-probability
                      [cf scale shape leak]
                      enroll-pts enroll-weights target-times
                      (:n-per-arm config) (:n-total config))))

        exp-bat (np/nd-to-array (:events bat-res))
        var-bat (np/nd-to-array (:variance bat-res))
        exp-gps (np/nd-to-array (:events gps-res))
        var-gps (np/nd-to-array (:variance gps-res))

        targets [(:n-ev-ia config) (:n-ev-upd config) (:n-ev-pr3 config)]
        labels ["IA (46.0m)" "UPD (58.0m)" "PR3 (62.97m)"]]

    (mapv (fn [label target e-bat v-bat e-gps v-gps]
            (let [expected (+ e-bat e-gps)
                  variance (+ v-bat v-gps)
                  sd (js/Math.sqrt variance)
                  std-dev (/ (- expected target) sd)]
              {:label label
               :target target
               :expected expected
               :sd sd
               :std-dev std-dev}))
          labels targets (first exp-bat) (first var-bat)
          (first exp-gps) (first var-gps))))

(defn calculate-curves
  "Computes complete curve data including survival probability grids,
   event accrual projections, and group-specific analytical medians.
   Utilizes binary search for calculating exact median survival times."
  [family params config]
  (let [t-max 80
        t-pts (np/linspace 0 t-max 200)
        [enroll-pts enroll-weights] (enrollment/expected-enrollment-times
                                      config)

        bat-med-arr (np/array #js [(:bat-med params)])
        bat-shape-arr (np/array #js [(:weibull-k params)])
        bat-scale (survival/weibull-scale-from-median
                    bat-med-arr bat-shape-arr)
        bat-shape bat-shape-arr

        s-bat (survival/weibull-survival-probability t-pts bat-scale bat-shape)

        ev-bat (enrollment/expected-arm-events
                 survival/weibull-survival-probability
                 [bat-scale bat-shape]
                 enroll-pts enroll-weights t-pts
                 (:n-per-arm config) (:n-total config))

        [s-gps ev-gps]
        (cond
          (= family "weibull")
          (let [med (np/array #js [(:gps-med params)])
                shape (np/array #js [(:weibull-k params)])
                scale (survival/weibull-scale-from-median med shape)]
            [(survival/weibull-survival-probability t-pts scale shape)
             (enrollment/expected-arm-events
               survival/weibull-survival-probability
               [scale shape]
               enroll-pts enroll-weights t-pts
               (:n-per-arm config) (:n-total config))])

          (= family "cure")
          (let [med (np/array #js [(:gps-med params)])
                shape (np/array #js [(:weibull-k params)])
                scale (survival/weibull-scale-from-median med shape)
                cf (np/array #js [(:cure-frac params)])]
            [(survival/cure-survival-probability t-pts cf scale shape)
             (enrollment/expected-arm-events
               survival/cure-survival-probability
               [cf scale shape]
               enroll-pts enroll-weights t-pts
               (:n-per-arm config) (:n-total config))])

          (= family "leaky")
          (let [med (np/array #js [(:gps-med params)])
                shape (np/array #js [(:weibull-k params)])
                scale (survival/weibull-scale-from-median med shape)
                cf (np/array #js [(:cure-frac params)])
                leak (np/array #js [(:leak-yr params)])]
            [(survival/leaky-cure-survival-probability t-pts cf scale shape leak)
             (enrollment/expected-arm-events
               survival/leaky-cure-survival-probability
               [cf scale shape leak]
               enroll-pts enroll-weights t-pts
               (:n-per-arm config) (:n-total config))]))

        s-pool (np/multiply (np/add s-bat s-gps) 0.5)
        ev-total (np/add ev-bat ev-gps)
        t-arr (np/nd-to-array t-pts)
        s-bat-arr (np/nd-to-array s-bat)
        s-gps-arr (np/nd-to-array s-gps)
        s-pool-arr (np/nd-to-array s-pool)

        enrolled-bat (enrollment/expected-arm-enrolled
                       enroll-pts enroll-weights t-pts
                       (:n-per-arm config) (:n-total config))
        enrolled-gps (enrollment/expected-arm-enrolled
                       enroll-pts enroll-weights t-pts
                       (:n-per-arm config) (:n-total config))
        ev-bat-1d (np/reshape ev-bat #js [(.-size ^js ev-bat)])
        ev-gps-1d (np/reshape ev-gps #js [(.-size ^js ev-gps)])
        alive-bat (np/subtract enrolled-bat ev-bat-1d)
        alive-gps (np/subtract enrolled-gps ev-gps-1d)
        alive-total (np/add alive-bat alive-gps)

        alive-bat-arr (np/nd-to-array alive-bat)
        alive-gps-arr (np/nd-to-array alive-gps)
        alive-total-arr (np/nd-to-array alive-total)

        ;; Calculate Hazard Ratios for milestones: 0-IA, IA-UPD, UPD-PR3
        t-milestones (np/array #js [0.0
                                    (:t-ia config)
                                    (:t-upd config)
                                    (:t-pr3 config)] "float64")
        ms-enroll-bat (enrollment/expected-arm-enrolled
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config))
        ms-enroll-gps (enrollment/expected-arm-enrolled
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config))
        ms-ev-bat (enrollment/expected-arm-events
                    survival/weibull-survival-probability
                    [bat-scale bat-shape]
                    enroll-pts enroll-weights t-milestones
                    (:n-per-arm config) (:n-total config))
        ms-ev-gps (cond
                    (= family "weibull")
                    (let [med (np/array #js [(:gps-med params)])
                          shape (np/array #js [(:weibull-k params)])
                          scale (survival/weibull-scale-from-median
                                  med shape)]
                      (enrollment/expected-arm-events
                        survival/weibull-survival-probability
                        [scale shape]
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config)))
                    (= family "cure")
                    (let [med (np/array #js [(:gps-med params)])
                          shape (np/array #js [(:weibull-k params)])
                          scale (survival/weibull-scale-from-median
                                  med shape)
                          cf (np/array #js [(:cure-frac params)])]
                      (enrollment/expected-arm-events
                        survival/cure-survival-probability
                        [cf scale shape]
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config)))
                    (= family "leaky")
                    (let [med (np/array #js [(:gps-med params)])
                          shape (np/array #js [(:weibull-k params)])
                          scale (survival/weibull-scale-from-median
                                  med shape)
                          cf (np/array #js [(:cure-frac params)])
                          leak (np/array #js [(:leak-yr params)])]
                      (enrollment/expected-arm-events
                        survival/leaky-cure-survival-probability
                        [cf scale shape leak]
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config))))

        ms-enroll-bat-arr (np/nd-to-array ms-enroll-bat)
        ms-enroll-gps-arr (np/nd-to-array ms-enroll-gps)
        ms-ev-bat-arr (first (np/nd-to-array ms-ev-bat))
        ms-ev-gps-arr (first (np/nd-to-array ms-ev-gps))
        alive-bat-ms (mapv - ms-enroll-bat-arr ms-ev-bat-arr)
        alive-gps-ms (mapv - ms-enroll-gps-arr ms-ev-gps-arr)

        n-per-arm (:n-per-arm config)
        calc-hr (fn [t1 t2 label]
                  (let [ev-gps-int (- (nth ms-ev-gps-arr t2)
                                      (nth ms-ev-gps-arr t1))
                        ev-bat-int (- (nth ms-ev-bat-arr t2)
                                      (nth ms-ev-bat-arr t1))
                        alive-gps-t1 (if (zero? t1)
                                       n-per-arm
                                       (nth alive-gps-ms t1))
                        alive-bat-t1 (if (zero? t1)
                                       n-per-arm
                                       (nth alive-bat-ms t1))
                        h-gps (if (pos? alive-gps-t1)
                                (/ ev-gps-int alive-gps-t1)
                                0.0)
                        h-bat (if (pos? alive-bat-t1)
                                (/ ev-bat-int alive-bat-t1)
                                0.0)]
                    {:interval label
                     :hr (if (pos? h-bat) (/ h-gps h-bat) 0.0)}))
        hr-data [(calc-hr 0 1 "0-IA")
                 (calc-hr 1 2 "IA-UPD")
                 (calc-hr 2 3 "UPD-PR3")]

        t-ms-arr (np/nd-to-array t-milestones)

        s-bat-fn (fn [t]
                   (let [t-arr (np/array #js [t] "float64")]
                     (first (np/nd-to-array
                              (survival/weibull-survival-probability
                                t-arr bat-scale bat-shape)))))

        gps-med-arr (np/array #js [(:gps-med params)])
        gps-shape-arr (np/array #js [(:weibull-k params)])
        gps-scale (survival/weibull-scale-from-median gps-med-arr gps-shape-arr)
        gps-cf (np/array #js [(:cure-frac params)])
        gps-leak (np/array #js [(:leak-yr params)])

        s-gps-fn (fn [t]
                   (let [t-arr (np/array #js [t] "float64")]
                     (first (np/nd-to-array
                              (cond
                                (= family "weibull")
                                (survival/weibull-survival-probability
                                  t-arr gps-scale gps-shape-arr)
                                (= family "cure")
                                (survival/cure-survival-probability
                                  t-arr gps-cf gps-scale gps-shape-arr)
                                (= family "leaky")
                                (survival/leaky-cure-survival-probability
                                  t-arr gps-cf gps-scale gps-shape-arr gps-leak))))))

        s-pool-fn (fn [t]
                    (* 0.5 (+ (s-bat-fn t) (s-gps-fn t))))

        find-interval-median (fn [s-fn t1 t2]
                               (let [target (* 0.5 (+ (s-fn t1) (s-fn t2)))]
                                 (loop [low t1
                                        high t2
                                        iters 0]
                                   (if (>= iters 30)
                                     (* 0.5 (+ low high))
                                     (let [mid (* 0.5 (+ low high))
                                           v (s-fn mid)]
                                       (if (> v target)
                                         (recur mid high (inc iters))
                                         (recur low mid (inc iters))))))))

        calc-hr-rates
        (fn [t1 t2 label]
          (let [t-start (nth t-ms-arr t1)
                t-end   (nth t-ms-arr t2)
                ev-gps-int (- (nth ms-ev-gps-arr t2)
                              (nth ms-ev-gps-arr t1))
                ev-bat-int (- (nth ms-ev-bat-arr t2)
                              (nth ms-ev-bat-arr t1))
                med-gps (find-interval-median s-gps-fn t-start t-end)
                med-bat (find-interval-median s-bat-fn t-start t-end)
                med-pool (find-interval-median s-pool-fn t-start t-end)]
            [{:interval label :median med-gps
              :events ev-gps-int :group "GPS"}
             {:interval label :median med-bat
              :events ev-bat-int :group "BAT"}
             {:interval label :median med-pool
              :events (+ ev-gps-int ev-bat-int)
              :group "Pooled"}]))

        ;; Add exact t=36 values
        t-36 (np/array #js [36] "float64")
        s-bat-36 (survival/weibull-survival-probability t-36 bat-scale bat-shape)
        s-gps-36 (cond
                   (= family "weibull")
                   (let [med (np/array #js [(:gps-med params)])
                         shape (np/array #js [(:weibull-k params)])
                         scale (survival/weibull-scale-from-median med shape)]
                     (survival/weibull-survival-probability t-36 scale shape))
                   (= family "cure")
                   (let [med (np/array #js [(:gps-med params)])
                         shape (np/array #js [(:weibull-k params)])
                         scale (survival/weibull-scale-from-median med shape)
                         cf (np/array #js [(:cure-frac params)])]
                     (survival/cure-survival-probability t-36 cf scale shape))
                   (= family "leaky")
                   (let [med (np/array #js [(:gps-med params)])
                         shape (np/array #js [(:weibull-k params)])
                         scale (survival/weibull-scale-from-median med shape)
                         cf (np/array #js [(:cure-frac params)])
                         leak (np/array #js [(:leak-yr params)])]
                     (survival/leaky-cure-survival-probability t-36 cf scale shape leak)))
        s-pool-36 (np/multiply (np/add s-bat-36 s-gps-36) 0.5)
        s-bat-36-val (first (np/nd-to-array s-bat-36))
        s-gps-36-val (first (np/nd-to-array s-gps-36))
        s-pool-36-val (first (np/nd-to-array s-pool-36))]

    {:survival (vec (concat
                      (mapv (fn [t s] {:time t :survival s :group "Pooled"})
                            t-arr s-pool-arr)
                      (mapv (fn [t s] {:time t :survival s :group "GPS"})
                            t-arr s-gps-arr)
                      (mapv (fn [t s] {:time t :survival s :group "BAT"})
                            t-arr s-bat-arr)
                      [{:time 36 :survival s-pool-36-val :group "Pooled"}
                       {:time 36 :survival s-gps-36-val :group "GPS"}
                       {:time 36 :survival s-bat-36-val :group "BAT"}]))
     :accrual (vec (concat
                     (mapv (fn [t e]
                             {:time t :events e :group "Total"})
                           t-arr (first (np/nd-to-array ev-total)))
                     (mapv (fn [t e]
                             {:time t :events e :group "GPS"})
                           t-arr (first (np/nd-to-array ev-gps)))
                     (mapv (fn [t e]
                             {:time t :events e :group "BAT"})
                           t-arr (first (np/nd-to-array ev-bat)))))
     :alive (let [n-tot (:n-total config)]
               (mapv (fn [t a-tot a-gps a-bat e-tot e-gps e-bat]
                       {:time t
                        :total-alive a-tot
                        :gps-alive a-gps
                        :bat-alive a-bat
                        :total-died e-tot
                        :gps-died e-gps
                        :bat-died e-bat
                        :total-died-diff (- n-tot e-tot)
                        :gps-died-diff (- n-per-arm e-gps)
                        :bat-died-diff (- n-per-arm e-bat)})
                     t-arr
                     alive-total-arr
                     alive-gps-arr
                     alive-bat-arr
                     (first (np/nd-to-array ev-total))
                     (first (np/nd-to-array ev-gps))
                     (first (np/nd-to-array ev-bat))))
     :hr hr-data
     :hazard-rates (vec (concat
                         (calc-hr-rates 0 1 "0-IA")
                         (calc-hr-rates 1 2 "IA-UPD")
                         (calc-hr-rates 2 3 "UPD-PR3")))
     :alive-bat-ms alive-bat-ms
     :alive-gps-ms alive-gps-ms
     :t-ms-arr t-ms-arr
     :n-per-arm n-per-arm}))

(defn sim->interval-medians
  "Returns interval records with :median (mean-of-medians survival time
   from simulation) and :events (mean deaths) per arm per interval.
   Returns nil when sim-result is nil."
  [sim-result]
  (when sim-result
    (let [nan? js/Number.isNaN
          safe (fn [v] (if (nan? v) nil v))
          mk (fn [interval group med ev]
               {:interval interval
                :median   (or (safe med) 0.0)
                :events   (or (safe ev) 0.0)
                :group    group})]
      [(mk "0-IA"    "GPS"    (:mean-med-ia-gps  sim-result)
           (:mean-n-ia-gps  sim-result))
       (mk "0-IA"    "BAT"    (:mean-med-ia-bat  sim-result)
           (:mean-n-ia-bat  sim-result))
       (mk "0-IA"    "Pooled" (:mean-med-ia-pool sim-result)
           (+ (or (:mean-n-ia-bat sim-result) 0)
              (or (:mean-n-ia-gps sim-result) 0)))
       (mk "IA-UPD"  "GPS"    (:mean-med-up-gps  sim-result)
           (- (or (:mean-n-up-gps sim-result) 0)
              (or (:mean-n-ia-gps sim-result) 0)))
       (mk "IA-UPD"  "BAT"    (:mean-med-up-bat  sim-result)
           (- (or (:mean-n-up-bat sim-result) 0)
              (or (:mean-n-ia-bat sim-result) 0)))
       (mk "IA-UPD"  "Pooled" (:mean-med-up-pool sim-result)
           (- (+ (or (:mean-n-up-bat sim-result) 0)
                 (or (:mean-n-up-gps sim-result) 0))
              (+ (or (:mean-n-ia-bat sim-result) 0)
                 (or (:mean-n-ia-gps sim-result) 0))))
       (mk "UPD-PR3" "GPS"    (:mean-med-pr3-gps  sim-result)
           (- (or (:mean-n-pr3-gps sim-result) 0)
              (or (:mean-n-up-gps  sim-result) 0)))
       (mk "UPD-PR3" "BAT"    (:mean-med-pr3-bat  sim-result)
           (- (or (:mean-n-pr3-bat sim-result) 0)
              (or (:mean-n-up-bat  sim-result) 0)))
       (mk "UPD-PR3" "Pooled" (:mean-med-pr3-pool sim-result)
           (- (+ (or (:mean-n-pr3-bat sim-result) 0)
                 (or (:mean-n-pr3-gps sim-result) 0))
              (+ (or (:mean-n-up-bat  sim-result) 0)
                 (or (:mean-n-up-gps  sim-result) 0))))])))
