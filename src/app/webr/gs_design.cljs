(ns app.webr.gs-design
  (:require [app.webr :as webr]
            [clojure.string :as str]))

(defn generate-gs-design!
  "Executes gsDesign function in WebR to generate group sequential boundaries.
   
   Args:
   - params: Map containing :k, :alpha, :beta, :test-type, :sfu, :sfl.
   - on-success: Callback fn [results-map] invoked on completion.
   - on-error: Callback fn [error-object] invoked on failure.
   
   Builds the R script dynamically, runs it in WebR, and converts R outputs
   into a structured ClojureScript map."
  ([params]
   (generate-gs-design! params webr/on-done webr/on-error))
  ([params on-success on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-success) "on-success callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [k (or (:k params) 3)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         test-type (or (:test-type params) 4)
         sfu (or (:sfu params) "sfLDOF")
         sfl (or (:sfl params) "sfLDOF")
         r-code (str "library(gsDesign)\n"
                     "x <- gsDesign(k=" k ", test.type=" test-type
                     ", alpha=" alpha ", beta=" beta
                     ", sfu=" sfu ", sfl=" sfl ")\n"
                     "list(timing=x$timing, "
                     "upper_bounds=x$upper$bound, "
                     "lower_bounds=x$lower$bound, "
                     "n_I=x$n.I)")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)
                timing (:timing res-map)
                upper-bounds (:upper_bounds res-map)
                lower-bounds (:lower_bounds res-map)
                n-i (:n_I res-map)]
            (on-success {:timing timing
                         :upper-bounds upper-bounds
                         :lower-bounds lower-bounds
                         :n-i n-i
                         :output output-lines}))
          (catch :default e
            (on-error e))))
      on-error))))

(defn get-gs-design-summary!
  "Computes and returns the text summary of a group sequential design.
   
   Args:
   - params: Map containing R parameter settings for gsDesign.
   - on-success: Callback fn [summary-text] invoked with the printed summary.
   - on-error: Callback fn [error-object] invoked on failure.
   
   Constructs the gsDesign command, captures its printed output using R's
   capture.output function, and returns the result as a raw string."
  ([params]
   (get-gs-design-summary! params webr/on-done webr/on-error))
  ([params on-success on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-success) "on-success callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [k (or (:k params) 3)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         test-type (or (:test-type params) 4)
         sfu (or (:sfu params) "sfLDOF")
         sfl (or (:sfl params) "sfLDOF")
         r-code (str "library(gsDesign)\n"
                     "x <- gsDesign(k=" k ", test.type=" test-type
                     ", alpha=" alpha ", beta=" beta
                     ", sfu=" sfu ", sfl=" sfl ")\n"
                     "paste(capture.output(print(x)), collapse='\n')")]
     (webr/eval-r-code!
      r-code
      (fn [_summary-lines result-val]
        (try
          (on-success result-val)
          (catch :default e
            (on-error e))))
      on-error))))

(defn gs-design
  "Executes the R function gsDesign to generate group sequential boundaries.
   
   Args:
   - params: Map containing R parameter settings:
     :k (int, number of analyses)
     :test-type (int, 1-sided/2-sided type)
     :alpha (double, Type I error)
     :beta (double, Type II error)
     :sfu (string/expression, efficacy spending function)
     :sfl (string/expression, futility spending function)
     :timing (vector of information fractions)
     :n-i (expected final event count)
   - on-done: Callback fn [output-lines result-val] on success (optional).
   - on-error: Callback fn [error] on failure (optional)."
  ([params]
   (gs-design params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [k (or (:k params) 3)
         test-type (or (:test-type params) 4)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         sfu (or (:sfu params) "sfLDOF")
         sfl (or (:sfl params) "sfLDOF")
         timing (if (:timing params) (str "c(" (str/join "," (:timing params)) ")") "NULL")
         n-i (or (:n-i params) "NULL")
         r-code (str "library(gsDesign)\n"
                     "x <- gsDesign(k=" k
                     ", test.type=" test-type
                     ", alpha=" alpha
                     ", beta=" beta
                     ", sfu=" sfu
                     ", sfl=" sfl
                     ", timing=" timing
                     ", n.I=" n-i ")\n"
                     "list(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, "
                     "lower_bounds=x$lower$bound, n_I=x$n.I)")]
     (webr/eval-r-code! r-code on-done on-error))))

