(ns app.components.tabs)

(defn tab-bar
  [{:keys [active-tab tabs on-change container-class button-class]}]
  [:div.flex.gap-2.p-1.rounded-lg
   {:class (or container-class "bg-gray-100")}
   (for [[tab label] tabs]
     ^{:key tab}
     [:button.px-3.py-1.rounded-md.text-sm.transition-all
      {:class (if (= active-tab tab)
                (or button-class
                    "bg-white text-gray-800 shadow-sm font-semibold")
                "text-gray-600 hover:text-gray-800")
       :on-click #(on-change tab)}
      label])])
