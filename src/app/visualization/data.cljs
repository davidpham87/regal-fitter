(ns app.visualization.data
  (:require [app.visualization.survival :as survival]
            [app.regal-fit.survival :as fit-survival]
            [cljs.numpy :as np]))

(defn calculate-bat-edges [bat-meds bin-width]
  (if (empty? bat-meds)
    []
    (let [v-min (apply min bat-meds)
          v-max (apply max bat-meds)
          ;; If min and max are equal (e.g. single model value), expand range so we get a bin
          v-min (if (= v-min v-max) (- v-min bin-width) v-min)
          bat-min (js/Math.floor (/ v-min bin-width))
          bat-max (js/Math.ceil (/ v-max bin-width))]
      (range (* bat-min bin-width)
             (+ (* bat-max bin-width) bin-width)
             bin-width))))

(defn calculate-weighted-mean [k sub sub-w]
  (let [vs (map k sub)
        valid-idx (keep-indexed
                   (fn [i v] (when (and v (not (js/isNaN v))) i))
                   vs)]
    (if (empty? valid-idx)
      nil
      (/ (reduce + (map #(* (nth vs %) (nth sub-w %)) valid-idx))
         (reduce + (map #(nth sub-w %) valid-idx))))))

(defn extract-bin-subsets [lo bin-width results weights]
  (let [hi (+ lo bin-width)
        mask (map-indexed
              (fn [i r] (and (>= (:bat-med r) lo) (< (:bat-med r) hi)))
              results)]
    [(keep-indexed (fn [i m] (when m (nth results i))) mask)
     (keep-indexed (fn [i m] (when m (nth weights i))) mask)]))

(defn get-trials-from-sub [sub sub-w]
  (mapcat (fn [combo wt]
            (let [n-acc (or (:n-accepted combo) 1)
                  indiv-wt (if (pos? n-acc) (/ wt n-acc) 0.0)]
              (map #(assoc % :weight indiv-wt)
                   (:individual-observations combo))))
          sub
          sub-w))

(defn trials-percentile [trials key p]
  (let [valid-trials (filter #(and (get % key)
                                   (not (js/isNaN (get % key))))
                             trials)
        values (map key valid-trials)
        w-list (map :weight valid-trials)
        tot-wt (reduce + w-list)
        norm-w (if (pos? tot-wt)
                 (mapv #(/ % tot-wt) w-list)
                 (mapv (constantly (/ 1.0 (max 1 (count values))))
                       values))]
    (survival/weighted-percentile values norm-w p)))

(defn pooled-success-rate [trials]
  (let [valid (filter #(and (:hr-final %)
                            (not (js/isNaN (:hr-final %))))
                      trials)
        wt-sum (reduce + (map :weight valid))]
    (if (zero? wt-sum)
      0.0
      (/ (reduce + (map (fn [t]
                          (if (and (:reached-80 t)
                                   (< (:hr-final t) 0.636))
                            (:weight t)
                            0.0))
                        valid))
         wt-sum))))

(defn pooled-hr-below-threshold [trials]
  (let [valid (filter #(and (:hr-final %)
                            (not (js/isNaN (:hr-final %))))
                      trials)
        wt-sum (reduce + (map :weight valid))]
    (if (zero? wt-sum)
      0.0
      (/ (reduce + (map (fn [t]
                          (if (< (:hr-final t) 0.636)
                            (:weight t)
                            0.0))
                        valid))
         wt-sum))))

(defn build-bin-record [lo bin-width results weights]
  (let [[sub sub-w] (extract-bin-subsets lo bin-width results weights)
        sub-w-sum (reduce + sub-w)]
    (when (pos? sub-w-sum)
      (let [trials (get-trials-from-sub sub sub-w)
            norm-sub-w (mapv #(/ % sub-w-sum) sub-w)
            gps-med-vals (mapv :gps-med sub)]
        {:bat-mid (+ lo (/ bin-width 2))
         :weight sub-w-sum
         :p-success-overall (or (calculate-weighted-mean
                                 :p-success-overall sub sub-w)
                                0.0)
         :p-hr-below-threshold (pooled-hr-below-threshold trials)
         :median-hr-final (trials-percentile trials :hr-final 0.50)
         :hr-final-low (trials-percentile trials :hr-final 0.025)
         :hr-final-high (trials-percentile trials :hr-final 0.975)
         :gps-med (calculate-weighted-mean :gps-med sub sub-w)
         :gps-low (survival/weighted-percentile gps-med-vals norm-sub-w 0.025)
         :gps-high (survival/weighted-percentile gps-med-vals norm-sub-w 0.975)}))))

(defn build-stratified-data [results bin-width]
  (let [bat-meds (map :bat-med results)
        weights (map :weight results)
        tot-wt (reduce + weights)]
    (if (or (empty? results) (zero? tot-wt))
      []
      (let [edges (calculate-bat-edges bat-meds bin-width)]
        (keep #(build-bin-record % bin-width results weights) edges)))))

(defn get-all-individual-trials [combos]
  (mapcat (fn [combo]
            (let [wt (or (:weight combo) 0.0)
                  n-acc (or (:n-accepted combo) 1)
                  indiv-wt (if (pos? n-acc) (/ wt n-acc) 0.0)
                  p-succ (or (:p-success-overall combo) 0.0)]
              (map #(assoc % :weight indiv-wt :p-success-overall p-succ)
                   (:individual-observations combo))))
          combos))

(defn calculate-trials-success [sub wt-sum]
  (if (or (empty? sub) (zero? wt-sum))
    0.0
    (let [weighted-sum (reduce + (map (fn [t]
                                        (* (:p-success-overall t 0.0)
                                           (:weight t)))
                                      sub))]
      (* 100.0 (/ weighted-sum wt-sum)))))

(defn build-hr-bin [lo bin-width trials tot-wt]
  (let [hi (+ lo bin-width)
        sub (filter #(and (>= (:hr-final %) lo) (< (:hr-final %) hi)) trials)
        wt-sum (reduce + (map :weight sub))]
    (if (or (empty? sub) (zero? wt-sum))
      {:hr-mid (+ lo (/ bin-width 2))
       :hr-lo lo :hr-hi hi :weight 0.0
       :p-val 0.0 :success 0.0 :succ-low 0.0 :succ-high 0.0}
      (let [values (map :p-success-overall sub)
            w-list (map :weight sub)
            norm-w (mapv #(/ % wt-sum) w-list)
            succ (calculate-trials-success sub wt-sum)
            low (* 100.0 (survival/weighted-percentile values norm-w 0.025))
            high (* 100.0 (survival/weighted-percentile values norm-w 0.975))]
        {:hr-mid (+ lo (/ bin-width 2))
         :hr-lo lo :hr-hi hi :weight wt-sum
         :p-val (if (pos? tot-wt) (* 100 (/ wt-sum tot-wt)) 0.0)
         :success succ
         :succ-low low
         :succ-high high}))))

(defn get-hr-edges [hrs bin-width]
  (let [hr-min (js/Math.floor (/ (apply min hrs) bin-width))
        hr-max (js/Math.ceil (/ (apply max hrs) bin-width))]
    (range (* hr-min bin-width)
           (+ (* hr-max bin-width) bin-width)
           bin-width)))

(defn- add-cumulative-sum [coll val-key target-key]
  (loop [items coll
         acc []
         running-sum 0.0]
    (if-let [item (first items)]
      (let [new-sum (+ running-sum (or (get item val-key) 0.0))]
        (recur (rest items)
               (conj acc (assoc item target-key (js/Math.min 100.0 new-sum)))
               new-sum))
      acc)))

(defn add-cum-p [bins]
  (add-cumulative-sum bins :p-val :cum-p))

(defn build-hr-distribution-data [results bin-width]
  (let [trials (get-all-individual-trials results)
        valid (filter #(and (:hr-final %)
                            (not (js/isNaN (:hr-final %))))
                      trials)
        hrs (map :hr-final valid)
        tot-wt (reduce + (map :weight valid))]
    (if (or (empty? valid) (zero? tot-wt))
      []
      (let [edges (get-hr-edges hrs bin-width)
            bins (map #(build-hr-bin % bin-width valid tot-wt) edges)]
        (add-cum-p bins)))))

(defn build-individual-km-data [top-combos normalized-w times]
  (mapcat
   (fn [idx combo weight]
     (mapcat
      (fn [t]
        [{:time t
          :survival (survival/combo-survival t combo :bat)
          :group "BAT"
          :combo-id idx
          :type "individual"}
         {:time t
          :survival (survival/combo-survival t combo :gps)
          :group "GPS"
          :combo-id idx
          :type "individual"}])
      times))
   (range) top-combos normalized-w))

(defn build-km-curves-data [best-n config top-k]
  (let [weights (mapv #(or (:weight %) 0.0) best-n)
        tot-wt (reduce + weights)
        normalized-w (if (pos? tot-wt)
                       (mapv #(/ % tot-wt) weights)
                       (mapv (constantly (/ 1.0 (max 1 (count best-n))))
                             best-n))
        top-combos (take top-k best-n)]
    (if (empty? top-combos)
      []
      (let [[_ shape scale] (survival/calculate-bat-rep-params
                             best-n weights tot-wt)
            times (range 0 81)
            indiv (build-individual-km-data top-combos normalized-w times)
            rep (survival/build-rep-km-data
                 times best-n weights tot-wt scale shape)]
        (vec (concat indiv rep))))))

(defn build-ci-points [times best-n normalized-w]
  (let [family (:family (first best-n))]
    (vec
     (mapcat
      (fn [t]
        (let [bat (survival/get-survival-stats
                   t best-n normalized-w :bat family)
              gps (survival/get-survival-stats
                   t best-n normalized-w :gps family)]
          [(assoc bat :time t :group "BAT")
           (assoc gps :time t :group "GPS")]))
      times))))

(defn build-km-ci-data [best-n config]
  (let [weights (mapv #(or (:weight %) 0.0) best-n)
        tot-wt (reduce + weights)
        normalized-w (if (pos? tot-wt)
                       (mapv #(/ % tot-wt) weights)
                       (mapv (constantly (/ 1.0 (max 1 (count best-n))))
                             best-n))
        [bat-med-w gps-med-w] (survival/calculate-ensemble-medians
                               best-n weights tot-wt)]
    (if (empty? best-n)
      {:data [] :bat-med 0.0 :gps-med 0.0 :bat-mean 0.0 :gps-mean 0.0}
      (let [ci-data (build-ci-points (range 0 81) best-n normalized-w)
            bat-probs (map :mean (filter #(= (:group %) "BAT") ci-data))
            gps-probs (map :mean (filter #(= (:group %) "GPS") ci-data))]
        {:data ci-data
         :bat-med bat-med-w
         :gps-med gps-med-w
         :bat-mean (survival/calculate-rmst bat-probs)
         :gps-mean (survival/calculate-rmst gps-probs)}))))

(defn- calculate-bat-S-36m [combo]
  (let [family (:family combo)]
    (if (= (some-> family name) "leaky")
      (let [cf (or (:bat-cure-frac combo) 0.0)
            scale (or (:bat-unc-scale combo) 0.0)
            shape (or (:bat-unc-shape combo) 1.0)
            leak (or (:bat-leak-yr combo) 0.0)
            S (fit-survival/leaky-cure-survival-probability
               36.0 cf scale shape leak)]
        (aget (np/nd-to-array S) 0))
      (let [scale (or (:bat-scale combo) 0.0)
            shape (or (:bat-shape combo) 1.0)
            S (fit-survival/weibull-survival-probability
               36.0 scale shape)]
        (aget (np/nd-to-array S) 0)))))

(defn get-successful-paths [best-n config]
  (let [threshold (:bat-surv-36m-max config)
        items (for [combo best-n
                    :let [wt (or (:weight combo) 0.0)
                          n-acc (or (:n-accepted combo) 1)
                          indiv-wt (if (pos? n-acc) (/ wt n-acc) 0.0)
                          obs (:individual-observations combo)
                          pass-surv? (if-not threshold
                                       true
                                       (<= (calculate-bat-S-36m combo)
                                           threshold))]
                    :when pass-surv?
                    obs-item obs
                    :when (and (:reached-80 obs-item)
                               (< (:hr-final obs-item) 0.636))]
                {:hr (:hr-final obs-item)
                 :t80 (:t80 obs-item)
                 :weight indiv-wt})]
    {:hrs (map :hr items)
     :t80s (map :t80 items)
     :weights (map :weight items)}))

(defn calculate-bin-edges [values bin-width]
  (let [v-min (apply min values)
        v-max (apply max values)
        v-min (if (= v-min v-max) (- v-min bin-width) v-min)
        start (* (js/Math.floor (/ v-min bin-width)) bin-width)
        end (* (js/Math.ceil (/ v-max bin-width)) bin-width)]
    (range start (+ end bin-width) bin-width)))

(defn build-bin-item [lo bin-width pairs tot-wt]
  (let [hi (+ lo bin-width)
        in-bin (filter (fn [[v _]] (and (>= v lo) (< v hi))) pairs)
        bin-wt (reduce + (map second in-bin))]
    (when (pos? bin-wt)
      {:mid (+ lo (/ bin-width 2))
       :lo lo :hi hi :weight bin-wt
       :pct (* 100.0 (/ bin-wt tot-wt))})))

(defn bin-data [values weights bin-width]
  (if (empty? values)
    []
    (let [edges (calculate-bin-edges values bin-width)
          pairs (map vector values weights)
          tot-wt (reduce + weights)]
      (if (zero? tot-wt)
        []
        (keep #(build-bin-item % bin-width pairs tot-wt) edges)))))

(defn calculate-vdata [data tot-wt]
  (loop [items data
         acc []
         running-sum 0.0]
    (if-let [d (first items)]
      (let [p-val (if (pos? tot-wt) (* 100 (/ (:weight d) tot-wt)) 0.0)
            new-sum (+ running-sum p-val)
            succ (* 100 (or (:p-success-overall d) 0))]
        (recur (rest items)
               (conj acc {:bat-mid (:bat-mid d)
                          :success succ
                          :succ-lbl (str (.toFixed succ 0) "%")
                          :hr-final (or (:median-hr-final d) 0)
                          :hr-low (or (:hr-final-low d) 0)
                          :hr-high (or (:hr-final-high d) 0)
                          :gps-med (or (:gps-med d) 0)
                          :gps-low (or (:gps-low d) 0)
                          :gps-high (or (:gps-high d) 0)
                          :p-bat p-val
                          :cum-p (js/Math.min 100.0 new-sum)})
               new-sum))
      acc)))

(defn- add-cum-pct [bins]
  (add-cumulative-sum bins :pct :cum-pct))

(defn build-path-bins [best-n config]
  (let [path-data (get-successful-paths best-n config)]
    [(add-cum-pct (bin-data (:hrs path-data) (:weights path-data) 0.02))
     (add-cum-pct (bin-data (:t80s path-data) (:weights path-data) 0.5))]))

(defn build-alive-scatter-data [results]
  (let [trials (get-all-individual-trials results)
        valid (filter #(and (:reached-80 %)
                            (:bat-alive-final %)
                            (:gps-alive-final %))
                      trials)]
    (mapv (fn [t]
            (let [bat (:bat-alive-final t)
                  gps (:gps-alive-final t)]
              {:bat-alive bat
               :gps-alive gps
               :bat-jitter (+ bat (* 0.6 (- (js/Math.random) 0.5)))
               :gps-jitter (+ gps (* 0.6 (- (js/Math.random) 0.5)))
               :weight (:weight t)}))
          valid)))

(defn build-bat-alive-distribution-data [results]
  (let [trials (get-all-individual-trials results)
        valid (filter #(and (:reached-80 %)
                            (:bat-alive-final %))
                      trials)
        tot-wt (reduce + (map :weight valid))]
    (if (or (empty? valid) (zero? tot-wt))
      []
      (let [bat-vals (map :bat-alive-final valid)
            min-val (js/Math.max 0 (apply min bat-vals))
            max-val (apply max bat-vals)
            edges (range min-val (+ max-val 2) 1)
            bins (keep (fn [lo]
                         (let [hi (+ lo 1)
                               in-bin (filter (fn [t]
                                                (let [v (:bat-alive-final t)]
                                                  (and (>= v lo) (< v hi))))
                                              valid)
                               bin-wt (reduce + (map :weight in-bin))]
                           (when (pos? bin-wt)
                             {:alive lo
                              :weight bin-wt
                              :p-val (* 100.0 (/ bin-wt tot-wt))})))
                       edges)
            running-sum (volatile! 0.0)]
        (mapv (fn [b]
                (vreset! running-sum (+ @running-sum (:p-val b)))
                (assoc b :cum-p (js/Math.min 100.0 @running-sum)))
              bins)))))

(defn score-and-sort-items [items config top-n]
  (let [valid-items (filter #(and (:acceptance-rate %)
                                   (not (js/isNaN (:acceptance-rate %))))
                            items)
        scored-items (mapv (fn [item]
                             (let [sum-res (survival/calculate-sum-residuals
                                            item config)]
                               (assoc item
                                      :sum-res sum-res
                                      :weight (/ 1.0 (+ sum-res 0.2)))))
                            valid-items)]
    (take top-n (sort-by :sum-res scored-items))))
