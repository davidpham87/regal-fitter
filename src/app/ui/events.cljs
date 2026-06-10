(ns app.ui.events
  (:require [re-frame.core :as rf]
            [app.ui.subs :as ui.subs]))

(rf/reg-event-db
 ::set-enrollment-mode-param
 (fn [db [_ param value]]
   (assoc-in db [::ui.subs/enrollment-mode param] value)))

(rf/reg-event-db
 ::set-enrollment-mode
 (fn [db [_ value]]
   (assoc db ::ui.subs/enrollment-mode value)))
