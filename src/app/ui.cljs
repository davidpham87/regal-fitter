(ns app.ui
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.state :as state]
            [app.simulator :as sim]
            [app.worker-pool :as wp]
            [app.vega :as vega]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            ["@monaco-editor/react" :default Editor]))

(defn- trial-structure-fields [config]
  [:div.border.p-4.rounded
   [:h3.font-bold "Trial Structure"]
   [:label.block.mt-2 "n-total"
    [:input.border.w-full.p-1 {:type "number" :value (:n-total config)
                               :on-change #(state/set-config! :n-total (js/parseInt (.. % -target -value)))}]]
   [:label.block.mt-2 "n-per-arm"
    [:input.border.w-full.p-1 {:type "number" :value (:n-per-arm config)
                               :on-change #(state/set-config! :n-per-arm (js/parseInt (.. % -target -value)))}]]])

(defn- timing-fields [config]
  [:div.border.p-4.rounded
   [:h3.font-bold "Event Timing (months)"]
   [:label.block.mt-2 "t-ia"
    [:input.border.w-full.p-1 {:type "number" :step "0.1" :value (:t-ia config)
                               :on-change #(state/set-config! :t-ia (js/parseFloat (.. % -target -value)))}]]
   [:label.block.mt-2 "t-upd"
    [:input.border.w-full.p-1 {:type "number" :step "0.1" :value (:t-upd config)
                               :on-change #(state/set-config! :t-upd (js/parseFloat (.. % -target -value)))}]]])

(defn- idmc-gate-fields [config]
  [:div.border.p-4.rounded
   [:h3.font-bold "IDMC Gates"]
   [:label.block.mt-2 "Futility HR Max"
    [:input.border.w-full.p-1 {:type "number" :step "0.01" :value (:futility-hr-max config)
                               :on-change #(state/set-config! :futility-hr-max (js/parseFloat (.. % -target -value)))}]]
   [:label.block.mt-2 "Efficacy HR Min"
    [:input.border.w-full.p-1 {:type "number" :step "0.01" :value (:efficacy-hr-min config)
                               :on-change #(state/set-config! :efficacy-hr-min (js/parseFloat (.. % -target -value)))}]]])

(defn- compute-fields [config]
  [:div.border.p-4.rounded
   [:h3.font-bold "Compute"]
   [:label.block.mt-2 "Sims per Combo"
    [:input.border.w-full.p-1 {:type "number" :value (:n-sims-per-combo config)
                               :on-change #(state/set-config! :n-sims-per-combo (js/parseInt (.. % -target -value)))}]]])

(defn config-form []
  (let [config (:config @state/app-state)]
    [:div.p-4
     [:h2.text-xl.font-bold.mb-4 "Simulation Configuration"]
     [:div.grid.grid-cols-2.gap-4
      [trial-structure-fields config]
      [timing-fields config]
      [idmc-gate-fields config]
      [compute-fields config]]
     [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded {:on-click #(sim/start-simulation!)} "Run Simulation"]]))

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

(defn- config->nested [config]
  (into {} (for [[cat ks] category->keys]
             [cat (select-keys config ks)])))

(defn- nested->config [nested]
  (reduce merge {} (vals nested)))

(defn config-json []
  (let [config (:config @state/app-state)
        text (r/atom (js/JSON.stringify
                      (clj->js (config->nested config)) nil 2))]
    (fn []
      [:div.p-4
       [:h2.text-xl.font-bold.mb-4 "Config (JSON)"]
       [:div.border.rounded {:style {:height "600px"}}
        [:> Editor {:height "100%"
                    :defaultLanguage "json"
                    :value @text
                    :onChange (fn [val _]
                                (reset! text val)
                                (try
                                  (let [nested (js->clj (js/JSON.parse val)
                                                        :keywordize-keys true)]
                                    (state/update-config!
                                     (nested->config nested)))
                                  (catch js/Error _)))}]]
       [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded
        {:on-click #(sim/start-simulation!)} "Run Simulation"]])))

(defn- stage2-progress [progress]
  [:div
   [:p "Running Stage 2..."]
   [:progress.w-full {:value (:completed progress) :max (:total progress)}]
   [:p.text-sm (str (:completed progress) " / " (:total progress) " combos simulated")]])

(def ^:private key->label
  {:bat-med "BAT Median"
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

(defn- translate-keys [data]
  (cond
    (map? data)
    (into {} (for [[k v] data]
               [(get key->label k (name k)) (translate-keys v)]))
    (coll? data)
    (mapv translate-keys data)
    :else data))

(defn- results-table [family items]
  (when (seq items)
    (let [keys-to-show (->> (mapcat keys items)
                            distinct
                            (remove #(= % :family))
                            (sort-by name))]
      [:div.mb-8
       [:h3.text-lg.font-bold.mb-2.capitalize
        (str (name family) " Family Table")]
       [:div.overflow-x-auto.border.rounded-lg.shadow-sm
        [:table.min-w-full.divide-y.divide-gray-200.text-sm
         [:thead.bg-gray-50
          [:tr
           (for [k keys-to-show]
             ^{:key k}
             [:th.px-4.py-2.text-left.font-semibold.text-gray-600
              (get key->label k (name k))])]]
         [:tbody.divide-y.divide-gray-200.bg-white
          (for [[idx item] (map-indexed vector items)]
            ^{:key idx}
            [:tr {:class (if (even? idx) "bg-white" "bg-gray-50")}
             (for [k keys-to-show]
               ^{:key k}
               [:td.px-4.py-2.text-gray-700
                (let [val (get item k)]
                  (if (float? val) (.toFixed val 4) (str val)))])])]]]])))

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

(defn main-view []
  (let [state @state/app-state view (:view state) status (:status state)]
    [:div.container.mx-auto.p-4
     [:div.flex.gap-4.mb-4
      [:button.px-4.py-2.rounded {:class (if (= view :config-form) "bg-gray-800 text-white" "bg-gray-200") :on-click #(swap! state/app-state assoc :view :config-form)} "Form View"]
      [:button.px-4.py-2.rounded {:class (if (= view :config-json) "bg-gray-800 text-white" "bg-gray-200") :on-click #(swap! state/app-state assoc :view :config-json)} "JSON View"]
      [:button.px-4.py-2.rounded {:class (if (= view :results) "bg-gray-800 text-white" "bg-gray-200") :on-click #(swap! state/app-state assoc :view :results)} "Results"]]
     (when (= status :running-stage1) [:div.bg-yellow-100.p-4.mb-4 "Running Stage 1 (Analytical Pre-filter)..."])
     (when (= status :error) [:div.bg-red-100.text-red-800.p-4.mb-4 (:error-message state)])
     (case view :config-form [config-form] :config-json [config-json] :results [results-view])]))
