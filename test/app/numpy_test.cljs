(ns app.numpy-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [cljs.numpy :as np]))

(deftest numpy-test
  (testing "numpy core equivalence"
    (let [arr (np/arange 5)]
      (is (= 5 (.-length arr)))
      (is (= 0 (.item arr 0)))
      (is (= 4 (.item arr 4))))))