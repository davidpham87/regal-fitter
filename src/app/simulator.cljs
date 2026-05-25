(ns app.simulator
  (:require [app.state :as state]
            [app.worker-pool :as wp]
            [app.db :as db]
            [app.regal-fit.prefilter :as prefilter]
            [app.regal-fit.survival :as survival]
            [cljs.numpy :as np]
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

(defn- cached-submit-job! [data callback]
  (go
    (let [k (db/hash-key data)
          cached (<! (db/get-cache k))]
      (if cached
        (callback {:success? true :result cached})
        (wp/submit-job!
          data
          (fn [res]
            (when (and (:success? res) (:result res))
              (db/set-cache k (:result res)))
            (callback res)))))))

(defn- submit-simulation-jobs! [config all-accepted families results completed
                                 total start-time]
  (wp/clear-queue!)
  (if (= total 0)
    (swap! state/app-state assoc :status :done :view :results)
    (doseq [fam families]
      (let [fam-kw (keyword fam)]
        (doseq [[idx rec] (map-indexed vector (get all-accepted fam-kw))]
          (cached-submit-job!
           {:rec rec
            :cfg-dict config
            :n-sims (:n-sims-per-combo config)
            :seed (+ (:seed config) (* idx 7919))}
           (fn [{:keys [success? result error]}]
             (swap! completed inc)
             (swap! state/app-state assoc-in
                    [:progress :completed] @completed)
             (when (and success? result)
               (swap! results update fam-kw (fnil conj []) result))
             (when (= @completed total)
               (log (str "All simulations done in "
                         (/ (- (js/Date.now) start-time) 1000) "s"))
               (swap! state/app-state assoc :status :done
                                            :results @results
                                            :view :results)))))))))

(defn start-simulation! []
  (let [config (:config @state/app-state)
        families (:families config)]
    (swap! state/app-state assoc :status :running-stage1
                                 :results {}
                                 :error-message nil)
    (go
      (<! (timeout 50))
      (try
        (let [all-accepted (reduce (fn [acc fam]
                                     (log (str "Running Stage 1 for " fam))
                                     (let [accepted (run-stage1! fam config)]
                                       (log (str fam " accepted: "
                                                 (count accepted)))
                                       (assoc acc (keyword fam) accepted)))
                                   {} families)
              total-combos (reduce + (map count (vals all-accepted)))]
          (swap! state/app-state assoc :status :running-stage2
                                       :progress {:total total-combos
                                                  :completed 0})
          (submit-simulation-jobs! config all-accepted families (atom {})
                                    (atom 0) total-combos (js/Date.now)))
        (catch js/Error e
          (swap! state/app-state assoc :status :error
                                       :error-message (.-message e)))))))

(defn- build-discovery-rec [family params]
  (let [bat-med-arr (np/array #js [(:bat-med params)])
        bat-shape-arr (np/array #js [(:weibull-k params)])
        bat-scale (.item (survival/weibull-scale-from-median
                           bat-med-arr bat-shape-arr)
                         0)
        bat-shape (:weibull-k params)
        rec {:family family
             :bat-scale bat-scale
             :bat-shape bat-shape}]
    (cond
      (= family "weibull")
      (let [gps-med-arr (np/array #js [(:gps-med params)])
            gps-shape-arr (np/array #js [(:weibull-k params)])
            gps-scale (.item (survival/weibull-scale-from-median
                               gps-med-arr gps-shape-arr)
                             0)
            gps-shape (:weibull-k params)]
        (assoc rec
               :gps-scale gps-scale
               :gps-shape gps-shape))

      (= family "cure")
      (let [unc-med-arr (np/array #js [(:gps-med params)])
            unc-shape-arr (np/array #js [(:weibull-k params)])
            unc-scale (.item (survival/weibull-scale-from-median
                               unc-med-arr unc-shape-arr)
                             0)
            unc-shape (:weibull-k params)]
        (assoc rec
               :cure-frac (:cure-frac params)
               :unc-scale unc-scale
               :unc-shape unc-shape))

      (= family "leaky")
      (let [unc-med-arr (np/array #js [(:gps-med params)])
            unc-shape-arr (np/array #js [(:weibull-k params)])
            unc-scale (.item (survival/weibull-scale-from-median
                               unc-med-arr unc-shape-arr)
                             0)
            unc-shape (:weibull-k params)]
        (assoc rec
               :cure-frac (:cure-frac params)
               :unc-scale unc-scale
               :unc-shape unc-shape
               :leak-yr (:leak-yr params))))))

(defn run-discovery-simulation! [family params]
  (let [config (:config @state/app-state)
        rec (build-discovery-rec family params)]
    (swap! state/app-state assoc-in [:discovery :sim-status] :running)
    (swap! state/app-state assoc-in [:discovery :sim-result] nil)
    (cached-submit-job!
      {:rec rec
       :cfg-dict (assoc config :ignore-prefilter? true)
       :n-sims (or (:n-sims params) (:n-sims-per-combo config))
       :seed (:seed config)}
      (fn [{:keys [success? result error]}]
        (if success?
          (if result
            (do
              (swap! state/app-state assoc-in
                     [:discovery :sim-status] :done)
              (swap! state/app-state assoc-in
                     [:discovery :sim-result] result))
            (do
              (swap! state/app-state assoc-in
                     [:discovery :sim-status] :failed-prefilter)
              (swap! state/app-state assoc-in
                     [:discovery :sim-result] nil)))
          (do
            (swap! state/app-state assoc-in
                   [:discovery :sim-status] :error)
            (swap! state/app-state assoc-in
                   [:discovery :sim-result] error)))))))

(defn- arange [start stop step]
  (let [eps 1e-9]
    (loop [curr start
           acc []]
      (if (< curr (- stop eps))
        (recur (+ curr step) (conj acc curr))
        acc))))

(defn start-stress-test! [form-values]
  (let [main-config (:config @state/app-state)
        stress-config form-values
        config (merge main-config
                      stress-config
                      {:obs-ev-ia (:n-ev-ia main-config)
                       :obs-inc-upd (- (:n-ev-upd main-config)
                                       (:n-ev-ia main-config))
                       :obs-inc-pr3 (- (:n-ev-pr3 main-config)
                                       (:n-ev-upd main-config))})
        mos-grid-cfg (:mos-grid config)
        k-grid-cfg (:k-grid config)
        mos-vals (arange (nth mos-grid-cfg 0)
                         (nth mos-grid-cfg 1)
                         (nth mos-grid-cfg 2))
        k-vals (arange (nth k-grid-cfg 0)
                       (nth k-grid-cfg 1)
                       (nth k-grid-cfg 2))
        combos (for [mos mos-vals
                     k k-vals]
                 {:type "RUN_STRESS_TEST"
                  :mos mos
                  :k k
                  :n-sims (:n-sims config)
                  :seed (+ (:seed config)
                           (js/Math.floor (* (js/Math.random) 100000)))
                  :config config})
        total-combos (count combos)]
    (swap! state/app-state assoc :stress-test-status :running
                                 :stress-test-results []
                                 :stress-test-progress {:total total-combos
                                                        :completed 0}
                                 :error-message nil)
    (wp/clear-queue!)
    (if (= total-combos 0)
      (swap! state/app-state assoc :stress-test-status :done)
      (let [completed (atom 0)
            results (atom [])
            start-time (js/Date.now)]
        (doseq [combo combos]
          (cached-submit-job!
           combo
           (fn [{:keys [success? result error]}]
             (swap! completed inc)
             (swap! state/app-state assoc-in
                    [:stress-test-progress :completed] @completed)
             (when (and success? result)
               (swap! results conj result))
             (when (= @completed total-combos)
               (log (str "Stress test simulations done in "
                         (/ (- (js/Date.now) start-time) 1000) "s"))
               (swap! state/app-state
                      assoc
                      :stress-test-status :done
                      :stress-test-results @results)))))))))
