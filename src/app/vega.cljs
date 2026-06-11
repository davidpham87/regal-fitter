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
                         :median-hr-final sub sub-w)
       :hr-final-low (calculate-weighted-mean
                      :hr-final-low sub sub-w)
       :hr-final-high (calculate-weighted-mean
                       :hr-final-high sub sub-w)
       :gps-med (calculate-weighted-mean
                 :gps-med sub sub-w)})))

(defn build-stratified-data [results bin-width]
  (let [bat-meds (map :bat-med results)
        weights (map :acceptance-rate results)
        tot-wt (reduce + weights)]
    (if (or (empty? results) (zero? tot-wt))
      []
      (let [edges (calculate-bat-edges bat-meds bin-width)]
        (keep #(build-bin-record % bin-width results weights) edges)))))

(defn- build-hr-distribution-data [results bin-width]
  (let [valid-results (filter #(and (:median-hr-final %) (not (js/isNaN (:median-hr-final %)))) results)
        hrs (map :median-hr-final valid-results)
        tot-wt (reduce + (map :acceptance-rate valid-results))]
    (if (or (empty? valid-results) (zero? tot-wt))
      []
      (let [hr-min (js/Math.floor (/ (apply min hrs) bin-width))
            hr-max (js/Math.ceil (/ (apply max hrs) bin-width))
            edges (range (* hr-min bin-width) (+ (* hr-max bin-width) bin-width) bin-width)
            bins (for [lo edges]
                   (let [hi (+ lo bin-width)
                         sub (filter #(and (>= (:median-hr-final %) lo)
                                           (< (:median-hr-final %) hi))
                                     valid-results)
                         wt-sum (reduce + (map :acceptance-rate sub))
                         sub-w (map :acceptance-rate sub)
                         succ-mean (calculate-weighted-mean :p-success-overall sub sub-w)]
                     {:hr-mid (+ lo (/ bin-width 2))
                      :hr-lo lo
                      :hr-hi hi
                      :weight wt-sum
                      :p-val (if (pos? tot-wt) (* 100 (/ wt-sum tot-wt)) 0.0)
                      :success (if succ-mean (* 100 succ-mean) 0.0)}))
            vdata (let [running-sum (atom 0.0)]
                    (mapv (fn [b]
                            (let [cum-p (swap! running-sum + (:p-val b))]
                              (assoc b :cum-p (js/Math.min 100.0 cum-p))))
                          bins))]
        vdata))))

(defn- scale-from-median [median shape]
  (/ median (js/Math.pow (js/Math.log 2.0)
                         (/ 1.0 (js/Math.max 0.001 shape)))))

(defn- S-weibull [t scale shape]
  (js/Math.exp (- (js/Math.pow (/ t scale) shape))))

(defn- S-cure [t cure-frac scale shape]
  (let [unc (S-weibull t scale shape)]
    (+ cure-frac (* (- 1.0 cure-frac) unc))))

(defn- S-leaky [t cure-frac scale shape leak-yr]
  (let [unc (S-weibull t scale shape)
        leak-rate-monthly (/ leak-yr 12.0)
        cured (js/Math.exp (- (* leak-rate-monthly t)))]
    (+ (* cure-frac cured) (* (- 1.0 cure-frac) unc))))

(defn- combo-survival [t combo arm]
  (let [family (:family combo)]
    (if (= arm :bat)
      (S-weibull t (:bat-scale combo) (:bat-shape combo))
      (cond
        (= family "weibull")
        (S-weibull t (:gps-scale combo) (:gps-shape combo))

        (= family "cure")
        (S-cure t (:cure-frac combo) (:unc-scale combo) (:unc-shape combo))

        (= family "leaky")
        (S-leaky t (:cure-frac combo) (:unc-scale combo) (:unc-shape combo)
                 (:leak-yr combo))

        :else 0.0))))

(defn- build-km-curves-data [items top-k]
  (let [valid-items (filter #(and (:acceptance-rate %)
                                  (not (js/isNaN (:acceptance-rate %))))
                            items)
        sorted-items (sort-by :acceptance-rate > valid-items)
        top-combos (take top-k sorted-items)
        weights (map :acceptance-rate top-combos)
        tot-wt (reduce + weights)
        normalized-w (if (and (seq weights) (pos? tot-wt))
                       (mapv #(/ % tot-wt) weights)
                       (mapv (constantly (/ 1.0 (max 1 (count top-combos))))
                             top-combos))]
    (if (empty? top-combos)
      []
      (let [bat-med-w (if (and (seq weights) (pos? tot-wt))
                        (/ (reduce + (map * (map :bat-med top-combos)
                                          weights))
                           tot-wt)
                        (or (:bat-med (first top-combos)) 0.0))
            bat-sh-w (if (and (seq weights) (pos? tot-wt))
                       (/ (reduce + (map * (map :bat-shape top-combos)
                                         weights))
                          tot-wt)
                       (or (:bat-shape (first top-combos)) 0.0))
            bat-scale-w (scale-from-median bat-med-w bat-sh-w)
            times (range 0 81)
            individual-data (mapcat
                             (fn [idx combo weight]
                               (mapcat
                                (fn [t]
                                  [{:time t
                                    :survival (combo-survival t combo :bat)
                                    :group "BAT"
                                    :combo-id idx
                                    :type "individual"}
                                   {:time t
                                    :survival (combo-survival t combo :gps)
                                    :group "GPS"
                                    :combo-id idx
                                    :type "individual"}])
                                times))
                             (range) top-combos normalized-w)
            representative-data (mapcat
                                 (fn [t]
                                   (let [gps-s (if (and (seq weights)
                                                        (pos? tot-wt))
                                                 (let [gps-vals (map
                                                                 #(combo-survival
                                                                   t % :gps)
                                                                 top-combos)]
                                                   (/ (reduce +
                                                              (map * gps-vals
                                                                   weights))
                                                      tot-wt))
                                                 (combo-survival
                                                  t (first top-combos) :gps))]
                                     [{:time t
                                       :survival (S-weibull t bat-scale-w
                                                            bat-sh-w)
                                       :group "BAT"
                                       :combo-id "representative"
                                       :type "representative"}
                                      {:time t
                                       :survival gps-s
                                       :group "GPS"
                                       :combo-id "representative"
                                       :type "representative"}]))
                                 times)]
        (vec (concat individual-data representative-data))))))

(defn- weighted-percentile [values weights p]
  (if (empty? values)
    0.0
    (let [pairs (sort-by first (map vector values weights))
          cum-weights (reductions + (map second pairs))
          indexed-pairs (map vector pairs cum-weights)]
      (or (some (fn [[[val _] cum-w]]
                  (when (>= cum-w p) val))
                indexed-pairs)
          (first (last pairs))))))

(defn- build-km-ci-data [items]
  (let [valid-items (filter #(and (:acceptance-rate %)
                                  (not (js/isNaN (:acceptance-rate %))))
                            items)
        weights (map :acceptance-rate valid-items)
        tot-wt (reduce + weights)
        normalized-w (if (and (seq weights) (pos? tot-wt))
                       (mapv #(/ % tot-wt) weights)
                       (mapv (constantly (/ 1.0 (max 1 (count valid-items))))
                             valid-items))]
    (if (empty? valid-items)
      []
      (let [times (range 0 81)]
        (vec
         (mapcat
          (fn [t]
            (let [bat-survs (mapv #(combo-survival t % :bat) valid-items)
                  gps-survs (mapv #(combo-survival t % :gps) valid-items)
                  bat-med (weighted-percentile bat-survs normalized-w 0.50)
                  bat-low (weighted-percentile bat-survs normalized-w 0.025)
                  bat-high (weighted-percentile bat-survs normalized-w 0.975)
                  gps-med (weighted-percentile gps-survs normalized-w 0.50)
                  gps-low (weighted-percentile gps-survs normalized-w 0.025)
                  gps-high (weighted-percentile gps-survs normalized-w 0.975)]
              [{:time t
                :median bat-med
                :low bat-low
                :high bat-high
                :group "BAT"}
               {:time t
                :median gps-med
                :low gps-low
                :high gps-high
                :group "GPS"}]))
          times))))))

(defn results-charts [family items]
  (let [data (build-stratified-data items 1.0)
        tot-wt (reduce + (map :weight data))
        vdata (let [running-sum (atom 0.0)]
                (mapv (fn [d]
                        (let [p-val (if (pos? tot-wt)
                                      (* 100 (/ (:weight d) tot-wt))
                                      0.0)
                              cum-p (swap! running-sum + p-val)
                              succ (* 100 (or (:p-success-overall d) 0))]
                          {:bat-mid (:bat-mid d)
                           :success succ
                           :succ-lbl (str (.toFixed succ 0) "%")
                           :hr-final (or (:median-hr-final d) 0)
                           :hr-low (or (:hr-final-low d) 0)
                           :hr-high (or (:hr-final-high d) 0)
                           :gps-med (or (:gps-med d) 0)
                           :p-bat p-val
                           :cum-p (js/Math.min 100.0 cum-p)}))
                      data))
        hr-data (build-hr-distribution-data items 0.025)
        km-data (build-km-curves-data items 20)
        km-ci-data (build-km-ci-data items)

        ;; Calculate overall weighted medians
        valid-items (filter #(and (:acceptance-rate %)
                                  (not (js/isNaN (:acceptance-rate %))))
                            items)
        weights (map :acceptance-rate valid-items)
        sum-wt (reduce + weights)
        bat-med-w (if (and (seq weights) (pos? sum-wt))
                    (/ (reduce + (map * (map :bat-med valid-items) weights))
                       sum-wt)
                    0.0)
        gps-med-w (if (and (seq weights) (pos? sum-wt))
                    (/ (reduce + (map * (map :gps-med valid-items) weights))
                       sum-wt)
                    0.0)]
    [:div.mb-8.results-charts-container
     [:h3.text-lg.font-bold.mb-2 family " - Stratified by BAT mOS"]
     (if (empty? vdata)
       [:div "No accepted combinations in this family to display charts."]
       [:div.flex.flex-wrap.gap-4
        [vega-lite
         {:width 320 :height 240 :data {:values vdata}
          :title "Cumulative BAT mOS & P(success)"
          :layer [{:mark {:type "line" :point true}
                   :encoding {:x {:field "bat-mid"
                                  :type "quantitative"
                                  :title "BAT mOS (months)"}
                              :y {:field "cum-p"
                                  :type "quantitative"
                                  :title "Percentage (%)"
                                  :scale {:domain [0 100]}}
                              :color {:datum "Cumulative BAT mOS (CDF)"
                                      :type "nominal"
                                      :scale {:range ["#44aa77" "#4488cc"]}}
                              :tooltip [{:field "bat-mid" :type "quantitative"
                                         :title "BAT mOS (months)"}
                                        {:field "cum-p" :type "quantitative"
                                         :title "Cumulative Probability (%)"}]}}
                  {:mark {:type "line" :point true}
                   :encoding {:x {:field "bat-mid"
                                  :type "quantitative"}
                              :y {:field "success"
                                  :type "quantitative"}
                              :color {:datum "P(success)"}
                              :tooltip [{:field "bat-mid" :type "quantitative"
                                         :title "BAT mOS (months)"}
                                        {:field "success" :type "quantitative"
                                         :title "P(success) %"}]}}
                  {:mark {:type "text" :align "left" :dx 5 :dy -5
                          :fontSize 9 :fontWeight "bold"}
                   :encoding {:x {:field "bat-mid" :type "quantitative"}
                              :y {:field "cum-p" :type "quantitative"}
                              :text {:field "succ-lbl" :type "nominal"}
                              :color {:value "#333"}}}]
          :config {:legend {:orient "bottom"}}}]
        [vega-lite
         {:width 320 :height 240 :data {:values vdata}
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
                                :title "BAT mOS (months)"}
                               {:field "p-bat" :type "quantitative"
                                :title "Probability (%)"}]}}]
        [vega-lite
         {:width 320 :height 240 :data {:values vdata}
          :title "Implied Final HR by BAT mOS"
          :layer [{:mark {:type "area" :opacity 0.2}
                   :encoding {:x {:field "bat-mid"
                                  :type "quantitative"
                                  :title "BAT mOS (months)"}
                              :y {:field "hr-low"
                                  :type "quantitative"
                                  :scale {:domain [0 1.2]}}
                              :y2 {:field "hr-high"
                                   :type "quantitative"}
                              :color {:value "#aa5599"}}}
                  {:mark {:type "line" :point true}
                   :encoding {:x {:field "bat-mid"
                                  :type "quantitative"}
                              :y {:field "hr-final"
                                  :type "quantitative"
                                  :title "Final HR"}
                              :color {:value "#aa5599"}
                              :tooltip [{:field "bat-mid" :type "quantitative"
                                         :title "BAT mOS (months)"}
                                        {:field "hr-final" :type "quantitative"
                                         :title "Final HR"}]}}
                  {:mark "rule" :data {:values [{:y 0.636}]}
                   :encoding {:y {:field "y" :type "quantitative"}
                              :color {:value "red"}
                              :strokeDash {:value [4 4]}}}]}]
        [vega-lite
         {:width 320 :height 240 :data {:values hr-data}
          :title "Hazard Ratio Distribution"
          :resolve {:scale {:y "independent"}}
          :layer [{:mark "bar"
                   :encoding {:x {:field "hr-lo"
                                  :type "quantitative"
                                  :title "Hazard Ratio"
                                  :bin {:binned true :step 0.025}}
                              :x2 {:field "hr-hi"}
                              :y {:field "p-val"
                                  :type "quantitative"
                                  :title "Probability (%)"}
                              :color {:value "#ff9900"}
                              :tooltip [{:field "hr-mid" :type "quantitative"
                                         :title "Hazard Ratio"}
                                        {:field "p-val" :type "quantitative"
                                         :title "Probability (%)"}]}}
                  {:layer [{:mark {:type "line" :point true}
                            :encoding {:x {:field "hr-mid" :type "quantitative"}
                                       :y {:field "cum-p"
                                           :type "quantitative"
                                           :title "Cumulative Probability (%)"
                                           :axis {:orient "right"}
                                           :scale {:domain [0 100]}}
                                       :color {:datum "Cumulative (CDF)"
                                               :type "nominal"
                                               :scale {:range ["#ff0000"
                                                               "#22c55e"]}}
                                       :tooltip [{:field "hr-mid"
                                                  :type "quantitative"
                                                  :title "Hazard Ratio"}
                                                 {:field "cum-p"
                                                  :type "quantitative"
                                                  :title "Cumulative Prob (%)"}]}}
                           {:mark {:type "line" :point true}
                            :encoding {:x {:field "hr-mid" :type "quantitative"}
                                       :y {:field "success"
                                           :type "quantitative"}
                                       :color {:datum "P(success)"}
                                       :tooltip [{:field "hr-mid"
                                                  :type "quantitative"
                                                  :title "Hazard Ratio"}
                                                 {:field "success"
                                                  :type "quantitative"
                                                  :title "P(success) (%)"}]}}]}]
          :config {:legend {:orient "bottom"}}}]
        [vega-lite
         {:width 320 :height 240 :data {:values vdata}
          :title "GPS mOS vs BAT mOS"
          :mark {:type "line" :point true}
          :encoding {:x {:field "bat-mid"
                         :type "quantitative"
                         :title "BAT mOS (months)"}
                     :y {:field "gps-med"
                         :type "quantitative"
                         :title "GPS mOS (months)"
                         :scale {:zero false}}
                     :color {:value "#3b82f6"}
                     :tooltip [{:field "bat-mid" :type "quantitative"
                                :title "BAT mOS (months)"}
                               {:field "gps-med" :type "quantitative"
                                :title "GPS mOS (months)"}]}}]
        [vega-lite
         {:width 320 :height 240 :data {:values km-data}
          :title "Implied KM Curves (Top 20 combos)"
          :layer [{:transform [{:filter "datum.type == 'individual'"}]
                   :mark {:type "line" :opacity 0.15 :strokeWidth 0.8}
                   :encoding {:x {:field "time"
                                  :type "quantitative"
                                  :title "Time (months)"}
                              :y {:field "survival"
                                  :type "quantitative"
                                  :title "Survival Probability"
                                  :scale {:domain [0 1.02]}}
                              :color {:field "group"
                                      :type "nominal"
                                      :scale {:domain ["GPS" "BAT"]
                                              :range ["#55bb88" "#ee6677"]}
                                      :legend {:title "Group"}}
                              :detail {:field "combo-id"
                                       :type "nominal"}}}
                  {:transform [{:filter "datum.type == 'representative'"}]
                   :mark {:type "line" :strokeWidth 2.5}
                   :encoding {:x {:field "time" :type "quantitative"}
                              :y {:field "survival" :type "quantitative"}
                              :color {:field "group" :type "nominal"}
                              :tooltip [{:field "time"
                                         :type "quantitative"
                                         :title "Months"}
                                        {:field "group"
                                         :type "nominal"
                                         :title "Arm"}
                                        {:field "survival"
                                         :type "quantitative"
                                         :format ".3f"
                                         :title "Survival S(t)"}]}}]
          :config {:legend {:orient "bottom"}}}]
        [vega-lite
         {:width 320 :height 240 :data {:values km-ci-data}
          :title {:text "KM Curves with 95% Confidence Interval"
                  :subtitle (str "Median OS: BAT = "
                                 (.toFixed bat-med-w 1) "m, GPS = "
                                 (.toFixed gps-med-w 1) "m")}
          :layer [{:mark {:type "area" :opacity 0.2}
                   :encoding {:x {:field "time"
                                  :type "quantitative"
                                  :title "Time (months)"}
                              :y {:field "low"
                                  :type "quantitative"
                                  :title "Survival Probability"
                                  :scale {:domain [0 1.02]}}
                              :y2 {:field "high"
                                   :type "quantitative"}
                              :color {:field "group"
                                      :type "nominal"
                                      :scale {:domain ["GPS" "BAT"]
                                              :range ["#55bb88" "#ee6677"]}
                                      :legend {:title "Group"}}}}
                  {:mark {:type "line" :strokeWidth 2}
                   :encoding {:x {:field "time" :type "quantitative"}
                              :y {:field "median" :type "quantitative"}
                              :color {:field "group" :type "nominal"}
                              :tooltip [{:field "time"
                                         :type "quantitative"
                                         :title "Months"}
                                        {:field "group"
                                         :type "nominal"
                                         :title "Arm"}
                                        {:field "median"
                                         :type "quantitative"
                                         :format ".3f"
                                         :title "Median S(t)"}
                                        {:field "low"
                                         :type "quantitative"
                                         :format ".3f"
                                         :title "2.5% CI"}
                                        {:field "high"
                                         :type "quantitative"
                                         :format ".3f"
                                         :title "97.5% CI"}]}}
                  {:mark {:type "rule" :color "gray" :strokeWidth 1
                          :strokeDash [2 2]}
                   :data {:values [{:y 0.5}]}
                   :encoding {:y {:field "y" :type "quantitative"}}}
                  {:mark {:type "rule" :color "#ee6677" :strokeWidth 1.2
                          :strokeDash [3 3]}
                   :data {:values [{:x bat-med-w}]}
                   :encoding {:x {:field "x" :type "quantitative"}}}
                  {:mark {:type "rule" :color "#55bb88" :strokeWidth 1.2
                          :strokeDash [3 3]}
                   :data {:values [{:x gps-med-w}]}
                   :encoding {:x {:field "x" :type "quantitative"}}}]
          :config {:legend {:orient "bottom"}}}]
        ])]))

(defn discovery-survival-chart [data]
  [vega-lite
   {:width 300 :height 300
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
                                   :format ".3f"}]}}
            {:mark {:type "rule" :color "red" :strokeDash [4 4]}
             :data {:values [{:time 36}]}
             :encoding {:x {:field "time" :type "quantitative"}}}
            {:mark {:type "text" :align "left" :dx 5 :dy -140 :color "red"}
             :data {:values [{:time 36 :label "t=36"}]}
             :encoding {:x {:field "time" :type "quantitative"}
                        :text {:field "label" :type "nominal"}}}
            {:transform [{:filter "datum.time == 36"}]
             :mark {:type "text" :align "left" :dx 5 :dy -5}
             :encoding {:x {:field "time" :type "quantitative"}
                        :y {:field "survival" :type "quantitative"}
                        :color {:field "group" :type "nominal"
                                :scale {:domain ["Pooled" "GPS" "BAT"]
                                        :range ["#4488cc"
                                                "#55bb88"
                                                "#ee6677"]}}
                        :text {:field "survival" :type "quantitative" :format ".3f"}}}]
    :config {:view {:stroke "transparent"}
             :legend {:orient "bottom"}}}])

