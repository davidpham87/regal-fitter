(ns app.visualization.survival
  (:require [cljs.numpy :as np]))

(defn scale-from-median [median shape]
  (/ median (js/Math.pow (js/Math.log 2.0)
                         (/ 1.0 (js/Math.max 0.001 shape)))))

(defn S-weibull [t scale shape]
  (js/Math.exp (- (js/Math.pow (/ t scale) shape))))

(defn S-cure [t cure-frac scale shape]
  (let [unc (S-weibull t scale shape)]
    (+ cure-frac (* (- 1.0 cure-frac) unc))))

(defn S-leaky [t cure-frac scale shape leak-yr]
  (let [unc (S-weibull t scale shape)
        leak-rate-monthly (/ leak-yr 12.0)
        cured (js/Math.exp (- (* leak-rate-monthly t)))]
    (+ (* cure-frac cured) (* (- 1.0 cure-frac) unc))))

(defn combo-survival [t combo arm]
  (let [family (some-> (:family combo) name)]
    (if (= arm :bat)
      (if (= family "leaky")
        (S-leaky t
                 (:bat-cure-frac combo)
                 (:bat-unc-scale combo)
                 (:bat-unc-shape combo)
                 (:bat-leak-yr combo))
        (S-weibull t (:bat-scale combo) (:bat-shape combo)))
      (cond
        (= family "weibull")
        (S-weibull t (:gps-scale combo) (:gps-shape combo))
        (= family "cure")
        (S-cure t (:cure-frac combo) (:unc-scale combo) (:unc-shape combo))
        (= family "leaky")
        (S-leaky t (:cure-frac combo) (:unc-scale combo) (:unc-shape combo)
                 (:leak-yr combo))
        :else 0.0))))

(defn calculate-sum-residuals [combo config]
  (let [diff-ia (js/Math.abs (- (or (:exp-ev-ia combo) 0)
                                (or (:n-ev-ia config) 0)))
        diff-upd (js/Math.abs (- (or (:exp-ev-upd combo) 0)
                                 (or (:n-ev-upd config) 0)))
        diff-pr3 (if (:use-pr3-anchor config)
                   (js/Math.abs (- (or (:exp-ev-pr3 combo) 0)
                                   (or (:n-ev-pr3 config) 0)))
                   0.0)]
    (+ diff-ia diff-upd diff-pr3)))

(defn calculate-bat-rep-params [best-n weights tot-wt]
  (let [bat-med-w (if (pos? tot-wt)
                    (/ (reduce + (map * (map :bat-med best-n) weights))
                       tot-wt)
                    (or (:bat-med (first best-n)) 0.0))
        bat-sh-w (if (pos? tot-wt)
                   (/ (reduce + (map * (map :bat-shape best-n) weights))
                      tot-wt)
                   (or (:bat-shape (first best-n)) 0.0))]
    [bat-med-w bat-sh-w (scale-from-median bat-med-w bat-sh-w)]))

(defn S-weibull-vec [t scales shapes n]
  (let [t-arr (np/full (clj->js [n]) (float t))
        div (np/divide t-arr scales)
        pow (np/power div shapes)]
    (np/exp (np/multiply pow -1.0))))

(defn S-cure-vec [t cf scales shapes n]
  (let [weib (S-weibull-vec t scales shapes n)
        ones (np/full (clj->js [n]) 1.0)
        one-minus-cf (np/subtract ones cf)
        prod (np/multiply one-minus-cf weib)]
    (np/add cf prod)))

(defn S-leaky-vec [t cf scales shapes leak n]
  (let [weib (S-weibull-vec t scales shapes n)
        t-arr (np/full (clj->js [n]) (float t))
        leak-m (np/divide leak (np/full (clj->js [n]) 12.0))
        cured (np/exp (np/multiply (np/multiply leak-m t-arr) -1.0))
        ones (np/full (clj->js [n]) 1.0)
        term2 (np/multiply (np/subtract ones cf) weib)]
    (np/add (np/multiply cf cured) term2)))

(defn bat-survival-vec [t best-n family n]
  (if (= family "leaky")
    (let [cf (np/array (clj->js (map :bat-cure-frac best-n)))
          sc (np/array (clj->js (map :bat-unc-scale best-n)))
          sh (np/array (clj->js (map :bat-unc-shape best-n)))
          lk (np/array (clj->js (map :bat-leak-yr best-n)))]
      (np/nd-to-array (S-leaky-vec t cf sc sh lk n)))
    (let [sc (np/array (clj->js (map :bat-scale best-n)))
          sh (np/array (clj->js (map :bat-shape best-n)))]
      (np/nd-to-array (S-weibull-vec t sc sh n)))))

