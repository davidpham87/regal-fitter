(ns app.regal-fit.random
  "Random drawing functions for survival times.
  Provides generation of event times based on mathematical models (Weibull, Cure, Leaky Cure)
  using explicit random uniform variables to allow perfect quantile alignment across arms.")

;; Inverse CDF transforms utilizing explicit random uniform variables (r-weib, r-cure, r-leak)
(defn transform-weibull [r-weib scale shape]
  (let [inv-shape (/ 1.0 (double shape))]
    (* (double scale) (js/Math.pow (- (js/Math.log r-weib)) inv-shape))))

(defn transform-cure [r-weib r-cure cure-frac unc-scale unc-shape]
  (if (< r-cure (double cure-frac))
    js/Infinity
    (transform-weibull r-weib unc-scale unc-shape)))

(defn transform-leaky [r-weib r-cure r-leak cure-frac unc-scale unc-shape leak-yr]
  (let [cf (double cure-frac)
        leak-rate-monthly (/ (double leak-yr) 12.0)]
    (if (< r-cure cf)
      (if (> leak-rate-monthly 0)
        (/ (- (js/Math.log r-leak)) leak-rate-monthly)
        js/Infinity)
      (transform-weibull r-weib unc-scale unc-shape))))

(defn draw-bat-time-single
  "Transforms a set of uniform draws into a BAT survival time."
  [config r-weib r-cure r-leak]
  (cond
    (= (:family config) "leaky")
    (transform-leaky r-weib r-cure r-leak
                     (:bat-cure-frac config)
                     (:bat-unc-scale config)
                     (:bat-unc-shape config)
                     (:bat-leak-yr config))

    (= (:family config) "cure")
    (transform-cure r-weib r-cure
                    (:bat-cure-frac config)
                    (:bat-unc-scale config)
                    (:bat-unc-shape config))

    :else
    (transform-weibull r-weib (:bat-scale config) (:bat-shape config))))

(defn draw-gps-time-single
  "Transforms a set of uniform draws into a GPS survival time."
  [record r-weib r-cure r-leak]
  (case (:family record)
    "weibull" (transform-weibull r-weib (:gps-scale record) (:gps-shape record))
    "cure"    (transform-cure r-weib r-cure (:cure-frac record) (:unc-scale record) (:unc-shape record))
    "leaky"   (transform-leaky r-weib r-cure r-leak (:cure-frac record) (:unc-scale record) (:unc-shape record) (:leak-yr record))
    0.0))
