(ns webr.clean
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

(defn replace-docstring-newlines
  "Replaces literal \\n in docstrings with actual newlines."
  [ns-str]
  (str/replace ns-str
               #"(?s)\(def-r-wrapper\s+([^\s\(\)]+)\s+\"([^\"]+?)\""
               (fn [[_ name doc]]
                 (let [clean-doc (str/replace doc "\\n" "\n")]
                   (str "(def-r-wrapper " name "\n  \"" clean-doc "\"")))))

(defn fix-invalid-quotes
  "Fixes reader-hostile single-quoted strings like '\"sfLDOF\"'."
  [ns-str]
  (str/replace ns-str #"'\"([^\"]+)\"'" "\"$1\""))

(defn clean-gs-design-file! []
  (let [file-path "src/webr/gs_design.cljs"
        content (slurp file-path)
        step1 (remove-wrapper-comments content)
        step2 (replace-docstring-newlines step1)
        step3 (fix-invalid-quotes step2)]
    (spit file-path step3)
    (println "Cleaned and updated gs_design.cljs successfully!")))
