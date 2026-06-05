(ns app.webr-example
  (:require [app.webr :as webr]
            [re-frame.core :as rf]))

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
  (webr/init-webr!
    (fn [webr-instance]
      (rf/dispatch [:set-webr-status :running])
      (webr/eval-r-code!
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
      (rf/dispatch [:store-webr-error (str "Init failed: " init-error)]))))

(defn register-webr-events!
  "Registers the re-frame event handlers used to manage the WebR lifecycle,
   execution state, and captured outputs in the application state.
   
   Handlers registered:
   - `:set-webr-status`: Updates the current execution state keyword.
   - `:store-webr-results`: Saves successful output logs and return values.
   - `:store-webr-error`: Captures stack traces and error messages.
   
   Using re-frame's standard coeffects to safely interact with global app-state."
  []
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
        {:app-state updated-state}))))
