(ns app.regal-fit.compare-5000
  "Script to run one simulation of size 5000 on multiple parameter combos."
  (:require [app.regal-fit.simulate :as sim-loop]
            [app.regal-fit.simulation-vectorized :as sim-vec]))

(def base-rec
  {:family "weibull" :bat-scale 12.0 :bat-shape 0.9
   :gps-scale 18.0 :gps-shape 0.95 :gps-med 15.0})

(def base-cfg
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

(defn run-combo [rec-name rec cfg-dict]
  (let [seed 42
        n-sims 1
        res-loop (sim-loop/simulate-one-combo
                  {:rec rec :cfg-dict cfg-dict :n-sims n-sims :seed seed})
        res-vec (sim-vec/simulate-one-combo
                 {:rec rec :cfg-dict cfg-dict :n-sims n-sims :seed seed})]
    (println (str "\n=== Combo: " rec-name " ==="))
    (println (str "| Metric | Loop | Vectorized | Abs Diff |"))
    (println (str "|--------|------|------------|----------|"))
    (doseq [k [:median-hr-final :median-hr-ia :median-z-ia :median-t80-months]]
      (let [v-loop (get res-loop k js/NaN)
            v-vec (get res-vec k js/NaN)
            diff (js/Math.abs (- v-loop v-vec))]
        (println (str "| " (name k)
                      " | " (.toFixed v-loop 4)
                      " | " (.toFixed v-vec 4)
                      " | " (.toFixed diff 4) " |"))))))

(defn main []
  (let [cfg (scale-cfg base-cfg 5000)
        rec-weibull base-rec
        rec-cure (assoc base-rec
                        :family "cure" :cure-frac 0.2
                        :unc-scale 18.0 :unc-shape 0.95)
        rec-leaky (assoc base-rec
                         :family "leaky" :cure-frac 0.2 :leak-yr 0.07
                         :unc-scale 18.0 :unc-shape 0.95)]
    (println "=============================================")
    (println "COMPARISON OF LOOP VS VECTORIZED (N=5000, M=1)")
    (println "=============================================")
    (run-combo "Weibull" rec-weibull cfg)
    (run-combo "Cure Model" rec-cure cfg)
    (run-combo "Leaky Cure Model" rec-leaky cfg)
    (println "=============================================")))
