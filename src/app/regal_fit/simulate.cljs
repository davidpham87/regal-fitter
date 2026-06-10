(ns app.regal-fit.simulate
  "Core simulation execution."
  (:require [app.regal-fit.random :as rnd]
            [app.regal-fit.stats :as stats]
            [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]
            [malli.core :as m]))

(defn- count-events-at-times
  "Counts events at IA, UPD, and PR3 timepoints,
   optionally tracking per-arm (BAT=0, GPS=1) counts."
  ([config enroll-times survival-times n-total]
   (count-events-at-times config enroll-times survival-times nil n-total))
  ([config enroll-times survival-times arms-array n-total]
   (loop [i 0
          n-interim-analysis 0
          n-update 0
          n-press-release-3 0
          n-interim-analysis-bat 0
          n-interim-analysis-gps 0
          n-update-bat 0
          n-update-gps 0
          n-press-release-3-bat 0
          n-press-release-3-gps 0]
     (if (< i n-total)
       (let [enroll   (aget enroll-times i)
             survival (aget survival-times i)
             arm      (when arms-array (aget arms-array i))
             dead-ia  (<= survival
                          (js/Math.max (- (:t-ia config) enroll) 0.0))
             dead-up  (<= survival
                          (js/Math.max (- (:t-upd config) enroll) 0.0))
             dead-pr3 (and (:use-pr3-anchor config)
                           (<= survival
                               (js/Math.max (- (:t-pr3 config) enroll)
                                            0.0)))]
         (recur (inc i)
                (if dead-ia (inc n-interim-analysis) n-interim-analysis)
                (if dead-up (inc n-update) n-update)
                (if dead-pr3 (inc n-press-release-3) n-press-release-3)
                (if (and dead-ia arm (== arm 0)) (inc n-interim-analysis-bat) n-interim-analysis-bat)
                (if (and dead-ia arm (not (== arm 0))) (inc n-interim-analysis-gps) n-interim-analysis-gps)
                (if (and dead-up arm (== arm 0)) (inc n-update-bat) n-update-bat)
                (if (and dead-up arm (not (== arm 0))) (inc n-update-gps) n-update-gps)
                (if (and dead-pr3 arm (== arm 0)) (inc n-press-release-3-bat) n-press-release-3-bat)
                (if (and dead-pr3 arm (not (== arm 0))) (inc n-press-release-3-gps) n-press-release-3-gps)))
       {:n-interim-analysis n-interim-analysis :n-update n-update :n-press-release-3 n-press-release-3
        :n-interim-analysis-bat n-interim-analysis-bat   :n-interim-analysis-gps n-interim-analysis-gps
        :n-update-bat n-update-bat   :n-update-gps n-update-gps
        :n-press-release-3-bat n-press-release-3-bat :n-press-release-3-gps n-press-release-3-gps}))))

(defn- js-median
  "Returns the median of a plain JS array (sorts in place)."
  [arr]
  (let [n (.-length arr)]
    (if (zero? n)
      js/NaN
      (do (.sort arr (fn [a b] (- a b)))
          (if (odd? n)
            (aget arr (quot n 2))
            (* 0.5 (+ (aget arr (dec (quot n 2)))
                      (aget arr (quot n 2)))))))))

