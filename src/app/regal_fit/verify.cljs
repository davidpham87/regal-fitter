(ns app.regal-fit.verify
  "Verification script to check unbiasedness across Python, loop CLJS, and vectorized CLJS."
  (:require ["fs" :as fs]
            [app.regal-fit.simulate :as sim-loop]
            [app.regal-fit.simulation-vectorized :as sim-vec]
            [cljs.reader :as reader]
            [clojure.walk :as walk]))

(defn- format-num [val]
  (if (or (nil? val) (js/isNaN val))
    "NaN"
    (.toFixed val 4)))

(defn- extract-stats [res]
  (let [m (walk/keywordize-keys (js->clj res))]
    {:median (get m :median-hr-final js/NaN)
     :low (get m :hr-final-low js/NaN)
     :high (get m :hr-final-high js/NaN)}))

(defn- extract-py-stats [py-res]
  (let [m (walk/keywordize-keys (js->clj py-res))]
    {:median (get m :median_hr_final js/NaN)
     :low (get m :hr_final_low js/NaN)
     :high (get m :hr_final_high js/NaN)}))

(defn main [& args]
  (let [configs (reader/read-string (.readFileSync fs "verify_configs.edn" "utf8"))
        py-raw-str (.readFileSync fs "py_verification_results.json" "utf8")
        py-results (js->clj (js/JSON.parse py-raw-str) :keywordize-keys true)
        results-map (atom [])]
    (println "\n=======================================================")
    (println "UNBIASEDNESS VERIFICATION (M=5000, SEED=42)")
    (println "=======================================================")
    (doseq [c configs]
      (let [name (:name c)
            rec (:rec c)
            cfg (:cfg c)
            py-entry (first (filter #(= (:name %) name) py-results))
            py-raw (:res py-entry)
            py (extract-py-stats py-raw)
            loop-res (sim-loop/simulate-one-combo
                      {:rec rec :cfg-dict cfg :n-sims 5000 :seed 42})
            loop-stats (extract-stats loop-res)
            vec-res (sim-vec/simulate-one-combo
                     {:rec rec :cfg-dict cfg :n-sims 5000 :seed 42})
            vec-stats (extract-stats vec-res)]
        (swap! results-map conj
               {:scenario name
                :python py
                :cljs-loop loop-stats
                :cljs-vector vec-stats})
        (println "\n### Scenario:" name)
        (println "| Model | Estimate (Median HR) | 95% CI (Low, High) |")
        (println "|-------|----------------------|--------------------|")
        (println (str "| Python | " (format-num (:median py))
                      " | [" (format-num (:low py))
                      ", " (format-num (:high py)) "] |"))
        (println (str "| CLJS Loop | " (format-num (:median loop-stats))
                      " | [" (format-num (:low loop-stats))
                      ", " (format-num (:high loop-stats)) "] |"))
        (println (str "| CLJS Vec | " (format-num (:median vec-stats))
                      " | [" (format-num (:low vec-stats))
                      ", " (format-num (:high vec-stats)) "] |"))
        (println (str "  - Absolute Diff (Loop vs Py): "
                      (format-num
                       (js/Math.abs (- (:median py) (:median loop-stats))))))
        (println (str "  - Absolute Diff (Vec vs Py):  "
                      (format-num
                       (js/Math.abs (- (:median py) (:median vec-stats))))))))
    (let [edn-str (pr-str @results-map)]
      (.writeFileSync fs "verification_results.edn" edn-str "utf8"))
    (println "\nResults written to verification_results.edn")
    (println "=======================================================")))
