(ns app.ui.enrollment
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.vega :as vega]
            [cljs.numpy-random :as np-random]
            [cljs.numpy :as np]
            [app.regal-fit.enrollment :as rfe]
            [fork.reagent :as fork]
            ["@monaco-editor/react" :default Editor]))

(defn- simulate-enrollment-data [bands n-samples seed]
  (let [random-gen (np-random/default-rng seed)
        max-time (apply max (map second bands))
        time-points (range 0 (+ max-time 2) 0.5)
        paths (for [_ (range n-samples)]
                (let [raw-enroll (js/Array.)]
                  (doseq [[lo hi n] bands]
                    (when (> n 0)
                      (doseq [r (np/nd-to-array
                                 (np-random/uniform random-gen lo hi n))]
                        (.push raw-enroll r))))
                  (.sort raw-enroll (fn [a b] (- a b)))
                  (mapv (fn [t]
                          (count (filter #(<= % t) raw-enroll)))
                        time-points)))]
    (for [i (range (count time-points))]
      (let [t (nth time-points i)
            counts (map #(nth % i) paths)
            sorted-counts (sort counts)
            n (count sorted-counts)
            mean-val (/ (reduce + sorted-counts) n)
            low-idx (js/Math.floor (* 0.025 n))
            high-idx (js/Math.min (dec n) (js/Math.floor (* 0.975 n)))
            low-val (nth sorted-counts low-idx)
            high-val (nth sorted-counts high-idx)]
        {:time t
         :mean mean-val
         :low low-val
         :high high-val}))))

(defn enrollment-view []
  (let [n-samples (r/atom 100)]
    (fn []
      (let [state @state/app-state
            config (:config state)
            enrollment-mode (:enrollment-mode state)
            bands (:enroll-bands config)
            seed (:seed config)
            valid-samples (if (and (number? @n-samples) (pos? @n-samples))
                            @n-samples
                            100)
            data (simulate-enrollment-data bands valid-samples seed)]
        [:div.p-4.max-w-6xl.mx-auto
         [:h2.text-2xl.font-extrabold.text-gray-900.mb-4 "Enrollment Plot"]

         [:div.mb-6.flex.gap-4.items-center
          [:button.px-4.py-2.rounded.font-semibold
           {:class (if (= (:mode enrollment-mode) :manual)
                     "bg-blue-600 text-white"
                     "bg-gray-200 text-gray-700 hover:bg-gray-300")
            :on-click #(swap! state/app-state assoc-in
                              [:enrollment-mode :mode] :manual)}
           "Manual / Editor Mode"]
          [:button.px-4.py-2.rounded.font-semibold
           {:class (if (= (:mode enrollment-mode) :s-curve)
                     "bg-blue-600 text-white"
                     "bg-gray-200 text-gray-700 hover:bg-gray-300")
            :on-click #(swap! state/app-state assoc-in [:enrollment-mode :mode] :s-curve)}
           "S-Curve Gen Mode"]
          [:button.px-4.py-2.rounded.font-semibold.bg-gray-200.text-gray-700.hover:bg-gray-300
           {:on-click #(state/set-config! :enroll-bands (:enroll-bands state/default-config))}
           "Restore Default"]]

         (if (= (:mode enrollment-mode) :manual)
           (let [expected-json (js/JSON.stringify (clj->js bands) nil 2)]
             [:div.mb-6
              [:h3.text-lg.font-bold.mb-2 "Edit Enrollment Bands"]
              [:div.border.rounded {:style {:height "250px"}}
               [:> Editor {:height "100%"
                           :defaultLanguage "json"
                           :value expected-json
                           :onChange (fn [val _]
                                       (try
                                         (let [parsed (js->clj
                                                       (js/JSON.parse val)
                                                       :keywordize-keys true)]
                                           (when (vector? parsed)
                                             (state/set-config!
                                              :enroll-bands parsed)))
                                         (catch js/Error _)))}]]])
           (let [init-vals {:median-month (:median-month enrollment-mode)
                            :k (:k enrollment-mode)}]
             ^{:key init-vals}
             [fork/form
              {:initial-values init-vals
               :keywordize-keys true
               :on-submit (fn [{:keys [values]}]
                            (let [m-val (js/parseFloat (:median-month values))
                                  k-val (js/parseFloat (:k values))]
                              (when (and (not (js/isNaN m-val))
                                         (not (js/isNaN k-val)))
                                (let [n-total 126
                                      total-months 38
                                      new-bands (rfe/get-s-curve-enrollment-bands
                                                 n-total total-months
                                                 m-val k-val)]
                                  (state/set-config! :enroll-bands new-bands)
                                  (swap! state/app-state assoc-in
                                         [:enrollment-mode :median-month] m-val)
                                  (swap! state/app-state assoc-in
                                         [:enrollment-mode :k] k-val)))))}
              (fn [{:keys [values handle-change handle-submit]}]
                [:form.mb-6.p-4.border.rounded-xl.bg-gray-50
                 {:on-submit (fn [e]
                               (.preventDefault e)
                               (handle-submit e))}
                 [:h3.text-lg.font-bold.mb-4 "S-Curve Generator Settings"]
                 [:div.grid.grid-cols-2.gap-4
                  [:div
                   [:label.block.text-sm.font-semibold.text-gray-700
                    "Median Month"]
                   [:input.border.w-full.p-2.rounded.text-sm.mt-1
                    {:type "number" :step "any"
                     :name "median-month"
                     :value (:median-month values)
                     :on-change handle-change}]]
                  [:div
                   [:label.block.text-sm.font-semibold.text-gray-700
                    "Logistic k"]
                   [:input.border.w-full.p-2.rounded.text-sm.mt-1
                    {:type "number" :step "any"
                     :name "k"
                     :value (:k values)
                     :on-change handle-change}]]]
                 [:button.mt-4.bg-blue-600.text-white.px-4.py-2.rounded.font-semibold
                  {:type "submit" :class "hover:bg-blue-700"}
                  "Generate Bands"]])]))

         [:div.mb-6.flex.items-center.gap-4
          [:label.font-semibold.text-gray-700 "Number of Samples:"]
          [:input.border.p-2.rounded.w-32
           {:type "number"
            :min "1"
            :value @n-samples
            :on-change #(reset! n-samples (js/parseInt
                                           (.. % -target -value) 10))}]]
         ^{:key (str data)}
         [:div.bg-white.p-6.rounded-xl.shadow-sm.border
          [vega/enrollment-chart data]]]))))
