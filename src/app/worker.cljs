(ns app.worker
  (:require [app.regal-fit.simulation-vectorized :as simulate]
            [app.regal-fit.prefilter :as prefilter]
            [app.stress-test.simulate :as stress-test]
            [app.stress-test.simulate-vectorized :as stress-test-vec]
            [app.visualization.data :as vdata]
            [cljs.numpy-random :as np-random]
            [clojure.walk :as walk]))

(js/console.log "CLJS Worker: Initializing")

(set! (.-onmessage js/self)
      (fn [event]
        (let [data (.-data event)
              id (.-id data)
              type (.-type data)
              payload (.-data data)]

          (when (= type "RUN_SIMULATION")
            (try
              (let [args (js->clj payload :keywordize-keys true)
                    res (cond
                          (= (:type args) "RUN_PREFILTER")
                          (let [family (:family args)
                                cfg    (:config args)
                                top-k  (:top-k args)]
                            (js/console.log
                             "Worker RUN_PREFILTER for:" family)
                            (let [raw (cond
                                        (= family "weibull")
                                        (vec (prefilter/apply-prefilter-weibull
                                              cfg))
                                        (= family "cure")
                                        (vec (prefilter/apply-prefilter-cure
                                              cfg))
                                        (= family "leaky")
                                        (vec (prefilter/apply-prefilter-leaky
                                              cfg)))
                                  res (vec (prefilter/rank-and-trim
                                            cfg raw top-k))]
                              (js/console.log
                               "Prefilter finished, accepted:"
                               (count raw) "trimmed to:" (count res))
                              res))

                          (= (:type args) "RUN_STRESS_TEST")
                          (stress-test/simulate-one-combo args)

                          (= (:type args) "RUN_STRESS_TEST_BATCH")
                          (stress-test-vec/simulate-combos-vectorized args)

                          (= (:type args) "RUN_RESAMPLING_BATCH")
                          (let [combos (:combos args)
                                config (:config args)
                                seed (:seed args)
                                rng (np-random/default-rng seed)]
                            (mapv (fn [combo]
                                    (let [t (simulate/simulate-one-accepted-trial
                                             combo config rng)]
                                      (assoc combo
                                             :individual-observations
                                             (if t [t] [])
                                             :weight 1.0
                                             :n-accepted 1)))
                                  combos))

                          (= (:type args) "RUN_SIMULATION_BATCH")
                          (let [combos (:combos args)
                                config (:config args)]
                            (mapv (fn [combo]
                                    (simulate/simulate-one-combo
                                     {:rec (:rec combo)
                                      :cfg-dict config
                                      :n-sims (:n-sims-per-combo config)
                                      :seed (+ (:seed config)
                                               (* (:idx combo) 7919))}))
                                  combos))

                          (= (:type args) "RUN_AGGREGATION")
                          (let [combos (:combos args)
                                config (:config args)
                                strat  (vdata/build-stratified-data
                                         combos 1.0)
                                tot-wt (reduce + (map :weight strat))
                                vd     (vdata/calculate-vdata strat tot-wt)
                                hr-d   (vdata/build-hr-distribution-data
                                         combos 0.025)
                                km-ci  (vdata/build-km-ci-data
                                         combos config)
                                [hr-p t80] (vdata/build-path-bins combos)
                                alive-d (vdata/build-alive-scatter-data
                                         combos)
                                bat-alive-d (vdata/build-bat-alive-distribution-data
                                             combos)]
                            {:vdata   vd
                             :hr-data hr-d
                             :km-ci   km-ci
                             :hr-paths hr-p
                             :t80-bins t80
                             :alive-data alive-d
                             :bat-alive-data bat-alive-d})

                          :else
                          (simulate/simulate-one-combo args))
                    clj-res (if res (walk/keywordize-keys res) nil)]
                (.postMessage js/self (clj->js {:id id
                                                :type "SIMULATION_RESULT"
                                                :result clj-res
                                                :success true})))
              (catch js/Error e
                (js/console.error "Worker error:" e)
                (.postMessage js/self (clj->js {:id id
                                                :type "SIMULATION_RESULT"
                                                :error (.-message e)
                                                :success false}))))))))
