(ns app.views.events
  (:require [re-frame.core :as rf]
            [app.views.subs :as views.subs]))

(rf/reg-event-db
 ::set-view
 (fn [db [_ view]]
   (assoc db ::views.subs/view view)))

(rf/reg-event-db
 ::set-error
 (fn [db [_ error]]
   (assoc db ::views.subs/error-message error)))
