(ns app.components.editor
  (:require [reagent.core :as r]
            ["@monaco-editor/react" :default MonacoEditor]))

(defn code-editor
  [{:keys [value on-change language theme height read-only?]}]
  (r/with-let [editing? (r/atom false)]
    (if (and @editing? (not read-only?))
      [:div.border.rounded-lg.overflow-hidden
       {:style {:height (or height "400px")}}
       [:> MonacoEditor
        {:height "100%"
         :defaultLanguage (or language "json")
         :theme (or theme "light")
         :options {:readOnly false}
         :value value
         :onChange on-change
         :onMount (fn [editor]
                    (js-invoke editor "onDidBlurEditorText"
                               (fn []
                                 (reset! editing? false))))}]]
      [:textarea.w-full.p-2.font-mono.text-sm.border.rounded-lg
       {:style {:height (or height "400px")
                :resize "none"}
        :value value
        :readOnly (boolean read-only?)
        :on-focus (fn []
                    (when-not read-only?
                      (reset! editing? true)))
        :on-change (fn [e]
                     (when on-change
                       (on-change (.. e -target -value))))}])))
