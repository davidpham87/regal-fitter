(ns app.regal-fit.stats
  "Statistical functions for trial evaluation.
  Includes Log-Rank test (Z-score and HR) and Kaplan-Meier estimates."
  (:require [cljs.numpy :as np]))

(defn- compute-risk-sets
  "Computes number at risk in experimental and control groups at each time point."
  [groups-array]
  (let [is-experimental-seq (map #(if (== % 1) 1.0 0.0) groups-array)
        reverse-accumulation (reduce (fn [accumulator is-exp]
                                       (let [prev (or (last accumulator) {:sum-exp 0.0 :sum-control 0.0})
                                             curr-exp (+ (:sum-exp prev) (if (== is-exp 1.0) 1.0 0.0))
                                             curr-control (+ (:sum-control prev) (if (== is-exp 1.0) 0.0 1.0))]
                                         (conj accumulator {:sum-exp curr-exp :sum-control curr-control})))
                                     [] (reverse is-experimental-seq))
        risk-seq (reverse reverse-accumulation)]
    [(to-array (map :sum-exp risk-seq)) (to-array (map :sum-control risk-seq)) (to-array is-experimental-seq)]))

(defn- update-logrank-stats
  "Updates logrank statistics for a set of events at the same time point."
  [{:keys [u v log-hr-num log-hr-den]} index-list n-exp-arr n-control-arr is-exp-arr]
  (let [first-idx (first index-list)
        n-exp (aget n-exp-arr first-idx)
        n-control (aget n-control-arr first-idx)
        n-total (+ n-exp n-control)]
    (if (< n-total 2)
      {:u u :v v :log-hr-num log-hr-num :log-hr-den log-hr-den}
      (let [events-exp (reduce + (map #(aget is-exp-arr %) index-list))
            events-total (count index-list)
            expected-exp (/ (* n-exp events-total) n-total)
            v-increment (/ (* n-control n-exp events-total (- n-total events-total)) (* n-total n-total (dec n-total)))]
        {:u (+ u (- events-exp expected-exp))
         :v (if (> n-total 1) (+ v v-increment) v)
         :log-hr-num (+ log-hr-num (- events-exp expected-exp))
         :log-hr-den (+ log-hr-den (* expected-exp (/ n-control n-total)))}))))

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
            event-indices (keep-indexed (fn [i e] (when e i)) events-arr)]
        (if (empty? event-indices) [0.0 1.0]
            (let [grouped-indices (partition-by #(aget times-arr %) event-indices)
                  initial-stats {:u 0.0 :v 0.0 :log-hr-num 0.0 :log-hr-den 0.0}
                  results (reduce #(update-logrank-stats %1 %2 n-exp-arr n-control-arr is-exp-arr) initial-stats grouped-indices)]
              (if (<= (:v results) 0) [0.0 1.0]
                  [(/ (- (:u results)) (js/Math.sqrt (:v results)))
                   (if (> (:log-hr-den results) 0) (js/Math.exp (/ (:log-hr-num results) (:log-hr-den results))) 1.0)]))))))

(defn km-survival-at-time
  "Calculates the Kaplan-Meier survival probability estimate at a specific time T."
  {:malli/schema [:=> [:cat any? any? :number] :number]}
  [time-observed event-flag target-time]
  (let [n-subjects (.-size ^js time-observed)]
    (if (== n-subjects 0) 1.0
        (let [order (np/argsort time-observed)
              times-arr (np/nd-to-array (.take ^js time-observed order))
              events-arr (np/nd-to-array (.take ^js event-flag order))
              relevant-events (filter (fn [[t ev i]] (and ev (<= t target-time))) (map vector times-arr events-arr (range n-subjects)))]
          (reduce (fn [multiplier [_ _ i]] (* multiplier (- 1.0 (/ 1.0 (- n-subjects i))))) 1.0 relevant-events)))))
