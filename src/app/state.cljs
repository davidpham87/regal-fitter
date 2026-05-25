(ns app.state
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [malli.core :as m]))

;; --- Default Config ---
(def default-config
  {:n-total 126
   :n-per-arm 63
   :enroll-bands
   [[0.0 12.0 15]
    [12.0 24.0 50]
    [24.0 36.0 56]
    [36.0 38.0 5]]

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
   :tol-ia 2.0
   :tol-upd 2.0
   :tol-pr3 3.0

   :tol-increment-ia-upd 5.0
   :tol-increment-upd-pr3 4.0

   :futility-hr-max 0.9
   :efficacy-hr-min 0.00

   :pool-mos-min-at-ia 13.5
   :median-fu-target 13.5
   :median-fu-tol 3.0

   :enforce-no-80-by-today false
   :no-80-slack-months 1.0
   :bat-strat-bin 1.0

   :hr-threshold 0.636

   :n-sims-per-combo 500
   :n-sims-screen 100
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
   [[0.0 1.0 2]
    [1.0 2.0 2]
    [2.0 3.0 2]
    [3.0 4.0 2]
    [4.0 5.0 3]
    [5.0 6.0 3]
    [6.0 7.0 3]
    [7.0 8.0 3]
    [8.0 9.0 3]
    [9.0 10.0 3]
    [10.0 11.0 4]
    [11.0 12.0 4]
    [12.0 13.0 4]
    [13.0 14.0 4]
    [14.0 15.0 4]
    [15.0 16.0 4]
    [16.0 17.0 4]
    [17.0 18.0 4]
    [18.0 19.0 4]
    [19.0 20.0 4]
    [20.0 21.0 4]
    [21.0 22.0 4]
    [22.0 23.0 4]
    [23.0 24.0 4]
    [24.0 25.0 4]
    [25.0 26.0 4]
    [26.0 27.0 4]
    [27.0 28.0 4]
    [28.0 29.0 3]
    [29.0 30.0 3]
    [30.0 31.0 3]
    [31.0 32.0 3]
    [32.0 33.0 3]
    [33.0 34.0 3]
    [34.0 35.0 2]
    [35.0 36.0 2]
    [36.0 37.0 2]
    [37.0 38.0 4]]
   :t-ia 46.0
   :t-upd 58.0
   :t-pr3 62.97
   :seed 42})

;; --- State atom ---
(defonce app-state
  (r/atom {:config default-config
           :stress-test-config default-stress-test-config
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

(defn update-config! [new-config]
  (swap! app-state assoc :config new-config))

(defn set-stress-test-config! [k v]
  (swap! app-state assoc-in [:stress-test-config k] v))

(defn update-stress-test-config! [new-config]
  (swap! app-state assoc :stress-test-config new-config))
