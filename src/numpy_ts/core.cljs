(ns numpy-ts.core
  (:require ["numpy-ts" :as np-ts]
            ["numpy-ts/core" :as np-core]))

;; Provide core creation and array manipulation functions
(def array (.-array np-ts))
(def zeros (.-zeros np-ts))
(def ones (.-ones np-ts))
(def arange (.-arange np-ts))
(def linspace (.-linspace np-ts))
(def full (.-full np-ts))
(def empty (.-empty np-ts))
(def meshgrid (.-meshgrid np-ts))
(def geomspace (.-geomspace np-ts))
(def reshape (.-reshape np-ts))

;; Array operations
(def add (.-add np-ts))
(def subtract (.-subtract np-ts))
(def multiply (.-multiply np-ts))
(def divide (.-divide np-ts))
(def exp (.-exp np-ts))
(def power (.-power np-ts))
(def log (.-log np-ts))
(def sqrt (.-sqrt np-ts))
(def abs (.-abs np-ts))

(def clip (.-clip np-ts))
(def maximum (.-maximum np-ts))
(def minimum (.-minimum np-ts))
(def where (.-where np-ts))
(def isinf (.-isinf np-ts))
(def isfinite (.-isfinite np-ts))
(def isnan (.-isnan np-ts))

;; Statistics & reductions
(def sum (.-sum np-ts))
(def mean (.-mean np-ts))
(def median (.-median np-ts))
(def percentile (.-percentile np-ts))
(def average (.-average np-ts))
(def prod (.-prod np-ts))
(def cumsum (.-cumsum np-ts))
(def unique (.-unique np-ts))
(def argsort (.-argsort np-ts))
(def sort (.-sort np-ts))

;; Array manipulation
(def concatenate (.-concatenate np-ts))

;; Constants
(def inf js/Infinity)
