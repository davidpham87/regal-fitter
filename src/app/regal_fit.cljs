(ns app.regal-fit
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]
            [app.state :as state]))

(defn weibull-S [t scale shape]
  ;; np.exp(-np.power(np.clip(t, 0, None) / scale, shape))
  (let [clipped (np/clip t 0 np/inf)
        scaled (np/divide clipped scale)
        powered (np/power scaled shape)
        negated (np/subtract 0 powered)]
    (np/exp negated)))

(defn weibull-scale-from-median [median shape]
  ;; median / np.log(2.0) ** (1.0 / shape)
  (let [log2 (js/Math.log 2.0)
        inv-shape (/ 1.0 shape)
        denom (js/Math.pow log2 inv-shape)]
    (/ median denom)))

(defn cure-S [t p-cure unc-scale unc-shape]
  ;; p_cure + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)
  (let [unc (weibull-S t unc-scale unc-shape)
        unc-part (np/multiply unc (- 1.0 p-cure))]
    (np/add p-cure unc-part)))

(defn leaky-cure-S [t p-cure unc-scale unc-shape leak-rate-yr]
  ;; leak_rate_m = leak_rate_yr / 12.0
  ;; cured_S = np.exp(-leak_rate_m * np.clip(t, 0, None))
  ;; return p_cure * cured_S + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)
  (let [leak-rate-m (/ leak-rate-yr 12.0)
        clipped (np/clip t 0 np/inf)
        cured-power (np/multiply clipped (- leak-rate-m))
        cured-S (np/exp cured-power)
        cured-part (np/multiply cured-S p-cure)
        unc (weibull-S t unc-scale unc-shape)
        unc-part (np/multiply unc (- 1.0 p-cure))]
    (np/add cured-part unc-part)))

(defn expected-enrollment-times [cfg]
  (let [sub-per-unit 8
        bands (:enroll_bands cfg)
        pieces (atom [])
        weights (atom [])]
    (doseq [[lo hi n] bands]
      (let [n-sub (js/Math.max 2 (js/Math.floor (* (- hi lo) sub-per-unit)))
            e (np/add (np/linspace lo hi n-sub false) (/ (- hi lo) (* 2 n-sub)))
            w (np/full n-sub (/ n n-sub))]
        (swap! pieces conj e)
        (swap! weights conj w)))
    [(np/concatenate (into-array @pieces)) (np/concatenate (into-array @weights))]))

(defn expected-arm-events [survival-func params-grid e-pts e-weights cal-times n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        e-pts-2d (np/reshape e-pts [1 (.-size e-pts)])
        cal-times-2d (np/reshape cal-times [(.-size cal-times) 1])
        ;; fu is (T, E)
        fu (np/maximum (np/subtract cal-times-2d e-pts-2d) 0.0)
        g-size (.-size (first params-grid))
        t-size (.-size cal-times)
        out (np/empty [g-size t-size] "float64")
        chunk-size 4096]
    (loop [start 0]
      (when (< start g-size)
        (let [end (js/Math.min (+ start chunk-size) g-size)
              ;; Reshape params to (chunk, 1, 1)
              params-chunk (mapv (fn [p]
                                   (np/reshape (.slice p start end) [(- end start) 1 1]))
                                 params-grid)
              fu-3d (np/reshape fu [1 t-size (.-size e-pts)])
              s-res (apply survival-func fu-3d params-chunk)
              e-weights-3d (np/reshape e-weights [1 1 (.-size e-pts)])
              ev (np/multiply (np/sum (np/multiply (np/subtract 1.0 s-res) e-weights-3d) 2) arm-share)]
          (.set out ev start)
          (recur end))))
    out))

