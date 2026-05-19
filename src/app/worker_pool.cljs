(ns app.worker-pool)

(def pool (atom []))
(def job-queue (atom []))
(def busy-workers (atom #{}))
(def job-callbacks (atom {}))
(def job-counter (atom 0))

(defn create-worker! []
  (let [worker (js/Worker. "/pyodide_worker.js")]
    (set! (.-onmessage worker)
          (fn [event]
            (let [data (.-data event)
                  job-id (.-id data)
                  type (.-type data)
                  result (js->clj (.-result data) :keywordize-keys true)
                  success? (.-success data)
                  error (.-error data)]

              (when (= type "SIMULATION_RESULT")
                (when-let [cb (get @job-callbacks job-id)]
                  (swap! job-callbacks dissoc job-id)
                  (cb {:success? success? :result result :error error}))

                (swap! busy-workers disj worker)
                (swap! pool conj worker)
                ;; process next job
                (app.worker-pool/process-queue!)))))
    worker))

(defn init-pool! [size]
  (let [actual-size (if (and size (> size 0)) size
                        (js/Math.max 1 (- (.-hardwareConcurrency js/navigator) 1)))]
    (js/console.log "Initializing worker pool of size:" actual-size)
    (reset! pool (into [] (repeatedly actual-size create-worker!)))))

(defn process-queue! []
  (when (and (seq @job-queue) (seq @pool))
    (let [worker (peek @pool)
          job (first @job-queue)]
      (swap! pool pop)
      (swap! job-queue rest)
      (swap! busy-workers conj worker)

      (let [job-id (swap! job-counter inc)]
        (swap! job-callbacks assoc job-id (:callback job))
        (.postMessage worker (clj->js {:id job-id
                                       :type "RUN_SIMULATION"
                                       :data (:data job)}))))))

(defn submit-job! [data callback]
  (swap! job-queue conj {:data data :callback callback})
  (process-queue!))

(defn clear-queue! []
  (reset! job-queue [])
  (reset! job-callbacks {}))
