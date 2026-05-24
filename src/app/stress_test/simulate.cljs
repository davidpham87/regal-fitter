(ns app.stress-test.simulate
  "Adaptation of regal_stress_test.py for ClojureScript."
  (:require [app.regal-fit.survival :as survival]))

(defn- uniform-draw [min max]
  (+ min (* (js/Math.random) (- max min))))

(defn- generate-enrollment
  "Generate enrollment times for n-sims trials."
  [n-sims n-total bands]
  (let [enroll (js/Float64Array. (* n-sims n-total))]
    (loop [col 0
           remaining-bands bands]
      (if (seq remaining-bands)
        (let [[lo hi n] (first remaining-bands)]
          (if (> n 0)
            (do
              (dotimes [s n-sims]
                (dotimes [i n]
                  (aset enroll
                        (+ (* s n-total) col i)
                        (uniform-draw lo hi))))
              (recur (+ col n) (rest remaining-bands)))
            (recur col (rest remaining-bands))))
        ;; Sort each simulation's enrollment times
        (do
          (dotimes [s n-sims]
            (let [start (* s n-total)
                  end (+ start n-total)
                  sim-enroll (.slice enroll start end)]
              (.sort sim-enroll (fn [a b] (- a b)))
              (.set enroll sim-enroll start)))
          enroll)))))

(defn- km-survival-single
  "Calculates KM survival at target time for a single trial."
  [obs-t-arr is-ev-arr target-time]
  (let [n (.-length obs-t-arr)]
    (if (== n 0) 1.0
        (let [indices (js/Int32Array. n)]
          (dotimes [i n] (aset indices i i))
          ;; Sort indices by observed time
          (.sort indices
                 (fn [a b]
                   (- (aget obs-t-arr a) (aget obs-t-arr b))))
          
          (loop [i 0
                 surv 1.0]
            (if (< i n)
              (let [idx (aget indices i)
                    t (aget obs-t-arr idx)
                    is-ev (== (aget is-ev-arr idx) 1)
                    n-at-risk (- n i)]
                (if (and is-ev (<= t target-time))
                  (recur (inc i) (* surv (- 1.0 (/ 1.0 n-at-risk))))
                  (if (> t target-time)
                    surv
                    (recur (inc i) surv))))
              surv))))))

(defn- shuffle-array [arr]
  (let [n (.-length arr)]
    (loop [i (dec n)]
      (when (> i 0)
        (let [j (js/Math.floor (* (js/Math.random) (inc i)))
              tmp (aget arr i)]
          (aset arr i (aget arr j))
          (aset arr j tmp)
          (recur (dec i)))))))

