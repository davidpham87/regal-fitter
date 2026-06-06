(ns app.discovery.core
  (:require [reagent.core :as r]
            [fork.reagent :as fork]
            [app.state :as state]
            [app.vega :as vega]
            [app.simulator :as sim]
            [reitit.frontend.easy :as rfe]
            [cljs.math :as math]
            [clojure.string :as cstr]
            [app.discovery.calc :as dc]
            [app.discovery.ui :as dui]
            [app.discovery.hazard :as dhz]
            [app.discovery.playground :as play]))

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
  (:discovery @state/app-state))

(defn- debounce [f ms]
  (let [timer (atom nil)]
    (fn [& args]
      (when @timer (js/clearTimeout @timer))
      (reset! timer (js/setTimeout #(apply f args) ms)))))

(defonce ^:private debounced-calc-update
  (debounce
   (fn [params]
     (swap! state/app-state assoc-in [:discovery :calc-params] params))
   200))

(defonce ^:private debounced-sim-run
  (debounce
   (fn [family params]
     (sim/run-discovery-simulation! family params))
   500))

(def default-params
  {:bat-med      8.0
   :weibull-k    1.0
   :delay        3.0
   :gps-med      12.0
   :cure-frac    0.2
   :leak-yr      0.07
   :placebo-mode? false
   :n-sims       1000})

(defn- set-active-family! [family]
  (swap! state/app-state assoc-in [:discovery :active-family] family)
  (swap! state/app-state update :discovery
         dissoc :sim-status :sim-result)
  (let [disc   (:discovery @state/app-state)
        params (merge (:calc-params disc) (:params disc))]
    (debounced-sim-run family params)))

;; ---------------------------------------------------------------------------
;; Family-tab nav
;; ---------------------------------------------------------------------------

(defn- family-tabs [active-family]
  [:div.flex.gap-2.mb-6.border-b
   (for [fam ["weibull" "cure" "leaky" "r-repl"]]
     ^{:key fam}
     [:a
      {:class (str "px-4 py-2 text-sm font-medium transition-colors "
                   "inline-block text-center "
                   (if (= active-family fam)
                     "border-b-2 border-blue-600 text-blue-600"
                     "text-gray-500 hover:text-gray-700"))
       :href (rfe/href :discovery-sub {:subtab fam})}
      (if (= fam "r-repl")
        "R REPL (Portal)"
        (cstr/capitalize fam))])])

;; ---------------------------------------------------------------------------
;; Placebo-mode checkbox
;; ---------------------------------------------------------------------------

(defn- placebo-checkbox [{:keys [values set-values]}]
  (let [placebo-mode? (:placebo-mode? values)]
    [:div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12
     [:input#placebo-mode
      {:type "checkbox"
       :checked placebo-mode?
       :on-change
       (fn [e]
         (let [checked? (.. e -target -checked)]
           (if checked?
             (set-values {:placebo-mode? true
                          :cure-frac 0.0
                          :gps-med (:bat-med values)})
             (set-values {:placebo-mode? false}))))}]
     [:label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2
      {:for "placebo-mode"} "Placebo Mode"]]))

;; ---------------------------------------------------------------------------
;; Family-specific param inputs
;; ---------------------------------------------------------------------------

(defn- family-params [props active-family]
  (let [placebo? (:placebo-mode? (:values props))]
    (case active-family
      "weibull"
      [:<>
       [dui/param-input props :gps-med "GPS Median" 4 50 1.0 placebo?]]

      "cure"
      [:<>
       [dui/param-input props :gps-med "GPS Median" 4 50 1.0 placebo?]
       [dui/param-input props :cure-frac "Cure Fraction"
        0.0 0.95 0.05 placebo?]]

      "leaky"
      [:<>
       [dui/param-input props :gps-med "GPS Median" 4 50 1.0 placebo?]
       [dui/param-input props :cure-frac "Cure Fraction"
        0.0 0.95 0.05 placebo?]
       [dui/param-input props :leak-yr "Leak Rate / Year"
        0.0 0.1 0.01]]

      nil)))

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
       [:div.text-center
        [:div.text-xs.text-gray-400.font-semibold "P(Success)"]
        [:div.text-lg.font-bold.text-blue-600
         (str (.toFixed (* 100 p-success-overall) 1) "%")]]
       [:div.text-center
        [:div.text-xs.text-gray-400.font-semibold "Acceptance Rate"]
        [:div.text-sm.font-semibold.text-gray-700
         (str (.toFixed (* 100 acceptance-rate) 1) "%")]]
       [:div.text-center
        [:div.text-xs.text-gray-400.font-semibold "Median HR"]
        [:div.text-sm.font-semibold.text-gray-700
         (if (js/isNaN median-hr-final)
           "N/A" (.toFixed median-hr-final 3))]]
       [:div.text-center
        [:div.text-xs.text-gray-400.font-semibold "Median T80"]
        [:div.text-sm.font-semibold.text-gray-700
         (if (js/isNaN median-t80-months)
           "N/A"
           (str (.toFixed median-t80-months 1) "m"))]]])))

;; ---------------------------------------------------------------------------
;; Param controls panel
;; ---------------------------------------------------------------------------

(defn- controls-panel
  [{:keys [values set-values] :as props} active-family
   calc-params state config bat-true-mos]
  [:div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8
   [:h3.font-bold.text-gray-800.mb-4 "Parameters"]
   [:div.grid.grid-cols-1.gap-4
    {:class "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"}
    [placebo-checkbox props]
    [dui/param-input
     (assoc props :on-change
            (fn [k v]
              (when (and (:placebo-mode? values) (= k :bat-med))
                (set-values {:gps-med v}))))
     :bat-med "BAT Median" 4 25 0.5]
    [dui/param-input props :weibull-k "Weibull k shape" 0.5 2.0 0.05]
    [dui/param-input props :delay "D (Avg Months from CR2)" 0.0 20.0 0.5]
    [family-params props active-family]]

   [:div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-6
    {:class "justify-between"}
    [:div.flex.items-center.gap-4
     [sim-count-input values set-values active-family calc-params]
     [force-run-btn active-family calc-params state]
     [sim-status-badge state config calc-params]]

    [:div.flex.items-center.gap-6
     [:div.text-center
      [:div.text-xs.text-gray-400.font-semibold "BAT True mOS"]
      [:div.text-lg.font-bold.text-blue-600
       (str (.toFixed bat-true-mos 2) "m")]]
     [sim-result-summary state]]]])

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

(defn- merge-hazard-and-medians
  [rates medians]
  (let [medians-by-key (into {} (map (fn [m]
                                       [[(:interval m) (:group m)] m])
                                     medians))]
    (mapv (fn [r]
            (let [key [(:interval r) (:group r)]
                  m (get medians-by-key key)]
              (assoc r :median (:median m))))
          rates)))

;; ---------------------------------------------------------------------------
;; Chart grids
;; ---------------------------------------------------------------------------

(defn- chart-grid [curve-data h1-hazard-rates active-metric sim-result title]
  [:div.grid.grid-cols-1.md:grid-cols-2.gap-4
   [:div.bg-white.p-3.rounded-xl.shadow-sm.border
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Survival Curves")]
    [vega/discovery-survival-chart (:survival curve-data)]]
   [:div.bg-white.p-3.rounded-xl.shadow-sm.border
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Event Accrual")]
    [vega/discovery-accrual-chart (:accrual curve-data)
     (:stats curve-data)]]
   [:div.bg-white.p-3.rounded-xl.shadow-sm.border
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Patients Alive")]
    [vega/discovery-alive-chart (:alive curve-data)
     (:stats curve-data)]]
   [:div.bg-white.p-3.rounded-xl.shadow-sm.border
    [:h4.text-xs.font-bold.text-gray-700.mb-2
     (str title ": Estimated Hazard Ratios")]
    [vega/discovery-hr-chart (:hr curve-data)]]
   [:div.bg-white.p-3.rounded-xl.shadow-sm.border
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
   [dui/stats-row "Milestone Stats (H1)" stats]
   [chart-grid curve-data h1-hazard-rates active-metric sim-result "Alternate"]])

(defn- h0-section [stats-h0 curve-data-h0 h0-hazard-rates active-metric avg-med]
  [:div.bg-gray-50.p-4.rounded-xl.border
   [:h3.font-extrabold.text-gray-800.mb-4
    (str "Null Hypothesis (H0): GPS is placebo ("
         avg-med " mOS)")]
   [dui/stats-row "Milestone Stats (H0)" stats-h0]
   [chart-grid curve-data-h0 h0-hazard-rates active-metric nil "H0"]])

;; ---------------------------------------------------------------------------
;; discovery-view-content
;; ---------------------------------------------------------------------------

(defn- discovery-view-content
  [{:keys [values set-values] :as props}]
  (let [state         (get-discovery-state)
        config        (:config @state/app-state)
        active-family (:active-family state)
        calc-params   (merge default-params (:calc-params state) values)
        params        (merge default-params values)

        stats      (dc/calculate-stats active-family calc-params config)
        curve-data (assoc (dc/calculate-curves
                           active-family calc-params config)
                          :stats stats)

        sim-result (when (= (:sim-status state) :done)
                     (:sim-result state))
        h1-rates-raw
        (or (dhz/sim->hazard-rates
             sim-result config
             (:alive-bat-ms curve-data)
             (:alive-gps-ms curve-data)
             (:t-ms-arr curve-data))
            (analytical-hazard-rates curve-data config))

        h1-medians-raw
        (or (dc/sim->interval-medians sim-result)
            (:hazard-rates curve-data))

        h1-hazard-rates
        (merge-hazard-and-medians h1-rates-raw h1-medians-raw)

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
        h0-rates-raw
        (analytical-hazard-rates curve-data-h0 config)

        h0-hazard-rates
        (merge-hazard-and-medians h0-rates-raw (:hazard-rates curve-data-h0))

        bat-lambda (population-cr2-lambda
                    (:bat-med calc-params)
                    (or (:delay calc-params) 3.0)
                    (:weibull-k calc-params))
        bat-true-mos (true-mos bat-lambda (:weibull-k calc-params))]

    [:div.p-6.max-w-7xl.mx-auto
     [:h1.text-3xl.font-extrabold.text-gray-800.mb-2
      "Discovery View"]
     [:p.text-gray-600.mb-6
      (str "Explore survival curves and event accrual "
           "given parametric assumptions.")]

     [family-tabs active-family]

     (if (= active-family "r-repl")
       [play/gs-design-playground]
       [:<>
        [controls-panel props active-family calc-params
         state config bat-true-mos]
        ^{:key (str params)}
        [:div.grid.grid-cols-1.lg:grid-cols-1.gap-8
         [h1-section stats curve-data h1-hazard-rates active-metric sim-result]
         [h0-section stats-h0 curve-data-h0 h0-hazard-rates
                     active-metric avg-med]]])]))

;; ---------------------------------------------------------------------------
;; Public entry point
;; ---------------------------------------------------------------------------

(defn discovery-view []
  (r/with-let
    [_ (let [disc   (get-discovery-state)
             fam    (:active-family disc)
             params (merge (:calc-params disc) (:params disc))]
         (sim/run-discovery-simulation! fam params))]
    (let [state (get-discovery-state)]
      [fork/form
       {:initial-values (:params state)
        :keywordize-keys true
        :on-change
        (fn [{:keys [values]}]
          (state/update-discovery-params! values)
          (swap! state/app-state update :discovery
                 dissoc :sim-status :sim-result)
          (debounced-calc-update values)
          (let [fam  (:active-family @state/app-state)
                disc (:discovery @state/app-state)
                calc (:calc-params disc)]
            (debounced-sim-run fam (merge calc values))))}
       discovery-view-content])))
