(ns app.components.progress)

(defn progress-bar
  [{:keys [completed total label]}]
  (let [pct (if (and total (pos? total))
              (* 100 (/ completed total))
              0)]
    [:div.mb-6
     (when label
       [:p.text-sm.mb-1 label])
     [:div.w-full.bg-gray-200.rounded-full.h-2
      [:div.bg-blue-600.h-2.rounded-full
       {:style {:width (str pct "%")}}]]]))
