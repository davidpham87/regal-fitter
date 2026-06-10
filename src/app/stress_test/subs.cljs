(ns app.stress-test.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 ::stress-test-config
 (fn [db _]
   (::stress-test-config db)))

(rf/reg-sub
 ::power-config
 (fn [db _]
   (::power-config db)))

(rf/reg-sub
 ::stress-test-status
 (fn [db _]
   (::stress-test-status db)))

(rf/reg-sub
 ::stress-test-progress
 (fn [db _]
   (::stress-test-progress db)))

(rf/reg-sub
 ::stress-test-results
 (fn [db _]
   (::stress-test-results db)))
