(ns app.visualization.charts
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
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

(defn- make-chart [title data spec]
  [vega-lite
   (merge {:width 320 :height 240
           :data {:values data}
           :title title}
          spec)])

(def cdf-layer-cdf
  {:mark {:type "line" :point true}
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
                          :title "Cumulative Probability (%)"}]}})

(def cdf-layer-success
  {:mark {:type "line" :point true}
   :encoding {:x {:field "bat-mid" :type "quantitative"}
              :y {:field "success" :type "quantitative"}
              :color {:datum "P(success)"}
              :tooltip [{:field "bat-mid" :type "quantitative"
                          :title "BAT mOS (months)"}
                        {:field "success" :type "quantitative"
                          :title "P(success) %"}]}})

(def cdf-layer-text
  {:mark {:type "text" :align "left" :dx 5 :dy -5
          :fontSize 9 :fontWeight "bold"}
   :encoding {:x {:field "bat-mid" :type "quantitative"}
              :y {:field "cum-p" :type "quantitative"}
              :text {:field "succ-lbl" :type "nominal"}
              :color {:value "#333"}}})

(defn chart-bat-cdf [vdata]
  (make-chart "Cumulative BAT mOS & P(success)" vdata
    {:layer [cdf-layer-cdf cdf-layer-success cdf-layer-text]
     :config {:legend {:orient "bottom"}}}))

(defn chart-bat-posterior [vdata]
  (make-chart "Posterior Probability of BAT mOS" vdata
    {:mark "bar"
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
                           :title "Probability (%)"}]}}))

(def hr-bat-layer-area
  {:mark {:type "area" :opacity 0.2}
   :encoding {:x {:field "bat-mid"
                  :type "quantitative"
                  :title "BAT mOS (months)"}
              :y {:field "hr-low"
                  :type "quantitative"
                  :scale {:zero false}}
              :y2 {:field "hr-high"
                   :type "quantitative"}
              :color {:value "#aa5599"}}})

(def hr-bat-layer-line
  {:mark {:type "line" :point true}
   :encoding {:x {:field "bat-mid" :type "quantitative"}
              :y {:field "hr-final" :type "quantitative" :title "Final HR"}
              :color {:value "#aa5599"}
              :tooltip [{:field "bat-mid" :type "quantitative"
                          :title "BAT mOS (months)"}
                        {:field "hr-final" :type "quantitative"
                          :title "Final HR"}]}})

(def hr-bat-layer-rule
  {:mark "rule" :data {:values [{:y 0.636}]}
   :encoding {:y {:field "y" :type "quantitative"}
              :color {:value "red"}
              :strokeDash {:value [4 4]}}})

(defn chart-hr-by-bat [vdata]
  (make-chart "Implied Final HR by BAT mOS" vdata
    {:layer [hr-bat-layer-area hr-bat-layer-line hr-bat-layer-rule]}))

(def hr-dist-layer-bar
  {:mark "bar"
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
                          :title "Probability (%)"}]}})

(def hr-dist-layer-cdf
  {:mark {:type "line" :point true}
   :encoding {:x {:field "hr-mid" :type "quantitative"}
              :y {:field "cum-p"
                  :type "quantitative"
                  :title "Cumulative Probability (%)"
                  :axis {:orient "right"}
                  :scale {:domain [0 100]}}
              :color {:datum "Cumulative (CDF)"
                      :type "nominal"
                      :scale {:range ["#ff0000" "#22c55e"]}}
              :tooltip [{:field "hr-mid" :type "quantitative"
                          :title "Hazard Ratio"}
                         {:field "cum-p" :type "quantitative"
                          :title "Cumulative Prob (%)"}]}})

(def hr-dist-layer-success
  {:mark {:type "line" :point true}
   :encoding {:x {:field "hr-mid" :type "quantitative"}
              :y {:field "success" :type "quantitative"}
              :color {:datum "P(success)"}
              :tooltip [{:field "hr-mid" :type "quantitative"
                          :title "Hazard Ratio"}
                        {:field "success" :type "quantitative"
                         :title "P(success) (%)"}]}})