(defn gs-probability
  "Executes the R function gsProbability to calculate boundary crossing probabilities.
   
   Args:
   - params: Map containing R parameter settings:
     :theta (vector of standardized treatment effects)
     :n-i (vector of information fractions)
     :a (vector of lower boundaries)
     :b (vector of upper boundaries)
   - on-done: Callback fn [output-lines result-val] on success (optional).
   - on-error: Callback fn [error] on failure (optional)."
  ([params]
   (gs-probability params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [theta (if (:theta params) (str "c(" (str/join "," (:theta params)) ")") "0")
         n-i (if (:n-i params) (str "c(" (str/join "," (:n-i params)) ")") "1:3")
         a (if (:a params) (str "c(" (str/join "," (:a params)) ")") "c(-1.5, -0.5, 0.5)")
         b (if (:b params) (str "c(" (str/join "," (:b params)) ")") "c(2.5, 2.0, 1.5)")
         r-code (str "library(gsDesign)\n"
                     "x <- gsProbability(theta=" theta
                     ", n.I=" n-i
                     ", a=" a
                     ", b=" b ")\n"
                     "list(theta=x$theta, n_I=x$n.I, upper_prob=x$upper$prob, "
                     "lower_prob=x$lower$prob)")]
     (webr/eval-r-code! r-code on-done on-error))))

(defn gs-cp
  "Executes the R function gsCP to calculate conditional power.
   
   Args:
   - params: Map containing R parameter settings:
     :k (int, total analyses)
     :test-type (int, design type)
     :alpha (double, Type I error)
     :beta (double, Type II error)
     :i (int, analysis index at which conditioning occurs)
     :zi (double, observed z-value at analysis i)
     :theta (double, hypothetical effect size)
   - on-done: Callback fn [output-lines result-val] on success (optional).
   - on-error: Callback fn [error] on failure (optional)."
  ([params]
   (gs-cp params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [k (or (:k params) 3)
         test-type (or (:test-type params) 4)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         i (or (:i params) 1)
         zi (or (:zi params) 1.96)
         theta (or (:theta params) "NULL")
         r-code (str "library(gsDesign)\n"
                     "x <- gsDesign(k=" k ", test.type=" test-type
                     ", alpha=" alpha ", beta=" beta ")\n"
                     "cp <- gsCP(x, i=" i ", zi=" zi ", theta=" theta ")\n"
                     "list(cp=cp$cp, theta=cp$theta, r=cp$r)")]
     (webr/eval-r-code! r-code on-done on-error))))

(defn n-normal
  "Executes the R function nNormal to calculate sample size for normal endpoints.
   
   Args:
   - params: Map containing R parameter settings:
     :delta1 (double, alternative hypothesis effect size)
     :sd (double, standard deviation)
     :alpha (double, Type I error)
     :beta (double, Type II error)
     :ratio (double, randomization ratio)
   - on-done: Callback fn [output-lines result-val] on success (optional).
   - on-error: Callback fn [error] on failure (optional)."
  ([params]
   (n-normal params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [delta1 (or (:delta1 params) 1.0)
         sd (or (:sd params) 1.0)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         ratio (or (:ratio params) 1.0)
         r-code (str "library(gsDesign)\n"
                     "n <- nNormal(delta1=" delta1
                     ", sd=" sd
                     ", alpha=" alpha
                     ", beta=" beta
                     ", ratio=" ratio ")\n"
                     "list(n=n)")]
     (webr/eval-r-code! r-code on-done on-error))))

(defn n-binomial
  "Executes the R function nBinomial to calculate sample size for binomial endpoints.
   
   Args:
   - params: Map containing R parameter settings:
     :p1 (double, control group event rate)
     :p2 (double, experimental group event rate)
     :alpha (double, Type I error)
     :beta (double, Type II error)
     :ratio (double, randomization ratio)
   - on-done: Callback fn [output-lines result-val] on success (optional).
   - on-error: Callback fn [error] on failure (optional)."
  ([params]
   (n-binomial params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [p1 (or (:p1 params) 0.2)
         p2 (or (:p2 params) 0.1)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         ratio (or (:ratio params) 1.0)
         r-code (str "library(gsDesign)\n"
                     "n <- nBinomial(p1=" p1
                     ", p2=" p2
                     ", alpha=" alpha
                     ", beta=" beta
                     ", ratio=" ratio ")\n"
                     "list(n=n)")]
     (webr/eval-r-code! r-code on-done on-error))))

(defn n-survival
  "Executes the R function nSurvival to calculate sample size for survival endpoints.
   
   Args:
   - params: Map containing R parameter settings:
     :lambda1 (double/vector, control group hazard rate)
     :lambda2 (double/vector, experimental group hazard rate)
     :alpha (double, Type I error)
     :beta (double, Type II error)
     :ratio (double, randomization ratio)
   - on-done: Callback fn [output-lines result-val] on success (optional).
   - on-error: Callback fn [error] on failure (optional)."
  ([params]
   (n-survival params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [lambda1 (or (:lambda1 params) 0.1)
         lambda2 (or (:lambda2 params) 0.07)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         ratio (or (:ratio params) 1.0)
         r-code (str "library(gsDesign)\n"
                     "n <- nSurvival(lambda1=" lambda1
                     ", lambda2=" lambda2
                     ", alpha=" alpha
                     ", beta=" beta
                     ", ratio=" ratio ")\n"
                     "list(nEvents=n$nEvents, n=n$n)")]
     (webr/eval-r-code! r-code on-done on-error))))

