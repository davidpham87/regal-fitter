# REGAL Constraint Fitter (R translation)
# =======================================
# Fits parametric survival models using publicly disclosed hard constraints.

library(survival)
library(parallel)

# Default Config values matching app.state
default_config <- list(
  n_total = 126,
  n_per_arm = 63,
  enroll_bands = matrix(c(
    0.0, 12.0, 15,
    12.0, 24.0, 50,
    24.0, 36.0, 56,
    36.0, 38.0, 5
  ), ncol = 3, byrow = TRUE),
  t_ia = 46.0,
  t_upd = 58.0,
  t_pr3 = 62.97,
  n_ev_ia = 60,
  n_ev_upd = 72,
  n_ev_pr3 = 78,
  n_ev_final = 80,
  use_pr3_anchor = TRUE,
  prefilter_tol_ia = 3.5,
  prefilter_tol_upd = 3.5,
  prefilter_tol_pr3 = 3.5,
  tol_ia = 3.0,
  tol_upd = 3.0,
  tol_pr3 = 3.0,
  tol_increment_ia_upd = 3.0,
  tol_increment_upd_pr3 = 3.0,
  futility_hr_max = 0.9,
  efficacy_hr_min = 0.35,
  pool_mos_min_at_ia = 12.0,
  median_fu_target = 13.5,
  median_fu_tol = 3.0,
  enforce_no_80_by_today = TRUE,
  no_80_slack_months = 1.0,
  seed = 20260508,
  n_sims_per_combo = 500,
  n_sims_screen = 50,
  n_screen_min_pass = 1
)

# Enrollment times helper
make_enrollment_times <- function(cfg) {
  times <- c()
  bands <- cfg$enroll_bands
  for (i in 1:nrow(bands)) {
    lo <- bands[i, 1]
    hi <- bands[i, 2]
    n <- bands[i, 3]
    if (n > 0) {
      times <- c(times, runif(n, min = lo, max = hi))
    }
  }
  sort(times)
}

expected_enrollment_times <- function(cfg) {
  sub_per_unit <- 8
  pieces <- list()
  weights <- list()
  bands <- cfg$enroll_bands
  for (i in 1:nrow(bands)) {
    lo <- bands[i, 1]
    hi <- bands[i, 2]
    n <- bands[i, 3]
    n_sub <- max(2, as.integer((hi - lo) * sub_per_unit))
    e <- seq(lo, hi, length.out = n_sub + 1)[1:n_sub] + (hi - lo) / (2 * n_sub)
    pieces[[i]] <- e
    weights[[i]] <- rep(n / n_sub, n_sub)
  }
  list(pts = unlist(pieces), weights = unlist(weights))
}

# Survival Models
weibull_S <- function(t, scale, shape) {
  exp(-(pmax(t, 0) / scale)^shape)
}

weibull_scale_from_median <- function(median, shape) {
  median / (log(2.0))^(1.0 / shape)
}

cure_S <- function(t, p_cure, unc_scale, unc_shape) {
  p_cure + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)
}

leaky_cure_S <- function(t, p_cure, unc_scale, unc_shape, leak_rate_yr) {
  leak_rate_m <- leak_rate_yr / 12.0
  cured_S <- exp(-leak_rate_m * pmax(t, 0))
  p_cure * cured_S + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)
}

# Analytical expected event counts
expected_arm_events <- function(survival_func, params_grid, e_pts, e_weights,
                                 cal_times, n_per_arm, n_total) {
  arm_share <- n_per_arm / n_total
  G <- nrow(params_grid)
  T_len <- length(cal_times)
  out <- matrix(0, nrow = G, ncol = T_len)
  
  for (t_idx in 1:T_len) {
    cal_t <- cal_times[t_idx]
    fu <- pmax(cal_t - e_pts, 0)
    for (g in 1:G) {
      pars <- params_grid[g, ]
      S <- survival_func(fu, pars)
      out[g, t_idx] <- sum((1.0 - S) * e_weights) * arm_share
    }
  }
  out
}

# Helper to compute fast MH-style HR and Z
fast_logrank <- function(times, events, groups) {
  # groups: 0=BAT, 1=GPS
  if (sum(events) < 3) return(list(Z = 0.0, HR = 1.0))
  
  # Standard Log-rank
  sd <- survdiff(Surv(times, events) ~ groups)
  o <- sd$obs[2]
  e <- sd$exp[2]
  v <- sd$var[2, 2]
  Z <- if (v <= 0) 0.0 else (e - o) / sqrt(v)
  
  # Cox HR
  HR <- 1.0
  tryCatch({
    fit <- coxph(Surv(times, events) ~ groups)
    HR <- exp(coef(fit))
  }, error = function(e) {})
  
  list(Z = Z, HR = HR)
}

