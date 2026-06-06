(ns webr.r-base.tests
  "Base R statistical test wrappers for WebR.
   Each function generates -code, step-builder, and ! executor."
  (:require [webr.core])
  (:require-macros [webr.macros :refer [def-r-wrapper]]))

;; Note on arrays/vectors in arguments:
;; WebR parameters are formatted into string expressions. Passing a Clojure vector
;; like [1 2 3] directly needs to format as c(1, 2, 3) or be a string.
;; For simple vector inputs, we template them using ~a, expecting the user to pass either
;; a pre-formatted string like "c(1, 2, 3)" or we rely on default formatting.
;; To keep parameters flexible, default inputs are represented as strings.

;; ===========================================================================
;; 1. Student's t-test  (t.test)
;; ===========================================================================
(def-r-wrapper t-test
  "Student's t-test (one-sample, two-sample, paired)."
  [[x "c()"] [y "NULL"] [alternative "two.sided"] [mu 0] [paired "FALSE"] [var.equal "FALSE"] [conf.level 0.95]]
  "list(result = t.test(~a, y=~a, alternative='~a', mu=~a, paired=~a, var.equal=~a, conf.level=~a))"
  "")

;; ===========================================================================
;; 2. Wilcoxon signed-rank and Mann-Whitney U tests  (wilcox.test)
;; ===========================================================================
(def-r-wrapper wilcox-test
  "Wilcoxon Rank Sum and Signed Rank Tests."
  [[x "c()"] [y "NULL"] [alternative "two.sided"] [mu 0] [paired "FALSE"] [exact "NULL"] [correct "TRUE"] [conf.int "FALSE"] [conf.level 0.95]]
  "list(result = wilcox.test(~a, y=~a, alternative='~a', mu=~a, paired=~a, exact=~a, correct=~a, conf.int=~a, conf.level=~a))"
  "")

;; ===========================================================================
;; 3. Analysis of Variance  (aov)
;; ===========================================================================
(def-r-wrapper aov
  "Fit an Analysis of Variance Model."
  [[formula "y ~ x"] [data "NULL"]]
  "list(result = summary(aov(~a, data=~a)))"
  "")

;; ===========================================================================
;; 4. Kruskal-Wallis rank sum test  (kruskal.test)
;; ===========================================================================
(def-r-wrapper kruskal-test
  "Kruskal-Wallis Rank Sum Test."
  [[formula "y ~ x"] [data "NULL"]]
  "list(result = kruskal.test(~a, data=~a))"
  "")

;; ===========================================================================
;; 5. Friedman rank sum test  (friedman.test)
;; ===========================================================================
(def-r-wrapper friedman-test
  "Friedman Rank Sum Test for repeated measures."
  [[formula "y ~ groups | blocks"] [data "NULL"]]
  "list(result = friedman.test(~a, data=~a))"
  "")

;; ===========================================================================
;; 6. Pearson's chi-squared test  (chisq.test)
;; ===========================================================================
(def-r-wrapper chisq-test
  "Pearson's Chi-squared Test for independence or goodness-of-fit."
  [[x "c()"] [y "NULL"] [correct "TRUE"] [p "NULL"] [rescale.p "FALSE"] [simulate.p.value "FALSE"] [B 2000]]
  "list(result = chisq.test(~a, y=~a, correct=~a, p=~a, rescale.p=~a, simulate.p.value=~a, B=~a))"
  "")

;; ===========================================================================
;; 7. Fisher's exact test  (fisher.test)
;; ===========================================================================
(def-r-wrapper fisher-test
  "Fisher's Exact Test for contingency tables."
  [[x "matrix(c(), nrow=2)"] [y "NULL"] [workspace 200000] [hybrid "FALSE"] [control "list()"] [or 1] [alternative "two.sided"] [conf.int "TRUE"] [conf.level 0.95] [simulate.p.value "FALSE"] [B 2000]]
  "list(result = fisher.test(~a, y=~a, workspace=~a, hybrid=~a, control=~a, or=~a, alternative='~a', conf.int=~a, conf.level=~a, simulate.p.value=~a, B=~a))"
  "")

;; ===========================================================================
;; 8. Tests for proportions  (prop.test)
;; ===========================================================================
(def-r-wrapper prop-test
  "Test of equal or specific proportions."
  [[x "c()"] [n "c()"] [p "NULL"] [alternative "two.sided"] [conf.level 0.95] [correct "TRUE"]]
  "list(result = prop.test(~a, n=~a, p=~a, alternative='~a', conf.level=~a, correct=~a))"
  "")

