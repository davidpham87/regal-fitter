(ns app.regal-fit.enrollment
  "Functions for calculating expected enrollment times and events."
  (:require [cljs.numpy :as np]
            [app.regal-fit.survival :as survival]))

(defn- calculate-band-data
  "Computes enrollment points and their associated weights for a single time band.
   Accepts a band [low high count] and subjects-per-unit density."
  [[low high count] subjects-per-unit]
  (let [n-sub-samples (js/Math.max 2 (js/Math.floor (* (- high low) subjects-per-unit)))
        enroll-points (np/add (np/linspace low high n-sub-samples false)
                              (/ (- high low) (* 2 n-sub-samples)))
        enroll-weights (np/full n-sub-samples (/ count n-sub-samples) "float64")]
    {:points enroll-points :weights enroll-weights}))

(defn expected-enrollment-times
  "Calculates expected enrollment times and their weights based on configuration bands."
  {:malli/schema [:=> [:cat [:map [:enroll-bands [:vector [:vector :number]]]]] [:tuple any? any?]]}
  [cfg]
  (let [subjects-per-unit 8
        bands (:enroll-bands cfg)
        band-data (map #(calculate-band-data % subjects-per-unit) bands)
        all-points (to-array (map :points band-data))
        all-weights (to-array (map :weights band-data))]
    (if (empty? all-points)
      [(np/array #js [] "float64") (np/array #js [] "float64")]
      [(np/concatenate all-points) (np/concatenate all-weights)])))

(defn- calculate-events-chunk
  "Processes a chunk of survival parameters to compute expected events."
  [survival-func params-grid follow-up-3d weights-3d arm-share start end]
  (let [params-chunk (mapv (fn [p] (np/reshape (.slice p start end) [(- end start) 1 1])) params-grid)
        survival-res (apply survival-func follow-up-3d params-chunk)
        events (np/multiply (np/sum (np/multiply (np/subtract 1.0 survival-res) weights-3d) 2) arm-share)]
    events))

(defn expected-arm-events
  "Calculates expected number of events per arm using the provided survival function."
  {:malli/schema [:=> [:cat :function [:vector any?] any? any? any? :number :number] any?]}
  [survival-func params-grid enroll-pts enroll-weights calendar-times n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        follow-up (np/maximum (np/subtract (np/reshape calendar-times [(.-size calendar-times) 1])
                                          (np/reshape enroll-pts [1 (.-size enroll-pts)])) 0.0)
        grid-size (.-size (first params-grid))
        time-size (.-size calendar-times)
        output-array (np/empty [grid-size time-size] "float64")
        follow-up-3d (np/reshape follow-up [1 time-size (.-size enroll-pts)])
        weights-3d (np/reshape enroll-weights [1 1 (.-size enroll-pts)])
        chunk-size 4096]
    (doseq [start (range 0 grid-size chunk-size)]
      (let [end (js/Math.min (+ start chunk-size) grid-size)
            events (calculate-events-chunk survival-func params-grid follow-up-3d weights-3d arm-share start end)]
        (.set output-array events start)))
    output-array))
