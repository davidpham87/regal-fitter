(ns app.regal-fit.enrollment-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [app.regal-fit.enrollment :as enrollment]
            [cljs.numpy :as np]))

(defn- cum-enrolled [t enroll-pts enroll-weights]
  (let [pts (.toArray enroll-pts)
        weights (.toArray enroll-weights)]
    (reduce + (keep-indexed
                (fn [i pt] (if (<= pt t) (aget weights i) 0))
                pts))))

(deftest cum-enrolled-test
  (testing "cum-enrolled basic calculation"
    (is (= 100 (cum-enrolled
                 10
                 (np/array #js [5 15])
                 (np/array #js [100 200]))))))

(deftest expected-arm-enrolled-test
  (testing "expected-arm-enrolled calculation"
    (let [calendar-times (np/array #js [1.0 2.0 3.0])
          enroll-pts (np/array #js [0.5 1.5 2.5])
          enroll-weights (np/array #js [10.0 20.0 30.0])
          enrolled (enrollment/expected-arm-enrolled
                     enroll-pts enroll-weights calendar-times 1 2)]
      (is (= [5.0 15.0 30.0] (vec (.toArray enrolled)))))))

(deftest expected-arm-enrolled-followup-test
  (testing "enrolled at a specific time point using expected-arm-enrolled"
    (let [enroll-pts (np/array #js [1.0 2.0 3.0])
          enroll-weights (np/array #js [10.0 20.0 30.0])
          calendar-times (np/array #js [2.5])
          enrolled (enrollment/expected-arm-enrolled
                     enroll-pts enroll-weights calendar-times 1 2)]
      (is (= [15.0] (vec (.toArray enrolled)))))))

(deftest expected-enrollment-times-test
  (testing "expected-enrollment-times band generation"
    (let [cfg {:enroll-bands [[0 12 100] [12 24 200]]}
          [pts weights] (enrollment/expected-enrollment-times cfg)]
      (is (pos? (.-size pts)))
      (is (pos? (.-size weights)))
      (is (< (js/Math.abs (- (reduce + (.toArray weights)) 300))
             1e-9)))))
