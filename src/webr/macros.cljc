(ns webr.macros
  (:require [clojure.string :as str]))

(defn clean-doc-string
  "Removes everything from a string after the first occurrence of
   \\nDocumentation (including \\nDocumentation itself)."
  [s]
  (if-let [idx (str/index-of s "\nDocumentation")]
    (subs s 0 idx)
    s))

(defmacro def-r-wrapper
  "Generates a standardized, 30+ line ClojureScript wrapper function
   for calling an R function inside the WebR environment.
   
   This macro generates both the single-arity and three-arity versions,
   performs parameter validation, constructs the R script via string formatting
   using cljs.pprint/cl-format, and executes it asynchronously."
  [cljs-name r-name params-spec r-template]
  (let [docstring (clean-doc-string r-name)
        sanitized-specs (map (fn [[p-sym default]]
                               (let [n (name p-sym)
                                     clean-name (str/replace n #"\." "-")]
                                 [(symbol clean-name)
                                  (keyword clean-name)
                                  default]))
                             params-spec)
        let-bindings (apply concat
                            (map (fn [[clean-sym cljs-key default]]
                                   `[~clean-sym (or (get ~'params ~cljs-key)
                                                    ~default)])
                                 sanitized-specs))]
    `(defn ~cljs-name
       ~docstring
       ([~'params]
        (~cljs-name ~'params webr.core/on-done webr.core/on-error))
       ([~'params ~'on-done ~'on-error]
        (assert (map? ~'params) "params must be a map")
        (assert (fn? ~'on-done) "on-done callback must be a function")
        (assert (fn? ~'on-error) "on-error callback must be a function")
        (js/console.log (str "Executing R wrapper: " ~(str cljs-name)))
        (let [~@let-bindings
              ~'r-code (cljs.pprint/cl-format
                        nil
                        (str "library(gsDesign)\n" ~r-template)
                        ~@(map first sanitized-specs))]
          (webr.core/eval-r-code!
           ~'r-code
           (fn [output-lines# result-val#]
             (try
               (let [res-map# (cljs.core/js->clj
                               result-val# :keywordize-keys true)]
                 (js/console.log "R execution succeeded.")
                 (~'on-done output-lines# res-map#))
               (catch :default e#
                 (js/console.error "Error parsing R output: " e#)
                 (~'on-error e#))))
           ~'on-error))))))
