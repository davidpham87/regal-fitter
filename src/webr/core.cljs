(ns webr.core
  (:require
   [cljs.core.async :as a :refer [go <!]]
   [cljs.core.async.interop :refer-macros [<p!]]
   [re-frame.core :as rf]
   [re-frame.db :as db]
   [webr.graph :as graph]))

;; ---------------------------------------------------------------------------
;; WebR singleton
;; ---------------------------------------------------------------------------

(defonce webr-instance (atom nil))

;; ---------------------------------------------------------------------------
;; re-frame events  (fully-qualified ::keywords = :webr.core/keyword)
;; ---------------------------------------------------------------------------

(rf/reg-event-db
 ::set-status
 (fn [db [_ status]]
   (assoc-in db [:webr :status] status)))

(rf/reg-event-db
 ::set-node
 (fn [db [_ id node]]
   (assoc-in db [:webr :nodes id] node)))

(rf/reg-event-db
 ::set-error
 (fn [db [_ error-msg]]
   (-> db
       (assoc-in [:webr :error]  error-msg)
       (assoc-in [:webr :result] nil)
       (assoc-in [:webr :output] nil))))

;; ---------------------------------------------------------------------------
;; re-frame subscriptions  (fully-qualified)
;; ---------------------------------------------------------------------------

(rf/reg-sub
 ::status
 (fn [db _] (get-in db [:webr :status] :idle)))

(rf/reg-sub
 ::nodes
 (fn [db _] (get-in db [:webr :nodes] {})))

(rf/reg-sub
 ::node
 (fn [db [_ id]] (get-in db [:webr :nodes id])))

(rf/reg-sub
 ::error
 (fn [db _] (get-in db [:webr :error])))

;; ---------------------------------------------------------------------------
;; Default callbacks that write into re-frame db
;; ---------------------------------------------------------------------------

(defn on-done
  "Default on-done: syncs the graph node into re-frame db."
  [id output result]
  (rf/dispatch [::set-status :done])
  (rf/dispatch [::set-node id (graph/get-node id)]))

(defn on-error
  "Default on-error: updates graph node and re-frame db."
  [id err]
  (rf/dispatch [::set-status :error])
  (rf/dispatch [::set-node id (graph/get-node id)])
  (rf/dispatch [::set-error (str err)]))

;; ---------------------------------------------------------------------------
;; WebR initialization
;; ---------------------------------------------------------------------------

(defn init-webr!
  "Initializes the WebR WASM runtime instance.

   Args:
   - on-ready: (fn [webr-instance]) — called when WebR is ready.
   - on-error: (fn [error])         — called on init failure."
  [on-ready on-err]
  (assert (fn? on-ready) "on-ready callback must be a function")
  (assert (fn? on-err)   "on-error callback must be a function")
  (go
    (try
      (if-let [existing @webr-instance]
        (do
          (js/console.log "WebR already initialized, returning cached instance.")
          (on-ready existing))
        (if (exists? js/WebR)
          (let [opts {:channelType 3
                      :baseUrl "https://webr.r-wasm.org/v0.5.7/"}
                webr (new js/WebR (clj->js opts))]
            (js/console.log "Starting WebR WASM runtime initialization...")
            (reset! webr-instance webr)
            (<p! (.init webr))
            (js/console.log "Installing gsDesign R package...")
            (<p! (.evalR webr "webr::install('gsDesign')"))
            (js/console.log "gsDesign installed. WebR ready.")
            (on-ready webr))
          (do
            (js/console.error "js/WebR global not found.")
            (on-err (js/Error. "WebR script not loaded in index.html")))))
      (catch :default e
        (js/console.error "WebR init failed:" e)
        (reset! webr-instance nil)
        (on-err e)))))

;; ---------------------------------------------------------------------------
;; Core evaluation — id-aware
;; ---------------------------------------------------------------------------

