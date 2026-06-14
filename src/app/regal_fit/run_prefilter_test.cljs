(ns app.regal-fit.run-prefilter-test
  "Script to run pre-filtering in ClojureScript and verify that the output
  values match the Python reference exactly."
  (:require [app.regal-fit.prefilter :as prefilter]
            [app.state :as state]
            [app.regal-fit.survival :as survival]
            [app.regal-fit.enrollment :as enrollment]
            [cljs.numpy :as np]
            [clojure.string :as str]
            ["fs" :as fs]))

(defn get-grid-params [config-key config]
  (let [grid (get config config-key)]
    {:start (nth grid 0) :stop (nth grid 1) :step (nth grid 2)}))

(defn- grid-flat [config config-key]
  (let [cfg (get-grid-params config-key config)]
    (np/arange (:start cfg) (:stop cfg) (:step cfg))))

(defn- make-bat-grid [config]
  (let [meds (grid-flat config :bat-med-grid)
        shapes (grid-flat config :bat-shape-grid)
        mesh (np/meshgrid [meds shapes] #js {:indexing "ij"})
        med-flat (np/ravel (aget mesh 0))
        shape-flat (np/ravel (aget mesh 1))
        scale-flat (survival/weibull-scale-from-median med-flat shape-flat)]
    {:med med-flat :shape shape-flat :scale scale-flat}))

(defn- get-target-pts [config]
  (np/array (if (:use-pr3-anchor config)
              #js [(:t-ia config) (:t-upd config) (:t-pr3 config)]
              #js [(:t-ia config) (:t-upd config)])
            "float64"))

(defn debug-cross-filter-leaky [config]
  (let [[enroll-pts enroll-weights] (enrollment/expected-enrollment-times config)
        target-pts (get-target-pts config)
        bat (make-bat-grid config)
        bat-ev (enrollment/expected-arm-events survival/weibull-survival-probability [(:scale bat) (:shape bat)] enroll-pts enroll-weights target-pts (:n-per-arm config) (:n-total config))
        bat-arr (np/nd-to-array bat-ev)
        n (alength bat-arr)]
    (println "CLJS bat_med_flat (last 5):" (js/JSON.stringify (.slice (.-data (:med bat)) (- n 5) n)))
    (println "CLJS bat_shape_flat (last 5):" (js/JSON.stringify (.slice (.-data (:shape bat)) (- n 5) n)))
    (println "CLJS bat_scale_flat (last 5):" (js/JSON.stringify (.slice (.-data (:scale bat)) (- n 5) n)))
    (println "CLJS bat-ev IA (last 5):" (js/JSON.stringify (subvec (mapv #(aget % 0) bat-arr) (- n 5) n)))))

(defn main []
  (debug-cross-filter-leaky state/default-config))
