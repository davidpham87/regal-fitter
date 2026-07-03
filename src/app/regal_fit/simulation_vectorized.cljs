(ns app.regal-fit.simulation-vectorized
  "Vectorized core simulation execution using numpy-ts."
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]
            ["numpy-ts" :as np-ts]))

(defn- km-survival-at-time-vectorized
  "High-performance single-pass Kaplan-Meier estimator using raw arrays."
  [time-observed event-flag target-time]
  (let [t-data (.-data time-observed)
        e-data (.-data event-flag)
        len (alength t-data)]
    (if (zero? len)
      1.0
      (let [indices (js/Int32Array. len)]
        (dotimes [i len] (aset indices i i))
        (.sort indices (fn [a b] (- (aget t-data a) (aget t-data b))))
        (loop [i 0
               survival 1.0]
          (if (< i len)
            (let [idx (aget indices i)
                  t (aget t-data idx)
                  ev (aget e-data idx)
                  n-at-risk (- len i)]
              (if (<= t target-time)
                (if (and (> ev 0.5) (pos? n-at-risk))
                  (let [new-surv (* survival (/ (dec n-at-risk) n-at-risk))]
                    (recur (inc i) new-surv))
                  (recur (inc i) survival))
                survival))
            survival))))))

(defn- logrank-z-vectorized
  "High-performance single-pass log-rank test using raw arrays."
  [times events groups]
  (let [t-data (.-data times)
        e-data (.-data events)
        g-data (.-data groups)
        len (alength t-data)
        indices (js/Int32Array. len)]
    (dotimes [i len] (aset indices i i))
    (.sort indices (fn [a b] (- (aget t-data a) (aget t-data b))))
    (loop [i (dec len)
           n-exp 0.0
           n-ctrl 0.0
           u-sum 0.0
           var-sum 0.0]
      (if (>= i 0)
        (let [idx (aget indices i)
              grp (aget g-data idx)
              ev  (aget e-data idx)
              n-exp-new (if (> grp 0.5) (inc n-exp) n-exp)
              n-ctrl-new (if-not (> grp 0.5) (inc n-ctrl) n-ctrl)
              n-tot (+ n-exp-new n-ctrl-new)]
          (if (and (> ev 0.5) (>= n-tot 2))
            (let [expected (/ n-exp-new n-tot)
                  u (- grp expected)
                  v (/ (* n-exp-new n-ctrl-new) (* n-tot n-tot))]
              (recur (dec i) n-exp-new n-ctrl-new (+ u-sum u) (+ var-sum v)))
            (recur (dec i) n-exp-new n-ctrl-new u-sum var-sum)))
        (if (<= var-sum 0)
          [0.0 1.0]
          [(/ (- u-sum) (js/Math.sqrt var-sum))
           (js/Math.exp (/ u-sum var-sum))])))))

(defn draw-weibull-samples-vectorized
  "Draws random survival times from a standard Weibull distribution."
  [n-samples random-gen scale shape]
  (let [sc (double scale)
        sh (double shape)
        inv-sh (/ 1.0 sh)
        total-len (if (number? n-samples)
                    n-samples
                    (reduce * (js->clj n-samples)))
        random-values (np/nd-to-array
                       (np-random/random random-gen total-len))
        out-data (js/Float64Array. total-len)]
    (dotimes [i total-len]
      (let [u (aget random-values i)]
        (aset out-data i (* sc (js/Math.pow (- (js/Math.log u)) inv-sh)))))
    (if (number? n-samples)
      (np-ts/array out-data)
      (np-ts/reshape (np-ts/array out-data) n-samples))))

(defn draw-cure-samples-vectorized
  "Draws random survival times based on a cure model."
  [{:keys [cure-frac unc-scale unc-shape]} n-samples random-gen]
  (let [cf (double cure-frac)
        sc (double unc-scale)
        sh (double unc-shape)
        inv-sh (/ 1.0 sh)
        total-len (if (number? n-samples)
                    n-samples
                    (reduce * (js->clj n-samples)))
        random-cure-flags (np/nd-to-array
                           (np-random/random random-gen total-len))
        random-weib-vals (np/nd-to-array
                          (np-random/random random-gen total-len))
        out-data (js/Float64Array. total-len)]
    (dotimes [i total-len]
      (let [r-cure (aget random-cure-flags i)
            r-weib (aget random-weib-vals i)
            u (* sc (js/Math.pow (- (js/Math.log r-weib)) inv-sh))]
        (aset out-data i (if (< r-cure cf) js/Infinity u))))
    (if (number? n-samples)
      (np-ts/array out-data)
      (np-ts/reshape (np-ts/array out-data) n-samples))))

(defn draw-leaky-samples-vectorized
  "Draws random survival times based on a leaky cure model."
  [{:keys [cure-frac unc-scale unc-shape leak-yr]} n-samples random-gen]
  (let [cf (double cure-frac)
        scale (double unc-scale)
        shape (double unc-shape)
        leak-rate-monthly (/ (double leak-yr) 12.0)
        inv-shape (/ 1.0 shape)
        total-len (if (number? n-samples)
                    n-samples
                    (reduce * (js->clj n-samples)))
        random-cure-flags (np/nd-to-array
                           (np-random/random random-gen total-len))
        random-leak-vals (np/nd-to-array
                          (np-random/random random-gen total-len))
        random-weib-vals (np/nd-to-array
                          (np-random/random random-gen total-len))
        out-data (js/Float64Array. total-len)]
    (dotimes [i total-len]
      (let [r-cure (aget random-cure-flags i)
            r-weib (aget random-weib-vals i)
            r-leak (aget random-leak-vals i)
            u (* scale (js/Math.pow (- (js/Math.log r-weib)) inv-shape))]
        (aset out-data i
              (if (< r-cure cf)
                (if (> leak-rate-monthly 0)
                  (/ (- (js/Math.log r-leak)) leak-rate-monthly)
                  js/Infinity)
                u))))
    (if (number? n-samples)
      (np-ts/array out-data)
      (np-ts/reshape (np-ts/array out-data) n-samples))))

