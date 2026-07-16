(ns app.discovery.playground
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [webr.core :as webr]
            [portal.web :as p]
            [app.state :as state]
            [app.components.editor :refer [code-editor]]
            [app.components.tabs :refer [tab-bar]]))

(defn make-gs-design-script []
  (let [config (:config @state/app-state)
        power-cfg (:power-config @state/app-state)
        ev-ia (:n-ev-ia config 60)
        ev-upd (:n-ev-upd config 72)
        ev-pr3 (:n-ev-pr3 config 78)
        ev-final (:n-ev-final config 80)
        use-pr3? (:use-pr3-anchor config true)
        alpha (:alpha power-cfg 0.025)
        power (:power power-cfg 0.9)
        beta (- 1 power)
        k (if use-pr3? 4 3)
        n-i-str (if use-pr3?
                  (str "c(" ev-ia ", " ev-upd ", " ev-pr3 ", " ev-final ")")
                  (str "c(" ev-ia ", " ev-upd ", " ev-final ")"))]
    (str "# gsDesign boundary computation using initial data from state.cljs\n"
         "library(gsDesign)\n\n"
         "# Injected parameters from simulation configuration:\n"
         "target_events <- " ev-final "\n"
         "alpha         <- " alpha "  # Type I error rate (1-sided)\n"
         "beta          <- " beta "  # Type II error rate\n"
         "k             <- " k "     # Number of analyses\n"
         "n_I           <- " n-i-str " # Cumulative events\n\n"
         "# Compute group sequential boundaries\n"
         "design <- gsDesign(\n"
         "  k = k,\n"
         "  test.type = 4,              # Two-sided asymmetric boundary\n"
         "  alpha = alpha,\n"
         "  beta = beta,\n"
         "  n.I = n_I,\n"
         "  sfu = sfLDOF,               # Lan-DeMets O'Brien-Fleming efficacy\n"
         "  sfl = sfLDOF                # Lan-DeMets O'Brien-Fleming futility\n"
         ")\n\n"
         "# Compute boundary summaries\n"
         "gsBoundSummary(design)")))

(defn make-regal-fit-sim-script []
  (let [config (:config @state/app-state)
        n-total (:n-total config 126)
        n-per-arm (:n-per-arm config 63)
        t-ia (:t-ia config 46.0)
        t-upd (:t-upd config 58.0)
        t-pr3 (:t-pr3 config 62.97)
        n-ev-ia (:n-ev-ia config 60)
        n-ev-upd (:n-ev-upd config 72)
        n-ev-pr3 (:n-ev-pr3 config 78)
        n-ev-final (:n-ev-final config 80)]
    (str "# REGAL Simulation using app.state defaults\n"
         "library(survival)\n\n"
         "n_total <- " n-total "\n"
         "n_per_arm <- " n-per-arm "\n"
         "t_ia <- " t-ia "\n"
         "t_upd <- " t-upd "\n"
         "t_pr3 <- " t-pr3 "\n"
         "n_ev_ia   <- " n-ev-ia "\n"
         "n_ev_upd  <- " n-ev-upd "\n"
         "n_ev_pr3  <- " n-ev-pr3 "\n"
         "n_ev_final <- " n-ev-final "\n\n"
         "# Simulate one cohort trial\n"
         "enroll <- sort(runif(n_total, min = 0, max = 38))\n"
         "arms <- sample(c(rep(0, n_per_arm), rep(1, n_per_arm)))\n"
         "surv <- numeric(n_total)\n"
         "surv[arms == 0] <- rweibull(n_per_arm, shape = 0.85, "
         "scale = 10.0 / log(2)^1.17)\n"
         "surv[arms == 1] <- rweibull(n_per_arm, shape = 0.85, "
         "scale = 15.0 / log(2)^1.17)\n\n"
         "fu_ia <- pmax(t_ia - enroll, 0)\n"
         "time_ia <- pmin(surv, fu_ia)\n"
         "ev_ia <- surv <= fu_ia\n\n"
         "# Logrank test using survival package\n"
         "sd <- survdiff(Surv(time_ia, ev_ia) ~ arms)\n"
         "print(sd)\n"
         "fit <- coxph(Surv(time_ia, ev_ia) ~ arms)\n"
         "summary(fit)")))

