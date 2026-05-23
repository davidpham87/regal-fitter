(ns app.regal-fit.prefilter
  "Functions for applying pre-filtering on trial design assumptions."
  (:require [cljs.numpy :as np]
            [app.regal-fit.survival :as surv]
            [app.regal-fit.enrollment :as enroll]))

(defn- validate-scenario
  "Helper function to validate a specific [ib ig] combination during cross-filtering."
  [ib-local ig tot-arr d-ia-pre d-up-pre bat-S-T-arr gps-S-T-arr apply-pool-mos apply-pr3 cfg]
  (let [t-ia (aget tot-arr ib-local ig 0)
        t-up (aget tot-arr ib-local ig 1)
        d-ia (js/Math.abs (- t-ia (:n_ev_ia cfg)))
        d-up (js/Math.abs (- t-up (:n_ev_upd cfg)))]
    (when (and (<= d-ia (:prefilter_tol_ia cfg))
               (<= d-up (:prefilter_tol_upd cfg)))
      (let [inc-ia-up (- t-up t-ia)
            d-inc-ia-up (js/Math.abs (- inc-ia-up (- (:n_ev_upd cfg) (:n_ev_ia cfg))))]
        (when (<= d-inc-ia-up (:tol_increment_ia_upd cfg))
          (let [pass-pr3 (if apply-pr3
                           (let [t-pr3 (aget tot-arr ib-local ig 2)
                                 d-pr3 (js/Math.abs (- t-pr3 (:n_ev_pr3 cfg)))
                                 inc-up-pr3 (- t-pr3 t-up)
                                 d-inc-up-pr3 (js/Math.abs (- inc-up-pr3 (- (:n_ev_pr3 cfg) (:n_ev_upd cfg))))]
                             (and (<= d-pr3 (:prefilter_tol_pr3 cfg))
                                  (<= d-inc-up-pr3 (:tol_increment_upd_pr3 cfg))))
                           true)
                pass-pool (if apply-pool-mos
                            (>= (+ (aget bat-S-T-arr ib-local) (aget gps-S-T-arr ig)) 1.0)
                            true)]
            (when (and pass-pr3 pass-pool)
              {:exp_ev_ia t-ia
               :exp_ev_upd t-up
               :exp_ev_pr3 (if apply-pr3 (aget tot-arr ib-local ig 2) nil)})))))))

(defn cross-filter
  "Filters all combinations of BAT and GPS survival curves to retain only plausible ones.
  Uses a sequence-based refactor of chunking and processing valid pairs.
  Arguments:
    cfg: Simulation configuration map
    bat-ev: Array of expected events for BAT arm
    gps-ev: Array of expected events for GPS arm
    bat-params: Map of extracted numpy arrays for BAT params
    gps-params: Map of extracted numpy arrays for GPS params
    family: Name of the distribution family (weibull, cure, leaky)
    bat-S-T: Probability of pool OS at minimum months for BAT
    gps-S-T: Probability of pool OS at minimum months for GPS
  Returns:
    A sequence of accepted configuration records."
  [cfg bat-ev gps-ev bat-params gps-params family bat-S-T gps-S-T]
  (let [gb (first (.-shape bat-ev))
        k (second (.-shape bat-ev))
        gg (first (.-shape gps-ev))
        apply-pool-mos (and bat-S-T gps-S-T (> (:pool_mos_min_at_ia cfg) 0))
        apply-pr3 (and (:use_pr3_anchor cfg) (>= k 3))
        chunk-size 2048

        starts (range 0 gb chunk-size)]

    (mapcat
     (fn [s]
       (let [e (js/Math.min (+ s chunk-size) gb)
             bat-ev-slice (.slice bat-ev s e)
             bat-ev-3d (np/reshape bat-ev-slice [(- e s) 1 k])
             gps-ev-3d (np/reshape gps-ev [1 gg k])
             tot (np/add bat-ev-3d gps-ev-3d)

             tot-arr (.toArray tot)
             bat-S-T-arr (if apply-pool-mos (.toArray (.slice bat-S-T s e)) nil)
             gps-S-T-arr (if apply-pool-mos (.toArray gps-S-T) nil)]

         ;; Replace the massive loops with a flatmap over ib-local and ig
         (keep (fn [[ib-local ig]]
                 (let [ib (+ s ib-local)
                       result (validate-scenario ib-local ig tot-arr nil nil bat-S-T-arr gps-S-T-arr apply-pool-mos apply-pr3 cfg)]
                   (when result
                     (let [rec (cond-> {:family family
                                        :exp_ev_ia (:exp_ev_ia result)
                                        :exp_ev_upd (:exp_ev_upd result)}
                                 apply-pr3 (assoc :exp_ev_pr3 (:exp_ev_pr3 result)))]
                       ;; Inject parameters
                       (reduce-kv (fn [acc k v] (assoc acc k (.item v ib)))
                                  (reduce-kv (fn [acc k v] (assoc acc k (.item v ig)))
                                             rec
                                             gps-params)
                                  bat-params)))))
               (for [ib-local (range (- e s))
                     ig (range gg)]
                 [ib-local ig]))))
     starts)))

