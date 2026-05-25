(ns app.db
  (:require [cljs.core.async :refer [go <! chan put! close!]]))

(def db-name "SimulationCache")
(def store-name "results")
(def version 1)

(defonce ^:private db-connection (atom nil))

(defn- open-db []
  (let [out (chan)]
    (if-let [db @db-connection]
      (put! out db)
      (let [request (.open js/self.indexedDB db-name version)]
        (set! (.-onupgradeneeded request)
              (fn [event]
                (let [db (.-result (.-target event))]
                  (when-not (.contains (.-objectStoreNames db) store-name)
                    (.createObjectStore db store-name)))))
        (set! (.-onsuccess request)
              (fn [event]
                (let [db (.-result (.-target event))]
                  (reset! db-connection db)
                  (put! out db))))
        (set! (.-onerror request)
              (fn [event]
                (js/console.error "IndexedDB error:" (.-error (.-target event)))
                (close! out)))))
    out))

(defn get-cache [k]
  (let [out (chan)]
    (go
      (let [db (<! (open-db))]
        (if db
          (let [transaction (.transaction db (clj->js [store-name]) "readonly")
                store (.objectStore transaction store-name)
                request (.get store (str k))]
            (set! (.-onsuccess request)
                  (fn [event]
                    (if-let [res (.-result (.-target event))]
                      (put! out (js->clj res :keywordize-keys true))
                      (close! out))))
            (set! (.-onerror request)
                  (fn [event]
                    (close! out))))
          (close! out))))
    out))

(defn set-cache [k value]
  (let [out (chan)]
    (go
      (let [db (<! (open-db))]
        (if db
          (let [transaction (.transaction db (clj->js [store-name]) "readwrite")
                store (.objectStore transaction store-name)
                request (.put store (clj->js value) (str k))]
            (set! (.-onsuccess request)
                  (fn [event]
                    (put! out true)))
            (set! (.-onerror request)
                  (fn [event]
                    (put! out false))))
          (put! out false))))
    out))

(defn hash-key [data]
  (hash (str data)))
