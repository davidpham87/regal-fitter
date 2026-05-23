(ns numpy-ts.random
  (:require ["numpy-ts" :as np-ts]))

(defn default-rng
  ([] (.default_rng (.-random np-ts)))
  ([seed] (.default_rng (.-random np-ts) seed)))

(defn uniform [rng low high size]
  (.uniform rng low high size))

(defn random [rng size]
  (.random rng size))
