(ns app.ui.results
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.state :as state]
            [app.ui.inputs :as inputs]
            [app.visualization :as vega]
            [app.simulator :as sim]
            [app.worker-pool :as wp]
            [clojure.string :as str]
            [cljs.pprint :refer [pprint]]
            [app.components.editor :refer [code-editor]]
            [app.components.card :refer [chart-card]]
            [app.components.tabs :refer [tab-bar]]
            [app.discovery.core :as discovery]))

(defn- expected-success-probability [items config]
  (let [valid-items (filter #(and (:p-success-overall %)
                                  (:acceptance-rate %)
                                  (not (js/isNaN (:p-success-overall %)))
                                  (not (js/isNaN (:acceptance-rate %))))
                            items)
        weights (map (fn [item]
                       (let [diff-ia (js/Math.abs
                                      (- (or (:exp-ev-ia item) 0)
                                         (or (:n-ev-ia config) 0)))
                             diff-upd (js/Math.abs
                                       (- (or (:exp-ev-upd item) 0)
                                          (or (:n-ev-upd config) 0)))
                             diff-pr3 (if (:use-pr3-anchor config)
                                        (js/Math.abs
                                         (- (or (:exp-ev-pr3 item) 0)
                                            (or (:n-ev-pr3 config) 0)))
                                        0.0)
                             sum-res (+ diff-ia diff-upd diff-pr3)]
                         (/ 1.0 (+ sum-res 0.2))))
                     valid-items)
        tot-wt (reduce + weights)]
    (if (and (seq valid-items) (pos? tot-wt))
      (/ (reduce + (map * (map :p-success-overall valid-items) weights))
         tot-wt)
      0.0)))

(defn- summary-banner [results config]
  [:div.grid.grid-cols-1.md:grid-cols-3.gap-4.mb-6
   (for [[fam items] results]
     (let [p-succ (expected-success-probability items config)
           pct-str (str (.toFixed (* 100 p-succ) 1) "%")]
       ^{:key fam}
       [:div.p-5.rounded-2xl.border.shadow-sm.bg-gradient-to-br
        {:class (str "from-white to-gray-50 transition-all duration-300 "
                     "hover:shadow-md hover:-translate-y-0.5 border-gray-100")}
        [:div.text-xs.font-semibold.tracking-wider.text-gray-400.uppercase
         (str (name fam) " Expected Success")]
        [:div.mt-2.text-3xl.font-bold.tracking-tight.text-indigo-600
         pct-str]
        [:div.mt-1.text-xs.text-gray-500
         (str "Based on " (count items) " accepted combos")]]))])

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
        filter-text (r/atom "")
        page-size 20
        curr-page (r/atom 0)]
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
                             filtered-items)
              total-items (count sorted-items)
              max-page (js/Math.max 0 (js/Math.ceil (/ total-items page-size)))
              _ (when (>= @curr-page max-page) (reset! curr-page 0))
              paginated-items (->> sorted-items
                                   (drop (* @curr-page page-size))
                                   (take page-size))]
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
               :on-change #(do (reset! filter-text (.. % -target -value))
                               (reset! curr-page 0))}]]]
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
                                     (reset! sort-asc? true)))
                                 (reset! curr-page 0))}
                    [:span.flex.items-center.gap-1
                     (get inputs/key->label k (name k))
                     (cond
                       (not is-active-sort?) "↕"
                       @sort-asc? "▲"
                       :else "▼")]]))]]
             [:tbody.divide-y.divide-gray-200.bg-white
              (if (empty? paginated-items)
                [:tr
                 [:td.px-4.py-8.text-center.text-gray-500
                  {:col-span (count keys-to-show)}
                  "No matching combinations found."]]
                (for [[idx item] (map-indexed vector paginated-items)]
                  ^{:key idx}
                  [:tr {:class (if (even? idx) "bg-white" "bg-gray-50")}
                   (for [k keys-to-show]
                     ^{:key k}
                     [:td.px-4.py-2.text-gray-700
                      (let [val (get item k)]
                        (if (float? val)
                          (.toFixed val 4)
                          (str val)))])]))]]]
           (when (> max-page 1)
             [:div.mt-4.flex.justify-between.items-center.text-sm
              [:span.text-gray-600
               (str "Showing " (inc (* @curr-page page-size))
                    " to " (js/Math.min total-items (* (inc @curr-page) page-size))
                    " of " total-items " entries")]
              [:div.flex.gap-2
               [:button.px-3.py-1.border.rounded.bg-white
                {:disabled (<= @curr-page 0)
                 :class (when (<= @curr-page 0) "opacity-50 cursor-not-allowed")
                 :on-click #(swap! curr-page dec)}
                "Previous"]
               [:span.px-3.py-1 (str (inc @curr-page) " / " max-page)]
               [:button.px-3.py-1.border.rounded.bg-white
                {:disabled (>= (inc @curr-page) max-page)
                 :class (when (>= (inc @curr-page) max-page) "opacity-50 cursor-not-allowed")
                 :on-click #(swap! curr-page inc)}
                "Next"]]])])))))