(defn draw-bat-times-vectorized
  "Draws random survival times for the BAT arm."
  [record n-samples random-gen]
  (if (= (some-> (:family record) name) "leaky")
    (draw-leaky-samples-vectorized
     {:cure-frac (:bat-cure-frac record)
      :unc-scale (:bat-unc-scale record)
      :unc-shape (:bat-unc-shape record)
      :leak-yr (:bat-leak-yr record)}
     n-samples random-gen)
    (draw-weibull-samples-vectorized n-samples random-gen (:bat-scale record) (:bat-shape record))))

(defn draw-gps-times-vectorized
  "Draws random survival times for the GPS arm based on the specified model family."
  [record n-samples random-gen]
  (case (some-> (:family record) name)
    "weibull" (draw-weibull-samples-vectorized n-samples random-gen (:gps-scale record) (:gps-shape record))
    "cure"    (draw-cure-samples-vectorized record n-samples random-gen)
    "leaky"   (draw-leaky-samples-vectorized record n-samples random-gen)
    nil))

(defn generate-trial-data-vectorized
  "Vectorized generation of enrollment times, arm assignments, and survival times."
  [record config random-gen n-total n-per-arm bands]
  (let [raw-enroll (js/Array.)]
    (doseq [[lo hi n] bands]
      (when (> n 0)
        (doseq [r (np/nd-to-array (np-random/uniform random-gen lo hi n))]
          (.push raw-enroll r))))
    (.sort raw-enroll (fn [a b] (- a b)))
    (let [enroll (np-ts/array (cljs.core/to-array raw-enroll))
          arms (np-ts/zeros (clj->js [n-total]))
          arms-data (.-data arms)]
      (loop [idx 0
             g-left n-per-arm
             b-left (- n-total n-per-arm)]
        (if (< idx n-total)
          (let [max-avail (js/Math.min g-left b-left)
                opts (cond
                       (>= max-avail 3) [1 2 3]
                       (>= max-avail 2) [1 2]
                       (>= max-avail 1) [1]
                       :else [])]
            (if (seq opts)
              (let [r-val (np-random/random random-gen 1)
                    r-num (aget (np/nd-to-array r-val) 0)
                    n-opts (count opts)
                    half-size (nth opts (js/Math.floor (* r-num n-opts)))
                    block-size (* 2 half-size)
                    block (js/Array. block-size)]
                (dotimes [i half-size]
                  (aset block i 1.0)
                  (aset block (+ i half-size) 0.0))
                (let [r-vals (np-random/random random-gen block-size)
                      r-arr (np/nd-to-array r-vals)
                      indices (cljs.core/to-array (range block-size))]
                  (.sort indices (fn [a b] (- (aget r-arr a)
                                             (aget r-arr b))))
                  (dotimes [i block-size]
                    (aset arms-data (+ idx i)
                          (aget block (aget indices i))))
                  (recur (+ idx block-size)
                         (- g-left half-size)
                         (- b-left half-size))))
              (do
                (dotimes [i (- n-total idx)]
                  (aset arms-data (+ idx i) (if (pos? g-left) 1.0 0.0)))
                nil)))))
      (let [gps-orr (double (or (:gps-orr config) 0.8))
            r-weib-vals (np/nd-to-array (np-random/random random-gen n-total))
            r-cure-vals (np/nd-to-array (np-random/random random-gen n-total))
            r-leak-vals (np/nd-to-array (np-random/random random-gen n-total))
            gps-orr-flags (np/nd-to-array (np-random/random random-gen n-total))
            
            survival (np-ts/zeros (clj->js [n-total]))
            survival-data (.-data survival)
            arms-arr (np/nd-to-array arms)]
        (dotimes [i n-total]
          (let [arm (aget arms-arr i)
                r-weib (aget r-weib-vals i)
                r-cure (aget r-cure-vals i)
                r-leak (aget r-leak-vals i)]
            (if (zero? arm)
              ;; BAT patient
              (let [bat-scale (double (:bat-scale record))
                    bat-shape (double (:bat-shape record))
                    family (some-> (:family record) name)
                    val (cond
                          (= family "leaky")
                          (let [cf (double (:bat-cure-frac record))
                                sc (double (:bat-unc-scale record))
                                sh (double (:bat-unc-shape record))
                                leak-yr (double (:bat-leak-yr record))
                                leak-rate-monthly (/ leak-yr 12.0)]
                            (if (< r-cure cf)
                              (if (> leak-rate-monthly 0)
                                (/ (- (js/Math.log r-leak)) leak-rate-monthly)
                                js/Infinity)
                              (* sc (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 sh)))))
                          
                          (= family "cure")
                          (let [cf (double (:bat-cure-frac record))
                                sc (double (:bat-unc-scale record))
                                sh (double (:bat-unc-shape record))]
                            (if (< r-cure cf)
                              js/Infinity
                              (* sc (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 sh)))))
                          
                          :else
                          (* bat-scale (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 bat-shape))))]
                (aset survival-data i val))
              ;; GPS patient
              (let [has-orr? (< (aget gps-orr-flags i) gps-orr)
                    val (if has-orr?
                          ;; GPS survival
                          (let [family (some-> (:family record) name)]
                            (cond
                              (= family "weibull")
                              (let [gps-scale (double (:gps-scale record))
                                    gps-shape (double (:gps-shape record))]
                                (* gps-scale (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 gps-shape))))
                              
                              (= family "cure")
                              (let [cf (double (:cure-frac record))
                                    sc (double (:unc-scale record))
                                    sh (double (:unc-shape record))]
                                (if (< r-cure cf)
                                  js/Infinity
                                  (* sc (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 sh)))))
                              
                              (= family "leaky")
                              (let [cf (double (:cure-frac record))
                                    sc (double (:unc-scale record))
                                    sh (double (:unc-shape record))
                                    leak-yr (double (:leak-yr record))
                                    leak-rate-monthly (/ leak-yr 12.0)]
                                (if (< r-cure cf)
                                  (if (> leak-rate-monthly 0)
                                    (/ (- (js/Math.log r-leak)) leak-rate-monthly)
                                    js/Infinity)
                                  (* sc (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 sh)))))
                              :else 0.0))
                          ;; Fallback to BAT survival (using the same random uniform variables)
                          (let [bat-scale (double (:bat-scale record))
                                bat-shape (double (:bat-shape record))
                                family (some-> (:family record) name)]
                            (cond
                              (= family "leaky")
                              (let [cf (double (:bat-cure-frac record))
                                    sc (double (:bat-unc-scale record))
                                    sh (double (:bat-unc-shape record))
                                    leak-yr (double (:bat-leak-yr record))
                                    leak-rate-monthly (/ leak-yr 12.0)]
                                (if (< r-cure cf)
                                  (if (> leak-rate-monthly 0)
                                    (/ (- (js/Math.log r-leak)) leak-rate-monthly)
                                    js/Infinity)
                                  (* sc (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 sh)))))
                              
                              (= family "cure")
                              (let [cf (double (:bat-cure-frac record))
                                    sc (double (:bat-unc-scale record))
                                    sh (double (:bat-unc-shape record))]
                                (if (< r-cure cf)
                                  js/Infinity
                                  (* sc (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 sh)))))
                              
                              :else
                              (* bat-scale (js/Math.pow (- (js/Math.log r-weib)) (/ 1.0 bat-shape))))))]
                (aset survival-data i val)))))
        {:enroll-times enroll :arms-array arms :survival-times survival}))))

