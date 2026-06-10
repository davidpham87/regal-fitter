(ns app.views.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 ::view
 (fn [db _]
   (::view db)))

(rf/reg-sub
 ::active-page
 (fn [db _]
   (::active-page db)))

(rf/reg-sub
 ::error-message
 (fn [db _]
   (::error-message db)))
