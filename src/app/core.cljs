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
   ["/discovery"
    {:name :discovery}]
   ["/discovery/:subtab"
    {:name :discovery-sub}]
   ["/discovery/:subtab/:state"
    {:name :discovery-sub-state}]])

(defn init-routes! []
  (rfe/start!
   (rf/router routes)
   (fn [match]
     (when match
       (re-frame/dispatch [:navigate (:name (:data match)) (:path-params match) (:query-params match)])))
   {:use-fragment true}))

(defn ^:export init []
  (js/console.log "App init")
  (wp/init-pool! nil)
  (sim/init!)
  (init-routes!)
  (re-frame/dispatch [:initialize-db])
  ;; Open portal in the browser context
  ;; (p/open)
  ;; Initialize WebR on application boot
  (let [start-webr!
        (fn []
          (webr/init-webr!
           (fn [webr] (js/console.log "WebR ready on boot!"))
           (fn [err] (js/console.error "WebR boot initialization failed:" err))))]
    (if (exists? js/WebR)
      (start-webr!)
      (.addEventListener js/window "webr-script-loaded" start-webr!)))
  (rdom/render ^{:key (str (rand))}
               [ui/main-view] (js/document.getElementById "app")))

(defn reload-testing []
  [:h1 "hello, shadow-cljs hot reloading is!"])

(defn ^:export ^:dev/after-load reload!
  "Reload hook for shadow-cljs. Re-mounts the application after code changes.

  Returns:
    nil: Re-renders the app."
  []
  (js/console.log "reload")
  (rdom/render ^{:key (str (rand))} [ui/main-view]
               (js/document.getElementById "app")))

(comment
  "hello"
  (reload!))
