# Survival Analysis in R: The `survival` Package
===============================================

The `survival` package is the cornerstone of survival analysis in R,
providing highly optimized and industrially validated functions for handling
censored time-to-event data. In this project, it is used to compute log-rank
statistics and hazard ratios within WebR and the R simulation scripts.

---

## Core Functions Used

### 1. `Surv(time, event)`
Creates a survival object, usually used as the response variable in a model
formula. It packages the observed times and status indicators (censor/death)
together.
- **`time`**: Follow-up time.
- **`event`**: Status indicator (1 = event/death, 0 = censored).

```R
# Example
surv_obj <- Surv(time = time_obs, event = event_flag)
```

### 2. `survdiff(formula)`
Performs a log-rank test to compare the survival curves of two or more groups.
- Used in the simulation to compute the log-rank Z-statistic:
  $$Z = \frac{O_1 - E_1}{\sqrt{V}}$$
- If $Z > 0$ (favoring the treatment arm), it indicates the treatment arm had
  fewer events than expected under the null hypothesis.

```R
# Log-rank test comparing treatment groups
sd <- survdiff(Surv(time, status) ~ group)
```

### 3. `coxph(formula)`
Fits a Cox proportional hazards regression model.
- Used to estimate the Hazard Ratio (HR) between groups.
- The HR is computed by exponentiating the coefficient ($\beta$) of the
  treatment group variable: $\text{HR} = e^{\beta}$.

```R
# Fit Cox model and get Hazard Ratio
fit <- coxph(Surv(time, status) ~ group)
hr <- exp(coef(fit))
```

---

## Integration in regal-fitter

In `regal_fit.R` and the interactive WebR playground, we utilize these
functions for fast log-rank calculations on simulated clinical cohorts:

```R
fast_logrank <- function(times, events, groups) {
  # Perform standard log-rank test
  sd <- survdiff(Surv(times, events) ~ groups)
  o <- sd$obs[2]
  e <- sd$exp[2]
  v <- sd$var[2, 2]
  Z <- if (v <= 0) 0.0 else (e - o) / sqrt(v)
  
  # Estimate Cox hazard ratio
  HR <- 1.0
  tryCatch({
    fit <- coxph(Surv(times, events) ~ groups)
    HR <- exp(coef(fit))
  }, error = function(e) {})
  
  list(Z = Z, HR = HR)
}
```
