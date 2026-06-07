(ns app.regal-fit.enrollment
  "Functions for calculating expected enrollment times and events."
  (:require [cljs.numpy :as np]
            [app.regal-fit.survival :as survival]))

(defn larger-bands
  "Agglomerate band definition to make coarser definion of enorllment"
  [x window]
  (let [ys (partitionv-all window x)
        get-count (fn [y] (reduce + (map #(->> % last) y)))
        get-min (fn [y] (reduce min (map #(->> % first) y)))
        get-max (fn [y] (reduce max (map #(->> % second) y)))
        f (juxt get-min get-max get-count)]
    (mapv f ys)))

(defn- calculate-band-data
  "Computes enrollment points and weights for a single time band.
   Accepts a band [low high count] and subjects-per-unit density."
  [[low high count] subjects-per-unit]
  (let [n-sub-samples (js/Math.max
                       2 (js/Math.floor (* (- high low)
                                           subjects-per-unit)))
        h (/ (- high low) n-sub-samples)
        start (+ low (/ h 2.0))
        stop (- high (/ h 2.0))
        enroll-points (np/linspace start stop n-sub-samples)
        enroll-weights (np/full #js [n-sub-samples]
                                (/ count n-sub-samples)
                                "float64")]
    {:points enroll-points :weights enroll-weights}))

(defn expected-enrollment-times
  "Calculates expected enrollment times and weights based on config."
  {:malli/schema [:=> [:cat [:map [:enroll-bands
                                   [:vector [:vector :number]]]]]
                      [:tuple any? any?]]}
  [cfg]
  (let [subjects-per-unit 8
        bands (:enroll-bands cfg)
        band-data (map #(calculate-band-data % subjects-per-unit) bands)
        all-points (to-array (map :points band-data))
        all-weights (to-array (map :weights band-data))]
    (if (empty? all-points)
      [(np/array #js [] "float64") (np/array #js [] "float64")]
      [(np/concatenate all-points) (np/concatenate all-weights)])))

(defn expected-arm-enrolled
  "Calculates expected number of enrolled patients per arm over calendar-times."
  {:malli/schema [:=> [:cat any? any? any? :number :number] any?]}
  [enroll-pts enroll-weights calendar-times n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        times-2d (np/reshape calendar-times
                             #js [(.-size calendar-times) 1])
        enroll-2d (np/reshape enroll-pts
                              #js [1 (.-size enroll-pts)])
        mask (np/greater (np/subtract times-2d enroll-2d) 0.0)
        weights-2d (np/reshape enroll-weights #js [1 (.-size enroll-pts)])
        weighted (np/multiply mask weights-2d)
        enrolled (np/multiply (np/sum weighted 1) arm-share)]
    enrolled))


(defn- calculate-events-chunk
  "Processes a chunk of survival parameters to compute expected events."
  [survival-func params-grid follow-up-3d weights-3d arm-share start end]
  (let [params-chunk (mapv (fn [p]
                             (np/reshape (np/slice p start end)
                                         #js [(- end start) 1 1]))
                           params-grid)
        survival-res (apply survival-func follow-up-3d params-chunk)
        one-minus-S (np/subtract (np/array 1.0) survival-res)
        weighted-S (np/multiply one-minus-S weights-3d)
        events (np/multiply (np/sum weighted-S 2) arm-share)]
    events))

(defn expected-arm-events
  "Calculates expected number of events per arm."
  {:malli/schema [:=> [:cat :function [:vector any?] any? any? any?
                            :number :number] any?]}
  [survival-func params-grid enroll-pts enroll-weights calendar-times
   n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        times-2d (np/reshape calendar-times
                             #js [(.-size calendar-times) 1])
        enroll-2d (np/reshape enroll-pts
                              #js [1 (.-size enroll-pts)])
        follow-up (np/maximum (np/subtract times-2d enroll-2d) 0.0)
        grid-size (.-size (first params-grid))
        time-size (.-size calendar-times)
        output-array (np/empty #js [grid-size time-size] "float64")
        follow-up-3d (np/reshape follow-up
                                 #js [1 time-size
                                      (.-size enroll-pts)])
        weights-3d (np/reshape enroll-weights #js [1 1 (.-size enroll-pts)])
        chunk-size 256]
    (doseq [start (range 0 grid-size chunk-size)]
      (let [end (js/Math.min (+ start chunk-size) grid-size)
            events (calculate-events-chunk survival-func params-grid
                                            follow-up-3d weights-3d
                                            arm-share start end)]
        (np/set-block output-array events start)))
    output-array))

(defn- calculate-events-and-var-chunk
  "Processes a chunk of survival parameters to compute expected events and variance."
  [survival-func params-grid follow-up-3d weights-3d arm-share start end]
  (let [params-chunk (mapv (fn [p]
                             (np/reshape (np/slice p start end)
                                         #js [(- end start) 1 1]))
                           params-grid)
        survival-res (apply survival-func follow-up-3d params-chunk)
        one-minus-S (np/subtract (np/array 1.0) survival-res)
        weighted-E (np/multiply one-minus-S weights-3d)
        events (np/multiply (np/sum weighted-E 2) arm-share)
        ;; Variance for pooled is sum of S*(1-S). For arm, it is more complex but
        ;; we approximate as arm-share * sum(S*(1-S)) for large n or specifically
        ;; as n_arm * d * (1-d) which is sum(arm_share * S * (1-S)).
        S-times-one-minus-S (np/multiply survival-res one-minus-S)
        weighted-V (np/multiply S-times-one-minus-S weights-3d)
        variance (np/multiply (np/sum weighted-V 2) arm-share)]
    {:events events :variance variance}))

(defn expected-arm-events-and-variance
  "Calculates expected number of events and variance per arm."
  {:malli/schema [:=> [:cat :function [:vector any?] any? any? any?
                            :number :number] any?]}
  [survival-func params-grid enroll-pts enroll-weights calendar-times
   n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        times-2d (np/reshape calendar-times
                             #js [(.-size calendar-times) 1])
        enroll-2d (np/reshape enroll-pts
                              #js [1 (.-size enroll-pts)])
        follow-up (np/maximum (np/subtract times-2d enroll-2d) 0.0)
        grid-size (.-size (first params-grid))
        time-size (.-size calendar-times)
        ev-array (np/empty #js [grid-size time-size] "float64")
        var-array (np/empty #js [grid-size time-size] "float64")
        follow-up-3d (np/reshape follow-up
                                 #js [1 time-size
                                      (.-size enroll-pts)])
        weights-3d (np/reshape enroll-weights #js [1 1 (.-size enroll-pts)])
        chunk-size 256]
    (doseq [start (range 0 grid-size chunk-size)]
      (let [end (js/Math.min (+ start chunk-size) grid-size)
            {:keys [events variance]} (calculate-events-and-var-chunk
                                       survival-func params-grid
                                       follow-up-3d weights-3d
                                       arm-share start end)]
        (np/set-block ev-array events start)
        (np/set-block var-array variance start)))
    {:events ev-array :variance var-array}))

(defn get-s-curve-enrollment-bands
  "Generates monthly enrollment bands following an S-curve (logistic).
   Ported from regal_stress_test.py."
  [n-total total-months median-month k]
  (let [logistic (fn [t] (/ 1.0 (+ 1.0 (js/Math.exp (* (- k) (- t median-month))))))
        t-vals (range (inc total-months))
        c-vals (mapv logistic t-vals)
        c0 (first c-vals)
        cn (last c-vals)
        norm-c (mapv (fn [c] (* (/ (- c c0) (- cn c0)) n-total)) c-vals)
        n-monthly (mapv (fn [i] (- (nth norm-c (inc i)) (nth norm-c i))) (range total-months))
        n-int (mapv js/Math.round n-monthly)
        sum-n (reduce + n-int)
        diff (- n-total sum-n)
        final-n (if (not= diff 0)
                  (update n-int (dec (count n-int)) + diff)
                  n-int)]
    (->> final-n
         (map-indexed (fn [i n]
                        (when (> n 0)
                          [(float i) (float (inc i)) (int n)])))
         (remove nil?)
         (into []))))