(defn- count-events-at-times-vectorized
  "Vectorized counting of events at IA, UPD, and PR3 timepoints."
  [config enroll survival arms]
  (let [fu-ia (np-ts/maximum
               (np-ts/subtract
                (np/full-float64 (.-shape enroll) (:t-ia config))
                enroll)
               0.0)
        dead-ia (np-ts/less_equal survival fu-ia)
        n-ia (np-ts/sum dead-ia)
        fu-up (np-ts/maximum
               (np-ts/subtract
                (np/full-float64 (.-shape enroll) (:t-upd config))
                enroll)
               0.0)
        dead-up (np-ts/less_equal survival fu-up)
        n-up (np-ts/sum dead-up)
        fu-pr3 (np-ts/maximum
                (np-ts/subtract
                 (np/full-float64 (.-shape enroll) (:t-pr3 config))
                 enroll)
                0.0)
        dead-pr3 (np-ts/less_equal survival fu-pr3)
        n-pr3 (if (:use-pr3-anchor config) (np-ts/sum dead-pr3) 0.0)
        is-bat (np-ts/equal arms 0)
        is-gps (np-ts/equal arms 1)
        dead-ia-bat (np-ts/logical_and dead-ia is-bat)
        dead-ia-gps (np-ts/logical_and dead-ia is-gps)
        dead-up-bat (np-ts/logical_and dead-up is-bat)
        dead-up-gps (np-ts/logical_and dead-up is-gps)
        dead-pr3-bat (np-ts/logical_and dead-pr3 is-bat)
        dead-pr3-gps (np-ts/logical_and dead-pr3 is-gps)
        n-ia-bat (np-ts/sum dead-ia-bat)
        n-ia-gps (np-ts/sum dead-ia-gps)
        n-up-bat (np-ts/sum dead-up-bat)
        n-up-gps (np-ts/sum dead-up-gps)
        n-pr3-bat (if (:use-pr3-anchor config) (np-ts/sum dead-pr3-bat) 0.0)
        n-pr3-gps (if (:use-pr3-anchor config) (np-ts/sum dead-pr3-gps) 0.0)]
    {:n-interim-analysis n-ia
     :n-update n-up
     :n-press-release-3 n-pr3
     :n-interim-analysis-bat n-ia-bat
     :n-interim-analysis-gps n-ia-gps
     :n-update-bat n-up-bat
     :n-update-gps n-up-gps
     :n-press-release-3-bat n-pr3-bat
     :n-press-release-3-gps n-pr3-gps}))

