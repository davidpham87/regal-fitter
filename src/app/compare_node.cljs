(ns app.compare-node
  (:require ["fs" :as fs]
            [app.regal-fit.enrollment :as enrollment]
            [app.regal-fit.survival :as survival]
            [app.state :as state]
            [app.stress-test.simulate :as stress-simulate]
            [cljs.nodejs :as node]
            [cljs.numpy :as np]))

(def truth (js/JSON.parse (.readFileSync fs "truth.json" "utf8")))

(defn approx= [a b epsilon]
  (< (js/Math.abs (- a b)) epsilon))

(defn check-weibull-scales []
  (println "Checking Weibull scales...")
  (let [cases (js->clj (.-weibull_scales truth) :keywordize-keys true)]
    (doseq [{:keys [median shape scale]} cases]
      (let [calc-scale (survival/weibull-scale-from-median median shape)]
        (if (approx= calc-scale scale 1e-6)
          (println "  PASS:" median shape "->" calc-scale)
          (println "  FAIL:" median shape "Expected" scale "Got" calc-scale))))))

(defn check-survival-functions []
  (println "Checking survival functions...")
  (let [t-vals (np/array (.-t_vals truth))
        weibull-truth (.-weibull_surv truth)
        cure-truth (.-cure_surv truth)
        leaky-truth (.-leaky_surv truth)

        calc-weibull (survival/weibull-survival-probability
                      t-vals (.-scale weibull-truth) (.-shape weibull-truth))
        calc-cure (survival/cure-survival-probability
                   t-vals (.-p_cure cure-truth) (.-scale cure-truth) (.-shape cure-truth))
        calc-leaky (survival/leaky-cure-survival-probability
                    t-vals (.-p_cure leaky-truth) (.-scale leaky-truth) (.-shape leaky-truth) (.-leak_yr leaky-truth))]

    (println "  Weibull:")
    (doseq [i (range (.-size t-vals))]
      (let [expected (aget (.-results weibull-truth) i)
            got (aget (.-data calc-weibull) i)]
        (if (approx= expected got 1e-6)
          (println "    PASS: t=" (aget (.-t_vals truth) i) "val=" got)
          (println "    FAIL: t=" (aget (.-t_vals truth) i) "Expected" expected "Got" got))))

    (println "  Cure:")
    (doseq [i (range (.-size t-vals))]
      (let [expected (aget (.-results cure-truth) i)
            got (aget (.-data calc-cure) i)]
        (if (approx= expected got 1e-6)
          (println "    PASS: t=" (aget (.-t_vals truth) i) "val=" got)
          (println "    FAIL: t=" (aget (.-t_vals truth) i) "Expected" expected "Got" got))))

    (println "  Leaky:")
    (doseq [i (range (.-size t-vals))]
      (let [expected (aget (.-results leaky-truth) i)
            got (aget (.-data calc-leaky) i)]
        (if (approx= expected got 1e-6)
          (println "    PASS: t=" (aget (.-t_vals truth) i) "val=" got)
          (println "    FAIL: t=" (aget (.-t_vals truth) i) "Expected" expected "Got" got))))))

