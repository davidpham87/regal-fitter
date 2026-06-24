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
        container-width (r/atom 400)
        resize-listener (fn []
                          (when @ref
                            (reset! container-width (.-clientWidth @ref))))
        render-chart (fn [spec current-width]
                       (when @ref
                         (when-let [v @view-atom]
                           (try
                             (.finalize ^js v)
                             (catch :default e (js/console.error "Error finalizing vega view" e)))
                           (reset! view-atom nil))
                         (let [target-width (js/Math.max 150 (- current-width 48))
                               adjusted-spec (assoc spec :width target-width)]
                           (-> (vegaEmbed @ref (clj->js adjusted-spec) #js {:actions false})
                               (.then (fn [res] (reset! view-atom (.-view res))))
                               (.catch (fn [err] (js/console.error "Vega error:" err)))))))]
    (r/create-class
     {:reagent-render
      (fn [spec]
        (let [_ @container-width]
          [:div.vega-chart-container.w-full.overflow-x-auto {:ref #(reset! ref %)}]))
      :component-did-mount
      (fn [this]
        (js/window.addEventListener "resize" resize-listener)
        (when @ref
          (reset! container-width (.-clientWidth @ref)))
        (let [[_ spec] (r/argv this)]
          (render-chart spec @container-width)))
      :component-did-update
      (fn [this]
        (let [[_ spec] (r/argv this)]
          (render-chart spec @container-width)))
      :component-will-unmount
      (fn [this]
        (js/window.removeEventListener "resize" resize-listener)
        (when-let [v @view-atom]
          (try
            (.finalize ^js v)
            (catch :default e))
          (reset! view-atom nil)))})))

(defn make-chart [data spec]
  [vega-lite
   (merge {:width 360 :height 240
           :data {:values data}}
          spec)])