(defn cross-filter [cfg bat-ev gps-ev bat-params gps-params family bat-S-T gps-S-T]
  (let [gb (first (.-shape bat-ev))
        k (second (.-shape bat-ev))
        gg (first (.-shape gps-ev))
        apply-pool-mos (and bat-S-T gps-S-T (> (:pool_mos_min_at_ia cfg) 0))
        apply-pr3 (and (:use_pr3_anchor cfg) (>= k 3))
        accepted (atom [])
        chunk-size 2048]
    (loop [s 0]
      (when (< s gb)
        (let [e (js/Math.min (+ s chunk-size) gb)
              ;; bat-ev slice is (chunk, K). We need (chunk, 1, K)
              bat-ev-slice (.slice bat-ev s e)
              bat-ev-3d (np/reshape bat-ev-slice [(- e s) 1 k])
              ;; gps-ev is (Gg, K). We need (1, Gg, K)
              gps-ev-3d (np/reshape gps-ev [1 gg k])
              tot (np/add bat-ev-3d gps-ev-3d)

              ;; d-ia
              tot-0 (np/reshape (.slice tot ":" ":" 0) [(- e s) gg])
              d-ia (np/abs (np/subtract tot-0 (:n_ev_ia cfg)))
              ;; d-up
              tot-1 (np/reshape (.slice tot ":" ":" 1) [(- e s) gg])
              d-up (np/abs (np/subtract tot-1 (:n_ev_upd cfg)))

              tot-arr (.toArray tot)
              bat-S-T-arr (if apply-pool-mos (.toArray (.slice bat-S-T s e)) nil)
              gps-S-T-arr (if apply-pool-mos (.toArray gps-S-T) nil)]
          (dotimes [ib-local (- e s)]
            (let [ib (+ s ib-local)]
              (dotimes [ig gg]
                (let [t-ia (aget tot-arr ib-local ig 0)
                      t-up (aget tot-arr ib-local ig 1)
                      d-ia (js/Math.abs (- t-ia (:n_ev_ia cfg)))
                      d-up (js/Math.abs (- t-up (:n_ev_upd cfg)))]
                  (when (and (<= d-ia (:prefilter_tol_ia cfg))
                             (<= d-up (:prefilter_tol_upd cfg)))
                    (let [inc-ia-up (- t-up t-ia)
                          d-inc-ia-up (js/Math.abs (- inc-ia-up (- (:n_ev_upd cfg) (:n_ev_ia cfg))))
                          mask-inc (<= d-inc-ia-up (:tol_increment_ia_upd cfg))]
                      (when mask-inc
                        (let [pass-pr3 (if apply-pr3
                                         (let [t-pr3 (aget tot-arr ib-local ig 2)
                                               d-pr3 (js/Math.abs (- t-pr3 (:n_ev_pr3 cfg)))
                                               inc-up-pr3 (- t-pr3 t-up)
                                               d-inc-up-pr3 (js/Math.abs (- inc-up-pr3 (- (:n_ev_pr3 cfg) (:n_ev_upd cfg))))]
                                           (and (<= d-pr3 (:prefilter_tol_pr3 cfg))
                                                (<= d-inc-up-pr3 (:tol_increment_upd_pr3 cfg))))
                                         true)
                              pass-pool (if apply-pool-mos
                                          (>= (+ (aget bat-S-T-arr ib-local) (aget gps-S-T-arr ig)) 1.0)
                                          true)]
                          (when (and pass-pr3 pass-pool)
                            (let [rec {:family family
                                       :exp_ev_ia t-ia
                                       :exp_ev_upd t-up}]
                              (let [rec (if apply-pr3 (assoc rec :exp_ev_pr3 (aget tot-arr ib-local ig 2)) rec)
                                    rec (reduce (fn [acc [k v]] (assoc acc k (.item v ib))) rec bat-params)
                                    rec (reduce (fn [acc [k v]] (assoc acc k (.item v ig))) rec gps-params)]
                                (swap! accepted conj rec)))))))))))))
        (let [next-e (js/Math.min (+ s chunk-size) gb)]
          (recur next-e))))
    @accepted))

