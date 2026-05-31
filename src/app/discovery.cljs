(ns app.discovery
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.reagent :as fork]
            [app.state :as state]
            [app.vega :as vega]
            [app.simulator :as sim]
            [app.discovery-calc :as calc]
            [reitit.frontend.easy :as rfe]
            [cljs.math :as math]))

(defn- debounce
  "A robust, safe debouncing wrapper designed for Reagent applications.
   Delays invoking the function `f` until after `ms` milliseconds have elapsed
   since the last time the debounced function was invoked.
   
   Features:
   - Validates input arguments to prevent runtime crashes.
   - Clears existing timeouts to debounce consecutive calls.
   - Uses a try-catch block to handle scheduling errors.
   - Leverages Console logging under error circumstances."
  [f ms]
  (assert (fn? f) "debounce requires a function as its first argument")
  (assert (number? ms) "debounce requires a number for milliseconds")
  (let [timer (atom nil)]
    (fn [& args]
      (let [existing-timer @timer]
        (when existing-timer
          (try
            (js/clearTimeout existing-timer)
            (reset! timer nil)
            (catch :default err
              (js/console.warn "Failed to clear timeout:" err)))))
      (let [scheduled-task (fn []
                             (try
                               (apply f args)
                               (catch :default err
                                 (js/console.error "Execution error in debounced function:" err))
                               (finally
                                 (reset! timer nil))))]
        (try
          (let [new-timer (js/setTimeout scheduled-task ms)]
            (reset! timer new-timer))
          (catch :default err
            (js/console.error "Failed to schedule debounced task:" err)))))))

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

(defn- param-input
  "A reusable component that renders a labeled numeric parameter control
   complete with a slider and a synchronized numeric input box.
   
   Args:
   - props: fork form props including values, set-values, on-change.
   - param-key: keyword for the parameter in fork form state.
   - label: user-facing text label.
   - min/max/step: numeric boundaries for range and number inputs.
   - disabled?: flag to disable interaction.
   
   Ensures layout styling remains responsive and clean across viewports."
  ([props param-key label min max step]
   (param-input props param-key label min max step false))
  ([{:keys [values set-values on-change]} param-key label min max step disabled?]
   (assert (keyword? param-key) "param-key must be a keyword")
   (let [val (get values param-key)
         input-cls "border rounded p-1 text-xs w-16 focus:outline-none focus:ring-1 focus:ring-blue-500"]
     [:div.mb-2
      [:label.block.text-xs.font-semibold
       {:class (if disabled? "text-gray-400" "text-gray-600")}
       label]
      [:div.flex.items-center.gap-2
       [:input.w-full
        {:type "range" :min min :max max :step step
         :value val
         :disabled disabled?
         :on-change (fn [e]
                      (let [v (js/parseFloat (.. e -target -value))]
                        (set-values {param-key v})
                        (when on-change (on-change param-key v))))}]
       [:input
        {:class input-cls
         :type "number" :value val :step step
         :disabled disabled?
         :on-change (fn [e]
                      (let [v (js/parseFloat (.. e -target -value))]
                        (set-values {param-key v})
                        (when on-change (on-change param-key v))))}]]])))

(defn- stats-row
  "Renders a responsive metric grid row representing expected versus target
   event counts at trial milestones.
   
   Inlines residual quality-of-fit calculation to evaluate whether the expected
   values deviate acceptably from the milestone targets."
  [title stats]
  (let [res (apply js/Math.max
                   (map #(js/Math.abs (- (:expected %) (:target %)))
                        stats))]
    [:div.mb-6
     [:h4.text-sm.font-bold.text-gray-700.mb-3 title]
     [:div.grid.grid-cols-1.sm:grid-cols-4.gap-3
      (for [s stats]
        ^{:key (:label s)}
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h5.text-xs.font-bold.text-gray-500.uppercase (:label s)]
         [:div.mt-1.flex.items-baseline.gap-1
          [:span.text-xl.font-bold.text-gray-800 (.toFixed (:expected s) 1)]
          [:span.text-xs.text-gray-400 (str " / " (:target s))]]
         [:div.mt-1.grid.grid-cols-2.gap-1
          [:div
           [:div {:style {:font-size "10px"} :class "text-gray-400 uppercase"}
            "SD"]
           [:div.text-xs.font-semibold (.toFixed (:sd s) 2)]]
          [:div
           [:div {:style {:font-size "10px"} :class "text-gray-400 uppercase"}
            "Std Dev"]
           [:div.text-xs.font-semibold
            {:class (if (> (js/Math.abs (:std-dev s)) 2)
                      "text-red-600"
                      "text-green-600")}
            (.toFixed (:std-dev s) 2)]]]])
      [:div.bg-white.p-3.rounded-xl.shadow-sm.border.flex.flex-col
       {:class "justify-between"}
       [:div
        [:h5.text-xs.font-bold.text-gray-500.uppercase "Quality of Fit"]
        [:div.text-xl.font-extrabold.text-gray-800.mt-1
         (.toFixed res 2) " residual"]]
       [:div.mt-2
        [:span.px-2.py-1.rounded-lg.text-xs.font-bold.uppercase
         {:class (cond
                   (< res 2.0) "bg-green-100 text-green-800"
                   (< res 5.0) "bg-yellow-100 text-yellow-800"
                   :else "bg-red-100 text-red-800")}
         (cond
           (< res 2.0) "Excellent"
           (< res 5.0) "Acceptable"
           :else "Poor")]]]]]))

