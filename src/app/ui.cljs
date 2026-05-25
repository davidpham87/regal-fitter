(ns app.ui
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.state :as state]
            [app.simulator :as sim]
            [app.worker-pool :as wp]
            [app.vega :as vega]
            [app.views :as views]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [re-frame.core :as rf]
            [fork.reagent :as fork]
            [app.db :as db]
            ["@monaco-editor/react" :default Editor]))

(def ^:private key->label
  {:n-total "Total Size (N)"
   :n-per-arm "N per Arm"
   :enroll-bands "Enrollment Bands"
   :enforce-no-80-by-today "Enforce No 80 Events by Today"
   :no-80-slack-months "No 80 Slack (months)"
   :t-ia "Time to IA (months)"
   :tol-ia "IA Count Tolerance"
   :t-upd "Time to UPD (months)"
   :tol-upd "UPD Count Tolerance"
   :t-pr3 "Time to PR3 (months)"
   :tol-pr3 "PR3 Count Tolerance"
   :use-pr3-anchor "Use PR3 Anchor"
   :bat-med-grid "BAT Median Grid"
   :bat-shape-grid "BAT Shape Grid"
   :bat-strat-bin "BAT Stratification Bin (months)"
   :gps-med-grid-lo "GPS Median Grid Low"
   :gps-med-grid-hi "GPS Median Grid High"
   :gps-med-grid-n "GPS Median Grid N"
   :gps-shape-grid "GPS Shape Grid"
   :cure-frac-grid "Cure Fraction Grid"
   :cure-unc-med-grid "Cure Uncured Median Grid"
   :cure-unc-shape-grid "Cure Uncured Shape Grid"
   :leaky-cure-frac-grid "Leaky Cure Fraction Grid"
   :leaky-unc-med-grid "Leaky Uncured Median Grid"
   :leaky-unc-shape-grid "Leaky Uncured Shape Grid"
   :leak-grid "Leak Grid"
   :prefilter-tol-ia "Prefilter IA Tolerance"
   :prefilter-tol-upd "Prefilter UPD Tolerance"
   :prefilter-tol-pr3 "Prefilter PR3 Tolerance"
   :tol-increment-ia-upd "IA-UPD Increment Tolerance"
   :tol-increment-upd-pr3 "UPD-PR3 Increment Tolerance"
   :pool-mos-min-at-ia "Pooled mOS Min at IA (months)"
   :n-sims-screen "Screening Sims count"
   :n-sims-per-combo "Simulations per Combo"
   :n-ev-ia "Target Events at IA"
   :n-ev-upd "Target Events at UPD"
   :n-ev-pr3 "Target Events at PR3"
   :n-ev-final "Target Events at Final"
   :n-screen-min-pass "Min Pass for Screening"
   :efficacy-hr-min "Efficacy HR Min at IA"
   :futility-hr-max "Futility HR Max at IA"
   :median-fu-target "Median Follow-up Target (months)"
   :median-fu-tol "Median Follow-up Tolerance"
   :hr-threshold "HR Significance Threshold"
   :seed "Random Seed"
   :families "Model Families"
   :bat-med "BAT Median"
   :bat-shape "BAT Shape"
   :bat-scale "BAT Scale"
   :gps-med "GPS Median"
   :gps-shape "GPS Shape"
   :gps-scale "GPS Scale"
   :cure-frac "Cure Fraction"
   :unc-med "Unc Median"
   :unc-shape "Unc Shape"
   :unc-scale "Unc Scale"
   :leak-yr "Leak Rate (Year)"
   :exp-ev-ia "Expected IA Events"
   :exp-ev-upd "Expected UPD Events"
   :exp-ev-pr3 "Expected PR3 Events"
   :family "Model Family"})