(defn- results-edn-view [results]
  (r/with-let [limit (r/atom 10)]
    (let [limited-results (into {} (for [[fam items] results]
                                     [fam (->> items
                                               (take @limit)
                                               translate-keys)]))
          edn-str (with-out-str (pprint limited-results))]
      [:div.p-4
       [:div.mb-4.flex.items-center.gap-3
        [:label.text-sm.font-bold.text-gray-700 "Max records to print:"]
        [:select.border.rounded.p-1.text-sm
         {:value @limit
          :on-change #(reset! limit (js/parseInt (.. % -target -value) 10))}
         (for [n [5 10 25 50 100]]
           ^{:key n}
           [:option {:value n} n])]]
       [:h3.text-lg.font-bold.mb-2 "EDN View"]
       [code-editor
        {:value edn-str
         :language "clojure"
         :theme "vs-dark"
         :height "500px"
         :read-only? true}]])))

(defn- add-onset-cr2-bat-mos [items]
  (mapv (fn [item]
          (let [irm (:bat-med item)
                k (or (:bat-shape item) 1.0)
                d 3
                lambda (discovery/population-cr2-lambda irm d k)
                onset-mos (discovery/true-mos lambda k)]
            (assoc item :onset-cr2-bat-mos onset-mos)))
        items))

(defn- get-items [results family]
  (when-let [items (get results family)]
    (add-onset-cr2-bat-mos items)))

(defn- get-param-label [k]
  (cond
    (= k :onset-cr2-bat-mos) "Onset CR2 BAT mOS"
    (= k :median-hr-final) "Final Hazard Ratio (HR)"
    (= k :bat-med) "BAT Median (mOS)"
    (= k :gps-med) "GPS Median (mOS)"
    (= k :bat-unc-med) "BAT Uncured Median (mOS)"
    (= k :unc-med) "GPS Uncured Median (mOS)"
    (= k :bat-cure-frac) "BAT Cure Fraction"
    (= k :cure-frac) "GPS Cure Fraction"
    (= k :bat-leak-yr) "BAT Leak Rate (yearly)"
    (= k :leak-yr) "GPS Leak Rate (yearly)"
    :else (get inputs/key->label k (name k))))

(defn- get-predefined-pairs [family]
  (case family
    "weibull"
    [[:bat-med :bat-shape]
     [:gps-med :gps-shape]
     [:bat-med :gps-med]
     [:gps-med :median-hr-final]]

    "cure"
    [[:bat-med :bat-shape]
     [:cure-frac :unc-med]
     [:bat-med :unc-med]
     [:cure-frac :median-hr-final]]

    "leaky"
    [[:bat-unc-med :unc-med]
     [:bat-cure-frac :bat-leak-yr]
     [:cure-frac :leak-yr]
     [:cure-frac :median-hr-final]]

    ;; fallback
    []))

(defn- find-varying-params [items]
  (let [all-keys (keys (first items))
        skip-keys #{:family :acceptance-rate :p-success-overall
                    :median-t80-months :median-hr-ia :median-z-ia
                    :hr-final-low :hr-final-high :p-hr-below-threshold
                    :median-bat-alive-upd :median-gps-alive-upd
                    :median-bat-alive-final :median-gps-alive-final
                    :exp-hr-ia :exp-hr-upd :exp-ev-ia :exp-ev-upd
                    :exp-ev-pr3 :exp-ev-final :hr-ia :hr-upd
                    :n-accepted :p-no-readout :n-pass-futility
                    :n-pass-events :p-reach80 :n-attempts
                    :median-hr-final}
        candidate-keys (remove #(or (skip-keys %)
                                    (str/starts-with? (name %) "mean-")
                                    (str/starts-with? (name %) "exp-"))
                               all-keys)]
    (filter (fn [k]
              (> (count (set (map k items))) 1))
            candidate-keys)))

