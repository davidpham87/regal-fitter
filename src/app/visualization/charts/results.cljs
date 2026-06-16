(ns app.visualization.charts.results
  (:require [app.visualization.charts.vega :refer [vega-lite]]))

(defn chart-posterior-histogram [data param-name label]
  (let [spec
        {:data {:values data}
         :transform [{:calculate "datum['acceptance-rate'] > 0 ? sqrt(datum['acceptance-rate']) : 0"
                      :as "wt"}]
         :width "container"
         :height 200
         :mark {:type "bar" :tooltip true}
         :encoding
         {:x {:field param-name
              :type "quantitative"
              :bin {:maxbins 30}
              :title label}
          :y {:aggregate "sum"
              :field "wt"
              :type "quantitative"
              :title "Weighted Freq"}
          :color {:value "#4F46E5"}}}]
    [vega-lite spec]))

(defn chart-posterior-cdf [data param-name label]
  (let [spec
        {:data {:values data}
         :transform [{:calculate "datum['acceptance-rate'] > 0 ? sqrt(datum['acceptance-rate']) : 0"
                      :as "wt"}
                     {:window [{:op "sum" :field "wt" :as "cum_wt"}]
                      :sort [{:field param-name :order "ascending"}]}
                     {:joinaggregate [{:op "sum" :field "wt" :as "total_wt"}]}
                     {:calculate "datum.cum_wt / datum.total_wt" :as "cdf"}]
         :width "container"
         :height 200
         :mark {:type "line" :interpolate "step-after" :tooltip true :strokeWidth 3}
         :encoding
         {:x {:field param-name
              :type "quantitative"
              :title label}
          :y {:field "cdf"
              :type "quantitative"
              :title "Cumulative Prob."
              :scale {:domain [0 1]}}
          :color {:value "#10B981"}}}]
    [vega-lite spec]))

(defn chart-pairwise-scatter [data param-x param-y label-x label-y]
  (let [spec
        {:data {:values data}
         :width "container"
         :height 350
         :transform [{:calculate "datum['acceptance-rate'] > 0 ? sqrt(datum['acceptance-rate']) : 0"
                      :as "wt"}
                     {:filter "datum['wt'] > 0"}
                     {:joinaggregate [{:op "max" :field (name param-x) :as "max_x"}
                                      {:op "min" :field (name param-x) :as "min_x"}
                                      {:op "max" :field (name param-y) :as "max_y"}
                                      {:op "min" :field (name param-y) :as "min_y"}]}
                     ;; Add 5% jitter relative to the range
                     {:calculate (str "datum['" (name param-x) "'] + (random() - 0.5) * (datum.max_x - datum.min_x) * 0.05") :as "jx"}
                     {:calculate (str "datum['" (name param-y) "'] + (random() - 0.5) * (datum.max_y - datum.min_y) * 0.05") :as "jy"}]
         :mark {:type "circle" :tooltip true}
         :encoding
         {:x {:field "jx"
              :type "quantitative"
              :title label-x
              :scale {:zero false}}
          :y {:field "jy"
              :type "quantitative"
              :title label-y
              :scale {:zero false}}
          :size {:field "wt"
                 :type "quantitative"
                 :title "Weight"
                 :scale {:range [10 200]}}
          :color {:field "median-hr-ia"
                  :type "quantitative"
                  :title "Median HR"
                  :scale {:scheme "viridis"}}}}]
    [vega-lite spec]))
