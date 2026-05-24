(ns app.views
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [app.state :as state]
            [app.discovery :as discovery]))

(def ^:private btn-class
  (str "inline-block bg-blue-600 hover:bg-blue-700 "
       "text-white text-sm font-semibold "
       "px-4 py-2 rounded-lg transition-colors"))

(defn- navigate-button [page label class-str]
  [:button {:class (or class-str "text-blue-500 hover:underline font-semibold")
            :on-click #(rf/dispatch [:navigate page])}
   label])

(defn home-view []
  [:div.p-6.max-w-4xl.mx-auto
   [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Welcome to Regal Fitter"]
   [:p.text-gray-600.mb-8
    "A premium simulation dashboard for clinical trial design optimization."]
   [:div.grid.grid-cols-1.md:grid-cols-3.gap-6
    ;; Fitter Card
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
     {:class ["justify-between" "hover:shadow-md" "transition-all"]}
     [:div
      [:h2.text-xl.font-bold.text-gray-800.mb-2 "1. Fitter"]
      [:p.text-sm.text-gray-600.mb-4
       "Optimize and pre-filter trial design assumptions across Weibull, Cure,
        and Leaky Cure families with fast parallel simulations."]]
     [:div [navigate-button :fitter "Open Fitter" btn-class]]]
    ;; Placebo Stress Test Card
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
     {:class ["justify-between" "hover:shadow-md" "transition-all"]}
     [:div
      [:h2.text-xl.font-bold.text-gray-800.mb-2 "2. Placebo Stress Test"]
      [:p.text-sm.text-gray-600.mb-4
       "Assess placebo response distributions and calculate p-values of event
        times under simulated stress conditions."]]
     [:div [navigate-button :placebo-stress "Open Placebo Test" btn-class]]]
    ;; Discovery Card
    [:div.border.rounded-xl.p-6.bg-white.shadow-sm.flex.flex-col
     {:class ["justify-between" "hover:shadow-md" "transition-all"]}
     [:div
      [:h2.text-xl.font-bold.text-gray-800.mb-2 "3. Discovery"]
      [:p.text-sm.text-gray-600.mb-4
       "Explore and visualize survival curves and event accrual paths given
        user-controlled trial parameters."]]
     [:div [navigate-button :discovery "Open Discovery" btn-class]]]]])

(defn placebo-stress-view []
  [:div.p-6.max-w-4xl.mx-auto
   [:h1.text-3xl.font-extrabold.text-gray-800.mb-2 "Placebo Stress Test"]
   [:p.text-gray-600.mb-6
    "Placeholder for calculating and showing p-values of events under stress."]
   [:div.border.border-dashed.border-gray-300.rounded-xl.p-12.text-center
    {:class "bg-gray-50"}
    [:p.text-gray-400.italic
     "Placebo stress testing interface will be loaded here."]]])

(defn discovery-view []
  [discovery/discovery-view])
