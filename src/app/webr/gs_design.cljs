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
                     "paste(capture.output(print(x)), collapse='\\n')")]
     (webr/eval-r-code!
      r-code
      (fn [_summary-lines result-val]
        (try
          (on-success result-val)
          (catch :default e
            (on-error e))))
      on-error))))

(defn gs-design
  """Executes R function gsDesign in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :sfu
     :sfl
     :timing
     :n-I
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-design params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsDesign via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         sfu (or (get params :sfu) '"sfLDOF"')
         sfl (or (get params :sfl) '"sfLDOF"')
         timing (or (get params :timing) "NULL")
         n-I (or (get params :n-I) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ", "
                     sfu "=" sfu ", " sfl "=" sfl ", " timing "=" timing ", "
                     n-I "=" n-I ")") "\n"
                     (str "list(" k "=x$" k ", " timing "=x$" timing ",
                     upper_bounds=x$upper$bound, lower_bounds=x$lower$bound,
                     n_I=x$" n-I ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-probability
  """Executes R function gsProbability in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :theta
     :n-I
     :a
     :b
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-probability params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsProbability via WebR context.")
   (let [
         theta (or (get params :theta) 0)
         n-I (or (get params :n-I) "1:3")
         a (or (get params :a) "c(-1.5, -0.5, 0.5)")
         b (or (get params :b) "c(2.5, 2.0, 1.5)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsPro" "b a b" "ility(" "thet" " a " "="
                     "thet" " a " ", " n-I "=" n-I ", " a "=" a ", " b "=" b
                     ")") "\n"
                     (str "list(" "thet" " a " "=x$" "thet" " a " ", n_I=x$"
                     n-I ", upper_pro" b "=x$upper$pro" b ", lower_pro" b
                     "=x$lower$pro" b ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-bound
  """Executes R function gsBound in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :i
     :theta
     :a
     :b
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-bound params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsBound via WebR context.")
   (let [
         i (or (get params :i) 1)
         theta (or (get params :theta) 0.0)
         a (or (get params :a) -1.96)
         b (or (get params :b) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsBound(" i "=" i ", " "thet" " a " "=" "thet"
                     " a " ", " a "=" a ", " b "=" b ")") "\n"
                     (str "l" i "st(" b "ound" a "ry=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-bound1
  """Executes R function gsBound1 in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :theta
     :a
     :b
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-bound1 params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsBound1 via WebR context.")
   (let [
         theta (or (get params :theta) 0.0)
         a (or (get params :a) -1.96)
         b (or (get params :b) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsBound1(" "thet" " a " "=" "thet" " a " ", "
                     a "=" a ", " b "=" b ")") "\n"
                     (str "list(" b "ound" a "ry=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sequential-p-value
  """Executes R function sequentialPValue in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :otc
     :index
     :zi
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sequential-p-value params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sequentialPValue via WebR context.")
   (let [
         otc (or (get params :otc) "NULL")
         index (or (get params :index) 1)
         zi (or (get params :zi) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- sequentialPValue(" otc "=" otc ", " index "="
                     index ", " zi "=" zi ")") "\n"
                     (str "list(pValue=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-bound-summary
  """Executes R function gsBoundSummary in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-bound-summary params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsBoundSummary via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "summary_table <- gsBoundSummary(x)") "\n"
                     (str "paste(capture.output(print(summary_table)),
                     collapse='\n')") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn xprint
  """Executes R function xprint in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (xprint params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function xprint via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "summary_table <- gsBoundSummary(x)") "\n"
                     (str "paste(capture.output(xprint(summary_table)),
                     collapse='\n')") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-b-value
  """Executes R function gsBValue in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-b-value params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsBValue via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsBValue(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(bValue=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-delta
  """Executes R function gsDelta in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-delta params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsDelta via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDel" t "a(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(del" t "a=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-rr
  """Executes R function gsRR in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-rr params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsRR via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsRR(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(rr=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-hr
  """Executes R function gsHR in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-hr params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsHR via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsHR(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(hr=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-cpz
  """Executes R function gsCPz in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-cpz params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsCPz via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsCP" z "(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(cp" z "=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-normal
  """Executes R function nNormal in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :delta1
     :sd
     :alpha
     :beta
     :ratio
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-normal params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nNormal via WebR context.")
   (let [
         delta1 (or (get params :delta1) 1.0)
         sd (or (get params :sd) 1.0)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         ratio (or (get params :ratio) 1.0)
         r-code (str "library(gsDesign)\n"
                     (str "n <- nNormal(" delta1 "=" delta1 ", " sd "=" sd ",
                     " alpha "=" alpha ", " beta "=" beta ", " ratio "=" ratio
                     ")") "\n"
                     (str "list(n=n)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn ci-binomial
  """Executes R function ciBinomial in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x1
     :n1
     :x2
     :n2
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (ci-binomial params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function ciBinomial via WebR context.")
   (let [
         x1 (or (get params :x1) 10)
         n1 (or (get params :n1) 100)
         x2 (or (get params :x2) 5)
         n2 (or (get params :n2) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- ciBinomial(" x1 "=" x1 ", " n1 "=" n1 ", " x2
                     "=" x2 ", " n2 "=" n2 ")") "\n"
                     (str "list(lower=x$lower, upper=x$upper)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-binomial
  """Executes R function nBinomial in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :p1
     :p2
     :alpha
     :beta
     :ratio
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-binomial params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nBinomial via WebR context.")
   (let [
         p1 (or (get params :p1) 0.2)
         p2 (or (get params :p2) 0.1)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         ratio (or (get params :ratio) 1.0)
         r-code (str "library(gsDesign)\n"
                     (str "n <- nBinomial(" p1 "=" p1 ", " p2 "=" p2 ", "
                     alpha "=" alpha ", " beta "=" beta ", " ratio "=" ratio
                     ")") "\n"
                     (str "list(n=n)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sim-binomial
  """Executes R function simBinomial in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :p1
     :p2
     :n1
     :n2
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sim-binomial params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function simBinomial via WebR context.")
   (let [
         p1 (or (get params :p1) 0.2)
         p2 (or (get params :p2) 0.1)
         n1 (or (get params :n1) 100)
         n2 (or (get params :n2) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- simBinomial(" p1 "=" p1 ", " p2 "=" p2 ", " n1
                     "=" n1 ", " n2 "=" n2 ")") "\n"
                     (str "list(" p1 "=x$" p1 ", " p2 "=x$" p2 ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn test-binomial
  """Executes R function testBinomial in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x1
     :n1
     :x2
     :n2
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (test-binomial params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function testBinomial via WebR context.")
   (let [
         x1 (or (get params :x1) 10)
         n1 (or (get params :n1) 100)
         x2 (or (get params :x2) 5)
         n2 (or (get params :n2) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- testBinomial(" x1 "=" x1 ", " n1 "=" n1 ", "
                     x2 "=" x2 ", " n2 "=" n2 ")") "\n"
                     (str "list(pValue=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn var-binomial
  """Executes R function varBinomial in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :p1
     :p2
     :n1
     :n2
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (var-binomial params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function varBinomial via WebR context.")
   (let [
         p1 (or (get params :p1) 0.2)
         p2 (or (get params :p2) 0.1)
         n1 (or (get params :n1) 100)
         n2 (or (get params :n2) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- varBinomial(" p1 "=" p1 ", " p2 "=" p2 ", " n1
                     "=" n1 ", " n2 "=" n2 ")") "\n"
                     (str "list(variance=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn binomial-power-table
  """Executes R function binomialPowerTable in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :p1
     :p2
     :n1
     :n2
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (binomial-power-table params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function binomialPowerTable via WebR context.")
   (let [
         p1 (or (get params :p1) 0.2)
         p2 (or (get params :p2) 0.1)
         n1 (or (get params :n1) 100)
         n2 (or (get params :n2) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- binomialPowerTable(" p1 "=" p1 ", " p2 "=" p2
                     ", " n1 "=" n1 ", " n2 "=" n2 ")") "\n"
                     (str "list(power=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-survival
  """Executes R function nSurvival in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :lambda1
     :lambda2
     :alpha
     :beta
     :ratio
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-survival params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nSurvival via WebR context.")
   (let [
         lambda1 (or (get params :lambda1) 0.1)
         lambda2 (or (get params :lambda2) 0.07)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         ratio (or (get params :ratio) 1.0)
         r-code (str "library(gsDesign)\n"
                     (str "n <- nSurvival(" lambda1 "=" lambda1 ", " lambda2
                     "=" lambda2 ", " alpha "=" alpha ", " beta "=" beta ", "
                     ratio "=" ratio ")") "\n"
                     (str "list(nEvents=n$nEvents, n=n$n)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn t-events-ia
  """Executes R function tEventsIA in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :n
     :events
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (t-events-ia params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function tEventsIA via WebR context.")
   (let [
         n (or (get params :n) "100")
         events (or (get params :events) "50")
         r-code (str "library(gsDesign)\n"
                     (str "x <- tEve" n "tsIA(" n "=" n ", " "eve" " n " "ts"
                     "=" "eve" " n " "ts" ")") "\n"
                     (str "list(time=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-events-ia
  """Executes R function nEventsIA in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :n
     :events
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-events-ia params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nEventsIA via WebR context.")
   (let [
         n (or (get params :n) "100")
         events (or (get params :events) "50")
         r-code (str "library(gsDesign)\n"
                     (str "x <- " n "Eve" n "tsIA(" n "=" n ", " "eve" " n "
                     "ts" "=" "eve" " n " "ts" ")") "\n"
                     (str "list(" "eve" " n " "ts" "=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-surv
  """Executes R function nSurv in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :lambda1
     :lambda2
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-surv params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nSurv via WebR context.")
   (let [
         lambda1 (or (get params :lambda1) 0.1)
         lambda2 (or (get params :lambda2) 0.07)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "n <- nSurv(" lambda1 "=" lambda1 ", " lambda2 "="
                     lambda2 ", " alpha "=" alpha ", " beta "=" beta ")") "\n"
                     (str "list(nEvents=n$nEvents, n=n$n)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-surv
  """Executes R function gsSurv in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-surv params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsSurv via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsSurv(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "list(" k "=x$" k ", timing=x$timing,
                     upper_bounds=x$upper$bound, lower_bounds=x$lower$bound)")
                     "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-surv-calendar
  """Executes R function gsSurvCalendar in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-surv-calendar params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsSurvCalendar via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsSurvCalendar(" k "=" k ", " alpha "=" alpha
                     ", " beta "=" beta ")") "\n"
                     (str "list(" k "=x$" k ", timing=x$timing,
                     upper_bounds=x$upper$bound)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-surv-power
  """Executes R function gsSurvPower in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-surv-power params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsSurvPower via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsSurvPower(" k "=" k ", " alpha "=" alpha ",
                     " beta "=" beta ")") "\n"
                     (str "list(power=x$power)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-events
  """Executes R function nEvents in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :hr
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-events params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nEvents via WebR context.")
   (let [
         hr (or (get params :hr) 0.7)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "n <- nEvents(" hr "=" hr ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "list(nEvents=n)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn zn2hr
  """Executes R function zn2hr in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :n
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (zn2hr params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function zn2hr via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         n (or (get params :n) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- " "z  n" "2hr(" z "=" z ", " n "=" n ")") "\n"
                     (str "list(hr=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn hrn2z
  """Executes R function hrn2z in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :hr
     :n
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (hrn2z params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function hrn2z via WebR context.")
   (let [
         hr (or (get params :hr) 0.7)
         n (or (get params :n) 100)
         r-code (str "library(gsDesign)\n"
                     (str "x <- " "hr  n" "2z(" hr "=" hr ", " n "=" n ")") "\n"
                     (str "list(z=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn hrz2n
  """Executes R function hrz2n in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :hr
     :z
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (hrz2n params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function hrz2n via WebR context.")
   (let [
         hr (or (get params :hr) 0.7)
         z (or (get params :z) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- " "hr  z" "2n(" hr "=" hr ", " z "=" z ")") "\n"
                     (str "list(n=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn e-events
  """Executes R function eEvents in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :lambda1
     :lambda2
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (e-events params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function eEvents via WebR context.")
   (let [
         lambda1 (or (get params :lambda1) 0.1)
         lambda2 (or (get params :lambda2) 0.07)
         r-code (str "library(gsDesign)\n"
                     (str "x <- eEvents(" lambda1 "=" lambda1 ", " lambda2 "="
                     lambda2 ")") "\n"
                     (str "list(events=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn to-integer
  """Executes R function toInteger in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (to-integer params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function toInteger via WebR context.")
   (let [
         x (or (get params :x) 10.5)
         r-code (str "library(gsDesign)\n"
                     (str x " <- toInteger(" x ")") "\n"
                     (str "list(integer=" x ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn to-binomial-exact
  """Executes R function toBinomialExact in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (to-binomial-exact params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function toBinomialExact via WebR context.")
   (let [
         x (or (get params :x) 10)
         r-code (str "library(gsDesign)\n"
                     (str x " <- toBinomialE" x "act(" x ")") "\n"
                     (str "list(e" x "act=" x ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn repeated-p-value-binomial-exact
  """Executes R function repeatedPValueBinomialExact in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (repeated-p-value-binomial-exact params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function repeatedPValueBinomialExact via WebR
   context.")
   (let [
         x (or (get params :x) 10)
         r-code (str "library(gsDesign)\n"
                     (str x " <- repeatedPValueBinomialE" x "act(" x ")") "\n"
                     (str "list(pValue=" x ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sequential-p-value-binomial-exact
  """Executes R function sequentialPValueBinomialExact in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sequential-p-value-binomial-exact params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sequentialPValueBinomialExact via WebR
   context.")
   (let [
         x (or (get params :x) 10)
         r-code (str "library(gsDesign)\n"
                     (str x " <- sequentialPValueBinomialE" x "act(" x ")") "\n"
                     (str "list(pValue=" x ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sim-binomial-seasonal-exact
  """Executes R function simBinomialSeasonalExact in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sim-binomial-seasonal-exact params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function simBinomialSeasonalExact via WebR
   context.")
   (let [
         x (or (get params :x) 10)
         r-code (str "library(gsDesign)\n"
                     (str x " <- simBinomialSeasonalE" x "act(" x ")") "\n"
                     (str "list(e" x "act=" x ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn spending-function
  """Executes R function spendingFunction in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (spending-function params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function spendingFunction via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- spendingFunc" t "ion(" alpha "=" alpha ", " t
                     "=" t ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-ld-of
  """Executes R function sfLDOF in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-ld-of params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfLDOF via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfLDOF(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-ld-pocock
  """Executes R function sfLDPocock in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-ld-pocock params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfLDPocock via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfLDPocock(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-hsd
  """Executes R function sfHSD in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-hsd params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfHSD via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "-4")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfHSD(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-power
  """Executes R function sfPower in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-power params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfPower via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "3")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfPower(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-exponential
  """Executes R function sfExponential in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-exponential params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfExponential via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "0.5")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfExponen" t "ial(" alpha "=" alpha ", " t "="
                     t ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-logistic
  """Executes R function sfLogistic in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-logistic params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfLogistic via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(1, 1.5)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfLogis" t "ic(" alpha "=" alpha ", " t "=" t
                     ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-beta-dist
  """Executes R function sfBetaDist in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-beta-dist params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfBetaDist via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(1, 1)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfBe" t "aDis" t "(" alpha "=" alpha ", " t
                     "=" t ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-cauchy
  """Executes R function sfCauchy in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-cauchy params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfCauchy via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0, 1)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfCauchy(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-extreme-value
  """Executes R function sfExtremeValue in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-extreme-value params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfExtremeValue via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(1, 2)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfEx" t "remeValue(" alpha "=" alpha ", " t
                     "=" t ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-extreme-value2
  """Executes R function sfExtremeValue2 in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-extreme-value2 params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfExtremeValue2 via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(1, 2)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfEx" t "remeValue2(" alpha "=" alpha ", " t
                     "=" t ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-normal
  """Executes R function sfNormal in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-normal params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfNormal via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0, 1.5)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfNormal(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-t-dist
  """Executes R function sfTDist in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-t-dist params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfTDist via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0, 1)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfTDis" t "(" alpha "=" alpha ", " t "=" t ",
                     " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-linear
  """Executes R function sfLinear in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-linear params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfLinear via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfLinear(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-step
  """Executes R function sfStep in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-step params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfStep via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0.3, 0.5)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfS" t "ep(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-points
  """Executes R function sfPoints in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-points params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfPoints via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0.3, 0.5)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfPoin" t "s(" alpha "=" alpha ", " t "=" t ",
                     " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-truncated
  """Executes R function sfTruncated in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-truncated params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfTruncated via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0.1, 0.9, 3)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfTrunca" t "ed(" alpha "=" alpha ", " t "=" t
                     ", " param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-trimmed
  """Executes R function sfTrimmed in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-trimmed params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfTrimmed via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0.1, 0.9, 3)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfTrimmed(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-gapped
  """Executes R function sfGapped in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-gapped params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfGapped via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "c(0.1, 0.9, 3)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfGapped(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-xg1
  """Executes R function sfXG1 in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-xg1 params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfXG1 via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfXG1(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-xg2
  """Executes R function sfXG2 in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-xg2 params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfXG2 via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfXG2(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn sf-xg3
  """Executes R function sfXG3 in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :alpha
     :t
     :param
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (sf-xg3 params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function sfXG3 via WebR context.")
   (let [
         alpha (or (get params :alpha) 0.025)
         t (or (get params :t) 0.5)
         param (or (get params :param) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- sfXG3(" alpha "=" alpha ", " t "=" t ", "
                     param "=" param ")") "\n"
                     (str "lis" t "(spend=x$spend, name=x$name)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-cp
  """Executes R function gsCP in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :i
     :zi
     :theta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-cp params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsCP via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         i (or (get params :i) 1)
         zi (or (get params :zi) 1.96)
         theta (or (get params :theta) "NULL")
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDes" i "gn(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ")")
                     "\n"
                     (str "cp <- gsCP(x, " i "=" i ", " "z" " i " "=" "z" " i
                     " ", " theta "=" theta ")") "\n"
                     (str "l" i "st(cp=cp$cp, " theta "=cp$" theta ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-pp
  """Executes R function gsPP in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :i
     :zi
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-pp params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsPP via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         i (or (get params :i) 1)
         zi (or (get params :zi) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDes" i "gn(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ")")
                     "\n"
                     (str "pp <- gsPP(x, " i "=" i ", " "z" " i " "=" "z" " i
                     " ")") "\n"
                     (str "l" i "st(pp=pp)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-pi
  """Executes R function gsPI in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :i
     :zi
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-pi params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsPI via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         i (or (get params :i) 1)
         zi (or (get params :zi) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDes" i "gn(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ")")
                     "\n"
                     (str "p" i "_val <- gsPI(x, " i "=" i ", " "z" " i " "="
                     "z" " i " ")") "\n"
                     (str "l" i "st(p" i "=p" i "_val)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-posterior
  """Executes R function gsPosterior in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :i
     :zi
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-posterior params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsPosterior via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         i (or (get params :i) 1)
         zi (or (get params :zi) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDes" i "gn(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ")")
                     "\n"
                     (str "post <- gsPoster" i "or(x, " i "=" i ", " "z" " i "
                     "=" "z" " i " ")") "\n"
                     (str "l" i "st(poster" i "or=post)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-pos
  """Executes R function gsPOS in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :i
     :zi
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-pos params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsPOS via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         i (or (get params :i) 1)
         zi (or (get params :zi) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDes" i "gn(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ")")
                     "\n"
                     (str "pos_val <- gsPOS(x, " i "=" i ", " "z" " i " "="
                     "z" " i " ")") "\n"
                     (str "l" i "st(pos=pos_val)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-cpos
  """Executes R function gsCPOS in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :test-type
     :alpha
     :beta
     :i
     :zi
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-cpos params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsCPOS via WebR context.")
   (let [
         k (or (get params :k) 3)
         test-type (or (get params :test-type) 4)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         i (or (get params :i) 1)
         zi (or (get params :zi) 1.96)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDes" i "gn(" k "=" k ", " test-type "="
                     test-type ", " alpha "=" alpha ", " beta "=" beta ")")
                     "\n"
                     (str "cpos <- gsCPOS(x, " i "=" i ", " "z" " i " "=" "z"
                     " i " ")") "\n"
                     (str "l" i "st(cpos=cpos)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-bound-cp
  """Executes R function gsBoundCP in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
     :theta
     :r
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-bound-cp params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsBoundCP via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         theta (or (get params :theta) "NULL")
         r (or (get params :r) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "y <- gsBoundCP(x, " theta "=" theta ", " r "=" r
                     ")") "\n"
                     (str "list(cp=y)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn normal-grid
  """Executes R function normalGrid in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :r
     :bounds
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (normal-grid params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function normalGrid via WebR context.")
   (let [
         r (or (get params :r) 18)
         bounds (or (get params :bounds) "c(-3, 3)")
         r-code (str "library(gsDesign)\n"
                     (str "x <- no" r "malG" r "id(" r "=" r ", " bounds "="
                     bounds ")") "\n"
                     (str "list(z=x$z, w=x$w)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-density
  """Executes R function gsDensity in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-density params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsDensity via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "d <- gsDensity(x)") "\n"
                     (str "list(density=d)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn cond-power
  """Executes R function condPower in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (cond-power params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function condPower via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "list(condPower=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn ssr-cp
  """Executes R function ssrCP in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (ssr-cp params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function ssrCP via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "list(ssrCP=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn power-ssr-cp
  """Executes R function Power.ssrCP in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (power-ssr-cp params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function Power.ssrCP via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "list(power=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn z2-nc
  """Executes R function z2NC in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (z2-nc params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function z2NC via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- " z "2NC(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(nc=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn z2-z
  """Executes R function z2Z in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (z2-z params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function z2Z via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- " z "2Z(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(" z "=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn z2-fisher
  """Executes R function z2Fisher in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :z
     :t
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (z2-fisher params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function z2Fisher via WebR context.")
   (let [
         z (or (get params :z) 1.96)
         t (or (get params :t) 0.5)
         r-code (str "library(gsDesign)\n"
                     (str "x <- " z "2Fisher(" z "=" z ", " t "=" t ")") "\n"
                     (str "lis" t "(fisher=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn gs-binomial-exact
  """Executes R function gsBinomialExact in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :theta
     :n-I
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (gs-binomial-exact params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function gsBinomialExact via WebR context.")
   (let [
         k (or (get params :k) 3)
         theta (or (get params :theta) "c(0.1, 0.2)")
         n-I (or (get params :n-I) "10:30")
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsBinomialExact(" k "=" k ", " theta "=" theta
                     ", " n-I "=" n-I ")") "\n"
                     (str "list(upper=x$upper, lower=x$lower)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn binomial-sprt
  """Executes R function binomialSPRT in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :p0
     :p1
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (binomial-sprt params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function binomialSPRT via WebR context.")
   (let [
         p0 (or (get params :p0) 0.1)
         p1 (or (get params :p1) 0.2)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- binomialSPRT(" p0 "=" p0 ", " p1 "=" p1 ", "
                     alpha "=" alpha ", " beta "=" beta ")") "\n"
                     (str "list(sprt=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn n-binomial1-sample
  """Executes R function nBinomial1Sample in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :p0
     :p1
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (n-binomial1-sample params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function nBinomial1Sample via WebR context.")
   (let [
         p0 (or (get params :p0) 0.1)
         p1 (or (get params :p1) 0.2)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- nBinomial1Sample(" p0 "=" p0 ", " p1 "=" p1 ",
                     " alpha "=" alpha ", " beta "=" beta ")") "\n"
                     (str "list(n=x)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn check-lengths
  """Executes R function checkLengths in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
     :y
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (check-lengths params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function checkLengths via WebR context.")
   (let [
         x (or (get params :x) "1:5")
         y (or (get params :y) "1:5")
         r-code (str "library(gsDesign)\n"
                     (str "checkLengths(" x ", " y ")") "\n"
                     (str "list(checked=TRUE)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn check-range
  """Executes R function checkRange in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
     :bounds
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (check-range params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function checkRange via WebR context.")
   (let [
         x (or (get params :x) 5)
         bounds (or (get params :bounds) "c(0, 10)")
         r-code (str "library(gsDesign)\n"
                     (str "checkRange(" x ", " bounds ")") "\n"
                     (str "list(checked=TRUE)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn check-scalar
  """Executes R function checkScalar in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
     :bounds
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (check-scalar params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function checkScalar via WebR context.")
   (let [
         x (or (get params :x) 5)
         bounds (or (get params :bounds) "c(0, 10)")
         r-code (str "library(gsDesign)\n"
                     (str "checkScalar(" x ", " bounds ")") "\n"
                     (str "list(checked=TRUE)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn check-vector
  """Executes R function checkVector in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
     :bounds
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (check-vector params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function checkVector via WebR context.")
   (let [
         x (or (get params :x) "1:5")
         bounds (or (get params :bounds) "c(0, 10)")
         r-code (str "library(gsDesign)\n"
                     (str "checkVector(" x ", " bounds ")") "\n"
                     (str "list(checked=TRUE)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn is-integer
  """Executes R function isInteger in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :x
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (is-integer params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function isInteger via WebR context.")
   (let [
         x (or (get params :x) 5)
         r-code (str "library(gsDesign)\n"
                     (str x " <- isInteger(" x ")") "\n"
                     (str "list(isInteger=" x ")") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn as-table
  """Executes R function as_table in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (as-table params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function as_table via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "tab <- as_table(x)") "\n"
                     (str "list(table=tab)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn as-gt
  """Executes R function as_gt in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (as-gt params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function as_gt via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "gt_tab <- as_gt(x)") "\n"
                     (str "list(gt=gt_tab)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))

(defn as-rtf
  """Executes R function as_rtf in WebR runtime.
   
   Allows ClojureScript callers to execute R's group sequential methods.
   This function accepts a map of configuration parameters, resolves them
   to R variables, constructs a code snippet, and executes it.
   
   Args:
   - params: Map containing function arguments:
     :k
     :alpha
     :beta
   - on-done: Success callback fn [output-lines result]
   - on-error: Error callback fn [error]"""
  ([params]
   (as-rtf params webr/on-done webr/on-error))
  ([params on-done on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (js/console.log "Invoking R function as_rtf via WebR context.")
   (let [
         k (or (get params :k) 3)
         alpha (or (get params :alpha) 0.025)
         beta (or (get params :beta) 0.1)
         r-code (str "library(gsDesign)\n"
                     (str "x <- gsDesign(" k "=" k ", " alpha "=" alpha ", "
                     beta "=" beta ")") "\n"
                     (str "rtf_tab <- as_rtf(x)") "\n"
                     (str "list(rtf=rtf_tab)") "\n")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)]
            (js/console.log "R evaluation completed successfully for command.")
            (on-done output-lines res-map))
          (catch :default e
            (js/console.error "Error parsing R output value: " e)
            (on-error e))))
      on-error))))
