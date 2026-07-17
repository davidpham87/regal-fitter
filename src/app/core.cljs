(ns app.core
  (:require [app.events]
            [app.simulator :as sim]
            [app.subs]
            [app.ui.core :as ui]
            [app.worker-pool :as wp]
            [portal.web :as p]
            [re-frame.core :as re-frame]
            [reagent.dom :as rdom]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [webr.core :as webr]))

(def routes
  [["/"
    {:name :home}]
   ["/fitter"
    {:name :fitter}]
   ["/fitter/:subtab"
    {:name :fitter-sub}]
   ["/fitter/:subtab/:state"
    {:name :fitter-sub-state}]
   ["/placebo-stress"
    {:name :placebo-stress}]
   ["/placebo-stress/:state"
    {:name :placebo-stress-state}]
   ["/power-analysis"
    {:name :power-analysis}]
   ["/power-analysis/:state"
    {:name :power-analysis-state}]
   ["/discovery"
    {:name :discovery}]
   ["/discovery-family/:subtab"
    {:name :discovery-sub}]
   ["/discovery-family/:subtab/:state"
    {:name :discovery-sub-state}]
   ["/discovery/:state"
    {:name :discovery-state}]
   ["/r-repl"
    {:name :r-repl}]
   ["/r-repl/:state"
    {:name :r-repl-state}]])

(defn init-routes! []
  (rfe/start!
   (rf/router routes)
   #(when % (re-frame/dispatch [:navigate (:name (:data %)) (:path-params %) (:query-params %)]))
   {:use-fragment true}))

(defn ^:export init []
  (wp/init-pool! nil)
  (sim/init!)
  (init-routes!)
  (re-frame/dispatch [:initialize-db])
  (rdom/render ^{:key (str (rand))} [ui/main-view] (js/document.getElementById "app")))

(defn ^:export ^:dev/after-load reload! []
  (rdom/render ^{:key (str (rand))} [ui/main-view] (js/document.getElementById "app")))

(comment
  (reload!)
  )
