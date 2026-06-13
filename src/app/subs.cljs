(ns app.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :app-state
 (fn [db _]
   db))

(rf/reg-sub
 :config
 (fn [db _]
   (:config db)))

(rf/reg-sub
 :config-version
 (fn [db _]
   (:config-version db)))

(rf/reg-sub
 :stress-test-config
 (fn [db _]
   (:stress-test-config db)))

(rf/reg-sub
 :power-config
 (fn [db _]
   (:power-config db)))

(rf/reg-sub
 :enrollment-mode
 (fn [db _]
   (:enrollment-mode db)))

(rf/reg-sub
 :status
 (fn [db _]
   (:status db)))

(rf/reg-sub
 :stress-test-status
 (fn [db _]
   (:stress-test-status db)))

(rf/reg-sub
 :progress
 (fn [db _]
   (:progress db)))

(rf/reg-sub
 :stress-test-progress
 (fn [db _]
   (:stress-test-progress db)))

(rf/reg-sub
 :results
 (fn [db _]
   (:results db)))

(rf/reg-sub
 :stress-test-results
 (fn [db _]
   (:stress-test-results db)))

(rf/reg-sub
 :error-message
 (fn [db _]
   (:error-message db)))

(rf/reg-sub
 :view
 (fn [db _]
   (:view db)))

(rf/reg-sub
 :active-page
 (fn [db _]
   (:active-page db)))

(rf/reg-sub
 :discovery
 (fn [db _]
   (:discovery db)))

(rf/reg-sub
 :current-route
 (fn [db _]
   (:current-route db)))

;; ── Aggregation subscriptions ─────────────────────────────────────────────
;;
;; Usage:
;;   @(rf/subscribe [:aggregation/loading? cache-key])
;;   @(rf/subscribe [:aggregation/data     cache-key])

(rf/reg-sub
 :aggregation/slot
 (fn [db [_ cache-key]]
   (get-in db [:aggregation cache-key])))

(rf/reg-sub
 :aggregation/loading?
 (fn [db [_ cache-key]]
   (boolean (get-in db [:aggregation cache-key :loading?]))))

(rf/reg-sub
 :aggregation/data
 (fn [db [_ cache-key]]
   (get-in db [:aggregation cache-key :data])))
