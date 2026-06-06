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

(defn- arm-avg-alive
  "Mean alive count over interval [t1, t2] in `alive-ms` vector.
   At t1=0 we use `n-per-arm` as the initial count."
  [alive-ms t1 t2 n-per-arm]
  (let [a-t1 (if (zero? t1) n-per-arm (nth alive-ms t1))
        a-t2 (nth alive-ms t2)]
    (* 0.5 (+ a-t1 a-t2))))

(defn calc-interval-rate
  "Returns three hazard-rate records (GPS, BAT, Pooled) for one
   calendar interval between milestone indices t1 and t2."
  [t1 t2 label ev-bat-int ev-gps-int config
   alive-bat-ms alive-gps-ms t-ms-arr]
  (let [n-per-arm (:n-per-arm config)
        len       (- (nth t-ms-arr t2) (nth t-ms-arr t1))
        avg-bat   (arm-avg-alive alive-bat-ms t1 t2 n-per-arm)
        avg-gps   (arm-avg-alive alive-gps-ms t1 t2 n-per-arm)
        avg-pool  (+ avg-bat avg-gps)
        h-bat     (interval-rate ev-bat-int avg-bat len)
        h-gps     (interval-rate ev-gps-int avg-gps len)
        h-pool    (interval-rate (+ ev-bat-int ev-gps-int)
                                 avg-pool len)]
    [{:interval label :rate h-gps  :group "GPS"    :events ev-gps-int}
     {:interval label :rate h-bat  :group "BAT"    :events ev-bat-int}
     {:interval label :rate h-pool :group "Pooled" :events (+ ev-bat-int
                                                              ev-gps-int)}]))

;; ---------------------------------------------------------------------------
;; sim->hazard-rates
;; ---------------------------------------------------------------------------

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
          calc #(calc-interval-rate
                 %1 %2 %3 %4 %5 config
                 alive-bat-ms alive-gps-ms t-ms-arr)]
      (vec
       (concat
        (calc 0 1 "0-IA" n-ia-bat n-ia-gps)
        (calc 1 2 "IA-UPD"
              (- n-up-bat n-ia-bat)
              (- n-up-gps n-ia-gps))
        (calc 2 3 "UPD-PR3"
              (- n-pr3-bat n-up-bat)
              (- n-pr3-gps n-up-gps)))))))