(defn gps-survival-vec [t best-n family n]
  (cond
    (= family "weibull")
    (let [sc (np/array (clj->js (map :gps-scale best-n)))
          sh (np/array (clj->js (map :gps-shape best-n)))]
      (np/nd-to-array (S-weibull-vec t sc sh n)))
    (= family "cure")
    (let [cf (np/array (clj->js (map :cure-frac best-n)))
          sc (np/array (clj->js (map :unc-scale best-n)))
          sh (np/array (clj->js (map :unc-shape best-n)))]
      (np/nd-to-array (S-cure-vec t cf sc sh n)))
    (= family "leaky")
    (let [cf (np/array (clj->js (map :cure-frac best-n)))
          sc (np/array (clj->js (map :unc-scale best-n)))
          sh (np/array (clj->js (map :unc-shape best-n)))
          lk (np/array (clj->js (map :leak-yr best-n)))]
      (np/nd-to-array (S-leaky-vec t cf sc sh lk n)))
    :else (clj->js (repeat n 0.0))))

(defn combo-survival-vec [t best-n arm family]
  (let [n (count best-n)]
    (if (= arm :bat)
      (bat-survival-vec t best-n family n)
      (gps-survival-vec t best-n family n))))

(defn build-rep-gps-survival-vec [t best-n weights tot-wt family]
  (if (pos? tot-wt)
    (let [surv (combo-survival-vec t best-n :gps family)]
      (/ (reduce + (map * surv weights)) tot-wt))
    (combo-survival t (first best-n) :gps)))

(defn build-rep-bat-survival-vec [t best-n weights tot-wt family]
  (if (pos? tot-wt)
    (let [surv (combo-survival-vec t best-n :bat family)]
      (/ (reduce + (map * surv weights)) tot-wt))
    (combo-survival t (first best-n) :bat)))

(defn build-rep-km-data [times best-n weights tot-wt scale shape]
  (let [family (some-> (:family (first best-n)) name)]
    (mapcat
     (fn [t]
       (let [gps-s (build-rep-gps-survival-vec
                    t best-n weights tot-wt family)
             bat-s (if (= family "leaky")
                     (build-rep-bat-survival-vec
                      t best-n weights tot-wt family)
                     (S-weibull t scale shape))]
         [{:time t
           :survival bat-s
           :group "BAT"
           :combo-id "representative"
           :type "representative"}
          {:time t
           :survival gps-s
           :group "GPS"
           :combo-id "representative"
           :type "representative"}]))
     times)))

(defn calculate-rmst [probs]
  (let [n (count probs)]
    (if (<= n 1)
      0.0
      (let [s-first (first probs)
            s-last (last probs)
            s-middle (butlast (rest probs))]
        (+ (* 0.5 s-first)
           (reduce + s-middle)
           (* 0.5 s-last))))))

(defn weighted-percentile [values weights p]
  (if (empty? values)
    0.0
    (let [pairs (sort-by first (map vector values weights))
          cum-weights (reductions + (map second pairs))
          indexed-pairs (map vector pairs cum-weights)]
      (or (some (fn [[[val _] cum-w]]
                  (when (>= cum-w p) val))
                indexed-pairs)
          (first (last pairs))))))

(defn get-survival-stats [t best-n normalized-w group family]
  (let [surv (combo-survival-vec t best-n group family)
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
                  (vreset! v-sum (+ @v-sum (* (nth normalized-w i)
                                             diff diff)))))
            sd (js/Math.sqrt @v-sum)]
        {:median med :low low :high high :mean @m :sd sd}))))

(defn calculate-ensemble-medians [best-n weights tot-wt]
  (let [bat-med-w (if (pos? tot-wt)
                    (/ (reduce + (map * (map :bat-med best-n) weights))
                       tot-wt)
                    (or (:bat-med (first best-n)) 0.0))
        gps-med-w (if (pos? tot-wt)
                    (/ (reduce + (map * (map :gps-med best-n) weights))
                       tot-wt)
                    (or (:gps-med (first best-n)) 0.0))]
    [bat-med-w gps-med-w]))
