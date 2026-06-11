(ns app.stress-test.simulate-vectorized
  "Vectorized stress test execution using numpy-ts."
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]
            ["numpy-ts" :as np-ts]))

(defn- weibull-scale-from-median [median shape]
  (/ median (js/Math.pow (js/Math.log 2.0) (/ 1.0 shape))))

(defn- km-survival-single-js
  "Calculates KM survival at target time for a single trial in pure JS."
  [obs-t-arr is-ev-arr target-time]
  (let [n (alength obs-t-arr)]
    (if (zero? n)
      1.0
      (let [indices (js/Int32Array. n)]
        (dotimes [i n]
          (aset indices i i))
        (.sort indices
               (fn [a b]
                 (- (aget obs-t-arr a) (aget obs-t-arr b))))
        (loop [i 0
               surv 1.0]
          (if (< i n)
            (let [idx (aget indices i)
                  t (aget obs-t-arr idx)
                  is-ev (== (aget is-ev-arr idx) 1)
                  n-at-risk (- n i)]
              (if (> t target-time)
                surv
                (recur (inc i)
                       (if is-ev
                         (* surv (- 1.0 (/ 1.0 n-at-risk)))
                         surv))))
            surv))))))

(defn- km-survival-pre-sorted-js
  "Calculates KM survival at target time using pre-sorted indices."
  [obs-t-arr is-ev-arr sorted-indices target-time]
  (let [n (alength obs-t-arr)]
    (if (zero? n)
      1.0
      (loop [i 0
             surv 1.0]
        (if (< i n)
          (let [idx (aget sorted-indices i)
                t (aget obs-t-arr idx)
                is-ev (== (aget is-ev-arr idx) 1)
                n-at-risk (- n i)]
            (if (> t target-time)
              surv
              (recur (inc i)
                     (if is-ev
                       (* surv (- 1.0 (/ 1.0 n-at-risk)))
                       surv))))
          surv)))))


(defn- run-stress-chunk-2d
  "Runs a 2D chunk of stress test simulations."
  [config chunk-size scale-array shape-array random-gen]
  (let [n-total (:n-total config)
        n-per-arm (:n-per-arm config)
        bands (:enroll-bands config)

        ;; 1. Generate enrollment
        band-draws (mapv (fn [[lo hi n]]
                           (np-random/uniform
                            random-gen lo hi (clj->js [chunk-size n])))
                         bands)
        raw-enroll (np-ts/concatenate (clj->js band-draws) 1)
        enroll (np-ts/sort raw-enroll 1)

        ;; 2. Assign arms
        random-vals (np-random/random random-gen (clj->js [chunk-size n-total]))
        ranks (np-ts/argsort (np-ts/argsort random-vals 1) 1)
        arms (np-ts/array (np-ts/where (np-ts/less ranks n-per-arm) 1.0 0.0))

        ;; 3. Draw survival
        u (np-random/random random-gen (clj->js [chunk-size n-total]))
        neg-log (np-ts/multiply (np-ts/log u) -1.0)
        inv-k-arr (np-ts/power shape-array -1.0)
        powered (np-ts/power neg-log inv-k-arr)
        survival (np-ts/multiply powered scale-array)

        ;; 4. Count events at IA, UPD, PR3
        shape (clj->js [chunk-size n-total])
        t-ia-full (np-ts/full shape (:t-ia config))
        fu-ia (np-ts/maximum (np-ts/subtract t-ia-full enroll) 0.0)
        dead-ia (np-ts/less_equal survival fu-ia)
        n-ia (np-ts/sum dead-ia 1)

        t-upd-full (np-ts/full shape (:t-upd config))
        fu-upd (np-ts/maximum (np-ts/subtract t-upd-full enroll) 0.0)
        dead-upd (np-ts/less_equal survival fu-upd)
        n-upd (np-ts/sum dead-upd 1)

        t-pr3-full (np-ts/full shape (:t-pr3 config))
        fu-pr3 (np-ts/maximum (np-ts/subtract t-pr3-full enroll) 0.0)
        dead-pr3 (np-ts/less_equal survival fu-pr3)
        n-pr3 (np-ts/sum dead-pr3 1)

        is-gps (np-ts/equal arms 1.0)
        dead-ia-gps (np-ts/logical_and dead-ia is-gps)
        n-ia-gps (np-ts/sum dead-ia-gps 1)

        time-ia (np-ts/minimum survival fu-ia)
        event-ia (np-ts/array (np-ts/where dead-ia 1.0 0.0))
        sorted-indices (np-ts/argsort time-ia 1)]

    [n-ia n-upd n-pr3 n-ia-gps time-ia event-ia arms sorted-indices]))