(def ^:private key->help
  {:n-total "Total trial size (e.g. 126 subjects)."
   :n-per-arm "Number of subjects per treatment arm (e.g. 63)."
   :enroll-bands
   (str "Enrollment year-bands (counts) measured from t=0 (Feb 8, 2021). "
        "Format: [[start_month end_month count] ...].")
   :enforce-no-80-by-today
   "Require that the 80th event has not occurred before today."
   :no-80-slack-months
   (str "Slack months allowed for analysis lag of 80th event "
        "(accounts for ~1-2 months lag between FA trigger and PR).")
   :t-ia "Calendar months from first enrollment (t=0) to Interim Analysis (IA)."
   :tol-ia "ABC tolerance on event count at Interim Analysis (IA)."
   :t-upd "Calendar months from first enrollment (t=0) to Updated Analysis."
   :tol-upd "ABC tolerance on event count at Updated Analysis (UPD)."
   :t-pr3 "Calendar months from first enrollment (t=0) to public PR3 anchor."
   :tol-pr3 "ABC tolerance on event count at public PR3 anchor."
   :use-pr3-anchor "Toggle the third (PR3) anchor on/off."
   :bat-med-grid "Weibull BAT median grid (start, stop, step)."
   :bat-shape-grid "Weibull BAT shape grid (start, stop, step)."
   :bat-strat-bin
   (str "Width of BAT mOS bins for stratified output. "
        "Set to 0 to disable stratified pages.")
   :gps-med-grid-lo "Weibull GPS median grid lower bound (log-spaced)."
   :gps-med-grid-hi "Weibull GPS median grid upper bound (log-spaced)."
   :gps-med-grid-n "Weibull GPS median grid number of points."
   :gps-shape-grid "Weibull GPS shape grid (start, stop, step)."
   :cure-frac-grid "Cure-fraction GPS grid (start, stop, step)."
   :cure-unc-med-grid "Cure uncured median grid (start, stop, step)."
   :cure-unc-shape-grid "Cure uncured shape grid (start, stop, step)."
   :leaky-cure-frac-grid "Leaky cure-fraction GPS grid (start, stop, step)."
   :leaky-unc-med-grid "Leaky uncured median grid (start, stop, step)."
   :leaky-unc-shape-grid "Leaky uncured shape grid (start, stop, step)."
   :leak-grid "Leaky leak-rate grid (start, stop, step)."
   :prefilter-tol-ia
   (str "Analytical pre-filter tolerance on IA event count. "
        "Rejects combos whose expected events deviate beyond tolerance.")
   :prefilter-tol-upd
   "Analytical pre-filter tolerance on UPD event count."
   :prefilter-tol-pr3
   "Analytical pre-filter tolerance on PR3 event count."
   :tol-increment-ia-upd
   (str "Tolerance on the increment of events between IA and UPD "
        "(observed increment is 12). Set to large number to disable.")
   :tol-increment-upd-pr3
   (str "Tolerance on the increment of events between UPD and PR3 "
        "(observed increment is 6). Set to large number to disable.")
   :pool-mos-min-at-ia
   (str "Minimum pooled median OS at IA in months (IDMC reported "
        "exceeded 12 months, e.g. 13.5). Set to 0 to disable.")
   :n-sims-screen
   (str "Initial screening simulation depth to drop poor combinations "
        "before running full simulations.")
   :n-sims-per-combo "Post-filter simulation depth per combination."
   :n-ev-ia "Observed target events at Interim Analysis (IA) (60 events)."
   :n-ev-upd "Observed target events at Updated Analysis (UPD) (72 events)."
   :n-ev-pr3 "Observed target events at public PR3 anchor (78 events)."
   :n-ev-final "Observed target events at final analysis (80 events)."
   :n-screen-min-pass
   "Minimum passing simulations required during screening to continue."
   :efficacy-hr-min
   (str "Trial did not stop early for efficacy floor at IA. "
        "Set to 0 to disable.")
   :futility-hr-max
   (str "Futility HR boundary limit at Interim Analysis (IA) (GPS "
        "exceeded futility criteria, e.g. HR < 1.0). Set to 999 to disable.")
   :median-fu-target
   (str "Disclosed target median follow-up at IA in months (13.5). "
        "Set to 0 to disable.")
   :median-fu-tol "Tolerance for median follow-up target in months."
   :hr-threshold "Hazard ratio threshold for significance per SAP (0.636)."
   :seed "Random seed for reproducibility."
   :families "Enabled model distribution families."})

(defn- parse-vector [val]
  (try
    (let [parsed (js/JSON.parse val)]
      (if (js/Array.isArray parsed)
        (js->clj parsed)
        nil))
    (catch js/Error _ nil)))

(defn- vector-input [props key-name]
  (let [curr-val (get (:values props) key-name)
        text-val (r/atom (js/JSON.stringify (clj->js curr-val)))]
    (fn [{:keys [values set-values]} key-name]
      (let [c-val (get values key-name)]
        (when-not (= (parse-vector @text-val) c-val)
          (reset! text-val (js/JSON.stringify (clj->js c-val)))))
      [:input.border.w-full.p-1.rounded.text-sm
       {:type "text"
        :value @text-val
        :on-change (fn [e]
                     (let [v (.. e -target -value)]
                       (reset! text-val v)
                       (when-let [parsed (parse-vector v)]
                         (set-values {key-name parsed}))))}])))

