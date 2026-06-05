(ns app.webr.gs-design
  (:require [app.webr :as webr]
            [clojure.string :as str])
  (:require-macros [app.webr.macros :refer [def-r-wrapper]]))

(defn generate-gs-design!
  "Executes gsDesign function in WebR to generate group sequential boundaries.

   Args:
   - params: Map containing :k, :alpha, :beta, :test-type, :sfu, :sfl.
   - on-success: Callback fn [results-map] invoked on completion.
   - on-error: Callback fn [error-object] invoked on failure.

   Builds the R script dynamically, runs it in WebR, and converts R outputs
   into a structured ClojureScript map."
  ([params]
   (generate-gs-design! params webr/on-done webr/on-error))
  ([params on-success on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-success) "on-success callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [k (or (:k params) 3)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         test-type (or (:test-type params) 4)
         sfu (or (:sfu params) "sfLDOF")
         sfl (or (:sfl params) "sfLDOF")
         r-code (str "library(gsDesign)\n"
                     "x <- gsDesign(k=" k ", test.type=" test-type
                     ", alpha=" alpha ", beta=" beta
                     ", sfu=" sfu ", sfl=" sfl ")\n"
                     "list(timing=x$timing, "
                     "upper_bounds=x$upper$bound, "
                     "lower_bounds=x$lower$bound, "
                     "n_I=x$n.I)")]
     (webr/eval-r-code!
      r-code
      (fn [output-lines result-val]
        (try
          (let [res-map (js->clj result-val :keywordize-keys true)
                timing (:timing res-map)
                upper-bounds (:upper-bounds res-map)
                lower-bounds (:lower-bounds res-map)
                n-i (:n_I res-map)]
            (on-success {:timing timing
                         :upper-bounds upper-bounds
                         :lower-bounds lower-bounds
                         :n-i n-i
                         :output output-lines}))
          (catch :default e
            (on-error e))))
      on-error))))

(defn get-gs-design-summary!
  "Computes and returns the text summary of a group sequential design.

   Args:
   - params: Map containing R parameter settings for gsDesign.
   - on-success: Callback fn [summary-text] invoked with the printed summary.
   - on-error: Callback fn [error-object] invoked on failure.

   Constructs the gsDesign command, captures its printed output using R's
   capture.output function, and returns the result as a raw string."
  ([params]
   (get-gs-design-summary! params webr/on-done webr/on-error))
  ([params on-success on-error]
   (assert (map? params) "params must be a map")
   (assert (fn? on-success) "on-success callback must be a function")
   (assert (fn? on-error) "on-error callback must be a function")
   (let [k (or (:k params) 3)
         alpha (or (:alpha params) 0.025)
         beta (or (:beta params) 0.1)
         test-type (or (:test-type params) 4)
         sfu (or (:sfu params) "sfLDOF")
         sfl (or (:sfl params) "sfLDOF")
         r-code (str "library(gsDesign)\n"
                     "x <- gsDesign(k=" k ", test.type=" test-type
                     ", alpha=" alpha ", beta=" beta
                     ", sfu=" sfu ", sfl=" sfl ")\n"
                     "paste(capture.output(print(x)), collapse='\\n')")]
     (webr/eval-r-code!
      r-code
      (fn [_summary-lines result-val]
        (try
          (on-success result-val)
          (catch :default e
            (on-error e))))
      on-error))))

(def-r-wrapper gs-design
  "Derives Group Sequential Clinical Trial Designs and Describes Their
Properties. gsDesign() is the primary function to find boundaries
and trial size for a group sequential design."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [sfu "sfLDOF"] [sfl "sfLDOF"] [timing "NULL"] [n.I "NULL"]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a, sfu=~a, sfl=~a, timing=~a, n.I=~a)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, lower_bounds=x$lower$bound, n_I=x$n.I)")