# Main simulation loop for one parameter combination
simulate_one_combo <- function(rec, cfg) {
  n_sims <- cfg$n_sims_per_combo
  n_total <- cfg$n_total
  n_per_arm <- cfg$n_per_arm
  
  # Run simulations in a loop
  accepted_stats <- list()
  n_pass_events <- 0
  
  for (sim in 1:n_sims) {
    enroll <- make_enrollment_times(cfg)
    arms <- sample(c(rep(0, n_per_arm), rep(1, n_per_arm)))
    
    surv <- numeric(n_total)
    bat_idx <- which(arms == 0)
    gps_idx <- which(arms == 1)
    
    # Draw BAT
    bat_med <- rec$bat_med
    bat_shape <- rec$bat_shape
    bat_scale <- weibull_scale_from_median(bat_med, bat_shape)
    surv[bat_idx] <- rweibull(n_per_arm, shape = bat_shape, scale = bat_scale)
    
    # Draw GPS
    if (rec$family == "weibull") {
      gps_scale <- weibull_scale_from_median(rec$gps_med, rec$gps_shape)
      surv[gps_idx] <- rweibull(n_per_arm, shape = rec$gps_shape,
                               scale = gps_scale)
    } else if (rec$family == "cure") {
      unc_scale <- weibull_scale_from_median(rec$unc_med, rec$unc_shape)
      is_cured <- runif(n_per_arm) < rec$cure_frac
      unc <- rweibull(n_per_arm, shape = rec$unc_shape, scale = unc_scale)
      surv[gps_idx] <- ifelse(is_cured, Inf, unc)
    } else if (rec$family == "leaky") {
      unc_scale <- weibull_scale_from_median(rec$unc_med, rec$unc_shape)
      is_cured <- runif(n_per_arm) < rec$cure_frac
      unc <- rweibull(n_per_arm, shape = rec$unc_shape, scale = unc_scale)
      leak_rate_m <- rec$leak_yr / 12.0
      leak <- if (leak_rate_m > 0) rexp(n_per_arm, rate = leak_rate_m) else Inf
      surv[gps_idx] <- ifelse(is_cured, leak, unc)
    }
    
    # Evaluate at timepoints
    fu_ia <- pmax(cfg$t_ia - enroll, 0)
    fu_up <- pmax(cfg$t_upd - enroll, 0)
    ev_ia <- surv <= fu_ia
    ev_up <- surv <= fu_up
    n_ia <- sum(ev_ia)
    n_up <- sum(ev_up)
    
    # Apply filters
    if (abs(n_ia - cfg$n_ev_ia) > cfg$tol_ia) next
    if (abs(n_up - cfg$n_ev_upd) > cfg$tol_upd) next
    if (abs((n_up - n_ia) - (cfg$n_ev_upd - cfg$n_ev_ia)) >
        cfg$tol_increment_ia_upd) next
    
    if (cfg$use_pr3_anchor) {
      fu_pr3 <- pmax(cfg$t_pr3 - enroll, 0)
      ev_pr3 <- surv <= fu_pr3
      n_pr3 <- sum(ev_pr3)
      if (abs(n_pr3 - cfg$n_ev_pr3) > cfg$tol_pr3) next
      if (abs((n_pr3 - n_up) - (cfg$n_ev_pr3 - cfg$n_ev_upd)) >
          cfg$tol_increment_upd_pr3) next
    }
    
    n_pass_events <- n_pass_events + 1
    
    # Calculate IA statistics
    time_ia <- pmin(surv, fu_ia)
    res_ia <- fast_logrank(time_ia, ev_ia, arms)
    if (res_ia$HR >= cfg$futility_hr_max || res_ia$HR <= cfg$efficacy_hr_min) {
      next
    }
    
    # Timing of 80th event
    death_cal <- enroll + surv
    reached_80 <- FALSE
    t80 <- NA
    hr_final <- NA
    
    finite_deaths <- sort(death_cal[is.finite(death_cal)])
    if (length(finite_deaths) >= cfg$n_ev_final) {
      t80 <- finite_deaths[cfg$n_ev_final]
      reached_80 <- TRUE
      if (cfg$enforce_no_80_by_today && t80 < cfg$t_now - cfg$no_80_slack_months) {
        next
      }
      fu_fin <- pmax(t80 - enroll, 0)
      time_fin <- pmin(surv, fu_fin)
      ev_fin <- surv <= fu_fin
      res_fin <- fast_logrank(time_fin, ev_fin, arms)
      hr_final <- res_fin$HR
    }
    
    accepted_stats[[length(accepted_stats) + 1]] <- list(
      hr_ia = res_ia$HR,
      z_ia = res_ia$Z,
      reached_80 = reached_80,
      t80 = t80,
      hr_final = hr_final
    )
  }
  
  if (length(accepted_stats) == 0) return(NULL)
  
  # Summarize accepted simulations
  reached <- sapply(accepted_stats, function(x) x$reached_80)
  hr_fin <- sapply(accepted_stats, function(x) x$hr_final)
  t80_vals <- sapply(accepted_stats, function(x) x$t80)
  
  rec$p_reach80 <- mean(reached)
  rec$p_success_overall <- mean(reached & (hr_fin < 0.636), na.rm = TRUE)
  rec$median_hr_final <- median(hr_fin, na.rm = TRUE)
  rec$median_t80_months <- median(t80_vals, na.rm = TRUE)
  rec$n_accepted <- length(accepted_stats)
  
  rec
}

# Example execution of a single simulation
run_demo <- function() {
  cfg <- default_config
  cfg$t_now <- 63.0  # approximate current time
  
  rec <- list(
    family = "leaky",
    bat_med = 10.0,
    bat_shape = 0.85,
    unc_med = 15.0,
    unc_shape = 0.85,
    cure_frac = 0.2,
    leak_yr = 0.07
  )
  
  cat("Running demonstration simulation in R...\n")
  res <- simulate_one_combo(rec, cfg)
  print(res)
}

run_demo()
