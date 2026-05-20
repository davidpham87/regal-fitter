(ns app.ui
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [app.state :as state]
            [app.pyodide :as pyo]
            [app.worker-pool :as wp]
            [app.vega :as vega]
            [clojure.string :as str]
            ["@monaco-editor/react" :default Editor]))

;; Config Form View
(defn config-form []
  (let [config (:config @state/app-state)]
    [:div.p-4
     [:h2.text-xl.font-bold.mb-4 "Simulation Configuration"]

     [:div.grid.grid-cols-2.gap-4
      ;; Trial Structure
      [:div.border.p-4.rounded
       [:h3.font-bold "Trial Structure"]
       [:label.block.mt-2 "n_total"
        [:input.border.w-full.p-1 {:type "number" :value (:n_total config)
                                   :on-change #(state/set-config! :n_total (js/parseInt (.. % -target -value)))}]]
       [:label.block.mt-2 "n_per_arm"
        [:input.border.w-full.p-1 {:type "number" :value (:n_per_arm config)
                                   :on-change #(state/set-config! :n_per_arm (js/parseInt (.. % -target -value)))}]]]

      ;; Event Timing
      [:div.border.p-4.rounded
       [:h3.font-bold "Event Timing (months)"]
       [:label.block.mt-2 "t_ia"
        [:input.border.w-full.p-1 {:type "number" :step "0.1" :value (:t_ia config)
                                   :on-change #(state/set-config! :t_ia (js/parseFloat (.. % -target -value)))}]]
       [:label.block.mt-2 "t_upd"
        [:input.border.w-full.p-1 {:type "number" :step "0.1" :value (:t_upd config)
                                   :on-change #(state/set-config! :t_upd (js/parseFloat (.. % -target -value)))}]]]

      ;; IDMC Futility/Efficacy
      [:div.border.p-4.rounded
       [:h3.font-bold "IDMC Gates"]
       [:label.block.mt-2 "Futility HR Max"
        [:input.border.w-full.p-1 {:type "number" :step "0.01" :value (:futility_hr_max config)
                                   :on-change #(state/set-config! :futility_hr_max (js/parseFloat (.. % -target -value)))}]]
       [:label.block.mt-2 "Efficacy HR Min"
        [:input.border.w-full.p-1 {:type "number" :step "0.01" :value (:efficacy_hr_min config)
                                   :on-change #(state/set-config! :efficacy_hr_min (js/parseFloat (.. % -target -value)))}]]]

      ;; Compute
      [:div.border.p-4.rounded
       [:h3.font-bold "Compute"]
       [:label.block.mt-2 "Sims per Combo"
        [:input.border.w-full.p-1 {:type "number" :value (:n_sims_per_combo config)
                                   :on-change #(state/set-config! :n_sims_per_combo (js/parseInt (.. % -target -value)))}]]]
      ]

     [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded
      {:on-click #(pyo/start-simulation!)}
      "Run Simulation"]]))

;; Config JSON View
(defn config-json []
  (let [config (:config @state/app-state)
        text (r/atom (js/JSON.stringify (clj->js config) nil 2))]
    (fn []
      [:div.p-4
       [:h2.text-xl.font-bold.mb-4 "Config (JSON)"]
       [:div.border.rounded {:style {:height "600px"}}
        [:> Editor
         {:height "100%"
          :defaultLanguage "json"
          :value @text
          :onChange (fn [val _]
                      (reset! text val)
                      (try
                        (let [parsed (js->clj (js/JSON.parse val) :keywordize-keys true)]
                          (state/update-config! parsed))
                        (catch js/Error _)))}]]
       [:button.bg-blue-500.text-white.px-4.py-2.mt-4.rounded
        {:on-click #(pyo/start-simulation!)}
        "Run Simulation"]])))

;; Results View (Vega-Lite charts)
(defn results-view []
  (let [{:keys [results progress status]} @state/app-state]
    [:div.p-4.results-view-wrapper
     [:h2.text-xl.font-bold.mb-4.results-charts-container "Results"]
     (cond
       (= status :running-stage2)
       [:div
        [:p "Running Stage 2..."]
        [:progress.w-full {:value (:completed progress) :max (:total progress)}]
        [:p.text-sm (str (:completed progress) " / " (:total progress) " combos simulated")]]

       (seq results)
       [:div
        (for [[fam items] results]
          ^{:key fam}
          [vega/results-charts fam items])]

       :else
       [:div.text-gray-500 "Run a simulation to see results."])]))

(defn main-view []
  (let [state @state/app-state
        view (:view state)
        status (:status state)]
    [:div.container.mx-auto.p-4
     [:div.flex.gap-4.mb-4
      [:button.px-4.py-2.rounded {:class (if (= view :config-form) "bg-gray-800 text-white" "bg-gray-200")
                                  :on-click #(swap! state/app-state assoc :view :config-form)} "Form View"]
      [:button.px-4.py-2.rounded {:class (if (= view :config-json) "bg-gray-800 text-white" "bg-gray-200")
                                  :on-click #(swap! state/app-state assoc :view :config-json)} "JSON View"]
      [:button.px-4.py-2.rounded {:class (if (= view :results) "bg-gray-800 text-white" "bg-gray-200")
                                  :on-click #(swap! state/app-state assoc :view :results)} "Results"]]

     (when (= status :running-stage1)
       [:div.bg-yellow-100.p-4.mb-4 "Running Stage 1 (Analytical Pre-filter)..."])
     (when (= status :error)
       [:div.bg-red-100.text-red-800.p-4.mb-4 (:error-message state)])

     (case view
       :config-form [config-form]
       :config-json [config-json]
       :results [results-view])]))

