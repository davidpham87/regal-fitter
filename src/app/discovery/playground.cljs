(ns app.discovery.playground
  (:require [reagent.core :as r]
            [webr.core :as webr]
            [portal.web :as p]
            ["@monaco-editor/react" :default Editor]))

(defn portal-frame
  "Renders a container for the Portal iframe."
  []
  [:div {:class "w-full rounded-xl border border-gray-200 overflow-hidden shadow-inner"
         :style {:height "450px" :margin 0 :padding 0}
         :ref (fn [el]
                (when el
                  (p/open {:launcher :iframe
                           :iframe-parent el
                           :theme :portal.colors/nord})))}])

(defn gs-design-playground []
  (r/with-let [code-atom (r/atom (str "# Interactive R REPL with Portal\n"
                                      "# Execute standard R distribution calculations or statistical tests.\n\n"
                                      "dnorm(x = c(-1.5, 0, 1.5), mean = 0, sd = 1)\n\n"
                                      "# Or compare two groups using a Student t-test:\n"
                                      "t.test(x = rnorm(30, mean = 10, sd = 2),\n"
                                      "       y = rnorm(30, mean = 11, sd = 2))"))
               running? (r/atom false)]
    [:div.mt-6.space-y-6
     [:div.bg-gradient-to-r.from-blue-50.to-indigo-50.p-4.rounded-xl.border.border-blue-100
      [:h3.font-extrabold.text-blue-900.mb-1 "R REPL & Interactive Portal"]
      [:p.text-xs.text-blue-950
       "Enter custom R expressions or execute distribution wrappers. Results will automatically sync to the embedded Portal data inspector."]]
     [:div.flex.flex-col.lg:flex-row.gap-6
      [:div.w-full.bg-white.p-6.rounded-xl.shadow-sm.border.flex.flex-col
       {:class "lg:w-1/2"}
       [:div.flex.justify-between.items-center.mb-4
        [:h4.font-extrabold.text-gray-800 "R Script Editor"]
        [:button.px-4.py-2.bg-blue-600.hover:bg-blue-700.text-white.text-xs.font-bold.rounded-lg.transition-colors.shadow-md
         {:type "button"
          :disabled @running?
          :on-click (fn []
                      (reset! running? true)
                      (webr/eval-r-code! @code-atom
                                         {:on-done* (fn [_output result]
                                                      (reset! running? false)
                                                      (p/submit result))
                                          :on-error* (fn [err]
                                                       (reset! running? false)
                                                       (p/submit err))}))}
         (if @running? "Evaluating..." "Eval Script")]]
       [:div.border.rounded-xl.overflow-hidden {:style {:height "400px"}}
        [:> Editor {:height "100%"
                    :defaultLanguage "r"
                    :value @code-atom
                    :onChange (fn [val _] (reset! code-atom val))
                    :theme "vs-light"}]]]
      [:div.w-full.bg-white.p-6.rounded-xl.shadow-sm.border.flex.flex-col
       {:class "lg:w-1/2"}
       [:div.flex.justify-between.items-center.mb-4
        [:h4.font-extrabold.text-gray-800 "Portal Data Inspector"]
        [:button.text-xs.text-red-500.hover:underline
         {:type "button"
          :on-click #(p/clear)}
         "Clear Portal"]]
       [portal-frame]]]]))