(defn- parse-float-safe [s default-val]
  (let [p (js/parseFloat s)]
    (if (js/isNaN p) default-val p)))

(defn- grid-input [props key-name]
  (let [curr-val (get (:values props) key-name)
        [start stop step] curr-val
        start-val (r/atom (str start))
        stop-val (r/atom (str stop))
        step-val (r/atom (str step))]
    (fn [{:keys [values set-values]} key-name]
      (let [[c-start c-stop c-step] (get values key-name)]
        (when-not (= (parse-float-safe @start-val nil) c-start)
          (reset! start-val (str c-start)))
        (when-not (= (parse-float-safe @stop-val nil) c-stop)
          (reset! stop-val (str c-stop)))
        (when-not (= (parse-float-safe @step-val nil) c-step)
          (reset! step-val (str c-step))))
      [:div.flex.gap-2.mt-1
       [:div.flex-1
        [:span.text-xs.text-gray-500 "Start"]
        [:input.border.w-full.p-1.rounded.text-sm
         {:type "number"
          :step "0.01"
          :value @start-val
          :on-change (fn [e]
                       (let [v (.. e -target -value)
                             parsed (js/parseFloat v)]
                         (reset! start-val v)
                         (when-not (js/isNaN parsed)
                           (set-values
                            {key-name [parsed
                                       (parse-float-safe @stop-val 0.0)
                                       (parse-float-safe @step-val 0.0)]}))))}]]
       [:div.flex-1
        [:span.text-xs.text-gray-500 "Stop"]
        [:input.border.w-full.p-1.rounded.text-sm
         {:type "number"
          :step "0.01"
          :value @stop-val
          :on-change (fn [e]
                       (let [v (.. e -target -value)
                             parsed (js/parseFloat v)]
                         (reset! stop-val v)
                         (when-not (js/isNaN parsed)
                           (set-values
                            {key-name [(parse-float-safe @start-val 0.0)
                                       parsed
                                       (parse-float-safe @step-val 0.0)]}))))}]]
       [:div.flex-1
        [:span.text-xs.text-gray-500 "Step"]
        [:input.border.w-full.p-1.rounded.text-sm
         {:type "number"
          :step "0.01"
          :value @step-val
          :on-change (fn [e]
                       (let [v (.. e -target -value)
                             parsed (js/parseFloat v)]
                         (reset! step-val v)
                         (when-not (js/isNaN parsed)
                           (set-values
                            {key-name [(parse-float-safe @start-val 0.0)
                                       (parse-float-safe @stop-val 0.0)
                                       parsed]}))))}]]])))

(defn- families-input [props key-name]
  (let [curr-val (get (:values props) key-name)
        all-families ["weibull" "leaky" "cure"]
        active-set (set curr-val)]
    (fn [{:keys [set-values]} key-name]
      [:div.flex.flex-col.gap-2.mt-1
       (for [fam all-families]
         (let [checked? (contains? active-set fam)]
           ^{:key fam}
           [:label.inline-flex.items-center.text-sm.text-gray-700.cursor-pointer
            [:input.rounded.border-gray-300.text-blue-600.focus:ring-blue-500
             {:type "checkbox"
              :checked checked?
              :on-change (fn [e]
                           (let [checked (.. e -target -checked)
                                 new-set (if checked
                                           (conj active-set fam)
                                           (disj active-set fam))
                                 new-val (filterv (partial contains? new-set)
                                                  all-families)]
                             (set-values {key-name new-val})))}]
            [:span.ml-2.capitalize fam]]))])))