(defn apply-prefilter-weibull [cfg]
  (let [[e-pts e-weights] (expected-enrollment-times cfg)
        t-pts (np/array (if (:use_pr3_anchor cfg)
                          [(:t_ia cfg) (:t_upd cfg) (:t_pr3 cfg)]
                          [(:t_ia cfg) (:t_upd cfg)]) "float64")

        bat-meds (np/arange (nth (:bat_med_grid cfg) 0) (nth (:bat_med_grid cfg) 1) (nth (:bat_med_grid cfg) 2))
        bat-shapes (np/arange (nth (:bat_shape_grid cfg) 0) (nth (:bat_shape_grid cfg) 1) (nth (:bat_shape_grid cfg) 2))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (.ravel (first bat-mesh))
        bat-shape-flat (.ravel (second bat-mesh))
        bat-scale-flat (weibull-scale-from-median bat-med-flat bat-shape-flat)

        gps-meds (np/geomspace (:gps_med_grid_lo cfg) (:gps_med_grid_hi cfg) (:gps_med_grid_n cfg))
        gps-shapes (np/arange (nth (:gps_shape_grid cfg) 0) (nth (:gps_shape_grid cfg) 1) (nth (:gps_shape_grid cfg) 2))
        gps-mesh (np/meshgrid [gps-meds gps-shapes] #js {:indexing "ij"})
        gps-med-flat (.ravel (first gps-mesh))
        gps-shape-flat (.ravel (second gps-mesh))
        gps-scale-flat (weibull-scale-from-median gps-med-flat gps-shape-flat)

        bat-ev (expected-arm-events weibull-S [bat-scale-flat bat-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))
        gps-ev (expected-arm-events weibull-S [gps-scale-flat gps-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))

        T-pool (:pool_mos_min_at_ia cfg)
        bat-S-T (if (> T-pool 0) (weibull-S T-pool bat-scale-flat bat-shape-flat) nil)
        gps-S-T (if (> T-pool 0) (weibull-S T-pool gps-scale-flat gps-shape-flat) nil)]

    (cross-filter cfg bat-ev gps-ev
                  {:bat_med bat-med-flat :bat_shape bat-shape-flat :bat_scale bat-scale-flat}
                  {:gps_med gps-med-flat :gps_shape gps-shape-flat :gps_scale gps-scale-flat}
                  "weibull" bat-S-T gps-S-T)))

(defn apply-prefilter-cure [cfg]
  (let [[e-pts e-weights] (expected-enrollment-times cfg)
        t-pts (np/array (if (:use_pr3_anchor cfg)
                          [(:t_ia cfg) (:t_upd cfg) (:t_pr3 cfg)]
                          [(:t_ia cfg) (:t_upd cfg)]) "float64")

        bat-meds (np/arange (nth (:bat_med_grid cfg) 0) (nth (:bat_med_grid cfg) 1) (nth (:bat_med_grid cfg) 2))
        bat-shapes (np/arange (nth (:bat_shape_grid cfg) 0) (nth (:bat_shape_grid cfg) 1) (nth (:bat_shape_grid cfg) 2))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (.ravel (first bat-mesh))
        bat-shape-flat (.ravel (second bat-mesh))
        bat-scale-flat (weibull-scale-from-median bat-med-flat bat-shape-flat)

        cf-grid (np/arange (nth (:cure_frac_grid cfg) 0) (nth (:cure_frac_grid cfg) 1) (nth (:cure_frac_grid cfg) 2))
        unc-meds (np/arange (nth (:cure_unc_med_grid cfg) 0) (nth (:cure_unc_med_grid cfg) 1) (nth (:cure_unc_med_grid cfg) 2))
        unc-shapes (np/arange (nth (:cure_unc_shape_grid cfg) 0) (nth (:cure_unc_shape_grid cfg) 1) (nth (:cure_unc_shape_grid cfg) 2))
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes] #js {:indexing "ij"})
        cf-flat (.ravel (nth gps-mesh 0))
        unc-med-flat (.ravel (nth gps-mesh 1))
        unc-shape-flat (.ravel (nth gps-mesh 2))
        unc-scale-flat (weibull-scale-from-median unc-med-flat unc-shape-flat)

        bat-ev (expected-arm-events weibull-S [bat-scale-flat bat-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))
        gps-ev (expected-arm-events cure-S [cf-flat unc-scale-flat unc-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))

        T-pool (:pool_mos_min_at_ia cfg)
        bat-S-T (if (> T-pool 0) (weibull-S T-pool bat-scale-flat bat-shape-flat) nil)
        gps-S-T (if (> T-pool 0) (cure-S T-pool cf-flat unc-scale-flat unc-shape-flat) nil)]

    (cross-filter cfg bat-ev gps-ev
                  {:bat_med bat-med-flat :bat_shape bat-shape-flat :bat_scale bat-scale-flat}
                  {:cure_frac cf-flat :unc_med unc-med-flat :unc_shape unc-shape-flat :unc_scale unc-scale-flat}
                  "cure" bat-S-T gps-S-T)))

