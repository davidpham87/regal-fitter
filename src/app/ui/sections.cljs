(ns app.ui.sections
  (:require [app.ui.inputs :as inputs]
            [app.components.section :refer [collapsible-section]]))

(defn trial-timing-section [props]
  [collapsible-section
   {:title "1. Trial Structure & Event Timing"
    :initial-collapsed? true
    :content
    [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "Trial Structure"]
      [:div.grid.grid-cols-1.gap-3.mt-2
       [inputs/field-wrapper :n-total
        [inputs/num-input props :n-total inputs/parse-int] props]
       [inputs/field-wrapper :n-per-arm
        [inputs/num-input props :n-per-arm inputs/parse-int] props]
       [inputs/field-wrapper :enroll-bands
        [inputs/vector-input props :enroll-bands] props]
       [inputs/field-wrapper :enforce-no-80-by-today
        [inputs/checkbox-input props :enforce-no-80-by-today] props]
       [inputs/field-wrapper :no-80-slack-months
        [inputs/num-input props :no-80-slack-months
         inputs/parse-double-safe] props]]]
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "Event Timing"]
      [:div.grid.grid-cols-1.gap-3.mt-2
       [inputs/field-wrapper :t-ia
        [inputs/num-input props :t-ia inputs/parse-double-safe] props]
       [inputs/field-wrapper :tol-ia
        [inputs/num-input props :tol-ia inputs/parse-double-safe] props]
       [inputs/field-wrapper :t-upd
        [inputs/num-input props :t-upd inputs/parse-double-safe] props]
       [inputs/field-wrapper :tol-upd
        [inputs/num-input props :tol-upd inputs/parse-double-safe] props]
       [inputs/field-wrapper :t-pr3
        [inputs/num-input props :t-pr3 inputs/parse-double-safe] props]
       [inputs/field-wrapper :tol-pr3
        [inputs/num-input props :tol-pr3 inputs/parse-double-safe] props]
       [inputs/field-wrapper :use-pr3-anchor
        [inputs/checkbox-input props :use-pr3-anchor] props]]]]}])

(defn grids-section [props]
  [collapsible-section
   {:title "2. Prior Model Distribution Grids"
    :initial-collapsed? true
    :content
    [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "BAT Grid Settings"]
      [:div.grid.grid-cols-1.gap-3.mt-2
       [inputs/field-wrapper :bat-med-grid
        [inputs/grid-input props :bat-med-grid] props]
       [inputs/field-wrapper :bat-shape-grid
        [inputs/grid-input props :bat-shape-grid] props]
       [inputs/field-wrapper :bat-strat-bin
        [inputs/num-input props :bat-strat-bin
         inputs/parse-double-safe] props]]]
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "GPS Grid Settings"]
      [:div.grid.grid-cols-1.gap-3.mt-2
       [inputs/field-wrapper :gps-med-grid-lo
        [inputs/num-input props :gps-med-grid-lo
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :gps-med-grid-hi
        [inputs/num-input props :gps-med-grid-hi
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :gps-med-grid-n
        [inputs/num-input props :gps-med-grid-n inputs/parse-int] props]
       [inputs/field-wrapper :gps-shape-grid
        [inputs/grid-input props :gps-shape-grid] props]]]
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "Cure Grid Settings"]
      [:div.grid.grid-cols-1.gap-3.mt-2
       [inputs/field-wrapper :cure-frac-grid
        [inputs/grid-input props :cure-frac-grid] props]
       [inputs/field-wrapper :cure-unc-med-grid
        [inputs/grid-input props :cure-unc-med-grid] props]
       [inputs/field-wrapper :cure-unc-shape-grid
        [inputs/grid-input props :cure-unc-shape-grid] props]]]
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "Leaky Grid Settings"]
      [:div.grid.grid-cols-1.gap-3.mt-2
       [inputs/field-wrapper :leaky-cure-frac-grid
        [inputs/grid-input props :leaky-cure-frac-grid] props]
       [inputs/field-wrapper :leaky-unc-med-grid
        [inputs/grid-input props :leaky-unc-med-grid] props]
       [inputs/field-wrapper :leaky-unc-shape-grid
        [inputs/grid-input props :leaky-unc-shape-grid] props]
       [inputs/field-wrapper :leak-grid
        [inputs/grid-input props :leak-grid] props]]]]}])

(defn tolerances-section [props]
  [collapsible-section
   {:title "3. ABC Tolerances & Analytical Prefilters"
    :initial-collapsed? true
    :content
    [:div.grid.grid-cols-1.gap-6
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "ABC Tolerances"]
      [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mt-2
       [inputs/field-wrapper :prefilter-tol-ia
        [inputs/num-input props :prefilter-tol-ia
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :prefilter-tol-upd
        [inputs/num-input props :prefilter-tol-upd
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :prefilter-tol-pr3
        [inputs/num-input props :prefilter-tol-pr3
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :tol-increment-ia-upd
        [inputs/num-input props :tol-increment-ia-upd
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :tol-increment-upd-pr3
        [inputs/num-input props :tol-increment-upd-pr3
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :pool-mos-min-at-ia
        [inputs/num-input props :pool-mos-min-at-ia
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :bat-surv-36m-max
        [inputs/num-input props :bat-surv-36m-max
         inputs/parse-double-safe] props]]]]}])

(defn execution-section [props]
  [collapsible-section
   {:title "4. Execution Settings & SAP Constraints"
    :initial-collapsed? true
    :content
    [:div.grid.grid-cols-1.gap-6
     [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
      [:h3.font-bold.text-lg.text-gray-800 "Execution Settings"]
      [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mt-2
       [inputs/field-wrapper :n-sims-screen
        [inputs/num-input props :n-sims-screen inputs/parse-int] props]
       [inputs/field-wrapper :n-sims-per-combo
        [inputs/num-input props :n-sims-per-combo inputs/parse-int] props]
       [inputs/field-wrapper :n-ev-ia
        [inputs/num-input props :n-ev-ia inputs/parse-int] props]
       [inputs/field-wrapper :n-ev-upd
        [inputs/num-input props :n-ev-upd inputs/parse-int] props]
       [inputs/field-wrapper :n-ev-pr3
        [inputs/num-input props :n-ev-pr3 inputs/parse-int] props]
       [inputs/field-wrapper :n-ev-final
        [inputs/num-input props :n-ev-final inputs/parse-int] props]
       [inputs/field-wrapper :n-screen-min-pass
        [inputs/num-input props :n-screen-min-pass inputs/parse-int] props]
       [inputs/field-wrapper :efficacy-hr-min
        [inputs/num-input props :efficacy-hr-min
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :futility-hr-max
        [inputs/num-input props :futility-hr-max
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :median-fu-target
        [inputs/num-input props :median-fu-target
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :median-fu-tol
        [inputs/num-input props :median-fu-tol
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :hr-threshold
        [inputs/num-input props :hr-threshold
         inputs/parse-double-safe] props]
       [inputs/field-wrapper :seed
        [inputs/num-input props :seed inputs/parse-int] props]
       [inputs/field-wrapper :n-sims-aggregation
        [inputs/num-input props :n-sims-aggregation inputs/parse-int] props]
       [inputs/field-wrapper :families
        [inputs/families-input props :families] props]]]]}])
