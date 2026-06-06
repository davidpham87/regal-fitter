(ns app.discovery.playground
  (:require [reagent.core :as r]
            [webr.core :as webr]
            [portal.web :as p]
            ["@monaco-editor/react" :default Editor]))

(def preset-scripts
  [{:id :basic-norm
    :title "Normal Distribution Density"
    :desc "Compute dnorm density values for a list of coordinates."
    :code "dnorm(x = c(-1.5, 0, 1.5), mean = 0, sd = 1)"}
   {:id :t-test
    :title "Student's t-test"
    :desc "Generate normal samples and compare groups using a t-test."
    :code (str "# Compare two groups using a Student t-test\n"
               "t.test(x = rnorm(30, mean = 10, sd = 2),\n"
               "       y = rnorm(30, mean = 11, sd = 2))")}
   {:id :anova
    :title "Analysis of Variance (ANOVA)"
    :desc "Create a data frame and execute a simple one-way ANOVA test."
    :code (str "# One-way ANOVA example\n"
               "data <- data.frame(\n"
               "  yield = c(5, 6, 8, 4, 3, 9, 10, 11, 8, 7),\n"
               "  group = factor(c(rep(\"A\", 5), rep(\"B\", 5)))\n"
               ")\n"
               "fit <- aov(yield ~ group, data = data)\n"
               "summary(fit)")}
   {:id :wilcox
    :title "Wilcoxon Signed-Rank Test"
    :desc "Non-parametric comparison of group distributions."
    :code (str "# Non-parametric comparison\n"
               "x <- c(9, 12, 15, 13, 16)\n"
               "y <- c(11, 14, 18, 12, 17)\n"
               "wilcox.test(x, y, paired = TRUE)")}
   {:id :random-deviates
    :title "Random Deviates (Hist Summary)"
    :desc "Generate random uniform distribution samples and summarize."
    :code (str "# Generate random uniform values\n"
               "u <- runif(100, min = 0, max = 100)\n"
               "summary(u)")}])

(defn portal-frame
  "Renders a container for the Portal iframe."
  []
  [:div {:class "w-full rounded-xl border border-gray-200 overflow-hidden shadow-inner bg-gray-50"
         :style {:height "450px" :margin 0 :padding 0}
         :ref (fn [el]
                (when el
                  (p/open {:launcher :iframe
                           :iframe-parent el
                           :theme :portal.colors/nord})))}])

(defn gs-design-playground []
  (r/with-let [code-atom (r/atom (:code (first preset-scripts)))
               running? (r/atom false)
               active-view (r/atom :editor) ;; :editor or :portal
               selected-script-id (r/atom (:id (first preset-scripts)))]
    [:div.mt-6.space-y-6
     [:div.bg-gradient-to-r.from-blue-50.to-indigo-50.p-4.rounded-xl.border.border-blue-100
      [:h3.font-extrabold.text-blue-900.mb-1 "R REPL & Interactive Portal"]
      [:p.text-xs.text-blue-950
       "Choose a script template from the library or edit R code. Evaluating automatically publishes results to the embedded Portal viewer."]]

     [:div.flex.flex-col.lg:flex-row.gap-6
      ;; 1/5 View: List of scripts
      [:div.w-full.bg-white.p-4.rounded-xl.border.flex.flex-col.gap-3
       {:class "lg:w-1/5"}
       [:h4.font-extrabold.text-gray-800.text-sm.border-b.pb-2 "Script Library"]
       [:div.space-y-2.overflow-y-auto {:style {:max-height "450px"}}
        (for [script preset-scripts]
          ^{:key (:id script)}
          [:div.p-3.rounded-lg.border.cursor-pointer.transition-all
           {:class (if (= @selected-script-id (:id script))
                     "border-blue-500 bg-blue-50/50 shadow-sm"
                     "border-gray-200 hover:bg-gray-50")
            :on-click (fn []
                        (reset! selected-script-id (:id script))
                        (reset! code-atom (:code script)))}
           [:div.font-bold.text-xs.text-gray-800 (:title script)]
           [:div.text-xxs.text-gray-500.mt-1.leading-snug (:desc script)]])]]

      ;; 4/5 View: Card containing Tabbed Editor/Portal
      [:div.w-full.bg-white.rounded-xl.border.shadow-sm.flex.flex-col.overflow-hidden
       {:class "lg:w-4/5"}
       
       ;; Tab navigation header
       [:div.bg-gray-50.border-b.px-6.py-3.flex.justify-between.items-center.flex-wrap.gap-4
        [:div.flex.gap-2
         [:button.px-4.py-1.5.text-xs.font-bold.rounded-lg.transition-all
          {:type "button"
           :class (if (= @active-view :editor)
                    "bg-white shadow border border-gray-200 text-gray-800"
                    "text-gray-500 hover:text-gray-800")
           :on-click #(reset! active-view :editor)}
          "Code Editor"]
         [:button.px-4.py-1.5.text-xs.font-bold.rounded-lg.transition-all
          {:type "button"
           :class (if (= @active-view :portal)
                    "bg-white shadow border border-gray-200 text-gray-800"
                    "text-gray-500 hover:text-gray-800")
           :on-click #(reset! active-view :portal)}
          "Portal Viewer"]]
        
        ;; Execution controls
        [:div.flex.items-center.gap-3
         (when (= @active-view :editor)
           [:button.px-4.py-2.bg-blue-600.hover:bg-blue-700.text-white.text-xs.font-bold.rounded-lg.transition-colors.shadow-md
            {:type "button"
             :disabled @running?
             :on-click (fn []
                         (reset! running? true)
                         (webr/eval-r-code! @code-atom
                                            {:on-done* (fn [_output result]
                                                         (reset! running? false)
                                                         (p/submit result)
                                                         (reset! active-view :portal))
                                             :on-error* (fn [err]
                                                          (reset! running? false)
                                                          (p/submit err)
                                                          (reset! active-view :portal))}))}
            (if @running? "Evaluating..." "Run R Script")])
         (when (= @active-view :portal)
           [:button.text-xs.text-red-500.hover:underline
            {:type "button"
             :on-click #(p/clear)}
            "Clear Portal"])]]

       ;; Body area toggling between editor and portal
       [:div.p-6
        (case @active-view
          :editor
          [:div.border.rounded-xl.overflow-hidden {:style {:height "450px"}}
           [:> Editor {:height "100%"
                       :defaultLanguage "r"
                       :value @code-atom
                       :onChange (fn [val _] (reset! code-atom val))
                       :options #js {:minimap #js {:enabled false}}
                       :theme "vs-light"}]]
          
          :portal
          [portal-frame])]]]]))
