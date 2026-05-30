(require '[app.regal-fit.enrollment :as enrollment])
(require '[cljs.numpy :as np])

(defn cum-enrolled [t enroll-pts enroll-weights]
  (let [pts (.toArray enroll-pts)
        weights (.toArray enroll-weights)]
    (reduce + (keep-indexed (fn [i pt] (if (<= pt t) (aget weights i) 0)) pts))))

(println (cum-enrolled 10 (np/array #js [5 15]) (np/array #js [100 200])))
