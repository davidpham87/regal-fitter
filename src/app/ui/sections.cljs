(ns app.ui.sections
  (:require [reagent.core :as r]
            [app.ui.inputs :as inputs]))

(defn trial-timing-section []
  (let [collapsed? (r/atom true)]
    (fn []
      [:div.mb-8
       [:div.flex.justify-between.items-center.border-b.pb-2.mb-4
        {:class "cursor-pointer select-none"
         :on-click #(swap! collapsed? not)}
        [:h3.text-lg.font-bold.text-gray-800
         "1. Trial Structure & Event Timing"]
        [:button.text-xs.font-semibold.px-3.py-1.rounded-lg.border
         {:type "button"
          :class "bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1"
          :on-click (fn [e]
                      (.stopPropagation e)
                      (swap! collapsed? not))}
         [:span (if @collapsed? "Expand" "Collapse")]
         [:span (if @collapsed? "▶" "▼")]]]
       (when-not @collapsed?
         [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "Trial Structure"]
           [:div.grid.grid-cols-1.gap-3.mt-2
            [inputs/field-wrapper :n-total
             [inputs/num-input :n-total inputs/parse-int]]
            [inputs/field-wrapper :n-per-arm
             [inputs/num-input :n-per-arm inputs/parse-int]]
            [inputs/field-wrapper :enroll-bands
             [inputs/vector-input :enroll-bands]]
            [inputs/field-wrapper :enforce-no-80-by-today
             [inputs/checkbox-input :enforce-no-80-by-today]]
            [inputs/field-wrapper :no-80-slack-months
             [inputs/num-input :no-80-slack-months inputs/parse-double-safe]]]]
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "Event Timing"]
           [:div.grid.grid-cols-1.gap-3.mt-2
            [inputs/field-wrapper :t-ia
             [inputs/num-input :t-ia inputs/parse-double-safe]]
            [inputs/field-wrapper :tol-ia
             [inputs/num-input :tol-ia inputs/parse-double-safe]]
            [inputs/field-wrapper :t-upd
             [inputs/num-input :t-upd inputs/parse-double-safe]]
            [inputs/field-wrapper :tol-upd
             [inputs/num-input :tol-upd inputs/parse-double-safe]]
            [inputs/field-wrapper :t-pr3
             [inputs/num-input :t-pr3 inputs/parse-double-safe]]
            [inputs/field-wrapper :tol-pr3
             [inputs/num-input :tol-pr3 inputs/parse-double-safe]]
            [inputs/field-wrapper :use-pr3-anchor
             [inputs/checkbox-input :use-pr3-anchor]]]]])])))

(defn grids-section []
  (let [collapsed? (r/atom true)]
    (fn []
      [:div.mb-8
       [:div.flex.justify-between.items-center.border-b.pb-2.mb-4
        {:class "cursor-pointer select-none"
         :on-click #(swap! collapsed? not)}
        [:h3.text-lg.font-bold.text-gray-800
         "2. Prior Model Distribution Grids"]
        [:button.text-xs.font-semibold.px-3.py-1.rounded-lg.border
         {:type "button"
          :class "bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1"
          :on-click (fn [e]
                      (.stopPropagation e)
                      (swap! collapsed? not))}
         [:span (if @collapsed? "Expand" "Collapse")]
         [:span (if @collapsed? "▶" "▼")]]]
       (when-not @collapsed?
         [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "BAT Grid Settings"]
           [:div.grid.grid-cols-1.gap-3.mt-2
            [inputs/field-wrapper :bat-med-grid
             [inputs/grid-input :bat-med-grid]]
            [inputs/field-wrapper :bat-shape-grid
             [inputs/grid-input :bat-shape-grid]]
            [inputs/field-wrapper :bat-strat-bin
             [inputs/num-input :bat-strat-bin inputs/parse-double-safe]]]]
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "GPS Grid Settings"]
           [:div.grid.grid-cols-1.gap-3.mt-2
            [inputs/field-wrapper :gps-med-grid-lo
             [inputs/num-input :gps-med-grid-lo inputs/parse-double-safe]]
            [inputs/field-wrapper :gps-med-grid-hi
             [inputs/num-input :gps-med-grid-hi inputs/parse-double-safe]]
            [inputs/field-wrapper :gps-med-grid-n
             [inputs/num-input :gps-med-grid-n inputs/parse-int]]
            [inputs/field-wrapper :gps-shape-grid
             [inputs/grid-input :gps-shape-grid]]]]
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "Cure Grid Settings"]
           [:div.grid.grid-cols-1.gap-3.mt-2
            [inputs/field-wrapper :cure-frac-grid
             [inputs/grid-input :cure-frac-grid]]
            [inputs/field-wrapper :cure-unc-med-grid
             [inputs/grid-input :cure-unc-med-grid]]
            [inputs/field-wrapper :cure-unc-shape-grid
             [inputs/grid-input :cure-unc-shape-grid]]]]
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "Leaky Grid Settings"]
           [:div.grid.grid-cols-1.gap-3.mt-2
            [inputs/field-wrapper :leaky-cure-frac-grid
             [inputs/grid-input :leaky-cure-frac-grid]]
            [inputs/field-wrapper :leaky-unc-med-grid
             [inputs/grid-input :leaky-unc-med-grid]]
            [inputs/field-wrapper :leaky-unc-shape-grid
             [inputs/grid-input :leaky-unc-shape-grid]]
            [inputs/field-wrapper :leak-grid
             [inputs/grid-input :leak-grid]]]]])])))

