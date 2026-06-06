(ns webr.r-base.discrete
  "Discrete distribution wrappers for WebR.
   Covers: Binomial, Poisson, Negative Binomial,
           Geometric, Hypergeometric.
   Each function generates -code, step-builder, and ! executor."
  (:require [webr.core])
  (:require-macros [webr.macros :refer [def-r-wrapper]]))

;; ===========================================================================
;; Binomial  (dbinom pbinom qbinom rbinom)
;; ===========================================================================

(def-r-wrapper dbinom
  "Density of the Binomial distribution.
   Returns list(prob=<value>)."
  [[x 0] [size 10] [prob 0.5] [log "FALSE"]]
  "list(prob = dbinom(~a, size=~a, prob=~a, log=~a))"
  "")

(def-r-wrapper pbinom
  "CDF of the Binomial distribution.
   Returns list(prob=<value>)."
  [[q 5] [size 10] [prob 0.5] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pbinom(~a, size=~a, prob=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qbinom
  "Quantile function of the Binomial distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [size 10] [prob 0.5] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qbinom(~a, size=~a, prob=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rbinom
  "Random deviates from the Binomial distribution.
   Returns list(samples=<vector>)."
  [[n 1] [size 10] [prob 0.5]]
  "list(samples = as.list(rbinom(~a, size=~a, prob=~a)))"
  "")

;; ===========================================================================
;; Poisson  (dpois ppois qpois rpois)
;; ===========================================================================

(def-r-wrapper dpois
  "Density of the Poisson distribution.
   Returns list(prob=<value>)."
  [[x 0] [lambda 1] [log "FALSE"]]
  "list(prob = dpois(~a, lambda=~a, log=~a))"
  "")

(def-r-wrapper ppois
  "CDF of the Poisson distribution.
   Returns list(prob=<value>)."
  [[q 0] [lambda 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = ppois(~a, lambda=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qpois
  "Quantile function of the Poisson distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [lambda 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qpois(~a, lambda=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rpois
  "Random deviates from the Poisson distribution.
   Returns list(samples=<vector>)."
  [[n 1] [lambda 1]]
  "list(samples = as.list(rpois(~a, lambda=~a)))"
  "")

;; ===========================================================================
;; Negative Binomial  (dnbinom pnbinom qnbinom rnbinom)
;; ===========================================================================

(def-r-wrapper dnbinom
  "Density of the Negative Binomial distribution.
   Returns list(prob=<value>)."
  [[x 0] [size 1] [prob 0.5] [log "FALSE"]]
  "list(prob = dnbinom(~a, size=~a, prob=~a, log=~a))"
  "")

(def-r-wrapper pnbinom
  "CDF of the Negative Binomial distribution.
   Returns list(prob=<value>)."
  [[q 0] [size 1] [prob 0.5] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pnbinom(~a, size=~a, prob=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qnbinom
  "Quantile function of the Negative Binomial distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [size 1] [prob 0.5] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qnbinom(~a, size=~a, prob=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rnbinom
  "Random deviates from the Negative Binomial distribution.
   Returns list(samples=<vector>)."
  [[n 1] [size 1] [prob 0.5]]
  "list(samples = as.list(rnbinom(~a, size=~a, prob=~a)))"
  "")

;; ===========================================================================
;; Geometric  (dgeom pgeom qgeom rgeom)
;; ===========================================================================

(def-r-wrapper dgeom
  "Density of the Geometric distribution.
   Returns list(prob=<value>)."
  [[x 0] [prob 0.5] [log "FALSE"]]
  "list(prob = dgeom(~a, prob=~a, log=~a))"
  "")

(def-r-wrapper pgeom
  "CDF of the Geometric distribution.
   Returns list(prob=<value>)."
  [[q 0] [prob 0.5] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pgeom(~a, prob=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qgeom
  "Quantile function of the Geometric distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [prob 0.5] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qgeom(~a, prob=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rgeom
  "Random deviates from the Geometric distribution.
   Returns list(samples=<vector>)."
  [[n 1] [prob 0.5]]
  "list(samples = as.list(rgeom(~a, prob=~a)))"
  "")

;; ===========================================================================
;; Hypergeometric  (dhyper phyper qhyper rhyper)
;; m = number of white balls; n = number of black balls; k = balls drawn
;; ===========================================================================

(def-r-wrapper dhyper
  "Density of the Hypergeometric distribution.
   Returns list(prob=<value>).
   Params: x drawn white balls; m white total; n black total; k drawn."
  [[x 2] [m 5] [n 5] [k 3] [log "FALSE"]]
  "list(prob = dhyper(~a, m=~a, n=~a, k=~a, log=~a))"
  "")

(def-r-wrapper phyper
  "CDF of the Hypergeometric distribution.
   Returns list(prob=<value>)."
  [[q 2] [m 5] [n 5] [k 3] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = phyper(~a, m=~a, n=~a, k=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qhyper
  "Quantile function of the Hypergeometric distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [m 5] [n 5] [k 3] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qhyper(~a, m=~a, n=~a, k=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rhyper
  "Random deviates from the Hypergeometric distribution.
   Returns list(samples=<vector>)."
  [[nn 1] [m 5] [n 5] [k 3]]
  "list(samples = as.list(rhyper(~a, m=~a, n=~a, k=~a)))"
  "")
