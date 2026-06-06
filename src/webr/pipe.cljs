(ns webr.pipe
  "Piping utilities for chaining WebR evaluations.

   Two strategies:

   1. `concat-pipe!`  — joins multiple R code strings into one script
      and runs them in a single WebR evaluation.  Fast; best when all
      steps share the same R session and you need the combined result.

   2. `promise-pipe!` — chains evaluations sequentially via JS promises.
      Each step receives the previous step's result and may produce new R
      code.  Best when downstream code depends on upstream output.

   Notation for step maps:
     {:code   \"...\"          ; R code string  — static step
      :code-fn (fn [prev]) ; fn producing R code from prior result
      :id     \"my-node\"    ; optional explicit node id
      :deps   [...]        ; extra upstream ids beyond pipe predecessor}"
  (:require [webr.core  :as webr]
            [webr.graph :as graph]))

;; ---------------------------------------------------------------------------
;; Strategy 1: concat-pipe!
;;
;; Concatenates all R snippets, separated by newlines, into one string
;; and submits as a single eval-r-code! call.  The id of the combined
;; node is returned.
;; ---------------------------------------------------------------------------

(defn- step->code
  "Extracts the static :code string from a step, ignoring :code-fn."
  [step]
  (or (:code step)
      (throw (js/Error. (str "concat-pipe! requires :code on every step. "
                             "Step missing it: " (pr-str step))))))

(defn concat-pipe!
  "Runs all `steps` as one concatenated R script.

   `steps` — seq of maps with at least :code.
   `opts`  — options forwarded to eval-r-code!:
     :id       — id for the combined node
     :on-done*  — (fn [id output result])
     :on-error* — (fn [id error])

   Returns the single node id."
  ([steps] (concat-pipe! steps {}))
  ([steps opts]
   (let [combined (clojure.string/join "\n" (map step->code steps))
         all-deps (into [] (mapcat #(or (:deps %) []) steps))]
     (webr/run! combined (merge opts {:deps all-deps})))))

;; ---------------------------------------------------------------------------
;; Strategy 2: promise-pipe!
;;
;; Sequentially evaluates each step, passing the previous result to the
;; next :code-fn (or using static :code).  Returns the final node id.
;;
;; Each step fires a separate WebR evaluation.  The dependency ids from
;; previous steps are automatically recorded in the graph.
;; ---------------------------------------------------------------------------

(defn- step-code
  "Gets R code for a step, optionally calling :code-fn with `prev-result`."
  [step prev-result]
  (cond
    (:code-fn step) ((:code-fn step) prev-result)
    (:code step)    (:code step)
    :else (throw (js/Error. (str "Each step needs :code or :code-fn. Got: "
                                 (pr-str step))))))

(defn- run-step!
  "Recursively evaluates one step, then continues with the rest."
  [steps prev-id prev-result]
  (if (empty? steps)
    prev-id ; return final node id
    (let [step      (first steps)
          remaining (rest steps)
          code      (step-code step prev-result)
          nid       (graph/normalize-id (:id step))
          deps      (cond-> (or (:deps step) [])
                      prev-id (conj prev-id))
          done-cb   (fn [_ _output result]
                      (run-step! remaining nid result))
          err-cb    (fn [id err]
                      (js/console.error
                       "promise-pipe! failed at node" id ":" err))]
      (webr/eval-r-code!
       code
       {:id      nid
        :deps    deps
        :on-done*  done-cb
        :on-error* err-cb}))))

(defn promise-pipe!
  "Chains `steps` sequentially via promises, each step getting the
   prior result.

   `steps` — seq of step maps, each with :code or :code-fn.
   `opts`  — optional map:
     :on-done*  — called with [final-id output result] after all steps
     :on-error* — called with [id error] if any step fails

   Returns the first node id immediately (rest run asynchronously)."
  ([steps] (promise-pipe! steps {}))
  ([steps {:keys [on-done* on-error*]}]
   (when (empty? steps)
     (throw (js/Error. "promise-pipe! requires at least one step.")))
   (let [first-step (first steps)
         rest-steps (rest steps)
         nid        (graph/normalize-id (:id first-step))
         code       (step-code first-step nil)
         deps       (or (:deps first-step) [])
         done-cb    (fn [_ output result]
                      (let [final-id (run-step! rest-steps nid result)]
                        (when on-done*
                          (on-done* final-id output result))))
         err-cb     (or on-error*
                        (fn [id err]
                          (js/console.error
                           "promise-pipe! error at node" id ":" err)))]
     (webr/run! code
                {:id       nid
                 :deps     deps
                 :on-done*  done-cb
                 :on-error* err-cb})
     nid)))

;; ---------------------------------------------------------------------------
;; Convenience: pipe steps from completed graph nodes
;;
;; `from-result` lets you build a step whose R code is derived from the
;; previously stored result of an existing graph node.
;; ---------------------------------------------------------------------------

(defn from-result
  "Builds a step that injects the result of `upstream-id` into `code-fn`.
   `code-fn` receives the CLJS result map and must return an R code string."
  [upstream-id code-fn]
  {:deps    [upstream-id]
   :code-fn (fn [_prev]
              (let [result (graph/result-of upstream-id)]
                (code-fn result)))})
