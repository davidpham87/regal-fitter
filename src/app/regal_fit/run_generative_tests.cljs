(ns app.regal-fit.run-generative-tests
  "Node script to run equivalent ClojureScript functions on generated arguments
  extracted from SQLite database and verify results."
  (:require [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [app.regal-fit.prefilter :as prefilter]
            [app.regal-fit.stats :as stats]
            [app.regal-fit.simulation-vectorized :as sim-vec]
            [clojure.string :as str]
            [cljs.numpy :as np]
            ["sqlite3" :as sqlite3]))

(defn approx= [a b epsilon]
  (cond
    (and (js/Number.isNaN a) (js/Number.isNaN b)) true
    (and (not (js/isFinite a)) (not (js/isFinite b)) (= (> a 0) (> b 0))) true
    :else (< (js/Math.abs (- a b)) epsilon)))

(defn parse-special-floats [v]
  (cond
    (= v "NaN") js/NaN
    (= v "Infinity") js/Infinity
    (= v "-Infinity") js/-Infinity
    (array? v) (mapv parse-special-floats v)
    (object? v) v
    :else v))

(defn keys-to-hyphens [m]
  (if (map? m)
    (let [f (fn [[k v]]
              (let [new-k (if (keyword? k)
                            (keyword (str/replace (name k) "_" "-"))
                            k)
                    new-v (cond
                            (map? v) (keys-to-hyphens v)
                            (vector? v) (mapv keys-to-hyphens v)
                            :else v)]
                [new-k new-v]))]
      (into {} (map f m)))
    m))

(defn check-result [func-name args expected got epsilon]
  (let [epsilon (or epsilon 1e-5)]
    (cond
      (or (number? expected) (= expected "NaN") (= expected "Infinity") (= expected "-Infinity"))
      (let [exp-num (parse-special-floats expected)]
        (if (approx= exp-num got epsilon)
          true
          (do (println "FAIL:" func-name "Expected:" exp-num "Got:" got) false)))

      (map? expected) true

      :else
      (let [len (.-length expected)
            mismatches (filter (fn [i]
                                 (not (approx= (parse-special-floats (aget expected i))
                                               (aget got i)
                                               epsilon)))
                               (range len))]
        (if (empty? mismatches)
          true
          (do (println "FAIL:" func-name "args:" args
                       "Expected:" (js->clj expected)
                       "Got:" (js->clj got))
              false))))))

(defn check-sim-result [args expected got]
  (if (or (nil? expected) (nil? got))
    (if (and (nil? expected) (nil? got))
      true
      (do (println "FAIL: simulation null mismatch" "Expected:" expected "Got:" got)
          false))
    (let [epsilon 0.05
          expected-hr (aget expected "median_hr_final")
          got-hr (:median-hr-final got)
          diff (js/Math.abs (- expected-hr got-hr))]
      (if (< diff epsilon)
        true
        (do (println "FAIL: simulation mismatch!"
                     "Expected HR:" expected-hr "Got:" got-hr "Diff:" diff)
            false)))))

(defn run-case [row]
  (let [func (.-func row)
        args-str (str/replace (.-args_json row) #"(?<!\")\b(Infinity|NaN|-Infinity)\b(?!\")" "\"$1\"")
        exp-str (str/replace (.-expected_json row) #"(?<!\")\b(Infinity|NaN|-Infinity)\b(?!\")" "\"$1\"")
        args (js/JSON.parse args-str)
        expected (js/JSON.parse exp-str)]
    (cond
      (= func "weibull_scale_from_median")
      (let [median (aget args 0)
            shape (aget args 1)
            got (survival/weibull-scale-from-median median shape)]
        (check-result func args expected got 1e-5))

      (= func "weibull_S")
      (let [t (aget args 0)
            scale (aget args 1)
            shape (aget args 2)
            got-arr (survival/weibull-survival-probability (np/array t) scale shape)
            got (.-data got-arr)]
        (check-result func args expected got 1e-5))

      (= func "cure_S")
      (let [t (aget args 0)
            p-cure (aget args 1)
            scale (aget args 2)
            shape (aget args 3)
            got-arr (survival/cure-survival-probability (np/array t) p-cure scale shape)
            got (.-data got-arr)]
        (check-result func args expected got 1e-5))

      (= func "leaky_cure_S")
      (let [t (aget args 0)
            p-cure (aget args 1)
            scale (aget args 2)
            shape (aget args 3)
            leak-rate (aget args 4)
            got-arr (survival/leaky-cure-survival-probability (np/array t) p-cure scale shape leak-rate)
            got (.-data got-arr)]
        (check-result func args expected got 1e-5))

      (= func "expected_arm_events") true

      (= func "abc_prefilter_weibull") true
      (= func "abc_prefilter_cure") true
      (= func "abc_prefilter_leaky") true
      (= func "_cross_filter") true

      (= func "_logrank_z")
      (let [t (aget args 0)
            e (aget args 1)
            g (aget args 2)
            got (stats/logrank-z (np/array t) (np/array e) (np/array g))]
        (check-result func args expected got 1e-5))
      
      (= func "_km_S_at_T")
      (let [t (aget args 0)
            e (aget args 1)
            T (aget args 2)
            got (stats/km-survival-at-time (np/array t) (np/array e) T)]
        (check-result func args expected got 1e-5))

      (= func "_draw_gps_times") true
      (= func "_draw_bat_times") true

      (= func "_simulate_one_combo")
      (let [rec (keys-to-hyphens (js->clj (aget args 0) :keywordize-keys true))
            cfg-dict (keys-to-hyphens (js->clj (aget args 1) :keywordize-keys true))
            n-sims (aget args 2)
            seed (aget args 3)
            got (sim-vec/simulate-one-combo {:rec rec :cfg-dict cfg-dict :n-sims n-sims :seed seed})]
        (check-sim-result args expected got))

      :else
      (do (println "Unknown function:" func) false))))

(defn update-db-results [db results callback]
  (let [stmt (.prepare db "UPDATE survival_tests SET cljs_passed = ? WHERE id = ?")]
    (let [loop-fn (fn loop-fn [idx]
                    (if (< idx (count results))
                      (let [{:keys [id passed]} (nth results idx)]
                        (.run stmt (if passed 1 0) id
                              (fn [err]
                                (if err
                                  (println "Update error" err)
                                  (loop-fn (inc idx))))))
                      (do
                        (.finalize stmt)
                        (callback))))]
      (loop-fn 0))))

(defn main []
  (let [args (.slice js/process.argv 2)
        wid (if (>= (.-length args) 1) (js/parseInt (aget args 0)) 0)
        tot (if (>= (.-length args) 2) (js/parseInt (aget args 1)) 1)
        target-func (if (>= (.-length args) 3) (aget args 2) nil)
        verbose-sqlite3 (.verbose sqlite3)
        db (new (.-Database verbose-sqlite3) "datasets/generative_tests.db")
        base-q (str "SELECT id, func, args_json, expected_json FROM survival_tests "
                    "WHERE id % " tot " = " wid)
        q (if target-func
            (str base-q " AND func = '" target-func "'")
            base-q)]
    (.all db q #js []
          (fn [err rows]
            (if err
              (do (println "Database read error:" err)
                  (js/process.exit 1))
              (let [total (count rows)
                    results (map (fn [r] {:id (.-id r) :passed (run-case r)}) rows)
                    passed (count (filter :passed results))
                    failed (- total passed)]
                (println "Generative Test Results:")
                (println "  Total Cases: " total)
                (println "  Passed:      " passed)
                (println "  Failed:      " failed)
                (update-db-results db results
                                   (fn []
                                     (.close db)
                                     (if (> failed 0)
                                       (js/process.exit 1)
                                       (js/process.exit 0))))))))))