(defn tolerances-section []
  (let [collapsed? (r/atom true)]
    (fn []
      [:div.mb-8
       [:div.flex.justify-between.items-center.border-b.pb-2.mb-4
        {:class "cursor-pointer select-none"
         :on-click #(swap! collapsed? not)}
        [:h3.text-lg.font-bold.text-gray-800
         "3. ABC Tolerances & Analytical Prefilters"]
        [:button.text-xs.font-semibold.px-3.py-1.rounded-lg.border
         {:type "button"
          :class "bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1"
          :on-click (fn [e]
                      (.stopPropagation e)
                      (swap! collapsed? not))}
         [:span (if @collapsed? "Expand" "Collapse")]
         [:span (if @collapsed? "▶" "▼")]]]
       (when-not @collapsed?
         [:div.grid.grid-cols-1.gap-6
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "ABC Tolerances"]
           [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mt-2
            [inputs/field-wrapper :prefilter-tol-ia
             [inputs/num-input :prefilter-tol-ia inputs/parse-double-safe]]
            [inputs/field-wrapper :prefilter-tol-upd
             [inputs/num-input :prefilter-tol-upd inputs/parse-double-safe]]
            [inputs/field-wrapper :prefilter-tol-pr3
             [inputs/num-input :prefilter-tol-pr3 inputs/parse-double-safe]]
            [inputs/field-wrapper :tol-increment-ia-upd
             [inputs/num-input :tol-increment-ia-upd inputs/parse-double-safe]]
            [inputs/field-wrapper :tol-increment-upd-pr3
             [inputs/num-input :tol-increment-upd-pr3 inputs/parse-double-safe]]
            [inputs/field-wrapper :pool-mos-min-at-ia
             [inputs/num-input :pool-mos-min-at-ia inputs/parse-double-safe]]]]])])))

(defn execution-section []
  (let [collapsed? (r/atom true)]
    (fn []
      [:div.mb-8
       [:div.flex.justify-between.items-center.border-b.pb-2.mb-4
        {:class "cursor-pointer select-none"
         :on-click #(swap! collapsed? not)}
        [:h3.text-lg.font-bold.text-gray-800
         "4. Execution Settings & SAP Constraints"]
        [:button.text-xs.font-semibold.px-3.py-1.rounded-lg.border
         {:type "button"
          :class "bg-gray-50 hover:bg-gray-100 transition-colors flex gap-1"
          :on-click (fn [e]
                      (.stopPropagation e)
                      (swap! collapsed? not))}
         [:span (if @collapsed? "Expand" "Collapse")]
         [:span (if @collapsed? "▶" "▼")]]]
       (when-not @collapsed?
         [:div.grid.grid-cols-1.gap-6
          [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
           [:h3.font-bold.text-lg.text-gray-800 "Execution Settings"]
           [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mt-2
            [inputs/field-wrapper :n-sims-screen
             [inputs/num-input :n-sims-screen inputs/parse-int]]
            [inputs/field-wrapper :n-sims-per-combo
             [inputs/num-input :n-sims-per-combo inputs/parse-int]]
            [inputs/field-wrapper :n-ev-ia
             [inputs/num-input :n-ev-ia inputs/parse-int]]
            [inputs/field-wrapper :n-ev-upd
             [inputs/num-input :n-ev-upd inputs/parse-int]]
            [inputs/field-wrapper :n-ev-pr3
             [inputs/num-input :n-ev-pr3 inputs/parse-int]]
            [inputs/field-wrapper :n-ev-final
             [inputs/num-input :n-ev-final inputs/parse-int]]
            [inputs/field-wrapper :n-screen-min-pass
             [inputs/num-input :n-screen-min-pass inputs/parse-int]]
            [inputs/field-wrapper :efficacy-hr-min
             [inputs/num-input :efficacy-hr-min inputs/parse-double-safe]]
            [inputs/field-wrapper :futility-hr-max
             [inputs/num-input :futility-hr-max inputs/parse-double-safe]]
            [inputs/field-wrapper :median-fu-target
             [inputs/num-input :median-fu-target inputs/parse-double-safe]]
            [inputs/field-wrapper :median-fu-tol
             [inputs/num-input :median-fu-tol inputs/parse-double-safe]]
            [inputs/field-wrapper :hr-threshold
             [inputs/num-input :hr-threshold inputs/parse-double-safe]]
            [inputs/field-wrapper :seed
             [inputs/num-input :seed inputs/parse-int]]
            [inputs/field-wrapper :families
             [inputs/families-input :families]]]]])])))
