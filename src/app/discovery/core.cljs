(ns app.discovery.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [app.state :as state]
            [app.visualization :as vega]
            [app.simulator :as sim]
            [reitit.frontend.easy :as rfe]
            [cljs.math :as math]
            [clojure.string :as cstr]
            [app.discovery.calc :as dc]
            [app.discovery.hazard :as dhz]
            [app.discovery.playground :as play]))

;; ---------------------------------------------------------------------------
;; UI Component Primitives (Inlined from discovery.ui)
;; ---------------------------------------------------------------------------

(defn- card-panel [class-name & children]
  (into [:div.bg-white.p-3.rounded-xl.shadow-sm.border {:class class-name}] children))

(defn- gray-panel [class-name & children]
  (into [:div.bg-gray-50.p-2.rounded-lg.border {:class class-name}] children))

(defn- badge-pill [class-name text]
  [:span.px-2.py-1.rounded-lg.text-xs.font-bold.uppercase {:class class-name} text])

(defn- text-gray-label [class-name text]
  [:div.text-xs.text-gray-400.font-semibold {:class class-name} text])

(defn- text-center-panel [label val-str val-class]
  [:div.text-center
   [text-gray-label nil label]
   [:div.text-sm.font-semibold {:class (or val-class "text-gray-700")} val-str]])

(defn- table-th [alignment text]
  [:th.font-semibold.text-gray-600.pb-2 {:class (str "text-" (or alignment "left"))} text])

(defn- param-range-input
  [val min max step disabled? set-values on-change param-key]
  [:input.w-full.h-1.bg-gray-200.rounded-lg.appearance-none.cursor-pointer
   {:type "range" :min min :max max :step step
    :value val :disabled disabled?
    :on-change
    (fn [e]
      (let [v (js/parseFloat (.. e -target -value))]
        (set-values {param-key v})
        (when on-change (on-change param-key v))))}])

(defn- param-number-input
  [val step disabled? set-values on-change param-key]
  [:input.border.rounded.p-0.5.w-12.text-center
   {:type "number" :value val :step step :disabled disabled?
    :style {:font-size "10px"}
    :on-change
    (fn [e]
      (let [v (js/parseFloat (.. e -target -value))]
        (set-values {param-key v})
        (when on-change (on-change param-key v))))}])

(defn- param-input
  ([props param-key label min max step]
   (param-input props param-key label min max step false))
  ([{:keys [values set-values on-change]} param-key label
    min max step disabled?]
   (let [val (get values param-key)]
     [:div.mb-1
      [:label.block.font-semibold.uppercase.tracking-wider
       {:style {:font-size "8.5px"}
        :class (if disabled? "text-gray-400" "text-gray-500")}
       label]
      [:div.flex.items-center.gap-1
       [param-range-input val min max step disabled?
        set-values on-change param-key]
       [param-number-input val step disabled?
        set-values on-change param-key]]])))

(defn- quality-fit-badge [res]
  (cond
    (< res 2.0) [badge-pill "bg-green-100 text-green-800" "Excellent"]
    (< res 5.0) [badge-pill "bg-yellow-100 text-yellow-800" "Acceptable"]
    :else [badge-pill "bg-red-100 text-red-800" "Poor"]))

(defn- stat-card [s]
  [:div.bg-white.p-2.rounded-lg.shadow-sm.border.text-xxs
   [:h5.font-bold.text-gray-400.uppercase (:label s)]
   [:div.mt-0.5.flex.items-baseline.gap-0.5
    [:span.text-sm.font-bold.text-gray-800 (.toFixed (:expected s) 1)]
    [:span.text-gray-400 (str " / " (:target s))]]
   [:div.mt-0.5.grid.grid-cols-2.gap-0.5
    [:div
     [:div {:class "text-gray-400 uppercase" :style {:font-size "8px"}} "SD"]
     [:div.font-semibold (.toFixed (:sd s) 2)]]
    [:div
     [:div {:class "text-gray-400 uppercase" :style {:font-size "8px"}} "Std Dev"]
     [:div.font-semibold
      {:class (if (> (js/Math.abs (:std-dev s)) 2) "text-red-600" "text-green-600")}
      (.toFixed (:std-dev s) 2)]]]])