;; ===========================================================================
;; 9. Exact Binomial Test  (binom.test)
;; ===========================================================================
(def-r-wrapper binom-test
  "Exact Binomial Test."
  [[x 0] [n 10] [p 0.5] [alternative "two.sided"] [conf.level 0.95]]
  "list(result = binom.test(~a, n=~a, p=~a, alternative='~a', conf.level=~a))"
  "")

;; ===========================================================================
;; 10. McNemar's chi-squared test  (mcnemar.test)
;; ===========================================================================
(def-r-wrapper mcnemar-test
  "McNemar's Chi-squared Test for paired nominal data."
  [[x "matrix(c(), nrow=2)"] [y "NULL"] [correct "TRUE"]]
  "list(result = mcnemar.test(~a, y=~a, correct=~a))"
  "")

;; ===========================================================================
;; 11. Correlation test  (cor.test)
;; ===========================================================================
(def-r-wrapper cor-test
  "Pearson, Spearman, and Kendall correlation tests."
  [[x "c()"] [y "c()"] [alternative "two.sided"] [method "pearson"] [exact "NULL"] [conf.level 0.95] [continuity "FALSE"]]
  "list(result = cor.test(~a, ~a, alternative='~a', method='~a', exact=~a, conf.level=~a, continuity=~a))"
  "")

;; ===========================================================================
;; 12. Shapiro-Wilk normality test  (shapiro.test)
;; ===========================================================================
(def-r-wrapper shapiro-test
  "Shapiro-Wilk test for normality."
  [[x "c()"]]
  "list(result = shapiro.test(~a))"
  "")

;; ===========================================================================
;; 13. Comparison of two variances  (var.test)
;; ===========================================================================
(def-r-wrapper var-test
  "F-test to compare two variances."
  [[x "c()"] [y "c()"] [ratio 1] [alternative "two.sided"] [conf.level 0.95]]
  "list(result = var.test(~a, ~a, ratio=~a, alternative='~a', conf.level=~a))"
  "")

;; ===========================================================================
;; 14. Bartlett's variance test  (bartlett.test)
;; ===========================================================================
(def-r-wrapper bartlett-test
  "Bartlett's test for homogeneity of variances."
  [[formula "y ~ x"] [data "NULL"]]
  "list(result = bartlett.test(~a, data=~a))"
  "")

;; ===========================================================================
;; 15. Fligner-Killeen variance test  (fligner.test)
;; ===========================================================================
(def-r-wrapper fligner-test
  "Non-parametric Fligner-Killeen test for homogeneity of variances."
  [[formula "y ~ x"] [data "NULL"]]
  "list(result = fligner.test(~a, data=~a))"
  "")

;; ===========================================================================
;; 16. Ansari-Bradley scale test  (ansari.test)
;; ===========================================================================
(def-r-wrapper ansari-test
  "Ansari-Bradley test for equal scale parameters."
  [[x "c()"] [y "c()"] [alternative "two.sided"] [exact "NULL"] [conf.int "FALSE"] [conf.level 0.95]]
  "list(result = ansari.test(~a, ~a, alternative='~a', exact=~a, conf.int=~a, conf.level=~a))"
  "")

;; ===========================================================================
;; 17. Kolmogorov-Smirnov test  (ks.test)
;; ===========================================================================
(def-r-wrapper ks-test
  "Kolmogorov-Smirnov test for comparing distributions."
  [[x "c()"] [y "pnorm"] [alternative "two.sided"] [exact "NULL"]]
  "list(result = ks.test(~a, ~a, alternative='~a', exact=~a))"
  "")

;; ===========================================================================
;; 18. Box-Pierce and Ljung-Box test  (Box.test)
;; ===========================================================================
(def-r-wrapper box-test
  "Box-Pierce and Ljung-Box tests for time series white noise."
  [[x "c()"] [lag 1] [type "Box-Pierce"] [fitdf 0]]
  "list(result = Box.test(~a, lag=~a, type='~a', fitdf=~a))"
  "")

;; ===========================================================================
;; 19. Mauchly's sphericity test  (mauchly.test)
;; ===========================================================================
(def-r-wrapper mauchly-test
  "Mauchly's test for sphericity."
  [[object "lm()"] [SSD "NULL"] [idata "NULL"] [idesign "NULL"] [M "NULL"] [X "NULL"] [univariate "TRUE"]]
  "list(result = mauchly.test(~a, SSD=~a, idata=~a, idesign=~a, M=~a, X=~a, univariate=~a))"
  "")
