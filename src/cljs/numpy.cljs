(ns cljs.numpy
  (:refer-clojure :exclude [array add subtract multiply divide exp power log sqrt abs
                             clip maximum minimum where isinf isfinite isnan
                             sum mean median percentile average prod cumsum unique argsort sort
                             concatenate size shape empty])
  (:require ["numpy-ts" :as np_ts]))

(def array np_ts/array)
(def zeros np_ts/zeros)
(def ones np_ts/ones)
(def arange np_ts/arange)
(def linspace np_ts/linspace)
(def full np_ts/full)
(def empty np_ts/empty)
(def meshgrid-raw np_ts/meshgrid)
(def geomspace np_ts/geomspace)
(def reshape np_ts/reshape)

(def add np_ts/add)
(def subtract np_ts/subtract)
(def multiply np_ts/multiply)
(def divide np_ts/divide)
(def exp np_ts/exp)
(def power np_ts/power)
(def log np_ts/log)
(def sqrt np_ts/sqrt)
(def abs np_ts/abs)

(def clip np_ts/clip)
(def maximum np_ts/maximum)
(def minimum np_ts/minimum)
(def where np_ts/where)
(def isinf np_ts/isinf)
(def isfinite np_ts/isfinite)
(def isnan np_ts/isnan)

(def sum np_ts/sum)
(def mean np_ts/mean)
(def median np_ts/median)
(def percentile np_ts/percentile)
(def average np_ts/average)
(def prod np_ts/prod)
(def cumsum np_ts/cumsum)
(def unique np_ts/unique)
(def argsort np_ts/argsort)
(def sort np_ts/sort)

(def concatenate np_ts/concatenate)
(def np-size np_ts/size)
(def np-shape np_ts/shape)

(def inf js/Infinity)

(defn nd-size [arr]
  (if arr (or (.-size arr) (.-length arr) 0) 0))

(defn nd-shape [arr]
  (if arr (or (.-shape arr) #js [(.-length arr)]) #js [0]))

(defn nd-to-array [arr]
  (if (and arr (fn? (.-toArray arr))) (.toArray ^js arr) arr))

(defn slice [arr start end]
  (if (and arr (fn? (.-slice arr))) (.slice ^js arr start end) arr))

(defn item [arr idx]
  (if (and arr (fn? (.-item arr))) (.item ^js arr idx) (aget arr idx)))

(defn set-block [target src start-idx]
  (if (and target (fn? (.-set target)))
    (.set ^js target src start-idx)
    (let [s (nd-size src)]
      (dotimes [i s] (aset target (+ start-idx i) (aget src i))))))

(defn empty-float64 [shape]
  (let [sz (reduce * (vec shape))
        flat (js/Float64Array. sz)]
    (np_ts/reshape (np_ts/array flat) (clj->js shape))))

(defn full-float64 [shape val]
  (let [arr (empty-float64 shape)]
    (if (== val 0)
      arr
      (np_ts/add arr val))))

(defn meshgrid [arrays options]
  (np_ts/meshgrid (cljs.core/to-array arrays) (clj->js options)))
