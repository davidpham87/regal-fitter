(ns r-base.norm
  "Normal distribution wrappers for WebR.
   Generates -code, step-builder, and ! executor for each of:
   dnorm, pnorm, qnorm, rnorm.

   Boolean R args (log, lower.tail, log.p) must be passed as the
   strings \"TRUE\" or \"FALSE\" — R is case-sensitive."
  (:require [webr.core])
  (:require-macros [webr.macros :refer [def-r-wrapper]]))

;; ---------------------------------------------------------------------------
;; dnorm — density
;; ---------------------------------------------------------------------------
(def-r-wrapper dnorm
  "Density of the Normal distribution.
   Returns list(density=<value>)."
  [[x 0] [mean 0] [sd 1] [log "FALSE"]]
  "list(density = dnorm(~a, mean=~a, sd=~a, log=~a))"
  "")

;; ---------------------------------------------------------------------------
;; pnorm — CDF
;; ---------------------------------------------------------------------------
(def-r-wrapper pnorm
  "CDF (distribution function) of the Normal distribution.
   Returns list(prob=<value>)."
  [[q 0] [mean 0] [sd 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pnorm(~a, mean=~a, sd=~a, lower.tail=~a, log.p=~a))"
  "")

;; ---------------------------------------------------------------------------
;; qnorm — quantile
;; ---------------------------------------------------------------------------
(def-r-wrapper qnorm
  "Quantile function of the Normal distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [mean 0] [sd 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qnorm(~a, mean=~a, sd=~a, lower.tail=~a, log.p=~a))"
  "")

;; ---------------------------------------------------------------------------
;; rnorm — random samples
;; ---------------------------------------------------------------------------
(def-r-wrapper rnorm
  "Random deviates from the Normal distribution.
   Returns list(samples=<vector>)."
  [[n 1] [mean 0] [sd 1]]
  "list(samples = as.list(rnorm(~a, mean=~a, sd=~a)))"
  "")