(defn clean-webr-value
  "Recursively formats/cleans parsed WebR objects.
   Specifically, if a node is a WebR list map:
     {:type \"list\", :names [...], :values [...]}
   it transforms it into a standard Clojure map by zipping the names with
   recursively cleaned values.

   If the list has nil names but contains values that are named lists, we extract those.
   If it's a leaf node like a double/integer/character vector, we return its values vector."
  [val]
  (cond
    ;; Handle named lists (e.g. data frames or structured results)
    (and (map? val) (= (:type val) "list") (seq (:names val)))
    (let [names  (map keyword (:names val))
          values (map clean-webr-value (:values val))]
      (zipmap names values))

    ;; Handle unnamed list containing a single named list (like a multi-page dataframe or summary response)
    (and (map? val) (= (:type val) "list") (nil? (:names val)) (= (count (:values val)) 1))
    (clean-webr-value (first (:values val)))

    ;; Handle leaf vectors (like double, integer, logical, character)
    (and (map? val) (contains? val :type) (contains? val :values))
    (let [names        (:names val)
          inner-values (:values val)]
      (if (and (seq names) (sequential? inner-values))
        (let [ks (map keyword names)
              vs (mapv clean-webr-value inner-values)]
          (zipmap ks vs))
        (if (sequential? inner-values)
          (mapv clean-webr-value inner-values)
          (clean-webr-value inner-values))))

    (map? val)
    (update-vals val clean-webr-value)

    (sequential? val)
    (mapv clean-webr-value val)

    :else val))

(defn eval-r-code!
  "Evaluates R `code` in the WebR instance.

   Options map:
     :id     — Node id (auto-generated if omitted).
     :deps   — Vector of upstream node ids this depends on.
     :on-done  — (fn [id output result]) — defaults to re-frame dispatch.
     :on-error — (fn [id error])          — defaults to re-frame dispatch.

   Returns the node id immediately (before async completion)."
  ([code] (eval-r-code! code {}))
  ([code {:keys [id deps on-done* on-error*]
          :or   {deps []}}]
   (assert (string? code) "R code must be a string")
   (let [nid     (graph/normalize-id id)
         done-cb (or on-done*  (partial on-done  nid))
         err-cb  (or on-error* (partial on-error nid))]
     (graph/create-node! nid code deps)
     (graph/set-running! nid)
     (rf/dispatch [::set-status :running])
     (if-let [webr @webr-instance]
       (try
         (-> (.evalR webr code)
             (.then (fn [res] (.toJs res)))
             (.then (fn [js-val]
                      (let [parsed (try (js->clj js-val :keywordize-keys true)
                                        (catch :default _ js-val))
                            result (clean-webr-value parsed)]
                        (tap> result)
                        (graph/set-done! nid [] result)
                        (done-cb [] result))))
             (.catch (fn [err]
                       (js/console.error "evalR failed:" err)
                       (graph/set-error! nid (str err))
                       (err-cb err))))
         (catch :default e
           (js/console.error "Sync failure in eval-r-code!:" e)
           (graph/set-error! nid (str e))
           (err-cb e)))
       (let [msg "WebR not initialized. Call init-webr! first."]
         (graph/set-error! nid msg)
         (err-cb (js/Error. msg))))
     nid)))

;; ---------------------------------------------------------------------------
;; Ensure WebR is ready then evaluate
;; ---------------------------------------------------------------------------

(defn run!
  "Ensures WebR is initialized, then calls eval-r-code!.
   Same options as eval-r-code!. Returns node id."
  ([code] (run! code {}))
  ([code opts]
   (let [nid (graph/normalize-id (:id opts))]
     (rf/dispatch [::set-status :initializing])
     (if @webr-instance
       (eval-r-code! code (assoc opts :id nid))
       (init-webr!
        (fn [_]
          (rf/dispatch [::set-status :ready])
          (eval-r-code! code (assoc opts :id nid)))
        (fn [e]
          (graph/create-node! nid code (:deps opts []))
          (graph/set-error! nid (str "Init failed: " e))
          (rf/dispatch [::set-status :error])
          (rf/dispatch [::set-error (str "Init failed: " e)]))))
     nid)))


(comment
  @db/app-db
  )
