(ns app.components.section
  (:require [reagent.core :as r]))

(defn collapsible-section
  [{:keys [title initial-collapsed? content]}]
  (let [collapsed? (r/atom (if (nil? initial-collapsed?)
                             true
                             initial-collapsed?))]
    (fn [{:keys [title content]}]
      [:div.mb-8
       [:div.flex.justify-between.items-center.border-b.pb-2.mb-4
        {:class "cursor-pointer select-none"
         :on-click #(swap! collapsed? not)}
        [:h3.text-lg.font-bold.text-gray-800 title]
        [:button.text-xs.font-semibold.px-3.py-1.rounded-lg.border
         {:type "button"
          :class (str "bg-gray-50 hover:bg-gray-100 "
                      "transition-colors flex gap-1")
          :on-click (fn [e]
                      (.stopPropagation e)
                      (swap! collapsed? not))}
         [:span (if @collapsed? "Expand" "Collapse")]
         [:span (if @collapsed? "▶" "▼")]]]
       (when-not @collapsed?
         content)])))
