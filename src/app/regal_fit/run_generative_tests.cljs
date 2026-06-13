(ns app.regal-fit.run-generative-tests
  "Node script to run equivalent ClojureScript functions on generated arguments
  extracted from SQLite database and verify results."
  (:require [app.regal-fit.survival :as survival]
            [cljs.numpy :as np]
            ["sqlite3" :as sqlite3]))

(defn approx= [a b epsilon]
  (< (js/Math.abs (- a b)) epsilon))

(defn check-result [func-name args expected got]
  (let [epsilon 1e-5]
    (if (number? expected)
      (if (approx= expected got epsilon)
        true
        (do (println "FAIL:" func-name "args:" args
                     "Expected:" expected "Got:" got)
            false))
      (let [len (.-length expected)
            mismatches (filter (fn [i]
                                 (not (approx= (aget expected i)
                                               (aget got i)
                                               epsilon)))
                               (range len))]
        (if (empty? mismatches)
          true
          (do (println "FAIL:" func-name "args:" args
                       "Expected:" (js->clj expected)
                       "Got:" (js->clj got))
              false))))))

(defn run-case [row]
  (let [func (.-func row)
        args (js/JSON.parse (.-args_json row))
        expected (js/JSON.parse (.-expected_json row))]
    (cond
      (= func "weibull_scale_from_median")
      (let [median (aget args 0)
            shape (aget args 1)
            got (survival/weibull-scale-from-median median shape)]
        (check-result func args expected got))

      (= func "weibull_S")
      (let [t (aget args 0)
            scale (aget args 1)
            shape (aget args 2)
            got-arr (survival/weibull-survival-probability
                     (np/array t) scale shape)
            got (.-data got-arr)]
        (check-result func args expected got))

      (= func "cure_S")
      (let [t (aget args 0)
            p-cure (aget args 1)
            scale (aget args 2)
            shape (aget args 3)
            got-arr (survival/cure-survival-probability
                     (np/array t) p-cure scale shape)
            got (.-data got-arr)]
        (check-result func args expected got))

      (= func "leaky_cure_S")
      (let [t (aget args 0)
            p-cure (aget args 1)
            scale (aget args 2)
            shape (aget args 3)
            leak-rate (aget args 4)
            got-arr (survival/leaky-cure-survival-probability
                     (np/array t) p-cure scale shape leak-rate)
            got (.-data got-arr)]
        (check-result func args expected got))

      :else
      (do (println "Unknown function:" func) false))))

(defn main []
  (let [verbose-sqlite3 (.verbose sqlite3)
        db (new (.-Database verbose-sqlite3) "datasets/generative_tests.db")]
    (.all db "SELECT func, args_json, expected_json FROM survival_tests" #js []
          (fn [err rows]
            (if err
              (do (println "Database read error:" err)
                  (js/process.exit 1))
              (let [total (count rows)
                    results (map run-case rows)
                    passed (count (filter true? results))
                    failed (- total passed)]
                (println "Generative Test Results:")
                (println "  Total Cases: " total)
                (println "  Passed:      " passed)
                (println "  Failed:      " failed)
                (.close db)
                (if (> failed 0)
                  (js/process.exit 1)
                  (js/process.exit 0))))))))
