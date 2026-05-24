(ns app.views
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.state :as state]
            [app.vega :as vega]
            [app.simulator :as sim]))

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
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm
     {:class "hover:shadow-md transition-all"}
     [:h2.text-xl.font-bold.text-gray-800.mb-2 "1. Fitter"]
     [:p.text-sm.text-gray-600.mb-4
      "Optimize and pre-filter trial design assumptions across Weibull, Cure,
       and Leaky Cure families with fast parallel simulations."]
     [navigate-button :fitter "Open Fitter" btn-class]]
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm
     {:class "hover:shadow-md transition-all"}
     [:h2.text-xl.font-bold.text-gray-800.mb-2 "2. Placebo Stress Test"]
     [:p.text-sm.text-gray-600.mb-4
      "Assess placebo response distributions and calculate p-values of event
       times under simulated stress conditions."]
     [navigate-button :placebo-stress "Open Placebo Test" btn-class]]
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm
     {:class "hover:shadow-md transition-all"}
     [:h2.text-xl.font-bold.text-gray-800.mb-2 "3. Discovery"]
     [:p.text-sm.text-gray-600.mb-4
      "Explore and visualize survival curves and event accrual paths given
       user-controlled trial parameters."]
     [navigate-button :discovery "Open Discovery" btn-class]]]])

(defn- stress-test-form []
  (let [config (:stress-test-config @state/app-state)]
    [:div.bg-white.p-6.rounded-xl.shadow-sm.border.mb-6
     [:h2.text-xl.font-bold.mb-4 "Configuration"]
     [:div.grid.grid-cols-1.md:grid-cols-3.gap-4
      [:div
       [:label.block.text-sm.font-semibold.text-gray-700 "mOS Grid (start, stop, step)"]
       [:div.flex.gap-2.mt-1
        (for [i (range 3)]
          (let [v (nth (:mos-grid config) i)]
            ^{:key (str "mos-" i)}
            [:input.border.w-full.p-1.rounded.text-sm
             {:type "number" :step "0.1"
              :defaultValue (if (js/isNaN v) "" v)
              :on-change (fn [e]
                           (let [nv (js/parseFloat (.. e -target -value))
                                 new-grid (assoc (:mos-grid config) i nv)]
                             (state/set-stress-test-config! :mos-grid new-grid)))}]))]]
      [:div
       [:label.block.text-sm.font-semibold.text-gray-700 "k Grid (start, stop, step)"]
       [:div.flex.gap-2.mt-1
        (for [i (range 3)]
          (let [v (nth (:k-grid config) i)]
            ^{:key (str "k-" i)}
            [:input.border.w-full.p-1.rounded.text-sm
             {:type "number" :step "0.1"
              :defaultValue (if (js/isNaN v) "" v)
              :on-change (fn [e]
                           (let [nv (js/parseFloat (.. e -target -value))
                                 new-grid (assoc (:k-grid config) i nv)]
                             (state/set-stress-test-config! :k-grid new-grid)))}]))]]
      [:div
       [:label.block.text-sm.font-semibold.text-gray-700 "Sims per Combo"]
       [:input.border.w-full.p-1.rounded.text-sm.mt-1
        {:type "number" :defaultValue (:n-sims config)
         :on-change #(state/set-stress-test-config! :n-sims (js/parseInt (.. % -target -value)))}]]]
     [:div.mt-4.flex.justify-center
      [:button.bg-blue-600.hover:bg-blue-700.text-white.font-bold.px-6.py-2.rounded-lg.shadow
       {:on-click (fn [] (sim/start-stress-test!))}
       "Run Stress Test"]]]))

(defn- stress-test-results-view []
  (let [st @state/app-state
        results (:stress-test-results st)
        status (:stress-test-status st)
        progress (:stress-test-progress st)]
    [:div
     (when (= status :running)
       [:div.mb-6
        [:p.text-sm.mb-1 (str "Running simulations: " (:completed progress) " / " (:total progress))]
        [:progress.w-full {:value (:completed progress) :max (:total progress)}]])
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
    "Assess the likelihood of observed trial milestones under various Null Hypothesis (H0) scenarios."]
   [stress-test-form]
   [stress-test-results-view]])

(defn discovery-view []
  [:div.p-6.max-w-4xl.mx-auto
   [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Discovery View"]
   [:p.text-gray-600.mb-6
    "Explore and plot survival curves and event accrual given parameters."]
   [:div.border.border-dashed.border-gray-300.rounded-xl.p-12.text-center
    {:class "bg-gray-50"}
    [:p.text-gray-400.italic
     "Survival curve and event plotting interface will be loaded here."]]])
