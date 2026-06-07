(ns app.regal-fit.prefilter
  "Functions for applying pre-filtering on trial design assumptions."
  (:require [cljs.numpy :as np]
            [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]))

(defn- pass-events-gate?
  "Checks if event counts at IA and UPD are within tolerance."
  [expected-ia expected-upd config]
  (let [diff-ia (js/Math.abs (- expected-ia (:n-ev-ia config)))
        diff-upd (js/Math.abs (- expected-upd (:n-ev-upd config)))
        increment-ia-upd (- expected-upd expected-ia)
        target-increment (- (:n-ev-upd config) (:n-ev-ia config))
        diff-increment (js/Math.abs (- increment-ia-upd target-increment))]
    (and (<= diff-ia (:prefilter-tol-ia config))
         (<= diff-upd (:prefilter-tol-upd config))
         (<= diff-increment (:tol-increment-ia-upd config)))))

(defn- pass-pr3-gate?
  "Checks if event counts at PR3 are within tolerance."
  [expected-upd expected-pr3 config apply-pr3]
  (if-not apply-pr3 true
    (let [diff-pr3 (js/Math.abs (- expected-pr3 (:n-ev-pr3 config)))
          increment-upd-pr3 (- expected-pr3 expected-upd)
          target-increment (- (:n-ev-pr3 config) (:n-ev-upd config))
          diff-increment (js/Math.abs (- increment-upd-pr3 target-increment))]
      (and (<= diff-pr3 (:prefilter-tol-pr3 config))
           (<= diff-increment (:tol-increment-upd-pr3 config))))))

(defn- pass-pool-gate?
  "Checks if pool OS at minimum months is above threshold."
  [bat-idx gps-idx bat-survival-arr gps-survival-arr apply-pool]
  (if-not apply-pool true
    (>= (+ (aget bat-survival-arr bat-idx) (aget gps-survival-arr gps-idx)) 1.0)))

(defn- validate-scenario
  "Helper function to validate a specific combination of BAT and GPS curves."
  [bat-idx gps-idx total-events-arr bat-survival-arr gps-survival-arr apply-pool apply-pr3 config]
  (let [expected-ia (aget total-events-arr bat-idx gps-idx 0)
        expected-upd (aget total-events-arr bat-idx gps-idx 1)
        expected-pr3 (when apply-pr3 (aget total-events-arr bat-idx gps-idx 2))]
    (when (and (pass-events-gate? expected-ia expected-upd config)
               (pass-pr3-gate? expected-upd expected-pr3 config apply-pr3)
               (pass-pool-gate? bat-idx gps-idx bat-survival-arr gps-survival-arr apply-pool))
      {:exp-ev-ia expected-ia :exp-ev-upd expected-upd :exp-ev-pr3 expected-pr3})))

(defn- build-result-record
  "Creates a configuration record for an accepted scenario."
  [bat-idx gps-idx validation-res family bat-params gps-params]
  (let [record (cond-> {:family family
                        :exp-ev-ia (:exp-ev-ia validation-res)
                        :exp-ev-upd (:exp-ev-upd validation-res)}
                 (:exp-ev-pr3 validation-res) (assoc :exp-ev-pr3 (:exp-ev-pr3 validation-res)))]
    (reduce-kv (fn [acc k v] (assoc acc k (.item v bat-idx)))
               (reduce-kv (fn [acc k v] (assoc acc k (.item v gps-idx))) record gps-params)
               bat-params)))