(defn apply-prefilter-leaky [cfg]
  (let [[e-pts e-weights] (expected-enrollment-times cfg)
        t-pts (np/array (if (:use_pr3_anchor cfg)
                          [(:t_ia cfg) (:t_upd cfg) (:t_pr3 cfg)]
                          [(:t_ia cfg) (:t_upd cfg)]) "float64")

        bat-meds (np/arange (nth (:bat_med_grid cfg) 0) (nth (:bat_med_grid cfg) 1) (nth (:bat_med_grid cfg) 2))
        bat-shapes (np/arange (nth (:bat_shape_grid cfg) 0) (nth (:bat_shape_grid cfg) 1) (nth (:bat_shape_grid cfg) 2))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (.ravel (first bat-mesh))
        bat-shape-flat (.ravel (second bat-mesh))
        bat-scale-flat (weibull-scale-from-median bat-med-flat bat-shape-flat)

        cf-grid (np/arange (nth (:leaky_cure_frac_grid cfg) 0) (nth (:leaky_cure_frac_grid cfg) 1) (nth (:leaky_cure_frac_grid cfg) 2))
        unc-meds (np/arange (nth (:leaky_unc_med_grid cfg) 0) (nth (:leaky_unc_med_grid cfg) 1) (nth (:leaky_unc_med_grid cfg) 2))
        unc-shapes (np/arange (nth (:leaky_unc_shape_grid cfg) 0) (nth (:leaky_unc_shape_grid cfg) 1) (nth (:leaky_unc_shape_grid cfg) 2))
        leaks (np/arange (nth (:leak_grid cfg) 0) (nth (:leak_grid cfg) 1) (nth (:leak_grid cfg) 2))

        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes leaks] #js {:indexing "ij"})
        cf-flat (.ravel (nth gps-mesh 0))
        unc-med-flat (.ravel (nth gps-mesh 1))
        unc-shape-flat (.ravel (nth gps-mesh 2))
        leak-flat (.ravel (nth gps-mesh 3))
        unc-scale-flat (weibull-scale-from-median unc-med-flat unc-shape-flat)

        bat-ev (expected-arm-events weibull-S [bat-scale-flat bat-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))
        gps-ev (expected-arm-events leaky-cure-S [cf-flat unc-scale-flat unc-shape-flat leak-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))

        T-pool (:pool_mos_min_at_ia cfg)
        bat-S-T (if (> T-pool 0) (weibull-S T-pool bat-scale-flat bat-shape-flat) nil)
        gps-S-T (if (> T-pool 0) (leaky-cure-S T-pool cf-flat unc-scale-flat unc-shape-flat leak-flat) nil)]

    (cross-filter cfg bat-ev gps-ev
                  {:bat_med bat-med-flat :bat_shape bat-shape-flat :bat_scale bat-scale-flat}
                  {:cure_frac cf-flat :unc_med unc-med-flat :unc_shape unc-shape-flat :unc_scale unc-scale-flat :leak_yr leak-flat}
                  "leaky" bat-S-T gps-S-T)))