(defn- compute-interval-medians-vectorized
  "Vectorized computation of interval medians using boolean masking."
  [config enroll survival arms]
  (let [is-bat (np-ts/equal arms 0)
        is-gps (np-ts/equal arms 1)
        fu-ia (np-ts/maximum
               (np-ts/subtract
                (np/full-float64 (.-shape enroll) (:t-ia config))
                enroll)
               0.0)
        dead-ia (np-ts/less_equal survival fu-ia)
        fu-up (np-ts/maximum
               (np-ts/subtract
                (np/full-float64 (.-shape enroll) (:t-upd config))
                enroll)
               0.0)
        dead-up (np-ts/less_equal survival fu-up)
        fu-pr3 (np-ts/maximum
                (np-ts/subtract
                 (np/full-float64 (.-shape enroll) (:t-pr3 config))
                 enroll)
                0.0)
        dead-pr3 (np-ts/less_equal survival fu-pr3)
        ia-bat-mask (np-ts/logical_and dead-ia is-bat)
        ia-gps-mask (np-ts/logical_and dead-ia is-gps)
        ia-pool-mask dead-ia
        up-mask (np-ts/logical_and dead-up (np-ts/logical_not dead-ia))
        up-bat-mask (np-ts/logical_and up-mask is-bat)
        up-gps-mask (np-ts/logical_and up-mask is-gps)
        up-pool-mask up-mask
        pr3-mask (np-ts/logical_and dead-pr3 (np-ts/logical_not dead-up))
        pr3-bat-mask (np-ts/logical_and pr3-mask is-bat)
        pr3-gps-mask (np-ts/logical_and pr3-mask is-gps)
        pr3-pool-mask pr3-mask
        get-median (fn [mask]
                     (let [filtered (.bindex ^js survival mask)]
                       (if (> (np-ts/size filtered) 0)
                         (np-ts/median filtered)
                         js/NaN)))]
    {:med-interim-analysis-bat   (get-median ia-bat-mask)
     :med-interim-analysis-gps   (get-median ia-gps-mask)
     :med-interim-analysis-pool  (get-median ia-pool-mask)
     :med-update-bat   (get-median up-bat-mask)
     :med-update-gps   (get-median up-gps-mask)
     :med-update-pool  (get-median up-pool-mask)
     :med-press-release-3-bat  (get-median pr3-bat-mask)
     :med-press-release-3-gps  (get-median pr3-gps-mask)
     :med-press-release-3-pool (get-median pr3-pool-mask)}))

(defn- pass-events-tolerance?
  "Checks if event counts are within configured tolerances."
  [config {:keys [n-interim-analysis n-update n-press-release-3]}]
  (let [keep-ia (<= (js/Math.abs (- n-interim-analysis (:n-ev-ia config))) (:tol-ia config))
        keep-up (<= (js/Math.abs (- n-update (:n-ev-upd config))) (:tol-upd config))
        increment-ia-up (- n-update n-interim-analysis)
        target-increment (- (:n-ev-upd config) (:n-ev-ia config))
        diff-increment (js/Math.abs (- increment-ia-up target-increment))
        pass-pr3 (if-not (:use-pr3-anchor config) true
                          (and (<= (js/Math.abs (- n-press-release-3 (:n-ev-pr3 config))) (:tol-pr3 config))
                               (<= (js/Math.abs (- (- n-press-release-3 n-update) (- (:n-ev-pr3 config) (:n-ev-upd config)))) (:tol-increment-upd-pr3 config))))]
    (and keep-ia keep-up (<= diff-increment (:tol-increment-ia-upd config)) pass-pr3)))

(defn- interim-analysis-data-vectorized
  "Extracts data for interim analysis using vectorized minimum/maximum."
  [config enroll survival arms]
  (let [deaths (np-ts/add enroll survival)
        fu-ia (np-ts/maximum
               (np-ts/subtract
                (np/full-float64 (.-shape enroll) (:t-ia config))
                enroll)
               0.0)
        time-ia (np-ts/minimum survival fu-ia)
        deaths (np-ts/add enroll survival)
        event-ia (np-ts/array
                  (np-ts/where
                   (np-ts/less_equal deaths (np/full-float64 (.-shape deaths) (:t-ia config))) 1 0))
        fu-up (np-ts/maximum
               (np-ts/subtract
                (np/full-float64 (.-shape enroll) (:t-upd config))
                enroll)
               0.0)
        alive-bat (np-ts/sum (np-ts/logical_and
                              (np-ts/greater survival fu-up)
                              (np-ts/equal arms 0)))
        alive-gps (np-ts/sum (np-ts/logical_and
                              (np-ts/greater survival fu-up)
                              (np-ts/equal arms 1)))]
    {:time-ia time-ia
     :event-ia event-ia
     :alive-bat alive-bat
     :alive-gps alive-gps}))

(defn- analyze-interim-vectorized
  "Performs log-rank analysis for the interim analysis (IA) with vectorized structures."
  [config enroll survival arms]
  (let [{:keys [time-ia event-ia alive-bat alive-gps]}
        (interim-analysis-data-vectorized config enroll survival arms)
        [z-ia hr-ia] (logrank-z-vectorized time-ia event-ia arms)]
    {:z-ia z-ia :hr-ia hr-ia :time-ia time-ia :ev-ia event-ia
     :alive-bat alive-bat :alive-gps alive-gps}))

(defn- pass-interim-gates?
  "Checks interim results against futility and efficacy gates."
  [config {:keys [hr-ia time-ia ev-ia]}]
  (and (< hr-ia (:futility-hr-max config))
       (> hr-ia (:efficacy-hr-min config))
       (if (> (:pool-mos-min-at-ia config) 0)
         (> (km-survival-at-time-vectorized
             time-ia ev-ia (:pool-mos-min-at-ia config))
            0.5)
         true)
       (if (> (:median-fu-target config) 0)
         (let [median-fu (np-ts/median time-ia)]
           (<= (js/Math.abs (- median-fu (:median-fu-target config)))
               (:median-fu-tol config)))
         true)))

(defn- calculate-final-times-vectorized
  "Calculates survival and event status at T80."
  [t80 enroll survival]
  (let [deaths (np-ts/add enroll survival)
        f (np-ts/maximum
           (np-ts/subtract
            (np/full-float64 (.-shape enroll) t80) enroll)
           0.0)
        time-fin (np-ts/minimum survival f)
        ev-fin (np-ts/array
                (np-ts/where
                 (np-ts/less_equal deaths (np/full-float64 (.-shape deaths) t80)) 1 0))]
    {:time-fin time-fin :ev-fin ev-fin}))

