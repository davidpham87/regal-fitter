(ns app.regal-fit.evaluate-configs
  (:require ["fs" :as fs]
            [app.regal-fit.prefilter :as prefilter]
            [app.regal-fit.simulation-vectorized :as sim]
            [clojure.string :as str]
            [clojure.walk :as walk]
            [cljs.core.async :refer [go chan put! <!]]))

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

(defn -main []
  (let [args (js/process.argv.slice 2)
        config-file (aget args 0)
        output-file (aget args 1)]
    (if (or (nil? config-file) (nil? output-file))
      (do
        (println "Usage: node evaluate_configs.js <config.json> <output_results.json>")
        (js/process.exit 1))
      (try
        (let [json-str (fs/readFileSync config-file "utf8")
              ;; parse JSON config, keying it with clojure keywords
              config-raw (js->clj (js/JSON.parse json-str) :keywordize-keys true)
              ;; convert hyphens to matches
              config (walk/postwalk
                      (fn [x]
                        (if (keyword? x)
                          (keyword (str/replace (name x) "_" "-"))
                          x))
                      config-raw)
              families (:families config ["weibull" "cure" "leaky"])
              top-k (:prefilter-top-k config 100)
              
              ;; Run prefilter and simulation for each family sequentially
              run-family-sims
              (fn run-next [fams acc]
                (if (empty? fams)
                  ;; Finished all families, write out output
                  (let [out-json (walk/postwalk
                                  (fn [x]
                                    (if (keyword? x)
                                      (str/replace (name x) "-" "_")
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
          (js/process.exit 1))))))

(set! *main-cli-fn* -main)
