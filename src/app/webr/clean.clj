(ns app.webr.clean
  (:require [clojure.string :as str]
            [clojure.java.io :as io]))

(defn remove-wrapper-comments
  "Removes all lines starting with the specified comment prefix."
  [ns-str]
  (let [lines (str/split-lines ns-str)
        target ";; This defines the CLJS wrapper for the R function"
        filtered (remove #(str/starts-with? (str/trim %) target)
                         lines)]
    (str/join "\n" filtered)))

(defn clean-gs-design-file! []
  (let [file-path "src/app/webr/gs_design.cljs"
        content (slurp file-path)
        cleaned (remove-wrapper-comments content)]
    (spit file-path cleaned)
    (println "Cleaned gs_design.cljs successfully!")))
