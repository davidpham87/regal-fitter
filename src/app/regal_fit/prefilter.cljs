(ns app.regal-fit.prefilter
  "Functions for applying pre-filtering on trial design assumptions."
  (:require [app.regal-fit.enrollment :as enrollment]
            [app.regal-fit.survival :as survival]
            [cljs.numpy :as np]))

(defn pass-events-gate?
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

(defn pass-pr3-gate?
  "Checks if event counts at PR3 are within tolerance."
  [expected-upd expected-pr3 config apply-pr3]
  (if-not apply-pr3 true
          (let [diff-pr3 (js/Math.abs (- expected-pr3 (:n-ev-pr3 config)))
                increment-upd-pr3 (- expected-pr3 expected-upd)
                target-increment (- (:n-ev-pr3 config) (:n-ev-upd config))
                diff-increment (js/Math.abs
                                (- increment-upd-pr3 target-increment))]
            (and (<= diff-pr3 (:prefilter-tol-pr3 config))
                 (<= diff-increment (:tol-increment-upd-pr3 config))))))

(defn pass-pool-gate?
  "Checks if pool OS at minimum months is above threshold."
  [bat-idx gps-idx bat-survival-arr gps-survival-arr apply-pool]
  (if-not apply-pool true
          (>= (+ (aget bat-survival-arr bat-idx)
                 (aget gps-survival-arr gps-idx)) 1.0)))

(defn pass-bat-surv-gate?
  "Checks if BAT survival at 36 months is below the maximum threshold."
  [bat-idx bat-S-36m threshold-val]
  (if-not threshold-val
    true
    (let [max-threshold (if (sequential? threshold-val)
                          (second threshold-val)
                          threshold-val)]
      (<= (aget bat-S-36m bat-idx) max-threshold))))

(defn validate-scenario
  "Helper function to validate a specific combination of BAT and GPS curves."
  [bat-idx gps-idx total-events-arr bat-survival-arr gps-survival-arr
   bat-S-36m apply-pool apply-pr3 config]
  (let [expected-ia (aget total-events-arr bat-idx gps-idx 0)
        expected-upd (aget total-events-arr bat-idx gps-idx 1)
        expected-pr3 (when apply-pr3
                       (aget total-events-arr bat-idx gps-idx 2))]
    (when (and (pass-events-gate? expected-ia expected-upd config)
               (pass-pr3-gate? expected-upd expected-pr3 config apply-pr3)
               (pass-pool-gate? bat-idx gps-idx bat-survival-arr
                                gps-survival-arr apply-pool)
               (pass-bat-surv-gate? bat-idx bat-S-36m (:bat-surv-36m-max config)))
      {:exp-ev-ia expected-ia
       :exp-ev-upd expected-upd
       :exp-ev-pr3 expected-pr3})))

(defn build-result-record
  "Creates a configuration record for an accepted scenario."
  [bat-idx gps-idx validation-res family bat-params gps-params]
  (let [record (cond-> {:family family
                        :exp-ev-ia (:exp-ev-ia validation-res)
                        :exp-ev-upd (:exp-ev-upd validation-res)}
                 (:exp-ev-pr3 validation-res)
                 (assoc :exp-ev-pr3 (:exp-ev-pr3 validation-res)))]
    (reduce-kv (fn [acc k v] (assoc acc k (.item v bat-idx)))
               (reduce-kv (fn [acc k v] (assoc acc k (.item v gps-idx)))
                          record gps-params)
               bat-params)))

(defn- process-chunk
  "Processes a chunk of BAT survival curves against all GPS curves."
  [start-idx end-idx grid-bat grid-gps num-anchors apply-pool apply-pr3
   config bat-ev gps-ev bat-S-T gps-S-T bat-S-36m family bat-params gps-params]
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
        gps-survival (when apply-pool (np/nd-to-array gps-S-T))
        bat-S-36m-slice (when bat-S-36m
                          (np/nd-to-array
                           (np/slice bat-S-36m start-idx end-idx)))]
    (keep (fn [pair]
            (let [local-bat (first pair) global-gps (second pair)]
              (when-let [res (validate-scenario
                              local-bat global-gps total-events
                              bat-survival gps-survival bat-S-36m-slice
                              apply-pool apply-pr3 config)]
                (build-result-record (+ start-idx local-bat) global-gps
                                     res family bat-params gps-params))))
          (for [b (range (- end-idx start-idx)) g (range grid-gps)] [b g]))))

