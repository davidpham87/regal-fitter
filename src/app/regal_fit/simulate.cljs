(ns app.regal-fit.simulate
  "Core simulation execution.
  Handles full trial simulations, applying event counting, logrank tests, and extracting trial stats."
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]
            [app.regal-fit.stats :as stats]
            [app.regal-fit.random :as rnd]))

(defn- calculate-trial-stats
  "Calculates trial statistics for a single simulation run.
  Arguments:
    cfg: Configuration map
    e-i: Array of enrollment times
    s-i: Array of survival times
    a-i: Array of arm assignments
    n-total: Total subjects
  Returns:
    A map of trial statistics if it passes the futility/efficacy checks, otherwise nil."
  [cfg e-i s-i a-i n-total]
  (let [n-ia (atom 0)
        n-up (atom 0)
        n-pr3 (atom 0)]
    (dotimes [i n-total]
      (let [fu-ia-val (js/Math.max (- (:t_ia cfg) (aget e-i i)) 0.0)
            fu-up-val (js/Math.max (- (:t_upd cfg) (aget e-i i)) 0.0)
            sv (aget s-i i)]
        (when (<= sv fu-ia-val) (swap! n-ia inc))
        (when (<= sv fu-up-val) (swap! n-up inc))
        (when (:use_pr3_anchor cfg)
          (let [fu-pr3-val (js/Math.max (- (:t_pr3 cfg) (aget e-i i)) 0.0)]
            (when (<= sv fu-pr3-val) (swap! n-pr3 inc))))))

    (let [keep-ia (<= (js/Math.abs (- @n-ia (:n_ev_ia cfg))) (:tol_ia cfg))
          keep-up (<= (js/Math.abs (- @n-up (:n_ev_upd cfg))) (:tol_upd cfg))
          inc-ia-up (- @n-up @n-ia)
          keep-inc-ia-up (<= (js/Math.abs (- inc-ia-up (- (:n_ev_upd cfg) (:n_ev_ia cfg)))) (:tol_increment_ia_upd cfg))]
      (when (and keep-ia keep-up keep-inc-ia-up)
        (let [pass-pr3 (if (:use_pr3_anchor cfg)
                         (and (<= (js/Math.abs (- @n-pr3 (:n_ev_pr3 cfg))) (:tol_pr3 cfg))
                              (<= (js/Math.abs (- (- @n-pr3 @n-up) (- (:n_ev_pr3 cfg) (:n_ev_upd cfg)))) (:tol_increment_upd_pr3 cfg)))
                         true)]
          (when pass-pr3
            (let [time-ia-i (js/Float64Array. n-total)
                  ev-ia-i (js/Int32Array. n-total)
                  alive-bat-up (atom 0)
                  alive-gps-up (atom 0)]
              (dotimes [i n-total]
                (let [fu-ia-val (js/Math.max (- (:t_ia cfg) (aget e-i i)) 0.0)
                      fu-up-val (js/Math.max (- (:t_upd cfg) (aget e-i i)) 0.0)
                      sv (aget s-i i)
                      av (aget a-i i)]
                  (aset time-ia-i i (js/Math.min sv fu-ia-val))
                  (aset ev-ia-i i (if (<= sv fu-ia-val) 1 0))
                  (when (> sv fu-up-val)
                    (if (== av 0) (swap! alive-bat-up inc) (swap! alive-gps-up inc)))))

              (let [z-hr-ia (stats/logrank-z (np/array time-ia-i) (np/array ev-ia-i) (np/array a-i))
                    z-ia (first z-hr-ia)
                    hr-ia (second z-hr-ia)]
                (when (and (< hr-ia (:futility_hr_max cfg))
                           (> hr-ia (:efficacy_hr_min cfg)))
                  (let [pool-mos-pass (if (> (:pool_mos_min_at_ia cfg) 0)
                                        (> (stats/km-S-at-T (np/array time-ia-i) (np/array ev-ia-i) (:pool_mos_min_at_ia cfg)) 0.5)
                                        true)]
                    (when pool-mos-pass
                      (let [median-fu-pass (if (> (:median_fu_target cfg) 0)
                                             (let [obs-time (.toArray (np/array time-ia-i))
                                                   median-fu (np/median (np/array obs-time))]
                                               (<= (js/Math.abs (- median-fu (:median_fu_target cfg))) (:median_fu_tol cfg)))
                                             true)]
                        (when median-fu-pass
                          (let [death-cal (js/Float64Array. n-total)
                                valid-deaths (js/Array.)]
                            (dotimes [i n-total]
                              (let [d (+ (aget e-i i) (aget s-i i))]
                                (aset death-cal i d)
                                (when (js/Number.isFinite d)
                                  (.push valid-deaths d))))
                            (.sort valid-deaths (fn [a b] (- a b)))

                            (let [reached-80 (>= (.-length valid-deaths) (:n_ev_final cfg))
                                  t80 (if reached-80 (aget valid-deaths (dec (:n_ev_final cfg))) js/NaN)
                                  today-pass (if (and (:enforce_no_80_by_today cfg) reached-80)
                                               (>= t80 (- (if (:t_now cfg) (:t_now cfg) 63) (:no_80_slack_months cfg)))
                                               true)]
                              (when today-pass
                                (let [z-fin (atom js/NaN)
                                      hr-fin (atom js/NaN)]
                                  (when reached-80
                                    (let [fu-fin (js/Float64Array. n-total)
                                          time-fin (js/Float64Array. n-total)
                                          ev-fin (js/Int32Array. n-total)]
                                      (dotimes [i n-total]
                                        (let [f (js/Math.max (- t80 (aget e-i i)) 0.0)
                                              sv (aget s-i i)]
                                          (aset fu-fin i f)
                                          (aset time-fin i (js/Math.min sv f))
                                          (aset ev-fin i (if (<= sv f) 1 0))))
                                      (let [z-hr-f (stats/logrank-z (np/array time-fin) (np/array ev-fin) (np/array a-i))]
                                        (reset! z-fin (first z-hr-f))
                                        (reset! hr-fin (second z-hr-f)))))

                                  (let [trial-stats {:n_ev_ia @n-ia
                                                     :n_ev_upd @n-up
                                                     :z_ia z-ia
                                                     :hr_ia hr-ia
                                                     :reached_80 reached-80
                                                     :t80 t80
                                                     :hr_final @hr-fin
                                                     :z_final @z-fin
                                                     :bat_alive_upd @alive-bat-up
                                                     :gps_alive_upd @alive-gps-up}]
                                    (if (:use_pr3_anchor cfg)
                                      (assoc trial-stats :n_ev_pr3 @n-pr3)
                                      trial-stats))))))))))))))))))


;; Re-implementing with exact pass logic
(defn- simulate-one-trial [rec cfg rng n-total n-per-arm bands]
  (let [e-i (js/Float64Array. n-total)
        s-i (js/Float64Array. n-total)
        a-i (js/Int8Array. n-total)
        e-raw (js/Array.)]
    (doseq [[lo hi n] bands]
      (when (> n 0)
        (let [rands (.toArray (np-random/uniform rng lo hi n))]
          (doseq [r rands] (.push e-raw r)))))
    (.sort e-raw (fn [a b] (- a b)))
    (dotimes [i n-total]
      (aset e-i i (aget e-raw i)))

    (let [perm (np-random/random rng n-total)
          order (.toArray (np/argsort perm))]
      (dotimes [i n-per-arm]
        (aset a-i (aget order i) 1)))

    (let [n-bat (reduce + (map #(if (== % 0) 1 0) a-i))
          n-gps (reduce + (map #(if (== % 1) 1 0) a-i))
          bat-draws (.toArray (rnd/draw-bat-times rec n-bat rng))
          gps-draws (.toArray (rnd/draw-gps-times rec n-gps rng))]
      (loop [i 0 b 0 g 0]
        (when (< i n-total)
          (if (== (aget a-i i) 0)
            (do (aset s-i i (aget bat-draws b))
                (recur (inc i) (inc b) g))
            (do (aset s-i i (aget gps-draws g))
                (recur (inc i) b (inc g)))))))

    (let [n-ia (atom 0)
          n-up (atom 0)
          n-pr3 (atom 0)]
      (dotimes [i n-total]
        (let [fu-ia-val (js/Math.max (- (:t_ia cfg) (aget e-i i)) 0.0)
              fu-up-val (js/Math.max (- (:t_upd cfg) (aget e-i i)) 0.0)
              sv (aget s-i i)]
          (when (<= sv fu-ia-val) (swap! n-ia inc))
          (when (<= sv fu-up-val) (swap! n-up inc))
          (when (:use_pr3_anchor cfg)
            (let [fu-pr3-val (js/Math.max (- (:t_pr3 cfg) (aget e-i i)) 0.0)]
              (when (<= sv fu-pr3-val) (swap! n-pr3 inc))))))

      (let [keep-ia (<= (js/Math.abs (- @n-ia (:n_ev_ia cfg))) (:tol_ia cfg))
            keep-up (<= (js/Math.abs (- @n-up (:n_ev_upd cfg))) (:tol_upd cfg))
            inc-ia-up (- @n-up @n-ia)
            keep-inc-ia-up (<= (js/Math.abs (- inc-ia-up (- (:n_ev_upd cfg) (:n_ev_ia cfg)))) (:tol_increment_ia_upd cfg))]
        (if (and keep-ia keep-up keep-inc-ia-up)
          (let [pass-pr3 (if (:use_pr3_anchor cfg)
                           (and (<= (js/Math.abs (- @n-pr3 (:n_ev_pr3 cfg))) (:tol_pr3 cfg))
                                (<= (js/Math.abs (- (- @n-pr3 @n-up) (- (:n_ev_pr3 cfg) (:n_ev_upd cfg)))) (:tol_increment_upd_pr3 cfg)))
                           true)]
            (if pass-pr3
              (let [time-ia-i (js/Float64Array. n-total)
                    ev-ia-i (js/Int32Array. n-total)
                    alive-bat-up (atom 0)
                    alive-gps-up (atom 0)]
                (dotimes [i n-total]
                  (let [fu-ia-val (js/Math.max (- (:t_ia cfg) (aget e-i i)) 0.0)
                        fu-up-val (js/Math.max (- (:t_upd cfg) (aget e-i i)) 0.0)
                        sv (aget s-i i)
                        av (aget a-i i)]
                    (aset time-ia-i i (js/Math.min sv fu-ia-val))
                    (aset ev-ia-i i (if (<= sv fu-ia-val) 1 0))
                    (when (> sv fu-up-val)
                      (if (== av 0) (swap! alive-bat-up inc) (swap! alive-gps-up inc)))))

                (let [z-hr-ia (stats/logrank-z (np/array time-ia-i) (np/array ev-ia-i) (np/array a-i))
                      z-ia (first z-hr-ia)
                      hr-ia (second z-hr-ia)]
                  (if (and (< hr-ia (:futility_hr_max cfg))
                           (> hr-ia (:efficacy_hr_min cfg)))
                    (let [pool-mos-pass (if (> (:pool_mos_min_at_ia cfg) 0)
                                          (> (stats/km-S-at-T (np/array time-ia-i) (np/array ev-ia-i) (:pool_mos_min_at_ia cfg)) 0.5)
                                          true)]
                      (if pool-mos-pass
                        (let [median-fu-pass (if (> (:median_fu_target cfg) 0)
                                               (let [obs-time (.toArray (np/array time-ia-i))
                                                     median-fu (np/median (np/array obs-time))]
                                                 (<= (js/Math.abs (- median-fu (:median_fu_target cfg))) (:median_fu_tol cfg)))
                                               true)]
                          (if median-fu-pass
                            (let [death-cal (js/Float64Array. n-total)
                                  valid-deaths (js/Array.)]
                              (dotimes [i n-total]
                                (let [d (+ (aget e-i i) (aget s-i i))]
                                  (aset death-cal i d)
                                  (when (js/Number.isFinite d)
                                    (.push valid-deaths d))))
                              (.sort valid-deaths (fn [a b] (- a b)))

                              (let [reached-80 (>= (.-length valid-deaths) (:n_ev_final cfg))
                                    t80 (if reached-80 (aget valid-deaths (dec (:n_ev_final cfg))) js/NaN)
                                    today-pass (if (and (:enforce_no_80_by_today cfg) reached-80)
                                                 (>= t80 (- (if (:t_now cfg) (:t_now cfg) 63) (:no_80_slack_months cfg)))
                                                 true)]
                                (if today-pass
                                  (let [z-fin (atom js/NaN)
                                        hr-fin (atom js/NaN)]
                                    (when reached-80
                                      (let [fu-fin (js/Float64Array. n-total)
                                            time-fin (js/Float64Array. n-total)
                                            ev-fin (js/Int32Array. n-total)]
                                        (dotimes [i n-total]
                                          (let [f (js/Math.max (- t80 (aget e-i i)) 0.0)
                                                sv (aget s-i i)]
                                            (aset fu-fin i f)
                                            (aset time-fin i (js/Math.min sv f))
                                            (aset ev-fin i (if (<= sv f) 1 0))))
                                        (let [z-hr-f (stats/logrank-z (np/array time-fin) (np/array ev-fin) (np/array a-i))]
                                          (reset! z-fin (first z-hr-f))
                                          (reset! hr-fin (second z-hr-f)))))

                                    (let [trial-stats {:n_ev_ia @n-ia
                                                       :n_ev_upd @n-up
                                                       :z_ia z-ia
                                                       :hr_ia hr-ia
                                                       :reached_80 reached-80
                                                       :t80 t80
                                                       :hr_final @hr-fin
                                                       :z_final @z-fin
                                                       :bat_alive_upd @alive-bat-up
                                                       :gps_alive_upd @alive-gps-up}]
                                      [{:passed-pr3 true
                                        :stats (if (:use_pr3_anchor cfg) (assoc trial-stats :n_ev_pr3 @n-pr3) trial-stats)}]))
                                  [{:passed-pr3 true :stats nil}]))
                            [{:passed-pr3 true :stats nil}]))
                        [{:passed-pr3 true :stats nil}]))
                    [{:passed-pr3 true :stats nil}])))
              [{:passed-pr3 false :stats nil}]))
          [{:passed-pr3 false :stats nil}])))))

(defn run-sim-chunk
  "Runs a chunk of simulations and accumulates accepted stats.
  Arguments:
    rec: config record
    cfg: Simulation configuration
    n-sims: Number of simulations to run
    rng: Random number generator instance
  Returns:
    [accepted-stats count-of-pass-events]"
  [rec cfg n-sims rng]
  (let [bands (:enroll_bands cfg)
        n-total (:n_total cfg)
        n-per-arm (:n_per_arm cfg)

        results (map (fn [_] (first (simulate-one-trial rec cfg rng n-total n-per-arm bands))) (range n-sims))

        n-pass-events (reduce + (map #(if (:passed-pr3 %) 1 0) results))
        accepted-stats (keep :stats results)]
    [accepted-stats n-pass-events]))

(defn simulate-one-combo
  "Entrypoint for a single config combination simulation job.
  Evaluates screening, applies runs, and calculates the summary statistics.
  Arguments:
    args: map containing :rec, :cfg_dict, :n_sims, :seed
  Returns:
    Summary map of the combo simulation."
  [args]
  (let [{:keys [rec cfg_dict n_sims seed]} args
        cfg cfg_dict
        rng (np-random/default-rng seed)
        n-screen (js/Math.min (:n_sims_screen cfg) n_sims)
        [screen-stats screen-pass] (run-sim-chunk rec cfg n-screen rng)]

    (if (< (count screen-stats) (:n_screen_min_pass cfg))
      nil
      (let [remaining (- n_sims n-screen)
            [more-stats more-pass] (if (> remaining 0) (run-sim-chunk rec cfg remaining rng) [[] 0])
            all-stats (concat screen-stats more-stats)
            n-pass-events (+ screen-pass more-pass)
            n-done n_sims
            n-accepted (count all-stats)]

        (if (empty? all-stats)
          nil
          (let [finite80 (filter #(not (js/Number.isNaN %)) (map :t80 all-stats))
                hr-arr (filter #(not (js/Number.isNaN %)) (map :hr_final all-stats))
                n-success (count (filter #(and (:reached_80 %) (< (:hr_final %) 0.636)) all-stats))
                p-success-overall (/ n-success n-accepted)

                hr-finite (np/array (to-array hr-arr))
                median-hr (if (empty? hr-arr) js/NaN (np/median hr-finite))
                p-hr-below (if (empty? hr-arr) js/NaN (/ (count (filter #(< % 0.636) hr-arr)) (count hr-arr)))

                t80-arr (np/array (to-array finite80))
                median-t80 (if (empty? finite80) js/NaN (np/median t80-arr))

                hr-ia-arr (np/array (to-array (map :hr_ia all-stats)))
                median-hr-ia (np/median hr-ia-arr)

                z-ia-arr (np/array (to-array (map :z_ia all-stats)))
                median-z-ia (np/median z-ia-arr)

                bat-alive-arr (np/array (to-array (map :bat_alive_upd all-stats)))
                median-bat-alive (np/median bat-alive-arr)

                gps-alive-arr (np/array (to-array (map :gps_alive_upd all-stats)))
                median-gps-alive (np/median gps-alive-arr)

                p-reach (/ (count (filter :reached_80 all-stats)) n-accepted)]

            (merge rec
                   {:n_attempts n-done
                    :n_pass_events n-pass-events
                    :n_pass_futility n-accepted
                    :n_accepted n-accepted
                    :acceptance_rate (/ n-accepted n-done)
                    :p_reach80 p-reach
                    :p_no_readout (- 1.0 p-reach)
                    :median_hr_final median-hr
                    :p_hr_below_threshold p-hr-below
                    :p_success_overall p-success-overall
                    :median_t80_months median-t80
                    :median_hr_ia median-hr-ia
                    :median_z_ia median-z-ia
                    :median_bat_alive_upd median-bat-alive
                    :median_gps_alive_upd median-gps-alive})))))))
))
