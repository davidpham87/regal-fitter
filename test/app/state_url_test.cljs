(ns app.state-url-test
  (:require [cljs.test :refer-macros [deftest is testing async]]
            [app.state-url :as state-url]))

(deftest state-url-test
  (testing "serialize and deserialize"
    (let [data {:a 1 :b "two" :c [1 2 3]}
          serialized (state-url/serialize data)
          deserialized (state-url/deserialize serialized)]
      (is (= data deserialized))))

  (testing "encode-decode-state"
    (async done
      (let [data {:a 1 :b "two" :c [1 2 3]}]
        (-> (state-url/encode-state data)
            (.then (fn [b64]
                     (is (string? b64))
                     (state-url/decode-state b64)))
            (.then (fn [decoded]
                     (is (= data decoded))
                     (done)))
            (.catch (fn [err]
                      (is false (str "Failed: " err))
                      (done))))))))
