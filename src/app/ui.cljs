(ns app.ui
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.state :as state]
            [app.simulator :as sim]
            [app.worker-pool :as wp]
            [app.vega :as vega]
            [clojure.string :as str]
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

(defn config-json []
  (let [config (:config @state/app-state)
        text (r/atom (js/JSON.stringify (clj->js config) nil 2))]
    (fn []
      [:div.p-4
       [:h2.text-xl.font-bold.mb-4 "Config (JSON)"]
       [:div.border.rounded {:style {:height "600px"}}
        [:> Editor {:height "100%" :defaultLanguage "json" :value @text
                    :onChange (fn [val _] (reset! text val)
                                (try (state/update-config! (js->clj (js/JSON.parse val) :keywordize-keys true))
                                     (catch js/Error _)))}]]
       [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded {:on-click #(sim/start-simulation!)} "Run Simulation"]])))

(defn- stage2-progress [progress]
  [:div
   [:p "Running Stage 2..."]
   [:progress.w-full {:value (:completed progress) :max (:total progress)}]
   [:p.text-sm (str (:completed progress) " / " (:total progress) " combos simulated")]])

(defn results-view []
  (let [{:keys [results progress status]} @state/app-state]
    [:div.p-4.results-view-wrapper
     [:h2.text-xl.font-bold.mb-4.results-charts-container "Results"]
     (cond
       (= status :running-stage2) [stage2-progress progress]
       (seq results) [:div (for [[fam items] results] ^{:key fam} [vega/results-charts (name fam) items])]
       :else [:div.text-gray-500 "Run a simulation to see results."])]))

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
