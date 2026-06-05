(ns app.webr.macros
  (:require [cljs.pprint :refer [cl-format]]))

(defmacro def-r-wrapper
  "Generates a standardized, 30+ line ClojureScript wrapper function
   for calling an R function inside the WebR environment.
   
   This macro generates both the single-arity and three-arity versions,
   performs parameter validation, constructs the R script via string formatting
   using cljs.pprint/cl-format, and executes it asynchronously."
  [cljs-name r-name params-spec r-template]
  (let [docstring (str "Executes R function " r-name " in WebR runtime.\n\n"
                       "Allows ClojureScript callers to execute R's group sequential methods.\n\n"
                       "Args:\n"
                       "  - params: Map containing function arguments\n"
                       "  - on-done: Success callback fn [output-lines result]\n"
                       "  - on-error: Error callback fn [error]")
        param-keys (vec (map (fn [p] (keyword (clojure.string/replace (name (first p)) #"\." "-"))) params-spec))
        bindings (map (fn [[p-sym default]]
                        (let [cljs-key (keyword (clojure.string/replace (name p-sym) #"\." "-"))]
                          `[~p-sym (or (get ~'params ~cljs-key) ~default)]))
                      params-spec)
        let-bindings (apply concat bindings)]
    `(defn ~cljs-name
       ~docstring
       ([~'params]
        (~cljs-name ~'params app.webr/on-done app.webr/on-error))
       ([~'params ~'on-done ~'on-error]
        (assert (map? ~'params) "params must be a map")
        (assert (fn? ~'on-done) "on-done callback must be a function")
        (assert (fn? ~'on-error) "on-error callback must be a function")
        (js/console.log (str "Executing R wrapper: " ~(str cljs-name)))
        (let [~@let-bindings
              ;; Format the R code dynamically using Common Lisp cl-format.
              ;; This ensures R code variables are cleanly substituted into templates.
              r-code (cljs.pprint/cl-format
                      nil
                      (str "library(gsDesign)\n" ~r-template)
                      ~@(map first params-spec))]
          (app.webr/eval-r-code!
           r-code
           (fn [output-lines# result-val#]
             (try
               (let [res-map# (js->clj result-val# :keywordize-keys true)]
                 (js/console.log "R execution succeeded.")
                 (~'on-done output-lines# res-map#))
               (catch :default e#
                 (js/console.error "Error parsing R output: " e#)
                 (~'on-error e#))))
           ~'on-error))))))