(defn- compute-interval-medians
  "For each milestone interval, collects survival times of patients
   dying in that interval per arm and returns their medians."
  [config enroll-times survival-times arms-array n-total]
  (let [interim-analysis-bat  (js/Array.) interim-analysis-gps  (js/Array.)
        update-bat  (js/Array.) update-gps  (js/Array.)
        press-release-3-bat (js/Array.) press-release-3-gps (js/Array.)]
    (dotimes [i n-total]
      (let [enroll   (aget enroll-times i)
            survival (aget survival-times i)
            arm      (aget arms-array i)
            dead-ia  (<= survival
                         (js/Math.max (- (:t-ia config) enroll) 0.0))
            dead-up  (<= survival
                         (js/Math.max (- (:t-upd config) enroll) 0.0))
            dead-pr3 (and (:use-pr3-anchor config)
                          (<= survival
                              (js/Math.max
                               (- (:t-pr3 config) enroll) 0.0)))]
        (when dead-ia
          (if (== arm 0)
            (.push interim-analysis-bat survival) (.push interim-analysis-gps survival)))
        (when (and dead-up (not dead-ia))
          (if (== arm 0)
            (.push update-bat survival) (.push update-gps survival)))
        (when (and dead-pr3 (not dead-up))
          (if (== arm 0)
            (.push press-release-3-bat survival) (.push press-release-3-gps survival)))))
    (let [pool (fn [a b]
                 (let [c (js/Array.)]
                   (dotimes [i (.-length a)] (.push c (aget a i)))
                   (dotimes [i (.-length b)] (.push c (aget b i)))
                   c))]
      {:med-interim-analysis-bat   (js-median interim-analysis-bat)
       :med-interim-analysis-gps   (js-median interim-analysis-gps)
       :med-interim-analysis-pool  (js-median (pool interim-analysis-bat interim-analysis-gps))
       :med-update-bat   (js-median update-bat)
       :med-update-gps   (js-median update-gps)
       :med-update-pool  (js-median (pool update-bat update-gps))
       :med-press-release-3-bat  (js-median press-release-3-bat)
       :med-press-release-3-gps  (js-median press-release-3-gps)
       :med-press-release-3-pool (js-median (pool press-release-3-bat press-release-3-gps))})))

(defn- pass-events-tolerance?
  "Checks if event counts are within configured tolerances."
  [config {:keys [n-interim-analysis n-update n-press-release-3]}]
  (let [keep-ia (<= (js/Math.abs (- n-interim-analysis (:n-ev-ia config))) (:tol-ia config))
        keep-up (<= (js/Math.abs (- n-update (:n-ev-upd config))) (:tol-upd config))
        increment-ia-up (- n-update n-interim-analysis)
        target-increment (- (:n-ev-upd config) (:n-ev-ia config))
        diff-increment (js/Math.abs (- increment-ia-up target-increment))
        pass-pr3 (if-not (:use-pr3-anchor config) true
                         (and (<= (js/Math.abs (- n-press-release-3 (:n-ev-pr3 config))) (:tol-pr3 config))
                              (<= (js/Math.abs (- (- n-press-release-3 n-update) (- (:n-ev-pr3 config) (:n-ev-upd config)))) (:tol-increment-upd-pr3 config))))]
    (and keep-ia keep-up (<= diff-increment (:tol-increment-ia-upd config)) pass-pr3)))

(defn- interim-analysis-data
  "Extracts data for interim analysis."
  [config enroll-times survival-times arms-array n-total]
  (let [time-ia (js/Float64Array. n-total)
        event-ia (js/Int32Array. n-total)
        counts (loop [i 0 alive-bat 0 alive-gps 0]
                 (if (< i n-total)
                   (let [fu-ia (js/Math.max (- (:t-ia config) (aget enroll-times i)) 0.0)
                         fu-up (js/Math.max (- (:t-upd config) (aget enroll-times i)) 0.0)
                         survival (aget survival-times i)
                         arm (aget arms-array i)]
                     (aset time-ia i (js/Math.min survival fu-ia))
                     (aset event-ia i (if (<= survival fu-ia) 1 0))
                     (if (> survival fu-up)
                       (recur (inc i)
                              (if (== arm 0) (inc alive-bat) alive-bat)
                              (if (not (== arm 0)) (inc alive-gps) alive-gps))
                       (recur (inc i) alive-bat alive-gps)))
                   {:alive-bat alive-bat :alive-gps alive-gps}))]
    {:time-ia time-ia :event-ia event-ia :alive-bat (:alive-bat counts) :alive-gps (:alive-gps counts)}))

(defn- analyze-interim
  "Performs log-rank analysis for the interim analysis (IA)."
  [config enroll-times survival-times arms-array n-total]
  (let [{:keys [time-ia event-ia alive-bat alive-gps]} (interim-analysis-data config enroll-times survival-times arms-array n-total)
        [z-ia hr-ia] (stats/logrank-z (np/array time-ia) (np/array event-ia) (np/array arms-array))]
    {:z-ia z-ia :hr-ia hr-ia :time-ia time-ia :ev-ia event-ia :alive-bat alive-bat :alive-gps alive-gps}))

