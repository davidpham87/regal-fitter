(require '[app.regal-fit.enrollment :as enrollment])
(require '[cljs.numpy :as np])

(defn test-enrolled []
  (let [calendar-times (np/array #js [1.0 2.0 3.0])
        enroll-pts (np/array #js [0.5 1.5 2.5])
        enroll-weights (np/array #js [10.0 20.0 30.0])
        arm-share 0.5

        times-2d (np/reshape calendar-times #js [(.-size calendar-times) 1])
        enroll-2d (np/reshape enroll-pts #js [1 (.-size enroll-pts)])
        mask (np/greater (np/subtract times-2d enroll-2d) 0.0)
        weights-2d (np/reshape enroll-weights #js [1 (.-size enroll-pts)])
        weighted (np/multiply mask weights-2d)
        enrolled (np/multiply (np/sum weighted 1) arm-share)]

    (println "Enrolled:")
    (println (.toArray enrolled))))
(test-enrolled)
