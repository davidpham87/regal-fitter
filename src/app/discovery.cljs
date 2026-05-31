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
            [cljs.numpy :as np]
            [cljs.math :as math]))

(defn population-cr2-lambda
  "Calculates lambda given IRM (the experimental mOS), D (delay to enroll), and k (weibull shape paraeer)"
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

        exp-bat (np/nd-to-array (:events bat-res))
        var-bat (np/nd-to-array (:variance bat-res))
        exp-gps (np/nd-to-array (:events gps-res))
        var-gps (np/nd-to-array (:variance gps-res))

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
        t-arr (np/nd-to-array t-pts)
        s-bat-arr (np/nd-to-array s-bat)
        s-gps-arr (np/nd-to-array s-gps)
        s-pool-arr (np/nd-to-array s-pool)

        enrolled-bat (enrollment/expected-arm-enrolled
                       enroll-pts enroll-weights t-pts
                       (:n-per-arm config) (:n-total config))
        enrolled-gps (enrollment/expected-arm-enrolled
                       enroll-pts enroll-weights t-pts
                       (:n-per-arm config) (:n-total config))
        ev-bat-1d (np/reshape ev-bat #js [(.-size ^js ev-bat)])
        ev-gps-1d (np/reshape ev-gps #js [(.-size ^js ev-gps)])
        alive-bat (np/subtract enrolled-bat ev-bat-1d)
        alive-gps (np/subtract enrolled-gps ev-gps-1d)
        alive-total (np/add alive-bat alive-gps)

        alive-bat-arr (np/nd-to-array alive-bat)
        alive-gps-arr (np/nd-to-array alive-gps)
        alive-total-arr (np/nd-to-array alive-total)

        ;; Calculate Hazard Ratios for milestones: 0-IA, IA-UPD, UPD-PR3
        t-milestones (np/array #js [0.0
                                    (:t-ia config)
                                    (:t-upd config)
                                    (:t-pr3 config)] "float64")
        ms-enroll-bat (enrollment/expected-arm-enrolled
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config))
        ms-enroll-gps (enrollment/expected-arm-enrolled
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config))
        ms-ev-bat (enrollment/expected-arm-events
                    survival/weibull-survival-probability
                    [bat-scale bat-shape]
                    enroll-pts enroll-weights t-milestones
                    (:n-per-arm config) (:n-total config))
        ms-ev-gps (cond
                    (= family "weibull")
                    (let [med (np/array #js [(:gps-med params)])
                          shape (np/array #js [(:weibull-k params)])
                          scale (survival/weibull-scale-from-median
                                  med shape)]
                      (enrollment/expected-arm-events
                        survival/weibull-survival-probability
                        [scale shape]
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config)))
                    (= family "cure")
                    (let [med (np/array #js [(:gps-med params)])
                          shape (np/array #js [(:weibull-k params)])
                          scale (survival/weibull-scale-from-median
                                  med shape)
                          cf (np/array #js [(:cure-frac params)])]
                      (enrollment/expected-arm-events
                        survival/cure-survival-probability
                        [cf scale shape]
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config)))
                    (= family "leaky")
                    (let [med (np/array #js [(:gps-med params)])
                          shape (np/array #js [(:weibull-k params)])
                          scale (survival/weibull-scale-from-median
                                  med shape)
                          cf (np/array #js [(:cure-frac params)])
                          leak (np/array #js [(:leak-yr params)])]
                      (enrollment/expected-arm-events
                        survival/leaky-cure-survival-probability
                        [cf scale shape leak]
                        enroll-pts enroll-weights t-milestones
                        (:n-per-arm config) (:n-total config))))

        ms-enroll-bat-arr (np/nd-to-array ms-enroll-bat)
        ms-enroll-gps-arr (np/nd-to-array ms-enroll-gps)
        ms-ev-bat-arr (first (np/nd-to-array ms-ev-bat))
        ms-ev-gps-arr (first (np/nd-to-array ms-ev-gps))
        alive-bat-ms (mapv - ms-enroll-bat-arr ms-ev-bat-arr)
        alive-gps-ms (mapv - ms-enroll-gps-arr ms-ev-gps-arr)

        n-per-arm (:n-per-arm config)
        calc-hr (fn [t1 t2 label]
                  (let [ev-gps-int (- (nth ms-ev-gps-arr t2)
                                      (nth ms-ev-gps-arr t1))
                        ev-bat-int (- (nth ms-ev-bat-arr t2)
                                      (nth ms-ev-bat-arr t1))
                        alive-gps-t1 (if (zero? t1)
                                       n-per-arm
                                       (nth alive-gps-ms t1))
                        alive-bat-t1 (if (zero? t1)
                                       n-per-arm
                                       (nth alive-bat-ms t1))
                        h-gps (if (pos? alive-gps-t1)
                                (/ ev-gps-int alive-gps-t1)
                                0.0)
                        h-bat (if (pos? alive-bat-t1)
                                (/ ev-bat-int alive-bat-t1)
                                0.0)]
                    {:interval label
                     :hr (if (pos? h-bat) (/ h-gps h-bat) 0.0)}))
        hr-data [(calc-hr 0 1 "0-IA")
                 (calc-hr 1 2 "IA-UPD")
                 (calc-hr 2 3 "UPD-PR3")]

        t-ms-arr (np/nd-to-array t-milestones)
        calc-hr-rates
        (fn [t1 t2 label]
          (let [len (- (nth t-ms-arr t2) (nth t-ms-arr t1))
                ev-gps-int (- (nth ms-ev-gps-arr t2)
                              (nth ms-ev-gps-arr t1))
                ev-bat-int (- (nth ms-ev-bat-arr t2)
                              (nth ms-ev-bat-arr t1))
                alive-gps-t1 (if (zero? t1)
                               n-per-arm
                               (nth alive-gps-ms t1))
                alive-bat-t1 (if (zero? t1)
                               n-per-arm
                               (nth alive-bat-ms t1))
                h-gps (if (and (pos? alive-gps-t1) (pos? len))
                        (* 12.0 (/ ev-gps-int (* alive-gps-t1 len)))
                        0.0)
                h-bat (if (and (pos? alive-bat-t1) (pos? len))
                        (* 12.0 (/ ev-bat-int (* alive-bat-t1 len)))
                        0.0)
                h-pooled (if (and (pos? (+ alive-gps-t1 alive-bat-t1))
                                  (pos? len))
                           (* 12.0
                              (/ (+ ev-gps-int ev-bat-int)
                                 (* (+ alive-gps-t1 alive-bat-t1) len)))
                           0.0)]
            [{:interval label :rate h-gps :group "GPS"}
             {:interval label :rate h-bat :group "BAT"}
             {:interval label :rate h-pooled :group "Pooled"}]))

        ;; Add exact t=36 values
        t-36 (np/array #js [36] "float64")
        s-bat-36 (survival/weibull-survival-probability t-36 bat-scale bat-shape)
        s-gps-36 (cond
                   (= family "weibull")
                   (let [med (np/array #js [(:gps-med params)])
                         shape (np/array #js [(:weibull-k params)])
                         scale (survival/weibull-scale-from-median med shape)]
                     (survival/weibull-survival-probability t-36 scale shape))
                   (= family "cure")
                   (let [med (np/array #js [(:gps-med params)])
                         shape (np/array #js [(:weibull-k params)])
                         scale (survival/weibull-scale-from-median med shape)
                         cf (np/array #js [(:cure-frac params)])]
                     (survival/cure-survival-probability t-36 cf scale shape))
                   (= family "leaky")
                   (let [med (np/array #js [(:gps-med params)])
                         shape (np/array #js [(:weibull-k params)])
                         scale (survival/weibull-scale-from-median med shape)
                         cf (np/array #js [(:cure-frac params)])
                         leak (np/array #js [(:leak-yr params)])]
                     (survival/leaky-cure-survival-probability t-36 cf scale shape leak)))
        s-pool-36 (np/multiply (np/add s-bat-36 s-gps-36) 0.5)
        s-bat-36-val (first (np/nd-to-array s-bat-36))
        s-gps-36-val (first (np/nd-to-array s-gps-36))
        s-pool-36-val (first (np/nd-to-array s-pool-36))]

    {:survival (vec (concat
                      (mapv (fn [t s] {:time t :survival s :group "Pooled"})
                            t-arr s-pool-arr)
                      (mapv (fn [t s] {:time t :survival s :group "GPS"})
                            t-arr s-gps-arr)
                      (mapv (fn [t s] {:time t :survival s :group "BAT"})
                            t-arr s-bat-arr)
                      [{:time 36 :survival s-pool-36-val :group "Pooled"}
                       {:time 36 :survival s-gps-36-val :group "GPS"}
                       {:time 36 :survival s-bat-36-val :group "BAT"}]))
     :accrual (vec (concat
                     (mapv (fn [t e]
                             {:time t :events e :group "Total"})
                           t-arr (first (np/nd-to-array ev-total)))
                     (mapv (fn [t e]
                             {:time t :events e :group "GPS"})
                           t-arr (first (np/nd-to-array ev-gps)))
                     (mapv (fn [t e]
                             {:time t :events e :group "BAT"})
                           t-arr (first (np/nd-to-array ev-bat)))))
     :alive (let [n-tot (:n-total config)]
               (mapv (fn [t a-tot a-gps a-bat e-tot e-gps e-bat]
                       {:time t
                        :total-alive a-tot
                        :gps-alive a-gps
                        :bat-alive a-bat
                        :total-died e-tot
                        :gps-died e-gps
                        :bat-died e-bat
                        :total-died-diff (- n-tot e-tot)
                        :gps-died-diff (- n-per-arm e-gps)
                        :bat-died-diff (- n-per-arm e-bat)})
                     t-arr
                     alive-total-arr
                     alive-gps-arr
                     alive-bat-arr
                     (first (np/nd-to-array ev-total))
                     (first (np/nd-to-array ev-gps))
                     (first (np/nd-to-array ev-bat))))
     :hr hr-data
     :hazard-rates (vec (concat
                         (calc-hr-rates 0 1 "0-IA")
                         (calc-hr-rates 1 2 "IA-UPD")
                         (calc-hr-rates 2 3 "UPD-PR3")))}))


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
  [{:keys [values set-values] :as props}]
  (let [state (get-discovery-state)
        config (:config @state/app-state)
        active-family (:active-family state)
        calc-params (merge default-params (:calc-params state) values)
        params (merge default-params values)
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
        curve-data-h0 (calculate-curves active-family h0-params config)

        bat-true-lambda (population-cr2-lambda (:bat-med calc-params) (or (:delay calc-params) 3.0) (:weibull-k calc-params))
        bat-true-mos (true-mos bat-true-lambda (:weibull-k calc-params))]

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

     ;; Results & Charts in 2 columns
     ^{:key (str params)}
      [:div.grid.grid-cols-1.lg:grid-cols-1.gap-8
       ;; Column 1: Alternate Hypothesis
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
           "Alternate: Annualized Hazard Rates"]
          [vega/discovery-hazard-rates-chart (:hazard-rates curve-data)]]]]

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
                     (state/update-discovery-params! values)
                     (swap! state/app-state update :discovery
                            dissoc :sim-status :sim-result)
                     (debounced-calc-update values)
                     (let [fam (:active-family @state/app-state)
                           disc (:discovery @state/app-state)
                           calc (:calc-params disc)]
                       (debounced-sim-run fam (merge calc values))))}
       discovery-view-content])))