(defn- pass-interim-gates?
  "Checks interim results against futility and efficacy gates."
  [config {:keys [hr-ia time-ia ev-ia]}]
  (let [time-nd (np/array time-ia)
        ev-nd (np/array ev-ia)]
    (and (< hr-ia (:futility-hr-max config))
         (> hr-ia (:efficacy-hr-min config))
         (if (> (:pool-mos-min-at-ia config) 0)
           (> (stats/km-survival-at-time time-nd ev-nd (:pool-mos-min-at-ia config)) 0.5)
           true)
         (if (> (:median-fu-target config) 0)
           (let [median-fu (np/median time-nd)]
             (<= (js/Math.abs (- median-fu (:median-fu-target config))) (:median-fu-tol config)))
           true))))

(defn- calculate-final-times
  "Calculates survival and event status at T80."
  [t80 n-total enroll-times survival-times]
  (let [time-fin (js/Float64Array. n-total)
        ev-fin (js/Int32Array. n-total)]
    (dotimes [i n-total]
      (let [f (js/Math.max (- t80 (aget enroll-times i)) 0.0)
            s (aget survival-times i)]
        (aset time-fin i (js/Math.min s f))
        (aset ev-fin i (if (<= s f) 1 0))))
    {:time-fin time-fin :ev-fin ev-fin}))

(defn- analyze-final
  "Performs final analysis once target events are reached."
  [config enroll-times survival-times arms-array n-total]
  (let [valid-deaths (js/Array.)]
    (dotimes [i n-total]
      (let [d (+ (aget enroll-times i) (aget survival-times i))]
        (when (js/Number.isFinite d) (.push valid-deaths d))))
    (.sort valid-deaths (fn [a b] (- a b)))
    (let [reached (>= (.-length valid-deaths) (:n-ev-final config))
          t80 (if reached (aget valid-deaths (dec (:n-ev-final config))) js/NaN)
          today (if (and (:enforce-no-80-by-today config) reached)
                  (>= t80 (- (or (:t-now config) 63) (:no-80-slack-months config)))
                  true)]
      (if-not (and reached today)
        {:reached false :t80 t80 :hr-final js/NaN :z-final js/NaN}
        (let [{:keys [time-fin ev-fin]} (calculate-final-times t80 n-total enroll-times survival-times)
              [z-fin hr-fin] (stats/logrank-z (np/array time-fin) (np/array ev-fin) (np/array arms-array))]
          {:reached true :t80 t80 :hr-final hr-fin :z-final z-fin})))))

(defn- calculate-trial-stats
  "Computes all statistics for a successfully screened trial."
  [config enroll-times survival-times arms-array n-total]
  (let [counts (count-events-at-times
                config enroll-times survival-times arms-array n-total)]
    (when (pass-events-tolerance? config counts)
      (let [interim-res (analyze-interim
                         config enroll-times survival-times
                         arms-array n-total)]
        (when (pass-interim-gates? config interim-res)
          (let [final-res (analyze-final
                           config enroll-times survival-times
                           arms-array n-total)]
            (merge {:n-ev-ia (:n-interim-analysis counts)
                    :n-ev-upd (:n-update counts)
                    :z-ia (:z-ia interim-res)
                    :hr-ia (:hr-ia interim-res)
                    :reached-80 (:reached final-res)
                    :t80 (:t80 final-res)
                    :hr-final (:hr-final final-res)
                    :z-final (:z-final final-res)
                    :bat-alive-upd (:alive-bat interim-res)
                    :gps-alive-upd (:alive-gps interim-res)
                    ;; Per-arm cumulative event counts
                    :n-interim-analysis-bat  (:n-interim-analysis-bat counts)
                    :n-interim-analysis-gps  (:n-interim-analysis-gps counts)
                    :n-update-bat  (:n-update-bat counts)
                    :n-update-gps  (:n-update-gps counts)
                    :n-press-release-3-bat (:n-press-release-3-bat counts)
                    :n-press-release-3-gps (:n-press-release-3-gps counts)}
                   (when (:use-pr3-anchor config)
                     {:n-ev-pr3 (:n-press-release-3 counts)})
                   ;; Per-arm median survival times per interval
                   (compute-interval-medians
                    config enroll-times survival-times
                    arms-array n-total))))))))

