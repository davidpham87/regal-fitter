(ns app.visualization.charts.vega
  (:require [reagent.core :as r]
            ["vega-embed" :default vegaEmbed]))

(defn- get-screen-width []
  (if (exists? js/window)
    (.-innerWidth js/window)
    800))

(defn- adjust-width [spec width]
  (if (and width (< width 600))
    (let [spec-width (:width spec 0)
          new-width (if (and spec-width (> spec-width (- width 40)))
                      (- width 40)
                      spec-width)]
      (assoc spec :width new-width))
    spec))

(defn vega-lite [spec]
  (let [ref (r/atom nil)
        view-atom (atom nil)
        screen-width (r/atom (get-screen-width))
        resize-listener (fn [] (reset! screen-width (get-screen-width)))
        render-chart (fn [spec current-width]
                       (when @ref
                         (when-let [v @view-atom]
                           (try
                             (.finalize v)
                             (catch :default e (js/console.error "Error finalizing vega view" e)))
                           (reset! view-atom nil))
                         (let [adjusted-spec (adjust-width spec current-width)]
                           (-> (vegaEmbed @ref (clj->js adjusted-spec) #js {:actions false})
                               (.then (fn [res] (reset! view-atom (.-view res))))
                               (.catch (fn [err] (js/console.error "Vega error:" err)))))))]
    (r/create-class
     {:reagent-render
      (fn [spec]
        ;; We refer to @screen-width here so Reagent tracks it.
        (let [_ @screen-width]
          [:div.vega-chart-container.overflow-x-auto {:ref #(reset! ref %)}]))
      :component-did-mount
      (fn [this]
        (js/window.addEventListener "resize" resize-listener)
        (let [[_ spec] (r/argv this)]
          (render-chart spec @screen-width)))
      :component-did-update
      (fn [this]
        (let [[_ spec] (r/argv this)]
          (render-chart spec @screen-width)))
      :component-will-unmount
      (fn [this]
        (js/window.removeEventListener "resize" resize-listener)
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
