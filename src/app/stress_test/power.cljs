(ns app.stress-test.power)

(defn erf-inv [x]
  (let [a 0.147
        ln-term (js/Math.log (- 1.0 (* x x)))
        val-const (+ (/ 2.0 (* js/Math.PI a)) (/ ln-term 2.0))
        inner-sqrt (js/Math.sqrt (- (* val-const val-const) (/ ln-term a)))
        res (js/Math.sqrt (- inner-sqrt val-const))]
    (if (< x 0.0) (- res) res)))

(defn qnorm [p]
  (let [p-clamped (max 0.0001 (min 0.9999 p))
        x (- (* 2.0 p-clamped) 1.0)]
    (* (js/Math.sqrt 2.0) (erf-inv x))))

(defn schoenfeld-events [hr alpha power]
  (let [z-alpha (qnorm (- 1.0 alpha))
        z-beta (qnorm power)
        numerator (* 4.0 (js/Math.pow (+ z-alpha z-beta) 2))
        denominator (js/Math.pow (js/Math.log hr) 2)]
    (if (or (zero? denominator) (js/isNaN denominator))
      js/Number.POSITIVE_INFINITY
      (/ numerator denominator))))

(defn required-sample-size [hr alpha power p-event]
  (let [d (schoenfeld-events hr alpha power)]
    (if (or (zero? p-event) (js/isNaN p-event))
      js/Number.POSITIVE_INFINITY
      (/ d p-event))))

(defn power-grid [bat-range gps-range alpha power p-event]
  (let [[bat-start bat-stop bat-step] bat-range
        [gps-start gps-stop gps-step] gps-range
        bat-vals (take-while #(<= % bat-stop)
                             (iterate #(+ % bat-step) bat-start))
        gps-vals (take-while #(<= % gps-stop)
                             (iterate #(+ % gps-step) gps-start))]
    (for [bat bat-vals
          gps gps-vals]
      (let [hr (/ bat gps)
            events (schoenfeld-events hr alpha power)
            n (required-sample-size hr alpha power p-event)]
        {:bat-mos bat
         :gps-mos gps
         :hr hr
         :events-required events
         :n-required n}))))

(defn implied-event-probability [n-ref bat-ref gps-ref alpha power]
  (let [hr (/ bat-ref gps-ref)
        d (schoenfeld-events hr alpha power)]
    (/ d n-ref)))
