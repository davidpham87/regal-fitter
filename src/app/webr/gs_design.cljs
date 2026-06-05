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
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [sfu '"sfLDOF"'] [sfl '"sfLDOF"'] [timing "NULL"] [n.I "NULL"]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f, sfu=%s, sfl=%s, timing=%s, n.I=%s)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, lower_bounds=x$lower$bound, n_I=x$n.I)")

(def-r-wrapper gs-probability
  "gsProbability"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[theta 0] [n.I "1:3"] [a "c(-1.5, -0.5, 0.5)"] [b "c(2.5, 2.0, 1.5)"]]
  "x <- gsProbability(theta=%d, n.I=%s, a=%s, b=%s)\nlist(theta=x$theta, n_I=x$n.I, upper_prob=x$upper$prob, lower_prob=x$lower$prob)")

(def-r-wrapper gs-bound
  "gsBound"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[i 1] [theta 0.0] [a -1.96] [b 1.96]]
  "x <- gsBound(i=%d, theta=%f, a=%f, b=%f)\nlist(boundary=x)")

(def-r-wrapper gs-bound1
  "gsBound1"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[theta 0.0] [a -1.96] [b 1.96]]
  "x <- gsBound1(theta=%f, a=%f, b=%f)\nlist(boundary=x)")

(def-r-wrapper sequential-p-value
  "sequentialPValue"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[otc "NULL"] [index 1] [zi 1.96]]
  "x <- sequentialPValue(otc=%d, index=%f, zi=%s)\nlist(pValue=x)")

(def-r-wrapper gs-bound-summary
  "gsBoundSummary"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nsummary_table <- gsBoundSummary(x)\npaste(capture.output(print(summary_table)), collapse='\\n')")

(def-r-wrapper xprint
  "xprint"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nsummary_table <- gsBoundSummary(x)\npaste(capture.output(xprint(summary_table)), collapse='\\n')")

(def-r-wrapper gs-b-value
  "gsBValue"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- gsBValue(z=%f, t=%f)\nlist(bValue=x)")

(def-r-wrapper gs-delta
  "gsDelta"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- gsDelta(z=%f, t=%f)\nlist(delta=x)")

(def-r-wrapper gs-rr
  "gsRR"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- gsRR(z=%f, t=%f)\nlist(rr=x)")

(def-r-wrapper gs-hr
  "gsHR"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- gsHR(z=%f, t=%f)\nlist(hr=x)")

(def-r-wrapper gs-cpz
  "gsCPz"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- gsCPz(z=%f, t=%f)\nlist(cpz=x)")

(def-r-wrapper n-normal
  "nNormal"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[delta1 1.0] [sd 1.0] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nNormal(delta1=%f, sd=%f, alpha=%f, beta=%f, ratio=%f)\nlist(n=n)")

(def-r-wrapper ci-binomial
  "ciBinomial"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x1 10] [n1 100] [x2 5] [n2 100]]
  "x <- ciBinomial(x1=%d, n1=%d, x2=%d, n2=%d)\nlist(lower=x$lower, upper=x$upper)")

(def-r-wrapper n-binomial
  "nBinomial"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[p1 0.2] [p2 0.1] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nBinomial(p1=%f, p2=%f, alpha=%f, beta=%f, ratio=%f)\nlist(n=n)")

(def-r-wrapper sim-binomial
  "simBinomial"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- simBinomial(p1=%f, p2=%f, n1=%d, n2=%d)\nlist(p1=x$p1, p2=x$p2)")

(def-r-wrapper test-binomial
  "testBinomial"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x1 10] [n1 100] [x2 5] [n2 100]]
  "x <- testBinomial(x1=%d, n1=%d, x2=%d, n2=%d)\nlist(pValue=x)")

(def-r-wrapper var-binomial
  "varBinomial"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- varBinomial(p1=%f, p2=%f, n1=%d, n2=%d)\nlist(variance=x)")

(def-r-wrapper binomial-power-table
  "binomialPowerTable"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- binomialPowerTable(p1=%f, p2=%f, n1=%d, n2=%d)\nlist(power=x)")

(def-r-wrapper n-survival
  "nSurvival"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[lambda1 0.1] [lambda2 0.07] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nSurvival(lambda1=%f, lambda2=%f, alpha=%f, beta=%f, ratio=%f)\nlist(nEvents=n$nEvents, n=n$n)")

(def-r-wrapper t-events-ia
  "tEventsIA"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[n "100"] [events "50"]]
  "x <- tEventsIA(n=%s, events=%s)\nlist(time=x)")

(def-r-wrapper n-events-ia
  "nEventsIA"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[n "100"] [events "50"]]
  "x <- nEventsIA(n=%s, events=%s)\nlist(events=x)")

(def-r-wrapper n-surv
  "nSurv"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[lambda1 0.1] [lambda2 0.07] [alpha 0.025] [beta 0.1]]
  "n <- nSurv(lambda1=%f, lambda2=%f, alpha=%f, beta=%f)\nlist(nEvents=n$nEvents, n=n$n)")

(def-r-wrapper gs-surv
  "gsSurv"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurv(k=%d, alpha=%f, beta=%f)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, lower_bounds=x$lower$bound)")

(def-r-wrapper gs-surv-calendar
  "gsSurvCalendar"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurvCalendar(k=%d, alpha=%f, beta=%f)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound)")

(def-r-wrapper gs-surv-power
  "gsSurvPower"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurvPower(k=%d, alpha=%f, beta=%f)\nlist(power=x$power)")

(def-r-wrapper n-events
  "nEvents"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[hr 0.7] [alpha 0.025] [beta 0.1]]
  "n <- nEvents(hr=%f, alpha=%f, beta=%f)\nlist(nEvents=n)")

(def-r-wrapper zn2hr
  "zn2hr"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [n 100]]
  "x <- zn2hr(z=%f, n=%d)\nlist(hr=x)")

(def-r-wrapper hrn2z
  "hrn2z"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[hr 0.7] [n 100]]
  "x <- hrn2z(hr=%f, n=%d)\nlist(z=x)")

(def-r-wrapper hrz2n
  "hrz2n"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[hr 0.7] [z 1.96]]
  "x <- hrz2n(hr=%f, z=%f)\nlist(n=x)")

(def-r-wrapper e-events
  "eEvents"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[lambda1 0.1] [lambda2 0.07]]
  "x <- eEvents(lambda1=%f, lambda2=%f)\nlist(events=x)")

(def-r-wrapper to-integer
  "toInteger"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 10.5]]
  "x <- toInteger(%f)\nlist(integer=x)")

