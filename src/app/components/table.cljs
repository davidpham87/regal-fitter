(ns app.components.table)

(defn key-value-list
  [{:keys [title items]}]
  [:div.bg-gray-50.p-4.rounded-xl.border
   (when title
     [:h3.text-xs.font-bold.text-gray-500.uppercase.tracking-wider.mb-3
      title])
   [:div.space-y-2
    (for [[k v] items]
      ^{:key k}
      [:div.flex.justify-between.text-xs.border-b.pb-1
       [:span.font-semibold.text-gray-600 k]
       [:span.text-gray-800.font-medium v]])]])

(defn sortable-header
  [label k sort-state]
  (let [{curr-key :key desc? :desc?} @sort-state]
    [:th.px-4.py-2.text-left.cursor-pointer.select-none.hover:bg-gray-100
     {:on-click (fn []
                  (if (= curr-key k)
                    (swap! sort-state update :desc? not)
                    (reset! sort-state {:key k :desc? false})))}
     (str label
          (when (= curr-key k)
            (if desc? " ↓" " ↑")))]))
