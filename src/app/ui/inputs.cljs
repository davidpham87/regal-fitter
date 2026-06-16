(ns app.ui.inputs
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(def key->label
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
   :bat-surv-36m-max "BAT 36m Survival Max"
   :gps-med-grid-lo "GPS Median Grid Low"
   :gps-med-grid-hi "GPS Median Grid High"
   :gps-med-grid-n "GPS Median Grid N"
   :gps-shape-grid "GPS Shape Grid"
   :cure-frac-grid "Cure Fraction Grid"
   :cure-unc-med-grid "Cure GPS Uncured Median Grid"
   :cure-unc-shape-grid "Cure Uncured Shape Grid"
   :leaky-cure-frac-grid "Leaky Cure Fraction Grid"
   :leaky-unc-med-grid "Leaky GPS Uncured Median Grid"
   :leaky-unc-shape-grid "Leaky Uncured Shape Grid"
   :leak-grid "Leak Grid"
   :bat-leaky-cure-frac-grid "BAT Leaky Cure Fraction Grid"
   :bat-leaky-unc-med-grid "BAT Leaky Uncured Median Grid"
   :bat-leaky-unc-shape-grid "BAT Leaky Uncured Shape Grid"
   :bat-leak-grid "BAT Leak Grid"
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
   :n-sims-aggregation "Sims to Aggregate (N)"
   :median-bat-alive-upd "Median BAT Alive UPD"
   :median-gps-alive-upd "Median GPS Alive UPD"
   :median-bat-alive-final "Median BAT Alive Final (T80)"
   :median-gps-alive-final "Median GPS Alive Final (T80)"})

(def key->help
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
   :bat-surv-36m-max
   (str "Maximum survivorship expected threshold at 36 months for the BAT curve. "
        "Set to 0 or leave empty to disable.")
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
   :bat-leaky-cure-frac-grid "BAT Leaky cure-fraction grid (start, stop, step)."
   :bat-leaky-unc-med-grid "BAT Leaky uncured median grid (start, stop, step)."
   :bat-leaky-unc-shape-grid "BAT Leaky uncured shape grid (start, stop, step)."
   :bat-leak-grid "BAT Leaky leak-rate grid (start, stop, step)."
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
   :families "Enabled model distribution families."
   :n-sims-aggregation
   "Number of simulations to sample and aggregate for plotting."})

(defn- parse-vector [val]
  (try
    (let [parsed (js/JSON.parse val)]
      (if (js/Array.isArray parsed)
        (js->clj parsed)
        nil))
    (catch js/Error _ nil)))

(defn- parse-float-safe [s default-val]
  (let [p (js/parseFloat s)]
    (if (js/isNaN p) default-val p)))

(defn parse-int [v]
  (if (str/blank? v)
    ""
    (let [p (js/parseInt v 10)]
      (if (js/isNaN p) v p))))

(defn parse-double-safe [v]
  (if (str/blank? v)
    ""
    (let [p (js/parseFloat v)]
      (if (js/isNaN p) v p))))

(defn field-wrapper [key-name child-el]
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

(defn num-input [props key-name parser]
  (let [val (get (:values props) key-name)]
    [:input.border.w-full.p-1.rounded.text-sm
     {:type "number"
      :step "any"
      :value val
      :on-change (fn [e]
                   (let [v (.. e -target -value)
                         parsed (parser v)]
                     ((:set-values props) {key-name parsed})))}]))

(defn checkbox-input [props key-name]
  (let [val (get (:values props) key-name)]
    [:input.mt-1
     {:type "checkbox"
      :checked (boolean val)
      :on-change (fn [e]
                   ((:set-values props)
                    {key-name (.. e -target -checked)}))}]))

(defn vector-input [props key-name]
  (let [curr-val (get (:values props) key-name)
        text-val (r/atom (js/JSON.stringify (clj->js curr-val)))]
    (fn [props key-name]
      (let [c-val (get (:values props) key-name)]
        (when-not (= (parse-vector @text-val) c-val)
          (reset! text-val (js/JSON.stringify (clj->js c-val)))))
      [:input.border.w-full.p-1.rounded.text-sm
       {:type "text"
        :value @text-val
        :on-change (fn [e]
                     (let [v (.. e -target -value)]
                       (reset! text-val v)
                       (when-let [parsed (parse-vector v)]
                         ((:set-values props) {key-name parsed}))))}])))

(defn grid-input [props key-name]
  (let [[start stop step] (get (:values props) key-name)
        start-val (r/atom (str start))
        stop-val (r/atom (str stop))
        step-val (r/atom (str step))]
    (fn [props key-name]
      (let [[c-start c-stop c-step] (get (:values props) key-name)]
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
                           ((:set-values props)
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
                           ((:set-values props)
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
                           ((:set-values props)
                            {key-name [(parse-float-safe @start-val 0.0)
                                       (parse-float-safe @stop-val 0.0)
                                       parsed]}))))}]]])))

(defn families-input [props key-name]
  (let [curr-val (get (:values props) key-name)
        all-families ["weibull" "leaky" "cure"]
        active-set (set curr-val)]
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
                           ((:set-values props) {key-name new-val})))}]
          [:span.ml-2.capitalize fam]]))]))