(defn- field-wrapper [key-name child-el]
  (let [show-help? (r/atom false)]
    (fn [key-name child-el]
      (let [label-text (get key->label key-name (name key-name))
            help-text (get key->help key-name "")]
        [:div.mt-3
         [:div.flex.items-center.justify-between.mb-1
          [:label.block.text-sm.font-semibold.text-gray-700
           label-text]
          (when (seq help-text)
            [:button.inline-flex.items-center.justify-center
             {:type "button"
              :class (str "w-5 h-5 text-xs font-bold rounded-full "
                          "transition-colors "
                          (if @show-help?
                            "bg-blue-600 text-white hover:bg-blue-700"
                            "bg-gray-100 text-gray-500 hover:bg-gray-200"))
              :on-click #(swap! show-help? not)}
             "?"])]
         (when (and @show-help? (seq help-text))
           [:div.text-xs.text-blue-900.bg-blue-50.p-2.rounded.mb-2
            {:class "border border-blue-200 leading-relaxed"}
            help-text])
         child-el]))))

(def ^:private category->keys
  {:trial [:n-total :n-per-arm :enroll-bands :enforce-no-80-by-today
           :no-80-slack-months]
   :timing [:t-ia :tol-ia :t-upd :tol-upd :t-pr3 :tol-pr3 :use-pr3-anchor]
   :bat [:bat-med-grid :bat-shape-grid :bat-strat-bin]
   :gps [:gps-med-grid-lo :gps-med-grid-hi :gps-med-grid-n :gps-shape-grid]
   :cure [:cure-frac-grid :cure-unc-med-grid :cure-unc-shape-grid]
   :leaky [:leaky-cure-frac-grid :leaky-unc-med-grid :leaky-unc-shape-grid
           :leak-grid]
   :prefilter [:prefilter-tol-ia :prefilter-tol-upd :prefilter-tol-pr3
               :tol-increment-ia-upd :tol-increment-upd-pr3
               :pool-mos-min-at-ia]
   :other [:n-sims-screen :n-sims-per-combo :n-ev-ia :n-ev-upd :n-ev-pr3
           :n-ev-final :n-screen-min-pass :efficacy-hr-min :futility-hr-max
           :median-fu-target :median-fu-tol :hr-threshold :seed :families]})

(defn- trial-timing-section []
  (let [collapsed? (r/atom true)
        keys-list (concat (get category->keys :trial)
                          (get category->keys :timing))]
    (fn []
      (let [config (:config @state/app-state)
            section-vals (select-keys config keys-list)]
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
           [fork/form
            {:initial-values section-vals
             :keywordize-keys true
             :on-change (fn [{:keys [values]}]
                          (let [curr (:config @state/app-state)]
                            (state/update-config! (merge curr values))))}
            (fn [{:keys [values set-values handle-change] :as props}]
              [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "Trial Structure"]
                [:div.grid.grid-cols-1.gap-3.mt-2
                 [field-wrapper :n-total
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-total"
                    :value (:n-total values)
                    :on-change handle-change}]]
                 [field-wrapper :n-per-arm
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-per-arm"
                    :value (:n-per-arm values)
                    :on-change handle-change}]]
                 [field-wrapper :enroll-bands
                  [vector-input props :enroll-bands]]
                 [field-wrapper :enforce-no-80-by-today
                  [:input.mt-1
                   {:type "checkbox"
                    :checked (boolean (:enforce-no-80-by-today values))
                    :on-change (fn [e]
                                 (set-values {:enforce-no-80-by-today
                                              (.. e -target -checked)}))}]]
                 [field-wrapper :no-80-slack-months
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "no-80-slack-months"
                    :value (:no-80-slack-months values)
                    :on-change handle-change}]]]]
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "Event Timing"]
                [:div.grid.grid-cols-1.gap-3.mt-2
                 [field-wrapper :t-ia
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "t-ia"
                    :value (:t-ia values)
                    :on-change handle-change}]]
                 [field-wrapper :tol-ia
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "tol-ia"
                    :value (:tol-ia values)
                    :on-change handle-change}]]
                 [field-wrapper :t-upd
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "t-upd"
                    :value (:t-upd values)
                    :on-change handle-change}]]
                 [field-wrapper :tol-upd
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "tol-upd"
                    :value (:tol-upd values)
                    :on-change handle-change}]]
                 [field-wrapper :t-pr3
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "t-pr3"
                    :value (:t-pr3 values)
                    :on-change handle-change}]]
                 [field-wrapper :tol-pr3
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "tol-pr3"
                    :value (:tol-pr3 values)
                    :on-change handle-change}]]
                 [field-wrapper :use-pr3-anchor
                  [:input.mt-1
                   {:type "checkbox"
                    :checked (boolean (:use-pr3-anchor values))
                    :on-change (fn [e]
                                 (set-values {:use-pr3-anchor
                                              (.. e -target -checked)}))}]]]]])])]))))