(defn- parameter-helper [items active-atom label]
  (let [params (find-varying-params items)
        all-keys (keys (first items))
        other-keys (sort (remove (set params) all-keys))]
    [:div.mt-4
     [:div.flex.items-center.gap-2.mb-3
      [:label.text-sm.font-bold.text-gray-700 (str label ":")]
      [:input.border.rounded.p-1.text-sm.w-64
       {:type "text"
        :value @active-atom
        :on-change #(reset! active-atom (.. % -target -value))}]]
     [:div.mt-2
      [:span.text-xs.font-semibold.text-gray-500.block.mb-1
       "Varying Parameters:"]
      [:div.flex.flex-wrap.gap-1.5.mb-3
       (for [p params]
         ^{:key p}
         [:button
          {:class (str "text-xs px-2 py-0.5 rounded bg-indigo-50 "
                       "text-indigo-700 hover:bg-indigo-100 "
                       "transition-colors")
           :on-click #(reset! active-atom (name p))}
          (get-param-label p)])]
      [:span.text-xs.font-semibold.text-gray-500.block.mb-1
       "Other Simulation Outputs:"]
      [:div.flex.flex-wrap.gap-1.5
       (for [p other-keys]
         ^{:key p}
         [:button
          {:class (str "text-xs px-2 py-0.5 rounded bg-gray-100 "
                       "text-gray-700 hover:bg-gray-200 "
                       "transition-colors")
           :on-click #(reset! active-atom (name p))}
          (get-param-label p)])]]]))

(defn- posterior-distributions [items-raw]
  (let [items (add-onset-cr2-bat-mos items-raw)
        family (some-> (:family (first items)) name)
        params (find-varying-params items)
        find-first-varying (fn [candidates fallback]
                             (or (some #(when ((set params) %) %)
                                       candidates)
                                 fallback))
        p1-default (find-first-varying
                    [:bat-med :bat-cure-frac :cure-frac]
                    (first params))
        p2-default (find-first-varying
                    [:bat-shape :bat-leak-yr :leak-yr
                     :bat-unc-med :unc-med]
                    (second params))]
    (r/with-let [active-p1 (r/atom (name (or p1-default "")))
                 active-p2 (r/atom (name (or p2-default "")))]
      [:div.mt-6
       (if (empty? params)
         [:div.p-4.text-gray-500.italic
          "No varied parameters found in this grid."]
         (let [p1-kw (keyword @active-p1)
               p2-kw (keyword @active-p2)
               valid-keys (set (keys (first items)))
               p1-valid? (contains? valid-keys p1-kw)
               p2-valid? (contains? valid-keys p2-kw)]
           [:div
            [:div.grid.grid-cols-1.gap-8.mb-8
             [:div.border.p-6.rounded.bg-white
              [parameter-helper items active-p1 "Parameter 1"]
              (when p1-valid?
                [:div.flex.flex-col.gap-8.py-6
                 [vega/chart-posterior-histogram
                  items p1-kw (get-param-label p1-kw)]
                 [vega/chart-posterior-cdf
                  items p1-kw (get-param-label p1-kw)]])]

             [:div.border.p-6.rounded.bg-white
              [parameter-helper items active-p2 "Parameter 2"]
              (when p2-valid?
                [:div.flex.flex-col.gap-8.py-6
                 [vega/chart-posterior-histogram
                  items p2-kw (get-param-label p2-kw)]
                 [vega/chart-posterior-cdf
                  items p2-kw (get-param-label p2-kw)]])]]

            (when (and p1-valid? p2-valid? (not= p1-kw p2-kw))
              [:div.border.p-4.rounded.bg-white.mb-8
               [:h3.text-lg.font-bold.mb-2 "Pairwise Scatter (Jittered)"]
               [vega/chart-pairwise-scatter
                items
                p1-kw p2-kw
                (get-param-label p1-kw)
                (get-param-label p2-kw)]])

            [:div.border.p-6.rounded.bg-white.mb-8
             [:h3.text-lg.font-bold.mb-4 "Onset CR2 BAT mOS Posterior"]
             [:div.flex.flex-col.gap-8.py-4
              [vega/chart-posterior-histogram
               items :onset-cr2-bat-mos "Onset CR2 BAT mOS"]
              [vega/chart-posterior-cdf
               items :onset-cr2-bat-mos "Onset CR2 BAT mOS"]]]

            [:div.mt-8.pt-6.border-t
             [:h3.text-xl.font-bold.mb-4 "Key Parameter Relationships"]
             [:div.grid.grid-cols-1.md:grid-cols-2.gap-6
              (for [[p1 p2] (get-predefined-pairs family)]
                ^{:key (str (name p1) "-" (name p2))}
                [chart-card
                 {:title (str (get-param-label p1) " vs " (get-param-label p2))}
                 [vega/chart-pairwise-scatter
                  items
                  p1 p2
                  (get-param-label p1)
                  (get-param-label p2)]])]]]))])))

(defn- trigger-resampling-workers!
  [state-key items config n-sims resampled-data resampling-state]
  (let [config (assoc config :n-sims-aggregation n-sims)
        sampled (vega/sample-combos items config)]
    (if (empty? sampled)
      (do
        (swap! resampled-data assoc state-key [])
        (swap! resampling-state assoc state-key nil))
      (let [num-workers (js/Math.max 1 (count @wp/pool))
            total (count sampled)
            chunk-size (js/Math.max
                        25
                        (js/Math.min
                         500
                         (js/Math.ceil (/ total num-workers))))
            chunks (partition-all chunk-size sampled)
            total-chunks (count chunks)
            completed-chunks (atom 0)
            all-results (js/Array.)]
        (swap! resampling-state assoc state-key
               {:completed 0 :total total-chunks})
        (doseq [[idx chunk] (map-indexed vector chunks)]
          (wp/submit-job!
           {:type "RUN_RESAMPLING_BATCH"
            :combos (vec chunk)
            :config config
            :seed (+ (or (:seed config) 20260508) (* idx 7919))}
           (fn [{:keys [success? result error]}]
             (swap! completed-chunks inc)
             (when (and success? result)
               (doseq [res result]
                 (.push all-results res)))
             (swap! resampling-state assoc state-key
                    {:completed @completed-chunks :total total-chunks})
             (when (>= @completed-chunks total-chunks)
               (let [raw-res (js->clj all-results :keywordize-keys true)
                     scored (vega/score-sampled-combos raw-res config)]
                 (swap! resampled-data assoc state-key scored)
                 (swap! resampling-state assoc state-key nil))))))))))

(defn results-view []
  (let [results @(rf/subscribe [:results])
        progress @(rf/subscribe [:progress])
        status @(rf/subscribe [:status])
        config @(rf/subscribe [:config])]
   (r/with-let [active-tab (r/atom :charts)
                 active-family (r/atom nil)
                 input-n-sims (r/atom (:n-sims-aggregation config 1000))
                 committed-n-sims (r/atom (:n-sims-aggregation config 1000))
                 resample-trigger (r/atom 0)
                 resampled-data (r/atom {})
                 resampling-state (r/atom {})
                 results-tracker (r/atom results)]
      (when-not (= results @results-tracker)
        (reset! results-tracker results)
        (reset! resampled-data {})
        (reset! resampling-state {}))
      (when (and (nil? @active-family) (seq results))
        (reset! active-family (key (first results))))
      [:div.p-4.results-view-wrapper
       [:div.flex.justify-between.items-center.mb-4
        [:h2.text-xl.font-bold.results-charts-container "Results"]
        (when (seq results)
          [tab-bar
           {:active-tab @active-tab
            :tabs [[:charts "Result Charts"]
                   [:config "Config Distributions"]
                   [:table "Table"]
                   [:edn "EDN View"]]
            :on-change #(reset! active-tab %)}])]
       (cond
         (= status :running-stage2) [stage2-progress progress]
         (seq results)
         [:div
          [summary-banner results config]
          (case @active-tab
            :config
            (let [fam @active-family
                  items (get-items results fam)]
              [:div
               [:div.flex.items-center.gap-2.mb-4
                [:span.text-sm.font-semibold.text-gray-500 "Family:"]
                [tab-bar
                 {:active-tab fam
                  :tabs (mapv (fn [f] [f (str/capitalize (name f))])
                              (keys results))
                  :on-change #(reset! active-family %)}]]
               [posterior-distributions items]])
            :charts
            (let [fam @active-family
                  items (get-items results fam)]
              [:div
               [:div.mb-4.flex.flex-col.gap-2
                [:div.flex.items-center.gap-2
                 [:span.text-sm.font-semibold.text-gray-500 "Family:"]
                 [tab-bar
                  {:active-tab fam
                   :tabs (mapv (fn [f] [f (str/capitalize (name f))])
                               (keys results))
                   :on-change #(reset! active-family %)}]]
                [:div.flex.flex-wrap.items-center.gap-4.mt-2
                 [:div.flex.items-center.gap-2
                  [:span.text-sm.font-semibold.text-gray-500
                   "Sims to Aggregate (N):"]
                  [:input.border.p-1.rounded.text-sm.w-24
                   {:type "number"
                    :value @input-n-sims
                    :on-change (fn [e]
                                 (let [v (js/parseInt
                                          (.. e -target -value) 10)]
                                   (reset! input-n-sims
                                           (if (js/isNaN v) 1000 v))))}]]
                 (let [state-key [fam @committed-n-sims]
                       loading (get @resampling-state state-key)]
                   [:button.px-3.py-1.text-sm.text-white.bg-blue-600.rounded
                    {:class (str "hover:bg-blue-700 transition font-semibold "
                                 (when loading "opacity-50 cursor-not-allowed"))
                     :disabled (boolean loading)
                     :on-click (fn []
                                 (reset! committed-n-sims @input-n-sims)
                                 (swap! resample-trigger inc))}
                    "Resample"])]]
               (when (and fam items)
                 (let [state-key [fam @committed-n-sims]
                       loading (get @resampling-state state-key)
                       res-data (get @resampled-data state-key)]
                   (when (and (not res-data)
                              (not loading))
                     (trigger-resampling-workers!
                      state-key items config @committed-n-sims
                      resampled-data resampling-state))
                   (cond
                     loading
                     [:div.p-8.text-center.border.rounded.bg-gray-50.my-4
                      [:div.text-lg.font-bold.text-blue-600.mb-2
                       "Resampling Across Web Workers..."]
                      [:div.text-sm.text-gray-500.mb-2
                       (str "Processing batch: "
                            (:completed loading) " of " (:total loading)
                            " chunks completed")]
                      [:div.w-full.bg-gray-200.rounded-full.h-2.5.mx-auto
                       {:class "max-w-md"}
                       [:div.bg-blue-600.h-2.5.rounded-full
                        {:style {:width (str (if (pos? (:total loading))
                                               (* 100 (/ (:completed loading)
                                                         (:total loading)))
                                               0)
                                             "%")}}]]]
                     res-data
                     ^{:key state-key}
                     [vega/render-charts-panel (name fam) res-data 50 config]

                     :else
                     [:div.p-4.text-gray-500 "Initializing resampling..."])))])

            :table
            (let [fam @active-family
                  items (get-items results fam)]
              [:div
               [:div.mb-4.flex.items-center.gap-2
                [:span.text-sm.font-semibold.text-gray-500 "Family:"]
                [tab-bar
                 {:active-tab fam
                  :tabs (mapv (fn [f] [f (str/capitalize (name f))])
                              (keys results))
                  :on-change #(reset! active-family %)}]]
               (when (and fam items)
                 ^{:key fam} [results-table fam items])])

            :edn [results-edn-view results])
          (let [fam @active-family
                items (get-items results fam)
                state-key [fam @committed-n-sims]
                res-data (get @resampled-data state-key)
                chart-data (or res-data items)]
            (when (and fam (seq chart-data))
              [:div.mt-8.pt-6.border-t
               [:div.border.p-6.rounded.bg-white
                [:h3.text-lg.font-bold.mb-4 "Onset CR2 BAT mOS Posterior"]
                [:div.flex.flex-col.gap-8.py-4
                 [vega/chart-posterior-histogram
                  chart-data :onset-cr2-bat-mos "Onset CR2 BAT mOS"]
                 [vega/chart-posterior-cdf
                  chart-data :onset-cr2-bat-mos "Onset CR2 BAT mOS"]]]]))]
         :else [:div.text-gray-500 "Run a simulation to see results."])])))