(defn cross-filter
  "Filters all combinations of BAT and GPS survival curves."
  [config bat-ev gps-ev bat-params gps-params family bat-S-T gps-S-T bat-S-36m]
  (let [grid-bat (first (.-shape bat-ev))
        grid-gps (first (.-shape gps-ev))
        num-anchors (second (.-shape bat-ev))
        apply-pool (and bat-S-T gps-S-T (> (:pool-mos-min-at-ia config) 0))
        apply-pr3 (and (:use-pr3-anchor config) (>= num-anchors 3))
        chunk-size 1024]
    (mapcat
     #(process-chunk
       % (js/Math.min (+ % chunk-size) grid-bat)
       grid-bat grid-gps num-anchors apply-pool
       apply-pr3 config bat-ev gps-ev bat-S-T
       gps-S-T bat-S-36m family bat-params gps-params)
     (range 0 grid-bat chunk-size))))

(defn- get-grid-params [config-key config]
  (let [grid (get config config-key)]
    {:start (nth grid 0) :stop (nth grid 1) :step (nth grid 2)}))

(defn- grid-flat
  "Constructs flat grid arrays from grid configurations."
  [config config-key]
  (let [cfg (get-grid-params config-key config)]
    (np/arange (:start cfg) (:stop cfg) (:step cfg))))

