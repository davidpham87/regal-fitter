(ns app.visualization.charts.simulation
  (:require [app.visualization.charts.vega :refer [vega-lite make-chart]]))

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
  (make-chart vdata
    {:layer [cdf-layer-cdf cdf-layer-success cdf-layer-text]
     :config {:legend {:orient "bottom"}}}))

(defn chart-bat-posterior [vdata]
  (make-chart vdata
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
  (make-chart vdata
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
              :color {:value "#ff9900"}}})

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
  (make-chart hr-data
    {:resolve {:scale {:y "independent"}}
     :layer [hr-dist-layer-bar
             {:layer [hr-dist-layer-cdf
                      #_hr-dist-layer-success-ci
                      hr-dist-layer-success]}]
     :config {:legend {:orient "bottom"}}}))

(defn chart-alive-distribution [alive-data]
  (make-chart alive-data
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
              :color {:value "#ee6677"}}})

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
  (make-chart bat-alive-data
    {:resolve {:scale {:y "independent"}}
     :layer [bat-alive-layer-bar
             bat-alive-layer-cdf]
     :config {:legend {:orient "bottom"}}}))

(defn chart-gps-vs-bat [vdata]
  (make-chart vdata
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
   {:width 360 :height 240 :data {:values km-data}
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
   {:width 360 :height 240 :data {:values km-ci-data}
    :layer [km-ci-layer-area
            km-ci-layer-mean-line
            km-ci-layer-median-line
            (km-ci-layer-rule-y)
            (km-ci-layer-rule-bat bat-med-w)
            (km-ci-layer-rule-gps gps-med-w)]
    :config {:legend {:orient "bottom"}}}])

(def hr-paths-bar-layer
  {:mark "bar"
   :encoding {:x {:field "lo"
                  :type "quantitative"
                  :title "Final Hazard Ratio"
                  :bin {:binned true :step 0.02}}
              :x2 {:field "hi"}
              :y {:field "pct"
                  :type "quantitative"
                  :title "Percentage (%)"}
              :color {:value "#55bb88"}}})

(def hr-paths-cdf-layer
  {:mark {:type "line" :point true}
   :encoding {:x {:field "mid" :type "quantitative"}
              :y {:field "cum-pct"
                  :type "quantitative"
                  :title "Cumulative Probability (%)"
                  :axis {:orient "right"}
                  :scale {:domain [0 100]}}
              :color {:datum "Cumulative (CDF)"
                      :type "nominal"
                      :scale {:range ["#ff3366" "#55bb88"]}}
              :tooltip [{:field "mid" :type "quantitative"
                          :title "Hazard Ratio"}
                        {:field "cum-pct" :type "quantitative"
                         :format ".1f"
                         :title "Cumulative (%)"}]}})

(defn chart-hr-paths [hr-path-bins]
  (make-chart hr-path-bins
    {:resolve {:scale {:y "independent"}}
     :layer [hr-paths-bar-layer hr-paths-cdf-layer]
     :config {:legend {:orient "bottom"}}}))

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
              :color {:value "#4488cc"}}})

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
  (make-chart t80-path-bins
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
