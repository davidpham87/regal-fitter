(ns app.regal-fit.convergence-test
  (:require ["fs" :as fs]
            [clojure.walk :as walk]
            [app.regal-fit.simulation-vectorized :as sim]
            [cljs.numpy-random :as np-random]
            [clojure.string :as str]))

(defn main []
  (println "Running CLJS convergence simulation...")
  (let [cfg-dict {"n-total" 126
                  "n-per-arm" 63
                  "enroll-bands" [[0.0 12.0 15]
                                  [12.0 24.0 50]
                                  [24.0 36.0 56]
                                  [36.0 38.0 5]]
                  "t-ia" 46.0
                  "t-upd" 58.0
                  "t-pr3" 62.97
                  "n-ev-ia" 60
                  "n-ev-upd" 72
                  "n-ev-pr3" 78
                  "n-ev-final" 80
                  "use-pr3-anchor" true
                  "pool-mos-min-at-ia" 12.0
                  "median-fu-target" 13.5
                  "median-fu-tol" 3.0
                  "futility-hr-max" 0.83
                  "efficacy-hr-min" 0.35
                  "tol-ia" 4.0
                  "tol-upd" 4.0
                  "tol-pr3" 2.0
                  "tol-increment-ia-upd" 3.0
                  "tol-increment-upd-pr3" 2.0
                  "enforce-no-80-by-today" true
                  "t-now" 63.0
                  "no-80-slack-months" 1.0}
        cfg (walk/keywordize-keys cfg-dict)
        rec-json (js/JSON.parse (fs/readFileSync "datasets/convergence_rec.json" "utf8"))
        rec-clj (js->clj rec-json :keywordize-keys true)
        rec (into {} (map (fn [[k v]] [(keyword (str/replace (name k) "_" "-")) v]) rec-clj))
        n-sims 1000
        seed 42]
    (let [rng (np-random/default-rng seed)
          [accepted-stats _] (sim/run-sim-chunk-vectorized rec cfg n-sims rng)
          hr-finals (->> accepted-stats
                         (map :hr-final)
                         (filter #(not (js/isNaN %))))]
      (let [verbose-sqlite3 (.verbose (js/require "sqlite3"))
            db (new (.-Database verbose-sqlite3) "datasets/convergence.db")
            stmt-str "CREATE TABLE IF NOT EXISTS convergence_cljs (id INTEGER PRIMARY KEY, hr_final REAL)"]
        (.serialize db
          (fn []
            (.run db stmt-str)
            (.run db "DELETE FROM convergence_cljs")
            (let [stmt (.prepare db "INSERT INTO convergence_cljs (hr_final) VALUES (?)")]
              (doseq [hr hr-finals]
                (.run stmt hr))
              (.finalize stmt)
              (println (str "Saved " (count hr-finals) " CLJS HR results to datasets/convergence.db.")))))))))
