(ns app.ui.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 ::enrollment-mode
 (fn [db _]
   (::enrollment-mode db)))