(defn- process-chunk
  "Processes a chunk of BAT survival curves against all GPS curves."
  [start-idx end-idx grid-bat grid-gps num-anchors apply-pool apply-pr3 config bat-ev gps-ev bat-S-T gps-S-T family bat-params gps-params]
  (let [bat-ev-slice (np/slice bat-ev start-idx end-idx)
        bat-ev-3d (np/reshape bat-ev-slice
                              #js [(- end-idx start-idx) 1 num-anchors])
        total-events (np/nd-to-array
                      (np/add bat-ev-3d
                              (np/reshape gps-ev
                                          #js [1 grid-gps num-anchors])))
        bat-survival (when apply-pool
                       (np/nd-to-array
                        (np/slice bat-S-T start-idx end-idx)))
        gps-survival (when apply-pool (np/nd-to-array gps-S-T))]
    (keep (fn [pair]
            (let [local-bat (first pair) global-gps (second pair)]
              (when-let [res (validate-scenario local-bat global-gps total-events bat-survival gps-survival apply-pool apply-pr3 config)]
                (build-result-record (+ start-idx local-bat) global-gps res family bat-params gps-params))))
          (for [b (range (- end-idx start-idx)) g (range grid-gps)] [b g]))))

(defn cross-filter
  "Filters all combinations of BAT and GPS survival curves."
  [config bat-ev gps-ev bat-params gps-params family bat-S-T gps-S-T]
  (let [grid-bat (first (.-shape bat-ev)) grid-gps (first (.-shape gps-ev)) num-anchors (second (.-shape bat-ev))
        apply-pool (and bat-S-T gps-S-T (> (:pool-mos-min-at-ia config) 0))
        apply-pr3 (and (:use-pr3-anchor config) (>= num-anchors 3))
        chunk-size 2048]
    (mapcat #(process-chunk % (js/Math.min (+ % chunk-size) grid-bat) grid-bat grid-gps num-anchors apply-pool apply-pr3 config bat-ev gps-ev bat-S-T gps-S-T family bat-params gps-params)
            (range 0 grid-bat chunk-size))))

(defn- get-grid-params [config-key config]
  (let [grid (get config config-key)]
    {:start (nth grid 0) :stop (nth grid 1) :step (nth grid 2)}))

(defn apply-prefilter-weibull
  "Runs pre-filtering for the Weibull distribution family."
  {:malli/schema [:=> [:cat any?] any?]}
  [config]
  (let [[enroll-pts enroll-weights] (enrollment/expected-enrollment-times config)
        target-pts (np/array (if (:use-pr3-anchor config) #js [(:t-ia config) (:t-upd config) (:t-pr3 config)] #js [(:t-ia config) (:t-upd config)]) "float64")
        bat-med-cfg (get-grid-params :bat-med-grid config)
        bat-meds (np/arange (:start bat-med-cfg) (:stop bat-med-cfg) (:step bat-med-cfg))
        bat-shape-cfg (get-grid-params :bat-shape-grid config)
        bat-shapes (np/arange (:start bat-shape-cfg) (:stop bat-shape-cfg) (:step bat-shape-cfg))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (np/ravel (aget bat-mesh 0))
        bat-shape-flat (np/ravel (aget bat-mesh 1))
        bat-scale-flat (survival/weibull-scale-from-median bat-med-flat bat-shape-flat)
        gps-meds (np/geomspace (:gps-med-grid-lo config) (:gps-med-grid-hi config) (:gps-med-grid-n config))
        gps-shape-cfg (get-grid-params :gps-shape-grid config)
        gps-shapes (np/arange (:start gps-shape-cfg) (:stop gps-shape-cfg) (:step gps-shape-cfg))
        gps-mesh (np/meshgrid [gps-meds gps-shapes] #js {:indexing "ij"})
        gps-med-flat (np/ravel (aget gps-mesh 0))
        gps-shape-flat (np/ravel (aget gps-mesh 1))
        gps-scale-flat (survival/weibull-scale-from-median gps-med-flat gps-shape-flat)
        bat-ev (enrollment/expected-arm-events survival/weibull-survival-probability [bat-scale-flat bat-shape-flat] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        gps-ev (enrollment/expected-arm-events survival/weibull-survival-probability [gps-scale-flat gps-shape-flat] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        pool-target (:pool-mos-min-at-ia config)
        bat-S-T (when (> pool-target 0) (survival/weibull-survival-probability pool-target bat-scale-flat bat-shape-flat))
        gps-S-T (when (> pool-target 0) (survival/weibull-survival-probability pool-target gps-scale-flat gps-shape-flat))]
    (cross-filter config bat-ev gps-ev
                  {:bat-med bat-med-flat :bat-shape bat-shape-flat :bat-scale bat-scale-flat}
                  {:gps-med gps-med-flat :gps-shape gps-shape-flat :gps-scale gps-scale-flat}
                  "weibull" bat-S-T gps-S-T)))

(defn apply-prefilter-cure
  "Runs pre-filtering for the standard Cure fraction model family."
  {:malli/schema [:=> [:cat any?] any?]}
  [config]
  (let [[enroll-pts enroll-weights] (enrollment/expected-enrollment-times config)
        target-pts (np/array (if (:use-pr3-anchor config) #js [(:t-ia config) (:t-upd config) (:t-pr3 config)] #js [(:t-ia config) (:t-upd config)]) "float64")
        bat-med-cfg (get-grid-params :bat-med-grid config)
        bat-meds (np/arange (:start bat-med-cfg) (:stop bat-med-cfg) (:step bat-med-cfg))
        bat-shape-cfg (get-grid-params :bat-shape-grid config)
        bat-shapes (np/arange (:start bat-shape-cfg) (:stop bat-shape-cfg) (:step bat-shape-cfg))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (np/ravel (aget bat-mesh 0))
        bat-shape-flat (np/ravel (aget bat-mesh 1))
        bat-scale-flat (survival/weibull-scale-from-median bat-med-flat bat-shape-flat)
        cf-cfg (get-grid-params :cure-frac-grid config)
        cf-grid (np/arange (:start cf-cfg) (:stop cf-cfg) (:step cf-cfg))
        unc-med-cfg (get-grid-params :cure-unc-med-grid config)
        unc-meds (np/arange (:start unc-med-cfg) (:stop unc-med-cfg) (:step unc-med-cfg))
        unc-shape-cfg (get-grid-params :cure-unc-shape-grid config)
        unc-shapes (np/arange (:start unc-shape-cfg) (:stop unc-shape-cfg) (:step unc-shape-cfg))
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes] #js {:indexing "ij"})
        cf-flat (np/ravel (aget gps-mesh 0))
        unc-med-flat (np/ravel (aget gps-mesh 1))
        unc-shape-flat (np/ravel (aget gps-mesh 2))
        unc-scale-flat (survival/weibull-scale-from-median unc-med-flat unc-shape-flat)
        bat-ev (enrollment/expected-arm-events survival/weibull-survival-probability [bat-scale-flat bat-shape-flat] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        gps-ev (enrollment/expected-arm-events survival/cure-survival-probability [cf-flat unc-scale-flat unc-shape-flat] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        pool-target (:pool-mos-min-at-ia config)
        bat-S-T (when (> pool-target 0) (survival/weibull-survival-probability pool-target bat-scale-flat bat-shape-flat))
        gps-S-T (when (> pool-target 0) (survival/cure-survival-probability pool-target cf-flat unc-scale-flat unc-shape-flat))]
    (cross-filter config bat-ev gps-ev
                  {:bat-med bat-med-flat :bat-shape bat-shape-flat :bat-scale bat-scale-flat}
                  {:cure-frac cf-flat :unc-med unc-med-flat :unc-shape unc-shape-flat :unc-scale unc-scale-flat}
                  "cure" bat-S-T gps-S-T)))

(defn apply-prefilter-leaky
  "Runs pre-filtering for the Leaky Cure fraction model family."
  {:malli/schema [:=> [:cat any?] any?]}
  [config]
  (let [[enroll-pts enroll-weights] (enrollment/expected-enrollment-times config)
        target-pts (np/array (if (:use-pr3-anchor config) #js [(:t-ia config) (:t-upd config) (:t-pr3 config)] #js [(:t-ia config) (:t-upd config)]) "float64")
        bat-med-cfg (get-grid-params :bat-med-grid config)
        bat-meds (np/arange (:start bat-med-cfg) (:stop bat-med-cfg) (:step bat-med-cfg))
        bat-shape-cfg (get-grid-params :bat-shape-grid config)
        bat-shapes (np/arange (:start bat-shape-cfg) (:stop bat-shape-cfg) (:step bat-shape-cfg))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (np/ravel (aget bat-mesh 0))
        bat-shape-flat (np/ravel (aget bat-mesh 1))
        bat-scale-flat (survival/weibull-scale-from-median bat-med-flat bat-shape-flat)
        cf-cfg (get-grid-params :leaky-cure-frac-grid config)
        cf-grid (np/arange (:start cf-cfg) (:stop cf-cfg) (:step cf-cfg))
        unc-med-cfg (get-grid-params :leaky-unc-med-grid config)
        unc-meds (np/arange (:start unc-med-cfg) (:stop unc-med-cfg) (:step unc-med-cfg))
        unc-shape-cfg (get-grid-params :leaky-unc-shape-grid config)
        unc-shapes (np/arange (:start unc-shape-cfg) (:stop unc-shape-cfg) (:step unc-shape-cfg))
        leaks-cfg (get-grid-params :leak-grid config)
        leaks (np/arange (:start leaks-cfg) (:stop leaks-cfg) (:step leaks-cfg))
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes leaks] #js {:indexing "ij"})
        cf-flat (np/ravel (aget gps-mesh 0))
        unc-med-flat (np/ravel (aget gps-mesh 1))
        unc-shape-flat (np/ravel (aget gps-mesh 2))
        leak-flat (np/ravel (aget gps-mesh 3))
        unc-scale-flat (survival/weibull-scale-from-median unc-med-flat unc-shape-flat)
        bat-ev (enrollment/expected-arm-events survival/weibull-survival-probability [bat-scale-flat bat-shape-flat] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        gps-ev (enrollment/expected-arm-events survival/leaky-cure-survival-probability [cf-flat unc-scale-flat unc-shape-flat leak-flat] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        pool-target (:pool-mos-min-at-ia config)
        bat-S-T (when (> pool-target 0) (survival/weibull-survival-probability pool-target bat-scale-flat bat-shape-flat))
        gps-S-T (when (> pool-target 0) (survival/leaky-cure-survival-probability pool-target cf-flat unc-scale-flat unc-shape-flat leak-flat))]
    (cross-filter config bat-ev gps-ev
                  {:bat-med bat-med-flat :bat-shape bat-shape-flat :bat-scale bat-scale-flat}
                  {:cure-frac cf-flat :unc-med unc-med-flat :unc-shape unc-shape-flat :unc-scale unc-scale-flat :leak-yr leak-flat}
                  "leaky" bat-S-T gps-S-T)))