(defn discovery-accrual-chart [curve-data event-stats]
  (let [markers (mapv (fn [s] {:time (:time s 0.0)
                               :expected (:expected s)
                               :target (:target s)
                               :label (:label s)})
                      event-stats)]
    [vega-lite
     {:width 300 :height 300
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

(defn discovery-alive-chart [curve-data event-stats]
  (let [milestones (keep (fn [s]
                           (when (#{"IA" "UPD"} (:name s))
                             {:time (:time s) :label (:name s)}))
                         event-stats)]
    [vega-lite
     {:width 300 :height 300
      :title "Patients: Alive vs Died"
      :data {:values curve-data}
      :layer [{:transform [{:fold ["total-alive"
                                   "gps-alive"
                                   "bat-alive"
                                   "total-died"
                                   "gps-died"
                                   "bat-died"]
                            :as ["group" "count"]}]
               :mark {:type "line" :strokeWidth 2}
               :encoding {:x {:field "time" :type "quantitative"
                              :title "Months"
                              :axis {:values [0 10 20 30 40 50
                                              60 70 80]}}
                          :y {:field "count" :type "quantitative"
                              :title "Patients"}
                          :color {:field "group" :type "nominal"
                                  :scale {:domain ["total-alive"
                                                   "gps-alive"
                                                   "bat-alive"
                                                   "total-died"
                                                   "gps-died"
                                                   "bat-died"]
                                          :range ["#aa5599"
                                                  "#55bb88"
                                                  "#ee6677"
                                                  "#aa5599"
                                                  "#55bb88"
                                                  "#ee6677"]}}
                          :strokeDash {:field "group" :type "nominal"
                                       :scale {:domain ["total-alive"
                                                        "gps-alive"
                                                        "bat-alive"
                                                        "total-died"
                                                        "gps-died"
                                                        "bat-died"]
                                               :range [[] [] []
                                                       [4 4]
                                                       [4 4]
                                                       [4 4]]}}}}
              {:params [{:name "hover"
                         :select {:type "point"
                                  :on "mouseover"
                                  :nearest true
                                  :clear "mouseout"
                                  :fields ["time"]}}]
               :mark {:type "rule" :color "#bbb" :strokeWidth 0}
               :encoding {:x {:field "time" :type "quantitative"}
                          :tooltip [{:field "time" :type "quantitative"
                                     :title "Months"}
                                    {:field "total-alive" :type "quantitative"
                                     :format ".1f" :title "Total Alive"}
                                    {:field "gps-alive" :type "quantitative"
                                     :format ".1f" :title "GPS Alive"}
                                    {:field "bat-alive" :type "quantitative"
                                     :format ".1f" :title "BAT Alive"}
                                    {:field "total-died" :type "quantitative"
                                     :format ".1f" :title "Total Died"}
                                    {:field "gps-died" :type "quantitative"
                                     :format ".1f" :title "GPS Died"}
                                    {:field "bat-died" :type "quantitative"
                                     :format ".1f" :title "BAT Died"}
                                    {:field "total-died-diff" :type "quantitative"
                                     :format ".1f" :title "Total - Died"}
                                    {:field "gps-died-diff" :type "quantitative"
                                     :format ".1f" :title "GPS/2 - Died"}
                                    {:field "bat-died-diff" :type "quantitative"
                                     :format ".1f" :title "BAT/2 - Died"}]}}
              {:mark {:type "rule" :color "gray" :strokeDash [4 4]}
               :data {:values milestones}
               :encoding {:x {:field "time" :type "quantitative"}}}
              {:mark {:type "text" :align "left" :dx 5 :dy -140 :color "gray"}
               :data {:values milestones}
               :encoding {:x {:field "time" :type "quantitative"}
                          :text {:field "label" :type "nominal"}}}]
      :config {:view {:stroke "transparent"}
               :legend {:orient "bottom"}}}]))

(defn discovery-hr-chart [hr-data]
  [vega-lite
   {:width 300 :height 300
    :title "Estimated Hazard Ratios"
    :data {:values hr-data}
    :layer [{:mark {:type "bar" :size 40}
             :encoding {:x {:field "interval" :type "nominal"
                            :title "Milestone Interval"
                            :sort ["0-IA" "IA-UPD" "UPD-PR3"]}
                        :y {:field "hr" :type "quantitative"
                            :title "Hazard Ratio"
                            :scale {:domain [0 1.5]}}
                        :color {:field "interval" :type "nominal"
                                :scale {:domain ["0-IA" "IA-UPD" "UPD-PR3"]
                                        :range ["#4488cc" "#55bb88" "#ee6677"]}
                                :legend nil}
                        :tooltip [{:field "interval" :type "nominal"
                                   :title "Interval"}
                                  {:field "hr" :type "quantitative"
                                   :format ".3f" :title "HR"}]}}
            {:mark {:type "rule" :color "red" :strokeDash [4 4]}
             :data {:values [{:y 1.0}]}
             :encoding {:y {:field "y" :type "quantitative"}}}]
    :config {:view {:stroke "transparent"}}}])

(defn discovery-hazard-rates-chart [rates-data metric]
  (let [color-scale {:domain ["Pooled" "GPS" "BAT"]
                     :range  ["#4488cc" "#55bb88" "#ee6677"]}
        x-enc {:field "interval" :type "nominal"
               :title "Milestone Interval"
               :sort  ["0-IA" "IA-UPD" "UPD-PR3"]}
        grp-enc {:field "group" :type "nominal"}
        metric-name (name metric)
        title-str (if (= metric :rate)
                    "Annualized Hazard Rate"
                    "Median Survival Time (months)")
        fmt-str (if (= metric :rate) ".4f" ".2f")]
    [vega-lite
     {:width 300 :height 300
      :title (str (if (= metric :rate) "Annualized Hazard Rates"
                      "Median Survival Time")
                  " by Period")
      :data {:values rates-data}
      :layer
      [{:mark {:type "bar" :opacity 0.8}
        :encoding
        {:x x-enc
         :xOffset grp-enc
         :y {:field metric-name :type "quantitative"
             :title title-str
             :axis {:titleColor "#555"}}
         :color {:field "group" :type "nominal"
                 :scale color-scale
                 :legend {:title "Group"}}
         :tooltip [{:field "interval" :type "nominal"
                    :title "Interval"}
                   {:field "group" :type "nominal"
                    :title "Group"}
                   {:field metric-name :type "quantitative"
                    :format fmt-str
                    :title title-str}]}}
       {:mark {:type "text" :align "center" :baseline "bottom" :dy -4}
        :encoding
        {:x x-enc
         :xOffset grp-enc
         :y {:field metric-name :type "quantitative"}
         :text {:field metric-name :type "quantitative" :format fmt-str}
         :color {:field "group" :type "nominal" :scale color-scale}}}]
      :config {:view {:stroke "transparent"}
               :legend {:orient "bottom"}}}]))

(defn stress-test-charts [results]
  (let [vdata (map (fn [r]
                     {:mos (:mos r)
                      :k (.toFixed (:k r) 2)
                      :p_joint (* 100 (:p_joint r))
                      :label (str (:mos r) " (k=" (.toFixed (:k r) 2) ")")})
                   results)]
    [:div.flex.flex-wrap.gap-4
     [vega-lite
      {:width 600
       :height 300
       :data {:values vdata}
       :title "Joint Probability (p_joint) by mOS and k"
       :mark {:type "line" :point true}
       :encoding {:x {:field "mos" :type "quantitative" :title "mOS"}
                  :y {:field "p_joint"
                      :type "quantitative"
                      :title "p_joint (%)"}
                  :color {:field "k"
                          :type "nominal"
                          :title "k"
                          :legend {:orient "bottom"}}}}]]))

(defn power-heatmap [results]
  (let [vdata (clj->js
               (map (fn [r]
                      {:bat-mos (:bat-mos r)
                       :gps-mos (:gps-mos r)
                       :n-required (min 1000.0 (:n-required r))})
                    results))]
    [vega-lite
     {:width 400
      :height 300
      :title "Required Sample Size (N) Heatmap"
      :data {:values vdata}
      :mark {:type "rect" :tooltip true}
      :encoding {:x {:field "bat-mos"
                     :type "ordinal"
                     :title "BAT mOS"
                     :axis {:labelAngle 0}}
                 :y {:field "gps-mos"
                     :type "ordinal"
                     :title "GPS mOS"
                     :sort "descending"}
                 :color {:field "n-required"
                         :type "quantitative"
                         :title "N Required"
                         :scale {:scheme "yelloworangered"
                                 :clamp true}}}
      :config {:legend {:orient "bottom"}}}]))

(defn power-line-chart [results]
  (let [vdata (clj->js
               (map (fn [r]
                      {:bat-mos (str (:bat-mos r) " mOS")
                       :gps-mos (:gps-mos r)
                       :n-required (min 1000.0 (:n-required r))})
                    results))]
    [vega-lite
     {:width 500
      :height 300
      :title "N Required vs. GPS mOS by BAT Scenario"
      :data {:values vdata}
      :mark {:type "line" :point true :tooltip true}
      :encoding {:x {:field "gps-mos"
                     :type "quantitative"
                     :title "GPS mOS"}
                 :y {:field "n-required"
                     :type "quantitative"
                     :title "N Required (Clamped to 1000)"}
                 :color {:field "bat-mos"
                         :type "nominal"
                         :title "BAT Scenario"
                         :legend {:orient "bottom"}}}}]))

(defn enrollment-chart [data]
  [vega-lite
   {:width 600 :height 400
    :title "Enrollment Curve with 95% Confidence Interval"
    :data {:values data}
    :layer [{:mark {:type "area" :opacity 0.3}
             :encoding {:x {:field "time" :type "quantitative" :title "Time (months)"}
                        :y {:field "low" :type "quantitative" :title "Enrolled Patients"}
                        :y2 {:field "high" :type "quantitative"}
                        :color {:value "#4488cc"}}}
            {:mark {:type "line" :strokeWidth 2}
             :encoding {:x {:field "time" :type "quantitative"}
                        :y {:field "mean" :type "quantitative"}
                        :color {:value "#4488cc"}}}]}])
