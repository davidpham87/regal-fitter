(ns app.regal-fit.compare-runs
  "Comparison script to verify correctness and benchmark performance."
  (:require [app.regal-fit.simulate :as sim-loop]
            [app.regal-fit.simulation-vectorized :as sim-vec]
            [app.stress-test.simulate :as stress-loop]
            [app.stress-test.simulate-vectorized :as stress-vec]
            [cljs.numpy :as np]))

(def test-rec
  {:family "weibull"
   :bat-scale 12.0
   :bat-shape 0.9
   :gps-scale 18.0
   :gps-shape 0.95
   :gps-med 15.0})

(def test-cfg
  {:n-total 126
   :n-per-arm 63
   :enroll-bands [[0.0 12.0 15]
                  [12.0 24.0 50]
                  [24.0 36.0 56]
                  [36.0 38.0 5]]
   :t-ia 46.0
   :t-upd 58.0
   :t-pr3 62.97
   :n-ev-ia 60
   :n-ev-upd 72
   :n-ev-pr3 78
   :n-ev-final 80
   :use-pr3-anchor true
   :tol-ia 9999
   :tol-upd 9999
   :tol-pr3 9999
   :tol-increment-ia-upd 9999
   :tol-increment-upd-pr3 9999
   :futility-hr-max 999.0
   :efficacy-hr-min -999.0
   :pool-mos-min-at-ia 0.0
   :median-fu-target 0.0
   :median-fu-tol 999.0
   :enforce-no-80-by-today false
   :no-80-slack-months 999.0
   :n-sims-screen 50
   :n-screen-min-pass 1
   :ignore-prefilter? true})

(defn- near? [a b]
  (if (and (js/Number.isNaN a) (js/Number.isNaN b))
    true
    (<= (js/Math.abs (- a b)) 1e-5)))

(defn compare-results [res-loop res-vec]
  (let [keys-to-check [:gps-med :n-attempts :n-pass-events :n-pass-futility :n-accepted
                       :p-reach80 :p-no-readout :median-hr-final :hr-final-low :hr-final-high
                       :p-hr-below-threshold :p-success-overall :median-t80-months
                       :median-hr-ia :median-z-ia :median-bat-alive-upd :median-gps-alive-upd
                       :mean-med-interim-analysis-bat :mean-med-interim-analysis-gps
                       :mean-med-interim-analysis-pool :mean-med-update-bat
                       :mean-med-update-gps :mean-med-update-pool]]
    (every? (fn [k]
              (let [v-loop (get res-loop k)
                    v-vec (get res-vec k)]
                (if (near? v-loop v-vec)
                  true
                  (do (js/console.log "Mismatch for key" k "Loop:" v-loop "Vec:" v-vec)
                      false))))
            keys-to-check)))

(defn scale-cfg [config n-total]
  (let [scale (/ n-total (:n-total config))
        scaled-bands (mapv (fn [[lo hi n]]
                             [lo hi (js/Math.round (* n scale))])
                           (:enroll-bands config))
        actual-total (reduce + (map (fn [[_ _ n]] n) scaled-bands))]
    (assoc config
           :n-total actual-total
           :n-per-arm (quot actual-total 2)
           :enroll-bands scaled-bands
           :n-ev-ia (js/Math.round (* (:n-ev-ia config) scale))
           :n-ev-upd (js/Math.round (* (:n-ev-upd config) scale))
           :n-ev-pr3 (js/Math.round (* (:n-ev-pr3 config) scale))
           :n-ev-final (js/Math.round (* (:n-ev-final config) scale)))))

(defn run-benchmark [seed size n-sims]
  (let [cfg (scale-cfg test-cfg size)
        _ (js/console.log (str "\n--- Size: " (:n-total cfg) " ---"))
        t-loop-start (.now js/performance)
        _ (sim-loop/simulate-one-combo
           {:rec test-rec :cfg-dict cfg :n-sims n-sims :seed seed})
        t-loop-end (.now js/performance)
        t-loop-duration (- t-loop-end t-loop-start)

        t-vec-start (.now js/performance)
        _ (sim-vec/simulate-one-combo
           {:rec test-rec :cfg-dict cfg :n-sims n-sims :seed seed})
        t-vec-end (.now js/performance)
        t-vec-duration (- t-vec-end t-vec-start)

        t-vec2d-start (.now js/performance)
        _ (sim-vec/simulate-one-combo-2d
           {:rec test-rec :cfg-dict cfg :n-sims n-sims :seed seed :chunk-size 2000})
        t-vec2d-end (.now js/performance)
        t-vec2d-duration (- t-vec2d-end t-vec2d-start)

        speedup-1d (/ t-loop-duration t-vec-duration)
        speedup-2d (/ t-loop-duration t-vec2d-duration)]
    (js/console.log (str "Loop execution time: "
                         (.toFixed t-loop-duration 2) " ms"))
    (js/console.log (str "Vectorized 1D execution time: "
                         (.toFixed t-vec-duration 2) " ms"))
    (js/console.log (str "Vectorized 2D execution time: "
                         (.toFixed t-vec2d-duration 2) " ms"))
    (js/console.log (str "Speedup 1D vs Loop: "
                         (.toFixed speedup-1d 2) "x"))
    (js/console.log (str "Speedup 2D vs Loop: "
                         (.toFixed speedup-2d 2) "x"))))

