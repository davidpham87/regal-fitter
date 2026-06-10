(ns app.discovery.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 ::discovery
 (fn [db _]
   (::discovery db)))
