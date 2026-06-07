# Discovery View: Patients Alive and Hazard Ratio Panels

This document describes how the "Patients Alive" curves and the "Estimated
Hazard Ratios" milestone plots are computed and shows the specific code
changes implemented.

## 1. Patients Alive Curves

### Mathematical Definition
For a given calendar time $t$:
- **Accrued (Enrolled) Patients**: The expected number of patients enrolled in an
  arm by time $t$, denoted as $E(t)$.
- **Expected Events**: The expected number of deaths in the arm by time $t$,
  denoted as $D(t)$.
- **Patients Alive**: The expected number of patients currently alive in the arm
  at time $t$, computed as:
  $$A(t) = E(t) - D(t)$$

### ClojureScript Implementation
In [enrollment.cljs](file:///Users/david/Documents/regal-fitter/src/app/regal_fit/enrollment.cljs),
we compute the accrued patients per arm over calendar times:

```clojure
(defn expected-arm-enrolled
  [enroll-pts enroll-weights calendar-times n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        times-2d (np/reshape calendar-times
                             #js [(.-size calendar-times) 1])
        enroll-2d (np/reshape enroll-pts
                              #js [1 (.-size enroll-pts)])
        mask (np/greater (np/subtract times-2d enroll-2d) 0.0)
        weights-2d (np/reshape enroll-weights #js [1 (.-size enroll-pts)])
        weighted (np/multiply mask weights-2d)
        enrolled (np/multiply (np/sum weighted 1) arm-share)]
    enrolled))
```

In [discovery.cljs](file:///Users/david/Documents/regal-fitter/src/app/discovery.cljs),
we compute $A(t)$ for the total population and each treatment arm:

```clojure
(let [enrolled-bat (enrollment/expected-arm-enrolled
                     enroll-pts enroll-weights t-pts
                     (:n-per-arm config) (:n-total config))
      enrolled-gps (enrollment/expected-arm-enrolled
                     enroll-pts enroll-weights t-pts
                     (:n-per-arm config) (:n-total config))
      ev-bat-1d (np/reshape ev-bat #js [(.-size ev-bat)])
      ev-gps-1d (np/reshape ev-gps #js [(.-size ev-gps)])
      alive-bat (np/subtract enrolled-bat ev-bat-1d)
      alive-gps (np/subtract enrolled-gps ev-gps-1d)
      alive-total (np/add alive-bat alive-gps)]
  ...)
```

---

## 2. Milestone Hazard Ratios

### Mathematical Definition
For a milestone time interval $[t_1, t_2]$:
- **Events in Interval**: The change in expected events,
  $\Delta D = D(t_2) - D(t_1)$.
- **Denominator (Starting Population)**:
  - If $t_1 > 0$, the starting population is the number of patients alive at
    the start of the interval, $A(t_1)$.
  - If $t_1 = 0$, the starting population is the target total arm size
    $N_{arm} = \text{total} / 2$ (since $A(0) = 0$).
- **Estimated Hazard**:
  $$H = \frac{D(t_2) - D(t_1)}{\text{Starting Population}}$$
- **Hazard Ratio (HR)**:
  $$\text{HR} = \frac{H_{GPS}}{H_{BAT}}$$

### ClojureScript Implementation
In [discovery.cljs](file:///Users/david/Documents/regal-fitter/src/app/discovery.cljs):

```clojure
(let [n-per-arm (:n-per-arm config)
      calc-hr (fn [t1 t2 label]
                (let [ev-gps-int (- (nth ms-ev-gps-arr t2)
                                    (nth ms-ev-gps-arr t1))
                      ev-bat-int (- (nth ms-ev-bat-arr t2)
                                    (nth ms-ev-bat-arr t1))
                      alive-gps-t1 (if (zero? t1)
                                     n-per-arm
                                     (nth alive-gps-ms t1))
                      alive-bat-t1 (if (zero? t1)
                                     n-per-arm
                                     (nth alive-bat-ms t1))
                      h-gps (if (pos? alive-gps-t1)
                              (/ ev-gps-int alive-gps-t1)
                              0.0)
                      h-bat (if (pos? alive-bat-t1)
                              (/ ev-bat-int alive-bat-t1)
                              0.0)]
                  {:interval label
                   :hr (if (pos? h-bat) (/ h-gps h-bat) 0.0)}))]
  ...)
```
