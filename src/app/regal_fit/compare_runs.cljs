(ns app.regal-fit.compare-runs
  "Comparison script to verify correctness and benchmark performance."
  (:require [app.regal-fit.simulate :as sim-loop]
            [app.regal-fit.simulation-vectorized :as sim-vec]
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
        
        speedup (/ t-loop-duration t-vec-duration)]
    (js/console.log (str "Loop execution time: " (.toFixed t-loop-duration 2) " ms"))
    (js/console.log (str "Vectorized execution time: " (.toFixed t-vec-duration 2) " ms"))
    (js/console.log (str "Speedup factor: " (.toFixed speedup 2) "x"))))

(defn -main [& args]
  (js/console.log "Starting equivalence verification...")
  (let [seed 42
        n-sims 100
        res-loop (sim-loop/simulate-one-combo {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})
        res-vec (sim-vec/simulate-one-combo {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})]
    
    (if (and res-loop res-vec)
      (let [equiv? (compare-results res-loop res-vec)]
        (js/console.log "Loop:" (clj->js res-loop))
        (js/console.log "Vec:" (clj->js res-vec))
        (if equiv?
          (js/console.log
           "SUCCESS: Loop and Vectorized implementations are EQUIVALENT!")
          (js/console.log
           "FAILURE: Loop and Vectorized implementations differ!"))
        
        ;; Benchmarks at different sizes
        (run-benchmark seed 126 100)
        (run-benchmark seed 1000 50)
        (run-benchmark seed 5000 20)
        (run-benchmark seed 10000 10))
      (js/console.log
       "Error: One or both simulations returned nil results."))))

(defn main []
  (apply -main []))
