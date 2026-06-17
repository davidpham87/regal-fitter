(ns app.state
  (:require [app.state-url :as state-url]
            [re-frame.core :as rf]
            [reagent.core :as r]
            [reitit.frontend.easy :as rfe]))

(defn- cfg-today-month []
  (let [base-time (.getTime (js/Date. 2021 1 8)) ;; Feb 8, 2021 (month index 1)
        today-time (.getTime (js/Date.))
        diff-ms (- today-time base-time)
        diff-days (/ diff-ms 86400000.0)]
    (/ diff-days 30.4375)))

;; --- Default Config ---
(def default-config
  {:prefilter-top-k 2000

   :n-total 126
   :n-per-arm 63
   :enroll-bands
   [[0 12 17] ;; Year 1
    [12 24 40]  ;; Year 2
    [24 36 60] ;; Year 3
    [36 38 9]]

   ;; [[0.0, 12.0, 15]     ;; Year 1
   ;;  [12.0, 24.0, 50]    ;; Year 2
   ;;  [24.0, 36.0, 56]    ;; Year 3
   ;;  [36.0, 38.0, 5]]

   :t-ia 46.0
   :t-upd 58.0
   :t-pr3 62.97
   :n-ev-ia 60
   :n-ev-upd 72
   :n-ev-pr3 78
   :n-ev-final 80
   :use-pr3-anchor true

   :prefilter-tol-ia 1.5
   :prefilter-tol-upd 1.5
   :prefilter-tol-pr3 1.5
   :tol-ia 4
   :tol-upd 3
   :tol-pr3 1

   :tol-increment-ia-upd 3
   :tol-increment-upd-pr3 2

   :futility-hr-max 0.83
   :efficacy-hr-min 0.35

   :pool-mos-min-at-ia 12
   :median-fu-target 13.5
   :median-fu-tol 3.0

   :enforce-no-80-by-today true
   :t-now (cfg-today-month)
   :no-80-slack-months 1.0
   :bat-strat-bin 1
   :bat-surv-36m-max 0.30

   :hr-threshold 0.636

   :n-sims-per-combo 1000
   :n-sims-screen 200
   :n-screen-min-pass 1
   :seed 20260508

   :bat-med-grid [4 25 1]
   :bat-shape-grid [0.7 1.0 0.1]

   :gps-med-grid-lo 20.0
   :gps-med-grid-hi 60.0
   :gps-med-grid-n 2
   :gps-shape-grid [0.6 1 0.1]

   :cure-frac-grid [0.2 0.8 0.1]
   :cure-unc-med-grid [10 58 4]
   :cure-unc-shape-grid [0.6 1.6 0.2]

   :leaky-cure-frac-grid [0.0 0.9 0.1]
   :leaky-unc-med-grid [10 60 5]
   :leaky-unc-shape-grid [0.6 1.2 0.1]
   :leak-grid [0.03 0.1 0.01]

   :bat-leaky-cure-frac-grid [0.1 0.3 0.1]
   :bat-leaky-unc-med-grid [10 50 10]
   :bat-leaky-unc-shape-grid [0.7 1.0 0.15]
   :bat-leak-grid [0.03 0.09 0.02]

   :families ["leaky"]
   :n-sims-aggregation 5000})

(def light-config
  (assoc default-config
         :bat-med-grid [8 22 2]
         :bat-shape-grid [0.7 1.0 0.15]
         :bat-strat-bin 1
         :gps-med-grid-n 3
         :n-sims-per-combo 100
         :n-sims-screen 10
         :families ["weibull"]))

(def py-config
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

   :prefilter-tol-ia 1.5
   :prefilter-tol-upd 1.5
   :prefilter-tol-pr3 1.5

   :tol-ia 4.0
   :tol-upd 4.0
   :tol-pr3 2.0
   :tol-increment-ia-upd 3.0
   :tol-increment-upd-pr3 2.0

   :futility-hr-max 0.83
   :efficacy-hr-min 0.40

   :pool-mos-min-at-ia 12.0
   :median-fu-target 13.5
   :median-fu-tol 2.0
   :enforce-no-80-by-today true
   :t-now (cfg-today-month)

   :no-80-slack-months 1.0

   :bat-strat-bin 1.0
   :hr-threshold 0.636
   :n-sims-per-combo 1000
   :n-sims-screen 250
   :n-screen-min-pass 1
   :seed 20260508

   :bat-med-grid [4.0 30.0 0.5]
   :bat-shape-grid [0.5 2.01 0.1]

   :gps-med-grid-lo 8.0
   :gps-med-grid-hi 250.0
   :gps-med-grid-n 36
   :gps-shape-grid [0.5 2.01 0.1]

   :cure-frac-grid [0.0 0.951 0.05]
   :cure-unc-med-grid [4.0 30.0 1.0]
   :cure-unc-shape-grid [0.5 2.01 0.25]

   :leaky-cure-frac-grid [0.0 0.91 0.1]
   :leaky-unc-med-grid [4.0 30.0 2.0]
   :leaky-unc-shape-grid [0.5 2.01 0.5]
   :leak-grid [0.0 0.101 0.01]

   :bat-leaky-cure-frac-grid [0.0 0.3 0.05]
   :bat-leaky-unc-med-grid [10 60 5]
   :bat-leaky-unc-shape-grid [0.6 1.2 0.1]
   :bat-leak-grid [0.03 0.1 0.01]

   :families ["weibull" "cure" "leaky"]

   :n-sims-aggregation 5000})

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

   [:bat-surv-36m-max :number]

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
   [:t-now :number]
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

   [:bat-leaky-cure-frac-grid [:vector :number]]
   [:bat-leaky-unc-med-grid [:vector :number]]
   [:bat-leaky-unc-shape-grid [:vector :number]]
   [:bat-leak-grid [:vector :number]]

   [:families [:vector :string]]
   [:n-sims-aggregation :int]])

