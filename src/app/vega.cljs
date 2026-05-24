(ns app.vega
  (:require [reagent.core :as r]
            ["vega-embed" :default vegaEmbed]))

(defn vega-lite [spec]
  (let [ref (r/atom nil)]
    (r/create-class
     {:reagent-render
      (fn []
        [:div {:ref #(reset! ref %)}])
      :component-did-mount
      (fn [this]
        (when @ref
          (vegaEmbed @ref (clj->js spec) #js {:actions false})))
      :component-did-update
      (fn [this]
        (when @ref
          (vegaEmbed @ref (clj->js spec) #js {:actions false})))})))

(defn- calculate-bat-edges [bat-meds bin-width]
  (let [bat-min (js/Math.floor (/ (apply min bat-meds) bin-width))
        bat-max (js/Math.ceil (/ (apply max bat-meds) bin-width))]
    (range (* bat-min bin-width) (+ (* bat-max bin-width) bin-width) bin-width)))

(defn- calculate-weighted-mean [k sub sub-w]
  (let [vs (map k sub)
        valid-idx (keep-indexed (fn [i v] (when (and v (not (js/isNaN v))) i)) vs)]
    (if (empty? valid-idx)
      nil
      (/ (reduce + (map #(* (nth vs %) (nth sub-w %)) valid-idx))
         (reduce + (map #(nth sub-w %) valid-idx))))))

(defn- build-bin-record [lo bin-width results weights]
  (let [hi (+ lo bin-width)
        mask (map-indexed (fn [i r] (and (>= (:bat-med r) lo) (< (:bat-med r) hi))) results)
        sub (keep-indexed (fn [i m] (when m (nth results i))) mask)
        sub-w (keep-indexed (fn [i m] (when m (nth weights i))) mask)
        sub-w-sum (reduce + sub-w)]
    (when (pos? sub-w-sum)
      {:bat-mid (+ lo (/ bin-width 2))
       :p-success-overall (calculate-weighted-mean :p-success-overall sub sub-w)
       :p-hr-below-threshold (calculate-weighted-mean :p-hr-below-threshold sub sub-w)
       :median-hr-final (calculate-weighted-mean :median-hr-final sub sub-w)})))

(defn build-stratified-data [results bin-width]
  (let [bat-meds (map :bat-med results)
        weights (map :acceptance-rate results)
        tot-wt (reduce + weights)]
    (if (or (empty? results) (zero? tot-wt))
      []
      (let [edges (calculate-bat-edges bat-meds bin-width)]
        (keep #(build-bin-record % bin-width results weights) edges)))))

(defn results-charts [family items]
  (let [data (build-stratified-data items 1.0)
        vdata (map (fn [d]
                     {:bat-mid (:bat-mid d)
                      :success (* 100 (or (:p-success-overall d) 0))
                      :hr-final (or (:median-hr-final d) 0)})
                   data)]
    [:div.mb-8.results-charts-container
     [:h3.text-lg.font-bold.mb-2 family " - Stratified by BAT mOS"]
     (if (empty? vdata)
       [:div "No accepted combinations in this family to display charts."]
       [:div.flex.flex-wrap.gap-4
        [vega-lite
         {:width 400 :height 300 :data {:values vdata} :title "P(success) by BAT mOS"
          :layer [{:mark {:type "line" :point true}
                   :encoding {:x {:field "bat-mid" :type "quantitative" :title "BAT mOS (months)"}
                              :y {:field "success" :type "quantitative" :title "P(success) %" :scale {:domain [0 100]}}
                              :color {:value "#4488cc"}}}
                  {:mark "rule" :data {:values [{:y 50}]}
                   :encoding {:y {:field "y" :type "quantitative"} :color {:value "gray"} :strokeDash {:value [4 4]}}}]}]
        [vega-lite
         {:width 400 :height 300 :data {:values vdata} :title "Implied Final HR by BAT mOS"
          :layer [{:mark {:type "line" :point true}
                   :encoding {:x {:field "bat-mid" :type "quantitative" :title "BAT mOS (months)"}
                              :y {:field "hr-final" :type "quantitative" :title "Final HR" :scale {:domain [0 1.2]}}
                              :color {:value "#aa5599"}}}
                  {:mark "rule" :data {:values [{:y 0.636}]}
                   :encoding {:y {:field "y" :type "quantitative"} :color {:value "red"} :strokeDash {:value [4 4]}}}]}]])]))
