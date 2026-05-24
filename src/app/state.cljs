(ns app.state
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [malli.core :as m]))

;; --- Default Config ---
(def default-config
  {:n-total 126
   :n-per-arm 63
   :enroll-bands [[0.0 12.0 15]
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

   :n-sims-per-combo 1000
   :n-sims-screen 100
   :n-screen-min-pass 1
   :seed 20260508

   :bat-med-grid [8 22 1]
   :bat-shape-grid [0.7 1.0 0.1]
   :gps-med-grid-lo 8.0
   :gps-med-grid-hi 50.0
   :gps-med-grid-n 5
   :gps-shape-grid [0.5 1.5 0.1]

   :cure-frac-grid [0.0 0.8 0.1]
   :cure-unc-med-grid [10 50.0 1.0]
   :cure-unc-shape-grid [0.6 1.81 0.4]

   :leaky-cure-frac-grid [0.0 0.8 0.1]
   :leaky-unc-med-grid [10 50 2.0]
   :leaky-unc-shape-grid [0.6 1.2 0.1]
   :leak-grid [0.0 0.2 0.1]

   :families ["weibull" "leaky"]
})

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

;; --- State atom ---
(defonce app-state
  (r/atom {:config default-config
           :status :idle ;; :idle, :running-stage1, :running-stage2, :done, :error
           :progress {:total 0 :completed 0}
           :results {} ;; family -> list of combos
           :error-message nil
           :view :config-form ;; :config-form, :config-json, :results
           :active-page :home
           :discovery {:active-family "weibull"
                       :params {:bat-med 8.0 :weibull-k 1.0
                                :gps-med 12.0
                                :cure-frac 0.2 :unc-med 10.0
                                :leak-yr 0.05}
                       :calc-params {:bat-med 8.0 :weibull-k 1.0
                                     :gps-med 12.0
                                     :cure-frac 0.2 :unc-med 10.0
                                     :leak-yr 0.05}}
           }))

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
