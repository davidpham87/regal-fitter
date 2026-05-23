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
