(ns app.discovery
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.reagent :as fork]
            [app.state :as state]
            [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [app.vega :as vega]
            [app.simulator :as sim]
            [reitit.frontend.easy :as rfe]
            [cljs.numpy :as np]))

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

(defn- set-active-family! [family]
  (swap! state/app-state assoc-in [:discovery :active-family] family)
  (swap! state/app-state update :discovery
         dissoc :sim-status :sim-result)
  (let [disc (:discovery @state/app-state)
        params (merge (:calc-params disc) (:params disc))]
    (debounced-sim-run family params)))

(defn- param-input
  ([props param-key label min max step]
   (param-input props param-key label min max step false))
  ([{:keys [values set-values on-change]} param-key label min max step disabled?]
   (let [val (get values param-key)]
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
       [:input.border.rounded.p-1.text-xs.w-16
        {:type "number" :value val :step step
         :disabled disabled?
         :on-change (fn [e]
                      (let [v (js/parseFloat (.. e -target -value))]
                        (set-values {param-key v})
                        (when on-change (on-change param-key v))))}]]])))

(defn- calculate-stats [family params config]
  (let [[enroll-pts enroll-weights] (enrollment/expected-enrollment-times
                                      config)
        target-times (np/array #js [(:t-ia config)
                                    (:t-upd config)
                                    (:t-pr3 config)] "float64")

        bat-med-arr (np/array #js [(:bat-med params)])
        bat-shape-arr (np/array #js [(:weibull-k params)])
        bat-scale (survival/weibull-scale-from-median
                    bat-med-arr bat-shape-arr)
        bat-shape bat-shape-arr

        bat-res (enrollment/expected-arm-events-and-variance
                  survival/weibull-survival-probability
                  [bat-scale bat-shape]
                  enroll-pts enroll-weights target-times
                  (:n-per-arm config) (:n-total config))

        gps-res (cond
                  (= family "weibull")
                  (let [med (np/array #js [(:gps-med params)])
                        shape (np/array #js [(:weibull-k params)])
                        scale (survival/weibull-scale-from-median med shape)]
                    (enrollment/expected-arm-events-and-variance
                      survival/weibull-survival-probability
                      [scale shape]
                      enroll-pts enroll-weights target-times
                      (:n-per-arm config) (:n-total config)))

                  (= family "cure")
                  (let [med (np/array #js [(:gps-med params)])
                        shape (np/array #js [(:weibull-k params)])
                        scale (survival/weibull-scale-from-median med shape)
                        cf (np/array #js [(:cure-frac params)])]
                    (enrollment/expected-arm-events-and-variance
                      survival/cure-survival-probability
                      [cf scale shape]
                      enroll-pts enroll-weights target-times
                      (:n-per-arm config) (:n-total config)))

                  (= family "leaky")
                  (let [med (np/array #js [(:gps-med params)])
                        shape (np/array #js [(:weibull-k params)])
                        scale (survival/weibull-scale-from-median med shape)
                        cf (np/array #js [(:cure-frac params)])
                        leak (np/array #js [(:leak-yr params)])]
                    (enrollment/expected-arm-events-and-variance
                      survival/leaky-cure-survival-probability
                      [cf scale shape leak]
                      enroll-pts enroll-weights target-times
                      (:n-per-arm config) (:n-total config))))

        exp-bat (.toArray (:events bat-res))
        var-bat (.toArray (:variance bat-res))
        exp-gps (.toArray (:events gps-res))
        var-gps (.toArray (:variance gps-res))

        targets [(:n-ev-ia config) (:n-ev-upd config) (:n-ev-pr3 config)]
        labels ["IA (46.0m)" "UPD (58.0m)" "PR3 (62.97m)"]]

    (mapv (fn [label target e-bat v-bat e-gps v-gps]
            (let [expected (+ e-bat e-gps)
                  variance (+ v-bat v-gps)
                  sd (js/Math.sqrt variance)
                  std-dev (/ (- expected target) sd)]
              {:label label
               :target target
               :expected expected
               :sd sd
               :std-dev std-dev}))
          labels targets (first exp-bat) (first var-bat)
          (first exp-gps) (first var-gps))))

(defn- calculate-curves [family params config]
  (let [t-max 80
        t-pts (np/linspace 0 t-max 200)
        [enroll-pts enroll-weights] (enrollment/expected-enrollment-times
                                      config)

        bat-med-arr (np/array #js [(:bat-med params)])
        bat-shape-arr (np/array #js [(:weibull-k params)])
        bat-scale (survival/weibull-scale-from-median
                    bat-med-arr bat-shape-arr)
        bat-shape bat-shape-arr

        s-bat (survival/weibull-survival-probability t-pts bat-scale bat-shape)

        ev-bat (enrollment/expected-arm-events
                 survival/weibull-survival-probability
                 [bat-scale bat-shape]
                 enroll-pts enroll-weights t-pts
                 (:n-per-arm config) (:n-total config))

        [s-gps ev-gps]
        (cond
          (= family "weibull")
          (let [med (np/array #js [(:gps-med params)])
                shape (np/array #js [(:weibull-k params)])
                scale (survival/weibull-scale-from-median med shape)]
            [(survival/weibull-survival-probability t-pts scale shape)
             (enrollment/expected-arm-events
               survival/weibull-survival-probability
               [scale shape]
               enroll-pts enroll-weights t-pts
               (:n-per-arm config) (:n-total config))])

          (= family "cure")
          (let [med (np/array #js [(:gps-med params)])
                shape (np/array #js [(:weibull-k params)])
                scale (survival/weibull-scale-from-median med shape)
                cf (np/array #js [(:cure-frac params)])]
            [(survival/cure-survival-probability t-pts cf scale shape)
             (enrollment/expected-arm-events
               survival/cure-survival-probability
               [cf scale shape]
               enroll-pts enroll-weights t-pts
               (:n-per-arm config) (:n-total config))])

          (= family "leaky")
          (let [med (np/array #js [(:gps-med params)])
                shape (np/array #js [(:weibull-k params)])
                scale (survival/weibull-scale-from-median med shape)
                cf (np/array #js [(:cure-frac params)])
                leak (np/array #js [(:leak-yr params)])]
            [(survival/leaky-cure-survival-probability
               t-pts cf scale shape leak)
             (enrollment/expected-arm-events
               survival/leaky-cure-survival-probability
               [cf scale shape leak]
               enroll-pts enroll-weights t-pts
               (:n-per-arm config) (:n-total config))]))

        s-pool (np/multiply (np/add s-bat s-gps) 0.5)
        ev-total (np/add ev-bat ev-gps)
        t-arr (.toArray t-pts)
        s-bat-arr (.toArray s-bat)
        s-gps-arr (.toArray s-gps)
        s-pool-arr (.toArray s-pool)]

    {:survival (vec (concat
                      (mapv (fn [t s] {:time t :survival s :group "Pooled"})
                            t-arr s-pool-arr)
                      (mapv (fn [t s] {:time t :survival s :group "GPS"})
                            t-arr s-gps-arr)
                      (mapv (fn [t s] {:time t :survival s :group "BAT"})
                            t-arr s-bat-arr)))
     :accrual (vec (concat
                     (mapv (fn [t e]
                             {:time t :events e :group "Total"})
                           t-arr (first (.toArray ev-total)))
                     (mapv (fn [t e]
                             {:time t :events e :group "GPS"})
                           t-arr (first (.toArray ev-gps)))
                     (mapv (fn [t e]
                             {:time t :events e :group "BAT"})
                           t-arr (first (.toArray ev-bat)))))}))

(defn- calculate-residual [milestone-stats]
  (apply js/Math.max
         (map #(js/Math.abs (- (:expected %) (:target %)))
              milestone-stats)))

(defn- stats-row [title stats]
  (let [res (calculate-residual stats)]
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

(defn- discovery-view-content
  [{:keys [values set-values] :as props}]
  (let [state (get-discovery-state)
        config (:config @state/app-state)
        active-family (:active-family state)
        calc-params (merge (:calc-params state) values)
        params values
        placebo-mode? (:placebo-mode? params)

        stats (calculate-stats active-family calc-params config)
        curve-data (calculate-curves active-family calc-params config)

        ;; Calculate H0: cure fraction = 0, mOS = average(gps, bat)
        avg-med (/ (+ (:gps-med calc-params) (:bat-med calc-params)) 2.0)
        h0-params (assoc calc-params
                         :bat-med avg-med
                         :gps-med avg-med
                         :cure-frac 0.0)
        stats-h0 (calculate-stats active-family h0-params config)
        curve-data-h0 (calculate-curves active-family h0-params config)]

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

     ;; Controls (Full width)
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
        ;; Sim count control
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

        ;; Force Run Button
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

     ;; Results & Charts in 2 columns
     ^{:key (str params)}
      [:div.grid.grid-cols-1.lg:grid-cols-1.gap-8
       ;; Column 1: Alternate Hypothesis
       [:div.bg-gray-50.p-4.rounded-xl.border
        [:h3.font-extrabold.text-gray-800.mb-4
         "Alternate Hypothesis (H1): GPS is effective"]
        [stats-row "Milestone Stats (H1)" stats]
        [:div.grid.grid-cols-1.md:grid-cols-2.gap-4
         [:div.bg-white.p-3.rounded-xl.shadow-sm.border
          [:h4.text-xs.font-bold.text-gray-700.mb-2
           "Alternate: Survival Curves"]
          [vega/discovery-survival-chart (:survival curve-data)]]
         [:div.bg-white.p-3.rounded-xl.shadow-sm.border
          [:h4.text-xs.font-bold.text-gray-700.mb-2
           "Alternate: Event Accrual"]
          [vega/discovery-accrual-chart (:accrual curve-data) stats]]]]

       ;; Column 2: Null Hypothesis (H0)
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
          [vega/discovery-accrual-chart (:accrual curve-data-h0) stats-h0]]]]]]))

(defn discovery-view []
  (r/with-let [_ (let [disc (get-discovery-state)
                       fam (:active-family disc)
                       params (merge (:calc-params disc)
                                     (:params disc))]
                   (sim/run-discovery-simulation! fam params))]
    (let [state (get-discovery-state)]
      [fork/form
       {:initial-values (:params state)
        :keywordize-keys true
        :on-change (fn [{:keys [values]}]
                     (swap! state/app-state assoc-in
                            [:discovery :params] values)
                     (swap! state/app-state update :discovery
                            dissoc :sim-status :sim-result)
                     (debounced-calc-update values)
                     (let [fam (:active-family @state/app-state)
                           disc (:discovery @state/app-state)
                           calc (:calc-params disc)]
                       (debounced-sim-run fam (merge calc values))))}
       discovery-view-content])))
