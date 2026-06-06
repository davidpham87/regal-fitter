(ns webr.r-base.continuous
  "Continuous distribution wrappers for WebR.
   Covers: Normal, Student-t, Chi-squared, F, Exponential,
           Gamma, Beta, Weibull, Log-normal.
   Each function generates -code, step-builder, and ! executor."
  (:require [webr.core])
  (:require-macros [webr.macros :refer [def-r-wrapper]]))

;; ===========================================================================
;; Normal (dnorm pnorm qnorm rnorm)
;; ===========================================================================

(def-r-wrapper dnorm
  "Density of the Normal distribution.
   Returns list(density=<value>)."
  [[x 0] [mean 0] [sd 1] [log "FALSE"]]
  "list(density = dnorm(~a, mean=~a, sd=~a, log=~a))"
  "")

(def-r-wrapper pnorm
  "CDF (distribution function) of the Normal distribution.
   Returns list(prob=<value>)."
  [[q 0] [mean 0] [sd 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pnorm(~a, mean=~a, sd=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qnorm
  "Quantile function of the Normal distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [mean 0] [sd 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qnorm(~a, mean=~a, sd=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rnorm
  "Random deviates from the Normal distribution.
   Returns list(samples=<vector>)."
  [[n 1] [mean 0] [sd 1]]
  "list(samples = as.list(rnorm(~a, mean=~a, sd=~a)))"
  "")

;; ===========================================================================
;; Student-t  (dt pt qt rt)
;; ===========================================================================

(def-r-wrapper dt
  "Density of the Student t-distribution.
   Returns list(density=<value>)."
  [[x 0] [df 1] [log "FALSE"]]
  "list(density = dt(~a, df=~a, log=~a))"
  "")

(def-r-wrapper pt
  "CDF of the Student t-distribution.
   Returns list(prob=<value>)."
  [[q 0] [df 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pt(~a, df=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qt
  "Quantile function of the Student t-distribution.
   Returns list(quantile=<value>)."
  [[p 0.975] [df 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qt(~a, df=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rt
  "Random deviates from the Student t-distribution.
   Returns list(samples=<vector>)."
  [[n 1] [df 1]]
  "list(samples = as.list(rt(~a, df=~a)))"
  "")

;; ===========================================================================
;; Chi-squared  (dchisq pchisq qchisq rchisq)
;; ===========================================================================

(def-r-wrapper dchisq
  "Density of the Chi-squared distribution.
   Returns list(density=<value>)."
  [[x 1] [df 1] [log "FALSE"]]
  "list(density = dchisq(~a, df=~a, log=~a))"
  "")

(def-r-wrapper pchisq
  "CDF of the Chi-squared distribution.
   Returns list(prob=<value>)."
  [[q 1] [df 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pchisq(~a, df=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qchisq
  "Quantile function of the Chi-squared distribution.
   Returns list(quantile=<value>)."
  [[p 0.95] [df 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qchisq(~a, df=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rchisq
  "Random deviates from the Chi-squared distribution.
   Returns list(samples=<vector>)."
  [[n 1] [df 1]]
  "list(samples = as.list(rchisq(~a, df=~a)))"
  "")

;; ===========================================================================
;; F-distribution  (df-dist pf qf rf)
;; Named df-dist to avoid clash with the common `df` abbreviation.
;; ===========================================================================

(def-r-wrapper df-dist
  "Density of the F-distribution.
   Returns list(density=<value>)."
  [[x 1] [df1 1] [df2 1] [log "FALSE"]]
  "list(density = df(~a, df1=~a, df2=~a, log=~a))"
  "")

(def-r-wrapper pf
  "CDF of the F-distribution.
   Returns list(prob=<value>)."
  [[q 1] [df1 1] [df2 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pf(~a, df1=~a, df2=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qf
  "Quantile function of the F-distribution.
   Returns list(quantile=<value>)."
  [[p 0.95] [df1 1] [df2 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qf(~a, df1=~a, df2=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rf
  "Random deviates from the F-distribution.
   Returns list(samples=<vector>)."
  [[n 1] [df1 1] [df2 1]]
  "list(samples = as.list(rf(~a, df1=~a, df2=~a)))"
  "")

;; ===========================================================================
;; Exponential  (dexp pexp qexp rexp)
;; ===========================================================================

(def-r-wrapper dexp
  "Density of the Exponential distribution.
   Returns list(density=<value>)."
  [[x 1] [rate 1] [log "FALSE"]]
  "list(density = dexp(~a, rate=~a, log=~a))"
  "")

(def-r-wrapper pexp
  "CDF of the Exponential distribution.
   Returns list(prob=<value>)."
  [[q 1] [rate 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pexp(~a, rate=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qexp
  "Quantile function of the Exponential distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [rate 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qexp(~a, rate=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rexp
  "Random deviates from the Exponential distribution.
   Returns list(samples=<vector>)."
  [[n 1] [rate 1]]
  "list(samples = as.list(rexp(~a, rate=~a)))"
  "")

;; ===========================================================================
;; Gamma  (dgamma pgamma qgamma rgamma)
;; ===========================================================================

(def-r-wrapper dgamma
  "Density of the Gamma distribution.
   Returns list(density=<value>)."
  [[x 1] [shape 1] [rate 1] [log "FALSE"]]
  "list(density = dgamma(~a, shape=~a, rate=~a, log=~a))"
  "")

(def-r-wrapper pgamma
  "CDF of the Gamma distribution.
   Returns list(prob=<value>)."
  [[q 1] [shape 1] [rate 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pgamma(~a, shape=~a, rate=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qgamma
  "Quantile function of the Gamma distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [shape 1] [rate 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qgamma(~a, shape=~a, rate=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rgamma
  "Random deviates from the Gamma distribution.
   Returns list(samples=<vector>)."
  [[n 1] [shape 1] [rate 1]]
  "list(samples = as.list(rgamma(~a, shape=~a, rate=~a)))"
  "")

;; ===========================================================================
;; Beta  (dbeta pbeta qbeta rbeta)
;; ===========================================================================

(def-r-wrapper dbeta
  "Density of the Beta distribution.
   Returns list(density=<value>)."
  [[x 0.5] [shape1 1] [shape2 1] [log "FALSE"]]
  "list(density = dbeta(~a, shape1=~a, shape2=~a, log=~a))"
  "")

(def-r-wrapper pbeta
  "CDF of the Beta distribution.
   Returns list(prob=<value>)."
  [[q 0.5] [shape1 1] [shape2 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pbeta(~a, shape1=~a, shape2=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qbeta
  "Quantile function of the Beta distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [shape1 1] [shape2 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qbeta(~a, shape1=~a, shape2=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rbeta
  "Random deviates from the Beta distribution.
   Returns list(samples=<vector>)."
  [[n 1] [shape1 1] [shape2 1]]
  "list(samples = as.list(rbeta(~a, shape1=~a, shape2=~a)))"
  "")

;; ===========================================================================
;; Weibull  (dweibull pweibull qweibull rweibull)
;; ===========================================================================

(def-r-wrapper dweibull
  "Density of the Weibull distribution.
   Returns list(density=<value>)."
  [[x 1] [shape 1] [scale 1] [log "FALSE"]]
  "list(density = dweibull(~a, shape=~a, scale=~a, log=~a))"
  "")

(def-r-wrapper pweibull
  "CDF of the Weibull distribution.
   Returns list(prob=<value>)."
  [[q 1] [shape 1] [scale 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = pweibull(~a, shape=~a, scale=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qweibull
  "Quantile function of the Weibull distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [shape 1] [scale 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qweibull(~a, shape=~a, scale=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rweibull
  "Random deviates from the Weibull distribution.
   Returns list(samples=<vector>)."
  [[n 1] [shape 1] [scale 1]]
  "list(samples = as.list(rweibull(~a, shape=~a, scale=~a)))"
  "")

;; ===========================================================================
;; Log-normal  (dlnorm plnorm qlnorm rlnorm)
;; ===========================================================================

(def-r-wrapper dlnorm
  "Density of the Log-normal distribution.
   Returns list(density=<value>)."
  [[x 1] [meanlog 0] [sdlog 1] [log "FALSE"]]
  "list(density = dlnorm(~a, meanlog=~a, sdlog=~a, log=~a))"
  "")

(def-r-wrapper plnorm
  "CDF of the Log-normal distribution.
   Returns list(prob=<value>)."
  [[q 1] [meanlog 0] [sdlog 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(prob = plnorm(~a, meanlog=~a, sdlog=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper qlnorm
  "Quantile function of the Log-normal distribution.
   Returns list(quantile=<value>)."
  [[p 0.5] [meanlog 0] [sdlog 1] [lower.tail "TRUE"] [log.p "FALSE"]]
  "list(quantile = qlnorm(~a, meanlog=~a, sdlog=~a, lower.tail=~a, log.p=~a))"
  "")

(def-r-wrapper rlnorm
  "Random deviates from the Log-normal distribution.
   Returns list(samples=<vector>)."
  [[n 1] [meanlog 0] [sdlog 1]]
  "list(samples = as.list(rlnorm(~a, meanlog=~a, sdlog=~a)))"
  "")
