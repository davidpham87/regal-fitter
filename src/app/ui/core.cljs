(ns app.ui.core
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.simulator :as sim]
            [app.db :as db]
            [app.views.core :as views]
            [app.ui.sections :as sections]
            [app.ui.results :as results]
            [app.ui.enrollment :as enrollment]
            [re-frame.core :as rf]
            [fork.re-frame :as fork]
            [reitit.frontend.easy :as rfe]
            [app.components.editor :refer [code-editor]]
            [app.components.tabs :refer [tab-bar]]))

(def ^:private category->keys
  {:trial [:n-total :n-per-arm :enroll-bands :enforce-no-80-by-today
           :t-now :no-80-slack-months]
   :timing [:t-ia :tol-ia :t-upd :tol-upd :t-pr3 :tol-pr3 :use-pr3-anchor]
   :bat [:bat-med-grid :bat-shape-grid :bat-strat-bin
         :bat-leaky-cure-frac-grid :bat-leaky-unc-med-grid
         :bat-leaky-unc-shape-grid :bat-leak-grid]
   :gps [:gps-med-grid-lo :gps-med-grid-hi :gps-med-grid-n :gps-shape-grid]
   :cure [:cure-frac-grid :cure-unc-med-grid :cure-unc-shape-grid]
   :leaky [:leaky-cure-frac-grid :leaky-unc-med-grid :leaky-unc-shape-grid
           :leak-grid]
   :prefilter [:prefilter-tol-ia :prefilter-tol-upd :prefilter-tol-pr3
               :tol-increment-ia-upd :tol-increment-upd-pr3
               :pool-mos-min-at-ia :bat-surv-36m-max]
   :other [:n-sims-screen :n-sims-per-combo :n-ev-ia :n-ev-upd :n-ev-pr3
           :n-ev-final :n-screen-min-pass :efficacy-hr-min :futility-hr-max
           :median-fu-target :median-fu-tol :hr-threshold :seed :families
           :n-sims-aggregation]})

(defn config-form []
  (fn []
    (let [initial-config @(rf/subscribe [:config])]
      [:div.p-4.max-w-6xl.mx-auto
       [:div.flex.justify-between.items-center.mb-6
        [:h2.text-2xl.font-extrabold.text-gray-900
         "Simulation Configuration"]
        [:div.flex.gap-2
         [:span.text-sm.font-bold.text-gray-500.mr-2.self-center "PRESETS:"]
         [:button.px-3.py-1.text-xs.font-bold.rounded.border
          {:type "button"
           :class "bg-white hover:bg-gray-100 text-gray-700"
           :on-click #(rf/dispatch [:reset-config state/default-config])}
          "Default"]
         [:button.px-3.py-1.text-xs.font-bold.rounded.border
          {:type "button"
           :class (str "bg-blue-50 hover:bg-blue-100 "
                       "text-blue-700 border-blue-200")
           :on-click #(rf/dispatch [:reset-config state/light-config])}
          "Light"]
         [:button.px-3.py-1.text-xs.font-bold.rounded.border
          {:type "button"
           :class (str "bg-green-50 hover:bg-green-100 "
                       "text-green-700 border-green-200")
           :on-click #(rf/dispatch [:reset-config state/py-config])}
          "Python"]]]

       [fork/form
        {:initial-values initial-config
         :keywordize-keys true
         :on-change (fn [{:keys [values]}]
                      (rf/dispatch [:update-config values]))}
        (fn [props]
          [:div
           [sections/trial-timing-section props]
           [sections/grids-section props]
           [sections/tolerances-section props]
           [sections/execution-section props]])]

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
                      (rf/dispatch [:set-view :results]))}
         "Run Simulation"]]])))

(defn- config->nested [config]
  (into (sorted-map)
        (for [[cat ks] category->keys]
          [cat (into (sorted-map) (select-keys config ks))])))

(defn- nested->config [nested]
  (reduce merge {} (vals nested)))

(defn config-json []
  (let [local-text (r/atom "")
        last-committed (atom "")
        timer-id (atom nil)
        focused? (r/atom false)
        commit-changes!
        (fn [val]
          (when-let [tid @timer-id]
            (js/clearTimeout tid)
            (reset! timer-id nil))
          (when-not (= val @last-committed)
            (try
              (let [nested (js->clj (js/JSON.parse val)
                                    :keywordize-keys true)]
                (rf/dispatch [:update-config (nested->config nested)])
                (reset! last-committed val))
              (catch js/Error _))))]
    (fn []
      (let [config @(rf/subscribe [:config])
            nested-config (config->nested config)
            expected-json (js/JSON.stringify
                           (clj->js nested-config) nil 2)]
        (when-not @focused?
          (when-not (= (try (js->clj (js/JSON.parse @local-text)
                                     :keywordize-keys true)
                            (catch js/Error _ nil))
                       nested-config)
            (reset! local-text expected-json)
            (reset! last-committed expected-json)))
        [:div.p-4
         [:h2.text-xl.font-bold.mb-4 "Config (JSON)"]
         [code-editor
          {:height "600px"
           :language "json"
           :value @local-text
           :on-change (fn [val _]
                        (reset! local-text val)
                        (reset! focused? true)
                        (when-let [tid @timer-id]
                          (js/clearTimeout tid))
                        (reset! timer-id
                                (js/setTimeout
                                 #(do (commit-changes! val)
                                      (reset! focused? false))
                                 2000)))
           :on-blur (fn []
                      (commit-changes! @local-text)
                      (reset! focused? false))}]
         [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded
          {:type "button"
           :on-click (fn []
                       (commit-changes! @local-text)
                       (reset! focused? false)
                       (sim/start-simulation!)
                       (rf/dispatch [:set-view :results]))}
          "Run Simulation"]]))))