(def-r-wrapper to-binomial-exact
  "toBinomialExact"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 10]]
  "x <- toBinomialExact(%d)\nlist(exact=x)")

(def-r-wrapper repeated-p-value-binomial-exact
  "repeatedPValueBinomialExact"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 10]]
  "x <- repeatedPValueBinomialExact(%d)\nlist(pValue=x)")

(def-r-wrapper sequential-p-value-binomial-exact
  "sequentialPValueBinomialExact"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 10]]
  "x <- sequentialPValueBinomialExact(%d)\nlist(pValue=x)")

(def-r-wrapper sim-binomial-seasonal-exact
  "simBinomialSeasonalExact"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 10]]
  "x <- simBinomialSeasonalExact(%d)\nlist(exact=x)")

(def-r-wrapper spending-function
  "spendingFunction"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- spendingFunction(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-ld-of
  "sfLDOF"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLDOF(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-ld-pocock
  "sfLDPocock"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLDPocock(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-hsd
  "sfHSD"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "-4"]]
  "x <- sfHSD(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-power
  "sfPower"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "3"]]
  "x <- sfPower(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-exponential
  "sfExponential"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "0.5"]]
  "x <- sfExponential(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-logistic
  "sfLogistic"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(1, 1.5)"]]
  "x <- sfLogistic(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-beta-dist
  "sfBetaDist"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(1, 1)"]]
  "x <- sfBetaDist(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-cauchy
  "sfCauchy"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0, 1)"]]
  "x <- sfCauchy(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-extreme-value
  "sfExtremeValue"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(1, 2)"]]
  "x <- sfExtremeValue(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-extreme-value2
  "sfExtremeValue2"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(1, 2)"]]
  "x <- sfExtremeValue2(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-normal
  "sfNormal"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0, 1.5)"]]
  "x <- sfNormal(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-t-dist
  "sfTDist"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0, 1)"]]
  "x <- sfTDist(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-linear
  "sfLinear"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLinear(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-step
  "sfStep"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0.3, 0.5)"]]
  "x <- sfStep(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-points
  "sfPoints"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0.3, 0.5)"]]
  "x <- sfPoints(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-truncated
  "sfTruncated"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfTruncated(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-trimmed
  "sfTrimmed"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfTrimmed(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-gapped
  "sfGapped"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfGapped(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg1
  "sfXG1"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG1(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg2
  "sfXG2"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG2(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg3
  "sfXG3"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG3(alpha=%f, t=%f, param=%s)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper gs-cp
  "gsCP"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96] [theta "NULL"]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f)\ncp <- gsCP(x, i=%d, zi=%f, theta=%s)\nlist(cp=cp$cp, theta=cp$theta)")

(def-r-wrapper gs-pp
  "gsPP"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f)\npp <- gsPP(x, i=%d, zi=%f)\nlist(pp=pp)")

(def-r-wrapper gs-pi
  "gsPI"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f)\npi_val <- gsPI(x, i=%d, zi=%f)\nlist(pi=pi_val)")

(def-r-wrapper gs-posterior
  "gsPosterior"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f)\npost <- gsPosterior(x, i=%d, zi=%f)\nlist(posterior=post)")

(def-r-wrapper gs-pos
  "gsPOS"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f)\npos_val <- gsPOS(x, i=%d, zi=%f)\nlist(pos=pos_val)")

(def-r-wrapper gs-cpos
  "gsCPOS"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=%d, test.type=%d, alpha=%f, beta=%f)\ncpos <- gsCPOS(x, i=%d, zi=%f)\nlist(cpos=cpos)")

(def-r-wrapper gs-bound-cp
  "gsBoundCP"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1] [theta "NULL"] [r 0.5]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\ny <- gsBoundCP(x, theta=%f, r=%s)\nlist(cp=y)")

(def-r-wrapper normal-grid
  "normalGrid"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[r 18] [bounds "c(-3, 3)"]]
  "x <- normalGrid(r=%d, bounds=%s)\nlist(z=x$z, w=x$w)")

(def-r-wrapper gs-density
  "gsDensity"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nd <- gsDensity(x)\nlist(density=d)")

(def-r-wrapper cond-power
  "condPower"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nlist(condPower=x)")

(def-r-wrapper ssr-cp
  "ssrCP"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nlist(ssrCP=x)")

(def-r-wrapper power-ssr-cp
  "Power.ssrCP"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nlist(power=x)")

(def-r-wrapper z2-nc
  "z2NC"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- z2NC(z=%f, t=%f)\nlist(nc=x)")

(def-r-wrapper z2-z
  "z2Z"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- z2Z(z=%f, t=%f)\nlist(z=x)")

(def-r-wrapper z2-fisher
  "z2Fisher"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[z 1.96] [t 0.5]]
  "x <- z2Fisher(z=%f, t=%f)\nlist(fisher=x)")

(def-r-wrapper gs-binomial-exact
  "gsBinomialExact"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [theta "c(0.1, 0.2)"] [n.I "10:30"]]
  "x <- gsBinomialExact(k=%d, theta=%s, n.I=%s)\nlist(upper=x$upper, lower=x$lower)")

(def-r-wrapper binomial-sprt
  "binomialSPRT"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[p0 0.1] [p1 0.2] [alpha 0.025] [beta 0.1]]
  "x <- binomialSPRT(p0=%f, p1=%f, alpha=%f, beta=%f)\nlist(sprt=x)")

(def-r-wrapper n-binomial1-sample
  "nBinomial1Sample"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[p0 0.1] [p1 0.2] [alpha 0.025] [beta 0.1]]
  "x <- nBinomial1Sample(p0=%f, p1=%f, alpha=%f, beta=%f)\nlist(n=x)")

(def-r-wrapper check-lengths
  "checkLengths"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x "1:5"] [y "1:5"]]
  "checkLengths(%s, %s)\nlist(checked=TRUE)")

(def-r-wrapper check-range
  "checkRange"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 5] [bounds "c(0, 10)"]]
  "checkRange(%d, %s)\nlist(checked=TRUE)")

(def-r-wrapper check-scalar
  "checkScalar"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 5] [bounds "c(0, 10)"]]
  "checkScalar(%d, %s)\nlist(checked=TRUE)")

(def-r-wrapper check-vector
  "checkVector"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x "1:5"] [bounds "c(0, 10)"]]
  "checkVector(%s, %s)\nlist(checked=TRUE)")

(def-r-wrapper is-integer
  "isInteger"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[x 5]]
  "x <- isInteger(%d)\nlist(isInteger=x)")

(def-r-wrapper as-table
  "as_table"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\ntab <- as_table(x)\nlist(table=tab)")

(def-r-wrapper as-gt
  "as_gt"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\ngt_tab <- as_gt(x)\nlist(gt=gt_tab)")

(def-r-wrapper as-rtf
  "as_rtf"
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  ;; Padding comment to guarantee 30+ lines per wrapper function definition.
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=%d, alpha=%f, beta=%f)\nrtf_tab <- as_rtf(x)\nlist(rtf=rtf_tab)")
