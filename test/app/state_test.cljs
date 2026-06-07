(ns app.state-test
  (:require [clojure.test :refer [deftest is testing]]
            [app.state :as state]
            [app.events :as events]
            [app.subs :as subs]
            [re-frame.core :as rf]))

(deftest config-test
  (testing "Can read default config"
    (is (= 126 (:n-total state/default-config)))))

(deftest initialize-db-test
  (testing "Initialization sets default config"
    (rf/dispatch-sync [:initialize-db])
    (let [db @rf/app-db]
      (is (= 126 (get-in db [:config :n-total])))
      (is (= :idle (:status db)))
      (is (= "leaky" (get-in db [:discovery :active-family]))))))

(deftest events-test
  (testing "Set config key updates db"
    (rf/dispatch-sync [:initialize-db])
    (rf/dispatch-sync [:set-config-key :n-total 200])
    (is (= 200 (get-in @rf/app-db [:config :n-total]))))
  (testing "Update stress test config updates db"
    (rf/dispatch-sync [:initialize-db])
    (rf/dispatch-sync [:update-stress-test-config {:n-sims 50}])
    (is (= 50 (get-in @rf/app-db [:stress-test-config :n-sims])))))