(def-r-wrapper gs-probability
  "Boundary Crossing Probabilities. Computes boundary crossing
probabilities, expected sample size, and power for a given set
of boundaries."
  [[theta 0] [n.I "1:3"] [a "c(-1.5, -0.5, 0.5)"] [b "c(2.5, 2.0, 1.5)"]]
  "x <- gsProbability(theta=~a, n.I=~a, a=~a, b=~a)\nlist(theta=x$theta, n_I=x$n.I, upper_prob=x$upper$prob, lower_prob=x$lower$prob)")

(def-r-wrapper gs-bound
  "Boundary Derivation. A lower-level function to compute upper and
lower bounds given boundary crossing probabilities under the null
hypothesis."
  [[i 1] [theta 0.0] [a -1.96] [b 1.96]]
  "x <- gsBound(i=~a, theta=~a, a=~a, b=~a)\nlist(boundary=x)")

(def-r-wrapper gs-bound1
  "One-sided Boundary Derivation. A lower-level function to compute the
upper bound given a fixed lower boundary and desired upper boundary
crossing probabilities."
  [[theta 0.0] [a -1.96] [b 1.96]]
  "x <- gsBound1(theta=~a, a=~a, b=~a)\nlist(boundary=x)")

(def-r-wrapper sequential-p-value
  "Sequential P-Values. Computes sequential p-values for group
sequential designs based on observed boundaries."
  [[otc "NULL"] [index 1] [zi 1.96]]
  "x <- sequentialPValue(otc=~a, index=~a, zi=~a)\nlist(pValue=x)")

(def-r-wrapper gs-bound-summary
  "Boundary Summary Tables. Provides a tabular summary of a group
sequential design in a data frame."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nsummary_table <- gsBoundSummary(x)\npaste(capture.output(print(summary_table)), collapse='\\n')")

(def-r-wrapper xprint
  "Export summary tables. Formats and prints gsBoundSummary tables cleanly
for reporting."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nsummary_table <- gsBoundSummary(x)\npaste(capture.output(xprint(summary_table)), collapse='\\n')")

(def-r-wrapper gs-b-value
  "B-values. Computes B-values from Z-values and information
fractions."
  [[z 1.96] [t 0.5]]
  "x <- gsBValue(z=~a, t=~a)\nlist(bValue=x)")

(def-r-wrapper gs-delta
  "Delta values. Computes standardized effect sizes (Delta) from
Z-values and information fractions."
  [[z 1.96] [t 0.5]]
  "x <- gsDelta(z=~a, t=~a)\nlist(delta=x)")

(def-r-wrapper gs-rr
  "Relative risk reduction. Computes relative risk reduction boundaries
corresponding to Z-values."
  [[z 1.96] [t 0.5]]
  "x <- gsRR(z=~a, t=~a)\nlist(rr=x)")

(def-r-wrapper gs-hr
  "Hazard ratio. Approximates the hazard ratio required to cross a
boundary at a given information fraction."
  [[z 1.96] [t 0.5]]
  "x <- gsHR(z=~a, t=~a)\nlist(hr=x)")

(def-r-wrapper gs-cpz
  "Conditional power from Z. Computes conditional power given an
observed Z-value at a specific information fraction."
  [[z 1.96] [t 0.5]]
  "x <- gsCPz(z=~a, t=~a)\nlist(cpz=x)")

