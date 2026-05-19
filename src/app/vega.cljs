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

(defn build-stratified-data [results bin-width]
  (let [bat-meds (map :bat_med results)
        weights (map :acceptance_rate results)
        tot-wt (reduce + weights)]
    (if (or (empty? results) (zero? tot-wt))
      []
      (let [bat-min (js/Math.floor (/ (apply min bat-meds) bin-width))
            bat-max (js/Math.ceil (/ (apply max bat-meds) bin-width))
            edges (range (* bat-min bin-width) (+ (* bat-max bin-width) bin-width) bin-width)]

        (keep (fn [lo]
                (let [hi (+ lo bin-width)
                      mask (map-indexed (fn [i r] (and (>= (:bat_med r) lo) (< (:bat_med r) hi))) results)
                      sub (keep-indexed (fn [i m] (when m (nth results i))) mask)
                      sub-w (keep-indexed (fn [i m] (when m (nth weights i))) mask)
                      sub-w-sum (reduce + sub-w)]
                  (when (pos? sub-w-sum)
                    (let [w-mean (fn [k]
                                   (let [vs (map k sub)
                                         valid-idx (keep-indexed (fn [i v] (when (and v (not (js/isNaN v))) i)) vs)]
                                     (if (empty? valid-idx)
                                       nil
                                       (/ (reduce + (map #(* (nth vs %) (nth sub-w %)) valid-idx))
                                          (reduce + (map #(nth sub-w %) valid-idx))))))]
                      {:bat_mid (+ lo (/ bin-width 2))
                       :p_success_overall (w-mean :p_success_overall)
                       :p_hr_below_threshold (w-mean :p_hr_below_threshold)
                       :median_hr_final (w-mean :median_hr_final)}))))
              edges)))))

(defn results-charts [family items]
  (let [data (build-stratified-data items 1.0)
        vdata (map (fn [d]
                     {:bat_mid (:bat_mid d)
                      :success (* 100 (or (:p_success_overall d) 0))
                      :hr_cond (* 100 (or (:p_hr_below_threshold d) 0))
                      :hr_final (or (:median_hr_final d) 0)})
                   data)]

    [:div.mb-8.results-charts-container
     [:h3.text-lg.font-bold.mb-2 family " - Stratified by BAT mOS"]
     (if (empty? vdata)
       [:div "No accepted combinations in this family to display charts."]
       [:div.flex.flex-wrap.gap-4
        ;; P(Success) chart
        [vega-lite
         {:width 400 :height 300
          :data {:values vdata}
          :title "P(success) by BAT mOS"
          :layer [
                  {:mark {:type "line" :point true}
                   :encoding {:x {:field "bat_mid" :type "quantitative" :title "BAT mOS (months)"}
                              :y {:field "success" :type "quantitative" :title "P(success) %" :scale {:domain [0 100]}}
                              :color {:value "#4488cc"}}}
                  {:mark "rule"
                   :data {:values [{:y 50}]}
                   :encoding {:y {:field "y" :type "quantitative"}
                              :color {:value "gray"}
                              :strokeDash {:value [4 4]}}}]}]

        ;; HR chart
        [vega-lite
         {:width 400 :height 300
          :data {:values vdata}
          :title "Implied Final HR by BAT mOS"
          :layer [
                  {:mark {:type "line" :point true}
                   :encoding {:x {:field "bat_mid" :type "quantitative" :title "BAT mOS (months)"}
                              :y {:field "hr_final" :type "quantitative" :title "Final HR" :scale {:domain [0 1.2]}}
                              :color {:value "#aa5599"}}}
                  {:mark "rule"
                   :data {:values [{:y 0.636}]}
                   :encoding {:y {:field "y" :type "quantitative"}
                              :color {:value "red"}
                              :strokeDash {:value [4 4]}}}]}]
        ])]))
