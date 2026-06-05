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
  [params on-success on-error]
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
     on-error)))

(defn get-gs-design-summary!
  "Computes and returns the text summary of a group sequential design.
   
   Args:
   - params: Map containing R parameter settings for gsDesign.
   - on-success: Callback fn [summary-text] invoked with the printed summary.
   - on-error: Callback fn [error-object] invoked on failure.
   
   Constructs the gsDesign command, runs summary() on it, and returns the printed
   console stdout string representation."
  [params on-success on-error]
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
                    "print(x)")]
    (webr/eval-r-code!
     r-code
     (fn [output-lines result-val]
       (try
         (let [stdout-lines (filter #(= (:type %) :stdout) output-lines)
               summary-txt (str/join "\n" (map :text stdout-lines))]
           (on-success summary-txt))
         (catch :default e
           (on-error e))))
     on-error)))
