(ns app.ui.enrollment
  (:require [reagent.core :as r]
            [app.state :as state]
            [app.vega :as vega]
            [cljs.numpy-random :as np-random]
            [cljs.numpy :as np]))

(defn- simulate-enrollment-data [bands n-samples seed]
  (let [random-gen (np-random/default-rng seed)
        max-time (apply max (map second bands))
        time-points (range 0 (+ max-time 2) 0.5)
        paths (for [_ (range n-samples)]
                (let [raw-enroll (js/Array.)]
                  (doseq [[lo hi n] bands]
                    (when (> n 0)
                      (doseq [r (np/nd-to-array (np-random/uniform random-gen lo hi n))]
                        (.push raw-enroll r))))
                  (.sort raw-enroll (fn [a b] (- a b)))
                  (mapv (fn [t]
                          (count (filter #(<= % t) raw-enroll)))
                        time-points)))]
    (for [i (range (count time-points))]
      (let [t (nth time-points i)
            counts (map #(nth % i) paths)
            sorted-counts (sort counts)
            n (count sorted-counts)
            mean-val (/ (reduce + sorted-counts) n)
            low-idx (js/Math.floor (* 0.025 n))
            high-idx (js/Math.min (dec n) (js/Math.floor (* 0.975 n)))
            low-val (nth sorted-counts low-idx)
            high-val (nth sorted-counts high-idx)]
        {:time t
         :mean mean-val
         :low low-val
         :high high-val}))))

(defn enrollment-view []
  (let [n-samples (r/atom 100)]
    (fn []
      (let [config (:config @state/app-state)
            bands (:enroll-bands config)
            seed (:seed config)
            valid-samples (if (and (number? @n-samples) (pos? @n-samples)) @n-samples 100)
            data (simulate-enrollment-data bands valid-samples seed)]
        [:div.p-4.max-w-6xl.mx-auto
         [:h2.text-2xl.font-extrabold.text-gray-900.mb-4 "Enrollment Plot"]
         [:div.mb-6.flex.items-center.gap-4
          [:label.font-semibold.text-gray-700 "Number of Samples:"]
          [:input.border.p-2.rounded.w-32
           {:type "number"
            :min "1"
            :value @n-samples
            :on-change #(reset! n-samples (js/parseInt (.. % -target -value) 10))}]]
         [:div.bg-white.p-6.rounded-xl.shadow-sm.border
          [vega/enrollment-chart data]]]))))