(defn- make-bat-grid
  "Generates flat grids and scales for the BAT arm."
  [config]
  (let [meds (grid-flat config :bat-med-grid)
        shapes (grid-flat config :bat-shape-grid)
        mesh (np/meshgrid [meds shapes] #js {:indexing "ij"})
        med-flat (np/ravel (aget mesh 0))
        shape-flat (np/ravel (aget mesh 1))
        scale-flat (survival/weibull-scale-from-median med-flat shape-flat)]
    {:med med-flat :shape shape-flat :scale scale-flat}))

(defn- get-target-pts
  "Constructs targeted interim analysis / update / PR3 times."
  [config]
  (np/array (if (:use-pr3-anchor config)
              #js [(:t-ia config) (:t-upd config) (:t-pr3 config)]
              #js [(:t-ia config) (:t-upd config)])
            "float64"))

;; Multimethods for GPS grid and expected events generation

(defmulti gps-grid-and-ev
  "Unifies GPS grid creation and expected events calculation by family."
  (fn [family _ _ _ _ _] family))

(defmethod gps-grid-and-ev "weibull"
  [_ config enroll-pts enroll-weights target-pts pool-target]
  (let [gps-meds (np/geomspace (:gps-med-grid-lo config)
                               (:gps-med-grid-hi config)
                               (:gps-med-grid-n config))
        gps-shapes (grid-flat config :gps-shape-grid)
        gps-mesh (np/meshgrid [gps-meds gps-shapes] #js {:indexing "ij"})
        gps-med-flat (np/ravel (aget gps-mesh 0))
        gps-shape-flat (np/ravel (aget gps-mesh 1))
        gps-scale-flat (survival/weibull-scale-from-median
                        gps-med-flat gps-shape-flat)
        gps-ev (enrollment/expected-arm-events
                survival/weibull-survival-probability
                [gps-scale-flat gps-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        gps-S-T (when (> pool-target 0)
                  (survival/weibull-survival-probability
                   pool-target gps-scale-flat gps-shape-flat))]
    {:gps-ev gps-ev
     :gps-params {:gps-med gps-med-flat
                  :gps-shape gps-shape-flat
                  :gps-scale gps-scale-flat}
     :gps-S-T gps-S-T}))

(defmethod gps-grid-and-ev "cure"
  [_ config enroll-pts enroll-weights target-pts pool-target]
  (let [cf-grid (grid-flat config :cure-frac-grid)
        unc-meds (grid-flat config :cure-unc-med-grid)
        unc-shapes (grid-flat config :cure-unc-shape-grid)
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes]
                              #js {:indexing "ij"})
        cf-flat (np/ravel (aget gps-mesh 0))
        unc-med-flat (np/ravel (aget gps-mesh 1))
        unc-shape-flat (np/ravel (aget gps-mesh 2))
        unc-scale-flat (survival/weibull-scale-from-median
                        unc-med-flat unc-shape-flat)
        gps-ev (enrollment/expected-arm-events
                survival/cure-survival-probability
                [cf-flat unc-scale-flat unc-shape-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        gps-S-T (when (> pool-target 0)
                  (survival/cure-survival-probability
                   pool-target cf-flat unc-scale-flat unc-shape-flat))]
    {:gps-ev gps-ev
     :gps-params {:cure-frac cf-flat
                  :unc-med unc-med-flat
                  :unc-shape unc-shape-flat
                  :unc-scale unc-scale-flat}
     :gps-S-T gps-S-T}))

(defmethod gps-grid-and-ev "leaky"
  [_ config enroll-pts enroll-weights target-pts pool-target]
  (let [cf-grid (grid-flat config :leaky-cure-frac-grid)
        unc-meds (grid-flat config :leaky-unc-med-grid)
        unc-shapes (grid-flat config :leaky-unc-shape-grid)
        leaks (grid-flat config :leak-grid)
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes leaks]
                              #js {:indexing "ij"})
        cf-flat (np/ravel (aget gps-mesh 0))
        unc-med-flat (np/ravel (aget gps-mesh 1))
        unc-shape-flat (np/ravel (aget gps-mesh 2))
        leak-flat (np/ravel (aget gps-mesh 3))
        unc-scale-flat (survival/weibull-scale-from-median
                        unc-med-flat unc-shape-flat)
        gps-ev (enrollment/expected-arm-events
                survival/leaky-cure-survival-probability
                [cf-flat unc-scale-flat unc-shape-flat leak-flat]
                enroll-pts enroll-weights target-pts
                (:n-per-arm config) (:n-total config))
        gps-S-T (when (> pool-target 0)
                  (survival/leaky-cure-survival-probability
                   pool-target cf-flat unc-scale-flat
                   unc-shape-flat leak-flat))]
    {:gps-ev gps-ev
     :gps-params {:cure-frac cf-flat
                  :unc-med unc-med-flat
                  :unc-shape unc-shape-flat
                  :unc-scale unc-scale-flat
                  :leak-yr leak-flat}
     :gps-S-T gps-S-T}))

;; Unified prefilter function

(defn apply-prefilter
  "Unifies the common structure of prefilter execution."
  [family config]
  (let [[enroll-pts enroll-weights]
        (enrollment/expected-enrollment-times config)
        target-pts (get-target-pts config)
        is-leaky? (= family "leaky")

        ;; Generate BAT grid and events. If the family is leaky, BAT is also leaky
        ;; using :bat-leaky-cure-frac-grid, :bat-leaky-unc-med-grid,
        ;; :bat-leaky-unc-shape-grid, and :bat-leak-grid.
        bat-params
        (if is-leaky?
          (let [cf (grid-flat config :bat-leaky-cure-frac-grid)
                meds (grid-flat config :bat-leaky-unc-med-grid)
                shapes (grid-flat config :bat-leaky-unc-shape-grid)
                leaks (grid-flat config :bat-leak-grid)
                mesh (np/meshgrid [cf meds shapes leaks] #js {:indexing "ij"})
                cf-flat (np/ravel (aget mesh 0))
                unc-med-flat (np/ravel (aget mesh 1))
                unc-shape-flat (np/ravel (aget mesh 2))
                leak-flat (np/ravel (aget mesh 3))
                unc-scale-flat (survival/weibull-scale-from-median
                                unc-med-flat unc-shape-flat)]
            {:cf cf-flat :med unc-med-flat :shape unc-shape-flat :scale unc-scale-flat :leak leak-flat})
          (let [meds (grid-flat config :bat-med-grid)
                shapes (grid-flat config :bat-shape-grid)
                mesh (np/meshgrid [meds shapes] #js {:indexing "ij"})
                med-flat (np/ravel (aget mesh 0))
                shape-flat (np/ravel (aget mesh 1))
                scale-flat (survival/weibull-scale-from-median med-flat shape-flat)]
            {:med med-flat :shape shape-flat :scale scale-flat}))

        bat-ev
        (if is-leaky?
          (enrollment/expected-arm-events
           survival/leaky-cure-survival-probability
           [(:cf bat-params) (:scale bat-params) (:shape bat-params) (:leak bat-params)]
           enroll-pts enroll-weights target-pts
           (:n-per-arm config) (:n-total config))
          (enrollment/expected-arm-events
           survival/weibull-survival-probability
           [(:scale bat-params) (:shape bat-params)]
           enroll-pts enroll-weights target-pts
           (:n-per-arm config) (:n-total config)))

        pool-target (:pool-mos-min-at-ia config)
        bat-S-T
        (when (> pool-target 0)
          (if is-leaky?
            (survival/leaky-cure-survival-probability
             pool-target (:cf bat-params) (:scale bat-params) (:shape bat-params) (:leak bat-params))
            (survival/weibull-survival-probability
             pool-target (:scale bat-params) (:shape bat-params))))

        bat-S-36m
        (when (:bat-surv-36m-max config)
          (if is-leaky?
            (survival/leaky-cure-survival-probability
             36.0 (:cf bat-params) (:scale bat-params) (:shape bat-params) (:leak bat-params))
            (survival/weibull-survival-probability
             36.0 (:scale bat-params) (:shape bat-params))))

        {:keys [gps-ev gps-params gps-S-T]}
        (gps-grid-and-ev family config enroll-pts enroll-weights
                         target-pts pool-target)]
    (cross-filter config bat-ev gps-ev
                  (if is-leaky?
                    {:bat-cure-frac (:cf bat-params)
                     :bat-unc-med (:med bat-params)
                     :bat-unc-shape (:shape bat-params)
                     :bat-unc-scale (:scale bat-params)
                     :bat-leak-yr (:leak bat-params)}
                    {:bat-med (:med bat-params)
                     :bat-shape (:shape bat-params)
                     :bat-scale (:scale bat-params)})
                  gps-params
                  family bat-S-T gps-S-T bat-S-36m)))

;; Explicit family endpoints for compatibility

(defn apply-prefilter-weibull [config] (apply-prefilter "weibull" config))
(defn apply-prefilter-cure    [config] (apply-prefilter "cure"    config))
(defn apply-prefilter-leaky   [config] (apply-prefilter "leaky"   config))

;; ---------------------------------------------------------------------------
;; Analytical top-K ranking
;; ---------------------------------------------------------------------------

(defn- combo-residual
  "Sum of absolute deviations from event targets.
  :exp-ev-ia / :exp-ev-upd are embedded in every accepted record
  by build-result-record, so this is O(1) per combo."
  [config rec]
  (let [r-ia  (js/Math.abs
                (- (:exp-ev-ia  rec) (:n-ev-ia  config)))
        r-upd (js/Math.abs
                (- (:exp-ev-upd rec) (:n-ev-upd config)))
        r-pr3 (if (and (:use-pr3-anchor config) (:exp-ev-pr3 rec))
                (js/Math.abs
                 (- (:exp-ev-pr3 rec) (:n-ev-pr3 config)))
                0.0)]
    (+ r-ia r-upd r-pr3)))

(defn preaggregate
  "Groups combos by [:bat-med-grid :bat-shape :bat-leaky-cure-frac :gps-med
  :leaky-unc-med :leaky-cure-frac] and for each group, keeps the combo with the
  smallest theoretical deviation (combo-residual)."
  [config combos]
  (let [bat-grouper (fn [m]
                      [(or (:bat-unc-med m)
                             (:bat-med-grid m)
                             (:bat-med m))
                         (or (:bat-shape m)
                             (:bat-unc-shape m))
                         (or (:bat-leaky-cure-frac m)
                             (:bat-cure-frac m))
                         (:bat-leak m)])
        gps-grouper (fn [m] [(or (:gps-med m)
                           (:unc-med m))
                       (or (:gps-scale m)
                           (:unc-scale m))
                       (or (:gps-shape m)
                           (:unc-shape m))
                       (or (:leaky-cure-frac m)
                           (:cure-frac m))])
        grouped (concat (group-by bat-grouper combos)
                          (group-by gps-grouper combos))]
    (vec (distinct (mapv (fn [[_ group]]
                         (apply min-key #(combo-residual config %) group))
                       grouped)))))

(defn rank-and-trim
  "Sorts accepted combos by analytical residual (best first) and
  returns at most top-k.  When top-k is nil or >= (count combos),
  the full sorted list is returned — still useful as a quality
  ordering for the worker batch dispatch."
  [config combos top-k]
  (.log js/console (clj->js (first combos)))
  (let [aggregated (preaggregate config combos)
        scored (sort-by #(combo-residual config %) aggregated)]
    (if (and top-k (< top-k (count scored)))
      (take top-k scored)
      scored)))
