(ns app.visualization.charts.vega
  (:require [reagent.core :as r]
            ["vega-embed" :default vegaEmbed]))

(defn vega-lite [spec]
  (let [ref (r/atom nil)
        view-atom (atom nil)
        render-chart (fn [spec]
                       (when @ref
                         (when-let [v @view-atom]
                           (try
                             (.finalize v)
                             (catch :default e (js/console.error "Error finalizing vega view" e)))
                           (reset! view-atom nil))
                         (-> (vegaEmbed @ref (clj->js spec) #js {:actions false})
                             (.then (fn [res] (reset! view-atom (.-view res))))
                             (.catch (fn [err] (js/console.error "Vega error:" err))))))]
    (r/create-class
     {:reagent-render
      (fn [spec]
        [:div.vega-chart-container {:ref #(reset! ref %)}])
      :component-did-mount
      (fn [this]
        (let [[_ spec] (r/argv this)]
          (render-chart spec)))
      :component-did-update
      (fn [this]
        (let [[_ spec] (r/argv this)]
          (render-chart spec)))
      :component-will-unmount
      (fn [this]
        (when-let [v @view-atom]
          (try
            (.finalize v)
            (catch :default e))
          (reset! view-atom nil)))})))

(defn make-chart [data spec]
  [vega-lite
   (merge {:width 360 :height 240
           :data {:values data}}
          spec)])
