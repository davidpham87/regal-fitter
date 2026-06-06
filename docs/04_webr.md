# WebR Integration Guide

This document describes the `webr` namespace family — a ClojureScript
layer on top of the [WebR](https://webr.r-wasm.org) WASM runtime that
lets you evaluate R code from the browser, track every evaluation in a
**computation graph**, subscribe to results through **re-frame**, and
compose multi-step R workflows via two **pipe** strategies.

---

## Namespace overview

| Namespace     | File                      | Purpose                              |
|---------------|---------------------------|--------------------------------------|
| `webr.core`   | `src/webr/core.cljs`      | Init, eval, re-frame events/subs     |
| `webr.graph`  | `src/webr/graph.cljs`     | Computation graph (node lifecycle)   |
| `webr.pipe`   | `src/webr/pipe.cljs`      | Concat-pipe and promise-pipe         |
| `webr.macros` | `src/webr/macros.cljc`    | `def-r-wrapper` macro                |

---

## 1. Initialisation

WebR runs a WebAssembly R interpreter.  It must be initialised once
before any code can be evaluated.  `webr.core/run!` handles this
automatically, but you can also initialise explicitly:

```clojure
(require '[webr.core :as webr])

(webr/init-webr!
  (fn [_instance] (println "WebR ready"))
  (fn [err]       (println "Init failed:" err)))
```

`init-webr!` is idempotent — repeated calls return the cached instance.
The runtime installs the `gsDesign` R package on first boot.

---

## 2. Single evaluation — `eval-r-code!` and `run!`

### `run!`  *(recommended entry point)*

Ensures WebR is initialised, then evaluates R code.
Returns a **node id** immediately; the result arrives asynchronously.

```clojure
;; Simplest form — auto-id, default re-frame callbacks
(webr/run! "rnorm(10)")

;; With an explicit id
(webr/run! "mean(rnorm(1000))" {:id "my-mean"})

;; With explicit callbacks
(webr/run! "mean(rnorm(1000))"
           {:id       "my-mean"
            :on-done*  (fn [id _output result]
                         (println "Node" id "result:" result))
            :on-error* (fn [id err]
                         (println "Node" id "failed:" err))})
```

### `eval-r-code!`  *(lower-level)*

Same options as `run!`, but **does not** auto-initialise WebR.
Use when you know WebR is already running.

```clojure
(webr/eval-r-code!
  "qnorm(0.975)"
  {:id      "z-critical"
   :deps    ["my-mean"]   ; upstream node ids this depends on
   :on-done* (fn [id _ result] (println id result))})
```

### Options map

| Key          | Type              | Default           | Description                              |
|--------------|-------------------|-------------------|------------------------------------------|
| `:id`        | string            | auto-generated    | Node identifier in the computation graph |
| `:deps`      | vector of strings | `[]`              | Upstream node ids this evaluation depends on |
| `:on-done*`  | `(fn [id out res])` | re-frame dispatch | Called on success                        |
| `:on-error*` | `(fn [id err])`   | re-frame dispatch | Called on failure                        |

---

## 3. The computation graph

Every `eval-r-code!` / `run!` call registers a **node** in
`webr.graph/graph`.  You never need to manage this atom directly —
the helper functions are the public API.

### Node structure

```clojure
{:id         "my-mean"          ; string
 :code       "mean(rnorm(1000))" ; the R code evaluated
 :status     :done              ; :pending | :running | :done | :error
 :output     []                 ; R console output lines
 :result     {:value 0.042}     ; parsed CLJS value
 :error      nil                ; error string when :status = :error
 :deps       []                 ; upstream node ids
 :created-at 1717663200000      ; epoch ms
 :updated-at 1717663201234}
```

### Graph API

```clojure
(require '[webr.graph :as graph])

;; Look up a node by id
(graph/get-node "my-mean")
;;=> {:id "my-mean" :status :done :result {...} ...}

;; Get just the result of a completed node
(graph/result-of "my-mean")
;;=> {:value 0.042}

;; All nodes in the graph
(graph/all-nodes)
;;=> {"my-mean" {...} "z-critical" {...}}

;; Which nodes depend on this one?
(graph/dependents-of "my-mean")
;;=> ["z-critical"]

;; Clear everything (e.g. on session reset)
(graph/clear-graph!)
```

### Generating ids

```clojure
;; Auto-generate a unique id ("webr-4a3f1b2c")
(graph/gen-id)

;; Normalise: use provided id or generate one
(graph/normalize-id "my-step")  ;;=> "my-step"
(graph/normalize-id nil)        ;;=> "webr-7d2e0c1a"
```

---

## 4. re-frame subscriptions

When no custom callbacks are supplied, results flow into re-frame
automatically.  Subscribe using **fully-qualified keywords**
(`::webr.core/...`):

```clojure
(require '[re-frame.core :as rf]
         '[webr.core])

;; Global status
@(rf/subscribe [::webr.core/status])
;;=> :idle | :initializing | :ready | :running | :done | :error

;; All graph nodes (map of id -> node)
@(rf/subscribe [::webr.core/nodes])

;; Single node by id
@(rf/subscribe [::webr.core/node "my-mean"])

;; Last error message
@(rf/subscribe [::webr.core/error])
```

In a Reagent component:

```clojure
(defn result-panel []
  (let [node @(rf/subscribe [::webr.core/node "my-mean"])]
    [:div
     [:p "Status: " (name (:status node :pending))]
     [:pre (pr-str (:result node))]]))
```

---

## 5. Piping — `webr.pipe`

Piping lets you compose multiple R evaluations into a workflow.
Two strategies are available.

### Strategy 1 — `concat-pipe!`

Joins all R snippets into **one string** and submits a single
`eval-r-code!`.  Best when the steps are simple sequential R statements
that share one session scope.

```clojure
(require '[webr.pipe :as pipe])

(pipe/concat-pipe!
  [{:code "library(gsDesign)"}
   {:code "d <- gsDesign(k = 3, test.type = 4)"}
   {:code "d$upper$bound"}]
  {:id "gs-bounds"})
```

All `:deps` from individual steps are merged and attached to the single
combined node.

### Strategy 2 — `promise-pipe!`

Chains steps **sequentially** as promise calls.  Each step receives the
CLJS result of the previous step and can generate R code dynamically
via `:code-fn`.

```clojure
(pipe/promise-pipe!
  [;; Step 1 — static code, explicit id
   {:id   "design"
    :code "library(gsDesign)\nd <- gsDesign(k = 3)\nlist(n = d$n.I, bound = d$upper$bound)"}

   ;; Step 2 — code derived from step 1's result
   {:id      "power"
    :code-fn (fn [prev]
               (let [n (-> prev :n first)]
                 (str "gsProbability(theta=0.3, n.I=c(" n "),"
                      " a=c(-20), b=c(2))")))
    :deps    ["design"]}]   ; explicit dep (auto-added too)

  ;; Optional final callback
  {:on-done* (fn [final-id _output result]
               (println "Pipeline done at node" final-id)
               (println "Result:" result))})
```

Each step records itself in the computation graph with the previous
step's id in its `:deps` automatically.

### Step map reference

| Key        | Required?                   | Description                                          |
|------------|-----------------------------|------------------------------------------------------|
| `:code`    | One of `:code`/`:code-fn`   | Static R code string                                 |
| `:code-fn` | One of `:code`/`:code-fn`   | `(fn [prev-result]) -> string`; for dynamic code     |
| `:id`      | No                          | Node id; auto-generated if omitted                   |
| `:deps`    | No                          | Extra upstream ids (previous step added automatically)|

### `from-result` — referencing existing graph nodes

Build a pipe step that reads from an **already-completed** graph node
rather than the previous pipeline step:

```clojure
;; Assume "design" was computed earlier in a separate run!
## 6. Wrapping R functions — `def-r-wrapper`

The `def-r-wrapper` macro generates **three** ClojureScript definitions
for every R function it wraps, following the Clojure `!` convention:
plain name = pure/data, bang = side effects.

```clojure
(ns my-ns
  (:require [webr.core])
  (:require-macros [webr.macros :refer [def-r-wrapper]]))

(def-r-wrapper
  my-gs-design          ;; base name
  "gsDesign"            ;; R function name (used as docstring base)
  [[k        3]         ;; [param-name default-value]
   [test.type 4]        ;; dots sanitised to dashes  (:test-type)
   [alpha     0.025]
   [beta      0.1]]
  "gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)")
```

### What gets generated

| Name | Pure? | Returns |
|---|---|---|
| `my-gs-design-code` | ✅ | R code string |
| `my-gs-design` | ✅ | Pipe step map `{:code …}` |
| `my-gs-design!` | ❌ | Node id (fires WebR async) |

#### `my-gs-design-code` — pure R code builder

Takes params, returns the R code string with defaults applied.
No side effects — safe inside `:code-fn` steps or at render time.

```clojure
(my-gs-design-code {:k 3 :alpha 0.025})
;;=> "library(gsDesign)\ngsDesign(k=3, test.type=4, alpha=0.025, beta=0.1)"
```

#### `my-gs-design` — pure step builder *(default interaction point)*

Returns a step map ready for `concat-pipe!` / `promise-pipe!`.
Accepts an optional opts map merged into the step (`:id`, `:deps` …).

```clojure
(my-gs-design {:k 3})
;;=> {:code "library(gsDesign)\ngsDesign(k=3, ...)"}

(my-gs-design {:k 3} {:id "design" :deps []})
;;=> {:code "..." :id "design" :deps []}
```

#### `my-gs-design!` — async executor *(bang = side effects)*

Fires WebR immediately.  Two arities:

```clojure
;; Single-arity: auto-id, auto-init, default re-frame callbacks
(my-gs-design! {:k 3 :test-type 4 :alpha 0.025 :beta 0.1})

;; Three-arity: explicit callbacks
(my-gs-design!
  {:k 3 :test-type 4}
  (fn [id _output result] (println "Done:" id result))
  (fn [id err]            (println "Error at" id err)))
```

### Using wrappers in a pipe

```clojure
(require '[webr.pipe :as pipe])

;; --- concat-pipe!: all steps in one R session call ---
(pipe/concat-pipe!
  [(my-gs-design     {:k 3 :alpha 0.025} {:id "design"})
   (my-gs-probability {:theta 0.3}        {:id "power"})]
  {:id "full-pipeline"})

;; --- promise-pipe!: sequential, each step sees prior result ---
(pipe/promise-pipe!
  [(my-gs-design {:k 3} {:id "design"})

   ;; Dynamic step: R code built from prior result
   {:id      "power"
    :deps    ["design"]
    :code-fn (fn [prev-result]
               (my-gs-probability-code
                 {:theta 0.35
                  :n-i   (-> prev-result :n-i first)}))}])

;; --- Reference an already-completed graph node ---
(pipe/promise-pipe!
  [(my-gs-design {:k 3} {:id "d"})
   (pipe/from-result "d"
                     (fn [r]
                       (my-gs-bound-summary-code {:k (:k r)})))])
```

Note: `test.type` in R becomes `:test-type` in ClojureScript params
(dots replaced by dashes automatically by the macro).

---

## 7. Viewing the graph in the REPL

```clojure
;; All nodes, prettily
(cljs.pprint/pprint (webr.graph/all-nodes))

;; Just the ids and statuses
(->> (webr.graph/all-nodes)
     (map (fn [[id node]] [id (:status node)]))
     (into {}))
;;=> {"my-mean" :done, "z-critical" :error}

;; Check if a dep chain is all :done
(defn all-done? [ids]
  (every? #(= :done (:status (webr.graph/get-node %))) ids))

(all-done? ["design" "power"])
;;=> true
```

---

## 8. Error handling

All paths surface errors in two places simultaneously:

1. **The graph node** — `(:error (graph/get-node id))` contains the
   error message string; `(:status ...)` is `:error`.
2. **re-frame db** — `@(rf/subscribe [::webr.core/error])` holds the
   last error message; `::webr.core/status` is `:error`.

Custom `:on-error*` callbacks receive `[id error-object]` and can
inspect `(.-message err)` for the JS error message.

```clojure
(webr/run! "stop('deliberate R error')"
           {:id       "fail-node"
            :on-error* (fn [id err]
                         (println "Node" id "failed with:"
                                  (.-message err))
                         ;; node is still in the graph
                         (println (webr.graph/get-node id)))})
```

---

## 9. Full worked example

```clojure
(ns my-app.analysis
  (:require [webr.core  :as webr]
            [webr.pipe  :as pipe]
            [webr.graph :as graph]
            [re-frame.core :as rf]))

;; Step 1 — run a group-sequential design
(def design-id
  (webr/run!
   "library(gsDesign)
    d <- gsDesign(k = 3, test.type = 4, alpha = 0.025, beta = 0.1)
    list(k     = d$k,
         bound = as.list(d$upper$bound),
         n     = as.list(d$n.I))"
   {:id "trial-design"}))

;; Step 2 — pipe from that design into a power calculation
;;           (fires once design-id node is :done)
(pipe/promise-pipe!
 [(pipe/from-result
   "trial-design"
   (fn [r]
     (let [n (-> r :n first)]
       (str "gsProbability(theta = 0.35,"
            " n.I = c(" n "),"
            " a   = c(-20),"
            " b   = c(2.0))"))))
  {:id "power-at-theta-035"}]

 {:on-done* (fn [id _ result]
              (println "Power pipeline complete at" id)
              (println "Result:" result))})

;; Step 3 — check graph state at any point
(comment
  (graph/get-node "trial-design")
  (graph/get-node "power-at-theta-035")
  (graph/all-nodes))

;; Step 4 — subscribe in a Reagent component
(defn power-display []
  (let [node   @(rf/subscribe [::webr.core/node "power-at-theta-035"])
        status (:status node :pending)]
    [:div
     [:h3 "Power Analysis"]
     (case status
       :pending  [:p "Waiting for design to complete..."]
       :running  [:p.animate-pulse "Computing..."]
       :done     [:pre (pr-str (:result node))]
       :error    [:p.text-red-600 "Error: " (:error node)])]))
```
