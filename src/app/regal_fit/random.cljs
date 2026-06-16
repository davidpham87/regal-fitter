(ns app.regal-fit.random
  "Random drawing functions for survival times.
  Provides generation of event times based on mathematical models (Weibull, Cure, Leaky Cure)."
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]))

(defn draw-weibull-samples
  "Draws random survival times from a standard Weibull distribution."
  {:malli/schema [:=> [:cat :int any? :number :number] any?]}
  [n-samples random-gen scale shape]
  (let [random-values (np/nd-to-array (np-random/random random-gen n-samples))
        out (js/Float64Array. n-samples)
        inv-shape (/ 1.0 shape)]
    (dotimes [i n-samples]
      (let [u (aget random-values i)]
        (aset out i (* scale (js/Math.pow (- (js/Math.log u)) inv-shape)))))
    out))

(defn draw-bat-times
  "Draws random survival times for the BAT arm."
  [config n-samples random-gen]
  (if (= (:family config) "leaky")
    (draw-leaky-samples
     {:cure-frac (:bat-cure-frac config)
      :unc-scale (:bat-unc-scale config)
      :unc-shape (:bat-unc-shape config)
      :leak-yr (:bat-leak-yr config)}
     n-samples random-gen)
    (draw-weibull-samples n-samples random-gen
                          (:bat-scale config) (:bat-shape config))))

(defn- draw-cure-samples
  "Draws random survival times based on a cure model."
  [{:keys [cure-frac unc-scale unc-shape]} n-samples random-gen]
  (let [random-cure-flags (np/nd-to-array
                           (np-random/random random-gen n-samples))
        uncured-times (draw-weibull-samples n-samples random-gen
                                            unc-scale unc-shape)
        out (js/Float64Array. n-samples)]
    (dotimes [i n-samples]
      (let [r (aget random-cure-flags i)
            u (aget uncured-times i)]
        (aset out i (if (< r cure-frac) js/Infinity u))))
    out))

(defn- draw-leaky-samples
  "Draws random survival times based on a leaky cure model."
  [{:keys [cure-frac unc-scale unc-shape leak-yr]} n-samples random-gen]
  (let [random-cure-flags (np/nd-to-array
                           (np-random/random random-gen n-samples))
        uncured-times (draw-weibull-samples n-samples random-gen
                                            unc-scale unc-shape)
        leak-rate-monthly (/ leak-yr 12.0)
        random-leak-vals (np/nd-to-array
                          (np-random/random random-gen n-samples))
        out (js/Float64Array. n-samples)]
    (dotimes [i n-samples]
      (let [r (aget random-cure-flags i)
            u (aget uncured-times i)
            l (aget random-leak-vals i)]
        (aset out i (if (< r cure-frac)
                      (if (> leak-rate-monthly 0)
                        (/ (- (js/Math.log l)) leak-rate-monthly)
                        js/Infinity)
                      u))))
    out))

(defn draw-gps-times
  "Draws random survival times for the GPS arm based on the specified model family."
  {:malli/schema [:=> [:cat [:map [:family :string]] :int any?] any?]}
  [record n-samples random-gen]
  (case (:family record)
    "weibull" (draw-weibull-samples n-samples random-gen
                                    (:gps-scale record) (:gps-shape record))
    "cure"    (draw-cure-samples record n-samples random-gen)
    "leaky"   (draw-leaky-samples record n-samples random-gen)
    nil))
