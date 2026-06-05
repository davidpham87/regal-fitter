(ns app.webr.gs-design
  (:require [app.webr :as webr]
            [clojure.string :as str])
  (:require-macros [app.webr.macros :refer [def-r-wrapper]]))

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
                upper-bounds (:upper-bounds res-map)
                lower-bounds (:lower-bounds res-map)
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

(def-r-wrapper gs-design
  "gsDesign"
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDesign' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [sfu '"sfLDOF"'] [sfl '"sfLDOF"'] [timing "NULL"] [n.I "NULL"]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a, sfu=~a, sfl=~a, timing=~a, n.I=~a)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, lower_bounds=x$lower$bound, n_I=x$n.I)")

(def-r-wrapper gs-probability
  "gsProbability"
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsProbability' under the app.webr.gs-design namespace.
  [[theta 0] [n.I "1:3"] [a "c(-1.5, -0.5, 0.5)"] [b "c(2.5, 2.0, 1.5)"]]
  "x <- gsProbability(theta=~a, n.I=~a, a=~a, b=~a)\nlist(theta=x$theta, n_I=x$n.I, upper_prob=x$upper$prob, lower_prob=x$lower$prob)")

(def-r-wrapper gs-bound
  "gsBound"
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound' under the app.webr.gs-design namespace.
  [[i 1] [theta 0.0] [a -1.96] [b 1.96]]
  "x <- gsBound(i=~a, theta=~a, a=~a, b=~a)\nlist(boundary=x)")

(def-r-wrapper gs-bound1
  "gsBound1"
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBound1' under the app.webr.gs-design namespace.
  [[theta 0.0] [a -1.96] [b 1.96]]
  "x <- gsBound1(theta=~a, a=~a, b=~a)\nlist(boundary=x)")

(def-r-wrapper sequential-p-value
  "sequentialPValue"
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValue' under the app.webr.gs-design namespace.
  [[otc "NULL"] [index 1] [zi 1.96]]
  "x <- sequentialPValue(otc=~a, index=~a, zi=~a)\nlist(pValue=x)")

(def-r-wrapper gs-bound-summary
  "gsBoundSummary"
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundSummary' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nsummary_table <- gsBoundSummary(x)\npaste(capture.output(print(summary_table)), collapse='\\n')")

(def-r-wrapper xprint
  "xprint"
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'xprint' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nsummary_table <- gsBoundSummary(x)\npaste(capture.output(xprint(summary_table)), collapse='\\n')")

(def-r-wrapper gs-b-value
  "gsBValue"
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBValue' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- gsBValue(z=~a, t=~a)\nlist(bValue=x)")

(def-r-wrapper gs-delta
  "gsDelta"
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDelta' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- gsDelta(z=~a, t=~a)\nlist(delta=x)")

(def-r-wrapper gs-rr
  "gsRR"
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsRR' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- gsRR(z=~a, t=~a)\nlist(rr=x)")

(def-r-wrapper gs-hr
  "gsHR"
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsHR' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- gsHR(z=~a, t=~a)\nlist(hr=x)")

(def-r-wrapper gs-cpz
  "gsCPz"
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPz' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- gsCPz(z=~a, t=~a)\nlist(cpz=x)")

(def-r-wrapper n-normal
  "nNormal"
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nNormal' under the app.webr.gs-design namespace.
  [[delta1 1.0] [sd 1.0] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nNormal(delta1=~a, sd=~a, alpha=~a, beta=~a, ratio=~a)\nlist(n=n)")

(def-r-wrapper ci-binomial
  "ciBinomial"
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ciBinomial' under the app.webr.gs-design namespace.
  [[x1 10] [n1 100] [x2 5] [n2 100]]
  "x <- ciBinomial(x1=~a, n1=~a, x2=~a, n2=~a)\nlist(lower=x$lower, upper=x$upper)")

(def-r-wrapper n-binomial
  "nBinomial"
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial' under the app.webr.gs-design namespace.
  [[p1 0.2] [p2 0.1] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nBinomial(p1=~a, p2=~a, alpha=~a, beta=~a, ratio=~a)\nlist(n=n)")

(def-r-wrapper sim-binomial
  "simBinomial"
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomial' under the app.webr.gs-design namespace.
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- simBinomial(p1=~a, p2=~a, n1=~a, n2=~a)\nlist(p1=x$p1, p2=x$p2)")

(def-r-wrapper test-binomial
  "testBinomial"
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'testBinomial' under the app.webr.gs-design namespace.
  [[x1 10] [n1 100] [x2 5] [n2 100]]
  "x <- testBinomial(x1=~a, n1=~a, x2=~a, n2=~a)\nlist(pValue=x)")

(def-r-wrapper var-binomial
  "varBinomial"
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'varBinomial' under the app.webr.gs-design namespace.
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- varBinomial(p1=~a, p2=~a, n1=~a, n2=~a)\nlist(variance=x)")

(def-r-wrapper binomial-power-table
  "binomialPowerTable"
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialPowerTable' under the app.webr.gs-design namespace.
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- binomialPowerTable(p1=~a, p2=~a, n1=~a, n2=~a)\nlist(power=x)")

(def-r-wrapper n-survival
  "nSurvival"
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurvival' under the app.webr.gs-design namespace.
  [[lambda1 0.1] [lambda2 0.07] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nSurvival(lambda1=~a, lambda2=~a, alpha=~a, beta=~a, ratio=~a)\nlist(nEvents=n$nEvents, n=n$n)")

(def-r-wrapper t-events-ia
  "tEventsIA"
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'tEventsIA' under the app.webr.gs-design namespace.
  [[n "100"] [events "50"]]
  "x <- tEventsIA(n=~a, events=~a)\nlist(time=x)")

(def-r-wrapper n-events-ia
  "nEventsIA"
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEventsIA' under the app.webr.gs-design namespace.
  [[n "100"] [events "50"]]
  "x <- nEventsIA(n=~a, events=~a)\nlist(events=x)")

(def-r-wrapper n-surv
  "nSurv"
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nSurv' under the app.webr.gs-design namespace.
  [[lambda1 0.1] [lambda2 0.07] [alpha 0.025] [beta 0.1]]
  "n <- nSurv(lambda1=~a, lambda2=~a, alpha=~a, beta=~a)\nlist(nEvents=n$nEvents, n=n$n)")

(def-r-wrapper gs-surv
  "gsSurv"
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurv' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurv(k=~a, alpha=~a, beta=~a)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, lower_bounds=x$lower$bound)")

(def-r-wrapper gs-surv-calendar
  "gsSurvCalendar"
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvCalendar' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurvCalendar(k=~a, alpha=~a, beta=~a)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound)")

(def-r-wrapper gs-surv-power
  "gsSurvPower"
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsSurvPower' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurvPower(k=~a, alpha=~a, beta=~a)\nlist(power=x$power)")

(def-r-wrapper n-events
  "nEvents"
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nEvents' under the app.webr.gs-design namespace.
  [[hr 0.7] [alpha 0.025] [beta 0.1]]
  "n <- nEvents(hr=~a, alpha=~a, beta=~a)\nlist(nEvents=n)")

(def-r-wrapper zn2hr
  "zn2hr"
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'zn2hr' under the app.webr.gs-design namespace.
  [[z 1.96] [n 100]]
  "x <- zn2hr(z=~a, n=~a)\nlist(hr=x)")

(def-r-wrapper hrn2z
  "hrn2z"
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrn2z' under the app.webr.gs-design namespace.
  [[hr 0.7] [n 100]]
  "x <- hrn2z(hr=~a, n=~a)\nlist(z=x)")

(def-r-wrapper hrz2n
  "hrz2n"
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'hrz2n' under the app.webr.gs-design namespace.
  [[hr 0.7] [z 1.96]]
  "x <- hrz2n(hr=~a, z=~a)\nlist(n=x)")

(def-r-wrapper e-events
  "eEvents"
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'eEvents' under the app.webr.gs-design namespace.
  [[lambda1 0.1] [lambda2 0.07]]
  "x <- eEvents(lambda1=~a, lambda2=~a)\nlist(events=x)")

(def-r-wrapper to-integer
  "toInteger"
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toInteger' under the app.webr.gs-design namespace.
  [[x 10.5]]
  "x <- toInteger(~a)\nlist(integer=x)")

(def-r-wrapper to-binomial-exact
  "toBinomialExact"
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'toBinomialExact' under the app.webr.gs-design namespace.
  [[x 10]]
  "x <- toBinomialExact(~a)\nlist(exact=x)")

(def-r-wrapper repeated-p-value-binomial-exact
  "repeatedPValueBinomialExact"
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'repeatedPValueBinomialExact' under the app.webr.gs-design namespace.
  [[x 10]]
  "x <- repeatedPValueBinomialExact(~a)\nlist(pValue=x)")

(def-r-wrapper sequential-p-value-binomial-exact
  "sequentialPValueBinomialExact"
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sequentialPValueBinomialExact' under the app.webr.gs-design namespace.
  [[x 10]]
  "x <- sequentialPValueBinomialExact(~a)\nlist(pValue=x)")

(def-r-wrapper sim-binomial-seasonal-exact
  "simBinomialSeasonalExact"
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'simBinomialSeasonalExact' under the app.webr.gs-design namespace.
  [[x 10]]
  "x <- simBinomialSeasonalExact(~a)\nlist(exact=x)")

(def-r-wrapper spending-function
  "spendingFunction"
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'spendingFunction' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- spendingFunction(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-ld-of
  "sfLDOF"
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDOF' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLDOF(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-ld-pocock
  "sfLDPocock"
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLDPocock' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLDPocock(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-hsd
  "sfHSD"
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfHSD' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "-4"]]
  "x <- sfHSD(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-power
  "sfPower"
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPower' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "3"]]
  "x <- sfPower(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-exponential
  "sfExponential"
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExponential' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "0.5"]]
  "x <- sfExponential(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-logistic
  "sfLogistic"
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLogistic' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(1, 1.5)"]]
  "x <- sfLogistic(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-beta-dist
  "sfBetaDist"
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfBetaDist' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(1, 1)"]]
  "x <- sfBetaDist(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-cauchy
  "sfCauchy"
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfCauchy' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0, 1)"]]
  "x <- sfCauchy(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-extreme-value
  "sfExtremeValue"
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(1, 2)"]]
  "x <- sfExtremeValue(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-extreme-value2
  "sfExtremeValue2"
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfExtremeValue2' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(1, 2)"]]
  "x <- sfExtremeValue2(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-normal
  "sfNormal"
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfNormal' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0, 1.5)"]]
  "x <- sfNormal(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-t-dist
  "sfTDist"
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTDist' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0, 1)"]]
  "x <- sfTDist(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-linear
  "sfLinear"
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfLinear' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLinear(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-step
  "sfStep"
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfStep' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0.3, 0.5)"]]
  "x <- sfStep(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-points
  "sfPoints"
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfPoints' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0.3, 0.5)"]]
  "x <- sfPoints(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-truncated
  "sfTruncated"
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTruncated' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfTruncated(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-trimmed
  "sfTrimmed"
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfTrimmed' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfTrimmed(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-gapped
  "sfGapped"
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfGapped' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfGapped(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg1
  "sfXG1"
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG1' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG1(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg2
  "sfXG2"
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG2' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG2(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg3
  "sfXG3"
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'sfXG3' under the app.webr.gs-design namespace.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG3(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper gs-cp
  "gsCP"
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCP' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96] [theta "NULL"]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\ncp <- gsCP(x, i=~a, zi=~a, theta=~a)\nlist(cp=cp$cp, theta=cp$theta)")

(def-r-wrapper gs-pp
  "gsPP"
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPP' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npp <- gsPP(x, i=~a, zi=~a)\nlist(pp=pp)")

(def-r-wrapper gs-pi
  "gsPI"
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPI' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npi_val <- gsPI(x, i=~a, zi=~a)\nlist(pi=pi_val)")

(def-r-wrapper gs-posterior
  "gsPosterior"
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPosterior' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npost <- gsPosterior(x, i=~a, zi=~a)\nlist(posterior=post)")

(def-r-wrapper gs-pos
  "gsPOS"
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsPOS' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npos_val <- gsPOS(x, i=~a, zi=~a)\nlist(pos=pos_val)")

(def-r-wrapper gs-cpos
  "gsCPOS"
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsCPOS' under the app.webr.gs-design namespace.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\ncpos <- gsCPOS(x, i=~a, zi=~a)\nlist(cpos=cpos)")

(def-r-wrapper gs-bound-cp
  "gsBoundCP"
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBoundCP' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1] [theta "NULL"] [r 0.5]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\ny <- gsBoundCP(x, theta=~a, r=~a)\nlist(cp=y)")

(def-r-wrapper normal-grid
  "normalGrid"
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'normalGrid' under the app.webr.gs-design namespace.
  [[r 18] [bounds "c(-3, 3)"]]
  "x <- normalGrid(r=~a, bounds=~a)\nlist(z=x$z, w=x$w)")

(def-r-wrapper gs-density
  "gsDensity"
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsDensity' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nd <- gsDensity(x)\nlist(density=d)")

(def-r-wrapper cond-power
  "condPower"
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'condPower' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nlist(condPower=x)")

(def-r-wrapper ssr-cp
  "ssrCP"
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'ssrCP' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nlist(ssrCP=x)")

(def-r-wrapper power-ssr-cp
  "Power.ssrCP"
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'Power.ssrCP' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nlist(power=x)")

(def-r-wrapper z2-nc
  "z2NC"
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2NC' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- z2NC(z=~a, t=~a)\nlist(nc=x)")

(def-r-wrapper z2-z
  "z2Z"
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Z' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- z2Z(z=~a, t=~a)\nlist(z=x)")

(def-r-wrapper z2-fisher
  "z2Fisher"
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'z2Fisher' under the app.webr.gs-design namespace.
  [[z 1.96] [t 0.5]]
  "x <- z2Fisher(z=~a, t=~a)\nlist(fisher=x)")

(def-r-wrapper gs-binomial-exact
  "gsBinomialExact"
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'gsBinomialExact' under the app.webr.gs-design namespace.
  [[k 3] [theta "c(0.1, 0.2)"] [n.I "10:30"]]
  "x <- gsBinomialExact(k=~a, theta=~a, n.I=~a)\nlist(upper=x$upper, lower=x$lower)")

(def-r-wrapper binomial-sprt
  "binomialSPRT"
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'binomialSPRT' under the app.webr.gs-design namespace.
  [[p0 0.1] [p1 0.2] [alpha 0.025] [beta 0.1]]
  "x <- binomialSPRT(p0=~a, p1=~a, alpha=~a, beta=~a)\nlist(sprt=x)")

(def-r-wrapper n-binomial1-sample
  "nBinomial1Sample"
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'nBinomial1Sample' under the app.webr.gs-design namespace.
  [[p0 0.1] [p1 0.2] [alpha 0.025] [beta 0.1]]
  "x <- nBinomial1Sample(p0=~a, p1=~a, alpha=~a, beta=~a)\nlist(n=x)")

(def-r-wrapper check-lengths
  "checkLengths"
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkLengths' under the app.webr.gs-design namespace.
  [[x "1:5"] [y "1:5"]]
  "checkLengths(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper check-range
  "checkRange"
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkRange' under the app.webr.gs-design namespace.
  [[x 5] [bounds "c(0, 10)"]]
  "checkRange(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper check-scalar
  "checkScalar"
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkScalar' under the app.webr.gs-design namespace.
  [[x 5] [bounds "c(0, 10)"]]
  "checkScalar(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper check-vector
  "checkVector"
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'checkVector' under the app.webr.gs-design namespace.
  [[x "1:5"] [bounds "c(0, 10)"]]
  "checkVector(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper is-integer
  "isInteger"
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'isInteger' under the app.webr.gs-design namespace.
  [[x 5]]
  "x <- isInteger(~a)\nlist(isInteger=x)")

(def-r-wrapper as-table
  "as_table"
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_table' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\ntab <- as_table(x)\nlist(table=tab)")

(def-r-wrapper as-gt
  "as_gt"
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_gt' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\ngt_tab <- as_gt(x)\nlist(gt=gt_tab)")

(def-r-wrapper as-rtf
  "as_rtf"
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  ;; This defines the CLJS wrapper for the R function 'as_rtf' under the app.webr.gs-design namespace.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nrtf_tab <- as_rtf(x)\nlist(rtf=rtf_tab)")
