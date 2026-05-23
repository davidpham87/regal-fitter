(ns app.regal-fit.survival
  "Mathematical models for survival analysis.
  Provides functions for Weibull and Cure models, supporting numpy-ts calculations."
  (:require [cljs.numpy :as np]))

(defn weibull-S
  "Computes the Weibull survival function S(t) = exp(-(t/scale)^shape).
  Arguments:
    t: Time values (numpy array)
    scale: Weibull scale parameter
    shape: Weibull shape parameter
  Returns:
    numpy array of survival probabilities."
  [t scale shape]
  (let [clipped (np/clip t 0 np/inf)
        scaled (np/divide clipped scale)
        powered (np/power scaled shape)
        negated (np/subtract 0 powered)]
    (np/exp negated)))

(defn weibull-scale-from-median
  "Calculates the Weibull scale parameter given a median and shape.
  Formula: median / (log(2.0) ^ (1.0 / shape))
  Arguments:
    median: Median survival time
    shape: Weibull shape parameter
  Returns:
    Calculated scale parameter."
  [median shape]
  (let [log2 (js/Math.log 2.0)
        inv-shape (/ 1.0 shape)
        denom (js/Math.pow log2 inv-shape)]
    (/ median denom)))

(defn cure-S
  "Computes the survival function for a standard cure fraction model.
  S(t) = p_cure + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)
  Arguments:
    t: Time values
    p-cure: Fraction of cured patients
    unc-scale: Scale parameter for uncured fraction
    unc-shape: Shape parameter for uncured fraction
  Returns:
    numpy array of survival probabilities."
  [t p-cure unc-scale unc-shape]
  (let [unc (weibull-S t unc-scale unc-shape)
        unc-part (np/multiply unc (- 1.0 p-cure))]
    (np/add p-cure unc-part)))

(defn leaky-cure-S
  "Computes the survival function for a leaky cure fraction model.
  S(t) = p_cure * exp(-leak_rate_m * t) + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)
  where leak_rate_m is the monthly leak rate derived from leak-rate-yr.
  Arguments:
    t: Time values
    p-cure: Initial fraction of cured patients
    unc-scale: Scale parameter for uncured fraction
    unc-shape: Shape parameter for uncured fraction
    leak-rate-yr: Annual leak rate for cured patients
  Returns:
    numpy array of survival probabilities."
  [t p-cure unc-scale unc-shape leak-rate-yr]
  (let [leak-rate-m (/ leak-rate-yr 12.0)
        clipped (np/clip t 0 np/inf)
        cured-power (np/multiply clipped (- leak-rate-m))
        cured-S (np/exp cured-power)
        cured-part (np/multiply cured-S p-cure)
        unc (weibull-S t unc-scale unc-shape)
        unc-part (np/multiply unc (- 1.0 p-cure))]
    (np/add cured-part unc-part)))
