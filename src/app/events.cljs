(ns app.events
  (:require
   [app.state :as state]
   [app.state-url :as state-url]
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
    :stress-test-results []
    :error-message nil
    :view :config-form ;; :config-form, :config-json, :results
    :active-page :home
    :discovery {:active-family "leaky"
                :params {:bat-med 10.0
                         :weibull-k 0.85
                         :delay 3.0
                         :gps-med 15
                         :cure-frac 0.2
                         :leak-yr 0.07
                         :placebo-mode? false
                         :n-sims 1000}
                :calc-params {:bat-med 10.0
                              :weibull-k 0.85
                              :delay 3.0
                              :gps-med 15
                              :cure-frac 0.2
                              :leak-yr 0.07
                              :placebo-mode? false
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
                      (assoc-in [:discovery :active-family] "weibull"))

                  (#{:placebo-stress :placebo-stress-state} page)
                  (assoc db :active-page :placebo-stress)

                  :else
                  (assoc db :active-page page))
         new-db (assoc new-db :current-route
                       {:page page
                        :path-params path-params})
         effects {:db new-db}]
     (if-let [state-str (or (:state path-params) #_(:state query-params))]
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
                       [dest-route dest-path-params]
                       (cond
                         (= subtab "enrollment")
                         [(cond
                            (#{:fitter-sub :fitter-sub-state} page) :fitter-sub
                            :else page)
                          path-params]

                         (#{:fitter :fitter-sub :fitter-sub-state} page)
                         [:fitter-sub-state
                          {:subtab (or subtab "config-form") :state b64}]

                         (#{:placebo-stress :placebo-stress-state} page)
                         [:placebo-stress-state {:state b64}]

                         (#{:discovery :discovery-sub :discovery-sub-state} page)
                         [:discovery-sub-state
                          {:subtab (or subtab "weibull") :state b64}]

                         :else
                         [page path-params])]
                   (when dest-route
                     (rfe/replace-state dest-route dest-path-params))))))))

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

(rf/reg-event-db
 :update-power-config
 (fn [db [_ new-config]]
   (assoc db :power-config new-config)))

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
   (assoc db :results results)))

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