(defn- grids-section []
  (let [collapsed? (r/atom true)
        keys-list (concat (get category->keys :bat)
                          (get category->keys :gps)
                          (get category->keys :cure)
                          (get category->keys :leaky))]
    (fn []
      (let [config (:config @state/app-state)
            section-vals (select-keys config keys-list)]
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
           [fork/form
            {:initial-values section-vals
             :keywordize-keys true
             :on-change (fn [{:keys [values]}]
                          (let [curr (:config @state/app-state)]
                            (state/update-config! (merge curr values))))}
            (fn [{:keys [values set-values handle-change] :as props}]
              [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "BAT Grid Settings"]
                [:div.grid.grid-cols-1.gap-3.mt-2
                 [field-wrapper :bat-med-grid
                  [grid-input props :bat-med-grid]]
                 [field-wrapper :bat-shape-grid
                  [grid-input props :bat-shape-grid]]
                 [field-wrapper :bat-strat-bin
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "bat-strat-bin"
                    :value (:bat-strat-bin values)
                    :on-change handle-change}]]]]
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "GPS Grid Settings"]
                [:div.grid.grid-cols-1.gap-3.mt-2
                 [field-wrapper :gps-med-grid-lo
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "gps-med-grid-lo"
                    :value (:gps-med-grid-lo values)
                    :on-change handle-change}]]
                 [field-wrapper :gps-med-grid-hi
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "gps-med-grid-hi"
                    :value (:gps-med-grid-hi values)
                    :on-change handle-change}]]
                 [field-wrapper :gps-med-grid-n
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "gps-med-grid-n"
                    :value (:gps-med-grid-n values)
                    :on-change handle-change}]]
                 [field-wrapper :gps-shape-grid
                  [grid-input props :gps-shape-grid]]]]
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "Cure Grid Settings"]
                [:div.grid.grid-cols-1.gap-3.mt-2
                 [field-wrapper :cure-frac-grid
                  [grid-input props :cure-frac-grid]]
                 [field-wrapper :cure-unc-med-grid
                  [grid-input props :cure-unc-med-grid]]
                 [field-wrapper :cure-unc-shape-grid
                  [grid-input props :cure-unc-shape-grid]]]]
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "Leaky Grid Settings"]
                [:div.grid.grid-cols-1.gap-3.mt-2
                 [field-wrapper :leaky-cure-frac-grid
                  [grid-input props :leaky-cure-frac-grid]]
                 [field-wrapper :leaky-unc-med-grid
                  [grid-input props :leaky-unc-med-grid]]
                 [field-wrapper :leaky-unc-shape-grid
                  [grid-input props :leaky-unc-shape-grid]]
                 [field-wrapper :leak-grid
                  [grid-input props :leak-grid]]]]])])]))))

(defn- tolerances-section []
  (let [collapsed? (r/atom true)
        keys-list (get category->keys :prefilter)]
    (fn []
      (let [config (:config @state/app-state)
            section-vals (select-keys config keys-list)]
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
           [fork/form
            {:initial-values section-vals
             :keywordize-keys true
             :on-change (fn [{:keys [values]}]
                          (let [curr (:config @state/app-state)]
                            (state/update-config! (merge curr values))))}
            (fn [{:keys [values handle-change]}]
              [:div.grid.grid-cols-1.gap-6
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "ABC Tolerances"]
                [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mt-2
                 [field-wrapper :prefilter-tol-ia
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "prefilter-tol-ia"
                    :value (:prefilter-tol-ia values)
                    :on-change handle-change}]]
                 [field-wrapper :prefilter-tol-upd
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "prefilter-tol-upd"
                    :value (:prefilter-tol-upd values)
                    :on-change handle-change}]]
                 [field-wrapper :prefilter-tol-pr3
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "prefilter-tol-pr3"
                    :value (:prefilter-tol-pr3 values)
                    :on-change handle-change}]]
                 [field-wrapper :tol-increment-ia-upd
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "tol-increment-ia-upd"
                    :value (:tol-increment-ia-upd values)
                    :on-change handle-change}]]
                 [field-wrapper :tol-increment-upd-pr3
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "tol-increment-upd-pr3"
                    :value (:tol-increment-upd-pr3 values)
                    :on-change handle-change}]]
                 [field-wrapper :pool-mos-min-at-ia
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "pool-mos-min-at-ia"
                    :value (:pool-mos-min-at-ia values)
                    :on-change handle-change}]]]]])])]))))

