(ns app.stress-test.events
  (:require [re-frame.core :as rf]
            [app.stress-test.subs :as ass]))

(rf/reg-event-fx
 ::set-stress-test-config-key
 (fn [{:keys [db]} [_ k v]]
   (let [new-db (assoc-in db [::ass/stress-test-config k] v)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (::ass/stress-test-config new-db)}})))

(rf/reg-event-fx
 ::update-stress-test-config
 (fn [{:keys [db]} [_ new-config]]
   (let [new-db (assoc db ::ass/stress-test-config new-config)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (::ass/stress-test-config new-db)}})))

(rf/reg-event-db
 ::update-power-config
 (fn [db [_ new-config]]
   (assoc db ::ass/power-config new-config)))

(rf/reg-event-db
 ::set-stress-test-status
 (fn [db [_ status]]
   (assoc db ::ass/stress-test-status status)))

(rf/reg-event-db
 ::set-stress-test-results
 (fn [db [_ results]]
   (assoc db ::ass/stress-test-results results)))

(rf/reg-event-db
 ::set-stress-test-progress
 (fn [db [_ total completed]]
   (assoc db ::ass/stress-test-progress {:total total :completed completed})))
