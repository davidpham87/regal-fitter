(ns app.views
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.state :as state]
            [app.vega :as vega]
            [app.simulator :as sim]
            [app.discovery :as discovery]))

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
       "**Two-Stage ABC:** Combos are run through an analytical pre-filter
        (Stage 1) to reject parameter sets that cannot mathematically meet
        anchors. Surviving combos then run through trial simulations (Stage 2)
        to estimate empirical success probability."]
      [:p.text-sm.text-gray-600
       "**Three Model Families:** Fits trial data using three distinct
        parametric assumptions: Weibull/Weibull (agnostic), standard
        Cure-fraction GPS (explicit plateau), and Leaky Cure GPS (cure tail
        with residual hazard rate to prevent immortality artifacts)."]]

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

(defn- stress-test-form []
  (let [config (:stress-test-config @state/app-state)]
    [:div.bg-white.p-6.rounded-xl.shadow-sm.border.mb-6
     [:h2.text-xl.font-bold.mb-4 "Configuration"]
     [:div.grid.grid-cols-1.md:grid-cols-3.gap-4
      [:div
       [:label.block.text-sm.font-semibold.text-gray-700
        "mOS Grid (start, stop, step)"]
       [:div.flex.gap-2.mt-1
        (doall
         (for [i (range 3)]
           (let [v (nth (:mos-grid config) i)]
             ^{:key (str "mos-" i)}
             [:input.border.w-full.p-1.rounded.text-sm
              {:type "number" :step "0.1"
               :defaultValue (if (js/isNaN v) "" v)
               :on-change (fn [e]
                            (let [nv (js/parseFloat (.. e -target -value))
                                  new-grid (assoc (:mos-grid config) i nv)]
                              (state/set-stress-test-config!
                               :mos-grid new-grid)))}])))]]
      [:div
       [:label.block.text-sm.font-semibold.text-gray-700
        "k Grid (start, stop, step)"]
       [:div.flex.gap-2.mt-1
        (doall
         (for [i (range 3)]
           (let [v (nth (:k-grid config) i)]
             ^{:key (str "k-" i)}
             [:input.border.w-full.p-1.rounded.text-sm
              {:type "number" :step "0.1"
               :defaultValue (if (js/isNaN v) "" v)
               :on-change (fn [e]
                            (let [nv (js/parseFloat (.. e -target -value))
                                  new-grid (assoc (:k-grid config) i nv)]
                              (state/set-stress-test-config!
                               :k-grid new-grid)))}])))]]
      [:div
       [:label.block.text-sm.font-semibold.text-gray-700 "Sims per Combo"]
       [:input.border.w-full.p-1.rounded.text-sm.mt-1
        {:type "number" :value (:n-sims config)
         :on-change (fn [e]
                      (state/set-stress-test-config!
                       :n-sims (js/parseInt (.. e -target -value))))}]]]
     [:div.mt-4.flex.justify-center
      [:button.bg-blue-600.hover:bg-blue-700.text-white
       {:class "font-bold px-6 py-2 rounded-lg shadow"
        :on-click (fn []
                    (js/console.log "UI: Clicked Run Stress Test")
                    (sim/start-stress-test!))}
       "Run Stress Test"]]]))

(defn- stress-test-results-view []
  (let [st @state/app-state
        results (:stress-test-results st)
        status (:stress-test-status st)
        progress (:stress-test-progress st)]
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
            [:th.px-4.py-2.text-left "mOS"]
            [:th.px-4.py-2.text-left "k"]
            [:th.px-4.py-2.text-left "p_joint"]
            [:th.px-4.py-2.text-left "E[IA]"]
            [:th.px-4.py-2.text-left "E[Upd]"]
            [:th.px-4.py-2.text-left "E[PR3]"]
            [:th.px-4.py-2.text-left "Residual"]]]
          [:tbody.divide-y.divide-gray-200.bg-white
           (doall
            (for [r (sort-by :mos results)]
              ^{:key (str (:mos r) "-" (:k r))}
              [:tr
               [:td.px-4.py-2 (:mos r)]
               [:td.px-4.py-2 (:k r)]
               [:td.px-4.py-2 (str (.toFixed (* 100 (:p_joint r)) 2) "%")]
               [:td.px-4.py-2 (.toFixed (:expected_ev_ia r) 1)]
               [:td.px-4.py-2 (.toFixed (:expected_inc_upd r) 1)]
               [:td.px-4.py-2 (.toFixed (:expected_inc_pr3 r) 1)]
               [:td.px-4.py-2 (.toFixed (:residual r) 2)]]))]]]])]))

(defn placebo-stress-view []
  [:div.p-6.max-w-6xl.mx-auto
   [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Placebo Stress Test"]
   [:p.text-gray-600.mb-6
    "Assess the likelihood of observed trial milestones under various "
    "Null Hypothesis (H0) scenarios."]
   [stress-test-form]
   [stress-test-results-view]])

(defn discovery-view []
  [discovery/discovery-view])