(defn- execution-section []
  (let [collapsed? (r/atom true)
        keys-list (get category->keys :other)]
    (fn []
      (let [config (:config @state/app-state)
            section-vals (select-keys config keys-list)]
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
           [fork/form
            {:initial-values section-vals
             :keywordize-keys true
             :on-change (fn [{:keys [values]}]
                          (let [curr (:config @state/app-state)]
                            (state/update-config! (merge curr values))))}
            (fn [{:keys [values set-values handle-change] :as props}]
              [:div.grid.grid-cols-1.gap-6
               [:div.border.p-4.rounded-xl.bg-white.shadow-sm.h-full
                [:h3.font-bold.text-lg.text-gray-800 "Execution Settings"]
                [:div.grid.grid-cols-1.md:grid-cols-2.gap-4.mt-2
                 [field-wrapper :n-sims-screen
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-sims-screen"
                    :value (:n-sims-screen values)
                    :on-change handle-change}]]
                 [field-wrapper :n-sims-per-combo
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-sims-per-combo"
                    :value (:n-sims-per-combo values)
                    :on-change handle-change}]]
                 [field-wrapper :n-ev-ia
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-ev-ia"
                    :value (:n-ev-ia values)
                    :on-change handle-change}]]
                 [field-wrapper :n-ev-upd
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-ev-upd"
                    :value (:n-ev-upd values)
                    :on-change handle-change}]]
                 [field-wrapper :n-ev-pr3
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-ev-pr3"
                    :value (:n-ev-pr3 values)
                    :on-change handle-change}]]
                 [field-wrapper :n-ev-final
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-ev-final"
                    :value (:n-ev-final values)
                    :on-change handle-change}]]
                 [field-wrapper :n-screen-min-pass
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "n-screen-min-pass"
                    :value (:n-screen-min-pass values)
                    :on-change handle-change}]]
                 [field-wrapper :efficacy-hr-min
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "efficacy-hr-min"
                    :value (:efficacy-hr-min values)
                    :on-change handle-change}]]
                 [field-wrapper :futility-hr-max
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "futility-hr-max"
                    :value (:futility-hr-max values)
                    :on-change handle-change}]]
                 [field-wrapper :median-fu-target
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "median-fu-target"
                    :value (:median-fu-target values)
                    :on-change handle-change}]]
                 [field-wrapper :median-fu-tol
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "median-fu-tol"
                    :value (:median-fu-tol values)
                    :on-change handle-change}]]
                 [field-wrapper :hr-threshold
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "hr-threshold"
                    :value (:hr-threshold values)
                    :on-change handle-change}]]
                 [field-wrapper :seed
                  [:input.border.w-full.p-1.rounded.text-sm
                   {:type "number"
                    :name "seed"
                    :value (:seed values)
                    :on-change handle-change}]]
                 [field-wrapper :families
                  [families-input props :families]]]]])])]))))

