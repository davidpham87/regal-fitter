(ns app.core
  (:require [app.ui :as ui]
            [app.worker-pool :as wp]
            [app.simulator :as sim]
            [reagent.dom :as rdom]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [re-frame.core :as re-frame]))

(def routes
  [["/"
    {:name :home}]
   ["/fitter"
    {:name :fitter}]
   ["/fitter/:subtab"
    {:name :fitter-sub}]
   ["/placebo-stress"
    {:name :placebo-stress}]
   ["/discovery"
    {:name :discovery}]
   ["/discovery/:subtab"
    {:name :discovery-sub}]])

(defn init-routes! []
  (rfe/start!
   (rf/router routes)
   (fn [match]
     (when match
       (re-frame/dispatch [:navigate (:name (:data match)) (:path-params match)])))
   {:use-fragment true}))

(defn ^:export init []
  (js/console.log "App init")
  (wp/init-pool! nil)
  (sim/init!)
  (init-routes!)
  (rdom/render [ui/main-view] (js/document.getElementById "app")))


(defn ^:dev/after-load reload!
  "Reload hook for shadow-cljs. Re-mounts the application after code changes.

  Returns:
    nil: Re-renders the app."
  []
  (js/console.log "reload")
  (rdom/render #_[:h1 "Hello"]
               [ui/main-view] (js/document.getElementById "app")))

(comment
  "hello"
  (reload!)
  )
