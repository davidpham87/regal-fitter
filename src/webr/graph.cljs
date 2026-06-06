(ns webr.graph)

;; ---------------------------------------------------------------------------
;; Computation graph
;;
;; Each node in the graph represents one webr evaluation and carries:
;;   :id       — unique string identifier (auto or user-supplied)
;;   :code     — the R code string that was evaluated
;;   :status   — :pending | :running | :done | :error
;;   :output   — vector of R output lines
;;   :result   — parsed CLJS value returned by WebR
;;   :error    — error string when :status is :error
;;   :deps     — vector of upstream node ids this computation depends on
;;   :created-at — epoch ms
;;   :updated-at — epoch ms
;; ---------------------------------------------------------------------------

(defonce graph
  ;; Map of id -> computation node.
  (atom {}))

;; ---------------------------------------------------------------------------
;; ID generation
;; ---------------------------------------------------------------------------

(defn gen-id
  "Generates a random node id like \"webr-4a3f\"."
  []
  (str "webr-" (-> (random-uuid) str (subs 0 8))))

(defn normalize-id
  "Returns id as-is if provided, else generates a fresh one."
  [id]
  (or (when (and id (not= id "")) (str id)) (gen-id)))

;; ---------------------------------------------------------------------------
;; Node lifecycle
;; ---------------------------------------------------------------------------

(defn create-node!
  "Registers a new node with :pending status.
   Returns the id."
  [id code deps]
  (let [now  (.now js/Date)
        node {:id         id
              :code       code
              :status     :pending
              :output     []
              :result     nil
              :error      nil
              :deps       (vec deps)
              :created-at now
              :updated-at now}]
    (swap! graph assoc id node)
    id))

(defn update-node!
  "Merges `fields` into the node identified by `id`, updating :updated-at."
  [id fields]
  (swap! graph update id merge fields {:updated-at (.now js/Date)}))

(defn set-running! [id]
  (update-node! id {:status :running}))

(defn set-done! [id output result]
  (update-node! id {:status :done
                    :output output
                    :result result
                    :error  nil}))

(defn set-error! [id err-msg]
  (update-node! id {:status :error
                    :error  err-msg
                    :result nil
                    :output []}))

;; ---------------------------------------------------------------------------
;; Graph queries
;; ---------------------------------------------------------------------------

(defn get-node
  "Returns the node map for `id`, or nil if not found."
  [id]
  (get @graph id))

(defn result-of
  "Returns the :result of a completed node, or nil."
  [id]
  (:result (get-node id)))

(defn all-nodes
  "Returns the full graph map (id -> node)."
  []
  @graph)

(defn clear-graph!
  "Removes all nodes from the computation graph."
  []
  (reset! graph {}))

(defn dependents-of
  "Returns all node ids whose :deps include `id`."
  [id]
  (keep (fn [[nid node]]
          (when (some #{id} (:deps node)) nid))
        @graph))
