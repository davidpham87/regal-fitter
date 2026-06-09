(ns cljs.numpy-random
  (:require ["numpy-ts" :as np-ts]))

(defn default-rng
  ([] (.default_rng ^js np-ts/random))
  ([seed] (.default_rng ^js np-ts/random seed)))

(defn uniform [rng low high size]
  (.uniform rng low high size))

(defn random [rng size]
  (.random rng size))

(comment
  (default-rng 100))
