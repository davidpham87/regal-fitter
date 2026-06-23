(require '[app.regal-fit.enrollment :as enrollment])
(require '[cljs.numpy :as np])

(let [cfg {:enroll-bands [[0 12 100] [12 24 200]]}
      [pts weights] (enrollment/expected-enrollment-times cfg)]
  (println pts))
