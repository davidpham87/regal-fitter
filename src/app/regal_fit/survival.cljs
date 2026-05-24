(ns app.regal-fit.survival
  "Mathematical models for survival analysis.
  Provides functions for Weibull and Cure models,
  supporting numpy-ts calculations."
  (:require [cljs.numpy :as np]
            [malli.core :as m]))

(defn weibull-survival-probability
  "Computes the Weibull survival function S(t) = exp(-(t/scale)^shape)."
  {:malli/schema [:=> [:cat any? any? any?] any?]}
  [time-values scale shape]
  (let [time-arr (if (number? time-values)
                   (np/array #js [time-values])
                   time-values)
        clipped-times (np/clip time-arr 0 np/inf)
        scaled-times (np/divide clipped-times scale)
        powered-times (np/power scaled-times shape)
        negated-power (np/multiply powered-times -1.0)]
    (np/exp negated-power)))

(defn weibull-scale-from-median
  "Calculates the Weibull scale parameter given a median and shape.
  Formula: median / (log(2.0) ^ (1.0 / shape))"
  {:malli/schema [:=> [:cat any? any?] any?]}
  [median shape]
  (let [log-two (js/Math.log 2.0)
        inverse-shape (np/divide (np/array 1.0) shape)
        denominator (np/power (np/array log-two) inverse-shape)]
    (np/divide median denominator)))

(defn cure-survival-probability
  "Computes the survival function for a standard cure fraction model.
  S(t) = p-cure + (1.0 - p-cure) * weibull-S(t, unc-scale, unc-shape)"
  {:malli/schema [:=> [:cat any? any? any? any?] any?]}
  [time-values cure-fraction unc-scale unc-shape]
  (let [unc-survival (weibull-survival-probability time-values
                                                   unc-scale
                                                   unc-shape)
        one-minus-cf (np/subtract (np/array 1.0) cure-fraction)
        unc-part (np/multiply unc-survival one-minus-cf)]
    (np/add cure-fraction unc-part)))

(defn- calculate-leaky-cured
  "Helper to calculate the cured portion of the leaky model."
  [time-values cure-fraction leak-rate-monthly]
  (let [time-arr (if (number? time-values)
                   (np/array #js [time-values])
                   time-values)
        clipped-times (np/clip time-arr 0 np/inf)
        neg-leak (np/multiply leak-rate-monthly -1.0)
        cured-power (np/multiply clipped-times neg-leak)
        cured-survival (np/exp cured-power)]
    (np/multiply cured-survival cure-fraction)))

(defn leaky-cure-survival-probability
  "Computes the survival function for a leaky cure fraction model.
  S(t) = p-cure * exp(-leak-rate-monthly * t) +
         (1.0 - p-cure) * weibull-S(t, unc-scale, unc-shape)"
  {:malli/schema [:=> [:cat any? any? any? any? any?] any?]}
  [time-values cure-fraction unc-scale unc-shape leak-rate-yearly]
  (let [leak-rate-monthly (np/divide leak-rate-yearly 12.0)
        cured-part (calculate-leaky-cured time-values
                                          cure-fraction
                                          leak-rate-monthly)
        uncured-survival (weibull-survival-probability time-values
                                                       unc-scale
                                                       unc-shape)
        one-minus-cf (np/subtract (np/array 1.0) cure-fraction)
        uncured-part (np/multiply uncured-survival one-minus-cf)]
    (np/add cured-part uncured-part)))
