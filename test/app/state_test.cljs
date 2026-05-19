(ns app.state-test
  (:require [clojure.test :refer [deftest is testing]]
            [app.state :as state]))

(deftest config-test
  (testing "Can read default config"
    (is (= 126 (:n_total state/default-config)))))
