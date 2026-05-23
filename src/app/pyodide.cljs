(ns app.pyodide
  (:require [app.state :as state]
            [app.worker-pool :as wp]
            [app.regal-fit :as regal-fit]
            [cljs.core.async :refer [go <! >! timeout chan]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn log [msg]
  (js/console.log "[Main Simulator]" msg))

(defn init! []
  (log "Simulator init. Pyodide removed. Ready."))

(defn run-stage1! [family cfg]
  (try
    (cond
      (= family "weibull") (regal-fit/apply-prefilter-weibull cfg)
      (= family "cure")    (regal-fit/apply-prefilter-cure cfg)
      (= family "leaky")   (regal-fit/apply-prefilter-leaky cfg))
    (catch js/Error e
      (js/console.error "Stage 1 Error:" e)
      (throw e))))

(defn start-simulation! []
  (let [config (:config @state/app-state)
        families (:families config)]

    (swap! state/app-state assoc :status :running-stage1 :results {} :error-message nil)

    (go
      ;; Small timeout to let UI update
      (<! (timeout 50))

      (try
        (let [all-accepted (atom {})
              total-combos (atom 0)]

          ;; Stage 1
          (doseq [fam families]
            (log (str "Running Stage 1 for " fam))
            (let [accepted (run-stage1! fam config)]
              (log (str fam " accepted: " (count accepted)))
              (swap! all-accepted assoc fam accepted)
              (swap! total-combos + (count accepted))))

          (swap! state/app-state assoc :status :running-stage2
                 :progress {:total @total-combos :completed 0})

          ;; Stage 2
          (let [results (atom {})
                completed (atom 0)
                total @total-combos
                start-time (js/Date.now)]

            (wp/clear-queue!)

            (if (= total 0)
              (swap! state/app-state assoc :status :done :view :results)
              (doseq [fam families
                      [idx rec] (map-indexed vector (get @all-accepted fam))]

                (wp/submit-job!
                 {:rec rec
                  :cfg_dict config
                  :n_sims (:n_sims_per_combo config)
                  :seed (+ (:seed config) (* idx 7919))}

                 (fn [{:keys [success? result error]}]
                   (swap! completed inc)
                   (swap! state/app-state assoc-in [:progress :completed] @completed)

                   (when (and success? result)
                     (swap! results update fam (fnil conj []) result))

                   (when (= @completed total)
                     (log (str "All simulations done in " (/ (- (js/Date.now) start-time) 1000) "s"))
                     (swap! state/app-state assoc
                            :status :done
                            :results @results
                            :view :results))))))))
        (catch js/Error e
          (swap! state/app-state assoc :status :error :error-message (.-message e)))))))
