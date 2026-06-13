(ns app.visualization.resampling
  (:require [cljs.numpy :as np]
            [cljs.numpy-random :as np-random]
            [app.visualization.survival :as survival]))

(defn normalize-rates [items]
  (let [valid (filter #(and (:acceptance-rate %)
                            (not (js/isNaN (:acceptance-rate %))))
                      items)
        sum (reduce + (map :acceptance-rate valid))]
    (if (pos? sum)
      (mapv (fn [item]
              (assoc item :norm-rate (/ (:acceptance-rate item) sum)))
            valid)
      [])))

(defn build-cdf [items]
  (let [running (atom 0.0)]
    (mapv (fn [item]
            (let [c (swap! running + (:norm-rate item))]
              (assoc item :cum-prob c)))
          items)))

(defn sample-one [cdf r]
  (or (some (fn [item]
              (when (>= (:cum-prob item) r)
                item))
            cdf)
      (last cdf)))

(defn sample-combos [items config]
  (let [n-samples (or (:n-sims-aggregation config) 1000)
        seed (or (:seed config) 20260508)
        rng (np-random/default-rng seed)
        normalized (normalize-rates items)
        cdf (build-cdf normalized)]
    (if (empty? cdf)
      []
      (let [rands (np/nd-to-array
                   (np-random/uniform rng 0.0 1.0 n-samples))]
        (mapv #(sample-one cdf %) rands)))))

(defn score-sampled-combos [raw config]
  (let [scored (mapv (fn [c]
                       (assoc c
                              :sum-res (survival/calculate-sum-residuals
                                        c config)
                              :weight 1.0))
                     raw)]
    (sort-by :sum-res scored)))
