(ns app.regal-fit.compare-py-cljs
  "Script to run ClojureScript simulation and compare against Python output."
  (:require ["fs" :as fs]
            [app.regal-fit.simulate :as sim-loop]
            [app.regal-fit.simulation-vectorized :as sim-vec]))

(def py-res (js/JSON.parse (.readFileSync fs "py_5000.json" "utf8")))

(def test-rec
  {:family "weibull" :bat-scale 12.0 :bat-shape 0.9
   :gps-scale 18.0 :gps-shape 0.95 :gps-med 15.0})

(def test-cfg
  {:n-total 126 :n-per-arm 63
   :enroll-bands [[0.0 12.0 15] [12.0 24.0 50]
                  [24.0 36.0 56] [36.0 38.0 5]]
   :t-ia 46.0 :t-upd 58.0 :t-pr3 62.97
   :n-ev-ia 60 :n-ev-upd 72 :n-ev-pr3 78 :n-ev-final 80
   :use-pr3-anchor true :tol-ia 9999 :tol-upd 9999 :tol-pr3 9999
   :tol-increment-ia-upd 9999 :tol-increment-upd-pr3 9999
   :futility-hr-max 999.0 :efficacy-hr-min -999.0
   :pool-mos-min-at-ia 0.0 :median-fu-target 0.0 :median-fu-tol 999.0
   :enforce-no-80-by-today false :no-80-slack-months 999.0
   :n-sims-screen 50 :n-screen-min-pass 1 :ignore-prefilter? true})

(defn compare-metric [k py-key res-cljs]
  (let [v-py (aget py-res py-key)
        v-cljs (get res-cljs k js/NaN)
        diff (js/Math.abs (- v-py v-cljs))]
    (println (str "| " (name k)
                  " | " (.toFixed v-py 4)
                  " | " (.toFixed v-cljs 4)
                  " | " (.toFixed diff 4) " |"))))

(defn main []
  (let [seed 42
        n-sims 5000
        res-loop (sim-loop/simulate-one-combo
                  {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})
        res-vec (sim-vec/simulate-one-combo
                 {:rec test-rec :cfg-dict test-cfg :n-sims n-sims :seed seed})]
    (println "\n=======================================================")
    (println "COMPARISON OF PYTHON VS CLJS (M=5000, N=126, SEED=42)")
    (println "=======================================================")
    (println "\n### 1. Loop-based ClojureScript vs Python Reference")
    (println "| Metric | Python | CLJS Loop | Abs Diff |")
    (println "|--------|--------|-----------|----------|")
    (compare-metric :median-hr-final "median_hr_final" res-loop)
    (compare-metric :median-hr-ia "median_hr_ia" res-loop)
    (compare-metric :median-z-ia "median_z_ia" res-loop)
    (compare-metric :median-t80-months "median_t80_months" res-loop)
    (compare-metric :p-reach80 "p_reach80" res-loop)
    (compare-metric :p-hr-below-threshold "p_hr_below_threshold" res-loop)

    (println "\n### 2. Vectorized ClojureScript vs Python Reference")
    (println "| Metric | Python | CLJS Vec | Abs Diff |")
    (println "|--------|--------|----------|----------|")
    (compare-metric :median-hr-final "median_hr_final" res-vec)
    (compare-metric :median-hr-ia "median_hr_ia" res-vec)
    (compare-metric :median-z-ia "median_z_ia" res-vec)
    (compare-metric :median-t80-months "median_t80_months" res-vec)
    (compare-metric :p-reach80 "p_reach80" res-vec)
    (compare-metric :p-hr-below-threshold "p_hr_below_threshold" res-vec)
    (println "=======================================================")))
