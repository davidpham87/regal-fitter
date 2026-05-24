(ns cljs.numpy
  (:refer-clojure :exclude [array add subtract multiply divide exp power log sqrt abs
                             clip maximum minimum where isinf isfinite isnan
                             sum mean median percentile average prod cumsum unique argsort sort
                             concatenate size shape empty])
  (:require ["numpy-ts" :as np-ts]))

(def array np-ts/array)
(def zeros np-ts/zeros)
(def ones np-ts/ones)
(def arange np-ts/arange)
(def linspace np-ts/linspace)
(def full np-ts/full)
(def empty np-ts/empty)
(def meshgrid-raw np-ts/meshgrid)
(def geomspace np-ts/geomspace)
(def reshape np-ts/reshape)

(def add np-ts/add)
(def subtract np-ts/subtract)
(def multiply np-ts/multiply)
(def divide np-ts/divide)
(def exp np-ts/exp)
(def power np-ts/power)
(def log np-ts/log)
(def sqrt np-ts/sqrt)
(def abs np-ts/abs)

(def clip np-ts/clip)
(def maximum np-ts/maximum)
(def minimum np-ts/minimum)
(def where np-ts/where)
(def isinf np-ts/isinf)
(def isfinite np-ts/isfinite)
(def isnan np-ts/isnan)

(def sum np-ts/sum)
(def mean np-ts/mean)
(def median np-ts/median)
(def percentile np-ts/percentile)
(def average np-ts/average)
(def prod np-ts/prod)
(def cumsum np-ts/cumsum)
(def unique np-ts/unique)
(def argsort np-ts/argsort)
(def sort np-ts/sort)

(def concatenate np-ts/concatenate)
(def np-size np-ts/size)
(def np-shape np-ts/shape)

(def inf js/Infinity)

(defn nd-size [arr]
  (if arr (or (.-size arr) (.-length arr) 0) 0))

(defn nd-shape [arr]
  (if arr (or (.-shape arr) #js [(.-length arr)]) #js [0]))

(defn nd-to-array [arr]
  (if (and arr (fn? (.-toArray arr))) (.toArray ^js arr) arr))

(defn slice [arr start end]
  (cond
    (nil? arr) nil
    (and (fn? (.-slice arr)) (.-shape arr))
    (.slice ^js arr (str start ":" end))
    (fn? (.-slice arr)) (.slice ^js arr start end)
    :else arr))

(defn item [arr idx]
  (if (and arr (fn? (.-item arr))) (.item ^js arr idx) (aget arr idx)))

(defn set-block [target src start-idx]
  (let [target-data (.-data target)
        src-data (.-data src)
        shape (.-shape target)
        row-size (if (> (.-length shape) 1) (last (vec shape)) 1)
        offset (* start-idx row-size)]
    (.set target-data src-data offset)
    target))

(defn empty-float64 [shape]
  (let [sz (reduce * (vec shape))
        flat (js/Float64Array. sz)]
    (np-ts/reshape (np-ts/array flat) (clj->js shape))))

(defn full-float64 [shape val]
  (let [arr (empty-float64 shape)]
    (if (== val 0)
      arr
      (np-ts/add arr val))))

(defn meshgrid [arrays options]
  (apply np-ts/meshgrid (conj (cljs.core/vec arrays) (cljs.core/clj->js options))))