(defn logrank-z [times events groups]
  (let [events-sum (np/sum events)]
    (if (< events-sum 3)
      [0.0 1.0]
      (let [o (np/argsort times)
            ts (np/empty (.-shape times) "float64")
            es (np/empty (.-shape events) "bool")
            gs (np/empty (.-shape groups) "int32")]
        (.set ts (.take times o))
        (.set es (.take events o))
        (.set gs (.take groups o))

        ;; Instead of fully vectorized mapping (hard in TS/CLJS without fancy indexing),
        ;; we extract to arrays and compute manually for simplicity
        (let [ts-arr (.toArray ts)
              es-arr (.toArray es)
              gs-arr (.toArray gs)
              n (.-length ts-arr)
              ig-arr (js/Float64Array. n)
              n-g-arr (js/Float64Array. n)
              n-b-arr (js/Float64Array. n)]

          (loop [i 0]
            (when (< i n)
              (aset ig-arr i (if (== (aget gs-arr i) 1) 1.0 0.0))
              (recur (inc i))))

          (loop [i (dec n)
                 sum-g 0.0
                 sum-b 0.0]
            (when (>= i 0)
              (let [is-g (== (aget ig-arr i) 1.0)]
                (aset n-g-arr i (+ sum-g (if is-g 1.0 0.0)))
                (aset n-b-arr i (+ sum-b (if is-g 0.0 1.0)))
                (recur (dec i)
                       (+ sum-g (if is-g 1.0 0.0))
                       (+ sum-b (if is-g 0.0 1.0))))))

          (let [ev-idx (js/Array.)]
            (loop [i 0]
              (when (< i n)
                (when (aget es-arr i)
                  (.push ev-idx i))
                (recur (inc i))))

            (if (== (.-length ev-idx) 0)
              [0.0 1.0]
              (let [unique-t (js/Array.)
                    inv (js/Array.)]
                (loop [i 0
                       prev-t -1]
                  (when (< i (.-length ev-idx))
                    (let [idx (aget ev-idx i)
                          t (aget ts-arr idx)]
                      (if (not= t prev-t)
                        (do
                          (.push unique-t t)
                          (.push inv (dec (.-length unique-t))))
                        (.push inv (dec (.-length unique-t))))
                      (recur (inc i) t))))

                (loop [k 0
                       u 0.0
                       v 0.0
                       log-hr-num 0.0
                       log-hr-den 0.0]
                  (if (< k (.-length unique-t))
                    (let [idx-list (js/Array.)]
                      (loop [i 0]
                        (when (< i (.-length ev-idx))
                          (when (== (aget inv i) k)
                            (.push idx-list (aget ev-idx i)))
                          (recur (inc i))))

                      (let [first (aget idx-list 0)
                            ng (aget n-g-arr first)
                            nb (aget n-b-arr first)
                            nt (+ ng nb)]
                        (if (< nt 2)
                          (recur (inc k) u v log-hr-num log-hr-den)
                          (let [dg (loop [i 0 s 0.0] (if (< i (.-length idx-list)) (recur (inc i) (+ s (aget ig-arr (aget idx-list i)))) s))
                                dt (.-length idx-list)
                                eg (/ (* ng dt) nt)
                                next-u (+ u (- dg eg))
                                next-v (if (> nt 1) (+ v (/ (* nb ng dt (- nt dt)) (* nt nt (dec nt)))) v)
                                next-num (if (and (> dt 0) (> ng 0) (> nb 0)) (+ log-hr-num (- dg eg)) log-hr-num)
                                next-den (if (and (> dt 0) (> ng 0) (> nb 0)) (+ log-hr-den (* eg (/ nb nt))) log-hr-den)]
                            (recur (inc k) next-u next-v next-num next-den)))))
                    (if (<= v 0)
                      [0.0 1.0]
                      (let [z (/ (- u) (js/Math.sqrt v))
                            hr (if (> log-hr-den 0) (js/Math.exp (/ log-hr-num log-hr-den)) 1.0)]
                        [z hr])))))))))))

(defn draw-gps-times [rec n rng]
  (let [fam (:family rec)]
    (cond
      (= fam "weibull")
      (let [rand-arr (np-random/random rng n)
            log-arr (np/multiply (np/log rand-arr) -1.0)
            pow-arr (np/power log-arr (/ 1.0 (:gps_shape rec)))]
        (np/multiply pow-arr (:gps_scale rec)))

      (= fam "cure")
      (let [rand-cf (np-random/random rng n)
            rand-cf-arr (.toArray rand-cf)
            rand-arr (np-random/random rng n)
            log-arr (np/multiply (np/log rand-arr) -1.0)
            pow-arr (np/power log-arr (/ 1.0 (:unc_shape rec)))
            unc (np/multiply pow-arr (:unc_scale rec))
            unc-arr (.toArray unc)

            out (js/Float64Array. n)]
        (dotimes [i n]
          (let [is-cured (< (aget rand-cf-arr i) (:cure_frac rec))]
            (if is-cured
              (aset out i np/inf)
              (aset out i (aget unc-arr i)))))
        (np/array out))

      (= fam "leaky")
      (let [rand-cf (np-random/random rng n)
            rand-cf-arr (.toArray rand-cf)
            rand-arr (np-random/random rng n)
            log-arr (np/multiply (np/log rand-arr) -1.0)
            pow-arr (np/power log-arr (/ 1.0 (:unc_shape rec)))
            unc (np/multiply pow-arr (:unc_scale rec))
            unc-arr (.toArray unc)

            leak-m (/ (:leak_yr rec) 12.0)
            rand-leak (np-random/random rng n)
            rand-leak-arr (.toArray rand-leak)

            out (js/Float64Array. n)]
        (dotimes [i n]
          (let [is-cured (< (aget rand-cf-arr i) (:cure_frac rec))]
            (if is-cured
              (aset out i (if (> leak-m 0) (/ (- (js/Math.log (aget rand-leak-arr i))) leak-m) np/inf))
              (aset out i (aget unc-arr i)))))
        (np/array out))

      :else nil)))

(defn draw-bat-times [rec n rng]
  (let [rand-arr (np-random/random rng n)
        log-arr (np/multiply (np/log rand-arr) -1.0)
        pow-arr (np/power log-arr (/ 1.0 (:bat_shape rec)))]
    (np/multiply pow-arr (:bat_scale rec))))

(defn km-S-at-T [time-obs event-flag T]
  (let [n (.-size time-obs)]
    (if (== n 0)
      1.0
      (let [o (np/argsort time-obs)
            ts (np/empty (.-shape time-obs) "float64")
            es (np/empty (.-shape event-flag) "bool")]
        (.set ts (.take time-obs o))
        (.set es (.take event-flag o))
        (let [ts-arr (.toArray ts)
              es-arr (.toArray es)]
          (loop [i 0
                 mult 1.0]
            (if (< i n)
              (let [n-at-risk (- n i)
                    ev (aget es-arr i)
                    t (aget ts-arr i)]
                (if (and ev (<= t T))
                  (recur (inc i) (* mult (- 1.0 (/ 1.0 n-at-risk))))
                  (recur (inc i) mult)))
              mult)))))))

(defn run-sim-chunk [rec cfg n-sims rng]
  (let [bands (:enroll_bands cfg)
        n-total (:n_total cfg)
        n-per-arm (:n_per_arm cfg)

        enroll (js/Float64Array. (* n-sims n-total))]

    (loop [b-idx 0 col 0]
      (when (< b-idx (count bands))
        (let [[lo hi n] (nth bands b-idx)]
          (when (> n 0)
            (let [rand-vals (np-random/uniform rng lo hi [* n-sims n])
                  rand-arr (.toArray rand-vals)]
              (dotimes [s n-sims]
                (dotimes [i n]
                  (aset enroll (+ (* s n-total) col i) (aget rand-arr (+ (* s n) i))))))
            (recur (inc b-idx) (+ col n))))))

    ;; sort each row of enroll
    (dotimes [s n-sims]
      (let [row-slice (.subarray enroll (* s n-total) (+ (* s n-total) n-total))]
        (.sort row-slice)))

    (let [arms (js/Int8Array. (* n-sims n-total))
          surv (js/Float64Array. (* n-sims n-total))]

      (dotimes [s n-sims]
        (let [perm (np-random/random rng n-total)
              order (np/argsort perm)
              order-arr (.toArray order)]
          (dotimes [i n-per-arm]
            (aset arms (+ (* s n-total) (aget order-arr i)) 1))))

      (let [n-bat-total (loop [s 0 c 0] (if (< s (* n-sims n-total)) (recur (inc s) (+ c (if (== (aget arms s) 0) 1 0))) c))
            n-gps-total (loop [s 0 c 0] (if (< s (* n-sims n-total)) (recur (inc s) (+ c (if (== (aget arms s) 1) 1 0))) c))
            bat-draws (.toArray (draw-bat-times rec n-bat-total rng))
            gps-draws (.toArray (draw-gps-times rec n-gps-total rng))]

        (loop [s 0 b 0 g 0]
          (when (< s (* n-sims n-total))
            (if (== (aget arms s) 0)
              (do (aset surv s (aget bat-draws b))
                  (recur (inc s) (inc b) g))
              (do (aset surv s (aget gps-draws g))
                  (recur (inc s) b (inc g)))))))

      ;; Filtering logic and return stats
      ;; Because of size, let's process loop per sim to extract stats
      (let [accepted-stats (atom [])
            n-pass-events (atom 0)]
        (dotimes [s n-sims]
          (let [offset (* s n-total)
                e-i (.subarray enroll offset (+ offset n-total))
                s-i (.subarray surv offset (+ offset n-total))
                a-i (.subarray arms offset (+ offset n-total))

                n-ia (atom 0)
                n-up (atom 0)
                n-pr3 (atom 0)]

            (dotimes [i n-total]
              (let [fu-ia-val (js/Math.max (- (:t_ia cfg) (aget e-i i)) 0.0)
                    fu-up-val (js/Math.max (- (:t_upd cfg) (aget e-i i)) 0.0)
                    sv (aget s-i i)]
                (when (<= sv fu-ia-val) (swap! n-ia inc))
                (when (<= sv fu-up-val) (swap! n-up inc))
                (when (:use_pr3_anchor cfg)
                  (let [fu-pr3-val (js/Math.max (- (:t_pr3 cfg) (aget e-i i)) 0.0)]
                    (when (<= sv fu-pr3-val) (swap! n-pr3 inc))))))

            (let [keep-ia (<= (js/Math.abs (- @n-ia (:n_ev_ia cfg))) (:tol_ia cfg))
                  keep-up (<= (js/Math.abs (- @n-up (:n_ev_upd cfg))) (:tol_upd cfg))
                  inc-ia-up (- @n-up @n-ia)
                  keep-inc-ia-up (<= (js/Math.abs (- inc-ia-up (- (:n_ev_upd cfg) (:n_ev_ia cfg)))) (:tol_increment_ia_upd cfg))]

              (when (and keep-ia keep-up keep-inc-ia-up)
                (let [pass-pr3 (if (:use_pr3_anchor cfg)
                                 (and (<= (js/Math.abs (- @n-pr3 (:n_ev_pr3 cfg))) (:tol_pr3 cfg))
                                      (<= (js/Math.abs (- (- @n-pr3 @n-up) (- (:n_ev_pr3 cfg) (:n_ev_upd cfg)))) (:tol_increment_upd_pr3 cfg)))
                                 true)]
                  (when pass-pr3
                    (swap! n-pass-events inc)
                    ;; Simulate full results for passed
                    (let [fu-ia (np/maximum (np/subtract (:t_ia cfg) e-i) 0.0)
                          ev-ia (np/where (np/subtract s-i fu-ia) 1 0) ;; fake bool? s_i <= fu_ia
                          ev-ia-bool (np/subtract (np/maximum (np/subtract s-i fu-ia) 0) 0.0000000001) ;; it's better to just use JS loops for stats
                          ]
                      ;; To save tokens and avoid numpy-ts bugs with bool arrays, I will do JS extraction
                      (let [time-ia-i (js/Float64Array. n-total)
                            ev-ia-i (js/Int32Array. n-total)
                            alive-bat-up (atom 0)
                            alive-gps-up (atom 0)]
                        (dotimes [i n-total]
                          (let [fu-ia-val (js/Math.max (- (:t_ia cfg) (aget e-i i)) 0.0)
                                fu-up-val (js/Math.max (- (:t_upd cfg) (aget e-i i)) 0.0)
                                sv (aget s-i i)
                                av (aget a-i i)]
                            (aset time-ia-i i (js/Math.min sv fu-ia-val))
                            (aset ev-ia-i i (if (<= sv fu-ia-val) 1 0))

                            (when (> sv fu-up-val)
                              (if (== av 0) (swap! alive-bat-up inc) (swap! alive-gps-up inc)))))

                        (let [z-hr-ia (logrank-z (np/array time-ia-i) (np/array ev-ia-i) (np/array a-i))
                              z-ia (first z-hr-ia)
                              hr-ia (second z-hr-ia)]
                          (when (and (< hr-ia (:futility_hr_max cfg))
                                     (> hr-ia (:efficacy_hr_min cfg)))
                            (let [pool-mos-pass (if (> (:pool_mos_min_at_ia cfg) 0)
                                                  (> (km-S-at-T (np/array time-ia-i) (np/array ev-ia-i) (:pool_mos_min_at_ia cfg)) 0.5)
                                                  true)]
                              (when pool-mos-pass
                                (let [median-fu-pass (if (> (:median_fu_target cfg) 0)
                                                       (let [obs-time (.toArray (np/array time-ia-i))
                                                             median-fu (np/median (np/array obs-time))]
                                                         (<= (js/Math.abs (- median-fu (:median_fu_target cfg))) (:median_fu_tol cfg)))
                                                       true)]
                                  (when median-fu-pass
                                    (let [death-cal (js/Float64Array. n-total)
                                          valid-deaths (js/Array.)]
                                      (dotimes [i n-total]
                                        (let [d (+ (aget e-i i) (aget s-i i))]
                                          (aset death-cal i d)
                                          (when (js/Number.isFinite d)
                                            (.push valid-deaths d))))
                                      (.sort valid-deaths (fn [a b] (- a b)))

                                      (let [reached-80 (>= (.-length valid-deaths) (:n_ev_final cfg))
                                            t80 (if reached-80 (aget valid-deaths (dec (:n_ev_final cfg))) js/NaN)]

                                        (let [today-pass (if (and (:enforce_no_80_by_today cfg) reached-80)
                                                           (>= t80 (- (if (:t_now cfg) (:t_now cfg) 63) (:no_80_slack_months cfg))) ;; 63 is approx May 2026
                                                           true)]
                                          (when today-pass
                                            (let [z-fin (atom js/NaN)
                                                  hr-fin (atom js/NaN)]
                                              (when reached-80
                                                (let [fu-fin (js/Float64Array. n-total)
                                                      time-fin (js/Float64Array. n-total)
                                                      ev-fin (js/Int32Array. n-total)]
                                                  (dotimes [i n-total]
                                                    (let [f (js/Math.max (- t80 (aget e-i i)) 0.0)
                                                          sv (aget s-i i)]
                                                      (aset fu-fin i f)
                                                      (aset time-fin i (js/Math.min sv f))
                                                      (aset ev-fin i (if (<= sv f) 1 0))))
                                                  (let [z-hr-f (logrank-z (np/array time-fin) (np/array ev-fin) (np/array a-i))]
                                                    (reset! z-fin (first z-hr-f))
                                                    (reset! hr-fin (second z-hr-f)))))

                                              (let [stats {:n_ev_ia @n-ia
                                                           :n_ev_upd @n-up
                                                           :z_ia z-ia
                                                           :hr_ia hr-ia
                                                           :reached_80 reached-80
                                                           :t80 t80
                                                           :hr_final @hr-fin
                                                           :z_final @z-fin
                                                           :bat_alive_upd @alive-bat-up
                                                           :gps_alive_upd @alive-gps-up}]
                                                (swap! accepted-stats conj (if (:use_pr3_anchor cfg) (assoc stats :n_ev_pr3 @n-pr3) stats))))))))))))))))))))))
        [@accepted-stats @n-pass-events])))))

