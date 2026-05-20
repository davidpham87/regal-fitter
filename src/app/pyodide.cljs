(ns app.pyodide
  (:require [app.state :as state]
            [app.worker-pool :as wp]
            [cljs.core.async :refer [go <! >! timeout chan]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(def pyodide (atom nil))

(defn log [msg]
  (js/console.log "[Main Pyodide]" msg))

(defn init! []
  (go
    (log "Loading Pyodide...")
    (let [p (<p! (js/loadPyodide))]
      (log "Loading packages...")
      (<p! (.loadPackage p (clj->js ["numpy", "scipy"])))
      (log "Fetching script...")
      (let [resp (<p! (js/fetch "/regal_fit_browser.py"))
            code (<p! (.text resp))]
        (.runPython p code)
        (log "Pyodide ready!")
        (reset! pyodide p)))))

(defn run-stage1! [family cfg-dict]
  (let [p @pyodide]
    (try
      (let [clean-cfg (dissoc cfg-dict :families)]
        (.set (.-globals p) "cfg_dict" (clj->js clean-cfg)))
      (.runPython p "
cfg = Config(**cfg_dict.to_py())
accepted = []
")
      (cond
        (= family "weibull") (.runPython p "accepted = abc_prefilter_weibull(cfg)")
        (= family "cure")    (.runPython p "accepted = abc_prefilter_cure(cfg)")
        (= family "leaky")   (.runPython p "accepted = abc_prefilter_leaky(cfg)"))

      (let [res (.runPython p "[dict(r) for r in accepted]")]
        (js->clj (if (fn? (.-toJs res)) (.toJs res (clj->js {:dict_converter js/Object.fromEntries})) res) :keywordize-keys true))
      (catch js/Error e
        (js/console.error "Stage 1 Error:" e)
        (throw e)))))

(defn start-simulation! []
  (let [config (:config @state/app-state)
        families (:families config)]

    (swap! state/app-state assoc :status :running-stage1 :results {} :error-message nil)

    (go
      ;; ensure pyodide is initialized
      (loop [wait 0]
        (if (nil? @pyodide)
          (when (< wait 20)
            (<! (timeout 500))
            (recur (inc wait)))
          nil))
      (if (nil? @pyodide)
         (swap! state/app-state assoc :status :error :error-message "Pyodide failed to load in main thread.")
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
             (swap! state/app-state assoc :status :error :error-message (.-message e))))))))
