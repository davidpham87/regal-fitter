(ns app.worker
  (:require [app.regal-fit.simulate :as simulate]
            [app.stress-test.simulate :as stress-test]
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
                    res (if (= (:type args) "RUN_STRESS_TEST")
                          (stress-test/simulate-one-combo args)
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