(defn- assign-arms
  "Assigns arms to subjects based on assignment order."
  [arms-array assignment-order n-per-arm]
  (dotimes [i (count assignment-order)]
    (when (< i n-per-arm) (aset arms-array (aget assignment-order i) 1))))

(defn- populate-survival-times
  "Fills survival times based on arm assignment."
  [n-total arms bat-draws gps-draws survival]
  (loop [i 0 b 0 g 0]
    (when (< i n-total)
      (if (== (aget arms i) 0)
        (do (aset survival i (aget bat-draws b)) (recur (inc i) (inc b) g))
        (do (aset survival i (aget gps-draws g)) (recur (inc i) b (inc g)))))))

(defn- generate-trial-data
  "Generates enrollment times, arm assignments, and survival times for one trial."
  [record config random-gen n-total n-per-arm bands]
  (let [enroll (js/Float64Array. n-total)
        arms (js/Int8Array. n-total)
        survival (js/Float64Array. n-total)
        raw-enroll (js/Array.)]
    (doseq [[lo hi n] bands]
      (when (> n 0) (doseq [r (np/nd-to-array (np-random/uniform random-gen lo hi n))] (.push raw-enroll r))))
    (.sort raw-enroll (fn [a b] (- a b)))
    (let [assignment-order (np/nd-to-array (np/argsort (np-random/random random-gen n-total)))]
      (dotimes [i n-total] (aset enroll i (aget raw-enroll i)))
      (assign-arms arms assignment-order n-per-arm))
    (let [num-gps (reduce + arms)
          num-bat (- n-total num-gps)
          bat-draws (np/nd-to-array (rnd/draw-bat-times record num-bat random-gen))
          gps-draws (np/nd-to-array (rnd/draw-gps-times record num-gps random-gen))]
      (populate-survival-times n-total arms bat-draws gps-draws survival)
      {:enroll-times enroll :arms-array arms :survival-times survival})))

(defn- simulate-one-trial
  "Simulates a single trial and returns whether it passed screening and its stats."
  [record config random-gen n-total n-per-arm bands]
  (let [{:keys [enroll-times arms-array survival-times]}
        (generate-trial-data record config random-gen n-total n-per-arm bands)
        counts (count-events-at-times
                config enroll-times survival-times arms-array n-total)
        passed-screening (or (:ignore-prefilter? config)
                             (pass-events-tolerance? config counts))
        stats (when passed-screening
                (calculate-trial-stats config enroll-times survival-times
                                       arms-array n-total))]
    {:passed-screening passed-screening :stats stats}))