(def hr-dist-layer-success-ci
  {:mark {:type "area" :opacity 0.15}
   :encoding {:x {:field "hr-mid" :type "quantitative"}
              :y {:field "succ-low"
                  :type "quantitative"
                  :axis {:orient "right"}
                  :scale {:domain [0 100]}}
              :y2 {:field "succ-high"
                   :type "quantitative"}
              :color {:datum "P(success)"}}})

(defn chart-hr-distribution [hr-data]
  (make-chart "Hazard Ratio Distribution" hr-data
    {:resolve {:scale {:y "independent"}}
     :layer [hr-dist-layer-bar
             {:layer [hr-dist-layer-cdf
                      #_hr-dist-layer-success-ci
                      hr-dist-layer-success]}]
     :config {:legend {:orient "bottom"}}}))

(defn chart-alive-distribution [alive-data]
  (make-chart "Patients Alive at 80th Event" alive-data
    {:resolve {:scale {:y "shared" :x "shared"}}
     :layer [{:mark {:type "point" :filled true :size 15 :opacity 0.4}
              :encoding {:x {:field "bat-jitter"
                             :type "quantitative"
                             :title "Alive Patients in BAT"
                             :scale {:zero false}}
                         :y {:field "gps-jitter"
                             :type "quantitative"
                             :title "Alive Patients in GPS"
                             :scale {:zero false}}
                         :color {:value "#8854d0"}
                         :tooltip [{:field "bat-alive" :type "quantitative"
                                    :title "Alive BAT"}
                                   {:field "gps-alive" :type "quantitative"
                                    :title "Alive GPS"}]}}
             {:mark {:type "line" :color "#55bb88" :strokeWidth 1.5
                     :strokeDash [4 4]}
              :data {:values [{:x 0 :y 0} {:x 63 :y 63}]}
              :encoding {:x {:field "x" :type "quantitative"}
                         :y {:field "y" :type "quantitative"}}}]}))

(def bat-alive-layer-bar
  {:mark "bar"
   :encoding {:x {:field "alive"
                  :type "quantitative"
                  :title "BAT Alive Patients at T80"}
              :y {:field "p-val"
                  :type "quantitative"
                  :title "Probability (%)"}
              :color {:value "#ee6677"}
              :tooltip [{:field "alive" :type "quantitative"
                         :title "BAT Alive Patients"}
                        {:field "p-val" :type "quantitative"
                         :title "Probability (%)"
                         :format ".1f"}]}})

(def bat-alive-layer-cdf
  {:mark {:type "line" :point true}
   :encoding {:x {:field "alive" :type "quantitative"}
              :y {:field "cum-p"
                  :type "quantitative"
                  :title "Cumulative Probability (%)"
                  :axis {:orient "right"}
                  :scale {:domain [0 100]}}
              :color {:datum "Cumulative (CDF)"
                      :type "nominal"
                      :scale {:range ["#22c55e"]}}
              :tooltip [{:field "alive" :type "quantitative"
                         :title "BAT Alive Patients"}
                        {:field "cum-p" :type "quantitative"
                         :title "Cumulative Prob (%)"
                         :format ".1f"}]}})

(defn chart-bat-alive-distribution [bat-alive-data]
  (make-chart "BAT Alive Patients Distribution" bat-alive-data
    {:resolve {:scale {:y "independent"}}
     :layer [bat-alive-layer-bar
             bat-alive-layer-cdf]
     :config {:legend {:orient "bottom"}}}))

(defn chart-gps-vs-bat [vdata]
  (make-chart "GPS mOS vs BAT mOS" vdata
    {:mark {:type "line" :point true}
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
                           :title "GPS mOS (months)"}]}}))

(def implied-km-layer-indiv
  {:transform [{:filter "datum.type == 'individual'"}]
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
                       :type "nominal"}}})

(def implied-km-layer-rep
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
                         :title "Survival S(t)"}]}})

(defn chart-implied-km [km-data top-n]
  [vega-lite
   {:width 320 :height 240 :data {:values km-data}
    :title (str "Implied KM (Top " (min top-n 20) " of Best " top-n ")")
    :layer [implied-km-layer-indiv implied-km-layer-rep]
    :config {:legend {:orient "bottom"}}}])

