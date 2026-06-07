(ns app.discovery.ui)

;; ---------------------------------------------------------------------------
;; Param input primitives
;; ---------------------------------------------------------------------------

(defn param-range-input
  [val min max step disabled? set-values on-change param-key]
  [:input.w-full
   {:type "range" :min (- min 1e-6) :max (+ max 1e-6) :step step
    :value val :disabled disabled?
    :on-change
    (fn [e]
      (let [v (js/parseFloat (.. e -target -value))]
        (set-values {param-key v})
        (when on-change (on-change param-key v))))}])

(defn param-number-input
  [val step disabled? set-values on-change param-key]
  [:input.border.rounded.p-1.text-xs.w-16
   {:type "number" :value val :step step :disabled disabled?
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
     [:div.mb-2
      [:label.block.text-xs.font-semibold
       {:class (if disabled? "text-gray-400" "text-gray-600")}
       label]
      [:div.flex.items-center.gap-2
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
  [:div.bg-white.p-3.rounded-xl.shadow-sm.border
   [:h5.text-xs.font-bold.text-gray-500.uppercase (:label s)]
   [:div.mt-1.flex.items-baseline.gap-1
    [:span.text-xl.font-bold.text-gray-800
     (.toFixed (:expected s) 1)]
    [:span.text-xs.text-gray-400
     (str " / " (:target s))]]
   [:div.mt-1.grid.grid-cols-2.gap-1
    [:div
     [:div {:style {:font-size "10px"}
            :class "text-gray-400 uppercase"}
      "SD"]
     [:div.text-xs.font-semibold
      (.toFixed (:sd s) 2)]]
    [:div
     [:div {:style {:font-size "10px"}
            :class "text-gray-400 uppercase"}
      "Std Dev"]
     [:div.text-xs.font-semibold
      {:class (if (> (js/Math.abs (:std-dev s)) 2)
                "text-red-600" "text-green-600")}
      (.toFixed (:std-dev s) 2)]]]])

(defn- calculate-residual [milestone-stats]
  (apply js/Math.max
         (map #(js/Math.abs (- (:expected %) (:target %)))
              milestone-stats)))

(defn stats-row [title stats]
  (let [res (calculate-residual stats)]
    [:div.mb-6
     [:h4.text-sm.font-bold.text-gray-700.mb-3 title]
     [:div.grid.grid-cols-1.sm:grid-cols-4.gap-3
      (for [s stats]
        ^{:key (:label s)}
        [stat-card s])
      [:div.bg-white.p-3.rounded-xl.shadow-sm.border.flex.flex-col
       {:class "justify-between"}
       [:div
        [:h5.text-xs.font-bold.text-gray-500.uppercase
         "Quality of Fit"]
        [:div.text-xl.font-extrabold.text-gray-800.mt-1
         (.toFixed res 2) " residual"]]
       [:div.mt-2
        [quality-fit-badge res]]]]]))
