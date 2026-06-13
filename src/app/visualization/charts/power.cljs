(ns app.visualization.charts.power
  (:require [app.visualization.charts.vega :refer [vega-lite]]))

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