(defn simulate-one-combo
  "Simulates a single (mOS, k) combination."
  [{:keys [mos k n-sims seed config]}]
  ;; Using Math.random for now for speed and stability in worker.
  ;; If reproducibility is strict, we should use a seeded PRNG.
  (let [scale (survival/weibull-scale-from-median mos k)
        n-total (reduce + (map #(nth % 2) (:enroll-bands config)))
        n-per-arm (quot n-total 2)
        
        enroll-arr (generate-enrollment n-sims n-total (:enroll-bands config))
        
        ev-ia (js/Int32Array. n-sims)
        ev-upd (js/Int32Array. n-sims)
        ev-pr3 (js/Int32Array. n-sims)
        gps-ev-ia (js/Int32Array. n-sims)
        pass-pool (js/Uint8Array. n-sims)
        
        t-ia (:t-ia config)
        t-upd (:t-upd config)
        t-pr3 (:t-pr3 config)
        pool-mos-min (:pool-mos-min config)
        inv-k (/ 1.0 k)]
    
    (dotimes [s n-sims]
      (let [offset (* s n-total)
            trial-obs-t (js/Float64Array. n-total)
            trial-is-ev (js/Int8Array. n-total)
            
            is-gps (js/Int8Array. n-total)]
        (dotimes [i n-per-arm] (aset is-gps i 1))
        (shuffle-array is-gps)
        
        (dotimes [i n-total]
          (let [idx (+ offset i)
                e-val (aget enroll-arr idx)
                ;; surv = scale * (-log(1-rand))^(1/k) 
                ;; Math.random is [0, 1), so 1-Math.random is (0, 1]
                s-val (* scale
                         (js/Math.pow
                          (- (js/Math.log (- 1.0 (js/Math.random))))
                          inv-k))
                
                f-ia (js/Math.max (- t-ia e-val) 0.0)
                f-upd (js/Math.max (- t-upd e-val) 0.0)
                f-pr3 (js/Math.max (- t-pr3 e-val) 0.0)]
            
            (when (<= s-val f-ia)
              (aset ev-ia s (inc (aget ev-ia s)))
              (when (== (aget is-gps i) 1)
                (aset gps-ev-ia s (inc (aget gps-ev-ia s)))))
            
            (when (<= s-val f-upd)
              (aset ev-upd s (inc (aget ev-upd s))))
            (when (<= s-val f-pr3)
              (aset ev-pr3 s (inc (aget ev-pr3 s))))
            
            (aset trial-obs-t i (js/Math.min s-val f-ia))
            (aset trial-is-ev i (if (<= s-val f-ia) 1 0))))
        
        ;; KM for pooled median at IA
        (let [s-at-12 (km-survival-single
                       trial-obs-t trial-is-ev pool-mos-min)]
          (when (> s-at-12 0.5)
            (aset pass-pool s 1)))))

    (let [obs-ev-ia (:obs-ev-ia config)
          obs-inc-upd (:obs-inc-upd config)
          obs-inc-pr3 (:obs-inc-pr3 config)
          futility-hr-max (:futility-hr-max config)
          
          joint-pass-count (atom 0)
          total-passed-ia (atom 0)
          total-ev-ia-le-60 (atom 0)
          total-inc-upd-le-12 (atom 0)
          total-inc-pr3-le-6 (atom 0)
          
          sum-ev-ia (atom 0)
          sum-inc-upd (atom 0)
          sum-inc-pr3 (atom 0)]
      
      (dotimes [s n-sims]
        (let [e-ia (aget ev-ia s)
              e-upd (aget ev-upd s)
              e-pr3 (aget ev-pr3 s)
              g-ia (aget gps-ev-ia s)
              p-pool (== (aget pass-pool s) 1)
              
              i-upd (- e-upd e-ia)
              i-pr3 (- e-pr3 e-upd)
              
              pass-hr (< g-ia
                         (* futility-hr-max
                            (/ e-ia (inc futility-hr-max))))
              passed-ia (and pass-hr p-pool)]
          
          (swap! sum-ev-ia + e-ia)
          (swap! sum-inc-upd + i-upd)
          (swap! sum-inc-pr3 + i-pr3)
          
          (when passed-ia (swap! total-passed-ia inc))
          
          (let [c1 (<= e-ia obs-ev-ia)
                c2 (<= i-upd obs-inc-upd)
                c3 (<= i-pr3 obs-inc-pr3)]
            (when c1 (swap! total-ev-ia-le-60 inc))
            (when c2 (swap! total-inc-upd-le-12 inc))
            (when c3 (swap! total-inc-pr3-le-6 inc))
            (when (and passed-ia c1 c2 c3)
              (swap! joint-pass-count inc)))))

      (let [exp-ev-ia (/ @sum-ev-ia n-sims)
            exp-inc-upd (/ @sum-inc-upd n-sims)
            exp-inc-pr3 (/ @sum-inc-pr3 n-sims)
            residual (js/Math.max
                      (js/Math.abs (- exp-ev-ia obs-ev-ia))
                      (js/Math.abs (- exp-inc-upd obs-inc-upd))
                      (js/Math.abs (- exp-inc-pr3 obs-inc-pr3)))]
        {:mos mos
         :k k
         :p_pass_ia (/ @total-passed-ia n-sims)
         :p_ev_ia_le_60 (/ @total-ev-ia-le-60 n-sims)
         :p_inc_upd_le_12 (/ @total-inc-upd-le-12 n-sims)
         :p_inc_pr3_le_6 (/ @total-inc-pr3-le-6 n-sims)
         :p_joint (/ @joint-pass-count n-sims)
         :expected_ev_ia exp-ev-ia
         :expected_inc_upd exp-inc-upd
         :expected_inc_pr3 exp-inc-pr3
         :residual residual}))))