(defn gs-bound
  "Executes R function gsBound to calculate sequential boundary values.
   
   Args:
   - params: Map containing R parameter settings:
     :i (int, analysis index)
     :theta (double, effect size)
     :a (double, lower boundary value)
     :b (double, upper boundary value)
   - on-done: Callback fn [output-lines result-val] (optional).
   - on-error: Callback fn [error] (optional)."
  ([params]
   (gs-bound params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [i (or (:i params) 1)
         theta (or (:theta params) 0.0)
         a (or (:a params) -1.96)
         b (or (:b params) 1.96)
         r-code (str "library(gsDesign)\n"
                     "x <- gsBound(i=" i
                     ", theta=" theta
                     ", a=" a
                     ", b=" b ")\n"
                     "list(boundary=x)")]
     (js/console.log "Executing gsBound calculation in WebR with theta:" theta)
     (webr/eval-r-code! r-code on-done on-error))))

(defn sf-ld-of
  "Executes R function sfLDOF (Lan-DeMets O'Brien-Fleming spending function).
   
   Args:
   - params: Map containing R parameter settings:
     :alpha (double, Type I or II error)
     :t (double/vector, information fraction)
     :param (optional R parameter list)
   - on-done: Callback fn [output-lines result-val] (optional).
   - on-error: Callback fn [error] (optional)."
  ([params]
   (sf-ld-of params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [alpha (or (:alpha params) 0.025)
         t (if (:t params) (str "c(" (str/join "," (:t params)) ")") "0.5")
         param (or (:param params) "NULL")
         r-code (str "library(gsDesign)\n"
                     "x <- sfLDOF(alpha=" alpha
                     ", t=" t
                     ", param=" param ")\n"
                     "list(spend=x$spend, name=x$name)")]
     (js/console.log "Executing sfLDOF spending function calculation in WebR")
     (webr/eval-r-code! r-code on-done on-error))))

(defn sf-ld-pocock
  "Executes R function sfLDPocock (Lan-DeMets Pocock spending function).
   
   Args:
   - params: Map containing R parameter settings:
     :alpha (double, Type I or II error)
     :t (double/vector, information fraction)
     :param (optional R parameter list)
   - on-done: Callback fn [output-lines result-val] (optional).
   - on-error: Callback fn [error] (optional)."
  ([params]
   (sf-ld-pocock params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [alpha (or (:alpha params) 0.025)
         t (if (:t params) (str "c(" (str/join "," (:t params)) ")") "0.5")
         param (or (:param params) "NULL")
         r-code (str "library(gsDesign)\n"
                     "x <- sfLDPocock(alpha=" alpha
                     ", t=" t
                     ", param=" param ")\n"
                     "list(spend=x$spend, name=x$name)")]
     (js/console.log "Executing sfLDPocock spending function calculation in WebR")
     (webr/eval-r-code! r-code on-done on-error))))

(defn sf-hsd
  "Executes R function sfHSD (Hwang-Shih-DeCani spending function).
   
   Args:
   - params: Map containing R parameter settings:
     :alpha (double, Type I or II error)
     :t (double/vector, information fraction)
     :param (optional R parameter list)
   - on-done: Callback fn [output-lines result-val] (optional).
   - on-error: Callback fn [error] (optional)."
  ([params]
   (sf-hsd params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [alpha (or (:alpha params) 0.025)
         t (if (:t params) (str "c(" (str/join "," (:t params)) ")") "0.5")
         param (or (:param params) "-4")
         r-code (str "library(gsDesign)\n"
                     "x <- sfHSD(alpha=" alpha
                     ", t=" t
                     ", param=" param ")\n"
                     "list(spend=x$spend, name=x$name)")]
     (js/console.log "Executing sfHSD spending function calculation in WebR")
     (webr/eval-r-code! r-code on-done on-error))))

(defn sf-power
  "Executes R function sfPower (Kim-DeMets Power spending function).
   
   Args:
   - params: Map containing R parameter settings:
     :alpha (double, Type I or II error)
     :t (double/vector, information fraction)
     :param (optional R parameter list)
   - on-done: Callback fn [output-lines result-val] (optional).
   - on-error: Callback fn [error] (optional)."
  ([params]
   (sf-power params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [alpha (or (:alpha params) 0.025)
         t (if (:t params) (str "c(" (str/join "," (:t params)) ")") "0.5")
         param (or (:param params) "3")
         r-code (str "library(gsDesign)\n"
                     "x <- sfPower(alpha=" alpha
                     ", t=" t
                     ", param=" param ")\n"
                     "list(spend=x$spend, name=x$name)")]
     (js/console.log "Executing sfPower spending function calculation in WebR")
     (webr/eval-r-code! r-code on-done on-error))))