(def default-params
  {:bat-med 8.0
   :weibull-k 1.0
   :delay 3.0
   :gps-med 12.0
   :cure-frac 0.2
   :leak-yr 0.07
   :placebo-mode? false
   :n-sims 1000})

(defn- discovery-view-content
  "Renders the controls, statistical summaries, and interactive Vega charts
   for the parametric assumptions. Inlines the mathematical conversions for
   population lambda and true control arm median survival times."
  [{:keys [values set-values] :as props}]
  (let [state (:discovery @state/app-state)
        config (:config @state/app-state)
        active-family (:active-family state)
        calc-params (merge default-params (:calc-params state) values)
        params (merge default-params values)
        placebo-mode? (:placebo-mode? params)

        stats (calc/calculate-stats active-family calc-params config)
        curve-data (calc/calculate-curves active-family calc-params config)

        sim-result (when (= (:sim-status state) :done)
                     (:sim-result state))
        h1-hazard-rates (or (calc/sim->interval-medians sim-result)
                            (:hazard-rates curve-data))

        avg-med (/ (+ (:gps-med calc-params) (:bat-med calc-params)) 2.0)
        h0-params (assoc calc-params
                         :bat-med avg-med
                         :gps-med avg-med
                         :cure-frac 0.0)
        stats-h0 (calc/calculate-stats active-family h0-params config)
        curve-data-h0 (calc/calculate-curves active-family h0-params config)

        ;; Inlined population-cr2-lambda calculation
        irm (:bat-med calc-params)
        d (or (:delay calc-params) 3.0)
        k (:weibull-k calc-params)
        bat-true-lambda (math/pow
                          (/ (- (math/pow (+ irm d) k) (math/pow d k))
                             (math/log 2))
                          (/ 1 k))

        ;; Inlined true-mos calculation
        bat-true-mos (* bat-true-lambda (math/pow (math/log 2) (/ 1 k)))]

    [:div.p-6.max-w-7xl.mx-auto
     [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Discovery View"]
     [:p.text-gray-600.mb-6
      (str "Explore survival curves and event accrual "
           "given parametric assumptions.")]

     [:div.flex.gap-2.mb-6.border-b
      (for [fam ["weibull" "cure" "leaky"]]
        ^{:key fam}
        [:a.px-4.py-2.text-sm.font-medium.transition-colors.inline-block.text-center
         {:class (if (= active-family fam)
                   "border-b-2 border-blue-600 text-blue-600"
                   "text-gray-500 hover:text-gray-700")
          :href (rfe/href :discovery-sub {:subtab fam})}
         (clojure.string/capitalize fam)])]

     [:div.bg-white.p-4.rounded-xl.shadow-sm.border.mb-8
      [:h3.font-bold.text-gray-800.mb-4 "Parameters"]
      [:div.grid.grid-cols-1.sm:grid-cols-2.md:grid-cols-3.lg:grid-cols-6.gap-4
       [:div.flex.items-center.p-2.bg-gray-50.rounded-lg.border.h-12
        [:input#placebo-mode
         {:type "checkbox"
          :checked placebo-mode?
          :on-change (fn [e]
                       (let [checked? (.. e -target -checked)]
                         (if checked?
                           (set-values {:placebo-mode? true
                                        :cure-frac 0.0
                                        :gps-med (:bat-med values)})
                           (set-values {:placebo-mode? false}))))}]
        [:label.text-xs.font-bold.text-gray-700.cursor-pointer.ml-2
         {:for "placebo-mode"}
         "Placebo Mode"]]

       [param-input (assoc props :on-change
                           (fn [k v]
                             (when (and placebo-mode? (= k :bat-med))
                               (set-values {:gps-med v}))))
        :bat-med "BAT Median" 4 25 0.5]
       [param-input props :weibull-k "Weibull k shape" 0.5 2.0 0.05]
       [param-input props :delay "D (Avg Months from CR2)" 0.0 20.0 0.5]

       (case active-family
         "weibull"
         [:<>
          [param-input props :gps-med "GPS Median" 4 50 1.0 placebo-mode?]]

         "cure"
         [:<>
          [param-input props :gps-med "GPS Median" 4 50 1.0 placebo-mode?]
          [param-input props :cure-frac "Cure Fraction" 0.0 0.95 0.05 placebo-mode?]]

         "leaky"
         [:<>
          [param-input props :gps-med "GPS Median" 4 50 1.0 placebo-mode?]
          [param-input props :cure-frac "Cure Fraction" 0.0 0.95 0.05 placebo-mode?]
          [param-input props :leak-yr "Leak Rate / Year" 0.0 0.1 0.01]])]

      [:div.mt-4.pt-4.border-t.flex.flex-wrap.items-center.gap-6
       {:class "justify-between"}
       [:div.flex.items-center.gap-4
        [:div.flex.items-center.gap-2.border-r.pr-4
         [:label.text-xs.font-bold.text-gray-600.mr-1 "Sim Count"]
         [:input.w-24
          {:type "range" :min 100 :max 5000 :step 100
           :value (:n-sims values)
           :on-change (fn [e]
                        (let [v (js/parseFloat (.. e -target -value))]
                          (set-values {:n-sims v})
                          (debounced-sim-run
                            active-family
                            (assoc calc-params :n-sims v))))}]
         [:input.border.rounded.p-1.text-xs.w-14
          {:type "number" :value (:n-sims values) :step 100
           :on-change (fn [e]
                        (let [v (js/parseFloat (.. e -target -value))]
                          (set-values {:n-sims v})
                          (debounced-sim-run
                            active-family
                            (assoc calc-params :n-sims v))))}]]

        [:button.rounded-lg.shadow-sm.transition-colors
         {:type "button"
          :class ["px-4" "py-2" "bg-blue-600" "hover:bg-blue-700"
                  "text-white" "text-xs" "font-bold"]
          :on-click (fn [e]
                      (.preventDefault e)
                      (sim/run-discovery-simulation! active-family
                                                    calc-params))
          :disabled (= (:sim-status state) :running)}
         "Force Run"]

        (when (= (:sim-status state) :running)
          (let [nsims (or (:n-sims calc-params)
                          (:n-sims-per-combo config))]
            [:span.text-xs.text-gray-500.animate-pulse
             (str "Running " nsims " trial simulations...")]))]

       [:div.flex.items-center.gap-6
        [:div.text-center
         [:div.text-xs.text-gray-400.font-semibold "BAT True mOS"]
         [:div.text-lg.font-bold.text-blue-600
          (str (.toFixed bat-true-mos 2) "m")]]
        (case (:sim-status state)
          :done
          (let [res (:sim-result state)
                p-suc (:p-success-overall res)
                acc-rate (:acceptance-rate res)
                med-hr (:median-hr-final res)
                med-t80 (:median-t80-months res)]
            [:<>
             [:div.text-center
              [:div.text-xs.text-gray-400.font-semibold "P(Success)"]
              [:div.text-lg.font-bold.text-blue-600
               (str (.toFixed (* 100 p-suc) 1) "%")]]
             [:div.text-center
              [:div.text-xs.text-gray-400.font-semibold "Acceptance Rate"]
              [:div.text-sm.font-semibold.text-gray-700
               (str (.toFixed (* 100 acc-rate) 1) "%")]]
             [:div.text-center
              [:div.text-xs.text-gray-400.font-semibold "Median HR"]
              [:div.text-sm.font-semibold.text-gray-700
               (if (js/isNaN med-hr) "N/A" (.toFixed med-hr 3))]]
             [:div.text-center
              [:div.text-xs.text-gray-400.font-semibold "Median T80"]
              [:div.text-sm.font-semibold.text-gray-700
               (if (js/isNaN med-t80)
                 "N/A"
                 (str (.toFixed med-t80 1) "m"))]]])

          :failed-prefilter
          [:span.text-xs.font-semibold.text-red-500
           (str "Prefilter check failed: 0% of "
                "trials passed event pre-screening.")]

          :error
          [:span.text-xs.font-semibold.text-red-500
           (str "Error: " (:sim-result state))]

          nil)]]]

     ^{:key (str params)}
     [:div.grid.grid-cols-1.lg:grid-cols-1.gap-8
      [:div.bg-gray-50.p-4.rounded-xl.border
       [:div.flex.justify-between.items-center.mb-4
        [:h3.font-extrabold.text-gray-800
         "Alternate Hypothesis (H1): GPS is effective"]]
       [stats-row "Milestone Stats (H1)" stats]
       [:div.grid.grid-cols-1.md:grid-cols-2.gap-4
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "Alternate: Survival Curves"]
         [vega/discovery-survival-chart (:survival curve-data)]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "Alternate: Event Accrual"]
         [vega/discovery-accrual-chart (:accrual curve-data) stats]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "Alternate: Patients Alive"]
         [vega/discovery-alive-chart (:alive curve-data) stats]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "Alternate: Estimated Hazard Ratios"]
         [vega/discovery-hr-chart (:hr curve-data)]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          (if sim-result
            "Alternate: Median Survival Time by Period (sim)"
            "Alternate: Interval Midpoints (analytical)")]
         [vega/discovery-hazard-rates-chart h1-hazard-rates]]]]

      [:div.bg-gray-50.p-4.rounded-xl.border
       [:h3.font-extrabold.text-gray-800.mb-4
        "Null Hypothesis (H0): GPS is placebo (" avg-med " mOS" ")"]
       [stats-row "Milestone Stats (H0)" stats-h0]
       [:div.grid.grid-cols-1.md:grid-cols-2.gap-4
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "H0: Survival Curves (Cure=0, Shared Med)"]
         [vega/discovery-survival-chart (:survival curve-data-h0)]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "H0: Event Accrual (Cure=0, Shared Med)"]
         [vega/discovery-accrual-chart (:accrual curve-data-h0) stats-h0]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "H0: Patients Alive"]
         [vega/discovery-alive-chart (:alive curve-data-h0) stats-h0]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "H0: Estimated Hazard Ratios"]
         [vega/discovery-hr-chart (:hr curve-data-h0)]]
        [:div.bg-white.p-3.rounded-xl.shadow-sm.border
         [:h4.text-xs.font-bold.text-gray-700.mb-2
          "H0: Annualized Hazard Rates"]
         [vega/discovery-hazard-rates-chart
          (:hazard-rates curve-data-h0)]]]]]]))

