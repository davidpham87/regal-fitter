(ns app.discovery.hazard)

;; ---------------------------------------------------------------------------
;; Interval hazard-rate helpers
;; ---------------------------------------------------------------------------

(defn- interval-rate
  "Annualised hazard rate for one arm over a time interval."
  [ev-int avg-alive len]
  (if (and (pos? avg-alive) (pos? len))
    (* 12.0 (/ ev-int (* avg-alive len)))
    0.0))

(defn- arm-denominator-alive
  "Determines the denominator count for hazard rate calculation."
  [alive-ms t1 t2 n-per-arm]
  (if (zero? t1)
    (let [a-t1 n-per-arm
          a-t2 (nth alive-ms t2)]
      (* 0.5 (+ a-t1 a-t2)))
    (nth alive-ms t1)))

(defn- rate->median
  "Computes median survival time in months from annualized hazard rate."
  [rate]
  (if (pos? rate)
    (/ (* 12.0 (js/Math.log 2)) rate)
    0.0))

(defn calc-interval-rate
  "Returns three hazard-rate records (GPS, BAT, Pooled) for one
   calendar interval between milestone indices t1 and t2."
  [t1 t2 label ev-bat-int ev-gps-int config
   alive-bat-ms alive-gps-ms t-ms-arr]
  (let [n-per-arm (:n-per-arm config)
        len       (- (nth t-ms-arr t2) (nth t-ms-arr t1))
        den-bat   (arm-denominator-alive alive-bat-ms t1 t2 n-per-arm)
        den-gps   (arm-denominator-alive alive-gps-ms t1 t2 n-per-arm)
        den-pool  (+ den-bat den-gps)
        h-bat     (interval-rate ev-bat-int den-bat len)
        h-gps     (interval-rate ev-gps-int den-gps len)
        h-pool    (interval-rate (+ ev-bat-int ev-gps-int)
                                 den-pool len)]
    [{:interval label :rate h-gps  :group "GPS"    :events ev-gps-int
      :median (rate->median h-gps)}
     {:interval label :rate h-bat  :group "BAT"    :events ev-bat-int
      :median (rate->median h-bat)}
     {:interval label :rate h-pool :group "Pooled" :events (+ ev-bat-int
                                                              ev-gps-int)
      :median (rate->median h-pool)}]))

(defn- median->rate
  "Computes annualized hazard rate from median survival time in months."
  [median]
  (if (pos? median)
    (/ (* 12.0 (js/Math.log 2)) median)
    0.0))

(defn sim->hazard-rates
  "Derives annualised hazard rates from simulation result means.
   Returns nil when sim-result is nil."
  [sim-result config alive-bat-ms alive-gps-ms t-ms-arr]
  (when sim-result
    (let [n-interim-analysis-bat  (or (:mean-n-interim-analysis-bat  sim-result) 0)
          n-interim-analysis-gps  (or (:mean-n-interim-analysis-gps  sim-result) 0)
          n-update-bat  (or (:mean-n-update-bat  sim-result) 0)
          n-update-gps  (or (:mean-n-update-gps  sim-result) 0)
          n-press-release-3-bat (or (:mean-n-press-release-3-bat sim-result) 0)
          n-press-release-3-gps (or (:mean-n-press-release-3-gps sim-result) 0)
          med-gps   (or (:mean-med-interim-analysis-gps sim-result) 0.0)
          med-bat   (or (:mean-med-interim-analysis-bat sim-result) 0.0)
          med-pool  (or (:mean-med-interim-analysis-pool sim-result) 0.0)
          calc #(calc-interval-rate
                 %1 %2 %3 %4 %5 config
                 alive-bat-ms alive-gps-ms t-ms-arr)]
      (vec
       (concat
        [{:interval "0-IA" :rate (median->rate med-gps) :group "GPS"
          :events n-interim-analysis-gps :median med-gps}
         {:interval "0-IA" :rate (median->rate med-bat) :group "BAT"
          :events n-interim-analysis-bat :median med-bat}
         {:interval "0-IA" :rate (median->rate med-pool) :group "Pooled"
          :events (+ n-interim-analysis-bat n-interim-analysis-gps) :median med-pool}]
        (calc 1 2 "IA-UPD"
              (- n-update-bat n-interim-analysis-bat)
              (- n-update-gps n-interim-analysis-gps))
        (calc 2 3 "UPD-PR3"
              (- n-press-release-3-bat n-update-bat)
              (- n-press-release-3-gps n-update-gps)))))))
