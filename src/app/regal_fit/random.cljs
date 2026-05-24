(ns app.regal-fit.random
  "Random drawing functions for survival times.
  Provides generation of event times based on mathematical models (Weibull, Cure, Leaky Cure)."
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]))

(defn draw-weibull-samples
  "Draws random survival times from a standard Weibull distribution."
  {:malli/schema [:=> [:cat :int any? :number :number] any?]}
  [n-samples random-gen scale shape]
  (let [random-values (np-random/random random-gen n-samples)
        neg-log-vals (np/multiply (np/log random-values) -1.0)
        powered-vals (np/power neg-log-vals (/ 1.0 shape))]
    (np/multiply powered-vals scale)))

(defn draw-bat-times
  "Draws random survival times for the BAT arm."
  {:malli/schema [:=> [:cat [:map [:bat-scale :number] [:bat-shape :number]] :int any?] any?]}
  [{:keys [bat-scale bat-shape]} n-samples random-gen]
  (draw-weibull-samples n-samples random-gen bat-scale bat-shape))

(defn- draw-cure-samples
  "Draws random survival times based on a cure model."
  [{:keys [cure-frac unc-scale unc-shape]} n-samples random-gen]
  (let [random-cure-flags (.toArray (np-random/random random-gen n-samples))
        uncured-times (draw-weibull-samples n-samples random-gen unc-scale unc-shape)
        uncured-times-arr (.toArray uncured-times)
        output-seq (map (fn [r u] (if (< r cure-frac) np/inf u))
                        random-cure-flags uncured-times-arr)]
    (np/array (to-array output-seq))))

(defn- draw-leaky-samples
  "Draws random survival times based on a leaky cure model."
  [{:keys [cure-frac unc-scale unc-shape leak-yr]} n-samples random-gen]
  (let [random-cure-flags (.toArray (np-random/random random-gen n-samples))
        uncured-times-arr (.toArray (draw-weibull-samples n-samples random-gen unc-scale unc-shape))
        leak-rate-monthly (/ leak-yr 12.0)
        random-leak-vals (.toArray (np-random/random random-gen n-samples))
        output-seq (map (fn [r u l]
                          (if (< r cure-frac)
                            (if (> leak-rate-monthly 0) (/ (- (js/Math.log l)) leak-rate-monthly) np/inf)
                            u))
                        random-cure-flags uncured-times-arr random-leak-vals)]
    (np/array (to-array output-seq))))

(defn draw-gps-times
  "Draws random survival times for the GPS arm based on the specified model family."
  {:malli/schema [:=> [:cat [:map [:family :string]] :int any?] any?]}
  [record n-samples random-gen]
  (case (:family record)
    "weibull" (draw-weibull-samples n-samples random-gen (:gps-scale record) (:gps-shape record))
    "cure"    (draw-cure-samples record n-samples random-gen)
    "leaky"   (draw-leaky-samples record n-samples random-gen)
    nil))