(defn simulate-combos-vectorized
  "Simulates multiple combinations in parallel using 2D vectorized operations."
  [{:keys [combos config]}]
  (let [C (count combos)
        M (:n-sims config)
        R (* C M)
        N (:n-total config)
        max-chunk-size (js/Math.floor (/ 300000 N))
        chunk-size (js/Math.max 100 (js/Math.min 2000 max-chunk-size))
        random-gen (np-random/default-rng 42)
        scales (js/Float64Array. R)
        shapes (js/Float64Array. R)]
    (dotimes [r R]
      (let [c (quot r M)
            combo (nth combos c)
            mos (:mos combo)
            k (:k combo)
            scale (weibull-scale-from-median mos k)]
        (aset scales r scale)
        (aset shapes r k)))

    (let [stats-by-combo (cljs.core/to-array
                          (mapv (fn [_]
                                  (atom {:joint-pass-count 0
                                         :total-passed-ia 0
                                         :total-ev-ia-le-60 0
                                         :total-inc-upd-le-12 0
                                         :total-inc-pr3-le-6 0
                                         :sum-ev-ia 0
                                         :sum-inc-upd 0
                                         :sum-inc-pr3 0
                                         :sum-gps-ev-ia 0}))
                                (range C)))]

      (loop [offset 0]
        (when (< offset R)
          (let [this-chunk (js/Math.min chunk-size (- R offset))

                chunk-scales (.slice scales offset (+ offset this-chunk))
                chunk-shapes (.slice shapes offset (+ offset this-chunk))

                scale-array (np-ts/reshape
                             (np-ts/array chunk-scales) (clj->js [this-chunk 1]))
                shape-array (np-ts/reshape
                             (np-ts/array chunk-shapes) (clj->js [this-chunk 1]))

                [n-ia n-upd n-pr3 n-ia-gps time-ia event-ia arms
                 sorted-indices]
                (run-stress-chunk-2d
                 config this-chunk scale-array shape-array random-gen)

                n-ia-arr (np/nd-to-array n-ia)
                n-upd-arr (np/nd-to-array n-upd)
                n-pr3-arr (np/nd-to-array n-pr3)
                n-ia-gps-arr (np/nd-to-array n-ia-gps)
                time-ia-arr (np/nd-to-array time-ia)
                event-ia-arr (np/nd-to-array event-ia)
                sorted-idx-arr (np/nd-to-array sorted-indices)]

            (dotimes [i this-chunk]
              (let [r (+ offset i)
                    c (quot r M)
                    combo-atom (aget stats-by-combo c)

                    e-ia (js/Number (aget n-ia-arr i))
                    e-upd (js/Number (aget n-upd-arr i))
                    e-pr3 (js/Number (aget n-pr3-arr i))
                    g-ia (js/Number (aget n-ia-gps-arr i))

                    time-1d (aget time-ia-arr i)
                    event-1d (aget event-ia-arr i)
                    row-indices (aget sorted-idx-arr i)

                    s-min (km-survival-pre-sorted-js
                           time-1d event-1d row-indices
                           (:pool-mos-min config))
                    s-max (km-survival-pre-sorted-js
                           time-1d event-1d row-indices
                           (:pool-mos-max config))
                    p-pool (and (> s-min 0.5) (< s-max 0.5))

                    i-upd (- e-upd e-ia)
                    i-pr3 (- e-pr3 e-upd)

                    pass-hr (< g-ia
                               (* (:futility-hr-max config)
                                  (/ e-ia (inc (:futility-hr-max config)))))
                    passed-ia (and pass-hr p-pool)

                    c1 (or (not (:use-test-ia config))
                           (<= e-ia (:obs-ev-ia config)))
                    c2 (or (not (:use-test-upd config))
                           (<= i-upd (:obs-inc-upd config)))
                    c3 (or (not (:use-test-pr3 config))
                           (<= i-pr3 (:obs-inc-pr3 config)))
                    c4 (or (not (:use-test-pool-mos config)) p-pool)
                    c5 (or (not (:use-test-hr config)) pass-hr)

                    ev-ia-le-60 (<= e-ia (:obs-ev-ia config))
                    inc-upd-le-12 (<= i-upd (:obs-inc-upd config))
                    inc-pr3-le-6 (<= i-pr3 (:obs-inc-pr3 config))
                    joint-pass (and c1 c2 c3 c4 c5)]

                (swap! combo-atom
                       (fn [curr]
                         (assoc curr
                                :joint-pass-count
                                (if joint-pass
                                  (inc (:joint-pass-count curr))
                                  (:joint-pass-count curr))
                                :total-passed-ia
                                (if passed-ia
                                  (inc (:total-passed-ia curr))
                                  (:total-passed-ia curr))
                                :total-ev-ia-le-60
                                (if ev-ia-le-60
                                  (inc (:total-ev-ia-le-60 curr))
                                  (:total-ev-ia-le-60 curr))
                                :total-inc-upd-le-12
                                (if inc-upd-le-12
                                  (inc (:total-inc-upd-le-12 curr))
                                  (:total-inc-upd-le-12 curr))
                                :total-inc-pr3-le-6
                                (if inc-pr3-le-6
                                  (inc (:total-inc-pr3-le-6 curr))
                                  (:total-inc-pr3-le-6 curr))
                                :sum-ev-ia (+ (:sum-ev-ia curr) e-ia)
                                :sum-inc-upd (+ (:sum-inc-upd curr) i-upd)
                                :sum-inc-pr3 (+ (:sum-inc-pr3 curr) i-pr3)
                                :sum-gps-ev-ia (+ (:sum-gps-ev-ia curr) g-ia))))))
            (recur (+ offset this-chunk)))))

      (mapv (fn [c]
              (let [combo (nth combos c)
                    stats @(aget stats-by-combo c)
                    exp-ev-ia (/ (:sum-ev-ia stats) M)
                    exp-gps-ev-ia (/ (:sum-gps-ev-ia stats) M)
                    exp-bat-ev-ia (- exp-ev-ia exp-gps-ev-ia)
                    exp-hr-ia (if (pos? exp-bat-ev-ia)
                                (/ exp-gps-ev-ia exp-bat-ev-ia)
                                js/Number.POSITIVE_INFINITY)
                    exp-inc-upd (/ (:sum-inc-upd stats) M)
                    exp-inc-pr3 (/ (:sum-inc-pr3 stats) M)
                    residual (js/Math.max
                              (js/Math.abs (- exp-ev-ia (:obs-ev-ia config)))
                              (js/Math.abs (- exp-inc-upd (:obs-inc-upd config)))
                              (js/Math.abs (- exp-inc-pr3 (:obs-inc-pr3 config))))]
                {:mos (:mos combo)
                 :k (:k combo)
                 :p_pass_ia (/ (:total-passed-ia stats) M)
                 :p_ev_ia_le_60 (/ (:total-ev-ia-le-60 stats) M)
                 :p_inc_upd_le_12 (/ (:total-inc-upd-le-12 stats) M)
                 :p_inc_pr3_le_6 (/ (:total-inc-pr3-le-6 stats) M)
                 :p_joint (/ (:joint-pass-count stats) M)
                 :expected_ev_ia exp-ev-ia
                 :expected_hr_ia exp-hr-ia
                 :expected_inc_upd exp-inc-upd
                 :expected_inc_pr3 exp-inc-pr3
                 :residual residual}))
            (range C)))))