(defn compare-stress-test []
  (js/console.log "\n--- Starting Stress Test Comparison ---")
  (let [cfg (merge test-cfg
                   {:n-sims 100
                    :obs-ev-ia (:n-ev-ia test-cfg)
                    :obs-inc-upd (- (:n-ev-upd test-cfg) (:n-ev-ia test-cfg))
                    :obs-inc-pr3 (- (:n-ev-pr3 test-cfg) (:n-ev-upd test-cfg))
                    :pool-mos-min 10.0
                    :pool-mos-max 20.0
                    :use-test-ia true
                    :use-test-upd true
                    :use-test-pr3 true
                    :use-test-pool-mos true
                    :use-test-hr true})
        combos [{:mos 12.0 :k 0.9}
                {:mos 15.0 :k 1.0}
                {:mos 18.0 :k 1.1}]
        res-loop (mapv (fn [combo]
                         (stress-loop/simulate-one-combo
                          (assoc combo :n-sims 100 :seed 42 :config cfg)))
                       combos)
        res-vec (stress-vec/simulate-combos-vectorized
                 {:combos combos :config cfg})]
    (js/console.log "Loop stress output sample (first combo):"
                    (clj->js (first res-loop)))
    (js/console.log "Vec stress output sample (first combo):"
                    (clj->js (first res-vec)))

    ;; Large benchmark
    (let [cfg-bench (assoc cfg :n-sims 500)
          combos-bench (for [mos (range 10.0 20.0 2.0)
                             k (range 0.8 1.3 0.1)]
                         {:mos mos :k k})
          t-loop-start (.now js/performance)
          _ (doseq [combo combos-bench]
              (stress-loop/simulate-one-combo
               (assoc combo :n-sims 500 :seed 42 :config cfg-bench)))
          t-loop-end (.now js/performance)
          t-loop-duration (- t-loop-end t-loop-start)

          t-vec-start (.now js/performance)
          _ (stress-vec/simulate-combos-vectorized
             {:combos combos-bench :config cfg-bench})
          t-vec-end (.now js/performance)
          t-vec-duration (- t-vec-end t-vec-start)

          speedup (/ t-loop-duration t-vec-duration)]
      (js/console.log (str "Large Stress Test (25 combos x 500 sims):"))
      (js/console.log (str "Loop Stress Time: "
                           (.toFixed t-loop-duration 2) " ms"))
      (js/console.log (str "Vectorized Stress Time: "
                           (.toFixed t-vec-duration 2) " ms"))
      (js/console.log (str "Stress Test Speedup: "
                           (.toFixed speedup 2) "x")))))

(defn -main [& args]
  (compare-stress-test)
  (js/console.log "\nStarting equivalence verification...")
  (let [seed 42
        n-sims 100
        res-loop (sim-loop/simulate-one-combo
                  {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})
        res-vec (sim-vec/simulate-one-combo
                 {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})
        res-vec-2d (sim-vec/simulate-one-combo-2d
                    {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})]

    (if (and res-loop res-vec res-vec-2d)
      (let [equiv-1d? (compare-results res-loop res-vec)
            equiv-2d? (compare-results res-loop res-vec-2d)]
        (js/console.log "Loop:" (clj->js res-loop))
        (js/console.log "Vec 1D:" (clj->js res-vec))
        (js/console.log "Vec 2D:" (clj->js res-vec-2d))
        (if (and equiv-1d? equiv-2d?)
          (js/console.log
           "SUCCESS: Loop, 1D, and 2D implementations are EQUIVALENT!")
          (js/console.log
           "FAILURE: Loop, 1D, or 2D implementations differ!"))

        ;; Benchmarks at different sizes
        (run-benchmark seed 126 100)
        (run-benchmark seed 126 2000)
        (run-benchmark seed 1000 50)
        (run-benchmark seed 5000 20)
        (run-benchmark seed 10000 10))
      (js/console.log
       "Error: One or more simulations returned nil results."))))

(defn main []
  (apply -main []))

