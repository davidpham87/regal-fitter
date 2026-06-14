(ns app.discovery.gps
  (:require [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [cljs.numpy :as np]))

;; ---------------------------------------------------------------------------
;; GPS survival parameter builders
;; ---------------------------------------------------------------------------

(defn- gps-weibull-args
  "Returns [scale shape] for Weibull GPS."
  [params]
  (let [med   (np/array #js [(:gps-med params)])
        shape (np/array #js [(:weibull-k params)])
        scale (survival/weibull-scale-from-median med shape)]
    [scale shape]))

(defn- gps-cure-args
  "Returns [cf scale shape] for cure-model GPS."
  [params]
  (let [[scale shape] (gps-weibull-args params)
        cf (np/array #js [(:cure-frac params)])]
    [cf scale shape]))

(defn- gps-leaky-args
  "Returns [cf scale shape leak] for leaky-cure GPS.
  Uses dedicated :gps-unc-med and :gps-unc-shape when present,
  falling back to :gps-med / :weibull-k for backwards compat."
  [params]
  (let [unc-med   (or (:gps-unc-med params) (:gps-med params))
        unc-shape (or (:gps-unc-shape params) (:weibull-k params))
        med-arr   (np/array #js [unc-med])
        shp-arr   (np/array #js [unc-shape])
        scale     (survival/weibull-scale-from-median med-arr shp-arr)
        cf        (np/array #js [(:cure-frac params)])
        leak      (np/array #js [(:leak-yr params)])]
    [cf scale shp-arr leak]))

(defn- gps-survival-fn
  "Returns [survival-fn args] for the given family."
  [family params]
  (case family
    "weibull" [survival/weibull-survival-probability
               (gps-weibull-args params)]
    "cure"    [survival/cure-survival-probability
               (gps-cure-args params)]
    "leaky"   [survival/leaky-cure-survival-probability
               (gps-leaky-args params)]
    nil))

;; ---------------------------------------------------------------------------
;; Public helpers used by discovery-calc
;; ---------------------------------------------------------------------------

(defn gps-survival
  "GPS survival array over t-pts for the given family.
   Falls back to `bat-fallback` when family is unrecognised."
  [family params t-pts bat-fallback]
  (if-let [[s-fn args] (gps-survival-fn family params)]
    (apply s-fn t-pts args)
    bat-fallback))

(defn gps-events
  "Expected GPS arm events over t-pts for the given family.
   Falls back to `bat-fallback` when family is unrecognised."
  [family params enroll-pts enroll-weights t-pts
   n-per-arm n-total bat-fallback]
  (if-let [[s-fn args] (gps-survival-fn family params)]
    (enrollment/expected-arm-events
     s-fn args enroll-pts enroll-weights t-pts
     n-per-arm n-total)
    bat-fallback))

(defn gps-events-and-variance
  "Expected GPS events + variance for the given family.
   Falls back to `bat-fallback` when family is unrecognised."
  [family params enroll-pts enroll-weights target-times
   n-per-arm n-total bat-fallback]
  (if-let [[s-fn args] (gps-survival-fn family params)]
    (enrollment/expected-arm-events-and-variance
     s-fn args enroll-pts enroll-weights target-times
     n-per-arm n-total)
    bat-fallback))
