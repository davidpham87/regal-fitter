(ns app.worker-pool)

(def pool (atom []))
(def job-queue (atom []))
(def busy-workers (atom #{}))
(def job-callbacks (atom {}))
(def job-counter (atom 0))

(declare process-queue!)

(defn create-worker! []
  (let [worker (js/Worker. "js/worker/worker.js")]
    (set! (.-jobsProcessed worker) 0)
    (set! (.-onmessage worker)
          (fn [event]
            (let [data (.-data ^js event)
                  job-id (.-id ^js data)
                  type (.-type ^js data)
                  result (js->clj
                          (.-result ^js data)
                          :keywordize-keys true)
                  success? (.-success ^js data)
                  error (.-error ^js data)]

               (when (= type "SIMULATION_RESULT")
                 (when-let [cb (get @job-callbacks
                                    job-id)]
                   (swap! job-callbacks dissoc job-id)
                   (cb {:success? success?
                        :result result
                        :error error}))

                 (swap! busy-workers disj worker)
                 (set! (.-jobsProcessed ^js worker) (inc (.-jobsProcessed ^js worker)))
                 (if (or (>= (.-jobsProcessed ^js worker) 50)
                         (= (.-lastJobType ^js worker) "RUN_AGGREGATION"))
                   (do
                     (js/console.log "Recycling worker due to aggregation job or job limit (preventing memory leaks)")
                     (.terminate ^js worker)
                     (swap! pool conj (create-worker!)))
                   (swap! pool conj worker))
                 (app.worker-pool/process-queue!)))))
    (set! (.-onerror worker)
          (fn [err]
            (js/console.error
             "Worker error:" (.-message err))
            (swap! busy-workers disj worker)
            (try
              (.terminate worker)
              (catch :default _))
            (swap! pool conj (create-worker!))
            (process-queue!)))
    worker))

(defn init-pool! [size]
  (let [actual-size (if (and size (> size 0))
                      (js/Math.min 32 size)
                      (js/Math.max
                       1
                       (js/Math.min
                        32
                        (.-hardwareConcurrency js/navigator))))]
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
        (set! (.-lastJobType ^js worker) (get-in job [:data :type]))
        (swap! job-callbacks assoc job-id (:callback job))
        (.postMessage ^js worker (clj->js {:id job-id
                                       :type "RUN_SIMULATION"
                                       :data (:data job)}))))))

(defn submit-job! [data callback]
  (swap! job-queue conj {:data data :callback callback})
  (process-queue!))

(defn clear-queue! []
  (reset! job-queue [])
  (reset! job-callbacks {}))

(defn abort-pool! []
  (reset! job-queue [])
  (reset! job-callbacks {})
  (doseq [w @pool]
    (.terminate w))
  (doseq [w @busy-workers]
    (.terminate w))
  (reset! pool [])
  (reset! busy-workers #{})
  (init-pool! nil))