(defn- calculate-residual [milestone-stats]
  (apply js/Math.max
         (map #(js/Math.abs (- (:expected %) (:target %)))
              milestone-stats)))

(defn- stats-row [title stats]
  (let [res (calculate-residual stats)]
    [:div.mb-3
     [:h4.text-xs.font-bold.text-gray-700.mb-1.5.uppercase.tracking-wide title]
     [:div.grid.grid-cols-1.sm:grid-cols-4.gap-2
      (for [s stats]
        ^{:key (:label s)}
        [stat-card s])
      [:div.bg-white.p-2.rounded-lg.shadow-sm.border.flex.flex-row.justify-between.items-center.col-span-1
       [:div
        [:h5.font-bold.text-gray-400.uppercase {:style {:font-size "9px"}} "Quality of Fit"]
        [:div.text-xs.font-extrabold.text-gray-800 (.toFixed res 2) " residual"]]
       [:div [quality-fit-badge res]]]]]))

;; ---------------------------------------------------------------------------
;; Pure math helpers
;; ---------------------------------------------------------------------------

(defn population-cr2-lambda
  "Calculates lambda given IRM (experimental mOS), D (delay), and k."
  [irm d k]
  (let [numerator   (- (math/pow (+ irm d) k) (math/pow d k))
        denominator (math/log 2)
        base        (/ numerator denominator)
        exponent    (/ 1 k)]
    (math/pow base exponent)))

(defn true-mos
  "Calculates true mOS given population lambda and k."
  [lambda k]
  (* lambda (math/pow (math/log 2) (/ 1 k))))

;; ---------------------------------------------------------------------------
;; State helpers
;; ---------------------------------------------------------------------------

(defn- get-discovery-state []
  @(rf/subscribe [:discovery]))

