(ns app.webr
  (:require
   [re-frame.core :as rf]
   [cljs.core.async :as a :refer [go <!]]
   [cljs.core.async.interop :refer-macros [<p!]]))

(defonce webr-instance (atom nil))

(rf/reg-event-fx
 :set-webr-status
 [(rf/inject-cofx :app-state)]
 (fn [{:keys [app-state]} [_ status]]
   {:app-state (assoc-in app-state [:webr :status] status)}))

(rf/reg-event-fx
 :store-webr-results
 [(rf/inject-cofx :app-state)]
 (fn [{:keys [app-state]} [_ {:keys [output result]}]]
   (let [updated-state (-> app-state
                           (assoc-in [:webr :output] output)
                           (assoc-in [:webr :result] result)
                           (assoc-in [:webr :error] nil))]
     {:app-state updated-state})))

(rf/reg-event-fx
 :store-webr-error
 [(rf/inject-cofx :app-state)]
 (fn [{:keys [app-state]} [_ error-msg]]
   (let [updated-state (-> app-state
                           (assoc-in [:webr :output] nil)
                           (assoc-in [:webr :result] nil)
                           (assoc-in [:webr :error] error-msg))]
     {:app-state updated-state})))

(defn init-webr!
  "Initializes the WebR WASM runtime instance.
   Loads the runtime using PostMessage channel type and points to the R-wasm CDN.

   Args:
   - on-ready: A single-argument callback function invoked with the WebR instance.
   - on-error: A single-argument callback function invoked with the error object.

   Ensures that multiple concurrent initialization calls do not conflict by utilizing
   atom checks and try-catch safety boundaries."
  [on-ready on-error]
  (assert (fn? on-ready) "on-ready callback must be a function")
  (assert (fn? on-error) "on-error callback must be a function")
  (a/go
    (try
      (if-let [existing @webr-instance]
        (do
          (js/console.log "WebR already initialized, returning cached instance.")
          (on-ready existing))
        (if (exists? js/WebR)
          (let [options {:channelType 3 ;; PostMessage
                         :baseUrl "https://webr.r-wasm.org/v0.5.7/"}
                webr (new js/WebR (clj->js options))]
            (js/console.log "Starting WebR WASM runtime initialization...")
            (reset! webr-instance webr)
            (<p! (.init webr))
            (js/console.log "WebR WASM runtime successfully initialized.")
            (on-ready webr))
          (do
            (js/console.error "WebR global object js/WebR not found on window context.")
            (on-error (js/Error. "WebR script not loaded in index.html")))))
      (catch :default e
        (js/console.error "Unhandled exception during WebR initialization:" e)
        (reset! webr-instance nil)
        (on-error e)))))

(defn eval-r-code!
  "Evaluates arbitrary R code as a string within the WebR context.
   Uses a WebR Shelter to isolate memory allocation and capture output streams.

   Args:
   - code: String containing the R code to execute.
   - on-done: Two-argument callback (fn [output-lines result-val]) invoked on success.
   - on-error: One-argument callback (fn [error]) invoked on failure.

   Automatically captures stdout/stderr messages and converts the final returned
   RObject back into a standard ClojureScript data structure."
  ([code] (eval-r-code!
           code
           (fn [output-lines result-val]
             (rf/dispatch [:set-webr-status :done])
             (rf/dispatch [:store-webr-results
                           {:output output-lines
                            :result result-val}]))
           (fn [error]
             (rf/dispatch [:set-webr-status :error])
             (rf/dispatch [:store-webr-error (str error)]))))
  ([code on-done on-error]
   (assert (string? code) "R code to execute must be a string")
   (assert (fn? on-done) "on-done callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (a/go
     (if-let [webr @webr-instance]
       (let [shelter-class (.-Shelter webr)]
         (if shelter-class
           (let [s (new shelter-class)
                 shelter (if (instance? js/Promise s)
                           (<p! s)
                           (do
                             (when (exists? (.-init s))
                               (<p! (.init s)))
                             s))]
             (try
               (let [res (<p! (.captureR shelter code (clj->js {:autoprint true})))
                     output-array (.-output res)
                     result-val (.-result res)
                     output-lines (mapv (fn [msg]
                                          (let [t (.-type msg)
                                                d (.-data msg)]
                                            {:type (keyword t) :text d}))
                                        (array-seq output-array))
                     js-val (.toJs result-val)
                     val (if (instance? js/Promise js-val)
                           (<p! js-val)
                           js-val)
                     clj-val (try
                               (js->clj val :keywordize-keys true)
                               (catch :default _ (str result-val)))]
                 (on-done output-lines clj-val))
               (catch :default e
                 (js/console.error "R execution failed inside shelter:" e)
                 (on-error e))
               (finally
                 (try
                   (.purge shelter)
                   (catch :default purge-err
                     (js/console.warn "Failed to purge WebR shelter:" purge-err))))))
           (on-error (js/Error. "Shelter class not found on WebR instance"))))
       (on-error (js/Error. "WebR instance not initialized. Call init-webr! first."))))))

(defn run-example-r-code!
  "Demonstrates how to initialize WebR and execute arbitrary R code,
   dispatching the outcomes (success or failure) back to the application
   via re-frame.

   Args:
   - r-code-string: The string of R code to be executed.

   Steps:
   - Dispatches a status event to indicate R execution is starting.
   - Calls `webr/init-webr!` to ensure the WASM environment is loaded.
   - Calls `webr/eval-r-code!` to run the code.
   - Dispatches success or failure events to update the global app-db."
  [r-code-string]
  (assert (string? r-code-string) "R code must be a string")
  (rf/dispatch [:set-webr-status :initializing])

  (when-not @webr-instance
    (init-webr!
     (fn [webr-instance]
       (rf/dispatch [:set-webr-status :running])
       (eval-r-code!
        r-code-string
        (fn [output-lines result-val]
          (rf/dispatch [:set-webr-status :done])
          (rf/dispatch [:store-webr-results
                        {:output output-lines
                         :result result-val}]))
        (fn [error]
          (rf/dispatch [:set-webr-status :error])
          (rf/dispatch [:store-webr-error (str error)]))))
     (fn [init-error]
       (rf/dispatch [:set-webr-status :error])
       (rf/dispatch [:store-webr-error (str "Init failed: " init-error)])))))

(comment

  (init-webr!
   (fn [webr-instance]
     (rf/dispatch [:set-webr-status :running]))
   (fn [init-error]
     (rf/dispatch [:set-webr-status :error])
     (rf/dispatch [:store-webr-error (str "Init failed: " init-error)])))

  (eval-r-code!
   "randn(100)"
   (fn [output-lines result-val]
     (rf/dispatch [:set-webr-status :done])
     (rf/dispatch [:store-webr-results
                   {:output output-lines
                    :result result-val}]))
   (fn [error]
     (rf/dispatch [:set-webr-status :error])
     (rf/dispatch [:store-webr-error (str error)]))))
