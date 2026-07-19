(ns app.regal-fit.evaluate-configs
  (:require ["fs" :as fs]
            [app.regal-fit.prefilter :as prefilter]
            [app.regal-fit.simulation-vectorized :as sim]
            [app.visualization.data :as vdata]
            [clojure.string :as str]
            [clojure.walk :as walk]
            [cljs.core.async :refer [go chan put! <!]]))

;; Pure math helpers extracted from discovery/core to avoid importing UI namespace dependencies in node execution context
(defn population-cr2-lambda
  [irm d k]
  (let [numerator   (- (js/Math.pow (+ irm d) k) (js/Math.pow d k))
        denominator (js/Math.log 2)
        base        (/ numerator denominator)
        exponent    (/ 1 k)]
    (js/Math.pow base exponent)))

(defn true-mos
  [lambda k]
  (* lambda (js/Math.pow (js/Math.log 2) (/ 1 k))))

(defn simulate-combo-async [combo config]
  (let [c (chan)
        rec (into {} (map (fn [[k v]] [k v]) combo))
        ;; We yield simulation execution asynchronously via js/setTimeout 0 to Node event loop
        ;; allowing other operations/timers to run concurrently.
        _ (js/setTimeout
           (fn []
             (let [res (sim/simulate-one-combo
                        {:rec rec
                         :cfg-dict config
                         :n-sims (:n-sims-per-combo config 1000)
                         :seed (:seed config 42)})]
               (put! c (merge rec res))))
           0)]
    c))

(defn evaluate-combos-in-parallel [combos config callback]
  (go
    (let [chans (mapv #(simulate-combo-async % config) combos)
          results (js/Array.)]
      (doseq [ch chans]
        (.push results (<! ch)))
      (callback (js->clj results :keywordize-keys true)))))

(defn run-aggregation-mode [results-file output-file]
  (try
    (let [json-str (fs/readFileSync results-file "utf8")
          results-raw (js->clj (js/JSON.parse json-str) :keywordize-keys true)
          ;; Convert hyphens for parsing inside our calculation systems
          results-parsed (walk/postwalk
                          (fn [x]
                            (if (keyword? x)
                              (keyword (str/replace (name x) "_" "-"))
                              x))
                          results-raw)
          ;; Check if results format has a root object (e.g. from results.json directly)
          results-map (if (map? results-parsed)
                        results-parsed
                        ;; Or if it is raw family maps
                        results-parsed)
          config {} ;; defaults
          limit (:n-sims-aggregation config 1000)
          aggregated-out (into {}
                               (for [[fam-key raw-items] results-map
                                     :let [fam-str (name fam-key)
                                           items (mapv (fn [item]
                                                         (let [irm (:bat-med item)
                                                               k (or (:bat-shape item) 1.0)
                                                               d 3
                                                               lambda (population-cr2-lambda irm d k)
                                                               onset-mos (true-mos lambda k)]
                                                           (assoc item :onset-cr2-bat-mos onset-mos)))
                                                       raw-items)
                                           best-n (vdata/score-and-sort-items items config limit)
                                           strat (vdata/build-stratified-data best-n 1.0)
                                           tot-wt (reduce + (map :weight strat))
                                           vdata-res (vdata/calculate-vdata strat tot-wt)
                                           hr-data (vdata/build-hr-distribution-data best-n 0.025)
                                           km-ci (vdata/build-km-ci-data best-n config)
                                           [hr-paths t80-bins] (vdata/build-path-bins best-n config)
                                           alive-data (vdata/build-alive-scatter-data best-n)
                                           bat-alive-data (vdata/build-bat-alive-distribution-data best-n)]]
                                 [fam-key {:family fam-str
                                           :sample_count (count best-n)
                                           :vdata vdata-res
                                           :hr_data hr-data
                                           :km_ci km-ci
                                           :hr_paths hr-paths
                                           :t80_bins t80-bins
                                           :alive_data alive-data
                                           :bat-alive-data bat-alive-data}]))
          out-json (walk/postwalk
                    (fn [x]
                      (if (keyword? x)
                        (str/replace (name x) "_" "-")
                        x))
                    aggregated-out)]
      (fs/writeFileSync output-file (js/JSON.stringify (clj->js out-json) nil 2))
      (println "Successfully processed and saved posterior aggregated results to:" output-file)
      (js/process.exit 0))
    (catch js/Error e
      (js/console.error "Error in posterior aggregation mode:" e)
      (js/process.exit 1))))

(defn -main []
  (let [args (js/process.argv.slice 2)]
    (cond
      ;; Aggregation Mode
      (and (= (aget args 0) "--aggregate") (>= (.-length args) 3))
      (run-aggregation-mode (aget args 1) (aget args 2))

      ;; Standard Simulation Mode
      (and (>= (.-length args) 2) (not= (aget args 0) "--aggregate"))
      (let [config-file (aget args 0)
            output-file (aget args 1)]
        (try
          (let [json-str (fs/readFileSync config-file "utf8")
                config-raw (js->clj (js/JSON.parse json-str) :keywordize-keys true)
                config (walk/postwalk
                        (fn [x]
                          (if (keyword? x)
                            (keyword (str/replace (name x) "_" "-"))
                            x))
                        config-raw)
                families (:families config ["weibull" "cure" "leaky"])
                top-k (:prefilter-top-k config 100)
                
                run-family-sims
                (fn run-next [fams acc]
                  (if (empty? fams)
                    (let [out-json (walk/postwalk
                                    (fn [x]
                                      (if (keyword? x)
                                        (str/replace (name x) "_" "-")
                                        x))
                                    acc)]
                      (fs/writeFileSync output-file (js/JSON.stringify (clj->js out-json) nil 2))
                      (println "Successfully evaluated configs in parallel. Results written to:" output-file)
                      (js/process.exit 0))
                    (let [fam (first fams)
                          remaining-fams (rest fams)]
                      (println "Evaluating pre-filter for family:" fam)
                      (let [raw-accepted (case fam
                                           "weibull" (prefilter/apply-prefilter-weibull config)
                                           "cure"    (prefilter/apply-prefilter-cure config)
                                           "leaky"   (prefilter/apply-prefilter-leaky config)
                                           [])
                            accepted-combos (prefilter/rank-and-trim config raw-accepted top-k)]
                        (println "Accepted combos for" fam ":" (count accepted-combos))
                        (evaluate-combos-in-parallel
                         accepted-combos
                         config
                         (fn [sim-results]
                           (run-next remaining-fams (assoc acc (keyword fam) sim-results))))))))]
            
            (run-family-sims families {}))
          (catch js/Error e
            (js/console.error "Error evaluating configurations:" e)
            (js/process.exit 1))))

      :else
      (do
        (println "Usage:")
        (println "  Simulation mode:   node evaluate_configs.js <config.json> <output_results.json>")
        (println "  Aggregation mode:  node evaluate_configs.js --aggregate <results_with_combos.json> <aggregated_results.json>")
        (js/process.exit 1)))))

(set! *main-cli-fn* -main)
