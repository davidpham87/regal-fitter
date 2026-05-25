(ns app.core
  (:require [app.ui :as ui]
            [app.worker-pool :as wp]
            [app.simulator :as sim]
            [reagent.dom :as rdom]))

(defn ^:export init []
  (js/console.log "App init")
  (wp/init-pool! nil)
  (sim/init!)
  (rdom/render [ui/main-view] (js/document.getElementById "app")))


(defn ^:dev/after-load reload!
  "Reload hook for shadow-cljs. Re-mounts the application after code changes.

  Returns:
    nil: Re-renders the app."
  []
  (js/console.log "reload")
  (rdom/render [:h1 "Hello"]
               #_[ui/main-view] (js/document.getElementById "app")))

(comment
  "hello"
  )