(defn- navigation-bar [active-page]
  (let [menu-open? (r/atom false)]
    (fn [active-page]
      [:header.bg-gray-800.text-white.shadow-md.mb-6
       [:div.container.mx-auto.px-4.py-3
        [:div.flex.justify-between.items-center
         [:a.flex.items-center.gap-2.cursor-pointer
          {:href (rfe/href :home)}
          [:span.text-xl.font-extrabold.tracking-tight "Regal Fitter"]]

         ;; Desktop & Mobile Menu Trigger (transforming topbar as menu button with drawer)
         [:div.flex.items-center.gap-2
          [:button.p-2.rounded-lg.bg-gray-700.hover:bg-gray-600.transition-colors.flex.items-center.gap-2
           {:on-click #(swap! menu-open? not)
            :aria-label "Toggle navigation menu"}
           [:svg.w-6.h-6 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
            (if @menu-open?
              [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M6 18L18 6M6 6l12 12"}]
              [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M4 6h16M4 12h16M4 18h16"}])]
           [:span.text-sm.font-semibold.pr-1 "Menu"]]]]

        ;; Off-canvas navigation drawer / panel (shown when menu is open)
        (when @menu-open?
          [:div.fixed.inset-0.z-50.flex.justify-end
           ;; Overlay backdrop
           [:div.fixed.inset-0.bg-black.bg-opacity-50.transition-opacity
            {:on-click #(reset! menu-open? false)}]
           ;; Drawer panel
           [:div.relative.w-80.max-w-full.bg-gray-900.h-full.p-6.shadow-2xl.flex.flex-col.gap-6.z-10
            [:div.flex.justify-between.items-center.border-b.border-gray-800.pb-4
             [:span.text-lg.font-bold "Navigation"]
             [:button.p-2.rounded-lg.text-gray-400.hover:text-white.hover:bg-gray-800
              {:on-click #(reset! menu-open? false)
               :aria-label "Close menu"}
              [:svg.w-6.h-6 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
               [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M6 18L18 6M6 6l12 12"}]]]]
            [:nav.flex.flex-col.gap-2
             (for [[page label] [[:home "Home"]
                                 [:fitter "Fitter"]
                                 [:placebo-stress "Placebo Stress"]
                                 [:power-analysis "Power Simulation"]
                                 [:discovery "Discovery"]
                                 [:r-repl "R REPL"]]]
               ^{:key page}
               [:a.px-4.py-3.rounded-lg.text-base.font-medium.transition-colors
                {:href (rfe/href page)
                 :on-click #(reset! menu-open? false)
                 :class (if (= active-page page)
                          "bg-blue-600 text-white"
                          "text-gray-300 hover:bg-gray-800 hover:text-white")}
                label])]]])]])))

(defn fitter-page []
  (fn []
    (let [view @(rf/subscribe [:view])
          status @(rf/subscribe [:status])
          version @(rf/subscribe [:config-version])
          error-msg @(rf/subscribe [:error-message])]
      [:div
       [tab-bar
        {:active-tab view
         :tabs [[:config-form "Form View"]
                [:config-json "JSON View"]
                [:results "Results"]
                [:enrollment "Enrollment"]]
         :on-change #(rfe/push-state :fitter-sub {:subtab (name %)})
         :container-class "bg-transparent mb-4 p-0"
         :button-class "bg-gray-800 text-white shadow-sm font-semibold"}]
       (when (#{:running-stage1 :running-stage2} status)
         [:div.bg-yellow-100.p-4.mb-4.rounded
          {:class "flex justify-between items-center"}
          [:span
           (if (= status :running-stage1)
             "Running Stage 1 (Analytical Pre-filter)..."
             "Running Stage 2 (Simulating scenarios)...")]
          [:button.bg-red-500.text-white.px-3.py-1.rounded.text-sm
           {:class "hover:bg-red-600 transition-colors"
            :on-click #(sim/abort-simulation!)}
           "Abort"]])
       (when (= status :error)
         [:div.bg-red-100.text-red-800.p-4.mb-4 error-msg])
       ^{:key (str view "-" version)}
       (case view
         :config-form [config-form]
         :config-json [config-json]
         :results [results/results-view]
         :enrollment [enrollment/enrollment-view])])))

(defn main-view []
  (fn []
    (let [active-page @(rf/subscribe [:active-page])
          view @(rf/subscribe [:view])]
      [:div.min-h-screen.bg-gray-50
       [navigation-bar active-page]
       [:div.container.mx-auto.p-4
        (case active-page
          :home [views/home-view]
          :fitter ^{:key view} [fitter-page]
          :placebo-stress [views/placebo-stress-view]
          :power-analysis [views/power-analysis-view]
          :discovery [views/discovery-view]
          :r-repl [app.discovery.playground/gs-design-playground]
          [views/home-view])]])))
