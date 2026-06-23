(ns app.components.editor
  (:require [reagent.core :as r]
            ["@monaco-editor/react" :default MonacoEditor]))

(defn code-editor
  [{:keys [value on-change on-blur language theme height read-only?]}]
  [:div.border.rounded-lg.overflow-hidden
   {:style {:height (or height "400px")}}
   [:> MonacoEditor
    {:height "100%"
     :defaultLanguage (or language "json")
     :theme (or theme "light")
     :options {:readOnly (boolean read-only?)}
     :value value
     :onChange on-change
     :onMount (fn [editor]
                (js-invoke editor "onDidBlurEditorText"
                           (fn []
                             (when on-blur (on-blur)))))}]])