(defn get-preset-scripts []
  [{:id :gs-design-state
    :title "gsDesign bounds (State Config)"
    :desc "Compute trial boundaries using state.cljs configs."
    :code (make-gs-design-script)}
   {:id :regal-fit-sim
    :title "REGAL Simulation (R implementation)"
    :desc "Run a trial simulation using state.cljs configs."
    :code (make-regal-fit-sim-script)}
   {:id :basic-norm
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
  [:div {:class (str "w-full rounded-xl border border-gray-200 "
                     "overflow-hidden shadow-inner bg-gray-50")
         :style {:height "450px" :margin 0 :padding 0}
         :ref (fn [el]
                (when el
                  (p/open {:launcher :iframe
                           :iframe-parent el
                           :theme :portal.colors/nord})))}])

(defn gs-design-playground []
  (let [presets (get-preset-scripts)]
    (r/with-let [code-atom (r/atom (:code (first presets)))
                 running? (r/atom false)
                 selected-script-id (r/atom (:id (first presets)))]
      (let [active-view @(rf/subscribe [:tabs/active-tab :playground-view :editor])]
        [:div.mt-6.space-y-6
         [:div.bg-gradient-to-r.from-blue-50.to-indigo-50.p-4.rounded-xl
          {:class "border border-blue-100"}
          [:h3.font-extrabold.text-blue-900.mb-1
           "R REPL & Interactive Portal"]
          [:p.text-xs.text-blue-950
           (str "Choose a script template from the library or edit R code. "
                "Evaluating automatically publishes results to Portal.")]]

         [:div.flex.flex-col.lg:flex-row.gap-6
          ;; 1/5 View: List of scripts
          [:div.w-full.bg-white.p-4.rounded-xl.border.flex.flex-col.gap-3
           {:class "lg:w-1/5"}
           [:h4.font-extrabold.text-gray-800.text-sm.border-b.pb-2
            "Script Library"]
           [:div.space-y-2.overflow-y-auto {:style {:max-height "450px"}}
            (for [script presets]
              ^{:key (:id script)}
              [:div.p-3.rounded-lg.border.cursor-pointer.transition-all
               {:class (if (= @selected-script-id (:id script))
                         "border-blue-500 bg-blue-50/50 shadow-sm"
                         "border-gray-200 hover:bg-gray-50")
                :on-click (fn []
                            (reset! selected-script-id (:id script))
                            (reset! code-atom (:code script)))}
               [:div.font-bold.text-xs.text-gray-800 (:title script)]
               [:div.text-xxs.text-gray-500.mt-1.leading-snug
                (:desc script)]])]]

          ;; 4/5 View: Card containing Tabbed Editor/Portal
          [:div.w-full.bg-white.rounded-xl.border.shadow-sm.flex.flex-col
           {:class "lg:w-4/5 overflow-hidden"}

           [:div.bg-gray-50.border-b.px-6.py-3.flex.justify-between.flex-wrap
            {:class "items-center gap-4"}
            [tab-bar
             {:id :playground-view
              :default-tab :editor
              :tabs [[:editor "Code Editor"]
                     [:portal "Portal Viewer"]]
              :button-class (str "bg-white shadow border border-gray-200 "
                                 "text-gray-800 font-bold")}]

            ;; Execution controls
            [:div.flex.items-center.gap-3
             (when (= active-view :editor)
               [:button.px-4.py-2.text-white.text-xs.font-bold.rounded-lg
                {:type "button"
                 :class (str "bg-blue-600 hover:bg-blue-700 "
                             "transition-colors shadow-md")
                 :disabled @running?
                 :on-click (fn []
                             (reset! running? true)
                             (webr/eval-r-code!
                              @code-atom
                              {:on-done* (fn [_output result]
                                           (reset! running? false)
                                           (p/submit result)
                                           (rf/dispatch
                                            [:tabs/set-active-tab
                                             :playground-view :portal]))
                               :on-error* (fn [err]
                                            (reset! running? false)
                                            (p/submit err)
                                            (rf/dispatch
                                             [:tabs/set-active-tab
                                              :playground-view :portal]))}))}
                (if @running? "Evaluating..." "Run R Script")])
             (when (= active-view :portal)
               [:button.text-xs.text-red-500.hover:underline
                {:type "button"
                 :on-click #(p/clear)}
                "Clear Portal"])]]

           ;; Body area toggling between editor and portal
           [:div.p-6
            (case active-view
              :editor
              [code-editor
               {:value @code-atom
                :language "r"
                :height "450px"
                :theme "vs-light"
                :on-change #(reset! code-atom %)}]

              :portal
              [portal-frame])]]]]))))