(defn- debounce [f ms]
  (let [timer (atom nil)]
    (fn [& args]
      (when @timer (js/clearTimeout @timer))
      (reset! timer (js/setTimeout #(apply f args) ms)))))

(defonce ^:private debounced-calc-update
  (debounce
   (fn [params]
     (rf/dispatch [:set-discovery-calc-params params]))
   200))

(defonce ^:private debounced-sim-run
  (debounce
   (fn [family params]
     (sim/run-discovery-simulation! family params))
   500))

(def default-params
  {:bat-med       8.0
   :bat-shape     1.0
   :bat-cure-frac 0.2
   :bat-leak-yr   0.07
   :gps-med       12.0
   :gps-shape     1.0
   :gps-cure-frac 0.2
   :gps-leak-yr   0.07
   :weibull-k     1.0
   :delay         3.0
   :placebo-mode? false
   :filter-paths? false
   :tol-ia        4.0
   :tol-upd       4.0
   :tol-pr3       2.0
   :prefilter-check? false
   :prefilter-tol-ia 1.5
   :prefilter-tol-upd 1.5
   :prefilter-tol-pr3 1.5
   :n-sims        1000})



(defn- settings-checkboxes [{:keys [values set-values]}]
  [:div.bg-gray-50.p-2.rounded-xl.border.flex.items-center.gap-4.col-span-3.h-12
   ;; Placebo Mode
   [:label.flex.items-center.gap-1.5.text-xs.font-bold.text-gray-700
    {:class "cursor-pointer"}
    [:input {:type "checkbox"
             :id "placebo-mode"
             :checked (:placebo-mode? values)
             :on-change
             (fn [e]
               (if (.. e -target -checked)
                 (set-values {:placebo-mode? true
                              :gps-med (:bat-med values)
                              :gps-shape (:bat-shape values)
                              :gps-cure-frac (:bat-cure-frac values)
                              :gps-leak-yr (:bat-leak-yr values)})
                 (set-values {:placebo-mode? false})))}]
    "Placebo Mode"]
   ;; Filter Paths
   [:label.flex.items-center.gap-1.5.text-xs.font-bold.text-gray-700
    {:class "cursor-pointer"}
    [:input {:type "checkbox"
             :checked (:filter-paths? values)
             :on-change #(set-values
                          {:filter-paths? (.. % -target -checked)})} ]
    "Filter Paths"]
   ;; Prefilter Check
   [:label.flex.items-center.gap-1.5.text-xs.font-bold.text-gray-700
    {:class "cursor-pointer"}
    [:input {:type "checkbox"
             :checked (:prefilter-check? values)
             :on-change #(set-values
                          {:prefilter-check? (.. % -target -checked)})} ]
    "Prefilter Check"]])

(defn- tolerance-params [props]
  (let [values (:values props)]
    [:<>
     (when (:filter-paths? values)
       [:<>
        [param-input props :tol-ia "IA Path Tol" 0 15 1]
        [param-input props :tol-upd "UPD Path Tol" 0 15 1]
        [param-input props :tol-pr3 "PR3 Path Tol" 0 10 1]])
     (when (:prefilter-check? values)
       [:<>
        [param-input props :prefilter-tol-ia
         "Prefilter IA Tol" 0.0 5.0 0.1]
        [param-input props :prefilter-tol-upd
         "Prefilter UPD Tol" 0.0 5.0 0.1]
        [param-input props :prefilter-tol-pr3
         "Prefilter PR3 Tol" 0.0 5.0 0.1]])]))

;; ---------------------------------------------------------------------------
;; Simulation controls row
;; ---------------------------------------------------------------------------

(defn- sim-count-input [values set-values active-family calc-params]
  [:div.flex.items-center.gap-2.border-r.pr-4
   [:label.text-xs.font-bold.text-gray-600.mr-1 "Sim Count"]
   [:input.w-24
    {:type "range" :min 100 :max 5000 :step 100
     :value (:n-sims values)
     :on-change
     (fn [e]
       (let [v (js/parseFloat (.. e -target -value))]
         (set-values {:n-sims v})
         (debounced-sim-run active-family
                            (assoc calc-params :n-sims v))))}]
   [:input.border.rounded.p-1.text-xs.w-14
    {:type "number" :value (:n-sims values) :step 100
     :on-change
     (fn [e]
       (let [v (js/parseFloat (.. e -target -value))]
         (set-values {:n-sims v})
         (debounced-sim-run active-family
                            (assoc calc-params :n-sims v))))}]])

(defn- force-run-btn [active-family calc-params state]
  [:button.rounded-lg.shadow-sm.transition-colors
   {:type "button"
    :class ["px-4" "py-2" "bg-blue-600" "hover:bg-blue-700"
            "text-white" "text-xs" "font-bold"]
    :on-click (fn [e]
                (.preventDefault e)
                (sim/run-discovery-simulation!
                 active-family calc-params))
    :disabled (= (:sim-status state) :running)}
   "Force Run"])

(defn- sim-status-badge [state config calc-params]
  (case (:sim-status state)
    :running
    (let [n (or (:n-sims calc-params)
                (:n-sims-per-combo config))]
      [:span.text-xs.text-gray-500.animate-pulse
       (str "Running " n " trial simulations...")])

    :failed-prefilter
    [:span.text-xs.font-semibold.text-red-500
     "Prefilter check failed: 0% of trials passed."]

    :error
    [:span.text-xs.font-semibold.text-red-500
     (str "Error: " (:sim-result state))]

    nil))

(defn- sim-result-summary [state]
  (when (= (:sim-status state) :done)
    (let [{:keys [p-success-overall acceptance-rate
                  median-hr-final median-t80-months]}
          (:sim-result state)]
      [:<>
       [text-center-panel "P(Success)" (str (.toFixed (* 100 p-success-overall) 1) "%") "text-lg text-blue-600 font-bold"]
       [text-center-panel "Acceptance Rate" (str (.toFixed (* 100 acceptance-rate) 1) "%")]
       [text-center-panel "Median HR" (if (js/isNaN median-hr-final) "N/A" (.toFixed median-hr-final 3))]
       [text-center-panel "Median T80" (if (js/isNaN median-t80-months) "N/A" (str (.toFixed median-t80-months 1) "m"))]])))

(def ^:private row-sub-cls
  "font-bold text-gray-400 uppercase tracking-wide mb-1.5")

(def ^:private grid-4-cls
  "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4")

(defn- controls-panel
  [{:keys [values set-values] :as props} active-family
   calc-params state config bat-true-mos]
  (let [placebo? (:placebo-mode? values)
        ;; Sync BAT changes to GPS if placebo mode is enabled
        props (assoc props :on-change
                     (fn [k v]
                       (let [updates {k v}
                             updates (if (and placebo?
                                              (cstr/starts-with? (name k) "bat-"))
                                       (let [gk (keyword
                                                 (cstr/replace (name k)
                                                               "bat-"
                                                               "gps-"))]
                                         (assoc updates gk v))
                                       updates)]
                         (set-values updates))))

        ;; Determine which elements are disabled based on active family
        bat-cf-disabled? (not (= active-family "leaky"))
        bat-leak-disabled? (not (= active-family "leaky"))

        gps-cf-disabled? (or placebo? (= active-family "weibull"))
        gps-leak-disabled? (or placebo? (not (= active-family "leaky")))]
    [card-panel "mb-4"
     ;; Single Row: BAT and GPS Arm Parameters side-by-side
     [:div.grid.grid-cols-1.lg:grid-cols-2.gap-4.mb-3
      ;; BAT Column
      [gray-panel nil
       [:div {:class row-sub-cls :style {:font-size "8.5px" :margin-bottom "4px"}}
        "BAT Arm (Baseline Alternative Treatment)"]
       [:div.grid.grid-cols-2.sm:grid-cols-4.gap-2
        [param-input props :bat-med "Median" 4 25 0.5]
        [param-input props :bat-shape "Shape" 0.5 2.5 0.05]
        [param-input props :bat-cure-frac "Cure Frac"
         0.0 0.95 0.05 bat-cf-disabled?]
        [param-input props :bat-leak-yr "Leak"
         0.0 0.1 0.01 bat-leak-disabled?]]]

      ;; GPS Column
      [gray-panel nil
       [:div {:class row-sub-cls :style {:font-size "8.5px" :margin-bottom "4px"}}
        "GPS Arm (Genomic Predictor Signature)"]
       [:div.grid.grid-cols-2.sm:grid-cols-4.gap-2
        [param-input props :gps-med "Median" 4 50 1.0 placebo?]
        [param-input props :gps-shape "Shape" 0.5 2.5 0.05 placebo?]
        [param-input props :gps-cure-frac "Cure Frac"
         0.0 0.95 0.05 gps-cf-disabled?]
        [param-input props :gps-leak-yr "Leak"
         0.0 0.1 0.01 gps-leak-disabled?]]]]

     ;; Row 2: Settings, delay, and tolerances
     [:div.pt-3.border-t.grid.grid-cols-1.gap-2
      {:class "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"}
      [settings-checkboxes props]
      [param-input props :delay "D (Avg Months from CR2)" 0.0 20.0 0.5]
      [tolerance-params props]]

     [:div.mt-3.pt-3.border-t.flex.flex-wrap.items-center.gap-4
      {:class "justify-between"}
      [:div.flex.items-center.gap-3
       [sim-count-input values set-values active-family calc-params]
       [force-run-btn active-family calc-params state]
       [sim-status-badge state config calc-params]]

      [:div.flex.items-center.gap-4
       [text-center-panel "BAT True mOS" (str (.toFixed bat-true-mos 2) "m") "text-blue-600 font-bold"]
       [sim-result-summary state]]]]))

(defn- analytical-hazard-rates
  "Computes analytical annualized hazard rates using the Weibull model."
  [curve-data config]
  (let [ms-ev-bat  (:ms-ev-bat-arr curve-data)
        ms-ev-gps  (:ms-ev-gps-arr curve-data)
        alive-bat  (:alive-bat-ms curve-data)
        alive-gps  (:alive-gps-ms curve-data)
        t-ms       (:t-ms-arr curve-data)
        calc (fn [t1 t2 label]
               (let [ev-bat (- (nth ms-ev-bat t2) (nth ms-ev-bat t1))
                     ev-gps (- (nth ms-ev-gps t2) (nth ms-ev-gps t1))]
                 (dhz/calc-interval-rate
                  t1 t2 label ev-bat ev-gps config
                  alive-bat alive-gps t-ms)))]
    (vec
     (concat
      (calc 0 1 "0-IA")
      (calc 1 2 "IA-UPD")
      (calc 2 3 "UPD-PR3")))))

(defonce active-metric (r/atom :rate))

;; ---------------------------------------------------------------------------
;; Chart grids
;; ---------------------------------------------------------------------------

(defn- chart-grid [curve-data h1-hazard-rates active-metric sim-result title]
  [:div.grid.grid-cols-1.md:grid-cols-2.gap-4
   [card-panel nil
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Survival Curves")]
    [vega/discovery-survival-chart (:survival curve-data)]]
   [card-panel nil
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Event Accrual")]
    [vega/discovery-accrual-chart (:accrual curve-data)
     (:stats curve-data)]]
   [card-panel nil
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Patients Alive")]
    [vega/discovery-alive-chart (:alive curve-data)
     (:stats curve-data)]]
   [card-panel nil
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Estimated Hazard Ratios")]
    [vega/discovery-hr-chart (:hr curve-data)]]
   [card-panel nil
    [:div.flex.justify-between.items-center.mb-2
     [:h4.text-xs.font-bold.text-gray-700
      (str title ": " (if (= @active-metric :rate)
                        "Annualized Hazard Rates"
                        "Median Overall Survival")
           (when sim-result " (sim)"))]
     [:div.flex.gap-1.bg-gray-100.p-0.5.rounded-md.text-xxs
      [:button.px-2.py-0.5.rounded.font-bold
       {:type "button"
        :class (if (= @active-metric :rate)
                 "bg-white text-gray-800 shadow-sm"
                 "text-gray-500 hover:text-gray-800")
        :on-click #(reset! active-metric :rate)}
       "Hazard Rate"]
      [:button.px-2.py-0.5.rounded.font-bold
       {:type "button"
        :class (if (= @active-metric :median)
                 "bg-white text-gray-800 shadow-sm"
                 "text-gray-500 hover:text-gray-800")
        :on-click #(reset! active-metric :median)}
       "Median OS"]]]
    ^{:key (str title "-" @active-metric)}
    [vega/discovery-hazard-rates-chart h1-hazard-rates @active-metric]]])

;; ---------------------------------------------------------------------------
;; H1 / H0 sections
;; ---------------------------------------------------------------------------

(defn- h1-section [stats curve-data h1-hazard-rates active-metric sim-result]
  [:div.bg-gray-50.p-4.rounded-xl.border
   [:div.flex.justify-between.items-center.mb-4
    [:h3.font-extrabold.text-gray-800
     "Alternate Hypothesis (H1): GPS is effective"]]
   [stats-row "Milestone Stats (H1)" stats]
   [chart-grid curve-data h1-hazard-rates active-metric sim-result "Alternate"]])

(defn- h0-section [stats-h0 curve-data-h0 h0-hazard-rates active-metric avg-med]
  [:div.bg-gray-50.p-4.rounded-xl.border
   [:h3.font-extrabold.text-gray-800.mb-4
    (str "Null Hypothesis (H0): GPS is placebo ("
         avg-med " mOS)")]
   [stats-row "Milestone Stats (H0)" stats-h0]
   [chart-grid curve-data-h0 h0-hazard-rates active-metric nil "H0"]])

;; ---------------------------------------------------------------------------
;; Detailed simulation results and realized medians panel
;; ---------------------------------------------------------------------------

(defn- simulation-results-panel []
  (let [expanded? (r/atom true)]
    (fn [sim-result medians active-family calc-params]
      (when sim-result
        [card-panel "mb-8 p-6"
         [:div.flex.justify-between.items-center.cursor-pointer
          {:on-click #(swap! expanded? not)}
          [:h3.text-lg.font-bold.text-gray-800
           "Simulation Detailed Results & Milestones"]
          [:span.text-xs.font-semibold.text-blue-600.hover:text-blue-800
           (if @expanded? "▲ Collapse" "▼ Expand")]]
         (when @expanded?
           [:div.grid.grid-cols-1.md:grid-cols-2.gap-8.mt-4
            [:div
             [:h4.text-sm.font-bold.text-gray-700.mb-3
              "Population Medians & Realized Months"]
             [:table.min-w-full.divide-y.divide-gray-200.text-sm
              [:thead
               [:tr
                [table-th "left" "Metric"]
                [table-th "right" "BAT"]
                [table-th "right" "GPS (Active)"]]]
              [:tbody.divide-y.divide-gray-200
               [:tr
                [:td.py-2.text-gray-600 "Input Observed mOS"]
                [:td.py-2.text-right.font-medium
                 (str (:bat-med calc-params) "m")]
                [:td.py-2.text-right.font-medium
                 (str (:gps-med calc-params) "m")]]
               [:tr
                [:td.py-2.text-gray-600
                 "True Population mOS (with delay/cure)"]
                [:td.py-2.text-right.font-medium.text-blue-600
                 (str (.toFixed (:bat-true-mos medians) 2) "m")]
                [:td.py-2.text-right.font-medium.text-blue-600
                 (if (= (:gps-true-mos medians) js/Infinity)
                   "Infinity"
                   (str (.toFixed (:gps-true-mos medians) 2) "m"))]]
               [:tr
                [:td.py-2.text-gray-600
                 "Trial Timeline realized mOS (50% events)"]
                [:td.py-2.text-right.font-medium.text-green-600
                 (if (= (:bat-realized-month medians) js/Infinity)
                   "N/A"
                   (str (.toFixed (:bat-realized-month medians) 2) "m"))]
                [:td.py-2.text-right.font-medium.text-green-600
                 (if (= (:gps-realized-month medians) js/Infinity)
                   "N/A"
                   (str (.toFixed (:gps-realized-month medians)
                                  2) "m"))]]]]]
            [:div
             [:h4.text-sm.font-bold.text-gray-700.mb-3
              "Stochastic Trial Outcomes"]
             [:div.grid.grid-cols-2.gap-4
              [gray-panel "p-3"
               [text-gray-label nil "Overall Trial Success"]
               [:div.text-lg.font-bold.text-green-600
                (str (.toFixed (* 100 (:p-success-overall sim-result)) 1)
                     "%")]]
              [gray-panel "p-3"
               [text-gray-label nil "Acceptance Rate (Stage 1 Pass)"]
               [:div.text-lg.font-bold.text-gray-700
                (str (.toFixed (* 100 (:acceptance-rate sim-result)) 1)
                     "%")]]
              [gray-panel "p-3"
               [text-gray-label nil "Median Hazard Ratio"]
               [:div.text-lg.font-bold.text-blue-600
                (if (js/isNaN (:median-hr-final sim-result))
                  "N/A"
                  (.toFixed (:median-hr-final sim-result) 3))]]
              [gray-panel "p-3"
               [text-gray-label nil "Median Time to 80 Ev"]
               [:div.text-lg.font-bold.text-blue-600
                (if (js/isNaN (:median-t80-months sim-result))
                  "N/A"
                  (str (.toFixed (:median-t80-months sim-result) 1)
                       "m"))]]
              [gray-panel "p-3"
               [text-gray-label nil "Accepted / Futility Pass"]
               [:div.text-sm.font-semibold.text-gray-700
                (str (:n-accepted sim-result) " / "
                     (:n-pass-events sim-result))]]]]])]))))

;; ---------------------------------------------------------------------------
;; discovery-view-content
;; ---------------------------------------------------------------------------

(defn- discovery-view-content
  [{:keys [values set-values] :as props}]
  (let [state         @(rf/subscribe [:discovery])
        config        @(rf/subscribe [:config])
        active-family (:active-family state)
        calc-params   (merge default-params (:calc-params state) values)
        params        (merge default-params values)

        stats      (dc/calculate-stats active-family calc-params config)
        curve-data (assoc (dc/calculate-curves
                           active-family calc-params config)
                          :stats stats)

        sim-result (when (= (:sim-status state) :done)
                     (:sim-result state))
        h1-hazard-rates
        (or (dhz/sim->hazard-rates
             sim-result config
             (:alive-bat-ms curve-data)
             (:alive-gps-ms curve-data)
             (:t-ms-arr curve-data))
            (analytical-hazard-rates curve-data config))

        avg-med  (/ (+ (:gps-med calc-params)
                       (:bat-med calc-params))
                    2.0)
        h0-params (assoc calc-params
                         :bat-med avg-med
                         :gps-med avg-med
                         :cure-frac 0.0)
        stats-h0      (dc/calculate-stats
                       active-family h0-params config)
        curve-data-h0 (assoc (dc/calculate-curves
                              active-family h0-params config)
                             :stats stats-h0)
        h0-hazard-rates
        (analytical-hazard-rates curve-data-h0 config)

        bat-lambda (population-cr2-lambda
                    (:bat-med calc-params)
                    (or (:delay calc-params) 3.0)
                    (:weibull-k calc-params))
        bat-true-mos (true-mos bat-lambda (:weibull-k calc-params))
        medians (assoc (dc/calculate-medians active-family calc-params config)
                       :bat-true-mos bat-true-mos)]

     [:div.p-6.max-w-7xl.mx-auto
      [:h1.text-3xl.font-extrabold.text-gray-800.mb-2
       "Discovery View"]
      [:p.text-gray-600.mb-6
       (str "Explore survival curves and event accrual "
            "given leaky cure parametric assumptions.")]

      [:<>
       [controls-panel props active-family calc-params
        state config bat-true-mos]
       [simulation-results-panel sim-result medians active-family calc-params]
       ^{:key (str params)}
       [:div.grid.grid-cols-1.lg:grid-cols-1.gap-8
        [h1-section stats curve-data h1-hazard-rates active-metric sim-result]
        [h0-section stats-h0 curve-data-h0 h0-hazard-rates
         active-metric avg-med]]]]))

;; ---------------------------------------------------------------------------
;; Public entry point
;; ---------------------------------------------------------------------------

(defn discovery-view []
  (r/with-let
    [_ (let [disc   @(rf/subscribe [:discovery])
             fam    (:active-family disc)
             params (merge (:calc-params disc) (:params disc))]
         (sim/run-discovery-simulation! fam params))]
    (fn []
      (let [state @(rf/subscribe [:discovery])]
        [fork/form
         {:path [:form :discovery]
          :initial-values (:params state)
          :keywordize-keys true
          :on-change
          (fn [{:keys [values]}]
            (rf/dispatch [:update-discovery-params values])
            (rf/dispatch [:set-discovery-sim-status nil])
            (rf/dispatch [:set-discovery-sim-result nil])
            (debounced-calc-update values)
            (debounced-sim-run (:active-family state) (merge (:calc-params state) values)))}
         discovery-view-content]))))
