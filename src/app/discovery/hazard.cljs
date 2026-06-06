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
    (let [n-ia-bat  (or (:mean-n-ia-bat  sim-result) 0)
          n-ia-gps  (or (:mean-n-ia-gps  sim-result) 0)
          n-up-bat  (or (:mean-n-up-bat  sim-result) 0)
          n-up-gps  (or (:mean-n-up-gps  sim-result) 0)
          n-pr3-bat (or (:mean-n-pr3-bat sim-result) 0)
          n-pr3-gps (or (:mean-n-pr3-gps sim-result) 0)
          med-gps   (or (:mean-med-ia-gps sim-result) 0.0)
          med-bat   (or (:mean-med-ia-bat sim-result) 0.0)
          med-pool  (or (:mean-med-ia-pool sim-result) 0.0)
          calc #(calc-interval-rate
                 %1 %2 %3 %4 %5 config
                 alive-bat-ms alive-gps-ms t-ms-arr)]
      (vec
       (concat
        [{:interval "0-IA" :rate (median->rate med-gps) :group "GPS"
          :events n-ia-gps :median med-gps}
         {:interval "0-IA" :rate (median->rate med-bat) :group "BAT"
          :events n-ia-bat :median med-bat}
         {:interval "0-IA" :rate (median->rate med-pool) :group "Pooled"
          :events (+ n-ia-bat n-ia-gps) :median med-pool}]
        (calc 1 2 "IA-UPD"
              (- n-up-bat n-ia-bat)
              (- n-up-gps n-ia-gps))
        (calc 2 3 "UPD-PR3"
              (- n-pr3-bat n-up-bat)
              (- n-pr3-gps n-up-gps)))))))