(defn apply-prefilter-weibull
  "Runs the pre-filtering phase specifically for the Weibull distribution model family."
  [cfg]
  (let [[e-pts e-weights] (enroll/expected-enrollment-times cfg)
        t-pts (np/array (if (:use_pr3_anchor cfg)
                          [(:t_ia cfg) (:t_upd cfg) (:t_pr3 cfg)]
                          [(:t_ia cfg) (:t_upd cfg)]) "float64")

        bat-meds (np/arange (nth (:bat_med_grid cfg) 0) (nth (:bat_med_grid cfg) 1) (nth (:bat_med_grid cfg) 2))
        bat-shapes (np/arange (nth (:bat_shape_grid cfg) 0) (nth (:bat_shape_grid cfg) 1) (nth (:bat_shape_grid cfg) 2))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (.ravel (first bat-mesh))
        bat-shape-flat (.ravel (second bat-mesh))
        bat-scale-flat (surv/weibull-scale-from-median bat-med-flat bat-shape-flat)

        gps-meds (np/geomspace (:gps_med_grid_lo cfg) (:gps_med_grid_hi cfg) (:gps_med_grid_n cfg))
        gps-shapes (np/arange (nth (:gps_shape_grid cfg) 0) (nth (:gps_shape_grid cfg) 1) (nth (:gps_shape_grid cfg) 2))
        gps-mesh (np/meshgrid [gps-meds gps-shapes] #js {:indexing "ij"})
        gps-med-flat (.ravel (first gps-mesh))
        gps-shape-flat (.ravel (second gps-mesh))
        gps-scale-flat (surv/weibull-scale-from-median gps-med-flat gps-shape-flat)

        bat-ev (enroll/expected-arm-events surv/weibull-S [bat-scale-flat bat-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))
        gps-ev (enroll/expected-arm-events surv/weibull-S [gps-scale-flat gps-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))

        T-pool (:pool_mos_min_at_ia cfg)
        bat-S-T (if (> T-pool 0) (surv/weibull-S T-pool bat-scale-flat bat-shape-flat) nil)
        gps-S-T (if (> T-pool 0) (surv/weibull-S T-pool gps-scale-flat gps-shape-flat) nil)]

    (cross-filter cfg bat-ev gps-ev
                  {:bat_med bat-med-flat :bat_shape bat-shape-flat :bat_scale bat-scale-flat}
                  {:gps_med gps-med-flat :gps_shape gps-shape-flat :gps_scale gps-scale-flat}
                  "weibull" bat-S-T gps-S-T)))

(defn apply-prefilter-cure
  "Runs the pre-filtering phase specifically for the standard Cure fraction model family."
  [cfg]
  (let [[e-pts e-weights] (enroll/expected-enrollment-times cfg)
        t-pts (np/array (if (:use_pr3_anchor cfg)
                          [(:t_ia cfg) (:t_upd cfg) (:t_pr3 cfg)]
                          [(:t_ia cfg) (:t_upd cfg)]) "float64")

        bat-meds (np/arange (nth (:bat_med_grid cfg) 0) (nth (:bat_med_grid cfg) 1) (nth (:bat_med_grid cfg) 2))
        bat-shapes (np/arange (nth (:bat_shape_grid cfg) 0) (nth (:bat_shape_grid cfg) 1) (nth (:bat_shape_grid cfg) 2))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (.ravel (first bat-mesh))
        bat-shape-flat (.ravel (second bat-mesh))
        bat-scale-flat (surv/weibull-scale-from-median bat-med-flat bat-shape-flat)

        cf-grid (np/arange (nth (:cure_frac_grid cfg) 0) (nth (:cure_frac_grid cfg) 1) (nth (:cure_frac_grid cfg) 2))
        unc-meds (np/arange (nth (:cure_unc_med_grid cfg) 0) (nth (:cure_unc_med_grid cfg) 1) (nth (:cure_unc_med_grid cfg) 2))
        unc-shapes (np/arange (nth (:cure_unc_shape_grid cfg) 0) (nth (:cure_unc_shape_grid cfg) 1) (nth (:cure_unc_shape_grid cfg) 2))
        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes] #js {:indexing "ij"})
        cf-flat (.ravel (nth gps-mesh 0))
        unc-med-flat (.ravel (nth gps-mesh 1))
        unc-shape-flat (.ravel (nth gps-mesh 2))
        unc-scale-flat (surv/weibull-scale-from-median unc-med-flat unc-shape-flat)

        bat-ev (enroll/expected-arm-events surv/weibull-S [bat-scale-flat bat-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))
        gps-ev (enroll/expected-arm-events surv/cure-S [cf-flat unc-scale-flat unc-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))

        T-pool (:pool_mos_min_at_ia cfg)
        bat-S-T (if (> T-pool 0) (surv/weibull-S T-pool bat-scale-flat bat-shape-flat) nil)
        gps-S-T (if (> T-pool 0) (surv/cure-S T-pool cf-flat unc-scale-flat unc-shape-flat) nil)]

    (cross-filter cfg bat-ev gps-ev
                  {:bat_med bat-med-flat :bat_shape bat-shape-flat :bat_scale bat-scale-flat}
                  {:cure_frac cf-flat :unc_med unc-med-flat :unc_shape unc-shape-flat :unc_scale unc-scale-flat}
                  "cure" bat-S-T gps-S-T)))

