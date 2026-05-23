(ns app.regal-fit.random
  "Random drawing functions for survival times.
  Provides generation of event times based on mathematical models (Weibull, Cure, Leaky Cure)."
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]))

(defn draw-bat-times
  "Draws random survival times from a standard Weibull distribution.
  Arguments:
    rec: config record containing :bat_scale and :bat_shape
    n: number of samples to draw
    rng: numpy random generator
  Returns:
    numpy array of survival times."
  [rec n rng]
  (let [rand-arr (np-random/random rng n)
        log-arr (np/multiply (np/log rand-arr) -1.0)
        pow-arr (np/power log-arr (/ 1.0 (:bat_shape rec)))]
    (np/multiply pow-arr (:bat_scale rec))))

(defn draw-gps-times
  "Draws random survival times based on the specified model family (weibull, cure, leaky).
  Arguments:
    rec: configuration record detailing the family and parameters
    n: number of samples to draw
    rng: numpy random generator
  Returns:
    numpy array of survival times."
  [rec n rng]
  (let [fam (:family rec)]
    (cond
      (= fam "weibull")
      (let [rand-arr (np-random/random rng n)
            log-arr (np/multiply (np/log rand-arr) -1.0)
            pow-arr (np/power log-arr (/ 1.0 (:gps_shape rec)))]
        (np/multiply pow-arr (:gps_scale rec)))

      (= fam "cure")
      (let [rand-cf (np-random/random rng n)
            rand-cf-arr (.toArray rand-cf)
            rand-arr (np-random/random rng n)
            log-arr (np/multiply (np/log rand-arr) -1.0)
            pow-arr (np/power log-arr (/ 1.0 (:unc_shape rec)))
            unc (np/multiply pow-arr (:unc_scale rec))
            unc-arr (.toArray unc)

            ;; Refactored to map paradigm
            out-seq (map (fn [r u]
                           (if (< r (:cure_frac rec)) np/inf u))
                         rand-cf-arr unc-arr)]
        (np/array (to-array out-seq)))

      (= fam "leaky")
      (let [rand-cf (np-random/random rng n)
            rand-cf-arr (.toArray rand-cf)
            rand-arr (np-random/random rng n)
            log-arr (np/multiply (np/log rand-arr) -1.0)
            pow-arr (np/power log-arr (/ 1.0 (:unc_shape rec)))
            unc (np/multiply pow-arr (:unc_scale rec))
            unc-arr (.toArray unc)

            leak-m (/ (:leak_yr rec) 12.0)
            rand-leak (np-random/random rng n)
            rand-leak-arr (.toArray rand-leak)

            ;; Refactored to map paradigm
            out-seq (map (fn [r u l]
                           (if (< r (:cure_frac rec))
                             (if (> leak-m 0) (/ (- (js/Math.log l)) leak-m) np/inf)
                             u))
                         rand-cf-arr unc-arr rand-leak-arr)]
        (np/array (to-array out-seq)))

      :else nil)))
