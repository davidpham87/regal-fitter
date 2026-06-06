(ns app.discovery.playground
  (:require [reagent.core :as r]
            [webr.gs-design :as gsd]
            ["@monaco-editor/react" :default Editor]
            [clojure.string :as str]))

(def functions-meta
  [{:id :gs-design
    :label "gsDesign"
    :fn gsd/gs-design
    :desc "Derives Group Sequential Clinical Trial Designs and Boundaries."
    :params [{:name "k" :key :k :type :num :default 3}
             {:name "test.type" :key :test-type :type :num :default 4}
             {:name "alpha" :key :alpha :type :num :default 0.025}
             {:name "beta" :key :beta :type :num :default 0.1}
             {:name "sfu" :key :sfu :type :str :default "sfLDOF"}
             {:name "sfl" :key :sfl :type :str :default "sfLDOF"}]}

   {:id :gs-probability
    :label "gsProbability"
    :fn gsd/gs-probability
    :desc "Boundary Crossing Probabilities. Computes probabilities and power."
    :params [{:name "theta" :key :theta :type :num :default 0}
             {:name "n.I" :key :n-i :type :str :default "1:3"}
             {:name "a" :key :a :type :str :default "c(-1.5, -0.5, 0.5)"}
             {:name "b" :key :b :type :str :default "c(2.5, 2.0, 1.5)"}]}

   {:id :gs-bound-summary
    :label "gsBoundSummary"
    :fn gsd/gs-bound-summary
    :desc "Provides tabular summary of a group sequential design."
    :params [{:name "k" :key :k :type :num :default 3}
             {:name "alpha" :key :alpha :type :num :default 0.025}
             {:name "beta" :key :beta :type :num :default 0.1}]}

   {:id :n-normal
    :label "nNormal"
    :fn gsd/n-normal
    :desc "Computes sample size or power for a trial with normal endpoints."
    :params [{:name "delta1" :key :delta1 :type :num :default 1.0}
             {:name "sd" :key :sd :type :num :default 1.0}
             {:name "alpha" :key :alpha :type :num :default 0.025}
             {:name "beta" :key :beta :type :num :default 0.1}
             {:name "ratio" :key :ratio :type :num :default 1.0}]}

   {:id :n-binomial
    :label "nBinomial"
    :fn gsd/n-binomial
    :desc "Computes sample size or power for a two-arm binomial trial."
    :params [{:name "p1" :key :p1 :type :num :default 0.2}
             {:name "p2" :key :p2 :type :num :default 0.1}
             {:name "alpha" :key :alpha :type :num :default 0.025}
             {:name "beta" :key :beta :type :num :default 0.1}
             {:name "ratio" :key :ratio :type :num :default 1.0}]}

   {:id :n-survival
    :label "nSurvival"
    :fn gsd/n-survival
    :desc "Computes sample size/events under proportional hazards."
    :params [{:name "lambda1" :key :lambda1 :type :num :default 0.1}
             {:name "lambda2" :key :lambda2 :type :num :default 0.07}
             {:name "alpha" :key :alpha :type :num :default 0.025}
             {:name "beta" :key :beta :type :num :default 0.1}
             {:name "ratio" :key :ratio :type :num :default 1.0}]}])

(defn- select-function! [state-atom func-meta]
  (let [default-params (into {}
                             (map (fn [p]
                                    [(:key p) (:default p)])
                                  (:params func-meta)))]
    (swap! state-atom assoc
           :selected-id (:id func-meta)
           :params default-params
           :output "")))

(defn- run-playground-fn! [state-atom func-meta]
  (swap! state-atom assoc :running? true :output "Running...")
  ((:fn func-meta)
   (:params @state-atom)
   (fn [output result]
     (swap! state-atom assoc
            :running? false
            :output (str (when (seq output)
                           (str "Output/Log:\n"
                                (str/join "\n" output)
                                "\n\n"))
                         "Result:\n"
                         (js/JSON.stringify (clj->js result) nil 2))))
   (fn [err]
     (swap! state-atom assoc
            :running? false
            :output (str "Error:\n" (.-message err))))))

(defn- playground-header [meta-item]
  [:div
   [:h3.font-extrabold.text-gray-800.mb-2 "Function Playground"]
   [:p.text-xs.text-gray-500.mb-4 (:desc meta-item)]])

(defn- playground-selector [play]
  (let [selected-id (:selected-id @play)]
    [:div.mb-4
     [:label.block.text-xs.font-bold.text-gray-600.mb-1 "Select Function"]
     [:select.w-full.border.rounded.p-2.text-sm.bg-gray-50
      {:value (name selected-id)
       :on-change (fn [e]
                    (let [id (keyword (.. e -target -value))
                          meta-item (first (filter #(= (:id %) id)
                                                   functions-meta))]
                      (select-function! play meta-item)))}
      (for [f functions-meta]
        ^{:key (:id f)}
        [:option {:value (name (:id f))} (:label f)])]]))

(defn- param-input-field [play p]
  (let [params (:params @play)]
    [:div.mb-3
     [:label.block.text-xs.font-semibold.text-gray-600 (:name p)]
     [:input.w-full.border.rounded.p-2.text-xs.mt-1
      {:type (if (= (:type p) :num) "number" "text")
       :value (get params (:key p))
       :step (when (= (:type p) :num) "any")
       :on-change (fn [e]
                    (let [raw-val (.. e -target -value)
                          parsed (if (= (:type p) :num)
                                   (js/parseFloat raw-val)
                                   raw-val)]
                      (swap! play assoc-in [:params (:key p)]
                             parsed)))}]]))

(defn- playground-button [play meta-item]
  (let [running? (:running? @play)]
    [:button.w-full.mt-4.bg-blue-600.hover:bg-blue-700.text-white.p-3
     {:class "rounded-lg text-xs font-bold transition-colors"
      :type "button"
      :disabled running?
      :on-click #(run-playground-fn! play meta-item)}
     (if running? "Executing..." "Run Function")]))

(defn- playground-results-editor [output]
  [:div.w-full.bg-white.p-6.rounded-xl.shadow-sm.border
   {:class "lg:w-2/3"}
   [:h3.font-extrabold.text-gray-800.mb-4 "Result Output"]
   [:div.border.rounded {:style {:height "450px"}}
    [:> Editor {:height "100%"
                :defaultLanguage "json"
                :value output
                :options #js {:readOnly true
                              :minimap #js {:enabled false}}
                :theme "vs-dark"}]]])

(defn gs-design-playground []
  (r/with-let [play (r/atom {:selected-id :gs-design
                             :params {:k 3
                                      :test-type 4
                                      :alpha 0.025
                                      :beta 0.1
                                      :sfu "sfLDOF"
                                      :sfl "sfLDOF"}
                             :output ""
                             :running? false})]
    (let [{:keys [selected-id output]} @play
          current-meta (first (filter #(= (:id %) selected-id)
                                      functions-meta))]
      [:div.flex.flex-col.lg:flex-row.gap-6.mt-6
       [:div.w-full.bg-white.p-6.rounded-xl.shadow-sm.border
        {:class "lg:w-1/3"}
        [playground-header current-meta]
        [playground-selector play]
        (for [p (:params current-meta)]
          ^{:key (:name p)}
          [param-input-field play p])
        [playground-button play current-meta]]
       [playground-results-editor output]])))
