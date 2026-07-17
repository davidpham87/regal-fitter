(ns app.events
  (:require
   [app.state :as state]
   [app.state-url :as state-url]
   [app.db :as db]
   [app.regal-fit.prefilter :as prefilter]
   [app.worker-pool :as wp]
   [app.simulator :as sim]
   [re-frame.core :as rf]
   [reitit.frontend.easy :as rfe]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {:config state/default-config
    :config-version 0
    :stress-test-config state/default-stress-test-config
    :power-config state/default-power-config
    :enrollment-mode {:mode :manual
                      :median-month 30
                      :k 0.1}
    :status :idle ;; :idle, :running-stage1, :running-stage2, :done, :error
    :stress-test-status :idle
    :progress {:total 0 :completed 0}
    :stress-test-progress {:total 0 :completed 0}
    :results {} ;; family -> list of combos
    :aggregation {} ;; [family n-sims] -> {:loading? bool :data map}
    :stress-test-results []
    :error-message nil
    :view :config-form ;; :config-form, :config-json, :results
    :active-page :home
    :discovery {:active-family "leaky"
                :params {:bat-med 10.0
                         :bat-shape 0.85
                         :bat-cure-frac 0.2
                         :bat-leak-yr 0.07
                         :gps-med 15.0
                         :gps-shape 0.85
                         :gps-cure-frac 0.2
                         :gps-leak-yr 0.07
                         :weibull-k 0.85
                         :delay 3.0
                         :placebo-mode? false
                         :filter-paths? true
                         :prefilter-check? true
                         :prefilter-tol-ia 1.5
                         :prefilter-tol-upd 1.5
                         :prefilter-tol-pr3 1.5
                         :tol-ia 4.0
                         :tol-upd 4.0
                         :tol-pr3 2.0
                         :n-sims 1000}
                :calc-params {:bat-med 10.0
                              :bat-shape 0.85
                              :bat-cure-frac 0.2
                              :bat-leak-yr 0.07
                              :gps-med 15.0
                              :gps-shape 0.85
                              :gps-cure-frac 0.2
                              :gps-leak-yr 0.07
                              :weibull-k 0.85
                              :delay 3.0
                              :placebo-mode? false
                              :filter-paths? true
                              :prefilter-check? true
                              :prefilter-tol-ia 1.5
                              :prefilter-tol-upd 1.5
                              :prefilter-tol-pr3 1.5
                              :tol-ia 4.0
                              :tol-upd 4.0
                              :tol-pr3 2.0
                              :n-sims 1000}}}))

(rf/reg-fx
 :decode-url-state
 (fn [{:keys [page state-str]}]
   (-> (state-url/decode-state state-str)
       (.then (fn [decoded]
                (rf/dispatch [:apply-decoded-state page decoded]))))))

