(ns app.discovery.events
  (:require [re-frame.core :as rf]
            [app.discovery.subs :as discovery.subs]))

(rf/reg-event-fx
 ::update-discovery-params
 (fn [{:keys [db]} [_ new-params]]
   (let [new-db (assoc-in db [::discovery.subs/discovery :params] new-params)]
     {:db new-db
      :sync-to-url! {:db new-db :route (:current-route new-db) :data (:params (::discovery.subs/discovery new-db))}})))

(rf/reg-event-db
 ::set-discovery-calc-params
 (fn [db [_ value]]
   (assoc-in db [::discovery.subs/discovery :calc-params] value)))

(rf/reg-event-db
 ::set-discovery-sim-status
 (fn [db [_ value]]
   (assoc-in db [::discovery.subs/discovery :sim-status] value)))

(rf/reg-event-db
 ::set-discovery-sim-result
 (fn [db [_ value]]
   (assoc-in db [::discovery.subs/discovery :sim-result] value)))

(rf/reg-event-db
 ::set-discovery-active-family
 (fn [db [_ value]]
   (assoc-in db [::discovery.subs/discovery :active-family] value)))

(rf/reg-event-db
 ::set-discovery
 (fn [db [_ value]]
   (assoc db ::discovery.subs/discovery value)))

(rf/reg-event-db
 ::set-discovery-param
 (fn [db [_ param value]]
   (assoc-in db [::discovery.subs/discovery param] value)))
