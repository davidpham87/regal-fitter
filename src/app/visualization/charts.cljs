(ns app.visualization.charts
  (:require [app.visualization.charts.vega :as vega]
            [app.visualization.charts.simulation :as sim]
            [app.visualization.charts.discovery :as disc]
            [app.visualization.charts.power :as pow]))

(def vega-lite vega/vega-lite)

;; Simulation charts
(def chart-bat-cdf sim/chart-bat-cdf)
(def chart-bat-posterior sim/chart-bat-posterior)
(def chart-hr-by-bat sim/chart-hr-by-bat)
(def chart-hr-distribution sim/chart-hr-distribution)
(def chart-bat-alive-distribution sim/chart-bat-alive-distribution)
(def chart-gps-vs-bat sim/chart-gps-vs-bat)
(def chart-implied-km sim/chart-implied-km)
(def chart-km-ci sim/chart-km-ci)
(def chart-hr-paths sim/chart-hr-paths)
(def chart-t80-paths sim/chart-t80-paths)
(def render-charts-list sim/render-charts-list)

;; Discovery charts
(def discovery-survival-chart disc/discovery-survival-chart)
(def discovery-accrual-chart disc/discovery-accrual-chart)
(def discovery-alive-chart disc/discovery-alive-chart)
(def discovery-hr-chart disc/discovery-hr-chart)
(def discovery-hazard-rates-chart disc/discovery-hazard-rates-chart)

;; Power & Planning charts
(def stress-test-charts pow/stress-test-charts)
(def power-heatmap pow/power-heatmap)
(def power-line-chart pow/power-line-chart)
(def enrollment-chart pow/enrollment-chart)