(def km-ci-layer-area
  {:mark {:type "area" :opacity 0.2}
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
                      :legend {:title "Group"}}}})

(def km-ci-layer-mean-line
  {:mark {:type "line" :strokeWidth 1.8 :strokeDash [4 2]}
   :encoding {:x {:field "time" :type "quantitative"}
              :y {:field "mean" :type "quantitative"}
              :color {:field "group" :type "nominal"}}})

(def km-ci-layer-median-line
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
                        {:field "mean"
                         :type "quantitative"
                         :format ".3f"
                         :title "Mean S(t)"}
                        {:field "sd"
                         :type "quantitative"
                         :format ".3f"
                         :title "SD S(t)"}
                        {:field "low"
                         :type "quantitative"
                         :format ".3f"
                         :title "2.5% CI"}
                        {:field "high"
                         :type "quantitative"
                         :format ".3f"
                         :title "97.5% CI"}]}})

(defn km-ci-layer-rule-y []
  {:mark {:type "rule" :color "gray" :strokeWidth 1 :strokeDash [2 2]}
   :data {:values [{:y 0.5}]}
   :encoding {:y {:field "y" :type "quantitative"}}})

(defn km-ci-layer-rule-bat [bat-med-w]
  {:mark {:type "rule" :color "#ee6677" :strokeWidth 1.2 :strokeDash [3 3]}
   :data {:values [{:x bat-med-w}]}
   :encoding {:x {:field "x" :type "quantitative"}}})

(defn km-ci-layer-rule-gps [gps-med-w]
  {:mark {:type "rule" :color "#55bb88" :strokeWidth 1.2 :strokeDash [3 3]}
   :data {:values [{:x gps-med-w}]}
   :encoding {:x {:field "x" :type "quantitative"}}})

(defn chart-km-ci [km-ci-data bat-med-w gps-med-w bat-mean-w gps-mean-w]
  [vega-lite
   {:width 320 :height 240 :data {:values km-ci-data}
    :title {:text "KM Curves with 95% Confidence Interval"
            :subtitle (str "Median OS: BAT = "
                           (.toFixed bat-med-w 1) "m, GPS = "
                           (.toFixed gps-med-w 1) "m"
                           " | Mean OS (RMST 80m): BAT = "
                           (.toFixed bat-mean-w 1) "m, GPS = "
                           (.toFixed gps-mean-w 1) "m")}
    :layer [km-ci-layer-area
            km-ci-layer-mean-line
            km-ci-layer-median-line
            (km-ci-layer-rule-y)
            (km-ci-layer-rule-bat bat-med-w)
            (km-ci-layer-rule-gps gps-med-w)]
    :config {:legend {:orient "bottom"}}}])

(defn chart-hr-paths [hr-path-bins]
  (make-chart "Successful Paths: Final HR" hr-path-bins
    {:mark "bar"
     :encoding {:x {:field "lo"
                    :type "quantitative"
                    :title "Final Hazard Ratio"
                    :bin {:binned true :step 0.02}}
                :x2 {:field "hi"}
                :y {:field "pct"
                    :type "quantitative"
                    :title "Percentage (%)"}
                :color {:value "#55bb88"}
                :tooltip [{:field "mid" :type "quantitative"
                           :title "Hazard Ratio"}
                          {:field "pct" :type "quantitative"
                           :format ".1f"
                           :title "Percentage (%)"}]}}))

(def t80-paths-bar-layer
  {:mark "bar"
   :encoding {:x {:field "lo"
                  :type "quantitative"
                  :title "t80 (months)"
                  :bin {:binned true :step 0.5}}
              :x2 {:field "hi"}
              :y {:field "pct"
                  :type "quantitative"
                  :title "Percentage (%)"}
              :color {:value "#4488cc"}
              :tooltip [{:field "mid" :type "quantitative"
                          :title "t80 (months)"}
                        {:field "pct" :type "quantitative"
                         :format ".1f"
                         :title "Percentage (%)"}]}})

