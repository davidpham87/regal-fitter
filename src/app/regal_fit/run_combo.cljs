(ns app.regal-fit.run-combo
  (:require ["fs" :as fs]
            [clojure.walk :as walk]
            [app.regal-fit.simulation-vectorized :as sim]
            [clojure.string :as str]))

(defn -main []
  (let [args (js/process.argv.slice 2)
        input-file (aget args 0)
        output-file (aget args 1)]
    (if (or (nil? input-file) (nil? output-file))
      (do
        (println "Usage: node run_combo.js <input.json> <output.json>")
        (js/process.exit 1))
      (try
        (let [json-str (fs/readFileSync input-file "utf8")
              payload (js->clj (js/JSON.parse json-str) :keywordize-keys true)
              rec (into {} (map (fn [[k v]] [(keyword (str/replace (name k) "_" "-")) v]) (:rec payload)))
              cfg-raw (:cfg_dict payload)
              cfg-dict (into {} (map (fn [[k v]] [(keyword (str/replace (name k) "_" "-")) v]) cfg-raw))
              n-sims (:n_sims payload)
              seed (:seed payload)
              chunk-size (:chunk_size payload)
              
              ;; Call simulate-one-combo-2d
              result (sim/simulate-one-combo-2d {:rec rec
                                                 :cfg-dict cfg-dict
                                                 :n-sims n-sims
                                                 :seed seed
                                                 :chunk-size chunk-size})
              
              ;; Convert the output back to a clj map and change hyphens to underscores for python
              out-clj (into {} (map (fn [[k v]] [(str/replace (name k) "-" "_") v]) result))]
          
          ;; Write back as JSON
          (fs/writeFileSync output-file (js/JSON.stringify (clj->js out-clj)))
          (js/process.exit 0))
        (catch js/Error e
          (js/console.error "Error running CLJS combo:" e)
          (js/process.exit 1))))))

(set! *main-cli-fn* -main)
