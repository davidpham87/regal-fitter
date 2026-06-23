(ns app.regal-fit.stats
  "Statistical functions for trial evaluation.
  Includes Log-Rank test (Z-score and HR) and Kaplan-Meier estimates."
  (:require [cljs.numpy :as np]))

(defn- compute-risk-sets
  "Computes number at risk in experimental and control groups at each time point."
  [groups-array]
  (let [n (.-length groups-array)
        n-exp-arr (js/Float64Array. n)
        n-control-arr (js/Float64Array. n)
        is-exp-arr (js/Float64Array. n)]
    (loop [i (dec n) sum-exp 0.0 sum-control 0.0]
      (if (>= i 0)
        (let [is-exp (if (== (aget groups-array i) 1) 1.0 0.0)]
          (aset is-exp-arr i is-exp)
          (let [next-exp (+ sum-exp is-exp)
                next-control (+ sum-control (if (== is-exp 1.0) 0.0 1.0))]
            (aset n-exp-arr i next-exp)
            (aset n-control-arr i next-control)
            (recur (dec i) next-exp next-control)))
        [n-exp-arr n-control-arr is-exp-arr]))))

(defn- update-logrank-stats
  "Updates logrank statistics for a set of events at the same time point."
  [{:keys [logrank-u logrank-variance log-hazard-ratio-numerator log-hazard-ratio-denominator]} index-list n-exp-arr n-control-arr is-exp-arr]
  (let [first-idx (first index-list)
        n-exp (aget n-exp-arr first-idx)
        n-control (aget n-control-arr first-idx)
        n-total (+ n-exp n-control)]
    (if (< n-total 2)
      {:logrank-u logrank-u :logrank-variance logrank-variance :log-hazard-ratio-numerator log-hazard-ratio-numerator :log-hazard-ratio-denominator log-hazard-ratio-denominator}
      (let [events-exp (reduce + (map #(aget is-exp-arr %) index-list))
            events-total (count index-list)
            expected-exp (/ (* n-exp events-total) n-total)
            v-increment (/ (* n-control n-exp events-total (- n-total events-total)) (* n-total n-total (dec n-total)))]
        {:logrank-u (+ logrank-u (- events-exp expected-exp))
         :logrank-variance (if (> n-total 1) (+ logrank-variance v-increment) logrank-variance)
         :log-hazard-ratio-numerator (+ log-hazard-ratio-numerator (- events-exp expected-exp))
         :log-hazard-ratio-denominator (+ log-hazard-ratio-denominator (* expected-exp (/ n-control n-total)))}))))

(defn logrank-z
  "Computes the log-rank test Z-score and hazard ratio."
  {:malli/schema [:=> [:cat any? any? any?] [:tuple :number :number]]}
  [times events groups]
  (if (< (np/sum events) 3) [0.0 1.0]
      (let [order (np/argsort times)
            times-arr (np/nd-to-array (.take ^js times order))
            events-arr (np/nd-to-array (.take ^js events order))
            groups-arr (np/nd-to-array (.take ^js groups order))
            [n-exp-arr n-control-arr is-exp-arr] (compute-risk-sets groups-arr)
            event-indices (keep-indexed (fn [i e] (when (== e 1) i))
                                        events-arr)]
        (if (empty? event-indices) [0.0 1.0]
            (let [grouped-indices (partition-by #(aget times-arr %) event-indices)
                  initial-stats {:logrank-u 0.0 :logrank-variance 0.0 :log-hazard-ratio-numerator 0.0 :log-hazard-ratio-denominator 0.0}
                  results (reduce #(update-logrank-stats %1 %2 n-exp-arr n-control-arr is-exp-arr) initial-stats grouped-indices)]
              (if (<= (:logrank-variance results) 0) [0.0 1.0]
                  [(/ (- (:logrank-u results)) (js/Math.sqrt (:logrank-variance results)))
                   (if (> (:log-hazard-ratio-denominator results) 0) (js/Math.exp (/ (:log-hazard-ratio-numerator results) (:log-hazard-ratio-denominator results))) 1.0)]))))))

(defn km-survival-at-time
  "Calculates the Kaplan-Meier survival probability estimate at a specific time T."
  {:malli/schema [:=> [:cat any? any? :number] :number]}
  [time-observed event-flag target-time]
  (let [n-subjects (.-size ^js time-observed)]
    (if (== n-subjects 0) 1.0
        (let [order (np/nd-to-array (np/argsort time-observed))
              times-arr (np/nd-to-array (.take ^js time-observed order))
              events-arr (np/nd-to-array (.take ^js event-flag order))]
          (loop [i 0 multiplier 1.0]
            (if (< i n-subjects)
              (let [t (aget times-arr i)
                    ev (aget events-arr i)]
                (if (and (== ev 1) (<= t target-time))
                  (recur (inc i)
                         (* multiplier (- 1.0 (/ 1.0 (- n-subjects i)))))
                  (recur (inc i) multiplier)))
              multiplier))))))
