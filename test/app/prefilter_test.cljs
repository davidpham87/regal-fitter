(ns app.prefilter-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [app.state :as state]
            [app.regal-fit.prefilter :as prefilter]))

(deftest prefilter-weibull-test
  (testing "Weibull prefilter returns results"
    (let [results (prefilter/apply-prefilter-weibull state/default-config)]
      (is (seq results))
      (is (map? (first results))))))

(deftest prefilter-cure-test
  (testing "Cure prefilter returns results"
    (let [results (prefilter/apply-prefilter-cure state/default-config)]
      (is (seq results))
      (is (map? (first results))))))

(deftest prefilter-leaky-test
  (testing "Leaky prefilter returns results"
    (let [results (prefilter/apply-prefilter-leaky state/default-config)]
      (is (seq results))
      (is (map? (first results))))))
