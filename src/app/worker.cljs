(ns app.worker
  (:require [app.regal-fit.simulation-vectorized :as simulate]
            [app.stress-test.simulate :as stress-test]
            [app.stress-test.simulate-vectorized :as stress-test-vec]
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
                          (= (:type args) "RUN_STRESS_TEST")
                          (stress-test/simulate-one-combo args)

                          (= (:type args) "RUN_STRESS_TEST_BATCH")
                          (stress-test-vec/simulate-combos-vectorized args)

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
