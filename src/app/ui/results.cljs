(ns app.ui.results
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.ui.inputs :as inputs]
            [app.vega :as vega]
            [app.simulator :as sim]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            ["@monaco-editor/react" :default Editor]))

(defn- stage2-progress [progress]
  [:div.flex.flex-col.gap-2
   [:p "Running Stage 2..."]
   [:progress.w-full {:value (:completed progress)
                      :max (:total progress)}]
   [:div.flex.justify-between.items-center
    [:p.text-sm
     (str (:completed progress) " / " (:total progress)
          " combos simulated")]
    [:button.bg-red-500.text-white.px-3.py-1.rounded.text-sm
     {:class "hover:bg-red-600 transition-colors"
      :on-click #(sim/abort-simulation!)}
     "Abort"]]])

(defn- translate-keys [data]
  (cond
    (map? data)
    (into {} (for [[k v] data]
               [(get inputs/key->label k (name k)) (translate-keys v)]))
    (coll? data)
    (mapv translate-keys data)
    :else data))

(defn- results-table [family items]
  (let [sort-col (r/atom nil)
        sort-asc? (r/atom true)
        filter-text (r/atom "")]
    (fn [family items]
      (when (seq items)
        (let [keys-to-show (->> (mapcat keys items)
                                distinct
                                (remove #(= % :family))
                                (sort-by name))
              q (str/lower-case (str/trim @filter-text))
              filtered-items (if (str/blank? q)
                               items
                               (filter
                                (fn [item]
                                  (some (fn [k]
                                          (let [v (get item k)]
                                            (str/includes?
                                             (str/lower-case (str v))
                                             q)))
                                        keys-to-show))
                               items))
              sorted-items (if-let [col @sort-col]
                             (sort-by (fn [item]
                                        (let [val (get item col)]
                                          (if (string? val)
                                            (str/lower-case val)
                                            val)))
                                      (if @sort-asc? compare #(compare %2 %1))
                                      filtered-items)
                             filtered-items)]
          [:div.mb-8
           [:div.flex.flex-col.sm:flex-row.gap-2.mb-3
            {:class "sm:justify-between sm:items-center"}
            [:h3.text-lg.font-bold.capitalize.text-gray-800
             (str (name family) " Family Table")]
            [:div.relative.w-full.sm:w-64
             [:input.border.p-1.px-2.rounded.text-sm.w-full
              {:type "text"
               :placeholder "Filter rows..."
               :value @filter-text
               :on-change #(reset! filter-text (.. % -target -value))}]]]
           [:div.overflow-x-auto.border.rounded-lg.shadow-sm
            [:table.min-w-full.divide-y.divide-gray-200.text-sm
             [:thead.bg-gray-50
              [:tr
               (for [k keys-to-show]
                 (let [is-active-sort? (= @sort-col k)]
                   ^{:key k}
                   [:th.px-4.py-2.text-left.font-semibold.text-gray-600
                    {:class "cursor-pointer select-none hover:bg-gray-100"
                     :on-click (fn []
                                 (if is-active-sort?
                                   (swap! sort-asc? not)
                                   (do
                                     (reset! sort-col k)
                                     (reset! sort-asc? true))))}
                    [:span.flex.items-center.gap-1
                     (get inputs/key->label k (name k))
                     (cond
                       (not is-active-sort?) "↕"
                       @sort-asc? "▲"
                       :else "▼")]]))]]
             [:tbody.divide-y.divide-gray-200.bg-white
              (if (empty? sorted-items)
                [:tr
                 [:td.px-4.py-8.text-center.text-gray-500
                  {:col-span (count keys-to-show)}
                  "No matching combinations found."]]
                (for [[idx item] (map-indexed vector sorted-items)]
                  ^{:key idx}
                  [:tr {:class (if (even? idx) "bg-white" "bg-gray-50")}
                   (for [k keys-to-show]
                     ^{:key k}
                     [:td.px-4.py-2.text-gray-700
                      (let [val (get item k)]
                        (if (float? val)
                          (.toFixed val 4)
                          (str val)))])]))]]]])))))

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
