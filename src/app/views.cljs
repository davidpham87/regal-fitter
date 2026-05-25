(ns app.views
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [fork.reagent :as fork]
            [app.state :as state]
            [app.vega :as vega]
            [app.simulator :as sim]
            [app.discovery :as discovery]
            [app.stress-test.power :as power]))

(def ^:private btn-class
  (str "inline-block bg-blue-600 hover:bg-blue-700 "
       "text-white text-sm font-semibold "
       "px-4 py-2 rounded-lg transition-colors"))

(defn- navigate-button [page label class-str]
  [:button {:class (or class-str "text-blue-500 hover:underline font-semibold")
            :on-click #(rf/dispatch [:navigate page])}
   label])

(defn home-view []
  [:div.p-6.max-w-4xl.mx-auto
   [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Welcome to Regal Fitter"]
   [:p.text-gray-600.mb-8
    "A premium simulation dashboard for clinical trial design optimization."]
   [:div.grid.grid-cols-1.md:grid-cols-3.gap-6
    ;; Fitter Card
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
     {:class ["justify-between" "hover:shadow-md" "transition-all"]}
     [:div
      [:h2.text-xl.font-bold.text-gray-800.mb-2 "1. Fitter"]
      [:p.text-sm.text-gray-600.mb-4
       "Optimize and pre-filter trial design assumptions across Weibull, Cure,
        and Leaky Cure families with fast parallel simulations."]]
     [:div [navigate-button :fitter "Open Fitter" btn-class]]]
    ;; Placebo Stress Test Card
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
     {:class ["justify-between" "hover:shadow-md" "transition-all"]}
     [:div
      [:h2.text-xl.font-bold.text-gray-800.mb-2 "2. Placebo Stress Test"]
      [:p.text-sm.text-gray-600.mb-4
       "Assess placebo response distributions and calculate p-values of event
        times under simulated stress conditions."]]
     [:div [navigate-button :placebo-stress "Open Placebo Test" btn-class]]]
    ;; Discovery Card
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
     {:class ["justify-between" "hover:shadow-md" "transition-all"]}
     [:div
      [:h2.text-xl.font-bold.text-gray-800.mb-2 "3. Discovery"]
      [:p.text-sm.text-gray-600.mb-4
       "Explore and visualize survival curves and event accrual paths given
        user-controlled trial parameters."]]
     [:div [navigate-button :discovery "Open Discovery" btn-class]]]]

   ;; README Content Variation Section
   [:div.mt-12.pt-8.border-t
    [:h2.text-2xl.font-extrabold.text-gray-800.mb-4
     "About the REGAL Constraint Fitter"]
    [:p.text-gray-600.mb-6
     "This dashboard replicates and extends the constraint-based ABC
      (Approximate Bayesian Computation) model for estimating the probability
      of trial success in the REGAL Phase 3 trial of galinpepimut-S (GPS). It
      operates purely on publicly disclosed information without using Phase 2
      GPS data or historical AML benchmarks as biological priors."]

    [:div.grid.grid-cols-1.md:grid-cols-2.gap-8.mb-8
     [:div
      [:h3.text-lg.font-bold.text-gray-700.mb-3
       "Methodology & Model Families"]
      [:p.text-sm.text-gray-600.mb-3
       [:strong "Two-Stage ABC:"]
       " Combos are run through an analytical pre-filter "
       "(Stage 1) to reject parameter sets that cannot mathematically meet "
       "anchors. Surviving combos then run through trial simulations (Stage 2) "
       "to estimate empirical success probability."]
      [:p.text-sm.text-gray-600
       [:strong "Three Model Families:"]
       " Fits trial data using three distinct "
       "parametric assumptions: Weibull/Weibull (agnostic), standard "
       "Cure-fraction GPS (explicit plateau), and Leaky Cure GPS (cure tail "
       "with residual hazard rate to prevent immortality artifacts)."]]

     [:div.bg-gray-50.p-4.rounded-xl.border
      [:h3.text-xs.font-bold.text-gray-500.uppercase.tracking-wider.mb-3
       "Public Constraints Applied"]
      [:div.space-y-2
       (for [[k v] [["Total Enrolled" "126 patients (1:1 randomization)"]
                    ["Interim Analysis" "60 events @ ~m46 (Dec 2024)"]
                    ["Data Update" "72 events @ ~m58 (Dec 2025)"]
                    ["Final Analysis" "80 events target"]
                    ["Pool Blinded mOS" "> 12 months at IA"]
                    ["Median Follow-Up" "13.5 ± 2 months at IA"]
                    ["Success HR threshold" "< 0.636 (per SAP)"]]]
         ^{:key k}
         [:div.flex.justify-between.text-xs.border-b.pb-1
          [:span.font-semibold.text-gray-600 k]
          [:span.text-gray-800.font-medium v]])]]]

    [:div.bg-blue-50.border.border-blue-100.p-5.rounded-xl.mb-6
     [:h4.text-sm.font-bold.text-blue-800.mb-2
      "Key Methodological Insights: Point Fit vs. Posterior Averaging"]
     [:p.text-xs.text-blue-900.leading-relaxed.mb-2
      "This engine reports both *Best-Fit Point Estimates* and *Posterior
       Averages* side-by-side. Point estimation selects the single parameter
       set that minimizes max-residuals against the public anchors, yielding
       ~100% P(success) under strong cure assumptions."]
     [:p.text-xs.text-blue-900.leading-relaxed
      "Posterior averaging, however, integrates across all parameter regimes
       that are mathematically consistent with public anchors. This yields a
       more robust, smooth marginal success probability (ranging from 66% to
       78% depending on the model family) and avoids point-fit fragility."]
     [:p.text-xs.text-gray-400.italic.mt-3.pt-2.border-t.border-blue-100
      "Note: This is an independent analytical exercise and does not
       constitute financial advice. SLS long position held by the author."]]]])

(defn- stress-test-form-content
  [{:keys [values set-values handle-change]}]
  [:div.bg-white.p-6.rounded-xl.shadow-sm.border.mb-6
   [:h2.text-xl.font-bold.mb-4 "Configuration"]
   [:div.grid.grid-cols-1.md:grid-cols-3.gap-4
    [:div
     [:label.block.text-sm.font-semibold.text-gray-700
      "mOS Grid (start, stop, step)"]
     [:div.flex.gap-2.mt-1
      (doall
       (for [i (range 3)]
         ^{:key (str "mos-" i)}
         [:input.border.w-full.p-1.rounded.text-sm
          {:type "number" :step "0.1"
           :value (get-in values [:mos-grid i])
           :on-change (fn [e]
                        (let [v (js/parseFloat (.. e -target -value))
                              new-vec (assoc (:mos-grid values) i v)]
                          (set-values {:mos-grid new-vec})))}]))]]
    [:div
     [:label.block.text-sm.font-semibold.text-gray-700
      "k Grid (start, stop, step)"]
     [:div.flex.gap-2.mt-1
      (doall
       (for [i (range 3)]
         ^{:key (str "k-" i)}
         [:input.border.w-full.p-1.rounded.text-sm
          {:type "number" :step "0.1"
           :value (get-in values [:k-grid i])
           :on-change (fn [e]
                        (let [v (js/parseFloat (.. e -target -value))
                              new-vec (assoc (:k-grid values) i v)]
                          (set-values {:k-grid new-vec})))}]))]]
    [:div
     [:label.block.text-sm.font-semibold.text-gray-700 "Sims per Combo"]
     [:input.border.w-full.p-1.rounded.text-sm.mt-1
      {:type "number"
       :name "n-sims"
       :value (:n-sims values)
       :on-change handle-change}]]]
   [:div.mt-4.flex.justify-center
    [:button.bg-blue-600.hover:bg-blue-700.text-white
     {:class "font-bold px-6 py-2 rounded-lg shadow"
      :on-click (fn []
                  (js/console.log "UI: Clicked Run Stress Test")
                  (sim/start-stress-test! values))}
     "Run Stress Test"]]])

(defn- stress-test-form []
  (let [config (:stress-test-config @state/app-state)]
    [fork/form
     {:initial-values config
      :keywordize-keys true
      :on-change (fn [{:keys [values]}]
                   (state/update-stress-test-config! values))}
     stress-test-form-content]))

(defn- sortable-header [label k sort-state]
  (let [{curr-key :key desc? :desc?} @sort-state]
    [:th.px-4.py-2.text-left.cursor-pointer.select-none.hover:bg-gray-100
     {:on-click (fn []
                  (if (= curr-key k)
                    (swap! sort-state update :desc? not)
                    (reset! sort-state {:key k :desc? false})))}
     (str label
          (when (= curr-key k)
            (if desc? " ↓" " ↑")))]))

(defn- stress-test-results-view []
  (let [sort-state (r/atom {:key :mos :desc? false})]
    (fn []
      (let [st @state/app-state
            results (:stress-test-results st)
            status (:stress-test-status st)
            progress (:stress-test-progress st)
            {curr-key :key desc? :desc?} @sort-state
            sorted-results (let [sorted (sort-by curr-key results)]
                             (if desc? (reverse sorted) sorted))]
        [:div
         (when (= status :running)
           [:div.mb-6
            [:p.text-sm.mb-1
             (str "Running simulations: "
                  (:completed progress) " / " (:total progress))]
            [:div.w-full.bg-gray-200.rounded-full.h-2
             [:div.bg-blue-600.h-2.rounded-full
              {:style {:width (str (if (pos? (:total progress))
                                     (* 100 (/ (:completed progress)
                                               (:total progress)))
                                     0)
                                   "%")}}]]])
         (when (seq results)
           [:div
            [:h2.text-xl.font-bold.mb-4 "Results Summary"]
            [vega/stress-test-charts results]
            [:div.overflow-x-auto.border.rounded-lg.shadow-sm.mt-8
             [:table.min-w-full.divide-y.divide-gray-200.text-sm
              [:thead.bg-gray-50
               [:tr
                [sortable-header "mOS" :mos sort-state]
                [sortable-header "k" :k sort-state]
                [sortable-header "p_joint" :p_joint sort-state]
                [sortable-header "E[IA]" :expected_ev_ia sort-state]
                [sortable-header "E[Upd]" :expected_inc_upd sort-state]
                [sortable-header "E[PR3]" :expected_inc_pr3 sort-state]
                [sortable-header "Residual" :residual sort-state]]]
              [:tbody.divide-y.divide-gray-200.bg-white
               (doall
                (for [r sorted-results]
                  ^{:key (str (:mos r) "-" (:k r))}
                  [:tr
                   [:td.px-4.py-2 (:mos r)]
                   [:td.px-4.py-2 (:k r)]
                   [:td.px-4.py-2 (str (.toFixed (* 100 (:p_joint r)) 2) "%")]
                   [:td.px-4.py-2 (.toFixed (:expected_ev_ia r) 1)]
                   [:td.px-4.py-2 (.toFixed (:expected_inc_upd r) 1)]
                   [:td.px-4.py-2 (.toFixed (:expected_inc_pr3 r) 1)]
                   [:td.px-4.py-2 (.toFixed (:residual r) 2)]]))]]]])]))))

(defn- placebo-explanation-view []
  [:div.p-6.rounded-xl.border.mb-6
   {:class ["bg-gradient-to-r" "from-blue-50" "to-indigo-50"
            "border-blue-100"]}
   [:h3.text-lg.font-bold.text-blue-900.mb-3
    "Methodology & Interpretation Guide"]
   [:p.text-sm.text-blue-950.mb-4
    "This stress test evaluates the likelihood of observed clinical trial "
    "milestones under the Null Hypothesis (H0) that both treatment (GPS) and "
    "control (BAT) arms have identical survival profiles."]
   [:div.grid.grid-cols-1.md:grid-cols-2.gap-6.text-xs.text-blue-900
    [:div
     [:h4.font-semibold.text-blue-950.mb-2 "Observed Stress Milestones:"]
     [:ul.list-disc.pl-4.space-y-1
      [:li [:strong "Interim Analysis:"]
       " Event count at month 46 is ≤ 60 events."]
      [:li [:strong "Deceleration:"]
       " Incremental events between months 46 and 58 is ≤ 12 events."]
      [:li [:strong "Extension:"]
       " Incremental events between months 58 and 63 is ≤ 6 events."]]]
    [:div
     [:h4.font-semibold.text-blue-950.mb-2 "Key Metrics Explained:"]
     [:ul.list-disc.pl-4.space-y-1
      [:li [:strong "p_joint:"]
       " The probability of a trial meeting ALL three stress "
       "milestones simultaneously under H0. A low value (e.g. < 5%) suggests "
       "H0 is highly unlikely."]
      [:li [:strong "Expected Events:"]
       " The average event counts at each milestone across all simulations."]
      [:li [:strong "Residual:"]
       " The maximum absolute discrepancy between the "
       "simulated expected events and actual observed events."]]]]])

(defn- power-analysis-form-content
  [{:keys [values handle-change]}]
  (let [alpha (js/parseFloat (:alpha values))
        power-val (js/parseFloat (:power values))
        p-event (js/parseFloat (:p-event values))
        bat-range (:bat-mos-range values)
        gps-range (:gps-mos-range values)
        grid (power/power-grid bat-range gps-range alpha power-val p-event)
        implied-p (power/implied-event-probability
                   (:n-total values)
                   (:bat-mos-ref values)
                   (:gps-mos-ref values)
                   alpha
                   power-val)]
    [:div.bg-white.p-6.rounded-xl.shadow-sm.border.mb-6
     [:h2.text-xl.font-bold.mb-4 "Statistical Power & Sample Size Analysis"]
     [:p.text-sm.text-gray-600.mb-4
      "Schoenfeld log-rank approximation under proportional hazards."]

     ;; Form Inputs
     [:div.grid.grid-cols-1.md:grid-cols-4.gap-4.mb-6
      [:div
       [:label.block.text-xs.font-semibold.text-gray-700
        "alpha (One-sided)"]
       [:input.border.w-full.p-1.rounded.text-sm.mt-1
        {:type "number" :step "0.005" :name "alpha"
         :value (:alpha values) :on-change handle-change}]]
      [:div
       [:label.block.text-xs.font-semibold.text-gray-700
        "Target Power"]
       [:input.border.w-full.p-1.rounded.text-sm.mt-1
        {:type "number" :step "0.05" :name "power"
         :value (:power values) :on-change handle-change}]]
      [:div
       [:label.block.text-xs.font-semibold.text-gray-700
        "Event Probability"]
       [:input.border.w-full.p-1.rounded.text-sm.mt-1
        {:type "number" :step "0.01" :name "p-event"
         :value (:p-event values) :on-change handle-change}]]
      [:div
       [:label.block.text-xs.font-semibold.text-gray-700
        "Reference Trial N"]
       [:input.border.w-full.p-1.rounded.text-sm.mt-1
        {:type "number" :name "n-total"
         :value (:n-total values) :on-change handle-change}]]]

     ;; Ranges and Implied probability Info
     [:div.bg-blue-50.p-4.rounded-lg.border.border-blue-100.mb-6
      [:p.text-xs.text-blue-900.leading-relaxed
       [:strong "Implied Baseline Event Probability: "]
       (str (.toFixed (* 100 implied-p) 1) "% ")
       "(Requires " (.toFixed (* (:n-total values) implied-p) 0)
       " events under standard Schoenfeld assumptions to achieve "
       (* 100 power-val) "% power at BAT=" (:bat-mos-ref values)
       " vs GPS=" (:gps-mos-ref values) " months.)"]]

     ;; Charts
     [:div.flex.flex-col.lg:flex-row.gap-6.mb-6
      [:div.flex-1.bg-gray-50.p-3.rounded-xl.border
       [vega/power-heatmap grid]]
      [:div.flex-1.bg-gray-50.p-3.rounded-xl.border
       [vega/power-line-chart grid]]]

     ;; Summary scenarios table
     [:div.overflow-x-auto.border.rounded-lg.shadow-sm
      [:table.min-w-full.divide-y.divide-gray-200.text-xs
       [:thead.bg-gray-50
        [:tr
         [:th.px-4.py-2.text-left "BAT mOS"]
         [:th.px-4.py-2.text-left "GPS mOS"]
         [:th.px-4.py-2.text-left "HR"]
         [:th.px-4.py-2.text-left "Events Required"]
         [:th.px-4.py-2.text-left "N Required"]
         [:th.px-4.py-2.text-left "Sufficient (N=126)?"]]]
       [:tbody.divide-y.divide-gray-200.bg-white
        (doall
         (for [scenario (filter #(contains? #{6.0 8.0 10.0 12.0} (:bat-mos %))
                                grid)]
           ^{:key (str "pow-" (:bat-mos scenario) "-" (:gps-mos scenario))}
           [:tr
            [:td.px-4.py-2 (:bat-mos scenario)]
            [:td.px-4.py-2 (:gps-mos scenario)]
            [:td.px-4.py-2 (.toFixed (:hr scenario) 2)]
            [:td.px-4.py-2 (.toFixed (:events-required scenario) 1)]
            [:td.px-4.py-2 (.toFixed (:n-required scenario) 0)]
            [:td.px-4.py-2
             (if (<= (:n-required scenario) (:n-total values))
               [:span.text-green-600.font-bold "Yes"]
               [:span.text-red-600.font-bold "No"])]]))]]]]))

(defn- power-analysis-view []
  (let [config (:power-config @state/app-state)]
    [fork/form
     {:initial-values config
      :keywordize-keys true
      :on-change (fn [{:keys [values]}]
                   (state/update-power-config! values))}
     power-analysis-form-content]))

(defn placebo-stress-view []
  [:div.p-6.max-w-6xl.mx-auto
   [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Placebo Stress Test"]
   [:p.text-gray-600.mb-6
    "Assess the likelihood of observed trial milestones under various "
    "Null Hypothesis (H0) scenarios."]
   [placebo-explanation-view]
   #_[power-analysis-view]
   [stress-test-form]
   [stress-test-results-view]])

(defn discovery-view []
  [discovery/discovery-view])
