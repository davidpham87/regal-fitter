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
            [app.components.editor :refer [code-editor]]))

(def ^:private category->keys
  {:trial [:n-total :n-per-arm :enroll-bands :enforce-no-80-by-today
           :t-now :no-80-slack-months]
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
  (let [text-val (r/atom "")]
    (fn []
      (let [config @(rf/subscribe [:config])
            nested-config (config->nested config)
            expected-json (js/JSON.stringify (clj->js nested-config) nil 2)]
        (when-not (= (try (js->clj (js/JSON.parse @text-val)
                                   :keywordize-keys true)
                          (catch js/Error _ nil))
                     nested-config)
          (reset! text-val expected-json))
        [:div.p-4
         [:h2.text-xl.font-bold.mb-4 "Config (JSON)"]
         [code-editor
          {:height "600px"
           :language "json"
           :value @text-val
           :on-change (fn [val _]
                        (reset! text-val val)
                        (try
                          (let [nested (js->clj
                                        (js/JSON.parse val)
                                        :keywordize-keys true)]
                            (rf/dispatch [:update-config
                                          (nested->config nested)]))
                          (catch js/Error _)))}]
         [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded
          {:type "button"
           :on-click (fn []
                       (try
                         (let [nested (js->clj
                                       (js/JSON.parse @text-val)
                                       :keywordize-keys true)]
                           (rf/dispatch [:update-config (nested->config nested)]))
                         (catch js/Error _))
                       (sim/start-simulation!)
                       (rf/dispatch [:set-view :results]))}
          "Run Simulation"]]))))

(defn- navigation-bar [active-page]
  [:header.bg-gray-800.text-white.shadow-md.mb-6
   [:div.container.mx-auto.px-4.py-3.flex.justify-between.items-center
    [:a.flex.items-center.gap-2.cursor-pointer
     {:href (rfe/href :home)}
     [:span.text-xl.font-extrabold.tracking-tight "Regal Fitter"]]
    [:nav.flex.gap-2
     (for [[page label] [[:home "Home"]
                         [:fitter "Fitter"]
                         [:placebo-stress "Placebo Stress"]
                         [:discovery "Discovery"]]]
       ^{:key page}
       [:a.px-3.py-2.rounded-lg.text-sm.font-medium.transition-colors
        {:href (rfe/href page)
         :class (if (= active-page page)
                  "bg-gray-950 text-white"
                  "text-gray-300 hover:bg-gray-700 hover:text-white")}
        label])]]])

(defn fitter-page []
  (fn []
    (let [view @(rf/subscribe [:view])
          status @(rf/subscribe [:status])
          version @(rf/subscribe [:config-version])
          error-msg @(rf/subscribe [:error-message])]
      [:div
       [:div.flex.gap-4.mb-4
        [:a.px-4.py-2.rounded.inline-block.text-center
         {:class (if (= view :config-form)
                   "bg-gray-800 text-white"
                   "bg-gray-200")
          :href (rfe/href :fitter-sub {:subtab "config-form"})}
         "Form View"]
        [:a.px-4.py-2.rounded.inline-block.text-center
         {:class (if (= view :config-json)
                   "bg-gray-800 text-white"
                   "bg-gray-200")
          :href (rfe/href :fitter-sub {:subtab "config-json"})}
         "JSON View"]
        [:a.px-4.py-2.rounded.inline-block.text-center
         {:class (if (= view :results)
                   "bg-gray-800 text-white"
                   "bg-gray-200")
          :href (rfe/href :fitter-sub {:subtab "results"})}
         "Results"]
        [:a.px-4.py-2.rounded.inline-block.text-center
         {:class (if (= view :enrollment)
                   "bg-gray-800 text-white"
                   "bg-gray-200")
          :href (rfe/href :fitter-sub {:subtab "enrollment"})}
         "Enrollment"]]
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
          :discovery [views/discovery-view]
          [views/home-view])]])))