(defn check-expected-events []
  (println "Checking expected events...")
  (let [ev-truth (.-expected_arm_events truth)
        cfg state/default-config
        [e-pts e-weights] (enrollment/expected-enrollment-times cfg)
        t-pts (np/array #js [(:t-ia cfg) (:t-upd cfg)])
        bat-scales (np/array #js [(survival/weibull-scale-from-median (.-bat_med ev-truth) (.-bat_shape ev-truth))])
        bat-shapes (np/array #js [(.-bat_shape ev-truth)])

        calc-ev (enrollment/expected-arm-events
                 survival/weibull-survival-probability
                 [bat-scales bat-shapes]
                 e-pts e-weights t-pts (:n-per-arm cfg) (:n-total cfg))]

    (doseq [ti [0 1]]
      (let [expected (aget (.-results ev-truth) 0 ti)
            got (aget (.-data calc-ev) ti)]
        (if (approx= expected got 1e-4)
          (println "  PASS: anchor=" ti "val=" got)
          (println "  FAIL: anchor=" ti "Expected" expected "Got" got))))))

(def manual-cljs-bands
  [[0.0 1.0 2] [1.0 2.0 2] [2.0 3.0 2] [3.0 4.0 2] [4.0 5.0 3] [5.0 6.0 3]
   [6.0 7.0 3] [7.0 8.0 3] [8.0 9.0 3] [9.0 10.0 3] [10.0 11.0 4]
   [11.0 12.0 4] [12.0 13.0 4] [13.0 14.0 4] [14.0 15.0 4] [15.0 16.0 4]
   [16.0 17.0 4] [17.0 18.0 4] [18.0 19.0 4] [19.0 20.0 4] [20.0 21.0 4]
   [21.0 22.0 4] [22.0 23.0 4] [23.0 24.0 4] [24.0 25.0 4] [25.0 26.0 4]
   [26.0 27.0 4] [27.0 28.0 4] [28.0 29.0 3] [29.0 30.0 3] [30.0 31.0 3]
   [31.0 32.0 3] [32.0 33.0 3] [33.0 34.0 3] [34.0 35.0 2] [35.0 36.0 2]
   [36.0 37.0 2] [37.0 38.0 4]])

(defn check-enrollment-bands []
  (println "Checking enrollment bands...")
  (let [enroll-truth (.-enrollment truth)
        manual-truth (.-manual enroll-truth)
        manual-cljs manual-cljs-bands

        s-curve-truth (.-s_curve enroll-truth)
        s-curve-cljs (enrollment/get-s-curve-enrollment-bands 126 38 19 0.3)]
    (println "  Manual enrollment:")
    (if (= (count manual-truth) (count manual-cljs))
      (do
        (println "    Count match:" (count manual-cljs))
        (doseq [i (range (count manual-cljs))]
          (let [t-band (js->clj (aget manual-truth i))
                c-band (nth manual-cljs i)]
            (if (= t-band c-band)
              nil ;; (println "    Band" i "match")
              (println "    FAIL: Band" i "Expected" t-band "Got" c-band)))))
      (println "    FAIL: Count mismatch. Expected" (count manual-truth) "Got" (count manual-cljs)))

    (println "  S-Curve enrollment:")
    (if (= (count s-curve-truth) (count s-curve-cljs))
      (do
        (println "    Count match:" (count s-curve-cljs))
        (doseq [i (range (count s-curve-cljs))]
          (let [t-band (js->clj (aget s-curve-truth i))
                c-band (nth s-curve-cljs i)]
            (if (= t-band c-band)
              nil ;; (println "    Band" i "match")
              (println "    FAIL: Band" i "Expected" t-band "Got" c-band)))))
      (println "    FAIL: Count mismatch. Expected" (count s-curve-truth) "Got" (count s-curve-cljs)))))

(defn check-km-survival []
  (println "Checking KM survival...")
  (let [km-truth (.-km_survival truth)
        obs-t (np/array (clj->js (.-obs_t km-truth)))
        is-ev (np/array (clj->js (.-is_ev km-truth)))]
    (doseq [i (range (.-length (.-targets km-truth)))]
      (let [target (aget (.-targets km-truth) i)
            expected (aget (.-results km-truth) i)
            got (stress-simulate/km-survival-single (.-data obs-t) (.-data is-ev) target)]
        (if (approx= expected got 1e-6)
          (println "  PASS: target=" target "val=" got)
          (println "  FAIL: target=" target "Expected" expected "Got" got))))))

(defn main [& args]
  (check-weibull-scales)
  (check-survival-functions)
  (check-expected-events)
  (check-enrollment-bands)
  (check-km-survival)
  (println "Comparison complete."))
