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

;; Chart card: uniform sizing wrapper for Vega charts
(defn chart-card
  [{:keys [title subtitle class]}
   & children]
  [:div.flex.flex-col.rounded-xl.border.border-gray-100.shadow-sm
   {:class
    (str "bg-white overflow-hidden transition-shadow "
         "hover:shadow-md "
         (or class ""))
    :style {:width "360px"
            :min-width "360px"}}
   (when title
     [:div.px-4.pt-3.pb-1
      [:p.text-sm.font-semibold.text-gray-700.leading-tight title]
      (when subtitle
        [:p.text-xs.text-gray-400 subtitle])])
   (into
    [:div.flex.items-center.justify-center.p-3]
    children)])
