(ns app.regal-fit.run-prefilter-test
  "Script to run pre-filtering in ClojureScript and verify that the output values
  match the Python reference exactly."
  (:require [app.regal-fit.prefilter :as prefilter]
            [app.state :as state]
            [clojure.string :as str]
            ["fs" :as fs]))

(def test-config
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
   :prefilter-tol-ia 9999.0
   :prefilter-tol-upd 9999.0
   :prefilter-tol-pr3 9999.0
   :tol-ia 4.0
   :tol-upd 4.0
   :tol-pr3 2.0
   :tol-increment-ia-upd 9999.0
   :tol-increment-upd-pr3 9999.0
   :futility-hr-max 0.83
   :efficacy-hr-min 0.40
   :pool-mos-min-at-ia 0.0
   :median-fu-target 13.5
   :median-fu-tol 2.0
   :enforce-no-80-by-today true
   :t-now 64.0985
   :no-80-slack-months 1.0
   :bat-strat-bin 1.0
   :hr-threshold 0.636
   :bat-med-grid [8.0 12.0 2.0]
   :bat-shape-grid [0.8 1.2 0.2]
   :gps-med-grid-lo 10.0
   :gps-med-grid-hi 30.0
   :gps-med-grid-n 2
   :gps-shape-grid [0.8 1.2 0.2]
   :cure-frac-grid [0.1 0.3 0.1]
   :cure-unc-med-grid [10.0 15.0 5.0]
   :cure-unc-shape-grid [0.8 1.2 0.2]
   :leaky-cure-frac-grid [0.1 0.3 0.1]
   :leaky-unc-med-grid [10.0 15.0 5.0]
   :leaky-unc-shape-grid [0.8 1.2 0.2]
   :leak-grid [0.01 0.03 0.01]
   :families ["weibull" "cure" "leaky"]
   :n-sims-aggregation 5000})

(defn approx= [a b epsilon]
  (< (js/Math.abs (- a b)) epsilon))

(defn find-matching-record [py-records cljs-rec keys-to-match]
  (first
   (filter (fn [py-rec]
             (every? (fn [k]
                       (let [py-key (str/replace (name k) "-" "_")
                             py-val (get py-rec py-key)
                             cljs-val (get cljs-rec k)]
                         (if (or (nil? py-val) (nil? cljs-val))
                           false
                           (approx= py-val cljs-val 1e-5))))
                     keys-to-match))
           py-records)))

(defn compare-prefilter-results [family cljs-results py-records keys-to-match]
  (println "Comparing prefilter for family:" family)
  (let [total-cljs (count cljs-results)
        total-py (count py-records)]
    (if (not= total-cljs total-py)
      (do (println "  FAIL: count mismatch! CLJS:" total-cljs "Python:" total-py)
          false)
      (let [mismatches
            (keep (fn [cljs-rec]
                    (if-let [py-rec (find-matching-record
                                     py-records cljs-rec keys-to-match)]
                      (let [diff-ia (js/Math.abs
                                     (- (get py-rec "exp_ev_ia")
                                        (:exp-ev-ia cljs-rec)))
                            diff-upd (js/Math.abs
                                      (- (get py-rec "exp_ev_upd")
                                         (:exp-ev-upd cljs-rec)))
                            diff-pr3 (if-let [py-pr3 (get py-rec "exp_ev_pr3")]
                                       (js/Math.abs (- py-pr3
                                                       (:exp-ev-pr3 cljs-rec)))
                                       0.0)]
                        (when (or (> diff-ia 1e-4)
                                  (> diff-upd 1e-4)
                                  (> diff-pr3 1e-4))
                          {:cljs cljs-rec :py py-rec}))
                      {:error "No matching py record" :cljs cljs-rec}))
                  cljs-results)]
        (if (empty? mismatches)
          (do (println "  PASS: all" total-cljs "records match.") true)
          (do (println "  FAIL: mismatches found!" (js/JSON.stringify (clj->js mismatches) nil 2))
              false))))))

(defn main []
  (let [config state/default-config
        cljs-weibull (prefilter/apply-prefilter-weibull config)
        cljs-cure (prefilter/apply-prefilter-cure config)
        cljs-leaky (prefilter/apply-prefilter-leaky config)]

    (println "Weibull count:" (count cljs-weibull))
    (println "Cure count:" (count cljs-cure))
    (println "Leaky count:" (count cljs-leaky))))