(def t80-paths-cdf-layer
  {:mark {:type "line" :point true}
   :encoding {:x {:field "mid" :type "quantitative"}
              :y {:field "cum-pct"
                  :type "quantitative"
                  :title "Cumulative Probability (%)"
                  :axis {:orient "right"}
                  :scale {:domain [0 100]}}
              :color {:datum "Cumulative (CDF)"
                      :type "nominal"
                      :scale {:range ["#ff3366" "#4488cc"]}}
              :tooltip [{:field "mid" :type "quantitative"
                          :title "t80 (months)"}
                        {:field "cum-pct" :type "quantitative"
                         :format ".1f"
                         :title "Cumulative (%)"}]}})

(defn chart-t80-paths [t80-path-bins]
  (make-chart {:text "Successful Paths: Read-out Time (t80)"
               :subtitle "Note: t=65 months corresponds to July 2026"}
              t80-path-bins
              {:resolve {:scale {:y "independent"}}
               :layer [t80-paths-bar-layer t80-paths-cdf-layer]
               :config {:legend {:orient "bottom"}}}))

(defn render-charts-list
  [vdata hr-data km-data top-n km-ci-res hr-bins t80-bins]
  [[chart-bat-cdf vdata]
   [chart-bat-posterior vdata]
   [chart-hr-by-bat vdata]
   [chart-hr-distribution hr-data]
   [chart-gps-vs-bat vdata]
   [chart-km-ci (:data km-ci-res)
                (:bat-med km-ci-res) (:gps-med km-ci-res)
                (:bat-mean km-ci-res) (:gps-mean km-ci-res)]
   [chart-t80-paths t80-bins]])

(def discovery-survival-layer-line
  {:mark {:type "line" :strokeWidth 2}
   :encoding {:x {:field "time"
                  :type "quantitative"
                  :title "Months"
                  :axis {:values [0 10 20 30 40 50 60 70 80]}}
              :y {:field "survival"
                  :type "quantitative"
                  :title "S(t)"
                  :scale {:domain [0 1]}}
              :color {:field "group"
                      :type "nominal"
                      :scale {:domain ["Pooled" "GPS" "BAT"]
                              :range ["#4488cc" "#55bb88" "#ee6677"]}}
              :strokeDash {:field "group"
                           :type "nominal"
                           :scale {:domain ["Pooled" "GPS" "BAT"]
                                   :range [[] [4 4] [2 2]]}}}})

(def discovery-survival-layer-hover
  {:params [{:name "hover"
             :select {:type "point"
                      :on "mouseover"
                      :nearest true
                      :clear "mouseout"
                      :fields ["time"]}}]
   :transform [{:pivot "group" :value "survival" :groupby ["time"]}]
   :mark {:type "rule" :color "#bbb" :strokeWidth 0}
   :encoding {:x {:field "time" :type "quantitative"}
              :tooltip [{:field "time" :type "quantitative" :title "Months"}
                        {:field "Pooled" :type "quantitative" :format ".3f"}
                        {:field "GPS" :type "quantitative" :format ".3f"}
                        {:field "BAT" :type "quantitative" :format ".3f"}]}})

(def discovery-survival-layer-rule
  {:mark {:type "rule" :color "red" :strokeDash [4 4]}
   :data {:values [{:time 36}]}
   :encoding {:x {:field "time" :type "quantitative"}}})

(def discovery-survival-layer-text
  {:mark {:type "text" :align "left" :dx 5 :dy -140 :color "red"}
   :data {:values [{:time 36 :label "t=36"}]}
   :encoding {:x {:field "time" :type "quantitative"}
              :text {:field "label" :type "nominal"}}})

(def discovery-survival-layer-t36
  {:transform [{:filter "datum.time == 36"}]
   :mark {:type "text" :align "left" :dx 5 :dy -5}
   :encoding {:x {:field "time" :type "quantitative"}
              :y {:field "survival" :type "quantitative"}
              :color {:field "group"
                      :type "nominal"
                      :scale {:domain ["Pooled" "GPS" "BAT"]
                              :range ["#4488cc" "#55bb88" "#ee6677"]}}
              :text {:field "survival"
                     :type "quantitative"
                     :format ".3f"}}})