(defn discovery-view
  "Main page entry point for the Discovery view.
   Initializes the simulation state via with-let lifecycle when the component mounts,
   then renders a fork/form wrapping the core view content.
   
   Handles:
   - Form initialization with state parameter values.
   - Synchronizing local form values back to global application state.
   - Triggering debounced calculations and simulation runs on any form changes."
  []
  (r/with-let [_ (let [disc (:discovery @state/app-state)
                       fam (:active-family disc)
                       params (merge (:calc-params disc)
                                     (:params disc))]
                   (sim/run-discovery-simulation! fam params))]
    (let [state (:discovery @state/app-state)
          form-config {:initial-values (:params state)
                       :keywordize-keys true
                       :on-change (fn [{:keys [values]}]
                                    (try
                                      (state/update-discovery-params! values)
                                      (swap! state/app-state update :discovery
                                             dissoc :sim-status :sim-result)
                                      (debounced-calc-update values)
                                      (let [fam (:active-family @state/app-state)
                                            disc (:discovery @state/app-state)
                                            calc (:calc-params disc)]
                                        (debounced-sim-run fam (merge calc values)))
                                      (catch :default err
                                        (js/console.error "Error handling form change:" err))))}]
      (try
        [fork/form form-config discovery-view-content]
        (catch :default err
          [:div.p-4.text-red-500
           "Failed to render Discovery View: " (.-message err)])))))
