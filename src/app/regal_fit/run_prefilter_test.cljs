(ns app.regal-fit.run-prefilter-test
  "Script to run pre-filtering in ClojureScript and verify that the output
  values match the Python reference exactly."
  (:require [app.regal-fit.prefilter :as prefilter]
            [app.state :as state]
            [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [cljs.numpy :as np]
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

(defn get-grid-params [config-key config]
  (let [grid (get config config-key)]
    {:start (nth grid 0) :stop (nth grid 1) :step (nth grid 2)}))

(defn cross-filter-loop
  [config bat-ev gps-ev bat-params gps-params family bat-S-T gps-S-T]
  (let [bat-arr (np/nd-to-array bat-ev)
        gps-arr (np/nd-to-array gps-ev)
        grid-bat (alength bat-arr)
        grid-gps (alength gps-arr)
        num-anchors (alength (aget bat-arr 0))
        apply-pool (and bat-S-T gps-S-T (> (:pool-mos-min-at-ia config) 0))
        apply-pr3 (and (:use-pr3-anchor config) (>= num-anchors 3))
        bat-survival-arr (when apply-pool (np/nd-to-array bat-S-T))
        gps-survival-arr (when apply-pool (np/nd-to-array gps-S-T))
        results (js/Array.)]
    (dotimes [b grid-bat]
      (dotimes [g grid-gps]
        (let [expected-ia (+ (aget bat-arr b 0) (aget gps-arr g 0))
              expected-upd (+ (aget bat-arr b 1) (aget gps-arr g 1))
              expected-pr3 (when apply-pr3
                             (+ (aget bat-arr b 2) (aget gps-arr g 2)))
              validation-res
              (when (and
                     (prefilter/pass-events-gate?
                      expected-ia expected-upd config)
                     (prefilter/pass-pr3-gate?
                      expected-upd expected-pr3 config apply-pr3)
                     (prefilter/pass-pool-gate?
                      b g bat-survival-arr gps-survival-arr apply-pool))
                {:exp-ev-ia expected-ia
                 :exp-ev-upd expected-upd
                 :exp-ev-pr3 expected-pr3})]
          (when validation-res
            (.push results
                   (prefilter/build-result-record
                    b g validation-res family bat-params gps-params))))))
    (vec results)))

(defn apply-prefilter-weibull-loop
  [config]
  (let [[enroll-pts enroll-weights]
        (enrollment/expected-enrollment-times config)
        target-pts
        (np/array
         (if (:use-pr3-anchor config)
           #js [(:t-ia config) (:t-upd config) (:t-pr3 config)]
           #js [(:t-ia config) (:t-upd config)])
         "float64")
        bat-med-cfg (get-grid-params :bat-med-grid config)
        bat-meds (np/arange (:start bat-med-cfg)
                            (:stop bat-med-cfg)
                            (:step bat-med-cfg))
        bat-shape-cfg (get-grid-params :bat-shape-grid config)
        bat-shapes (np/arange (:start bat-shape-cfg)
                              (:stop bat-shape-cfg)
                              (:step bat-shape-cfg))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (np/ravel (aget bat-mesh 0))
        bat-shape-flat (np/ravel (aget bat-mesh 1))
        bat-scale-flat (survival/weibull-scale-from-median
                        bat-med-flat bat-shape-flat)
        gps-meds (np/geomspace (:gps-med-grid-lo config)
                               (:gps-med-grid-hi config)
                               (:gps-med-grid-n config))
        gps-shape-cfg (get-grid-params :gps-shape-grid config)
        gps-shapes (np/arange (:start gps-shape-cfg)
                              (:stop gps-shape-cfg)
                              (:step gps-shape-cfg))
        gps-mesh (np/meshgrid [gps-meds gps-shapes] #js {:indexing "ij"})
        gps-med-flat (np/ravel (aget gps-mesh 0))
        gps-shape-flat (np/ravel (aget gps-mesh 1))
        gps-scale-flat (survival/weibull-scale-from-median
                        gps-med-flat gps-shape-flat)
        bat-ev (enrollment/expected-arm-events
                survival/weibull-survival-probability
                [bat-scale-flat bat-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        gps-ev (enrollment/expected-arm-events
                survival/weibull-survival-probability
                [gps-scale-flat gps-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        pool-target (:pool-mos-min-at-ia config)
        bat-S-T (when (> pool-target 0)
                  (survival/weibull-survival-probability
                   pool-target bat-scale-flat bat-shape-flat))
        gps-S-T (when (> pool-target 0)
                  (survival/weibull-survival-probability
                   pool-target gps-scale-flat gps-shape-flat))]
    (cross-filter-loop
     config bat-ev gps-ev
     {:bat-med bat-med-flat
      :bat-shape bat-shape-flat
      :bat-scale bat-scale-flat}
     {:gps-med gps-med-flat
      :gps-shape gps-shape-flat
      :gps-scale gps-scale-flat}
     "weibull" bat-S-T gps-S-T)))

(defn apply-prefilter-cure-loop
  [config]
  (let [[enroll-pts enroll-weights]
        (enrollment/expected-enrollment-times config)
        target-pts
        (np/array
         (if (:use-pr3-anchor config)
           #js [(:t-ia config) (:t-upd config) (:t-pr3 config)]
           #js [(:t-ia config) (:t-upd config)])
         "float64")
        bat-med-cfg (get-grid-params :bat-med-grid config)
        bat-meds (np/arange (:start bat-med-cfg)
                            (:stop bat-med-cfg)
                            (:step bat-med-cfg))
        bat-shape-cfg (get-grid-params :bat-shape-grid config)
        bat-shapes (np/arange (:start bat-shape-cfg)
                              (:stop bat-shape-cfg)
                              (:step bat-shape-cfg))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (np/ravel (aget bat-mesh 0))
        bat-shape-flat (np/ravel (aget bat-mesh 1))
        bat-scale-flat (survival/weibull-scale-from-median
                        bat-med-flat bat-shape-flat)
        cf-cfg (get-grid-params :cure-frac-grid config)
        cf-grid (np/arange (:start cf-cfg) (:stop cf-cfg) (:step cf-cfg))
        unc-med-cfg (get-grid-params :cure-unc-med-grid config)
        unc-meds (np/arange (:start unc-med-cfg)
                            (:stop unc-med-cfg)
                            (:step unc-med-cfg))
        unc-shape-cfg (get-grid-params :cure-unc-shape-grid config)
        unc-shapes (np/arange (:start unc-shape-cfg)
                              (:stop unc-shape-cfg)
                              (:step unc-shape-cfg))
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes]
                              #js {:indexing "ij"})
        cf-flat (np/ravel (aget gps-mesh 0))
        unc-med-flat (np/ravel (aget gps-mesh 1))
        unc-shape-flat (np/ravel (aget gps-mesh 2))
        unc-scale-flat (survival/weibull-scale-from-median
                        unc-med-flat unc-shape-flat)
        bat-ev (enrollment/expected-arm-events
                survival/weibull-survival-probability
                [bat-scale-flat bat-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        gps-ev (enrollment/expected-arm-events
                survival/cure-survival-probability
                [cf-flat unc-scale-flat unc-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        pool-target (:pool-mos-min-at-ia config)
        bat-S-T (when (> pool-target 0)
                  (survival/weibull-survival-probability
                   pool-target bat-scale-flat bat-shape-flat))
        gps-S-T (when (> pool-target 0)
                  (survival/cure-survival-probability
                   pool-target cf-flat unc-scale-flat unc-shape-flat))]
    (cross-filter-loop
     config bat-ev gps-ev
     {:bat-med bat-med-flat
      :bat-shape bat-shape-flat
      :bat-scale bat-scale-flat}
     {:cure-frac cf-flat
      :unc-med unc-med-flat
      :unc-shape unc-shape-flat
      :unc-scale unc-scale-flat}
     "cure" bat-S-T gps-S-T)))

(defn apply-prefilter-leaky-loop
  [config]
  (let [[enroll-pts enroll-weights]
        (enrollment/expected-enrollment-times config)
        target-pts
        (np/array
         (if (:use-pr3-anchor config)
           #js [(:t-ia config) (:t-upd config) (:t-pr3 config)]
           #js [(:t-ia config) (:t-upd config)])
         "float64")
        bat-med-cfg (get-grid-params :bat-med-grid config)
        bat-meds (np/arange (:start bat-med-cfg)
                            (:stop bat-med-cfg)
                            (:step bat-med-cfg))
        bat-shape-cfg (get-grid-params :bat-shape-grid config)
        bat-shapes (np/arange (:start bat-shape-cfg)
                              (:stop bat-shape-cfg)
                              (:step bat-shape-cfg))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (np/ravel (aget bat-mesh 0))
        bat-shape-flat (np/ravel (aget bat-mesh 1))
        bat-scale-flat (survival/weibull-scale-from-median
                        bat-med-flat bat-shape-flat)
        cf-cfg (get-grid-params :leaky-cure-frac-grid config)
        cf-grid (np/arange (:start cf-cfg) (:stop cf-cfg) (:step cf-cfg))
        unc-med-cfg (get-grid-params :leaky-unc-med-grid config)
        unc-meds (np/arange (:start unc-med-cfg)
                            (:stop unc-med-cfg)
                            (:step unc-med-cfg))
        unc-shape-cfg (get-grid-params :leaky-unc-shape-grid config)
        unc-shapes (np/arange (:start unc-shape-cfg)
                              (:stop unc-shape-cfg)
                              (:step unc-shape-cfg))
        leaks-cfg (get-grid-params :leak-grid config)
        leaks (np/arange (:start leaks-cfg)
                         (:stop leaks-cfg)
                         (:step leaks-cfg))
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes leaks]
                              #js {:indexing "ij"})
        cf-flat (np/ravel (aget gps-mesh 0))
        unc-med-flat (np/ravel (aget gps-mesh 1))
        unc-shape-flat (np/ravel (aget gps-mesh 2))
        leak-flat (np/ravel (aget gps-mesh 3))
        unc-scale-flat (survival/weibull-scale-from-median
                        unc-med-flat unc-shape-flat)
        bat-ev (enrollment/expected-arm-events
                survival/weibull-survival-probability
                [bat-scale-flat bat-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        gps-ev (enrollment/expected-arm-events
                survival/leaky-cure-survival-probability
                [cf-flat unc-scale-flat unc-shape-flat leak-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        pool-target (:pool-mos-min-at-ia config)
        bat-S-T (when (> pool-target 0)
                  (survival/weibull-survival-probability
                   pool-target bat-scale-flat bat-shape-flat))
        gps-S-T (when (> pool-target 0)
                  (survival/leaky-cure-survival-probability
                   pool-target cf-flat unc-scale-flat
                   unc-shape-flat leak-flat))]
    (cross-filter-loop
     config bat-ev gps-ev
     {:bat-med bat-med-flat
      :bat-shape bat-shape-flat
      :bat-scale bat-scale-flat}
     {:cure-frac cf-flat
      :unc-med unc-med-flat
      :unc-shape unc-shape-flat
      :unc-scale unc-scale-flat
      :leak-yr leak-flat}
     "leaky" bat-S-T gps-S-T)))

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
          (do (println "  FAIL: mismatches found!"
                       (js/JSON.stringify (clj->js mismatches) nil 2))
              false))))))

(defn main []
  (let [config test-config
        ;; 1. Run CLJS Vectorized Prefilter
        vec-weibull (prefilter/apply-prefilter-weibull config)
        vec-cure (prefilter/apply-prefilter-cure config)
        vec-leaky (prefilter/apply-prefilter-leaky config)

        ;; 2. Run CLJS Loop Prefilter
        loop-weibull (apply-prefilter-weibull-loop config)
        loop-cure (apply-prefilter-cure-loop config)
        loop-leaky (apply-prefilter-leaky-loop config)

        ;; 3. Load Python reference
        py-raw-str (.readFileSync fs "datasets/py_prefilter_results.json" "utf8")
        py-data (js->clj (js/JSON.parse py-raw-str))
        py-weibull (get py-data "weibull")
        py-cure (get py-data "cure")
        py-leaky (get py-data "leaky")

        ;; Verify Loop vs Vectorized
        loop-vec-w? (= (count vec-weibull) (count loop-weibull))
        loop-vec-c? (= (count vec-cure) (count loop-cure))
        loop-vec-l? (= (count vec-leaky) (count loop-leaky))

        ;; Verify CLJS vs Python
        py-vec-w? (compare-prefilter-results
                   "weibull" vec-weibull py-weibull
                   [:bat-med :bat-shape :gps-med :gps-shape])
        py-vec-c? (compare-prefilter-results
                   "cure" vec-cure py-cure
                   [:bat-med :bat-shape :cure-frac :unc-med :unc-shape])
        py-vec-l? (compare-prefilter-results
                   "leaky" vec-leaky py-leaky
                   [:bat-med :bat-shape :cure-frac :unc-med :unc-shape :leak-yr])]

    (println "\n==============================================")
    (println "PREFILTER EQUIVALENCE VERIFICATION REPORT")
    (println "==============================================")
    (println
     "| Family  | Python | CLJS Vec | CLJS Loop | Py=Vec? | Vec=Loop? |")
    (println
     "|---------|--------|----------|-----------|---------|-----------|")
    (println (str "| Weibull | " (count py-weibull) " | " (count vec-weibull)
                  " | " (count loop-weibull) " | " (if py-vec-w? "PASS" "FAIL")
                  " | " (if loop-vec-w? "PASS" "FAIL") " |"))
    (println (str "| Cure    | " (count py-cure) " | " (count vec-cure)
                  " | " (count loop-cure) " | " (if py-vec-c? "PASS" "FAIL")
                  " | " (if loop-vec-c? "PASS" "FAIL") " |"))
    (println (str "| Leaky   | " (count py-leaky) " | " (count vec-leaky)
                  " | " (count loop-leaky) " | " (if py-vec-l? "PASS" "FAIL")
                  " | " (if loop-vec-l? "PASS" "FAIL") " |"))
    (println "==============================================")))