(defn simulate-one-combo [args]
  (let [{:keys [rec cfg_dict n_sims seed]} args
        cfg cfg_dict
        rng (np-random/default-rng seed)
        n-screen (js/Math.min (:n_sims_screen cfg) n_sims)
        [screen-stats screen-pass] (run-sim-chunk rec cfg n-screen rng)]

    (if (< (count screen-stats) (:n_screen_min_pass cfg))
      (if (empty? screen-stats) nil nil)
      (let [remaining (- n_sims n-screen)
            [more-stats more-pass] (if (> remaining 0) (run-sim-chunk rec cfg remaining rng) [[] 0])
            all-stats (concat screen-stats more-stats)
            n-pass-events (+ screen-pass more-pass)
            n-done n_sims
            n-accepted (count all-stats)]

        (if (empty? all-stats)
          nil
          (let [out (atom rec)
                finite80 (filter #(not (js/Number.isNaN %)) (map :t80 all-stats))
                hr-arr (filter #(not (js/Number.isNaN %)) (map :hr_final all-stats))
                n-success (count (filter #(and (:reached_80 %) (< (:hr_final %) 0.636)) all-stats))
                p-success-overall (/ n-success n-accepted)

                hr-finite (np/array (to-array hr-arr))
                median-hr (if (empty? hr-arr) js/NaN (np/median hr-finite))
                p-hr-below (if (empty? hr-arr) js/NaN (/ (count (filter #(< % 0.636) hr-arr)) (count hr-arr)))

                t80-arr (np/array (to-array finite80))
                median-t80 (if (empty? finite80) js/NaN (np/median t80-arr))

                hr-ia-arr (np/array (to-array (map :hr_ia all-stats)))
                median-hr-ia (np/median hr-ia-arr)

                z-ia-arr (np/array (to-array (map :z_ia all-stats)))
                median-z-ia (np/median z-ia-arr)

                bat-alive-arr (np/array (to-array (map :bat_alive_upd all-stats)))
                median-bat-alive (np/median bat-alive-arr)

                gps-alive-arr (np/array (to-array (map :gps_alive_upd all-stats)))
                median-gps-alive (np/median gps-alive-arr)

                p-reach (/ (count (filter :reached_80 all-stats)) n-accepted)]

            (swap! out merge
                   {:n_attempts n-done
                    :n_pass_events n-pass-events
                    :n_pass_futility n-accepted
                    :n_accepted n-accepted
                    :acceptance_rate (/ n-accepted n-done)
                    :p_reach80 p-reach
                    :p_no_readout (- 1.0 p-reach)
                    :median_hr_final median-hr
                    :p_hr_below_threshold p-hr-below
                    :p_success_overall p-success-overall
                    :median_t80_months median-t80
                    :median_hr_ia median-hr-ia
                    :median_z_ia median-z-ia
                    :median_bat_alive_upd median-bat-alive
                    :median_gps_alive_upd median-gps-alive})
            @out))))))