(defn- run-sim-chunk
  "Runs a chunk of simulations for a single combination."
  [record config n-sims random-gen]
  (let [results (map (fn [_] (simulate-one-trial record config random-gen (:n-total config) (:n-per-arm config) (:enroll-bands config))) (range n-sims))]
    [(keep :stats results) (reduce + (map #(if (:passed-screening %) 1 0) results))]))

(defn- mean-field [all-stats k]
  (let [vs (keep k all-stats)]
    (if (empty? vs) js/NaN (/ (reduce + vs) (count vs)))))

(defn- build-aggregate-map
  "Helper to build the aggregate statistics map."
  [all-stats num-attempts num-pass-events record to-nd
   finite-t80 hr-final-arr num-success num-accepted]
  (merge record
         {:n-attempts num-attempts
          :n-pass-events num-pass-events
          :n-pass-futility num-accepted
          :n-accepted num-accepted
          :acceptance-rate (/ num-accepted num-attempts)
          :p-reach80 (/ (count (filter :reached-80 all-stats))
                        num-accepted)
          :p-no-readout (- 1.0
                           (/ (count (filter :reached-80 all-stats))
                              num-accepted))
          :median-hr-final
          (if (empty? hr-final-arr)
            js/NaN
            (np/median (to-nd hr-final-arr)))
          :p-hr-below-threshold
          (if (empty? hr-final-arr)
            js/NaN
            (/ (count (filter #(< % 0.636) hr-final-arr))
               (count hr-final-arr)))
          :p-success-overall (/ num-success num-accepted)
          :median-t80-months
          (if (empty? finite-t80)
            js/NaN
            (np/median (to-nd finite-t80)))
          :median-hr-ia (np/median (to-nd (map :hr-ia all-stats)))
          :median-z-ia  (np/median (to-nd (map :z-ia all-stats)))
          :median-bat-alive-upd
          (np/median (to-nd (map :bat-alive-upd all-stats)))
          :median-gps-alive-upd
          (np/median (to-nd (map :gps-alive-upd all-stats)))
          ;; Mean per-arm deaths per interval (from simulation)
          :mean-n-interim-analysis-bat  (mean-field all-stats :n-interim-analysis-bat)
          :mean-n-interim-analysis-gps  (mean-field all-stats :n-interim-analysis-gps)
          :mean-n-update-bat  (mean-field all-stats :n-update-bat)
          :mean-n-update-gps  (mean-field all-stats :n-update-gps)
          :mean-n-press-release-3-bat (mean-field all-stats :n-press-release-3-bat)
          :mean-n-press-release-3-gps (mean-field all-stats :n-press-release-3-gps)
          ;; Mean-of-medians survival time per arm per interval
          :mean-med-interim-analysis-bat   (mean-field all-stats :med-interim-analysis-bat)
          :mean-med-interim-analysis-gps   (mean-field all-stats :med-interim-analysis-gps)
          :mean-med-interim-analysis-pool  (mean-field all-stats :med-interim-analysis-pool)
          :mean-med-update-bat   (mean-field all-stats :med-update-bat)
          :mean-med-update-gps   (mean-field all-stats :med-update-gps)
          :mean-med-update-pool  (mean-field all-stats :med-update-pool)
          :mean-med-press-release-3-bat  (mean-field all-stats :med-press-release-3-bat)
          :mean-med-press-release-3-gps  (mean-field all-stats :med-press-release-3-gps)
          :mean-med-press-release-3-pool (mean-field all-stats :med-press-release-3-pool)}))

(defn- summarize-results
  "Aggregates statistics across all accepted simulations for a combo."
  [all-stats num-attempts num-pass-events record]
  (let [num-accepted (count all-stats)
        finite-t80 (filter #(not (js/Number.isNaN %)) (map :t80 all-stats))
        hr-final-arr (filter #(not (js/Number.isNaN %)) (map :hr-final all-stats))
        num-success (count (filter #(and (:reached-80 %) (< (:hr-final %) 0.636)) all-stats))
        to-nd (fn [coll] (np/array (cljs.core/to-array coll)))]
    (build-aggregate-map all-stats num-attempts num-pass-events record to-nd finite-t80 hr-final-arr num-success num-accepted)))

(defn simulate-one-combo
  "Simulates multiple trials for a single scenario combination."
  {:malli/schema [:=> [:cat [:map [:rec any?] [:cfg-dict any?] [:n-sims :int] [:seed :int]]] any?]}
  [{:keys [rec cfg-dict n-sims seed]}]
  (let [random-gen (np-random/default-rng (or seed 42))
        config cfg-dict
        n-screen (js/Math.min (:n-sims-screen config) n-sims)
        [screen-stats screen-pass] (run-sim-chunk rec config n-screen random-gen)]
    (when (>= (count screen-stats) (:n-screen-min-pass config))
      (let [remaining (- n-sims n-screen)
            [more-stats more-pass] (if (> remaining 0) (run-sim-chunk rec config remaining random-gen) [[] 0])
            all-stats (concat screen-stats more-stats)]
        (when-not (empty? all-stats)
          (summarize-results all-stats n-sims (+ screen-pass more-pass) rec))))))

(comment
  (np-random/default-rng 42))