(defn- analyze-final-vectorized
  "Performs final analysis once target events are reached."
  [config enroll survival arms]
  (let [deaths (np-ts/add enroll survival)
        finite-mask (np-ts/isfinite deaths)
        finite-deaths (np-ts/sort (.bindex deaths finite-mask))
        n-deaths (np-ts/size finite-deaths)
        target (:n-ev-final config)
        reached (>= n-deaths target)
        t80 (if reached
              (aget (np/nd-to-array finite-deaths) (dec target))
              js/NaN)
        today (if (and (:enforce-no-80-by-today config) reached)
                (>= t80 (- (or (:t-now config) 63)
                           (:no-80-slack-months config)))
                true)]
    (if (and reached (not today))
      nil
      (if-not reached
        {:reached false :t80 t80 :hr-final js/NaN :z-final js/NaN
         :bat-alive-final js/NaN :gps-alive-final js/NaN}
        (let [{:keys [time-fin ev-fin]}
              (calculate-final-times-vectorized t80 enroll survival)
              [z-fin hr-fin] (logrank-z-vectorized time-fin ev-fin arms)
              deaths (np-ts/add enroll survival)
              t80-arr (np/full-float64 (.-shape enroll) t80)
              alive-mask (np-ts/logical_and
                          (np-ts/less_equal enroll t80-arr)
                          (np-ts/greater deaths t80-arr))
              bat-alive (np-ts/sum (np-ts/logical_and
                                    alive-mask
                                    (np-ts/equal arms 0.0)))
              gps-alive (np-ts/sum (np-ts/logical_and
                                    alive-mask
                                    (np-ts/equal arms 1.0)))]
          {:reached true :t80 t80 :hr-final hr-fin :z-final z-fin
           :bat-alive-final bat-alive :gps-alive-final gps-alive})))))

(defn- calculate-trial-stats-vectorized
  "Computes all statistics for a successfully screened trial."
  [config enroll survival arms]
  (let [counts (count-events-at-times-vectorized config enroll survival arms)]
    (when (pass-events-tolerance? config counts)
      (let [interim-res (analyze-interim-vectorized config enroll survival arms)]
        (when (pass-interim-gates? config interim-res)
          (let [final-res (analyze-final-vectorized config enroll survival arms)]
            (when final-res
              (merge {:n-ev-ia (:n-interim-analysis counts)
                      :n-ev-upd (:n-update counts)
                      :z-ia (:z-ia interim-res)
                      :hr-ia (:hr-ia interim-res)
                      :reached-80 (:reached final-res)
                      :t80 (:t80 final-res)
                      :hr-final (:hr-final final-res)
                      :z-final (:z-final final-res)
                      :bat-alive-upd (:alive-bat interim-res)
                      :gps-alive-upd (:alive-gps interim-res)
                      :bat-alive-final (:bat-alive-final final-res)
                      :gps-alive-final (:gps-alive-final final-res)
                      ;; Per-arm cumulative event counts
                      :n-interim-analysis-bat  (:n-interim-analysis-bat counts)
                      :n-interim-analysis-gps  (:n-interim-analysis-gps counts)
                      :n-update-bat  (:n-update-bat counts)
                      :n-update-gps  (:n-update-gps counts)
                      :n-press-release-3-bat (:n-press-release-3-bat counts)
                      :n-press-release-3-gps (:n-press-release-3-gps counts)}
                     (when (:use-pr3-anchor config)
                       {:n-ev-pr3 (:n-press-release-3 counts)})
                     ;; Per-arm median survival times per interval
                     (compute-interval-medians-vectorized
                      config enroll survival arms)))))))))

(defn- simulate-one-trial-vectorized
  "Simulates a single trial using vectorized operations."
  [record config random-gen n-total n-per-arm bands]
  (let [{:keys [enroll-times arms-array survival-times]}
        (generate-trial-data-vectorized
         record config random-gen n-total n-per-arm bands)
        counts (count-events-at-times-vectorized
                config enroll-times survival-times arms-array)
        passed-screening (or (:ignore-prefilter? config)
                             (pass-events-tolerance? config counts))
        stats (when passed-screening
                (calculate-trial-stats-vectorized
                 config enroll-times survival-times arms-array))]
    {:passed-screening passed-screening :stats stats}))

(defn simulate-one-accepted-trial
  "Simulates trials until an accepted one is found, up to 100 attempts."
  [record config random-gen]
  (let [n-total (:n-total config)
        n-per-arm (:n-per-arm config)
        bands (:enroll-bands config)]
    (loop [attempts 0]
      (if (>= attempts 100)
        nil
        (let [res (simulate-one-trial-vectorized
                   record config random-gen n-total n-per-arm bands)]
          (if (:stats res)
            (:stats res)
            (recur (inc attempts))))))))

