(ns app.state
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [malli.core :as m]))

;; --- Default Config ---
(def default-config
  {:n-total 126
   :n-per-arm 63
   :enroll-bands
   [[0.0 12.0 12]
    [12.0 18.0 6]
    [18.0 24.0 9]
    [24.0 30.0 15]
    [24.0 28.0 24]  ;; midpoint
    [28.0 34.0 39]  ;; total should be 105 here
    [34.0 38.0 21]] ;; 126

   :t-ia 46.0
   :t-upd 58.0
   :t-pr3 62.97
   :n-ev-ia 60
   :n-ev-upd 72
   :n-ev-pr3 78
   :n-ev-final 80
   :use-pr3-anchor true

   :prefilter-tol-ia 2.5
   :prefilter-tol-upd 2.5
   :prefilter-tol-pr3 2.5
   :tol-ia 1.5
   :tol-upd 1.5
   :tol-pr3 1.5

   :tol-increment-ia-upd 3
   :tol-increment-upd-pr3 3

   :futility-hr-max 0.85
   :efficacy-hr-min 0.00

   :pool-mos-min-at-ia 12
   :median-fu-target 13.5
   :median-fu-tol 3.0

   :enforce-no-80-by-today true
   :no-80-slack-months 1.0
   :bat-strat-bin 0.5

   :hr-threshold 0.636

   :n-sims-per-combo 500
   :n-sims-screen 20
   :n-screen-min-pass 1
   :seed 20260508

   :bat-med-grid [8 22 1]
   :bat-shape-grid [0.7 1.0 0.1]

   :gps-med-grid-lo 15.0
   :gps-med-grid-hi 45.0
   :gps-med-grid-n 5
   :gps-shape-grid [0.6 1.0 0.1]

   :cure-frac-grid [0.2 0.8 0.1]
   :cure-unc-med-grid [15 45.0 5]
   :cure-unc-shape-grid [0.6 1.0 0.1]

   :leaky-cure-frac-grid [0.2 0.8 0.1]
   :leaky-unc-med-grid [15 45 5]
   :leaky-unc-shape-grid [0.6 1.0 0.1]
   :leak-grid [0.05 0.08 0.01]

   :families ["weibull" "leaky" "cure"]
})

(def light-config
  (assoc default-config
         :bat-med-grid [8 22 2]
         :bat-shape-grid [0.7 1.0 0.15]
         :bat-strat-bin 1
         :gps-med-grid-n 3
         :n-sims-per-combo 100
         :n-sims-screen 10
         :families ["weibull"]))

(def config-schema
  [:map
   [:n-total :int]
   [:n-per-arm :int]
   [:enroll-bands [:vector [:vector :number]]]
   [:t-ia :number]
   [:t-upd :number]
   [:t-pr3 :number]
   [:n-ev-ia :int]
   [:n-ev-upd :int]
   [:n-ev-pr3 :int]
   [:n-ev-final :int]
   [:use-pr3-anchor :boolean]

   [:prefilter-tol-ia :number]
   [:prefilter-tol-upd :number]
   [:prefilter-tol-pr3 :number]
   [:tol-ia :number]
   [:tol-upd :number]
   [:tol-pr3 :number]

   [:tol-increment-ia-upd :number]
   [:tol-increment-upd-pr3 :number]

   [:futility-hr-max :number]
   [:efficacy-hr-min :number]

   [:pool-mos-min-at-ia :number]
   [:median-fu-target :number]
   [:median-fu-tol :number]

   [:enforce-no-80-by-today :boolean]
   [:no-80-slack-months :number]
   [:bat-strat-bin :number]

   [:hr-threshold :number]

   [:n-sims-per-combo :int]
   [:n-sims-screen :int]
   [:n-screen-min-pass :int]
   [:seed :int]

   [:bat-med-grid [:vector :number]]
   [:bat-shape-grid [:vector :number]]
   [:gps-med-grid-lo :number]
   [:gps-med-grid-hi :number]
   [:gps-med-grid-n :int]
   [:gps-shape-grid [:vector :number]]

   [:cure-frac-grid [:vector :number]]
   [:cure-unc-med-grid [:vector :number]]
   [:cure-unc-shape-grid [:vector :number]]

   [:leaky-cure-frac-grid [:vector :number]]
   [:leaky-unc-med-grid [:vector :number]]
   [:leaky-unc-shape-grid [:vector :number]]
   [:leak-grid [:vector :number]]

   [:families [:vector :string]]])

(def default-stress-test-config
  {:mos-grid [8 31 1]
   :k-grid [0.8 1.0 0.05]
   :n-sims 1000
   :obs-ev-ia 60
   :obs-inc-upd 12
   :obs-inc-pr3 6
   :futility-hr-max 1.0
   :pool-mos-min 12.0
   :enroll-bands
   [[0.0 12.0 12]
    [12.0 18.0 6]
    [18.0 24.0 9]
    [24.0 30.0 15]
    [24.0 28.0 24]  ;; midpoint
    [28.0 34.0 39]  ;; total should be 105 here
    [34.0 38.0 21]]
   :t-ia 46.0
   :t-upd 58.0
   :t-pr3 62.97
   :seed 42})

(def default-power-config
  {:n-total 126
   :bat-mos-ref 8.0
   :gps-mos-ref 12.0
   :alpha 0.025
   :power 0.9
   :p-event 0.635  ;; 80/126
   :bat-mos-range [6.0 20.0 1.0]  ;; [start stop step]
   :gps-mos-range [10.0 30.0 1.0]})

;; --- State atom ---
(defonce app-state
  (r/atom {:config default-config
           :config-version 0
           :stress-test-config default-stress-test-config
           :power-config default-power-config
           :status :idle ;; :idle, :running-stage1, :running-stage2, :done, :error
           :stress-test-status :idle
           :progress {:total 0 :completed 0}
           :stress-test-progress {:total 0 :completed 0}
           :results {} ;; family -> list of combos
           :stress-test-results []
           :error-message nil
           :view :config-form ;; :config-form, :config-json, :results
           :active-page :home
           :discovery {:active-family "leaky"
                       :params {:bat-med 8.0
                                :weibull-k 1.0
                                :gps-med 12.0
                                :cure-frac 0.2
                                :leak-yr 0.07
                                :placebo-mode? false
                                :n-sims 1000}
                       :calc-params {:bat-med 8.0
                                     :weibull-k 1.0
                                     :gps-med 12.0
                                     :cure-frac 0.2
                                     :leak-yr 0.07
                                     :placebo-mode? false
                                     :n-sims 1000}}}))

;; --- DB Subscriptions / Event Handlers (using re-frame or manual swaps) ---

(rf/reg-event-db
  :navigate
  (fn [db [_ page]]
    (swap! app-state assoc :active-page page)
    db))

(defn set-config! [k v]
  (swap! app-state assoc-in [:config k] v))

(defn reset-config! [new-config]
  (swap! app-state (fn [state]
                     (-> state
                         (assoc :config new-config)
                         (update :config-version (fnil inc 0))))))

(defn update-config! [new-config]
  (swap! app-state assoc :config new-config))

(defn set-stress-test-config! [k v]
  (swap! app-state assoc-in [:stress-test-config k] v))

(defn update-stress-test-config! [new-config]
  (swap! app-state assoc :stress-test-config new-config))

(defn update-power-config! [new-config]
  (swap! app-state assoc :power-config new-config))
