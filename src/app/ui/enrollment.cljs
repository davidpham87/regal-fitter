(ns app.ui.enrollment
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.state :as state]
            [app.vega :as vega]
            [cljs.numpy-random :as np-random]
            [cljs.numpy :as np]
            [app.regal-fit.enrollment :as rfe]
            [fork.re-frame :as fork]
            [app.components.editor :refer [code-editor]]
            [app.components.tabs :refer [tab-bar]]))

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
  (let [n-samples (r/atom 100)
        window-param (r/atom 2)]
    (fn []
      (let [config @(rf/subscribe [:config])
            enrollment-mode @(rf/subscribe [:enrollment-mode])
            bands (:enroll-bands config)
            seed (:seed config)
            valid-samples (if (and (number? @n-samples) (pos? @n-samples))
                            @n-samples
                            100)
            data (simulate-enrollment-data bands valid-samples seed)]
        [:div.p-4.max-w-6xl.mx-auto
         [:h2.text-2xl.font-extrabold.text-gray-900.mb-4 "Enrollment Plot"]

         [:div.mb-6.flex.flex-wrap.gap-4.items-center
          [tab-bar
           {:active-tab (:mode enrollment-mode)
            :tabs [[:manual "Manual / Editor Mode"]
                   [:s-curve "S-Curve Gen Mode"]]
            :on-change #(rf/dispatch
                         [:set-enrollment-mode-param :mode %])
            :button-class (str "bg-blue-600 text-white font-semibold "
                               "shadow-sm")}]
          [:button.px-4.py-2.rounded.font-semibold
           {:class "bg-gray-200 text-gray-700 hover:bg-gray-300"
            :on-click #(rf/dispatch [:set-config-key :enroll-bands
                                     (:enroll-bands state/default-config)])}
           "Restore Default"]
          [:div.flex.items-center.gap-2.bg-gray-100.p-2.rounded-lg.border
           [:label.text-xs.font-semibold.text-gray-700 "Coarse Window:"]
           [:input.border.p-1.rounded.w-12.text-center.text-xs
            {:type "number" :min "1" :max "20"
             :value @window-param
             :on-change #(reset! window-param
                                 (js/parseInt
                                  (.. % -target -value) 10))}]
           [:button.px-3.py-1.rounded.text-sm.font-semibold
            {:class "bg-amber-600 text-white hover:bg-amber-700"
             :on-click (fn []
                         (let [current-bands (:enroll-bands config)
                               w (or @window-param 2)
                               new-bands (rfe/larger-bands current-bands w)]
                           (rf/dispatch [:set-config-key
                                         :enroll-bands new-bands])))}
            "Coarser Bands"]]]

         (if (= (:mode enrollment-mode) :manual)
           (let [expected-json (js/JSON.stringify (clj->js bands) nil 2)]
             [:div.mb-6
              [:h3.text-lg.font-bold.mb-2 "Edit Enrollment Bands"]
              [code-editor
               {:value expected-json
                :language "json"
                :height "250px"
                :on-change (fn [val _]
                             (try
                               (let [parsed (js->clj
                                             (js/JSON.parse val)
                                             :keywordize-keys true)]
                                 (when (vector? parsed)
                                   (rf/dispatch [:set-config-key
                                                 :enroll-bands parsed])))
                               (catch js/Error _)))}]])
           (let [init-vals {:median-month (:median-month enrollment-mode)
                            :k (:k enrollment-mode)}]
             ^{:key init-vals}
             [fork/form
              {:initial-values init-vals
               :keywordize-keys true
               :on-submit
               (fn [{:keys [values]}]
                 (let [m-val (js/parseFloat (:median-month values))
                       k-val (js/parseFloat (:k values))]
                   (when (and (not (js/isNaN m-val))
                              (not (js/isNaN k-val)))
                     (let [n-total 126
                           total-months 38
                           new-bands (rfe/get-s-curve-enrollment-bands
                                      n-total total-months
                                      m-val k-val)]
                       (rf/dispatch [:set-config-key :enroll-bands new-bands])
                       (rf/dispatch [:set-enrollment-mode-param :median-month m-val])
                       (rf/dispatch [:set-enrollment-mode-param :k k-val])))))}
              (fn [{:keys [values handle-change handle-submit]}]
                [:form.mb-6.p-4.border.rounded-xl.bg-gray-50
                 {:on-submit handle-submit}
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