(defn- run-sim-chunk-vectorized
  "Runs a chunk of vectorized simulations."
  [record config n-sims random-gen]
  (let [results (map (fn [_] (simulate-one-trial-vectorized record config random-gen (:n-total config) (:n-per-arm config) (:enroll-bands config))) (range n-sims))]
    [(keep :stats results) (reduce + (map #(if (:passed-screening %) 1 0) results))]))

(defn- gps-survival-probability-scalar [t record]
  (let [family (some-> (:family record) name)]
    (cond
      (= family "weibull")
      (let [scale (:gps-scale record)
            shape (:gps-shape record)]
        (js/Math.exp (- (js/Math.pow (/ t scale) shape))))

      (= family "cure")
      (let [cf (:cure-frac record)
            scale (:unc-scale record)
            shape (:unc-shape record)]
        (+ cf (* (- 1.0 cf)
                 (js/Math.exp (- (js/Math.pow (/ t scale) shape))))))

      (= family "leaky")
      (let [cf (:cure-frac record)
            scale (:unc-scale record)
            shape (:unc-shape record)
            leak-rate-monthly (/ (:leak-yr record) 12.0)]
        (+ (* cf (js/Math.exp (- (* leak-rate-monthly t))))
           (* (- 1.0 cf)
              (js/Math.exp (- (js/Math.pow (/ t scale) shape))))))
      :else 0.0)))

(defn- bat-survival-probability-scalar [t record]
  (if (let [fam (:family record)] (or (= fam "leaky") (= fam :leaky)))
    (let [cf (:bat-cure-frac record)
          scale (:bat-unc-scale record)
          shape (:bat-unc-shape record)
          leak-rate-monthly (/ (:bat-leak-yr record) 12.0)]
      (+ (* cf (js/Math.exp (- (* leak-rate-monthly t))))
         (* (- 1.0 cf)
            (js/Math.exp (- (js/Math.pow (/ t scale) shape))))))
    (let [scale (:bat-scale record)
          shape (:bat-shape record)]
      (js/Math.exp (- (js/Math.pow (/ t scale) shape))))))

(defn- calculate-bat-median [record]
  (if-not (let [fam (:family record)] (or (= fam "leaky") (= fam :leaky)))
    (:bat-med record)
    (let [f (fn [t] (bat-survival-probability-scalar t record))]
      (if (<= (f 0.0) 0.5)
        0.0
        (if (> (f 1000.0) 0.5)
          js/NaN
          (loop [low 0.0
                 high 1000.0
                 iter 0]
            (if (or (> iter 30) (< (- high low) 0.01))
              (/ (+ low high) 2.0)
              (let [mid (/ (+ low high) 2.0)
                    val (f mid)]
                (if (> val 0.5)
                  (recur mid high (inc iter))
                  (recur low mid (inc iter)))))))))))

(defn- calculate-gps-median [record]
  (if (= (some-> (:family record) name) "weibull")
    (:gps-med record)
    (let [f (fn [t] (gps-survival-probability-scalar t record))]
      (if (<= (f 0.0) 0.5)
        0.0
        (if (> (f 1000.0) 0.5)
          js/NaN
          (loop [low 0.0
                 high 1000.0
                 iter 0]
            (if (or (> iter 30) (< (- high low) 0.01))
              (/ (+ low high) 2.0)
              (let [mid (/ (+ low high) 2.0)
                    val (f mid)]
                (if (> val 0.5)
                  (recur mid high (inc iter))
                  (recur low mid (inc iter)))))))))))

(defn- mean-field [all-stats k]
  (let [vs (keep k all-stats)]
    (if (empty? vs) js/NaN (/ (reduce + vs) (count vs)))))

(defn- build-aggregate-map
  "Helper to build the aggregate statistics map."
  [all-stats num-attempts num-pass-events record to-nd
   finite-t80 hr-final-arr num-success num-accepted hr-low hr-high]
  (let [gps-med (or (:gps-med record) (calculate-gps-median record))
        bat-med (or (:bat-med record) (calculate-bat-median record))]
    (merge record
           {:gps-med gps-med
            :bat-med bat-med
            :n-attempts num-attempts
            :n-pass-events num-pass-events
            :n-pass-futility num-accepted
            :n-accepted num-accepted
            :acceptance-rate (/ num-accepted num-attempts)
            :p-reach80 (/ (count (filter :reached-80 all-stats))
                          num-accepted)
            :p-no-readout (- 1.0
                             (/ (count (filter :reached-80 all-stats))
                                num-accepted))
            :median-hr-final
            (if (empty? hr-final-arr)
              js/NaN
              (np-ts/median (to-nd hr-final-arr)))
            :hr-final-low hr-low
            :hr-final-high hr-high
            :p-hr-below-threshold
            (if (empty? hr-final-arr)
              js/NaN
              (/ (count (filter #(< % 0.636) hr-final-arr))
                 (count hr-final-arr)))
            :p-success-overall (/ num-success num-accepted)
            :median-t80-months
            (if (empty? finite-t80)
              js/NaN
              (np-ts/median (to-nd finite-t80)))
            :median-hr-ia (np-ts/median (to-nd (map :hr-ia all-stats)))
            :median-z-ia  (np-ts/median (to-nd (map :z-ia all-stats)))
            :median-bat-alive-upd
            (np-ts/median (to-nd (map :bat-alive-upd all-stats)))
            :median-gps-alive-upd
            (np-ts/median (to-nd (map :gps-alive-upd all-stats)))
            :median-bat-alive-final
            (np-ts/median (to-nd (map :bat-alive-final all-stats)))
            :median-gps-alive-final
            (np-ts/median (to-nd (map :gps-alive-final all-stats)))
            ;; Mean per-arm deaths per interval (from simulation)
            :mean-n-interim-analysis-bat  (mean-field all-stats :n-interim-analysis-bat)
            :mean-n-interim-analysis-gps  (mean-field all-stats :n-interim-analysis-gps)
            :mean-n-update-bat  (mean-field all-stats :n-update-bat)
            :mean-n-update-gps  (mean-field all-stats :n-update-gps)
            :mean-n-press-release-3-bat (mean-field all-stats :n-press-release-3-bat)
            :mean-n-press-release-3-gps (mean-field all-stats :n-press-release-3-gps)
            ;; Mean-of-medians survival time per arm per interval
            :mean-med-interim-analysis-bat   (mean-field all-stats :med-interim-analysis-bat)
            :mean-med-interim-analysis-gps   (mean-field all-stats :med-interim-analysis-gps)
            :mean-med-interim-analysis-pool  (mean-field all-stats :med-interim-analysis-pool)
            :mean-med-update-bat   (mean-field all-stats :med-update-bat)
            :mean-med-update-gps   (mean-field all-stats :med-update-gps)
            :mean-med-update-pool  (mean-field all-stats :med-update-pool)
            :mean-med-press-release-3-bat  (mean-field all-stats :med-press-release-3-bat)
            :mean-med-press-release-3-gps  (mean-field all-stats :med-press-release-3-gps)
            :mean-med-press-release-3-pool
            (mean-field all-stats :mean-med-press-release-3-pool)})))

(defn- summarize-results
  "Aggregates statistics across all accepted simulations for a combo."
  [all-stats num-attempts num-pass-events record]
  (let [num-accepted (count all-stats)
        finite-t80 (filter #(not (js/Number.isNaN %)) (map :t80 all-stats))
        hr-final-arr (filter #(not (js/Number.isNaN %)) (map :hr-final all-stats))
        num-success (count (filter #(and (:reached-80 %)
                                         (< (:hr-final %) 0.636))
                                   all-stats))
        to-nd (fn [coll] (np-ts/array (cljs.core/to-array coll)))
        sorted-hrs (sort hr-final-arr)
        n-hrs (count sorted-hrs)
        hr-low (if (pos? n-hrs)
                 (nth sorted-hrs (js/Math.floor (* 0.025 n-hrs)))
                 js/NaN)
        hr-high (if (pos? n-hrs)
                  (let [idx (js/Math.floor (* 0.975 n-hrs))
                        last-idx (dec n-hrs)]
                    (nth sorted-hrs (js/Math.min last-idx idx)))
                  js/NaN)]
    (build-aggregate-map all-stats num-attempts num-pass-events record to-nd
                         finite-t80 hr-final-arr num-success num-accepted
                         hr-low hr-high)))

(defn- run-sim-chunk-2d
  "Runs a batch of simulations in parallel using 2D vectorized operations."
  [record config n-sims random-gen]
  (if (<= n-sims 0)
    [[] 0]
    (let [n-total (:n-total config)
          n-per-arm (:n-per-arm config)
          bands (:enroll-bands config)
          ;; 1. Generate enrollment times in 2D
          band-draws (mapv (fn [[lo hi n]]
                             (np-random/uniform
                              random-gen lo hi (clj->js [n-sims n])))
                           bands)
          raw-enroll (np-ts/concatenate (clj->js band-draws) 1)
          enroll (np-ts/sort raw-enroll 1)
          ;; 2. Assign arms in 2D
          random-vals (np-random/random random-gen (clj->js [n-sims n-total]))
          ranks (np-ts/argsort (np-ts/argsort random-vals 1) 1)
          arms (np-ts/array (np-ts/where (np-ts/less ranks n-per-arm) 1.0 0.0))
          ;; 3. Draw survival times in 2D
          num-gps n-per-arm
          num-bat (- n-total n-per-arm)
          bat-draws (draw-bat-times-vectorized
                     record (clj->js [n-sims num-bat]) random-gen)
          gps-draws (draw-gps-times-vectorized
                     record (clj->js [n-sims num-gps]) random-gen)
          ;; 4. Merge survival times in 2D
          survival-flat (np-ts/zeros (clj->js [(* n-sims n-total)]))
          arms-flat (np-ts/ravel arms)
          bat-indices (np-ts/flatnonzero (np-ts/equal arms-flat 0.0))
          gps-indices (np-ts/flatnonzero (np-ts/equal arms-flat 1.0))]
      (np-ts/put survival-flat (.toArray bat-indices) (np-ts/ravel bat-draws))
      (np-ts/put survival-flat (.toArray gps-indices) (np-ts/ravel gps-draws))
      (let [survival (np-ts/reshape survival-flat (clj->js [n-sims n-total]))
            ;; 5. Compute event counts at IA, UPD, PR3 in 2D
            shape (clj->js [n-sims n-total])
            t-ia-full (np-ts/full shape (:t-ia config))
            fu-ia (np-ts/maximum (np-ts/subtract t-ia-full enroll) 0.0)
            dead-ia (np-ts/less_equal survival fu-ia)
            n-ia (np-ts/sum dead-ia 1)

            t-upd-full (np-ts/full shape (:t-upd config))
            fu-upd (np-ts/maximum (np-ts/subtract t-upd-full enroll) 0.0)
            dead-upd (np-ts/less_equal survival fu-upd)
            n-upd (np-ts/sum dead-upd 1)

            t-pr3-full (np-ts/full shape (:t-pr3 config))
            fu-pr3 (np-ts/maximum (np-ts/subtract t-pr3-full enroll) 0.0)
            dead-pr3 (np-ts/less_equal survival fu-pr3)
            n-pr3 (if (:use-pr3-anchor config)
                    (np-ts/sum dead-pr3 1)
                    (np-ts/zeros (clj->js [n-sims])))

            is-bat (np-ts/equal arms 0.0)
            is-gps (np-ts/equal arms 1.0)

            dead-ia-bat (np-ts/logical_and dead-ia is-bat)
            dead-ia-gps (np-ts/logical_and dead-ia is-gps)
            dead-up-bat (np-ts/logical_and dead-upd is-bat)
            dead-up-gps (np-ts/logical_and dead-upd is-gps)
            dead-pr3-bat (np-ts/logical_and dead-pr3 is-bat)
            dead-pr3-gps (np-ts/logical_and dead-pr3 is-gps)

            n-ia-bat (np-ts/sum dead-ia-bat 1)
            n-ia-gps (np-ts/sum dead-ia-gps 1)
            n-up-bat (np-ts/sum dead-up-bat 1)
            n-up-gps (np-ts/sum dead-up-gps 1)
            n-pr3-bat (if (:use-pr3-anchor config)
                        (np-ts/sum dead-pr3-bat 1)
                        (np-ts/zeros (clj->js [n-sims])))
            n-pr3-gps (if (:use-pr3-anchor config)
                        (np-ts/sum dead-pr3-gps 1)
                        (np-ts/zeros (clj->js [n-sims])))

            ;; 6. Check events tolerance in 2D
            keep-ia (np-ts/less_equal
                     (np-ts/abs (np-ts/subtract n-ia (:n-ev-ia config)))
                     (:tol-ia config))
            keep-up (np-ts/less_equal
                     (np-ts/abs (np-ts/subtract n-upd (:n-ev-upd config)))
                     (:tol-upd config))
            increment-ia-up (np-ts/subtract n-upd n-ia)
            target-increment (- (:n-ev-upd config) (:n-ev-ia config))
            diff-increment (np-ts/abs
                            (np-ts/subtract
                             increment-ia-up target-increment))
            keep-inc (np-ts/less_equal
                      diff-increment (:tol-increment-ia-upd config))

            pass-pr3 (if-not (:use-pr3-anchor config)
                       (np-ts/full (clj->js [n-sims]) true)
                       (let [c1 (np-ts/less_equal
                                 (np-ts/abs
                                  (np-ts/subtract n-pr3 (:n-ev-pr3 config)))
                                 (:tol-pr3 config))
                             inc-upd-pr3 (np-ts/subtract n-pr3 n-upd)
                             target-inc-upd-pr3 (- (:n-ev-pr3 config)
                                                    (:n-ev-upd config))
                             diff-inc-upd-pr3 (np-ts/abs
                                               (np-ts/subtract
                                                inc-upd-pr3
                                                target-inc-upd-pr3))
                             c2 (np-ts/less_equal
                                 diff-inc-upd-pr3
                                 (:tol-increment-upd-pr3 config))]
                         (np-ts/logical_and c1 c2)))

            passed-screening (if (:ignore-prefilter? config)
                               (np-ts/full (clj->js [n-sims]) true)
                               (np-ts/logical_and
                                (np-ts/logical_and keep-ia keep-up)
                                (np-ts/logical_and keep-inc pass-pr3)))

            ;; 7. Extract trials that passed screening
            ;; Pre-extract raw Float64Array backing each 2D matrix
            ;; to avoid repeated .take allocations in the loop.
            passed-indices     (np-ts/flatnonzero passed-screening)
            passed-indices-arr (np/nd-to-array passed-indices)
            n-pass             (alength passed-indices-arr)
            e-raw              (.-data enroll)
            s-raw              (.-data survival)
            a-raw              (.-data arms)

            results
            (loop [i 0 acc []]
              (if (< i n-pass)
                (let [idx    (aget passed-indices-arr i)
                      offset (* idx n-total)
                      end    (+ offset n-total)
                      ;; .subarray is a zero-copy view; np-ts/array
                      ;; does a fast typed→typed copy (no object graph)
                      enroll-1d   (np-ts/array
                                   (.subarray e-raw offset end))
                      survival-1d (np-ts/array
                                   (.subarray s-raw offset end))
                      arms-1d     (np-ts/array
                                   (.subarray a-raw offset end))
                      stats (calculate-trial-stats-vectorized
                             config enroll-1d survival-1d arms-1d)]
                  (recur (inc i)
                         (if stats (conj acc stats) acc)))
                acc))]
        [results n-pass]))))

(defn- run-sim-in-chunks-2d
  "Runs remaining simulations in chunks using 2D vectorized operations."
  [record config remaining chunk-size random-gen]
  (loop [rem remaining
         all-stats []
         all-pass 0]
    (if (> rem 0)
      (let [this-chunk (js/Math.min rem chunk-size)
            [chunk-stats chunk-pass] (run-sim-chunk-2d
                                      record config this-chunk random-gen)]
        (recur (- rem this-chunk)
               (concat all-stats chunk-stats)
               (+ all-pass chunk-pass)))
      [all-stats all-pass])))

(defn simulate-one-combo-2d
  "Simulates combo using 2D vectorized chunks."
  [{:keys [rec cfg-dict n-sims seed chunk-size]}]
  (let [random-gen (np-random/default-rng (or seed 42))
        config cfg-dict
        N (:n-total config)
        max-chunk-size (js/Math.floor (/ 300000 N))
        chunk-sz (or chunk-size
                     (js/Math.max 100 (js/Math.min 500 max-chunk-size)))
        n-screen (js/Math.min (:n-sims-screen config) n-sims)
        [screen-stats screen-pass] (run-sim-chunk-2d
                                    rec config n-screen random-gen)]
    (when (>= (count screen-stats) (:n-screen-min-pass config))
      (let [remaining (- n-sims n-screen)
            [more-stats more-pass] (if (> remaining 0)
                                     (run-sim-in-chunks-2d
                                      rec config remaining chunk-sz random-gen)
                                     [[] 0])
            all-stats (concat screen-stats more-stats)]
        (when-not (empty? all-stats)
          (summarize-results all-stats n-sims (+ screen-pass more-pass) rec))))))

(defn simulate-one-combo
  "Simulates multiple trials for a scenario combination using 2D chunked vectorized operations."
  [args]
  (simulate-one-combo-2d args))

