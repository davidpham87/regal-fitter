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
  "Generates three ClojureScript definitions for an R function in WebR.

   Given `(def-r-wrapper gs-design ...)` the macro emits:

   1. `gs-design-code` — pure fn (params) -> R code string.
      No side effects; safe to call anywhere, including :code-fn steps.

   2. `gs-design->step` — pure fn (params) -> pipe step map.
      Returns {:code <r-code>} merged with any extra opts map supplied.
      Use directly inside concat-pipe! / promise-pipe! step vectors.

   3. `gs-design` — async executor. Two arities:
      - (params)                   auto-id, default re-frame callbacks.
      - (params on-done* on-error*) explicit (fn [id output result]) callbacks.

   Dot-containing param names (e.g. test.type) are sanitised to dashes
   (:test-type) in the CLJS params map."
  [cljs-name r-name params-spec r-template]
  (let [docstring      (clean-doc-string r-name)
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

        r-code-expr
        `(cljs.pprint/cl-format
          nil
          (str "library(gsDesign)\n" ~r-template)
          ~@(map first sanitized-specs))

        code-name  (symbol (str (name cljs-name) "-code"))
        step-name  (symbol (str (name cljs-name) "->step"))]

    `(do
       ;; ---------------------------------------------------------------
       ;; 1. Pure code builder
       ;; ---------------------------------------------------------------
       (defn ~code-name
         ~(str "Returns the R code string for " (name cljs-name)
               " given `params`.\n"
               "Applies defaults from the params-spec.\n"
               "No side effects — safe inside :code-fn steps.")
         [~'params]
         (assert (map? ~'params) "params must be a map")
         (let [~@let-bindings]
           ~r-code-expr))

       ;; ---------------------------------------------------------------
       ;; 2. Pipe step builder
       ;; ---------------------------------------------------------------
       (defn ~step-name
         ~(str "Returns a pipe step map for " (name cljs-name) ".\n"
               "Usage: (concat-pipe! [(gs-design->step {:k 3})])\n"
               "       (promise-pipe! [(gs-design->step {:k 3} {:id \"d\"})])\n"
               "Optional `opts` map is merged in (supports :id, :deps, :code-fn).")
         ([~'params]
          (~step-name ~'params {}))
         ([~'params ~'opts]
          (assert (map? ~'params) "params must be a map")
          (merge {:code (~code-name ~'params)} ~'opts)))

       ;; ---------------------------------------------------------------
       ;; 3. Async executor (unchanged from before)
       ;; ---------------------------------------------------------------
       (defn ~cljs-name
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
              :on-error* ~'on-error})))))))
