(ns r-base.unif
  "Uniform distribution wrappers for WebR.
   Generates -code, step-builder, and ! executor for each of:
   dunif, punif, qunif, runif."
  (:require [webr.core])
  (:require-macros [webr.macros :refer [def-r-wrapper]]))

;; ---------------------------------------------------------------------------
;; dunif — density
;; ---------------------------------------------------------------------------
(def-r-wrapper dunif
  "Density of the Uniform distribution.
   Returns list(density=<value>)."
  [[x 0.5] [min 0] [max 1] [log "FALSE"]]
  "list(density = dunif(~a, min=~a, max=~a, log=~a))"
  "")

;; ---------------------------------------------------------------------------
;; punif — CDF
;; ---------------------------------------------------------------------------
(def-r-wrapper punif
  "CDF of the Uniform distribution.
   Returns list(prob=<value>)."
  [[q 0.5] [min 0] [max 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = punif(~a, min=~a, max=~a, lower.tail=~a, log.p=~a))"
  "")

;; ---------------------------------------------------------------------------
;; qunif — quantile
;; ---------------------------------------------------------------------------
(def-r-wrapper qunif
  "Quantile function of the Uniform distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [min 0] [max 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qunif(~a, min=~a, max=~a, lower.tail=~a, log.p=~a))"
  "")

;; ---------------------------------------------------------------------------
;; runif — random samples
;; ---------------------------------------------------------------------------
(def-r-wrapper runif
  "Random deviates from the Uniform distribution.
   Returns list(samples=<vector>)."
  [[n 1] [min 0] [max 1]]
  "list(samples = as.list(runif(~a, min=~a, max=~a)))"
  "")