(defn apply-prefilter-leaky
  "Runs the pre-filtering phase specifically for the Leaky Cure fraction model family."
  [cfg]
  (let [[e-pts e-weights] (enroll/expected-enrollment-times cfg)
        t-pts (np/array (if (:use_pr3_anchor cfg)
                          [(:t_ia cfg) (:t_upd cfg) (:t_pr3 cfg)]
                          [(:t_ia cfg) (:t_upd cfg)]) "float64")

        bat-meds (np/arange (nth (:bat_med_grid cfg) 0) (nth (:bat_med_grid cfg) 1) (nth (:bat_med_grid cfg) 2))
        bat-shapes (np/arange (nth (:bat_shape_grid cfg) 0) (nth (:bat_shape_grid cfg) 1) (nth (:bat_shape_grid cfg) 2))
        bat-mesh (np/meshgrid [bat-meds bat-shapes] #js {:indexing "ij"})
        bat-med-flat (.ravel (first bat-mesh))
        bat-shape-flat (.ravel (second bat-mesh))
        bat-scale-flat (surv/weibull-scale-from-median bat-med-flat bat-shape-flat)

        cf-grid (np/arange (nth (:leaky_cure_frac_grid cfg) 0) (nth (:leaky_cure_frac_grid cfg) 1) (nth (:leaky_cure_frac_grid cfg) 2))
        unc-meds (np/arange (nth (:leaky_unc_med_grid cfg) 0) (nth (:leaky_unc_med_grid cfg) 1) (nth (:leaky_unc_med_grid cfg) 2))
        unc-shapes (np/arange (nth (:leaky_unc_shape_grid cfg) 0) (nth (:leaky_unc_shape_grid cfg) 1) (nth (:leaky_unc_shape_grid cfg) 2))
        leaks (np/arange (nth (:leak_grid cfg) 0) (nth (:leak_grid cfg) 1) (nth (:leak_grid cfg) 2))

        gps-mesh (np/meshgrid [cf-grid unc-meds unc-shapes leaks] #js {:indexing "ij"})
        cf-flat (.ravel (nth gps-mesh 0))
        unc-med-flat (.ravel (nth gps-mesh 1))
        unc-shape-flat (.ravel (nth gps-mesh 2))
        leak-flat (.ravel (nth gps-mesh 3))
        unc-scale-flat (surv/weibull-scale-from-median unc-med-flat unc-shape-flat)

        bat-ev (enroll/expected-arm-events surv/weibull-S [bat-scale-flat bat-shape-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))
        gps-ev (enroll/expected-arm-events surv/leaky-cure-S [cf-flat unc-scale-flat unc-shape-flat leak-flat] e-pts e-weights t-pts (:n_per_arm cfg) (:n_total cfg))

        T-pool (:pool_mos_min_at_ia cfg)
        bat-S-T (if (> T-pool 0) (surv/weibull-S T-pool bat-scale-flat bat-shape-flat) nil)
        gps-S-T (if (> T-pool 0) (surv/leaky-cure-S T-pool cf-flat unc-scale-flat unc-shape-flat leak-flat) nil)]

    (cross-filter cfg bat-ev gps-ev
                  {:bat_med bat-med-flat :bat_shape bat-shape-flat :bat_scale bat-scale-flat}
                  {:cure_frac cf-flat :unc_med unc-med-flat :unc_shape unc-shape-flat :unc_scale unc-scale-flat :leak_yr leak-flat}
                  "leaky" bat-S-T gps-S-T)))
