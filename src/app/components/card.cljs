(ns app.components.card
  (:require [reitit.frontend.easy :as rfe]))

(defn dashboard-card
  [{:keys [title description page button-label button-class]}]
  [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
   {:class ["justify-between" "hover:shadow-md" "transition-all"]}
   [:div
    [:h2.text-xl.font-bold.text-gray-800.mb-2 title]
    [:p.text-sm.text-gray-600.mb-4 description]]
   [:div
    [:a {:class (or button-class
                    "text-blue-500 hover:underline font-semibold")
         :href (rfe/href page)}
     button-label]]])
