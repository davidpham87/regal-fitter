(ns app.components.alert)

(defn info-callout
  [{:keys [title-el description-el content footer container-class]}]
  [:div.p-5.rounded-xl.border.mb-6
   {:class (or container-class ["bg-blue-50" "border-blue-100"])}
   (when title-el title-el)
   (when description-el description-el)
   content
   (when footer
     [:p.text-xs.text-gray-400.italic.mt-3.pt-2.border-t.border-blue-100
      footer])])
