(ns app.regal-fit.enrollment
  "Functions for calculating expected enrollment times and events."
  (:require [cljs.numpy :as np]))

(defn expected-enrollment-times
  "Calculates expected enrollment times and their weights based on configuration bands.
  Arguments:
    cfg: Configuration dictionary containing :enroll_bands
  Returns:
    [enrollment-points enrollment-weights] as numpy arrays."
  [cfg]
  (let [sub-per-unit 8
        bands (:enroll_bands cfg)

        ;; Map over bands to compute points and weights
        band-data (map (fn [[lo hi n]]
                         (let [n-sub (js/Math.max 2 (js/Math.floor (* (- hi lo) sub-per-unit)))
                               e (np/add (np/linspace lo hi n-sub false) (/ (- hi lo) (* 2 n-sub)))
                               w (np/full n-sub (/ n n-sub))]
                           {:e e :w w}))
                       bands)

        ;; Extract and concatenate all points and weights
        pieces (to-array (map :e band-data))
        weights (to-array (map :w band-data))]
    [(np/concatenate pieces) (np/concatenate weights)]))

(defn expected-arm-events
  "Calculates expected number of events per arm using the provided survival function.
  Refactored to map over chunks instead of using `loop/recur`.
  Arguments:
    survival-func: Function computing survival probability
    params-grid: List of parameter grids for the survival function
    e-pts: Enrollment points array
    e-weights: Weights associated with enrollment points
    cal-times: Calendar times to evaluate events at
    n-per-arm: Target subjects per arm
    n-total: Total subjects
  Returns:
    numpy array of expected events of shape [grid_size calendar_times_size]."
  [survival-func params-grid e-pts e-weights cal-times n-per-arm n-total]
  (let [arm-share (/ n-per-arm n-total)
        e-pts-2d (np/reshape e-pts [1 (.-size e-pts)])
        cal-times-2d (np/reshape cal-times [(.-size cal-times) 1])
        ;; fu is (T, E)
        fu (np/maximum (np/subtract cal-times-2d e-pts-2d) 0.0)
        g-size (.-size (first params-grid))
        t-size (.-size cal-times)
        out (np/empty [g-size t-size] "float64")
        chunk-size 4096

        ;; Calculate chunk start indices
        starts (range 0 g-size chunk-size)]

    (doseq [start starts]
      (let [end (js/Math.min (+ start chunk-size) g-size)
            ;; Reshape params to (chunk, 1, 1)
            params-chunk (mapv (fn [p]
                                 (np/reshape (.slice p start end) [(- end start) 1 1]))
                               params-grid)
            fu-3d (np/reshape fu [1 t-size (.-size e-pts)])
            s-res (apply survival-func fu-3d params-chunk)
            e-weights-3d (np/reshape e-weights [1 1 (.-size e-pts)])
            ev (np/multiply (np/sum (np/multiply (np/subtract 1.0 s-res) e-weights-3d) 2) arm-share)]
        (.set out ev start)))
    out))
