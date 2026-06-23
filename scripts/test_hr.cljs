(require '[app.regal-fit.enrollment :as enrollment])
(require '[cljs.numpy :as np])

(defn test-calc []
  (let [enroll-weights (np/array #js [10 20 30])
        enroll-pts (np/array #js [1 2 3])
        arm-share 0.5
        t 2.5
        times-2d (np/array #js [[t]]) ; reshape 1x1
        enroll-2d (np/array #js [[1 2 3]])
        follow-up (np/maximum (np/subtract times-2d enroll-2d) 0.0)
        mask (np/greater follow-up 0.0)

        ;; we can count how many enrolled!
        weights-3d (np/reshape enroll-weights #js [1 1 3])
        mask-3d (np/reshape mask #js [1 1 3])
        weighted-enrolled (np/multiply mask-3d weights-3d)
        enrolled (np/multiply (np/sum weighted-enrolled 2) arm-share)]

    (println (.toArray enrolled))))

(test-calc)
