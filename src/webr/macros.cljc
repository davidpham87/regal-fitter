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
  "Generates three ClojureScript definitions for an R function.

   Given `(def-r-wrapper gs-design ...)` the macro emits:

   1. `gs-design-code`  — pure (params) -> R code string.
      No side effects; safe inside :code-fn steps or at render time.

   2. `gs-design`       — pure step builder.
      (params)        -> step map {:code <r-code>}
      (params opts)   -> step map merged with opts (:id, :deps …)
      Use directly inside concat-pipe! / promise-pipe! step vectors.
      This is the *default* interaction point — no side effects.

   3. `gs-design!`      — async executor (bang = side effects).
      (params)                    auto-id, default re-frame callbacks.
      (params on-done* on-error*) explicit (fn [id output result]) cbs."
  [cljs-name r-name params-spec r-template]
  (let [docstring     (clean-doc-string r-name)
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

        code-name (symbol (str (name cljs-name) "-code"))
        bang-name (symbol (str (name cljs-name) "!"))]

    `(do
       ;; -----------------------------------------------------------
       ;; 1. Pure code builder
       ;; -----------------------------------------------------------
       (defn ~code-name
         ~(str "Returns the R code string for "
               (name cljs-name)
               " given `params`, with defaults applied.\n"
               "No side effects — safe inside :code-fn steps.")
         [~'params]
         (assert (map? ~'params) "params must be a map")
         (let [~@let-bindings]
           ~r-code-expr))

       ;; -----------------------------------------------------------
       ;; 2. Pure step builder  (default interaction point)
       ;; -----------------------------------------------------------
       (defn ~cljs-name
         ~(str "Returns a pipe step map for " (name cljs-name) ".\n"
               "Use inside concat-pipe! or promise-pipe!.\n"
               "  (params)       -> {:code <r-code>}\n"
               "  (params opts)  -> {:code <r-code> …merged opts…}\n"
               "To fire WebR directly, use " (name cljs-name) "!")
         ([~'params]
          (~cljs-name ~'params {}))
         ([~'params ~'opts]
          (assert (map? ~'params) "params must be a map")
          (merge {:code (~code-name ~'params)} ~'opts)))

       ;; -----------------------------------------------------------
       ;; 3. Async executor  (bang = side effects)
       ;; -----------------------------------------------------------
       (defn ~bang-name
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
