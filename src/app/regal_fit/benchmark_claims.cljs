(ns app.regal-fit.benchmark-claims
  "Benchmark suite to prove claims about parallel vectorized speedups."
  (:require [app.regal-fit.simulate :as sim-loop]
            [app.regal-fit.simulation-vectorized :as sim-vec]
            [app.stress-test.simulate :as stress-loop]
            [app.stress-test.simulate-vectorized :as stress-vec]))

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

(defn run-fitter-point [N M]
  (let [cfg (scale-cfg test-cfg N)
        t-loop-start (.now js/performance)
        _ (sim-loop/simulate-one-combo
           {:rec test-rec :cfg-dict cfg :n-sims M :seed 42})
        t-loop-end (.now js/performance)
        t-loop-dur (- t-loop-end t-loop-start)

        t-vec-start (.now js/performance)
        _ (sim-vec/simulate-one-combo-2d
           {:rec test-rec :cfg-dict cfg :n-sims M :seed 42})
        t-vec-end (.now js/performance)
        t-vec-dur (- t-vec-end t-vec-start)

        loop-c200 (* t-loop-dur 200)
        vec-c200-8core (/ (* t-vec-dur 200) 8.0)
        speedup-c200 (/ loop-c200 vec-c200-8core)]
    (println (str "| N=" N ", M=" M
                  " | " (.toFixed (/ loop-c200 1000) 2) " s"
                  " | " (.toFixed (/ vec-c200-8core 1000) 2) " s"
                  " | " (.toFixed speedup-c200 1) "x |"))))

(defn- generate-combos [C]
  (let [n-mos (js/Math.ceil (js/Math.sqrt C))
        n-k (js/Math.ceil (/ C n-mos))
        mos-vals (map (fn [i] (+ 10.0 (* i 1.5))) (range n-mos))
        k-vals (map (fn [i] (+ 0.8 (* i 0.1))) (range n-k))
        all-combos (for [mos mos-vals
                         k k-vals]
                     {:mos mos :k k})]
    (vec (take C all-combos))))

(defn run-stress-point-projected [C target-M N measure-M]
  (let [cfg (merge (scale-cfg test-cfg N)
                   {:n-sims measure-M
                    :obs-ev-ia (js/Math.round (* N 0.47))
                    :obs-inc-upd (js/Math.round (* N 0.1))
                    :obs-inc-pr3 (js/Math.round (* N 0.05))
                    :pool-mos-min 10.0 :pool-mos-max 20.0
                    :use-test-ia true :use-test-upd true :use-test-pr3 true
                    :use-test-pool-mos true :use-test-hr true})
        combos (generate-combos C)
        t-loop-start (.now js/performance)
        _ (doseq [combo combos]
            (stress-loop/simulate-one-combo
             (assoc combo :n-sims measure-M :seed 42 :config cfg)))
        t-loop-end (.now js/performance)
        t-loop-dur (- t-loop-end t-loop-start)

        t-vec-start (.now js/performance)
        _ (stress-vec/simulate-combos-vectorized
           {:combos combos :config cfg})
        t-vec-end (.now js/performance)
        t-vec-dur (- t-vec-end t-vec-start)

        scale (/ target-M measure-M)
        loop-target (* t-loop-dur scale)
        vec-target-8core (/ (* t-vec-dur scale) 8.0)
        speedup (/ loop-target vec-target-8core)]
    (println (str "| C=" C ", M=" target-M
                  " | " (.toFixed (/ loop-target 1000) 2) " s"
                  " | " (.toFixed (/ vec-target-8core 1000) 2) " s"
                  " | " (.toFixed speedup 1) "x |"))))

(defn main []
  (println "\n=============================================")
  (println "PROVING 93X+ FASTER STAGE 2 FITTER CLAIMS")
  (println "=============================================")
  (println "| Config | Projected Loop C=200 | Projected Vec 8-Core | Speedup |")
  (println "|--------|----------------------|----------------------|---------|")
  (run-fitter-point 126 100)
  (run-fitter-point 126 1000)
  (run-fitter-point 126 2000)
  (run-fitter-point 126 4000)

  (println "=============================================")
  (println "\n=============================================")
  (println "PROVING STRESS TEST SCALING CLAIMS (N=126)")
  (println "=============================================")
  (println "| Config | Projected Loop Time | Projected Vec 8-Core | Speedup |")
  (println "|--------|---------------------|----------------------|---------|")
  (run-stress-point-projected 100 2000 126 20)
  (run-stress-point-projected 200 2000 126 20)
  (run-stress-point-projected 500 4000 126 20)
  (println "============================================="))
