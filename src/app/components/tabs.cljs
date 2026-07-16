(ns app.components.tabs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :tabs/active-tab
 (fn [db [_ tab-id default-tab]]
   (get-in db [:active-tabs tab-id] default-tab)))

(rf/reg-event-db
 :tabs/set-active-tab
 (fn [db [_ tab-id value]]
   (assoc-in db [:active-tabs tab-id] value)))

(defn tab-bar
  [{:keys [id active-tab tabs on-change container-class button-class
           default-tab]}]
  (let [active (if id
                 @(rf/subscribe [:tabs/active-tab id default-tab])
                 active-tab)
        change-fn (fn [tab]
                    (when id
                      (rf/dispatch [:tabs/set-active-tab id tab]))
                    (when on-change
                      (on-change tab)))]
    [:div.flex.gap-2.p-1.rounded-lg
     {:class (or container-class "bg-gray-100")}
     (for [[tab label] tabs]
       ^{:key tab}
       [:button.px-3.py-1.rounded-md.text-sm.transition-all
        {:class (if (= active tab)
                  (or button-class
                      "bg-white text-gray-800 shadow-sm font-semibold")
                  "text-gray-600 hover:text-gray-800")
         :on-click #(change-fn tab)}
        label])]))