(defn discovery-survival-chart [data]
  [vega-lite
   {:width 300 :height 300
    :title "Survival Curves"
    :data {:values data}
    :layer [discovery-survival-layer-line
            discovery-survival-layer-hover
            discovery-survival-layer-rule
            discovery-survival-layer-text
            discovery-survival-layer-t36]
    :config {:view {:stroke "transparent"}
             :legend {:orient "bottom"}}}])

(def discovery-accrual-layer-line
  {:mark {:type "line" :strokeWidth 2}
   :encoding {:x {:field "time"
                  :type "quantitative"
                  :title "Months"
                  :axis {:values [0 10 20 30 40 50 60 70 80]}}
              :y {:field "events" :type "quantitative" :title "Events"}
              :color {:field "group"
                      :type "nominal"
                      :scale {:domain ["Total" "GPS" "BAT"]
                              :range ["#aa5599" "#55bb88" "#ee6677"]}}
              :strokeDash {:field "group"
                           :type "nominal"
                           :scale {:domain ["Total" "GPS" "BAT"]
                                   :range [[] [4 4] [2 2]]}}}})

(def discovery-accrual-layer-hover
  {:params [{:name "hover"
             :select {:type "point"
                      :on "mouseover"
                      :nearest true
                      :clear "mouseout"
                      :fields ["time"]}}]
   :transform [{:pivot "group" :value "events" :groupby ["time"]}]
   :mark {:type "rule" :color "#bbb" :strokeWidth 0}
   :encoding {:x {:field "time" :type "quantitative"}
              :tooltip [{:field "time" :type "quantitative" :title "Months"}
                        {:field "Total" :type "quantitative" :format ".1f"}
                        {:field "GPS" :type "quantitative" :format ".1f"}
                        {:field "BAT" :type "quantitative" :format ".1f"}]}})

(defn accrual-markers-layer [markers color shape size y-field]
  {:data {:values markers}
   :mark {:type "point" :size size :color color :shape shape}
   :encoding {:x {:field "time" :type "quantitative"}
              :y {:field y-field :type "quantitative"}}})

(defn extract-accrual-markers [event-stats]
  (mapv (fn [s] {:time (:time s 0.0)
                 :expected (:expected s)
                 :target (:target s)
                 :label (:label s)})
        event-stats))

(defn discovery-accrual-chart [curve-data event-stats]
  (let [mks (extract-accrual-markers event-stats)]
    [vega-lite
     {:width 300 :height 300
      :title "Expected Event Accrual"
      :data {:values curve-data}
      :layer [discovery-accrual-layer-line
              discovery-accrual-layer-hover
              (accrual-markers-layer mks "black" "cross" 100 "target")
              (accrual-markers-layer mks "red" "circle" 60 "expected")]
      :config {:view {:stroke "transparent"}
               :legend {:orient "bottom"}}}]))

(def discovery-alive-layer-line
  {:transform [{:fold ["total-alive" "gps-alive" "bat-alive"
                       "total-died" "gps-died" "bat-died"]
                :as ["group" "count"]}]
   :mark {:type "line" :strokeWidth 2}
   :encoding {:x {:field "time"
                  :type "quantitative"
                  :title "Months"
                  :axis {:values [0 10 20 30 40 50 60 70 80]}}
              :y {:field "count" :type "quantitative" :title "Patients"}
              :color {:field "group"
                      :type "nominal"
                      :scale {:domain ["total-alive" "gps-alive" "bat-alive"
                                       "total-died" "gps-died" "bat-died"]
                              :range ["#aa5599" "#55bb88" "#ee6677"
                                      "#aa5599" "#55bb88" "#ee6677"]}}
              :strokeDash {:field "group"
                           :type "nominal"
                           :scale {:domain ["total-alive" "gps-alive" "bat-alive"
                                            "total-died" "gps-died" "bat-died"]
                                   :range [[] [] [] [4 4] [4 4] [4 4]]}}}})

(def discovery-alive-layer-hover
  {:params [{:name "hover"
             :select {:type "point"
                      :on "mouseover"
                      :nearest true
                      :clear "mouseout"
                      :fields ["time"]}}]
   :mark {:type "rule" :color "#bbb" :strokeWidth 0}
   :encoding {:x {:field "time" :type "quantitative"}
              :tooltip [{:field "time" :type "quantitative" :title "Months"}
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
                         :format ".1f" :title "BAT/2 - Died"}]}})

