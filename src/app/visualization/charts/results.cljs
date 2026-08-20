(ns app.visualization.charts.results
  (:require [app.visualization.charts.vega :refer [vega-lite]]))

(defn- population-cr2-lambda [irm d k]
  (let [num (- (js/Math.pow (+ irm d) k) (js/Math.pow d k))
        den (js/Math.log 2)]
    (js/Math.pow (/ num den) (/ 1.0 k))))

(defn- true-mos [lambda k]
  (* lambda (js/Math.pow (js/Math.log 2) (/ 1.0 k))))

(defn- clean-data [data]
  (if (seq data)
    (mapv (fn [item]
            (if (or (nil? item) (:onset-cr2-bat-mos item))
              item
              (let [irm (:bat-med item)
                    k (or (:bat-shape item) 1.0)
                    d 3
                    lambda (population-cr2-lambda irm d k)
                    onset-mos (true-mos lambda k)]
                (assoc item :onset-cr2-bat-mos onset-mos))))
          (filterv some? data))
    []))

(defn chart-posterior-histogram [data param-name label]
  (let [spec
        {:data {:values (clean-data data)}
         :transform
         [{:calculate (str "datum['acceptance-rate'] > 0 ? "
                           "sqrt(datum['acceptance-rate']) : 0")
           :as "wt"}]
         :width 600
         :height 200
         :padding {:left 65 :right 20 :top 20 :bottom 40}
         :autosize {:type "fit" :contains "padding"}
         :mark {:type "bar" :tooltip true}
         :encoding
         {:x {:field (name param-name)
              :type "quantitative"
              :bin {:step 0.5}
              :title label}
          :y {:aggregate "sum"
              :field "wt"
              :type "quantitative"
              :title "Weighted Freq"}
          :color {:value "#4F46E5"}}}]
    [vega-lite spec]))

(defn chart-posterior-cdf [data param-name label]
  (let [spec
        {:data {:values (clean-data data)}
         :transform
         [{:calculate (str "datum['acceptance-rate'] > 0 ? "
                           "sqrt(datum['acceptance-rate']) : 0")
           :as "wt"}
          {:window [{:op "sum" :field "wt" :as "cum_wt"}]
           :sort [{:field (name param-name) :order "ascending"}]}
          {:joinaggregate [{:op "sum" :field "wt" :as "total_wt"}]}
          {:calculate "datum.cum_wt / datum.total_wt" :as "cdf"}]
         :width 440
         :height 200
         :padding {:left 65 :right 20 :top 20 :bottom 40}
         :autosize {:type "fit" :contains "padding"}
         :mark {:type "line" :interpolate "step-after" :tooltip true
                :strokeWidth 3}
         :encoding
         {:x {:field (name param-name)
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
        {:data {:values (clean-data data)}
         :width 440
         :height 330
         :padding {:left 65 :right 20 :top 20 :bottom 45}
         :autosize {:type "fit" :contains "padding"}
         :transform
         [{:calculate (str "datum['acceptance-rate'] > 0 ? "
                           "sqrt(datum['acceptance-rate']) : 0")
           :as "wt"}
          {:filter "datum['wt'] > 0"}
          {:joinaggregate [{:op "max" :field (name param-x) :as "max_x"}
                           {:op "min" :field (name param-x) :as "min_x"}
                           {:op "max" :field (name param-y) :as "max_y"}
                           {:op "min" :field (name param-y) :as "min_y"}]}
          ;; Add 5% jitter relative to the range
          {:calculate (str "datum['" (name param-x) "'] + "
                           "(random() - 0.5) * "
                           "(datum.max_x - datum.min_x) * 0.05")
           :as "jx"}
          {:calculate (str "datum['" (name param-y) "'] + "
                           "(random() - 0.5) * "
                           "(datum.max_y - datum.min_y) * 0.05")
           :as "jy"}]
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
          :color {:field "median-hr-final"
                  :type "quantitative"
                  :title "Median HR"
                  :scale {:scheme "viridis"}}}}]
    [vega-lite spec]))

(defn chart-posterior-dual-axis [data param-name label]
  (let [spec
        {:data {:values (clean-data data)}
         :width 360
         :height 240
         :padding {:top 10 :bottom 10}
         :encoding
         {:x {:field (name param-name)
              :type "quantitative"
              :title label}}
         :layer
         [{:transform
           [{:calculate (str "datum['acceptance-rate'] > 0 ? "
                             "sqrt(datum['acceptance-rate']) : 0")
             :as "wt"}]
           :mark {:type "bar" :tooltip true :color "#4F46E5"}
           :encoding
           {:x {:field (name param-name)
                :type "quantitative"
                :bin {:step 0.5}}
            :y {:aggregate "sum"
                :field "wt"
                :type "quantitative"
                :title "Weighted Freq"}}}
          {:transform
           [{:calculate (str "datum['acceptance-rate'] > 0 ? "
                             "sqrt(datum['acceptance-rate']) : 0")
             :as "wt"}
            {:window [{:op "sum" :field "wt" :as "cum_wt"}]
             :sort [{:field (name param-name) :order "ascending"}]}
            {:joinaggregate [{:op "sum" :field "wt" :as "total_wt"}]}
            {:calculate "datum.cum_wt / datum.total_wt" :as "cdf"}]
           :mark {:type "line" :interpolate "step-after" :tooltip true
                  :strokeWidth 3 :color "#10B981"}
           :encoding
           {:y {:field "cdf"
                :type "quantitative"
                :title "Cumulative Prob."
                :scale {:domain [0 1]}
                :axis {:orient "right"}}}}]
         :resolve {:scale {:y "independent"}}}]
    [vega-lite spec]))
