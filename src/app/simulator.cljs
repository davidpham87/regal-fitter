(ns app.simulator
  (:require [app.state :as state]
            [app.worker-pool :as wp]
            [app.db :as db]
            [app.regal-fit.prefilter :as prefilter]
            [app.regal-fit.survival :as survival]
            [cljs.numpy :as np]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [cljs.core.async :refer [go <! >! timeout chan]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defn log [msg]
  (js/console.log "[Main Simulator]" msg))

(defn init! []
  (log "Simulator init. Pyodide removed. Ready."))



(defn- cached-submit-job! [data callback]
  (go
    (let [k (<! (db/hash-key data))
          cached (<! (db/get-cache k))]
      (if cached
        (callback {:success? true :result cached})
        (wp/submit-job!
         data
         (fn [res]
           (when (and (:success? res) (:result res))
             (db/set-cache k (:result res)))
           (callback res)))))))

(defn- submit-simulation-jobs!
  [config all-accepted families results completed total start-time]
  (wp/clear-queue!)
  (if (= total 0)
    (do (rf/dispatch [:set-status :done])
        (rf/dispatch [:set-view :results]))
    (let [all-combos (js/Array.)]
      (doseq [fam families]
        (let [fam-kw (keyword fam)]
          (doseq [[idx rec] (map-indexed vector (get all-accepted fam-kw))]
            (.push all-combos {:rec rec :idx idx :family fam}))))
      (let [combos-vec (js->clj all-combos :keywordize-keys true)
            num-workers (js/Math.max 1 (count @wp/pool))
            chunk-size (js/Math.max 5
                                     (js/Math.min 20
                                                  (js/Math.ceil
                                                   (/ total
                                                      (* 4 num-workers)))))
            chunks (partition-all chunk-size combos-vec)]
        (doseq [chunk chunks]
          (cached-submit-job!
           {:type "RUN_SIMULATION_BATCH"
            :combos chunk
            :config config}
           (fn [{:keys [success? result error]}]
             (swap! completed + (count chunk))
             (rf/dispatch [:set-progress total @completed])
             (when (and success? result)
               (dotimes [i (count chunk)]
                 (let [combo (nth chunk i)
                       res (nth result i)
                       fam-kw (keyword (:family combo))]
                   (swap! results update fam-kw (fnil conj []) res))))
             (when (>= @completed total)
               (log (str "All simulations done in "
                         (/ (- (js/Date.now) start-time) 1000) "s"))
               (rf/dispatch [:set-status :done])
               (rf/dispatch [:set-results @results])
               (rf/dispatch [:set-view :results])))))))))

(rf/reg-event-db
 :clear-prefilter-results
 (fn [db _]
   (assoc db :prefilter-results {})))

(rf/reg-event-fx
 :prefilter-done
 (fn [{:keys [db]} [_ fam result]]
   (let [new-results (assoc (:prefilter-results db) (keyword fam) result)
         new-db (assoc db :prefilter-results new-results)
         families (:families (:config db))]
     (if (= (count new-results) (count families))
       {:db new-db
        :dispatch [:start-stage2]}
       {:db new-db}))))

(rf/reg-event-fx
 :start-stage2
 (fn [{:keys [db]} _]
   (let [all-accepted (:prefilter-results db)
         families (:families (:config db))
         total-combos (reduce + (map count (vals all-accepted)))]
     (submit-simulation-jobs! (:config db) all-accepted families
                              (atom {}) (atom 0) total-combos (js/Date.now))
     {:db db
      :dispatch-n [[:set-status :running-stage2]
                   [:set-progress total-combos 0]]})))

(defn start-simulation! []
  (let [config (:config @rf-db/app-db)
        families (:families config)]
    (rf/dispatch [:set-status :running-stage1])
    (rf/dispatch [:set-results {}])
    (rf/dispatch [:set-error nil])
    (rf/dispatch [:clear-prefilter-results])
    (doseq [fam families]
      (log (str "Submitting Stage 1 for " fam))
      (cached-submit-job!
       {:type "RUN_PREFILTER"
        :version 3
        :family fam
        :config config}
       (fn [{:keys [success? result error]}]
         (if success?
           (do
             (log (str fam " accepted: " (count result)))
             (rf/dispatch [:prefilter-done fam result]))
           (do
             (js/console.error "Prefilter error for" fam error)
             (rf/dispatch [:prefilter-done fam []]))))))))

(defn abort-simulation! []
  (wp/abort-pool!)
  (rf/dispatch [:set-status :idle])
  (rf/dispatch [:set-error "Aborted by user"]))

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
  (let [config (:config @rf-db/app-db)
        rec (build-discovery-rec family params)]
    (rf/dispatch [:set-discovery-sim-status :running])
    (rf/dispatch [:set-discovery-sim-result nil])
    (cached-submit-job!
     {:rec rec
      :cfg-dict (assoc config :ignore-prefilter? true)
      :n-sims (or (:n-sims params) (:n-sims-per-combo config))
      :seed (:seed config)}
     (fn [{:keys [success? result error]}]
       (if success?
         (if result
           (do
             (rf/dispatch [:set-discovery-sim-status :done])
             (rf/dispatch [:set-discovery-sim-result result]))
           (do
             (rf/dispatch [:set-discovery-sim-status :failed-prefilter])
             (rf/dispatch [:set-discovery-sim-result nil])))
         (do
           (rf/dispatch [:set-discovery-sim-status :error])
           (rf/dispatch [:set-discovery-sim-result error])))))))

(defn- arange [start stop step]
  (let [eps 1e-9]
    (loop [curr start
           acc []]
      (if (< curr (- stop eps))
        (recur (+ curr step) (conj acc curr))
        acc))))
(defn start-stress-test! [form-values]
  (let [main-config (:config @rf-db/app-db)
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
                 {:mos mos
                  :k k})
        total-combos (count combos)]
    (rf/dispatch [:set-stress-test-status :running])
    (rf/dispatch [:set-stress-test-results []])
    (rf/dispatch [:set-stress-test-progress total-combos 0])
    (rf/dispatch [:set-error nil])
    (wp/clear-queue!)
    (if (= total-combos 0)
      (rf/dispatch [:set-stress-test-status :done])
      (let [num-workers (js/Math.max 1 (+ (count @wp/pool)
                                          (count @wp/busy-workers)))
            chunk-size (js/Math.ceil (/ total-combos num-workers))
            chunks (partition-all chunk-size combos)
            completed (atom 0)
            results (atom [])
            start-time (js/Date.now)
            has-error (atom false)]
        (doseq [chunk chunks]
          (cached-submit-job!
           {:type "RUN_STRESS_TEST_BATCH"
            :combos chunk
            :config config}
           (fn [{:keys [success? result error]}]
             (if success?
               (when (not @has-error)
                 (swap! completed + (count chunk))
                 (swap! results into result)
                 (rf/dispatch
                  [:set-stress-test-progress total-combos @completed])
                 (when (>= @completed total-combos)
                   (log (str "Stress test done in "
                             (/ (- (js/Date.now) start-time) 1000) "s"))
                   (rf/dispatch [:set-stress-test-status :done])
                   (rf/dispatch
                    [:set-stress-test-results
                     (vec (sort-by (juxt :mos :k) @results))])))
               (do
                 (reset! has-error true)
                 (rf/dispatch [:set-stress-test-status :error])
                 (rf/dispatch [:set-error error]))))))))))
