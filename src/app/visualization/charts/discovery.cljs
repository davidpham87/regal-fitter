(ns app.visualization.charts.discovery
  (:require [app.visualization.charts.vega :refer [vega-lite]]))

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
                      :scale {:domain ["Pooled" "GPS" "BAT" "GPS (sim)" "BAT (sim)"]
                              :range ["#4488cc" "#55bb88" "#ee6677" "#55bb88" "#ee6677"]}}
              :strokeDash {:field "group"
                           :type "nominal"
                           :scale {:domain ["Pooled" "GPS" "BAT" "GPS (sim)" "BAT (sim)"]
                                   :range [[] [] [] [4 4] [4 4]]}}}})

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
   :mark {:type "point" :size size :color color :shape shape :filled false}
   :encoding {:x {:field "time" :type "quantitative"}
              :y {:field y-field :type "quantitative" :scale {:zero false}}
              :tooltip [{:field "label" :type "nominal" :title "Milestone"}
                        {:field "time" :type "quantitative" :title "Month"}
                        {:field y-field :type "quantitative" :title y-field}]}})

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

(defn- prepare-hr-distribution-data [hr-arr success-threshold]
  (let [n (count hr-arr)
        valid-hrs (filter number? hr-arr)]
    (if (zero? (count valid-hrs))
      []
      (let [min-val (apply min valid-hrs)
            max-val (apply max valid-hrs)
            ;; Add a small padding to include max element in the last bin
            max-val (+ max-val 1e-9)
            num-bins 20
            span (- max-val min-val)
            bin-width (if (zero? span) 0.05 (/ span num-bins))
            bins (for [i (range num-bins)]
                   (let [bin-min (+ min-val (* i bin-width))
                         bin-max (+ bin-min bin-width)
                         bin-mid (+ bin-min (/ bin-width 2.0))
                         in-bin (filter
                                 #(and (>= % bin-min) (< % bin-max))
                                 valid-hrs)
                         c (count in-bin)
                         cum-c (count (filter #(< % bin-max) valid-hrs))]
                     {:bin-mid bin-mid
                      :count c
                      :cumulative-prob (/ cum-c n)}))]
        (vec bins)))))

(defn discovery-hr-distribution-chart [hr-arr success-threshold]
  (let [chart-data (prepare-hr-distribution-data hr-arr success-threshold)]
    [vega-lite
     {:width 500 :height 300
      :title "Stochastic Hazard Ratio Distribution & Cumulative Success"
      :data {:values chart-data}
      :encoding {:x {:field "bin-mid" :type "quantitative" :title "Hazard Ratio"}}
      :layer
      [;; 1. Histogram Bars (Y axis left)
       {:mark {:type "bar" :opacity 0.6 :color "#4f46e5"}
        :encoding {:y {:field "count" :type "quantitative" :title "Count"}}}
       ;; 2. Cumulative Line (Y axis right)
       {:mark {:type "line" :color "#10b981" :strokeWidth 2}
        :encoding {:y {:field "cumulative-prob" :type "quantitative"
                       :axis {:title "Cumulative Probability"
                              :orient "right"
                              :format "%"}
                       :scale {:domain [0.0 1.0]}}}}
       ;; 3. Threshold vertical rule at 0.636
       {:data {:values [{:threshold success-threshold}]}
        :encoding {:x {:field "threshold" :type "quantitative"}}
        :layer
        [{:mark {:type "rule" :color "#ef4444" :strokeDash [4 4] :strokeWidth 2}}
         {:mark {:type "text" :align "right" :dx -5 :dy -100 :color "#ef4444"
                 :text "Success Threshold"}}]}]
      :resolve {:scale {:y "independent"}}
      :config {:view {:stroke "transparent"}}}]))
