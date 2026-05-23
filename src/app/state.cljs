(ns app.state
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [malli.core :as m]))

;; --- Default Config ---
(def default-config
  {:n_total 126
   :n_per_arm 63
   :enroll_bands [[0.0 12.0 15]
                  [12.0 24.0 50]
                  [24.0 36.0 56]
                  [36.0 38.0 5]]
   :t_ia 46.0
   :t_upd 58.0
   :t_pr3 62.97
   :n_ev_ia 60
   :n_ev_upd 72
   :n_ev_pr3 78
   :n_ev_final 80
   :use_pr3_anchor true

   :prefilter_tol_ia 2.5
   :prefilter_tol_upd 2.5
   :prefilter_tol_pr3 2.5
   :tol_ia 5.0
   :tol_upd 5.0
   :tol_pr3 3.0

   :tol_increment_ia_upd 5.0
   :tol_increment_upd_pr3 4.0

   :futility_hr_max 0.99
   :efficacy_hr_min 0.00

   :pool_mos_min_at_ia 10.0
   :median_fu_target 13.5
   :median_fu_tol 3.0

   :enforce_no_80_by_today false
   :no_80_slack_months 1.0
   :bat_strat_bin 1.0

   :hr_threshold 0.636

   :n_sims_per_combo 50
   :n_sims_screen 10
   :n_screen_min_pass 1
   :seed 20260508

   :bat_med_grid [4.0 30.01 5.0]
   :bat_shape_grid [0.6 1.81 0.50]
   :gps_med_grid_lo 8.0
   :gps_med_grid_hi 250.0
   :gps_med_grid_n 5
   :gps_shape_grid [0.6 1.81 0.50]

   :cure_frac_grid [0.0 0.91 0.20]
   :cure_unc_med_grid [4.0 30.01 5.0]
   :cure_unc_shape_grid [0.6 1.81 0.50]

   :leaky_cure_frac_grid [0.0 0.91 0.20]
   :leaky_unc_med_grid [4.0 30.0 5.0]
   :leaky_unc_shape_grid [0.5 2.01 0.50]
   :leak_grid [0.0 0.101 0.05]

   :families ["weibull" "cure" "leaky"]
   })

(def config-schema
  [:map
   [:n_total :int]
   [:n_per_arm :int]
   [:enroll_bands [:vector [:vector :number]]]
   [:t_ia :number]
   [:t_upd :number]
   [:t_pr3 :number]
   [:n_ev_ia :int]
   [:n_ev_upd :int]
   [:n_ev_pr3 :int]
   [:n_ev_final :int]
   [:use_pr3_anchor :boolean]

   [:prefilter_tol_ia :number]
   [:prefilter_tol_upd :number]
   [:prefilter_tol_pr3 :number]
   [:tol_ia :number]
   [:tol_upd :number]
   [:tol_pr3 :number]

   [:tol_increment_ia_upd :number]
   [:tol_increment_upd_pr3 :number]

   [:futility_hr_max :number]
   [:efficacy_hr_min :number]

   [:pool_mos_min_at_ia :number]
   [:median_fu_target :number]
   [:median_fu_tol :number]

   [:enforce_no_80_by_today :boolean]
   [:no_80_slack_months :number]
   [:bat_strat_bin :number]

   [:hr_threshold :number]

   [:n_sims_per_combo :int]
   [:n_sims_screen :int]
   [:n_screen_min_pass :int]
   [:seed :int]

   [:bat_med_grid [:vector :number]]
   [:bat_shape_grid [:vector :number]]
   [:gps_med_grid_lo :number]
   [:gps_med_grid_hi :number]
   [:gps_med_grid_n :int]
   [:gps_shape_grid [:vector :number]]

   [:cure_frac_grid [:vector :number]]
   [:cure_unc_med_grid [:vector :number]]
   [:cure_unc_shape_grid [:vector :number]]

   [:leaky_cure_frac_grid [:vector :number]]
   [:leaky_unc_med_grid [:vector :number]]
   [:leaky_unc_shape_grid [:vector :number]]
   [:leak_grid [:vector :number]]

   [:families [:vector :string]]])

;; --- State atom ---
(defonce app-state
  (r/atom {:config default-config
           :status :idle ;; :idle, :running-stage1, :running-stage2, :done, :error
           :progress {:total 0 :completed 0}
           :results {} ;; family -> list of combos
           :error-message nil
           :view :config-form ;; :config-form, :config-json, :results
           }))

;; --- DB Subscriptions / Event Handlers (using re-frame or manual swaps) ---

(defn set-config! [k v]
  (swap! app-state assoc-in [:config k] v))

(defn update-config! [new-config]
  (swap! app-state assoc :config new-config))
