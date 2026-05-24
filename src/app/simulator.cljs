(ns app.simulator
  (:require [app.state :as state]
            [app.worker-pool :as wp]
            [app.regal-fit.prefilter : as prefilter]
            [cljs.core.async :refer [go <! >! timeout chan]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn log [msg]
  (js/console.log "[Main Simulator]" msg))

(defn init! []
  (log "Simulator init. Pyodide removed. Ready."))

(defn- run-stage1! [family cfg]
  (try
    (cond
      (= family "weibull") (prefilter/apply-prefilter-weibull cfg)
      (= family "cure")    (prefilter/apply-prefilter-cure cfg)
      (= family "leaky")   (prefilter/apply-prefilter-leaky cfg))
    (catch js/Error e
      (js/console.error "Stage 1 Error:" e)
      (throw e))))

(defn- submit-simulation-jobs! [config all-accepted families results completed total start-time]
  (wp/clear-queue!)
  (if (= total 0)
    (swap! state/app-state assoc :status :done :view :results)
    (doseq [fam families
            [idx rec] (map-indexed vector (get all-accepted (keyword fam)))]
      (wp/submit-job!
       {:rec rec :cfg-dict config :n-sims (:n-sims-per-combo config) :seed (+ (:seed config) (* idx 7919))}
       (fn [{:keys [success? result error]}]
         (swap! completed inc)
         (swap! state/app-state assoc-in [:progress :completed] @completed)
         (when (and success? result) (swap! results update (keyword fam) (fnil conj []) result))
         (when (= @completed total)
           (log (str "All simulations done in " (/ (- (js/Date.now) start-time) 1000) "s"))
           (swap! state/app-state assoc :status :done :results @results :view :results)))))))

(defn start-simulation! []
  (let [config (:config @state/app-state)
        families (:families config)]
    (swap! state/app-state assoc :status :running-stage1 :results {} :error-message nil)
    (go
      (<! (timeout 50))
      (try
        (let [all-accepted (reduce (fn [acc fam]
                                     (log (str "Running Stage 1 for " fam))
                                     (let [accepted (run-stage1! fam config)]
                                       (log (str fam " accepted: " (count accepted)))
                                       (assoc acc (keyword fam) accepted))) {} families)
              total-combos (reduce + (map count (vals all-accepted)))]
          (swap! state/app-state assoc :status :running-stage2 :progress {:total total-combos :completed 0})
          (submit-simulation-jobs! config all-accepted families (atom {}) (atom 0) total-combos (js/Date.now)))
        (catch js/Error e
          (swap! state/app-state assoc :status :error :error-message (.-message e)))))))
