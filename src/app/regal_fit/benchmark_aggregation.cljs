(ns app.regal-fit.benchmark-aggregation
  (:require [app.visualization.data :as vdata]
            [app.visualization.survival :as survival]
            [cljs.numpy :as np]))

(defn generate-mock-combos [n]
  (vec
   (for [i (range n)]
     {:family "weibull"
      :weight (rand)
      :bat-scale (+ 10 (rand 10))
      :bat-shape (+ 0.5 (rand 1.0))
      :gps-scale (+ 12 (rand 12))
      :gps-shape (+ 0.5 (rand 1.0))
      :bat-med (+ 10 (rand 10))
      :gps-med (+ 12 (rand 12))})))

(defn get-survival-stats-optimized [t best-n normalized-w group family]
  (let [surv (survival/combo-survival-vec t best-n group family)
        n (count surv)
        js-arr (js/Array. n)]
    (dotimes [i n]
      (aset js-arr i #js [(aget surv i) (nth normalized-w i)]))
    (.sort js-arr (fn [a b] (- (aget a 0) (aget b 0))))
    (let [cum-weights (js/Array. n)
          values (js/Array. n)
          running-w (volatile! 0.0)]
      (dotimes [i n]
        (let [pair (aget js-arr i)
              v (aget pair 0)
              w (aget pair 1)]
          (vreset! running-w (+ @running-w w))
          (aset cum-weights i @running-w)
          (aset values i v)))
      (let [find-p (fn [p]
                     (loop [i 0]
                       (if (< i n)
                         (if (>= (aget cum-weights i) p)
                           (aget values i)
                           (recur (inc i)))
                         (aget values (dec n)))))
            med (find-p 0.50)
            low (find-p 0.025)
            high (find-p 0.975)
            m (volatile! 0.0)
            _ (dotimes [i n]
                (vreset! m (+ @m (* (aget surv i) (nth normalized-w i)))))
            v-sum (volatile! 0.0)
            _ (dotimes [i n]
                (let [diff (- (aget surv i) @m)]
                  (vreset! v-sum (+ @v-sum (* (nth normalized-w i) diff diff)))))
            sd (js/Math.sqrt @v-sum)]
        {:median med :low low :high high :mean @m :sd sd}))))

(defn main []
  (println "Starting Aggregation Benchmark...")
  (let [combos (generate-mock-combos 1000)
        config {:family "weibull"}
        ;; Check numerical equivalence
        normalized-w (let [weights (mapv #(or (:weight %) 0.0) combos)
                           tot-wt (reduce + weights)]
                       (mapv #(/ % tot-wt) weights))
        old-res (survival/get-survival-stats 40.0 combos normalized-w :bat "weibull")
        new-res (get-survival-stats-optimized 40.0 combos normalized-w :bat "weibull")]
    (println "Old Result:" (pr-str old-res))
    (println "New Result:" (pr-str new-res))
    (let [diff-med (js/Math.abs (- (:median old-res) (:median new-res)))
          diff-mean (js/Math.abs (- (:mean old-res) (:mean new-res)))
          diff-sd (js/Math.abs (- (:sd old-res) (:sd new-res)))]
      (if (and (< diff-med 1e-9) (< diff-mean 1e-9) (< diff-sd 1e-9))
        (println "Verification passed! Results match exactly.")
        (println "Verification FAILED! Results differ.")))
    
    ;; Old implementation timing
    (let [t0 (.now js/performance)
          _ (dotimes [_ 10]
              (vdata/build-km-ci-data combos config))
          t1 (.now js/performance)
          old-time (- t1 t0)
          
          ;; New implementation timing
          t2 (.now js/performance)
          _ (dotimes [_ 10]
              (with-redefs [survival/get-survival-stats get-survival-stats-optimized]
                (vdata/build-km-ci-data combos config)))
          t3 (.now js/performance)
          new-time (- t3 t2)]
      (println (str "Old time (10 runs): " (.toFixed old-time 2) " ms"))
      (println (str "New time (10 runs): " (.toFixed new-time 2) " ms"))
      (println (str "Speedup: " (.toFixed (/ old-time new-time) 2) "x")))))