(rf/reg-event-db
 :apply-decoded-state
 (fn [db [_ page decoded]]
   (cond
     (#{:fitter :fitter-sub} page)
     (update db :config merge decoded)

     (= page :placebo-stress)
     (update db :stress-test-config merge decoded)

     (= page :power-analysis)
     (update db :power-config merge decoded)

     (#{:discovery :discovery-sub} page)
     (update-in db [:discovery :params] merge decoded)

     :else
     db)))

(rf/reg-event-fx
 :navigate
 (fn [{:keys [db]} [_ page path-params query-params]]
   (let [new-db (cond
                  (#{:fitter-sub :fitter-sub-state} page)
                  (assoc db :active-page :fitter
                         :view (keyword (:subtab path-params)))

                  (#{:discovery-sub :discovery-sub-state} page)
                  (-> db
                      (assoc :active-page :discovery)
                      (assoc-in [:discovery :active-family]
                                (:subtab path-params)))

                  (#{:fitter :fitter-state} page)
                  (assoc db :active-page :fitter :view :config-form)

                  (#{:discovery :discovery-state} page)
                  (-> db
                      (assoc :active-page :discovery)
                      (assoc-in [:discovery :active-family] "leaky"))

                  (#{:r-repl :r-repl-state} page)
                  (assoc db :active-page :r-repl)

                  (#{:placebo-stress :placebo-stress-state} page)
                  (assoc db :active-page :placebo-stress)

                  (#{:power-analysis :power-analysis-state} page)
                  (assoc db :active-page :power-analysis)

                  :else
                  (assoc db :active-page page))
         new-db (assoc new-db :current-route
                       {:page page
                        :path-params path-params})
         effects {:db new-db}]
     (if-let [state-str (or (:state path-params) (:state query-params))]
       (assoc effects :decode-url-state {:page page :state-str state-str})
       effects))))

(defn- sync-to-url! [db route data]
  (let [clean (if (map? data)
                (dissoc data :enroll-bands :enrollment-mode)
                data)]
    (-> (state-url/encode-state clean)
        (.then (fn [b64]
                 (let [page (:page route)
                       path-params (:path-params route)
                       subtab (:subtab path-params)
                       [dest-route dest-path-params dest-query-params]
                       (cond
                         (#{:fitter :fitter-sub :fitter-sub-state} page)
                         [:fitter-sub
                          {:subtab (or subtab "config-form")}
                          {:state b64}]

                         (#{:placebo-stress :placebo-stress-state} page)
                         [:placebo-stress nil {:state b64}]

                         (#{:power-analysis :power-analysis-state} page)
                         [:power-analysis nil {:state b64}]

                         (#{:r-repl :r-repl-state} page)
                         [:r-repl nil {:state b64}]

                         (#{:discovery :discovery-state} page)
                         [:discovery nil {:state b64}]

                         :else
                         [page path-params nil])]
                   (when dest-route
                     (if dest-query-params
                       (rfe/replace-state dest-route dest-path-params dest-query-params)
                       (rfe/replace-state dest-route dest-path-params)))))))))

(rf/reg-fx
 :sync-to-url!
 (fn [{:keys [db route data]}]
   (sync-to-url! db route data)))

(rf/reg-event-fx
 :set-config-key
 (fn [{:keys [db]} [_ k v]]
   (let [new-db (assoc-in db [:config k] v)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:config new-db)}})))

(rf/reg-event-fx
 :reset-config
 (fn [{:keys [db]} [_ new-config]]
   (let [new-db (-> db
                    (assoc :config new-config)
                    (update :config-version (fnil inc 0)))]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:config new-db)}})))

(rf/reg-event-fx
 :update-config
 (fn [{:keys [db]} [_ new-config]]
   (let [new-db (assoc db :config new-config)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:config new-db)}})))

(rf/reg-event-fx
 :set-stress-test-config-key
 (fn [{:keys [db]} [_ k v]]
   (let [new-db (assoc-in db [:stress-test-config k] v)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:stress-test-config new-db)}})))

(rf/reg-event-fx
 :update-stress-test-config
 (fn [{:keys [db]} [_ new-config]]
   (let [new-db (assoc db :stress-test-config new-config)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:stress-test-config new-db)}})))

(rf/reg-event-fx
 :update-power-config
 (fn [{:keys [db]} [_ new-config]]
   (let [new-db (assoc db :power-config new-config)]
     {:db new-db
      :sync-to-url! {:db new-db
                     :route (:current-route new-db)
                     :data (:power-config new-db)}})))

(rf/reg-event-fx
 :update-discovery-params
 (fn [{:keys [db]} [_ new-params]]
   (let [new-db (assoc-in db [:discovery :params] new-params)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:params (:discovery new-db))}})))

(rf/reg-event-db
 :set-status
 (fn [db [_ status]]
   (assoc db :status status)))

(rf/reg-event-db
 :set-view
 (fn [db [_ view]]
   (assoc db :view view)))

(rf/reg-event-db
 :set-results
 (fn [db [_ results]]
   (assoc db :results results :aggregation {})))

(rf/reg-event-db
 :set-error
 (fn [db [_ error]]
   (assoc db :error-message error)))

(rf/reg-event-db
 :set-progress
 (fn [db [_ total completed]]
   (assoc db :progress {:total total :completed completed})))

(rf/reg-event-db
 :set-stress-test-status
 (fn [db [_ status]]
   (assoc db :stress-test-status status)))

(rf/reg-event-db
 :set-stress-test-results
 (fn [db [_ results]]
   (assoc db :stress-test-results results)))

(rf/reg-event-db
 :set-stress-test-progress
 (fn [db [_ total completed]]
   (assoc db :stress-test-progress {:total total :completed completed})))

(rf/reg-event-db
 :set-enrollment-mode-param
 (fn [db [_ param value]]
   (assoc-in db [:enrollment-mode param] value)))

(rf/reg-event-db
 :set-enrollment-mode
 (fn [db [_ value]]
   (assoc db :enrollment-mode value)))

(rf/reg-event-db
 :set-discovery-calc-params
 (fn [db [_ value]]
   (assoc-in db [:discovery :calc-params] value)))

(rf/reg-event-db
 :set-discovery-sim-status
 (fn [db [_ value]]
   (assoc-in db [:discovery :sim-status] value)))

(rf/reg-event-db
 :set-discovery-sim-result
 (fn [db [_ value]]
   (assoc-in db [:discovery :sim-result] value)))

(rf/reg-event-db
 :set-discovery-active-family
 (fn [db [_ value]]
   (assoc-in db [:discovery :active-family] value)))

(rf/reg-event-db
 :set-discovery
 (fn [db [_ value]]
   (assoc db :discovery value)))

(rf/reg-event-db
 :set-discovery-param
 (fn [db [_ param value]]
   (assoc-in db [:discovery param] value)))

;; ── Aggregation events ────────────────────────────────────────────────────
;;
;; :aggregation in db: {cache-key {:loading? bool :data map-or-nil}}
;; cache-key is [family n-sims] so each unique (family, N) gets its own slot.

(rf/reg-event-db
 :aggregation/set-loading
 (fn [db [_ cache-key loading?]]
   (assoc-in db [:aggregation cache-key :loading?] loading?)))

(rf/reg-event-db
 :aggregation/set-data
 (fn [db [_ cache-key data]]
   (-> db
       (assoc-in [:aggregation cache-key :loading?] false)
       (assoc-in [:aggregation cache-key :data] data))))

;; Clear all cached aggregation results (e.g. when new simulation finishes)
(rf/reg-event-db
 :aggregation/clear
 (fn [db _]
   (assoc db :aggregation {})))

;; Side-effect: submit a RUN_AGGREGATION job to the worker pool.
;; Dispatches :aggregation/set-loading true first, then
;; :aggregation/set-data when the worker responds.
(rf/reg-fx
 :aggregation/submit-job!
 (fn [{:keys [cache-key combos config]}]
   (rf/dispatch [:aggregation/set-loading cache-key true])
   (wp/submit-job!
    {:type   "RUN_AGGREGATION"
     :combos combos
     :config config}
    (fn [{:keys [success? result error]}]
      (if success?
        (rf/dispatch
         [:aggregation/set-data
          cache-key
          (js->clj result :keywordize-keys true)])
        (do
          (js/console.error "Aggregation worker error:" error)
          (rf/dispatch [:aggregation/set-loading cache-key false])))))))

;; Request aggregation for a given (family, n-sims) cache-key.
;; No-ops when data is already cached or a job is already running.
(rf/reg-event-fx
 :aggregation/request
 (fn [{:keys [db]} [_ cache-key combos config]]
   (let [slot (get-in db [:aggregation cache-key])]
     (when (and (not (:loading? slot)) (nil? (:data slot)))
       {:aggregation/submit-job!
        {:cache-key cache-key
         :combos    combos
         :config    config}}))))

(rf/reg-event-fx
 :clear-indexeddb-cache
 (fn [{:keys [db]} _]
   (db/clear-cache)
   (js/console.log "IndexedDB Cache cleared.")
   {:db (assoc db :prefilter-results {})}))

(rf/reg-event-db
 :debug/run-prefilter-direct
 (fn [db [_ family]]
   (let [config (:config db)
         res (case family
               "weibull" (prefilter/apply-prefilter-weibull config)
               "cure"    (prefilter/apply-prefilter-cure config)
               "leaky"   (prefilter/apply-prefilter-leaky config)
               [])]
     (assoc-in db [:debug/prefilter family]
               {:count (count res)
                :samples (take 5 res)}))))

(rf/reg-fx
 :push-state
 (fn [[route-name path-params query-params]]
   (rfe/push-state route-name path-params query-params)))

(rf/reg-fx
 :run-discovery-sim
 (fn [{:keys [family params]}]
   (sim/run-discovery-simulation! family params)))

(rf/reg-event-fx
 :export-to-discovery
 (fn [{:keys [db]} [_ family item]]
   (let [family-str (name family)
         gps-med (or (:unc-med item) (:gps-med item) (:bat-med item))
         gps-unc-med (or (:unc-med item) (:bat-med item))
         gps-unc-shape (or (:unc-shape item) 1.0)
         params {:bat-med (or (:bat-unc-med item) (:bat-med item) 10.0)
                 :bat-shape (or (:bat-shape item)
                                (:bat-unc-shape item)
                                (:weibull-k item)
                                1.0)
                 :bat-cure-frac (or (:bat-cure-frac item)
                                    (:bat-cf item)
                                    0.0)
                 :bat-leak-yr (or (:bat-leak-yr item) (:bat-leak item) 0.07)
                 :gps-med gps-med
                 :gps-shape (or (:gps-shape item)
                                (:unc-shape item)
                                (:weibull-k item)
                                1.0)
                 :gps-cure-frac (or (:gps-cure-frac item)
                                    (:cure-frac item)
                                    0.0)
                 :gps-leak-yr (or (:gps-leak-yr item) (:leak-yr item) 0.07)
                 :weibull-k (or (:weibull-k item) 1.0)
                 :delay 3.0
                 :placebo-mode? false
                 :filter-paths? true
                 :prefilter-check? true
                 :prefilter-tol-ia 1.5
                 :prefilter-tol-upd 1.5
                 :prefilter-tol-pr3 1.5
                 :tol-ia 4.0
                 :tol-upd 4.0
                 :tol-pr3 2.0
                 :n-sims 1000}
         new-db (-> db
                    (assoc-in [:discovery :active-family] family-str)
                    (assoc-in [:discovery :params] params)
                    (assoc-in [:discovery :calc-params] params)
                    (assoc-in [:discovery :sim-status] :running)
                    (assoc-in [:discovery :sim-result] nil))]
     {:db new-db
      :push-state [:discovery nil]
      :run-discovery-sim {:family family-str :params params}})))
