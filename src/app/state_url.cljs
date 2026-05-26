(ns app.state-url
  (:require [cognitect.transit :as transit]))

(defn serialize [data]
  (let [writer (transit/writer :json)]
    (transit/write writer data)))

(defn deserialize [s]
  (let [reader (transit/reader :json)]
    (transit/read reader s)))

(defn compress [^string string ^string encoding]
  (let [byte-array (.encode (js/TextEncoder.) string)
        cs (js/CompressionStream. encoding)
        writer (.getWriter (.-writable cs))]
    (.write writer byte-array)
    (.close writer)
    (.arrayBuffer (js/Response. (.-readable cs)))))

(defn decompress [byte-array ^string encoding]
  (let [cs (js/DecompressionStream. encoding)
        writer (.getWriter (.-writable cs))]
    (.write writer byte-array)
    (.close writer)
    (-> (js/Response. (.-readable cs))
        (.arrayBuffer)
        (.then (fn [array-buffer]
                 (.decode (js/TextDecoder.) array-buffer))))))

(defn array-buffer->base64 [ab]
  (let [bytes (js/Uint8Array. ab)
        len (.-length bytes)
        arr (js/Array.)]
    (dotimes [i len]
      (.push arr (js/String.fromCharCode (aget bytes i))))
    (js/btoa (.join arr ""))))

(defn base64->array-buffer [b64]
  (let [binary-str (js/atob b64)
        len (.-length binary-str)
        bytes (js/Uint8Array. len)]
    (dotimes [i len]
      (aset bytes i (.charCodeAt binary-str i)))
    bytes)) ;; Must return Uint8Array/Buffer in Node context for DecompressionStream write

(defn encode-state [data]
  (-> (serialize data)
      (compress "gzip")
      (.then array-buffer->base64)))

(defn decode-state [b64]
  (-> b64
      base64->array-buffer
      (decompress "gzip")
      (.then deserialize)))
