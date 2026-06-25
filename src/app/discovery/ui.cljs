(ns app.discovery.ui)

;; ---------------------------------------------------------------------------
;; Param input primitives
;; ---------------------------------------------------------------------------

(defn param-range-input
  [val min max step disabled? set-values on-change param-key]
  [:input.w-full.h-1.bg-gray-200.rounded-lg.appearance-none.cursor-pointer
   {:type "range" :min min :max max :step step
    :value val :disabled disabled?
    :on-change
    (fn [e]
      (let [v (js/parseFloat (.. e -target -value))]
        (set-values {param-key v})
        (when on-change (on-change param-key v))))}])

(defn param-number-input
  [val step disabled? set-values on-change param-key]
  [:input.border.rounded.p-0.5.w-12.text-center
   {:type "number" :value val :step step :disabled disabled?
    :style {:font-size "10px"}
    :on-change
    (fn [e]
      (let [v (js/parseFloat (.. e -target -value))]
        (set-values {param-key v})
        (when on-change (on-change param-key v))))}])

(defn param-input
  ([props param-key label min max step]
   (param-input props param-key label min max step false))
  ([{:keys [values set-values on-change]} param-key label
    min max step disabled?]
   (let [val (get values param-key)]
     [:div.mb-1
      [:label.block.font-semibold.uppercase.tracking-wider
       {:style {:font-size "8.5px"}
        :class (if disabled? "text-gray-400" "text-gray-500")}
       label]
      [:div.flex.items-center.gap-1
       [param-range-input val min max step disabled?
        set-values on-change param-key]
       [param-number-input val step disabled?
        set-values on-change param-key]]])))

;; ---------------------------------------------------------------------------
;; Stat display components
;; ---------------------------------------------------------------------------

(defn quality-fit-badge [res]
  [:span.px-2.py-1.rounded-lg.text-xs.font-bold.uppercase
   {:class (cond
             (< res 2.0) "bg-green-100 text-green-800"
             (< res 5.0) "bg-yellow-100 text-yellow-800"
             :else "bg-red-100 text-red-800")}
   (cond
     (< res 2.0) "Excellent"
     (< res 5.0) "Acceptable"
     :else "Poor")])

(defn stat-card [s]
  [:div.bg-white.p-2.rounded-lg.shadow-sm.border.text-xxs
   [:h5.font-bold.text-gray-400.uppercase (:label s)]
   [:div.mt-0.5.flex.items-baseline.gap-0.5
    [:span.text-sm.font-bold.text-gray-800
     (.toFixed (:expected s) 1)]
    [:span.text-gray-400
     (str " / " (:target s))]]
   [:div.mt-0.5.grid.grid-cols-2.gap-0.5
    [:div
     [:div {:class "text-gray-400 uppercase" :style {:font-size "8px"}}
      "SD"]
     [:div.font-semibold
      (.toFixed (:sd s) 2)]]
    [:div
     [:div {:class "text-gray-400 uppercase" :style {:font-size "8px"}}
      "Std Dev"]
     [:div.font-semibold
      {:class (if (> (js/Math.abs (:std-dev s)) 2)
                "text-red-600" "text-green-600")}
      (.toFixed (:std-dev s) 2)]]]])

(defn- calculate-residual [milestone-stats]
  (apply js/Math.max
         (map #(js/Math.abs (- (:expected %) (:target %)))
              milestone-stats)))

(defn stats-row [title stats]
  (let [res (calculate-residual stats)]
    [:div.mb-3
     [:h4.text-xs.font-bold.text-gray-700.mb-1.5.uppercase.tracking-wide title]
     [:div.grid.grid-cols-1.sm:grid-cols-4.gap-2
      (for [s stats]
        ^{:key (:label s)}
        [stat-card s])
      [:div.bg-white.p-2.rounded-lg.shadow-sm.border.flex.flex-row
       {:class "justify-between items-center col-span-1"}
       [:div
        [:h5.font-bold.text-gray-400.uppercase {:style {:font-size "9px"}}
         "Quality of Fit"]
        [:div.text-xs.font-extrabold.text-gray-800
         (.toFixed res 2) " residual"]]
       [:div
        [quality-fit-badge res]]]]]))
