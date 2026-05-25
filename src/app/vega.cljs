(ns app.vega
  (:require [reagent.core :as r]
            ["vega-embed" :default vegaEmbed]))

(defn vega-lite [spec]
  (let [ref (r/atom nil)]
    (r/create-class
     {:reagent-render
      (fn []
        [:div.w-full {:ref #(reset! ref %)}])
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
    (range (* bat-min bin-width)
           (+ (* bat-max bin-width) bin-width)
           bin-width)))

(defn- calculate-weighted-mean [k sub sub-w]
  (let [vs (map k sub)
        valid-idx (keep-indexed
                   (fn [i v] (when (and v (not (js/isNaN v))) i))
                   vs)]
    (if (empty? valid-idx)
      nil
      (/ (reduce + (map #(* (nth vs %) (nth sub-w %)) valid-idx))
         (reduce + (map #(nth sub-w %) valid-idx))))))

(defn- build-bin-record [lo bin-width results weights]
  (let [hi (+ lo bin-width)
        mask (map-indexed
              (fn [i r] (and (>= (:bat-med r) lo) (< (:bat-med r) hi)))
              results)
        sub (keep-indexed (fn [i m] (when m (nth results i))) mask)
        sub-w (keep-indexed (fn [i m] (when m (nth weights i))) mask)
        sub-w-sum (reduce + sub-w)]
    (when (pos? sub-w-sum)
      {:bat-mid (+ lo (/ bin-width 2))
       :weight sub-w-sum
       :p-success-overall (calculate-weighted-mean
                           :p-success-overall sub sub-w)
       :p-hr-below-threshold (calculate-weighted-mean
                              :p-hr-below-threshold sub sub-w)
       :median-hr-final (calculate-weighted-mean
                         :median-hr-final sub sub-w)})))

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
        tot-wt (reduce + (map :weight data))
        vdata (map (fn [d]
                     {:bat-mid (:bat-mid d)
                      :success (* 100 (or (:p-success-overall d) 0))
                      :hr-final (or (:median-hr-final d) 0)
                      :p-bat (if (pos? tot-wt)
                               (* 100 (/ (:weight d) tot-wt))
                               0)})
                   data)]
    [:div.mb-8.results-charts-container
     [:h3.text-lg.font-bold.mb-2 family " - Stratified by BAT mOS"]
     (if (empty? vdata)
       [:div "No accepted combinations in this family to display charts."]
       [:div.grid.grid-cols-1.md:grid-cols-2.lg:grid-cols-3.gap-4
        [:div.w-full
         [vega-lite
          {:width "container" :height 300 :data {:values vdata}
           :title "Posterior Probability of BAT mOS"
           :mark "bar"
           :encoding {:x {:field "bat-mid"
                          :type "quantitative"
                          :title "BAT mOS (months)"}
                      :y {:field "p-bat"
                          :type "quantitative"
                          :title "Probability (%)"}
                      :color {:value "#44aa77"}
                      :tooltip [{:field "bat-mid" :type "quantitative"
                                 :title "BAT mOS (months)"
                                 :format ".1f"}
                                {:field "p-bat" :type "quantitative"
                                 :title "Probability (%)"
                                 :format ".2f"}]}}]]
        [:div.w-full
         [vega-lite
          {:width "container" :height 300 :data {:values vdata}
           :title "P(success) by BAT mOS"
           :layer [{:mark {:type "line" :point true}
                    :encoding {:x {:field "bat-mid"
                                   :type "quantitative"
                                   :title "BAT mOS (months)"}
                               :y {:field "success"
                                   :type "quantitative"
                                   :title "P(success) %"
                                   :scale {:domain [0 100]}}
                               :color {:value "#4488cc"}
                               :tooltip [{:field "bat-mid" :type "quantitative"
                                          :title "BAT mOS (months)"
                                          :format ".1f"}
                                         {:field "success" :type "quantitative"
                                          :title "P(success) %"
                                          :format ".1f"}]}}
                   {:mark "rule" :data {:values [{:y 50}]}
                    :encoding {:y {:field "y" :type "quantitative"}
                               :color {:value "gray"}
                               :strokeDash {:value [4 4]}}}]}]]
        [:div.w-full
         [vega-lite
          {:width "container" :height 300 :data {:values vdata}
           :title "Implied Final HR by BAT mOS"
           :layer [{:mark {:type "line" :point true}
                    :encoding {:x {:field "bat-mid"
                                   :type "quantitative"
                                   :title "BAT mOS (months)"}
                               :y {:field "hr-final"
                                   :type "quantitative"
                                   :title "Final HR"
                                   :scale {:domain [0 1.2]}}
                               :color {:value "#aa5599"}
                               :tooltip [{:field "bat-mid" :type "quantitative"
                                          :title "BAT mOS (months)"
                                          :format ".1f"}
                                         {:field "hr-final" :type "quantitative"
                                          :title "Final HR"
                                          :format ".3f"}]}}
                   {:mark "rule" :data {:values [{:y 0.636}]}
                    :encoding {:y {:field "y" :type "quantitative"}
                               :color {:value "red"}
                               :strokeDash {:value [4 4]}}}]}]]]])]))

(defn discovery-survival-chart [data]
  [vega-lite
   {:width "container" :height 300
    :title "Survival Curves"
    :data {:values data}
    :layer [{:mark {:type "line" :strokeWidth 2}
             :encoding {:x {:field "time" :type "quantitative"
                            :title "Months"
                            :axis {:values [0 10 20 30 40 50
                                            60 70 80]}}
                        :y {:field "survival" :type "quantitative"
                            :title "S(t)"
                            :scale {:domain [0 1]}}
                        :color {:field "group" :type "nominal"
                                :scale {:domain ["Pooled" "GPS" "BAT"]
                                        :range ["#4488cc"
                                                "#55bb88"
                                                "#ee6677"]}}
                        :strokeDash {:field "group" :type "nominal"
                                     :scale {:domain ["Pooled" "GPS" "BAT"]
                                             :range [[] [4 4] [2 2]]}}}}
            {:params [{:name "hover"
                       :select {:type "point"
                                :on "mouseover"
                                :nearest true
                                :clear "mouseout"
                                :fields ["time"]}}]
             :transform [{:pivot "group"
                          :value "survival"
                          :groupby ["time"]}]
             :mark {:type "rule" :color "#bbb" :strokeWidth 0}
             :encoding {:x {:field "time" :type "quantitative"}
                        :tooltip [{:field "time" :type "quantitative"
                                   :title "Months"}
                                  {:field "Pooled" :type "quantitative"
                                   :format ".3f"}
                                  {:field "GPS" :type "quantitative"
                                   :format ".3f"}
                                  {:field "BAT" :type "quantitative"
                                   :format ".3f"}]}}]
    :config {:view {:stroke "transparent"}
             :legend {:orient "bottom"}}}])

(defn discovery-accrual-chart [curve-data event-stats]
  (let [markers (mapv (fn [s] {:time (case (:label s)
                                      "IA (46.0m)" 46.0
                                      "UPD (58.0m)" 58.0
                                      "PR3 (62.97m)" 62.97
                                      0.0)
                              :expected (:expected s)
                              :target (:target s)
                              :label (:label s)})
                      event-stats)]
    [vega-lite
     {:width "container" :height 300
      :title "Expected Event Accrual"
      :data {:values curve-data}
      :layer [{:mark {:type "line" :strokeWidth 2}
               :encoding {:x {:field "time" :type "quantitative"
                              :title "Months"
                              :axis {:values [0 10 20 30 40 50
                                              60 70 80]}}
                          :y {:field "events" :type "quantitative"
                              :title "Events"}
                          :color {:field "group" :type "nominal"
                                  :scale {:domain ["Total" "GPS" "BAT"]
                                          :range ["#aa5599"
                                                  "#55bb88"
                                                  "#ee6677"]}}
                          :strokeDash {:field "group" :type "nominal"
                                       :scale {:domain ["Total" "GPS" "BAT"]
                                               :range [[] [4 4] [2 2]]}}}}
              {:params [{:name "hover"
                         :select {:type "point"
                                  :on "mouseover"
                                  :nearest true
                                  :clear "mouseout"
                                  :fields ["time"]}}]
               :transform [{:pivot "group"
                            :value "events"
                            :groupby ["time"]}]
               :mark {:type "rule" :color "#bbb" :strokeWidth 0}
               :encoding {:x {:field "time" :type "quantitative"}
                          :tooltip [{:field "time" :type "quantitative"
                                     :title "Months"}
                                    {:field "Total" :type "quantitative"
                                     :format ".1f"}
                                    {:field "GPS" :type "quantitative"
                                     :format ".1f"}
                                    {:field "BAT" :type "quantitative"
                                     :format ".1f"}]}}
              {:data {:values markers}
               :mark {:type "point" :size 100 :color "black" :shape "cross"}
               :encoding {:x {:field "time" :type "quantitative"}
                          :y {:field "target" :type "quantitative"}}}
              {:data {:values markers}
               :mark {:type "point" :size 60 :color "red"}
               :encoding {:x {:field "time" :type "quantitative"}
                          :y {:field "expected" :type "quantitative"}}}]
      :config {:view {:stroke "transparent"}
               :legend {:orient "bottom"}}}]))

(defn stress-test-charts [results]
  (let [vdata (map (fn [r]
                     {:mos (:mos r)
                      :k (:k r)
                      :p_joint (* 100 (:p_joint r))
                      :label (str (:mos r) " (k=" (:k r) ")")})
                   results)]
    [:div.w-full
     [vega-lite
      {:width "container"
       :height 300
       :data {:values vdata}
       :title "Joint Probability (p_joint) by mOS and k"
       :mark {:type "line" :point true}
       :encoding {:x {:field "mos" :type "quantitative" :title "mOS"}
                  :y {:field "p_joint"
                      :type "quantitative"
                      :title "p_joint (%)"}
                  :color {:field "k" :type "nominal" :title "k"}
                  :tooltip [{:field "mos" :type "quantitative" :title "mOS"}
                            {:field "k" :type "nominal" :title "k"}
                            {:field "p_joint" :type "quantitative" :title "p_joint (%)"
                             :format ".2f"}]}}}]]))