(def-r-wrapper n-normal
  "Sample size for normal endpoints. Computes sample size or power for
a trial with normal endpoints."
  [[delta1 1.0] [sd 1.0] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nNormal(delta1=~a, sd=~a, alpha=~a, beta=~a, ratio=~a)\nlist(n=n)")

(def-r-wrapper ci-binomial
  "Confidence intervals for binomial proportions. Computes confidence
intervals for the difference of two binomial proportions."
  [[x1 10] [n1 100] [x2 5] [n2 100]]
  "x <- ciBinomial(x1=~a, n1=~a, x2=~a, n2=~a)\nlist(lower=x$lower, upper=x$upper)")

(def-r-wrapper n-binomial
  "Sample size for binomial endpoints. Computes sample size or power for
a two-arm binomial trial."
  [[p1 0.2] [p2 0.1] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nBinomial(p1=~a, p2=~a, alpha=~a, beta=~a, ratio=~a)\nlist(n=n)")

(def-r-wrapper sim-binomial
  "Simulate binomial outcomes. Simulates binomial data for two-arm
clinical trials."
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- simBinomial(p1=~a, p2=~a, n1=~a, n2=~a)\nlist(p1=x$p1, p2=x$p2)")

(def-r-wrapper test-binomial
  "Hypothesis testing for binomial proportions. Tests for the difference
of two binomial proportions."
  [[x1 10] [n1 100] [x2 5] [n2 100]]
  "x <- testBinomial(x1=~a, n1=~a, x2=~a, n2=~a)\nlist(pValue=x)")

(def-r-wrapper var-binomial
  "Variance of binomial difference. Computes variance for binomial
difference under various methods."
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- varBinomial(p1=~a, p2=~a, n1=~a, n2=~a)\nlist(variance=x)")

(def-r-wrapper binomial-power-table
  "Power table for binomial trials. Generates a power table for two-arm
clinical trials with binomial outcomes."
  [[p1 0.2] [p2 0.1] [n1 100] [n2 100]]
  "x <- binomialPowerTable(p1=~a, p2=~a, n1=~a, n2=~a)\nlist(power=x)")

(def-r-wrapper n-survival
  "Sample size for survival endpoints. Computes sample size and events
under the proportional hazards model."
  [[lambda1 0.1] [lambda2 0.07] [alpha 0.025] [beta 0.1] [ratio 1.0]]
  "n <- nSurvival(lambda1=~a, lambda2=~a, alpha=~a, beta=~a, ratio=~a)\nlist(nEvents=n$nEvents, n=n$n)")

(def-r-wrapper t-events-ia
  "Interim analysis timing. Computes timing of interim analyses based on
event accumulation."
  [[n "100"] [events "50"]]
  "x <- tEventsIA(n=~a, events=~a)\nlist(time=x)")

(def-r-wrapper n-events-ia
  "Event counts for interim analysis. Computes target event counts for
interim analyses."
  [[n "100"] [events "50"]]
  "x <- nEventsIA(n=~a, events=~a)\nlist(events=x)")

(def-r-wrapper n-surv
  "Advanced survival sample size. Calculates sample size for survival
trials with non-proportional hazards or custom accrual."
  [[lambda1 0.1] [lambda2 0.07] [alpha 0.025] [beta 0.1]]
  "n <- nSurv(lambda1=~a, lambda2=~a, alpha=~a, beta=~a)\nlist(nEvents=n$nEvents, n=n$n)")

(def-r-wrapper gs-surv
  "Group sequential survival design. Derives group sequential designs
for time-to-event outcomes."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurv(k=~a, alpha=~a, beta=~a)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound, lower_bounds=x$lower$bound)")

(def-r-wrapper gs-surv-calendar
  "Calendar-based survival design. Derives survival designs with
analyses planned at calendar times."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurvCalendar(k=~a, alpha=~a, beta=~a)\nlist(k=x$k, timing=x$timing, upper_bounds=x$upper$bound)")

(def-r-wrapper gs-surv-power
  "Power for survival design. Calculates power for a given group
sequential survival trial design."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsSurvPower(k=~a, alpha=~a, beta=~a)\nlist(power=x$power)")

(def-r-wrapper n-events
  "Required event count. Computes number of events required for a
survival trial under proportional hazards."
  [[hr 0.7] [alpha 0.025] [beta 0.1]]
  "n <- nEvents(hr=~a, alpha=~a, beta=~a)\nlist(nEvents=n)")

(def-r-wrapper zn2hr
  "Convert Z and N to HR. Approximates the observed hazard ratio
corresponding to a Z-value and event count."
  [[z 1.96] [n 100]]
  "x <- zn2hr(z=~a, n=~a)\nlist(hr=x)")

(def-r-wrapper hrn2z
  "Convert HR and N to Z. Approximates the Z-value corresponding to a
hazard ratio and event count."
  [[hr 0.7] [n 100]]
  "x <- hrn2z(hr=~a, n=~a)\nlist(z=x)")

(def-r-wrapper hrz2n
  "Convert HR and Z to N. Approximates the event count corresponding to a
hazard ratio and target Z-value."
  [[hr 0.7] [z 1.96]]
  "x <- hrz2n(hr=~a, z=~a)\nlist(n=x)")

(def-r-wrapper e-events
  "Expected event timing. Computes the expected timing and accumulation
of events over the trial duration."
  [[lambda1 0.1] [lambda2 0.07]]
  "x <- eEvents(lambda1=~a, lambda2=~a)\nlist(events=x)")

(def-r-wrapper to-integer
  "Round to integer. Utility to convert fractional sample sizes or event
counts to integers."
  [[x 10.5]]
  "x <- toInteger(~a)\nlist(integer=x)")

(def-r-wrapper to-binomial-exact
  "Exact binomial design. Helper function to translate normal
approximations to exact binomial designs."
  [[x 10]]
  "x <- toBinomialExact(~a)\nlist(exact=x)")

(def-r-wrapper repeated-p-value-binomial-exact
  "Repeated P-values. Computes repeated p-values for exact binomial group
sequential designs."
  [[x 10]]
  "x <- repeatedPValueBinomialExact(~a)\nlist(pValue=x)")

(def-r-wrapper sequential-p-value-binomial-exact
  "Sequential exact P-values. Computes sequential p-values for exact
binomial sequential trials."
  [[x 10]]
  "x <- sequentialPValueBinomialExact(~a)\nlist(pValue=x)")

(def-r-wrapper sim-binomial-seasonal-exact
  "Seasonal binomial simulation. Simulates binomial trials with seasonal
variations."
  [[x 10]]
  "x <- simBinomialSeasonalExact(~a)\nlist(exact=x)")

(def-r-wrapper spending-function
  "Spending function. Standard interface for evaluating spending functions
and boundaries."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- spendingFunction(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-ld-of
  "Lan-DeMets O'Brien-Fleming. Computes the Lan-DeMets spending function
approximating O'Brien-Fleming boundaries."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLDOF(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-ld-pocock
  "Lan-DeMets Pocock. Computes the Lan-DeMets spending function
approximating Pocock boundaries."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLDPocock(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-hsd
  "Hwang-Shih-DeCani spending function. Computes Hwang-Shih-DeCani
boundaries using a parameter."
  [[alpha 0.025] [t 0.5] [param "-4"]]
  "x <- sfHSD(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-power
  "Kim-DeMets power spending function. Computes power spending function
boundaries using a parameter."
  [[alpha 0.025] [t 0.5] [param "3"]]
  "x <- sfPower(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-exponential
  "Exponential spending function. Computes exponential boundaries with a
specified rate parameter."
  [[alpha 0.025] [t 0.5] [param "0.5"]]
  "x <- sfExponential(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-logistic
  "Logistic spending function. Computes 2-parameter logistic spending
function boundaries."
  [[alpha 0.025] [t 0.5] [param "c(1, 1.5)"]]
  "x <- sfLogistic(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-beta-dist
  "Beta distribution spending function. Computes boundaries based on the
Beta cumulative distribution function."
  [[alpha 0.025] [t 0.5] [param "c(1, 1)"]]
  "x <- sfBetaDist(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-cauchy
  "Cauchy spending function. Computes spending function boundaries using
Cauchy cumulative distribution function."
  [[alpha 0.025] [t 0.5] [param "c(0, 1)"]]
  "x <- sfCauchy(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-extreme-value
  "Extreme value spending function. Computes extreme value boundaries
using Gumbel distribution."
  [[alpha 0.025] [t 0.5] [param "c(1, 2)"]]
  "x <- sfExtremeValue(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-extreme-value2
  "Alternate extreme value spending. Computes secondary extreme value
boundaries using Gumbel distribution."
  [[alpha 0.025] [t 0.5] [param "c(1, 2)"]]
  "x <- sfExtremeValue2(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-normal
  "Normal spending function. Computes normal distribution-based sequential
trial boundaries."
  [[alpha 0.025] [t 0.5] [param "c(0, 1.5)"]]
  "x <- sfNormal(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-t-dist
  "t-distribution spending function. Computes sequential trial boundaries
based on Student's t-distribution."
  [[alpha 0.025] [t 0.5] [param "c(0, 1)"]]
  "x <- sfTDist(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-linear
  "Linear spending function. Computes a linear accumulation of Type I
error over information time."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfLinear(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-step
  "Step spending function. Computes discrete step increases in cumulative
error spending."
  [[alpha 0.025] [t 0.5] [param "c(0.3, 0.5)"]]
  "x <- sfStep(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-points
  "Pointwise spending function. Computes user-specified pointwise
boundaries for error spending."
  [[alpha 0.025] [t 0.5] [param "c(0.3, 0.5)"]]
  "x <- sfPoints(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-truncated
  "Truncated spending function. Computes boundaries using a truncated
cumulative error spending schedule."
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfTruncated(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-trimmed
  "Trimmed spending function. Computes trimmed spending functions where
bounds are cut off."
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfTrimmed(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-gapped
  "Gapped spending function. Computes spending function with gaps in
analyses."
  [[alpha 0.025] [t 0.5] [param "c(0.1, 0.9, 3)"]]
  "x <- sfGapped(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg1
  "Family 1 spending function. Computes experimental spending function
family 1 boundaries."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG1(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg2
  "Family 2 spending function. Computes experimental spending function
family 2 boundaries."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG2(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper sf-xg3
  "Family 3 spending function. Computes experimental spending function
family 3 boundaries."
  [[alpha 0.025] [t 0.5] [param "NULL"]]
  "x <- sfXG3(alpha=~a, t=~a, param=~a)\nlist(spend=x$spend, name=x$name)")

(def-r-wrapper gs-cp
  "Conditional power. Computes conditional power of a design given an
interim test statistic."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96] [theta "NULL"]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\ncp <- gsCP(x, i=~a, zi=~a, theta=~a)\nlist(cp=cp$cp, theta=cp$theta)")

(def-r-wrapper gs-pp
  "Predictive power. Computes predictive power of a design given an
interim test statistic."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npp <- gsPP(x, i=~a, zi=~a)\nlist(pp=pp)")

(def-r-wrapper gs-pi
  "Prediction interval. Computes prediction intervals for future trial
outcomes based on interim data."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npi_val <- gsPI(x, i=~a, zi=~a)\nlist(pi=pi_val)")

(def-r-wrapper gs-posterior
  "Posterior distribution. Computes posterior probabilities of hypotheses
based on interim results."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npost <- gsPosterior(x, i=~a, zi=~a)\nlist(posterior=post)")

(def-r-wrapper gs-pos
  "Probability of success. Computes probability of success (POS) for the
remainder of the study."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\npos_val <- gsPOS(x, i=~a, zi=~a)\nlist(pos=pos_val)")

(def-r-wrapper gs-cpos
  "Conditional POS. Computes conditional probability of success given
interim trial results."
  [[k 3] [test.type 4] [alpha 0.025] [beta 0.1] [i 1] [zi 1.96]]
  "x <- gsDesign(k=~a, test.type=~a, alpha=~a, beta=~a)\ncpos <- gsCPOS(x, i=~a, zi=~a)\nlist(cpos=cpos)")

(def-r-wrapper gs-bound-cp
  "Boundary conditional power. Computes conditional power at the efficacy
and futility boundaries."
  [[k 3] [alpha 0.025] [beta 0.1] [theta "NULL"] [r 0.5]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\ny <- gsBoundCP(x, theta=~a, r=~a)\nlist(cp=y)")

(def-r-wrapper normal-grid
  "Numerical integration grid. Generates a grid of points and weights for
numerical integration of normal density."
  [[r 18] [bounds "c(-3, 3)"]]
  "x <- normalGrid(r=~a, bounds=~a)\nlist(z=x$z, w=x$w)")

(def-r-wrapper gs-density
  "Boundary density functions. Computes density function values at group
sequential boundaries."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nd <- gsDensity(x)\nlist(density=d)")

(def-r-wrapper cond-power
  "General conditional power function. Evaluates conditional power under
arbitrary designs and boundaries."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nlist(condPower=x)")

(def-r-wrapper ssr-cp
  "Sample size re-estimation. Re-estimates sample size based on
conditional power at an interim analysis."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nlist(ssrCP=x)")

(def-r-wrapper power-ssr-cp
  "Power for sample size re-estimation. Evaluates trial power following
sample size re-estimation."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nlist(power=x)")

(def-r-wrapper z2-nc
  "Z to non-centrality parameter. Computes non-centrality parameters
corresponding to observed Z-values."
  [[z 1.96] [t 0.5]]
  "x <- z2NC(z=~a, t=~a)\nlist(nc=x)")

(def-r-wrapper z2-z
  "Z to standard Z. Computes standardized test statistic boundaries under
the alternative hypothesis."
  [[z 1.96] [t 0.5]]
  "x <- z2Z(z=~a, t=~a)\nlist(z=x)")

(def-r-wrapper z2-fisher
  "Z to Fisher's information. Computes Fisher's information from
sequential Z-values."
  [[z 1.96] [t 0.5]]
  "x <- z2Fisher(z=~a, t=~a)\nlist(fisher=x)")

(def-r-wrapper gs-binomial-exact
  "Exact binomial boundaries. Computes exact binomial boundaries using
binomial probabilities rather than normal approximations."
  [[k 3] [theta "c(0.1, 0.2)"] [n.I "10:30"]]
  "x <- gsBinomialExact(k=~a, theta=~a, n.I=~a)\nlist(upper=x$upper, lower=x$lower)")

(def-r-wrapper binomial-sprt
  "Binomial SPRT design. Derives boundaries for Wald's Sequential
Probability Ratio Test for binomial outcomes."
  [[p0 0.1] [p1 0.2] [alpha 0.025] [beta 0.1]]
  "x <- binomialSPRT(p0=~a, p1=~a, alpha=~a, beta=~a)\nlist(sprt=x)")

(def-r-wrapper n-binomial1-sample
  "Single arm binomial sample size. Computes sample size for single-arm
binomial trials using exact tests."
  [[p0 0.1] [p1 0.2] [alpha 0.025] [beta 0.1]]
  "x <- nBinomial1Sample(p0=~a, p1=~a, alpha=~a, beta=~a)\nlist(n=x)")

(def-r-wrapper check-lengths
  "Length verification. Verifies if arguments have compatible vector
lengths."
  [[x "1:5"] [y "1:5"]]
  "checkLengths(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper check-range
  "Value range verification. Verifies if a variable falls within
designated numeric bounds."
  [[x 5] [bounds "c(0, 10)"]]
  "checkRange(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper check-scalar
  "Scalar variable validation. Validates type, bounds, and lengths for
a scalar parameter."
  [[x 5] [bounds "c(0, 10)"]]
  "checkScalar(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper check-vector
  "Vector validation. Validates types, bounds, and lengths for vector
parameters."
  [[x "1:5"] [bounds "c(0, 10)"]]
  "checkVector(~a, ~a)\nlist(checked=TRUE)")

(def-r-wrapper is-integer
  "Integer check. Verifies if a numeric value is an integer."
  [[x 5]]
  "x <- isInteger(~a)\nlist(isInteger=x)")

(def-r-wrapper as-table
  "Convert to table. Formats a group sequential design object into a
readable raw data table."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\ntab <- as_table(x)\nlist(table=tab)")

(def-r-wrapper as-gt
  "Format with gt. Formats a group sequential design object as a
beautiful gt table."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\ngt_tab <- as_gt(x)\nlist(gt=gt_tab)")

(def-r-wrapper as-rtf
  "Export to RTF table. Exports formatted design summary tables as RTF
files for clinical reports."
  [[k 3] [alpha 0.025] [beta 0.1]]
  "x <- gsDesign(k=~a, alpha=~a, beta=~a)\nrtf_tab <- as_rtf(x)\nlist(rtf=rtf_tab)")