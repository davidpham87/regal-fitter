(ns app.regal-fit.stats
  "Statistical functions for trial evaluation.
  Includes Log-Rank test (Z-score and HR) and Kaplan-Meier estimates."
  (:require [cljs.numpy :as np]))

(defn logrank-z
  "Computes the log-rank test Z-score and hazard ratio.
  This version uses functional paradigms where possible, but avoids over-complicating
  the inherently sequential accumulation required for logrank over sorted events.
  Arguments:
    times:  numpy array of event or censoring times
    events: numpy array of booleans (1 for event, 0 for censor)
    groups: numpy array of group assignments (1 for experimental, 0 for control)
  Returns:
    [z-score hazard-ratio]"
  [times events groups]
  (let [events-sum (np/sum events)]
    (if (< events-sum 3)
      [0.0 1.0]
      (let [o (np/argsort times)
            ts (.take times o)
            es (.take events o)
            gs (.take groups o)
            ts-arr (.toArray ts)
            es-arr (.toArray es)
            gs-arr (.toArray gs)
            n (.-length ts-arr)

            ;; We build the arrays needed for risk set calculations using map/reduce ideas.
            ;; First map over groups to identify experimental arm (ig = 1 if gs=1 else 0)
            ig-seq (map #(if (== % 1) 1.0 0.0) gs-arr)

            ;; To calculate n-g (number at risk in exp arm) and n-b (in control arm) at each index,
            ;; we can scan right-to-left. A reduction on the reversed sequence works well.
            reverse-accum (reduce (fn [acc ig]
                                    (let [is-g (== ig 1.0)
                                          prev-g (:sum-g (last acc) 0.0)
                                          prev-b (:sum-b (last acc) 0.0)
                                          curr-g (+ prev-g (if is-g 1.0 0.0))
                                          curr-b (+ prev-b (if is-g 0.0 1.0))]
                                      (conj acc {:sum-g curr-g :sum-b curr-b})))
                                  []
                                  (reverse ig-seq))
            ;; The result is built backwards (from last element to first), so we reverse it back.
            risk-seq (reverse reverse-accum)
            n-g-seq (map :sum-g risk-seq)
            n-b-seq (map :sum-b risk-seq)

            n-g-arr (to-array n-g-seq)
            n-b-arr (to-array n-b-seq)
            ig-arr (to-array ig-seq)

            ;; Find indices of actual events
            ev-idx (keep-indexed (fn [i e] (when e i)) es-arr)]

        (if (empty? ev-idx)
          [0.0 1.0]
          (let [;; Group event indices by their distinct times
                grouped-by-time (partition-by #(aget ts-arr %) ev-idx)

                ;; Process each distinct time point sequentially
                stats-result (reduce
                              (fn [{:keys [u v log-hr-num log-hr-den]} idx-list]
                                (let [first-idx (first idx-list)
                                      ng (aget n-g-arr first-idx)
                                      nb (aget n-b-arr first-idx)
                                      nt (+ ng nb)]
                                  (if (< nt 2)
                                    {:u u :v v :log-hr-num log-hr-num :log-hr-den log-hr-den}
                                    (let [dg (reduce + (map #(aget ig-arr %) idx-list))
                                          dt (count idx-list)
                                          eg (/ (* ng dt) nt)
                                          next-u (+ u (- dg eg))
                                          next-v (if (> nt 1) (+ v (/ (* nb ng dt (- nt dt)) (* nt nt (dec nt)))) v)
                                          next-num (if (and (> dt 0) (> ng 0) (> nb 0)) (+ log-hr-num (- dg eg)) log-hr-num)
                                          next-den (if (and (> dt 0) (> ng 0) (> nb 0)) (+ log-hr-den (* eg (/ nb nt))) log-hr-den)]
                                      {:u next-u :v next-v :log-hr-num next-num :log-hr-den next-den}))))
                              {:u 0.0 :v 0.0 :log-hr-num 0.0 :log-hr-den 0.0}
                              grouped-by-time)]

            (if (<= (:v stats-result) 0)
              [0.0 1.0]
              (let [z (/ (- (:u stats-result)) (js/Math.sqrt (:v stats-result)))
                    hr (if (> (:log-hr-den stats-result) 0)
                         (js/Math.exp (/ (:log-hr-num stats-result) (:log-hr-den stats-result)))
                         1.0)]
                [z hr]))))))))

(defn km-S-at-T
  "Calculates the Kaplan-Meier survival probability estimate at a specific time T.
  Arguments:
    time-obs: array of observed times
    event-flag: array of event indicators (true if event, false if censored)
    T: time point at which to estimate survival
  Returns:
    Survival probability estimate at time T."
  [time-obs event-flag T]
  (let [n (.-size time-obs)]
    (if (== n 0)
      1.0
      (let [o (np/argsort time-obs)
            ts (.take time-obs o)
            es (.take event-flag o)
            ts-arr (.toArray ts)
            es-arr (.toArray es)

            ;; Zip them together to make seq operations easier
            zipped (map vector ts-arr es-arr (range n))

            ;; Keep only those events that happened on or before T
            relevant (filter (fn [[t ev _]] (and ev (<= t T))) zipped)]

        (reduce (fn [mult [_ _ i]]
                  (let [n-at-risk (- n i)]
                    (* mult (- 1.0 (/ 1.0 n-at-risk)))))
                1.0
                relevant)))))