(def default-stress-test-config
  {:mos-grid [8 31 1]
   :k-grid [0.8 1.0 0.05]
   :n-sims 1000
   :obs-ev-ia 60
   :obs-inc-upd 12
   :obs-inc-pr3 6
   :futility-hr-max 1.0
   :pool-mos-min 12.5
   :pool-mos-max 14.5
   :use-test-ia true
   :use-test-upd true
   :use-test-pr3 true
   :use-test-pool-mos false
   :use-test-hr true
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
           :enrollment-mode {:mode :manual
                             :median-month 30
                             :k 0.1
                             :n-samples 100
                             :window-param 2}
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
                       :params {:bat-med 10.0
                                :weibull-k 0.85
                                :delay 3.0
                                :gps-med 15
                                :cure-frac 0.2
                                :leak-yr 0.07
                                :placebo-mode? false
                                :n-sims 1000}
                       :calc-params {:bat-med 10.0
                                     :weibull-k 0.85
                                     :delay 3.0
                                     :gps-med 15
                                     :cure-frac 0.2
                                     :leak-yr 0.07
                                     :placebo-mode? false
                                     :n-sims 1000}}}))

;; --- DB Subscriptions / Event Handlers (using re-frame or manual swaps) ---

(rf/reg-cofx
 :app-state
 (fn [coeffects _]
   (assoc coeffects :app-state @app-state)))

(rf/reg-fx
 :app-state
 (fn [new-state]
   (reset! app-state new-state)))

(defn- sync-to-url! [data]
  #_(let [clean (if (map? data)
                  (dissoc data :enroll-bands :enrollment-mode)
                  data)]
      (-> (state-url/encode-state clean)
          (.then (fn [b64]
                   (let [curr-route (:current-route @app-state)
                         page (:page curr-route)
                         path-params (:path-params curr-route)
                         subtab (:subtab path-params)
                         [dest-route dest-path-params]
                         (cond
                           (#{:fitter :fitter-sub :fitter-sub-state} page)
                           [:fitter-sub-state
                            {:subtab (or subtab "config-form") :state b64}]

                           (#{:placebo-stress :placebo-stress-state} page)
                           [:placebo-stress-state {:state b64}]

                           (#{:discovery :discovery-sub :discovery-sub-state} page)
                           [:discovery-sub-state
                            {:subtab (or subtab "weibull") :state b64}]

                           :else
                           [page path-params])]
                     (when dest-route
                       (rfe/replace-state dest-route dest-path-params))))))))

(defn set-config! [k v]
  (swap! app-state assoc-in [:config k] v)
  (sync-to-url! (:config @app-state)))

(defn reset-config! [new-config]
  (swap! app-state (fn [state]
                     (-> state
                         (assoc :config new-config)
                         (update :config-version (fnil inc 0)))))
  (sync-to-url! new-config))

(defn update-config! [new-config]
  (swap! app-state assoc :config new-config)
  (sync-to-url! new-config))

(defn set-stress-test-config! [k v]
  (swap! app-state assoc-in [:stress-test-config k] v)
  (sync-to-url! (:stress-test-config @app-state)))

(defn update-stress-test-config! [new-config]
  (swap! app-state assoc :stress-test-config new-config)
  (sync-to-url! new-config))

(defn update-power-config! [new-config]
  (swap! app-state assoc :power-config new-config))

(defn update-discovery-params! [new-params]
  (swap! app-state assoc-in [:discovery :params] new-params)
  (sync-to-url! new-params))

(comment
  (:webr @app-state)
  {:status :error, :output nil, :result nil, :error "TypeError: inst_45580.captureR is not a function"})