(defn alive-milestones-rule [milestones]
  {:mark {:type "rule" :color "gray" :strokeDash [4 4]}
   :data {:values milestones}
   :encoding {:x {:field "time" :type "quantitative"}}})

(defn alive-milestones-text [milestones]
  {:mark {:type "text" :align "left" :dx 5 :dy -140 :color "gray"}
   :data {:values milestones}
   :encoding {:x {:field "time" :type "quantitative"}
              :text {:field "label" :type "nominal"}}})

(defn extract-alive-milestones [event-stats]
  (keep (fn [s] (when (#{"IA" "UPD"} (:name s))
                  {:time (:time s) :label (:name s)}))
        event-stats))

(defn discovery-alive-chart [curve-data event-stats]
  (let [milestones (extract-alive-milestones event-stats)]
    [vega-lite
     {:width 300 :height 300
      :title "Patients: Alive vs Died"
      :data {:values curve-data}
      :layer [discovery-alive-layer-line
              discovery-alive-layer-hover
              (alive-milestones-rule milestones)
              (alive-milestones-text milestones)]
      :config {:view {:stroke "transparent"}
               :legend {:orient "bottom"}}}]))

(def discovery-hr-layer-bar
  {:mark {:type "bar" :size 40}
   :encoding {:x {:field "interval" :type "nominal"
                  :title "Milestone Interval"
                  :sort ["0-IA" "IA-UPD" "UPD-PR3"]}
              :y {:field "hr" :type "quantitative" :title "Hazard Ratio"
                  :scale {:domain [0 1.5]}}
              :color {:field "interval" :type "nominal"
                      :scale {:domain ["0-IA" "IA-UPD" "UPD-PR3"]
                              :range ["#4488cc" "#55bb88" "#ee6677"]}
                      :legend nil}
              :tooltip [{:field "interval" :type "nominal" :title "Interval"}
                        {:field "hr" :type "quantitative"
                         :format ".3f" :title "HR"}]}})

(def discovery-hr-layer-rule
  {:mark {:type "rule" :color "red" :strokeDash [4 4]}
   :data {:values [{:y 1.0}]}
   :encoding {:y {:field "y" :type "quantitative"}}})

(defn discovery-hr-chart [hr-data]
  [vega-lite
   {:width 300 :height 300
    :title "Estimated Hazard Ratios"
    :data {:values hr-data}
    :layer [discovery-hr-layer-bar discovery-hr-layer-rule]
    :config {:view {:stroke "transparent"}}}])

(defn hz-rates-bar-layer [metric-name title-str fmt-str color-scale
                            x-enc grp-enc]
  {:mark {:type "bar" :opacity 0.8}
   :encoding {:x x-enc
              :xOffset grp-enc
              :y {:field metric-name :type "quantitative"
                  :title title-str
                  :axis {:titleColor "#555"}}
              :color {:field "group" :type "nominal"
                      :scale color-scale
                      :legend {:title "Group"}}
              :tooltip [{:field "interval" :type "nominal" :title "Interval"}
                        {:field "group" :type "nominal" :title "Group"}
                        {:field metric-name :type "quantitative"
                         :format fmt-str :title title-str}]}})

(defn hz-rates-text-layer [metric-name fmt-str color-scale x-enc grp-enc]
  {:mark {:type "text" :align "center" :baseline "bottom" :dy -4}
   :encoding {:x x-enc
              :xOffset grp-enc
              :y {:field metric-name :type "quantitative"}
              :text {:field metric-name :type "quantitative" :format fmt-str}
              :color {:field "group" :type "nominal" :scale color-scale}}})

(defn discovery-hazard-rates-chart [rates-data metric]
  (let [color-scale {:domain ["Pooled" "GPS" "BAT"]
                     :range  ["#4488cc" "#55bb88" "#ee6677"]}
        x-enc {:field "interval" :type "nominal" :title "Milestone Interval"
               :sort  ["0-IA" "IA-UPD" "UPD-PR3"]}
        grp-enc {:field "group" :type "nominal"}
        m-name (name metric)
        title-str (if (= metric :rate) "Annualized Hazard Rate"
                      "Median Survival Time (months)")
        fmt-str (if (= metric :rate) ".4f" ".2f")]
    [vega-lite
     {:width 300 :height 300
      :title (str (if (= metric :rate) "Annualized Hazard Rates"
                      "Median Survival Time") " by Period")
      :data {:values rates-data}
      :layer [(hz-rates-bar-layer m-name title-str fmt-str color-scale
                                   x-enc grp-enc)
              (hz-rates-text-layer m-name fmt-str color-scale
                                    x-enc grp-enc)]
      :config {:view {:stroke "transparent"}
               :legend {:orient "bottom"}}}]))

(defn map-stress-result [r]
  {:mos (:mos r)
   :k (.toFixed (:k r) 2)
   :p_joint (* 100 (:p_joint r))
   :label (str (:mos r) " (k=" (.toFixed (:k r) 2) ")")})

(defn stress-test-spec [vdata]
  {:width 600 :height 300 :data {:values vdata}
   :title "Joint Probability (p_joint) by mOS and k"
   :mark {:type "line" :point true}
   :encoding {:x {:field "mos" :type "quantitative" :title "mOS"}
              :y {:field "p_joint" :type "quantitative" :title "p_joint (%)"}
              :color {:field "k" :type "nominal" :title "k"
                      :legend {:orient "bottom"}}}})

(defn stress-test-charts [results]
  (let [vdata (map map-stress-result results)]
    [:div.flex.flex-wrap.gap-4
     [vega-lite (stress-test-spec vdata)]]))

(defn map-power-result [r]
  {:bat-mos (:bat-mos r)
   :gps-mos (:gps-mos r)
   :n-required (min 1000.0 (:n-required r))})

(defn power-heatmap-spec [vdata]
  {:width 400 :height 300
   :title "Required Sample Size (N) Heatmap"
   :data {:values vdata}
   :mark {:type "rect" :tooltip true}
   :encoding {:x {:field "bat-mos" :type "ordinal" :title "BAT mOS"
                  :axis {:labelAngle 0}}
              :y {:field "gps-mos" :type "ordinal" :title "GPS mOS"
                  :sort "descending"}
              :color {:field "n-required" :type "quantitative"
                      :title "N Required"
                      :scale {:scheme "yelloworangered" :clamp true}}}
   :config {:legend {:orient "bottom"}}})

(defn power-heatmap [results]
  (let [vdata (clj->js (map map-power-result results))]
    [vega-lite (power-heatmap-spec vdata)]))

(defn map-power-line-result [r]
  {:bat-mos (str (:bat-mos r) " mOS")
   :gps-mos (:gps-mos r)
   :n-required (min 1000.0 (:n-required r))})

(defn power-line-spec [vdata]
  {:width 500 :height 300
   :title "N Required vs. GPS mOS by BAT Scenario"
   :data {:values vdata}
   :mark {:type "line" :point true :tooltip true}
   :encoding {:x {:field "gps-mos" :type "quantitative" :title "GPS mOS"}
              :y {:field "n-required" :type "quantitative"
                  :title "N Required (Clamped to 1000)"}
              :color {:field "bat-mos" :type "nominal" :title "BAT Scenario"
                      :legend {:orient "bottom"}}}})

(defn power-line-chart [results]
  (let [vdata (clj->js (map map-power-line-result results))]
    [vega-lite (power-line-spec vdata)]))

(defn enrollment-chart [data]
  [vega-lite
   {:width 600 :height 400
    :title "Enrollment Curve with 95% Confidence Interval"
    :data {:values data}
    :layer [{:mark {:type "area" :opacity 0.3}
             :encoding {:x {:field "time" :type "quantitative"
                            :title "Time (months)"}
                        :y {:field "low" :type "quantitative"
                            :title "Enrolled Patients"}
                        :y2 {:field "high" :type "quantitative"}
                        :color {:value "#4488cc"}}}
            {:mark {:type "line" :strokeWidth 2}
             :encoding {:x {:field "time" :type "quantitative"}
                        :y {:field "mean" :type "quantitative"}
                        :color {:value "#4488cc"}}}]}])
