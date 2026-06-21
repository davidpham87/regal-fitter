(ns app.visualization
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.visualization.resampling :as resampling]
            [app.visualization.charts :as charts]
            [app.components.card :refer [chart-card]]))

;; Re-export components for discovery
(def discovery-survival-chart charts/discovery-survival-chart)
(def discovery-accrual-chart charts/discovery-accrual-chart)
(def discovery-alive-chart charts/discovery-alive-chart)
(def discovery-hr-chart charts/discovery-hr-chart)
(def discovery-hazard-rates-chart
  charts/discovery-hazard-rates-chart)

;; Re-export components for enrollment
(def enrollment-chart charts/enrollment-chart)

;; Re-export components for stress testing and power
(def stress-test-charts charts/stress-test-charts)
(def power-heatmap charts/power-heatmap)
(def power-line-chart charts/power-line-chart)

;; Re-export components for results
(def chart-posterior-histogram charts/chart-posterior-histogram)
(def chart-posterior-cdf charts/chart-posterior-cdf)
(def chart-posterior-dual-axis charts/chart-posterior-dual-axis)
(def chart-pairwise-scatter charts/chart-pairwise-scatter)

;; Re-export resampling functions
(def sample-combos resampling/sample-combos)
(def score-sampled-combos resampling/score-sampled-combos)

;; ── loading skeleton ──────────────────────────────────────────────────────

(defn- aggregation-loading []
  [:div.flex.items-center.justify-center.gap-3.p-10.text-gray-400
   [:svg.animate-spin.h-5.w-5
    {:xmlns "http://www.w3.org/2000/svg" :fill "none"
     :viewBox "0 0 24 24"}
    [:circle.opacity-25
     {:cx "12" :cy "12" :r "10" :stroke "currentColor"
      :stroke-width "4"}]
    [:path.opacity-75
     {:fill "currentColor"
      :d (str "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z")}]]
   [:span.text-sm "Aggregating on worker…"]])

;; ── main panel ───────────────────────────────────────────────────────────
;;
;; Receives already-resampled+scored combos (best-n) from results.cljs.
;; Dispatches :aggregation/request once per unique (family, n) pair.
;; All heavy data transforms run in the worker; the component just reads
;; the resulting {:vdata :hr-data :km-ci :t80-bins} from re-frame.

(defn render-charts-panel [family best-n _top-n config]
  (let [cache-key [(keyword family) (count best-n)]]
    ;; Trigger aggregation job — idempotent, no-op if already cached/running
    (rf/dispatch [:aggregation/request cache-key best-n config])
    (let [loading? @(rf/subscribe [:aggregation/loading? cache-key])
          agg-data @(rf/subscribe [:aggregation/data     cache-key])]
      [:div.mb-8.results-charts-container
       [:div.flex.items-center.justify-between.mb-4
        [:h3.text-lg.font-bold
         family " — Aggregated (" (count best-n) " samples)"]]
       (cond
         loading?  [aggregation-loading]

         agg-data
         (let [{:keys [vdata hr-data km-ci hr-paths t80-bins alive-data
                       bat-alive-data]} agg-data]
           [:div.grid.grid-cols-1.md:grid-cols-2.xl:grid-cols-3.gap-6
            ^{:key "bat-cdf"}
            [chart-card {:title "Cumulative BAT mOS & P(success)"}
             [charts/chart-bat-cdf vdata]]
            ^{:key "bat-posterior"}
            [chart-card {:title "Posterior Probability of BAT mOS"}
             [charts/chart-bat-posterior vdata]]
            ^{:key "bat-hr"}
            [chart-card {:title "Implied Final HR by BAT mOS"}
             [charts/chart-hr-by-bat vdata]]
            ^{:key "gps-vs-bat"}
            [chart-card {:title "GPS mOS vs BAT mOS"}
             [charts/chart-gps-vs-bat vdata]]
            ^{:key "km-ci"}
            [chart-card {:title "KM Curves with 95% CI"}
             [charts/chart-km-ci
              (:data km-ci)
              (:bat-med km-ci)
              (:gps-med km-ci)
              (:bat-mean km-ci)
              (:gps-mean km-ci)]]
            ^{:key "hr-dist"}
            [chart-card {:title "Hazard Ratio Distribution"}
             [charts/chart-hr-distribution hr-data]]
            ^{:key "hr-paths"}
            [chart-card {:title "Successful Paths: Final HR"}
             [charts/chart-hr-paths hr-paths]]
            ^{:key "t80-paths"}
            [chart-card
             {:title    "Successful Paths: Read-out Time (t80)"
              :subtitle "t=63 months ≈ June 2026"}
             [charts/chart-t80-paths t80-bins]]
            ^{:key "bat-alive-dist"}
            [chart-card {:title "BAT Alive Patients at T80: Histogram & CDF"}
             [charts/chart-bat-alive-distribution bat-alive-data]]])

         :else
         [:div.text-gray-400.p-4 "Initializing…"])])))
