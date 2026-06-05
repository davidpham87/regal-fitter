(ns app.webr
  (:require [cljs.core.async :as a :refer [go <!]]
            [cljs.core.async.interop :refer-macros [<p!]]))

(defonce webr-instance (atom nil))

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
  [code on-done on-error]
  (assert (string? code) "R code to execute must be a string")
  (assert (fn? on-done) "on-done callback must be a function")
  (assert (fn? on-error) "on-error callback must be a function")
  (a/go
    (if-let [webr @webr-instance]
      (let [shelter-class (.-Shelter webr)]
        (if shelter-class
          (let [shelter (new shelter-class)]
            (try
              (when (exists? (.-init shelter))
                (<p! (.init shelter)))
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
      (on-error (js/Error. "WebR instance not initialized. Call init-webr! first.")))))