(defn config-form []
  [:div.p-4.max-w-6xl.mx-auto
   [:div.flex.justify-between.items-center.mb-6
    [:h2.text-2xl.font-extrabold.text-gray-900
     "Simulation Configuration"]
    [:div.flex.gap-2
     [:span.text-sm.font-bold.text-gray-500.mr-2.self-center "PRESETS:"]
     [:button.px-3.py-1.text-xs.font-bold.rounded.border
      {:type "button"
       :class "bg-white hover:bg-gray-100 text-gray-700"
       :on-click #(state/update-config! state/default-config)}
      "Default"]
     [:button.px-3.py-1.text-xs.font-bold.rounded.border
      {:type "button"
       :class "bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
       :on-click #(state/update-config! state/light-config)}
      "Light"]]]

   [trial-timing-section]
   [grids-section]
   [tolerances-section]
   [execution-section]

   [:div.mt-8.flex.justify-center.gap-4
    [:button.text-gray-700.font-bold.px-6.py-4.rounded-xl.shadow-md.border
     {:type "button"
      :class "bg-white hover:bg-gray-100 transition-all border-gray-300"
      :on-click (fn []
                  (db/clear-cache))}
     "Clear Cache"]
    [:button.text-white.font-extrabold.px-8.py-4.rounded-xl.shadow-lg
     {:type "button"
      :class (str "bg-blue-600 hover:bg-blue-700 transition-all "
                  "transform hover:-translate-y-0.5")
      :on-click (fn []
                  (sim/start-simulation!)
                  (swap! state/app-state assoc :view :results))}
     "Run Simulation"]]])

(defn- config->nested [config]
  (into {} (for [[cat ks] category->keys]
             [cat (select-keys config ks)])))

(defn- nested->config [nested]
  (reduce merge {} (vals nested)))

(defn config-json []
  (let [config (:config @state/app-state)
        initial-json (js/JSON.stringify
                      (clj->js (config->nested config)) nil 2)]
    (fn []
      [fork/form
       {:initial-values {:json-text initial-json}
        :keywordize-keys true}
       (fn [{:keys [values set-values]}]
         (let [text (:json-text values)]
           [:div.p-4
            [:h2.text-xl.font-bold.mb-4 "Config (JSON)"]
            [:div.border.rounded {:style {:height "600px"}}
             [:> Editor {:height "100%"
                         :defaultLanguage "json"
                         :value text
                         :onChange (fn [val _]
                                     (set-values {:json-text val})
                                     (try
                                       (let [nested (js->clj
                                                      (js/JSON.parse val)
                                                      :keywordize-keys true)]
                                         (state/update-config!
                                          (nested->config nested)))
                                       (catch js/Error _)))}]]
            [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded
             {:type "button"
              :on-click (fn []
                          (try
                            (let [nested (js->clj
                                           (js/JSON.parse text)
                                           :keywordize-keys true)]
                              (state/update-config!
                               (nested->config nested)))
                            (catch js/Error _))
                          (sim/start-simulation!)
                          (swap! state/app-state
                                 assoc :view :results))}
             "Run Simulation"]]))])))

(defn- stage2-progress [progress]
  [:div
   [:p "Running Stage 2..."]
   [:progress.w-full {:value (:completed progress) :max (:total progress)}]
   [:p.text-sm
    (str (:completed progress) " / " (:total progress)
         " combos simulated")]])

(defn- translate-keys [data]
  (cond
    (map? data)
    (into {} (for [[k v] data]
               [(get key->label k (name k)) (translate-keys v)]))
    (coll? data)
    (mapv translate-keys data)
    :else data))

(defn- results-table [family items]
  (let [sort-col (r/atom nil)
        sort-asc? (r/atom true)
        filter-text (r/atom "")]
    (fn [family items]
      (when (seq items)
        (let [keys-to-show (->> (mapcat keys items)
                                distinct
                                (remove #(= % :family))
                                (sort-by name))
              q (str/lower-case (str/trim @filter-text))
              filtered-items (if (str/blank? q)
                               items
                               (filter
                                (fn [item]
                                  (some (fn [k]
                                          (let [v (get item k)]
                                            (str/includes?
                                             (str/lower-case (str v))
                                             q)))
                                        keys-to-show))
                               items))
              sorted-items (if-let [col @sort-col]
                             (sort-by (fn [item]
                                        (let [val (get item col)]
                                          (if (string? val)
                                            (str/lower-case val)
                                            val)))
                                      (if @sort-asc? compare #(compare %2 %1))
                                      filtered-items)
                             filtered-items)]
          [:div.mb-8
           [:div.flex.flex-col.sm:flex-row.gap-2.mb-3
            {:class "sm:justify-between sm:items-center"}
            [:h3.text-lg.font-bold.capitalize.text-gray-800
             (str (name family) " Family Table")]
            [:div.relative.w-full.sm:w-64
             [:input.border.p-1.px-2.rounded.text-sm.w-full
              {:type "text"
               :placeholder "Filter rows..."
               :value @filter-text
               :on-change #(reset! filter-text (.. % -target -value))}]]]
           [:div.overflow-x-auto.border.rounded-lg.shadow-sm
            [:table.min-w-full.divide-y.divide-gray-200.text-sm
             [:thead.bg-gray-50
              [:tr
               (for [k keys-to-show]
                 (let [is-active-sort? (= @sort-col k)]
                   ^{:key k}
                   [:th.px-4.py-2.text-left.font-semibold.text-gray-600
                    {:class "cursor-pointer select-none hover:bg-gray-100"
                     :on-click (fn []
                                 (if is-active-sort?
                                   (swap! sort-asc? not)
                                   (do
                                     (reset! sort-col k)
                                     (reset! sort-asc? true))))}
                    [:span.flex.items-center.gap-1
                     (get key->label k (name k))
                     (cond
                       (not is-active-sort?) "↕"
                       @sort-asc? "▲"
                       :else "▼")]]))]]
             [:tbody.divide-y.divide-gray-200.bg-white
              (if (empty? sorted-items)
                [:tr
                 [:td.px-4.py-8.text-center.text-gray-500
                  {:col-span (count keys-to-show)}
                  "No matching combinations found."]]
                (for [[idx item] (map-indexed vector sorted-items)]
                  ^{:key idx}
                  [:tr {:class (if (even? idx) "bg-white" "bg-gray-50")}
                   (for [k keys-to-show]
                     ^{:key k}
                     [:td.px-4.py-2.text-gray-700
                      (let [val (get item k)]
                        (if (float? val)
                          (.toFixed val 4)
                          (str val)))])]))]]]])))))

(defn- results-edn-view [results]
  (let [translated (into {} (for [[fam items] results]
                              [fam (translate-keys items)]))
        edn-str (with-out-str (pprint translated))]
    [:div.p-4
     [:h3.text-lg.font-bold.mb-2 "EDN View"]
     [:div.border.rounded-lg.overflow-hidden {:style {:height "500px"}}
      [:> Editor {:height "100%"
                  :defaultLanguage "clojure"
                  :theme "vs-dark"
                  :options {:readOnly true}
                  :value edn-str}]]]))

(defn results-view []
  (let [{:keys [results progress status]} @state/app-state]
    (r/with-let [active-tab (r/atom :charts)]
      [:div.p-4.results-view-wrapper
       [:div.flex.justify-between.items-center.mb-4
        [:h2.text-xl.font-bold.results-charts-container "Results"]
        (when (seq results)
          [:div.flex.gap-2.bg-gray-100.p-1.rounded-lg
           (for [[tab label] [[:charts "Charts"]
                              [:table "Table"]
                              [:edn "EDN View"]]]
             ^{:key tab}
             [:button.px-3.py-1.rounded-md.text-sm.transition-all
              {:class (if (= @active-tab tab)
                        "bg-white text-gray-800 shadow-sm font-semibold"
                        "text-gray-600 hover:text-gray-800")
               :on-click #(reset! active-tab tab)}
              label])])]
       (cond
         (= status :running-stage2) [stage2-progress progress]
         (seq results)
         (case @active-tab
           :charts [:div
                    (for [[fam items] results]
                      ^{:key fam} [vega/results-charts (name fam) items])]
           :table [:div
                   (for [[fam items] results]
                     ^{:key fam} [results-table fam items])]
           :edn [results-edn-view results])
         :else [:div.text-gray-500 "Run a simulation to see results."])])))

(defn- navigation-bar [active-page]
  [:header.bg-gray-800.text-white.shadow-md.mb-6
   [:div.container.mx-auto.px-4.py-3.flex.justify-between.items-center
    [:div.flex.items-center.gap-2.cursor-pointer
     {:on-click #(rf/dispatch [:navigate :home])}
     [:span.text-xl.font-extrabold.tracking-tight "Regal Fitter"]]
    [:nav.flex.gap-2
     (for [[page label] [[:home "Home"]
                         [:fitter "Fitter"]
                         [:placebo-stress "Placebo Stress"]
                         [:discovery "Discovery"]]]
       ^{:key page}
       [:button.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors
        {:class (if (= active-page page)
                  "bg-gray-950 text-white"
                  "text-gray-300 hover:bg-gray-700 hover:text-white")
         :on-click #(rf/dispatch [:navigate page])}
        label])]]])

(defn fitter-page []
  (let [state state/app-state]
    (fn []
      (let [view (:view @state)
            status (:status @state)]
        ^{:key view}
        [:div
         [:div.flex.gap-4.mb-4
          [:button.px-4.py-2.rounded
           {:class (if (= view :config-form)
                     "bg-gray-800 text-white"
                     "bg-gray-200")
            :on-click #(swap! state/app-state assoc :view :config-form)}
           "Form View"]
          [:button.px-4.py-2.rounded
           {:class (if (= view :config-json)
                     "bg-gray-800 text-white"
                     "bg-gray-200")
            :on-click #(swap! state/app-state assoc :view :config-json)}
           "JSON View"]
          [:button.px-4.py-2.rounded
           {:class (if (= view :results)
                     "bg-gray-800 text-white"
                     "bg-gray-200")
            :on-click #(swap! state/app-state assoc :view :results)}
           "Results"]]
         (when (= status :running-stage1)
           [:div.bg-yellow-100.p-4.mb-4
            "Running Stage 1 (Analytical Pre-filter)..."])
         (when (= status :error)
           [:div.bg-red-100.text-red-800.p-4.mb-4 (:error-message state)])
         ^{:key view}
         (case view
           :config-form [config-form]
           :config-json [config-json]
           :results [results-view])]))))

(defn main-view []
  (let [state @state/app-state
        active-page (:active-page state)
        view (:view state)]
    [:div.min-h-screen.bg-gray-50
     [navigation-bar active-page]
     [:div.container.mx-auto.p-4
      (case active-page
        :home [views/home-view]
        :fitter ^{:key view} [fitter-page]
        :placebo-stress [views/placebo-stress-view]
        :discovery [views/discovery-view]
        [views/home-view])]]))
