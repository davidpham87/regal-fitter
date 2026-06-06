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
  "Generates a ClojureScript wrapper for an R function in WebR.

   The generated function has two arities:
   - (params)                — auto-id, auto-init, default re-frame callbacks.
   - (params on-done* on-error*) — explicit (fn [id output result]) callbacks.

   In both arities, params is destructured with defaults from `params-spec`
   and the R code is built from `r-template` via cl-format."
  [cljs-name r-name params-spec r-template]
  (let [docstring (clean-doc-string r-name)
        sanitized-specs
        (map (fn [[p-sym default]]
               (let [n          (name p-sym)
                     clean-name (str/replace n #"\." "-")]
                 [(symbol clean-name)
                  (keyword clean-name)
                  default]))
             params-spec)
        let-bindings
        (apply concat
               (map (fn [[clean-sym cljs-key default]]
                      `[~clean-sym (or (get ~'params ~cljs-key)
                                       ~default)])
                    sanitized-specs))
        r-code-expr `(cljs.pprint/cl-format
                      nil
                      (str "library(gsDesign)\n" ~r-template)
                      ~@(map first sanitized-specs))]
    `(defn ~cljs-name
       ~docstring
       ([~'params]
        (assert (map? ~'params) "params must be a map")
        (let [~@let-bindings
              ~'r-code ~r-code-expr]
          (webr.core/run! ~'r-code {})))
       ([~'params ~'on-done ~'on-error]
        (assert (map? ~'params) "params must be a map")
        (let [~@let-bindings
              ~'r-code ~r-code-expr]
          (webr.core/run!
           ~'r-code
           {:on-done*  ~'on-done
            :on-error* ~'on-error}))))))
