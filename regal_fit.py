"""
REGAL Constraint Fitter
=======================

Fits parametric survival models to the REGAL Phase 3 trial using ONLY
the publicly disclosed hard constraints. No biological priors on BAT
median OS, GPS cure fraction, immune-response rates, etc. The data
speaks for itself.

HARD CONSTRAINTS (from public disclosures):
  - Trial start (first patient dosed): Feb 8, 2021  -> calendar t=0
  - Enrollment completed: April 2024 (~38 months)
  - 126 patients randomized 1:1 (63 per arm)
  - 60 events (deaths) by ~Dec 2024 (calendar month ~46)
  - 72 events (deaths) by ~Dec 2025 (calendar month ~58)
  - 80th event NOT YET announced as of today (m63 = May 2026)
  - IDMC at IA passed BOTH gates:
      * not stopped for futility:  HR_IA < futility_hr_max  (default 0.90,
        a defensible read of "exceeded predetermined futility criteria")
      * not stopped for efficacy:  HR_IA > efficacy_hr_min  (default 0.55,
        from O'Brien-Fleming alpha-spending boundary at info=60/80=0.75)
  - Pooled (blinded) median OS at IA exceeds pool_mos_min_at_ia months
    (default 12; per OncLive et al. on the IA disclosure)
  - 80 events triggers final analysis (per SAP)
  - HR success threshold: 0.636 (per SAP; 12.6m vs 8m mOS)

ENROLLMENT PATTERN (inferred from PR milestones, NOT directly disclosed):
  Feb 2021 - Jan 2022 :  15 patients  (12%)
  Feb 2022 - Jan 2023 :  50 patients  (40%)
  Feb 2023 - Jan 2024 :  56 patients  (44%)
  Feb 2024 - Apr 2024 :   5 patients  ( 4%)
  Total:                126
  (Consistent with: ex-China target reached Nov 2023; total 126 by Apr 2024.)

MODEL FAMILIES FIT:
  1. Weibull/Weibull (4 params): fully agnostic, no cure assumption
  2. Weibull-BAT + cure-fraction GPS (5 params)
  3. Weibull-BAT + leaky-cure GPS (6 params): cured tail leaks at rate r/yr

APPROACH:
  Stage 1 - Analytical pre-filter:
    Compute E[events_BAT(T)] and E[events_GPS(T)] for each parameter
    setting. Because BAT-arm and GPS-arm event counts are independent
    given parameters and enrollment, we sweep BAT-only and GPS-only
    grids separately, then take their cross-product. This is
    O(|BAT_grid| + |GPS_grid|) survival evaluations followed by an
    O(|BAT_grid| x |GPS_grid|) addition, all vectorized.

    A second analytical filter applies the population-true pool-mOS
    floor: keep combos where S_BAT(T_floor) + S_GPS(T_floor) >= 1
    (equivalently pool true median >= T_floor).

  Stage 2 - Simulation:
    For accepted (params_B, params_G) combos, simulate full trials
    including stochastic enrollment-arm assignment.  Each simulation
    must satisfy:
      - 60 +/- tol_ia events at calendar t_ia
      - 72 +/- tol_upd events at calendar t_upd
      - efficacy_hr_min < HR_IA < futility_hr_max
      - pool KM(T_floor) > 0.5  (sample pool median > T_floor)
    For passing sims we record HR at 80 events, calendar timing of
    the 80th event, and per-arm survivor counts.

USAGE:
    pip install numpy scipy matplotlib
    python regal_fit.py --threads 50              # full run
    python regal_fit.py --threads 50 --quick      # smaller grid for testing
    python regal_fit.py --threads 50 --families weibull,cure
    python regal_fit.py --out report.pdf
    python regal_fit.py --efficacy-hr-min 0.0     # disable efficacy gate
    python regal_fit.py --pool-mos-min 0          # disable pool-mOS gate
"""

import argparse
import time
import sys
import json
import os
from concurrent.futures import ProcessPoolExecutor, as_completed
from dataclasses import dataclass, field
from pathlib import Path

import numpy as np
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.backends.backend_pdf import PdfPages
from matplotlib.patches import Rectangle


# =============================================================================
# CONFIGURATION (HARD CONSTRAINTS ONLY)
# =============================================================================

@dataclass
class Config:
    # ----- trial structure (HARD) -----
    n_total: int = 126
    n_per_arm: int = 63

    # Enrollment year-bands (counts) measured from t=0 = Feb 2021
    # Feb 2021 - Jan 2022 is months [0, 12), etc.
    enroll_bands: tuple = (
        (0.0, 12.0, 15),     # Year 1
        (12.0, 24.0, 50),    # Year 2
        (24.0, 36.0, 56),    # Year 3
        (36.0, 38.0, 5),     # Final 2 months
    )

    # ----- event timing (HARD) -----
    # Calendar months from first enrollment (t=0 = Feb 8, 2021)
    t_ia: float = 46.0           # ~Dec 2024  -> 60 events
    t_upd: float = 58.0          # ~Dec 2025  -> 72 events
    n_ev_ia: int = 60
    n_ev_upd: int = 72
    n_ev_final: int = 80

    # ABC tolerances on event counts (count units).
    # Use the analytical pre-filter to reject combos whose *expected* event
    # counts deviate beyond `prefilter_tol_*`. The simulation kernel uses
    # the wider `tol_*` because individual sims have ~5 SD of binomial noise.
    prefilter_tol_ia: float = 2.5
    prefilter_tol_upd: float = 2.5
    tol_ia: float = 4.0
    tol_upd: float = 4.0

    # ----- IDMC futility -----
    # The IDMC said GPS "exceeded predetermined futility criteria."  The
    # specific SAP futility rule is not public; common choices are HR<1.0
    # (loose, traditional non-binding) or HR<~0.85-0.90 (typical conditional-
    # power-based futility for OS).  We use 0.90 as a defensible midpoint:
    # tighter than the 1.0 lower bound, looser than the 0.85 sometimes used,
    # and consistent with the sponsor's "exceeded" language (i.e. GPS was
    # noticeably better than the threshold, not borderline).
    # Set to 999 to disable.
    futility_hr_max: float = 0.90

    # ----- IDMC efficacy lower bound -----
    # The trial *did not* stop early for efficacy at the IA.  Per the
    # Future Oncol 2024 publication the IA used Lan-DeMets O'Brien-Fleming
    # alpha spending.  At info fraction = 60/80 = 0.75 with 1-sided
    # alpha = 0.025, OBF gives Z*(IA) = 1.96/sqrt(0.75) ~= 2.264.
    # With 60 events, that maps to HR ~ exp(-2.264/sqrt(15)) ~= 0.557.
    # We use 0.55 as a slightly conservative floor.
    # Set to 0 to disable.
    efficacy_hr_min: float = 0.55

    # ----- Public pooled mOS at IA (NEW) -----
    # OncLive et al. disclosed that the IDMC reported pooled (blinded)
    # median OS at the IA exceeded 12 months (some sources cite >=13.5m).
    # We require pool KM median at follow-up T = pool_mos_min_at_ia to
    # exceed 0.5 -- equivalently the pool KM at follow-up = 12m must be
    # > 0.5.  Set to 0 to disable.
    pool_mos_min_at_ia: float = 12.0

    # ----- "80th event hasn't been announced yet" -----
    # SELLAS announces event milestones within days. As of May 9, 2026
    # (calendar month 63 since Feb 8, 2021), no 80-event press release
    # has been issued. So any simulation predicting t80 < this value is
    # rejected -- the corresponding parameter regime is inconsistent
    # with present-day public information.
    # Update this when re-running on a later date. Set to 0 to disable.
    current_calendar_month: float = 63.0

    # ----- statistics -----
    hr_threshold: float = 0.636      # per SAP

    # ----- compute -----
    n_sims_per_combo: int = 1000     # post-filter simulation depth
    # Early-stop: do an initial screening pass; if zero sims pass the
    # event/futility filters, drop the combo before running full n_sims.
    n_sims_screen: int = 250
    n_screen_min_pass: int = 1       # need at least this many to continue
    n_threads: int = 50
    seed: int = 20260508

    # ----- grid resolution -----
    # Weibull-Weibull grid
    bat_med_grid: tuple = (4.0, 30.0, 0.5)        # start, stop, step
    bat_shape_grid: tuple = (0.5, 2.01, 0.10)
    gps_med_grid_lo: float = 8.0                  # log-spaced
    gps_med_grid_hi: float = 250.0
    gps_med_grid_n: int = 36
    gps_shape_grid: tuple = (0.5, 2.01, 0.10)

    # Cure-fraction GPS grid (coarser than Weibull because ABC posterior
    # is broader on these dimensions; finer grids waste compute).
    cure_frac_grid: tuple = (0.0, 0.951, 0.05)
    cure_unc_med_grid: tuple = (4.0, 30.0, 1.0)
    cure_unc_shape_grid: tuple = (0.5, 2.01, 0.25)

    # Leaky-cure family uses its own (coarser) cure-side grids because the
    # leak dimension creates substantial redundancy with cure_frac and
    # unc_med (high cure + high leak ~ moderate cure + no leak at IA), so
    # over-resolving cure-side dimensions wastes compute.
    leaky_cure_frac_grid: tuple = (0.0, 0.91, 0.10)
    leaky_unc_med_grid: tuple = (4.0, 30.0, 2.0)
    leaky_unc_shape_grid: tuple = (0.5, 2.01, 0.50)
    leak_grid: tuple = (0.0, 0.101, 0.025)         # 0% to 10% per year, 5 vals

    # Output
    out_pdf: str = "regal_fit_report.pdf"
    out_dir: str = "."


# =============================================================================
# ENROLLMENT
# =============================================================================

def make_enrollment_times(cfg, rng):
    """Generate one realization of enrollment times (size n_total).

    Within each year-band, enrollment is uniform.  Counts per band are
    fixed (HARD constraint).  Returns sorted enrollment times in months
    from t=0.
    """
    times = []
    for lo, hi, n in cfg.enroll_bands:
        if n > 0:
            times.append(rng.uniform(lo, hi, n))
    return np.sort(np.concatenate(times))


def expected_enrollment_times(cfg):
    """Deterministic representative enrollment vector (mid-points of
    uniform bands).  Used for analytical event-count pre-filter, where
    the integration over enrollment within each band is captured by:

        integral_{lo}^{hi} (1/(hi-lo)) * F(T - e) de

    For computational simplicity we use a fine sub-sampling per band.
    """
    sub_per_unit = 8
    pieces = []
    weights = []
    for lo, hi, n in cfg.enroll_bands:
        n_sub = max(2, int((hi - lo) * sub_per_unit))
        e = np.linspace(lo, hi, n_sub, endpoint=False) + (hi - lo) / (2 * n_sub)
        pieces.append(e)
        weights.append(np.full(n_sub, n / n_sub))
    return np.concatenate(pieces), np.concatenate(weights)


# =============================================================================
# SURVIVAL MODELS
# =============================================================================

def weibull_S(t, scale, shape):
    """Weibull survival function: exp(-(t/scale)**shape)."""
    return np.exp(-np.power(np.clip(t, 0, None) / scale, shape))


def weibull_scale_from_median(median, shape):
    """Convert median + shape to Weibull scale."""
    return median / np.log(2.0) ** (1.0 / shape)


def cure_S(t, p_cure, unc_scale, unc_shape):
    """Cure-fraction survival: p_cure + (1-p_cure) * S_unc(t)."""
    return p_cure + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)


def leaky_cure_S(t, p_cure, unc_scale, unc_shape, leak_rate_yr):
    """Leaky-cure: cured pool decays at constant rate leak_rate_yr per year."""
    leak_rate_m = leak_rate_yr / 12.0
    cured_S = np.exp(-leak_rate_m * np.clip(t, 0, None))
    return p_cure * cured_S + (1.0 - p_cure) * weibull_S(t, unc_scale, unc_shape)


# =============================================================================
# ANALYTICAL EXPECTED EVENT COUNTS
# =============================================================================

def expected_arm_events(survival_func, params_grid, e_pts, e_weights,
                        cal_times, n_per_arm, n_total):
    """Vectorized: for each parameter setting in params_grid, return expected
    arm-level event counts at each calendar time.

    Args:
      survival_func: callable (t, *params) -> S(t), broadcastable
      params_grid: tuple of arrays, each of shape (G,)
      e_pts: enrollment-time integration points, shape (E,)
      e_weights: per-point weights (sum to n_total), shape (E,)
      cal_times: calendar times of interest, shape (T,)
      n_per_arm: number of patients per arm (e.g. 63)
      n_total: total trial size (e.g. 126)

    Returns:
      array of shape (G, T) giving expected arm events at each cal_time
      under random allocation (each enrollment point contributes
      n_per_arm / n_total of its weight to this arm).
    """
    arm_share = n_per_arm / n_total

    # follow-up at each calendar time x enrollment point: shape (T, E)
    fu = np.maximum(cal_times[:, None] - e_pts[None, :], 0.0)

    # Survival values: we need S(fu; params) for each grid setting.
    # Strategy: stack params, broadcast.
    G = params_grid[0].shape[0]
    T = cal_times.shape[0]

    out = np.empty((G, T), dtype=np.float64)
    # Process in chunks to avoid huge intermediate arrays
    chunk = 4096
    for start in range(0, G, chunk):
        end = min(start + chunk, G)
        params_chunk = [p[start:end, None, None] for p in params_grid]
        # Compute S(fu) under chunked params: shape (chunk, T, E)
        S = survival_func(fu[None, :, :], *params_chunk)
        # Expected events = sum_e (1 - S) * weight_e * arm_share
        ev = np.sum((1.0 - S) * e_weights[None, None, :], axis=2) * arm_share
        out[start:end] = ev
    return out


# =============================================================================
# ABC PRE-FILTER
# =============================================================================

def abc_prefilter_weibull(cfg):
    """Stage-1 analytical prefilter for Weibull/Weibull family.

    Returns:
      list of dicts, each containing:
        - bat_med, bat_shape, gps_med, gps_shape
        - exp_total_t1, exp_total_t2 (expected total events at t_ia, t_upd)
    """
    e_pts, e_weights = expected_enrollment_times(cfg)
    t_pts = np.array([cfg.t_ia, cfg.t_upd], dtype=np.float64)

    # BAT grid
    bat_meds = np.arange(*cfg.bat_med_grid)
    bat_shapes = np.arange(*cfg.bat_shape_grid)
    BM, BS = np.meshgrid(bat_meds, bat_shapes, indexing="ij")
    bat_med_flat = BM.ravel()
    bat_shape_flat = BS.ravel()
    bat_scale_flat = weibull_scale_from_median(bat_med_flat, bat_shape_flat)

    # GPS grid (log-spaced median because cure-like behavior puts mass at large median)
    gps_meds = np.geomspace(cfg.gps_med_grid_lo, cfg.gps_med_grid_hi,
                            cfg.gps_med_grid_n)
    gps_shapes = np.arange(*cfg.gps_shape_grid)
    GM, GS = np.meshgrid(gps_meds, gps_shapes, indexing="ij")
    gps_med_flat = GM.ravel()
    gps_shape_flat = GS.ravel()
    gps_scale_flat = weibull_scale_from_median(gps_med_flat, gps_shape_flat)

    print(f"  BAT grid: {len(bat_med_flat):,}   GPS grid: {len(gps_med_flat):,}"
          f"   Cross: {len(bat_med_flat) * len(gps_med_flat):,}")

    # Compute expected arm-level events for each grid
    bat_ev = expected_arm_events(
        weibull_S, (bat_scale_flat, bat_shape_flat),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)  # (Gb, 2)
    gps_ev = expected_arm_events(
        weibull_S, (gps_scale_flat, gps_shape_flat),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)  # (Gg, 2)

    # NEW: per-grid survival at follow-up T = pool_mos_min_at_ia, for the
    # analytical pool-mOS pre-filter (population true median >= T iff
    # 0.5*S_BAT(T) + 0.5*S_GPS(T) >= 0.5  iff  S_BAT(T) + S_GPS(T) >= 1).
    T_pool = cfg.pool_mos_min_at_ia
    bat_S_T = weibull_S(T_pool, bat_scale_flat, bat_shape_flat)
    gps_S_T = weibull_S(T_pool, gps_scale_flat, gps_shape_flat)

    # Cross-sum and filter
    return _cross_filter(
        cfg,
        bat_ev, gps_ev,
        {"bat_med": bat_med_flat, "bat_shape": bat_shape_flat,
         "bat_scale": bat_scale_flat},
        {"gps_med": gps_med_flat, "gps_shape": gps_shape_flat,
         "gps_scale": gps_scale_flat},
        family="weibull",
        bat_S_T=bat_S_T, gps_S_T=gps_S_T,
    )


def abc_prefilter_cure(cfg):
    """Stage-1 prefilter for Weibull-BAT + cure-fraction GPS family."""
    e_pts, e_weights = expected_enrollment_times(cfg)
    t_pts = np.array([cfg.t_ia, cfg.t_upd], dtype=np.float64)

    bat_meds = np.arange(*cfg.bat_med_grid)
    bat_shapes = np.arange(*cfg.bat_shape_grid)
    BM, BS = np.meshgrid(bat_meds, bat_shapes, indexing="ij")
    bat_med_flat = BM.ravel()
    bat_shape_flat = BS.ravel()
    bat_scale_flat = weibull_scale_from_median(bat_med_flat, bat_shape_flat)

    cf_grid = np.arange(*cfg.cure_frac_grid)
    unc_meds = np.arange(*cfg.cure_unc_med_grid)
    unc_shapes = np.arange(*cfg.cure_unc_shape_grid)
    CF, UM, US = np.meshgrid(cf_grid, unc_meds, unc_shapes, indexing="ij")
    cf_flat = CF.ravel()
    unc_med_flat = UM.ravel()
    unc_shape_flat = US.ravel()
    unc_scale_flat = weibull_scale_from_median(unc_med_flat, unc_shape_flat)

    print(f"  BAT grid: {len(bat_med_flat):,}   GPS grid: {len(cf_flat):,}"
          f"   Cross: {len(bat_med_flat) * len(cf_flat):,}")

    bat_ev = expected_arm_events(
        weibull_S, (bat_scale_flat, bat_shape_flat),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)
    gps_ev = expected_arm_events(
        cure_S, (cf_flat, unc_scale_flat, unc_shape_flat),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)

    # NEW: per-grid survival at T = pool_mos_min_at_ia, for pool-mOS prefilter
    T_pool = cfg.pool_mos_min_at_ia
    bat_S_T = weibull_S(T_pool, bat_scale_flat, bat_shape_flat)
    gps_S_T = cure_S(T_pool, cf_flat, unc_scale_flat, unc_shape_flat)

    return _cross_filter(
        cfg,
        bat_ev, gps_ev,
        {"bat_med": bat_med_flat, "bat_shape": bat_shape_flat,
         "bat_scale": bat_scale_flat},
        {"cure_frac": cf_flat, "unc_med": unc_med_flat,
         "unc_shape": unc_shape_flat, "unc_scale": unc_scale_flat},
        family="cure",
        bat_S_T=bat_S_T, gps_S_T=gps_S_T,
    )


def abc_prefilter_leaky(cfg):
    """Stage-1 prefilter for Weibull-BAT + leaky-cure GPS family."""
    e_pts, e_weights = expected_enrollment_times(cfg)
    t_pts = np.array([cfg.t_ia, cfg.t_upd], dtype=np.float64)

    bat_meds = np.arange(*cfg.bat_med_grid)
    bat_shapes = np.arange(*cfg.bat_shape_grid)
    BM, BS = np.meshgrid(bat_meds, bat_shapes, indexing="ij")
    bat_med_flat = BM.ravel()
    bat_shape_flat = BS.ravel()
    bat_scale_flat = weibull_scale_from_median(bat_med_flat, bat_shape_flat)

    cf_grid = np.arange(*cfg.leaky_cure_frac_grid)
    unc_meds = np.arange(*cfg.leaky_unc_med_grid)
    unc_shapes = np.arange(*cfg.leaky_unc_shape_grid)
    leaks = np.arange(*cfg.leak_grid)
    CF, UM, US, LK = np.meshgrid(cf_grid, unc_meds, unc_shapes, leaks,
                                  indexing="ij")
    cf_flat = CF.ravel()
    unc_med_flat = UM.ravel()
    unc_shape_flat = US.ravel()
    leak_flat = LK.ravel()
    unc_scale_flat = weibull_scale_from_median(unc_med_flat, unc_shape_flat)

    print(f"  BAT grid: {len(bat_med_flat):,}   GPS grid: {len(cf_flat):,}"
          f"   Cross: {len(bat_med_flat) * len(cf_flat):,}")

    bat_ev = expected_arm_events(
        weibull_S, (bat_scale_flat, bat_shape_flat),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)
    gps_ev = expected_arm_events(
        leaky_cure_S, (cf_flat, unc_scale_flat, unc_shape_flat, leak_flat),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)

    # NEW: per-grid survival at T = pool_mos_min_at_ia
    T_pool = cfg.pool_mos_min_at_ia
    bat_S_T = weibull_S(T_pool, bat_scale_flat, bat_shape_flat)
    gps_S_T = leaky_cure_S(T_pool, cf_flat, unc_scale_flat, unc_shape_flat,
                           leak_flat)

    return _cross_filter(
        cfg,
        bat_ev, gps_ev,
        {"bat_med": bat_med_flat, "bat_shape": bat_shape_flat,
         "bat_scale": bat_scale_flat},
        {"cure_frac": cf_flat, "unc_med": unc_med_flat,
         "unc_shape": unc_shape_flat, "unc_scale": unc_scale_flat,
         "leak_yr": leak_flat},
        family="leaky",
        bat_S_T=bat_S_T, gps_S_T=gps_S_T,
    )


def _cross_filter(cfg, bat_ev, gps_ev, bat_params, gps_params, family,
                  bat_S_T=None, gps_S_T=None):
    """Cross-join BAT and GPS expected-event grids, apply ABC tolerance.

    NEW: also applies a population-true pool-mOS pre-filter when
    bat_S_T and gps_S_T are provided.  Pool true median >= T iff
    0.5 * S_BAT(T) + 0.5 * S_GPS(T) >= 0.5  iff  S_BAT(T) + S_GPS(T) >= 1.
    """
    # bat_ev: (Gb, 2)   gps_ev: (Gg, 2)
    # Total at t_ia: Gb x Gg
    Gb, _ = bat_ev.shape
    Gg, _ = gps_ev.shape

    apply_pool_mos = (bat_S_T is not None and gps_S_T is not None
                      and cfg.pool_mos_min_at_ia > 0)

    # Compute totals in chunks to control memory
    accepted = []
    n_drop_pool = 0
    chunk = 2048
    for s in range(0, Gb, chunk):
        e = min(s + chunk, Gb)
        # (chunk, Gg, 2) totals
        tot = bat_ev[s:e, None, :] + gps_ev[None, :, :]
        d_ia = np.abs(tot[..., 0] - cfg.n_ev_ia)
        d_up = np.abs(tot[..., 1] - cfg.n_ev_upd)
        mask = (d_ia <= cfg.prefilter_tol_ia) & (d_up <= cfg.prefilter_tol_upd)

        if apply_pool_mos:
            # S_pool(T) >= 0.5 iff S_BAT(T) + S_GPS(T) >= 1
            pool_S = bat_S_T[s:e, None] + gps_S_T[None, :]
            mask_pool = pool_S >= 1.0
            n_drop_pool += int((mask & ~mask_pool).sum())
            mask = mask & mask_pool

        if mask.any():
            bi, gi = np.where(mask)
            bi_global = bi + s
            for ib, ig in zip(bi_global, gi):
                rec = {"family": family,
                       "exp_ev_ia": float(tot[ib - s, ig, 0]),
                       "exp_ev_upd": float(tot[ib - s, ig, 1])}
                for k, v in bat_params.items():
                    rec[k] = float(v[ib])
                for k, v in gps_params.items():
                    rec[k] = float(v[ig])
                accepted.append(rec)
    if apply_pool_mos and n_drop_pool > 0:
        print(f"  pool-mOS prefilter (S_BAT+S_GPS at T={cfg.pool_mos_min_at_ia:g} >= 1) "
              f"dropped {n_drop_pool:,} combos")
    return accepted


# =============================================================================
# SIMULATION (STAGE 2)
# =============================================================================

def _logrank_z(times, events, groups):
    """Standard log-rank Z statistic.  Z>0 means group=1 (GPS) has fewer
    events.  Returns also a Mantel-Haenszel-style HR."""
    if events.sum() < 3:
        return 0.0, 1.0
    o = np.argsort(times)
    ts = times[o]; es = events[o]; gs = groups[o]
    ig = (gs == 1)
    # Number at risk in each arm just before each ordered event time
    n_g = np.cumsum(ig[::-1])[::-1].astype(np.float64)
    n_b = np.cumsum((~ig)[::-1])[::-1].astype(np.float64)
    # Aggregate ties
    ev_idx = np.where(es > 0)[0]
    if len(ev_idx) == 0:
        return 0.0, 1.0
    unique_t, inv = np.unique(ts[ev_idx], return_inverse=True)

    U = 0.0; V = 0.0
    log_hr_num = 0.0; log_hr_den = 0.0
    for k in range(len(unique_t)):
        idx = ev_idx[inv == k]
        first = idx[0]
        ng = n_g[first]; nb = n_b[first]; nt = ng + nb
        if nt < 2:
            continue
        dg = float(ig[idx].sum())
        dt = dg + float((~ig[idx]).sum())
        eg = ng * dt / nt
        U += dg - eg
        if nt > 1:
            V += nb * ng * dt * (nt - dt) / (nt * nt * (nt - 1))
        # MH-style log HR weights
        # (this is not exactly Cox PH but matches it well in trial-size
        # simulations and is fast to compute)
        if dt > 0 and ng > 0 and nb > 0:
            log_hr_num += dg - eg
            log_hr_den += eg * (nb / nt)
    if V <= 0:
        return 0.0, 1.0
    Z = -U / np.sqrt(V)  # sign convention: Z > 0 favors GPS (group=1)
    if log_hr_den > 0:
        # log_hr_num = sum(O_g - E_g) ; negative when GPS is better.
        # HR = exp(log_hr_num / log_hr_den) ; <1 when GPS is better.
        hr = float(np.exp(log_hr_num / log_hr_den))
    else:
        hr = 1.0
    return Z, hr


def _draw_gps_times(rec, n, rng):
    """Draw n GPS survival times under whichever family rec belongs to."""
    fam = rec["family"]
    if fam == "weibull":
        return rec["gps_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["gps_shape"])
    if fam == "cure":
        is_cured = rng.random(n) < rec["cure_frac"]
        unc = rec["unc_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["unc_shape"])
        out = np.where(is_cured, np.inf, unc)
        return out
    if fam == "leaky":
        is_cured = rng.random(n) < rec["cure_frac"]
        unc = rec["unc_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["unc_shape"])
        leak_m = rec["leak_yr"] / 12.0
        if leak_m > 0:
            cured_t = -np.log(rng.random(n)) / leak_m
        else:
            cured_t = np.full(n, np.inf)
        return np.where(is_cured, cured_t, unc)
    raise ValueError(f"Unknown family {fam}")


def _draw_bat_times(rec, n, rng):
    return rec["bat_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["bat_shape"])


def _km_S_at_T(time_obs, event_flag, T):
    """Pool Kaplan-Meier survival at follow-up time T from randomization.

    time_obs : array-like, observed times = min(survival, admin censoring)
    event_flag : array-like 0/1, 1 if death observed (s <= admin censor)
    T : scalar follow-up time at which to evaluate S

    Continuous-time data is assumed (ties zero-prob).  Vectorized,
    O(n log n) per call.  Returns S_KM(T) in [0, 1].
    """
    n = len(time_obs)
    if n == 0:
        return 1.0
    o = np.argsort(time_obs)
    ts = time_obs[o]
    es = event_flag[o] > 0
    # at-risk count just before position i (0-indexed) is n - i
    n_at_risk = n - np.arange(n)
    # Multiplier per position: (1 - 1/n_at_risk) if event AND time <= T, else 1
    use = es & (ts <= T)
    # Avoid div-by-zero (n_at_risk >= 1 always since i < n)
    mult = np.where(use, 1.0 - 1.0 / n_at_risk, 1.0)
    return float(np.prod(mult))


def _run_sim_chunk(rec, cfg, n_sims, rng):
    """Run a chunk of `n_sims` simulations vectorized.  Returns
    (accepted_stats, n_pass_events).
    """
    bands = cfg.enroll_bands
    n_total = cfg.n_total
    n_per_arm = cfg.n_per_arm

    # ----- Vectorized stage 1: event counts -----
    enroll = np.empty((n_sims, n_total), dtype=np.float64)
    col = 0
    for lo, hi, n in bands:
        if n > 0:
            enroll[:, col:col + n] = rng.uniform(lo, hi, (n_sims, n))
            col += n
    enroll.sort(axis=1)

    arms = np.zeros((n_sims, n_total), dtype=np.int8)
    perm = np.argsort(rng.random((n_sims, n_total)), axis=1)
    rows = np.arange(n_sims)[:, None]
    arms[rows, perm[:, :n_per_arm]] = 1

    surv = np.empty((n_sims, n_total), dtype=np.float64)
    bat_mask = arms == 0
    gps_mask = arms == 1
    n_bat_total = bat_mask.sum()
    n_gps_total = gps_mask.sum()
    bat_draws = _draw_bat_times(rec, n_bat_total, rng)
    gps_draws = _draw_gps_times(rec, n_gps_total, rng)
    surv[bat_mask] = bat_draws
    surv[gps_mask] = gps_draws

    fu_ia = np.maximum(cfg.t_ia - enroll, 0.0)
    fu_up = np.maximum(cfg.t_upd - enroll, 0.0)
    ev_ia = surv <= fu_ia
    ev_up = surv <= fu_up
    n_ia = ev_ia.sum(axis=1)
    n_up = ev_up.sum(axis=1)

    keep = (np.abs(n_ia - cfg.n_ev_ia) <= cfg.tol_ia) & \
           (np.abs(n_up - cfg.n_ev_upd) <= cfg.tol_upd)
    n_pass_events = int(keep.sum())
    if n_pass_events == 0:
        return [], 0

    keep_idx = np.where(keep)[0]
    accepted_stats = []
    for i in keep_idx:
        e_i = enroll[i]; s_i = surv[i]; a_i = arms[i]
        fu_ia_i = fu_ia[i]; fu_up_i = fu_up[i]

        ev_ia_i = (s_i <= fu_ia_i).astype(np.int8)
        time_ia_i = np.minimum(s_i, fu_ia_i)
        z_ia, hr_ia = _logrank_z(time_ia_i, ev_ia_i, a_i)
        # NEW: two-sided HR_IA gate.  Trial passed both:
        #   - futility: HR_IA < futility_hr_max  (didn't stop for futility)
        #   - efficacy: HR_IA > efficacy_hr_min  (didn't stop early for efficacy
        #                                         under the OBF boundary)
        if hr_ia >= cfg.futility_hr_max or hr_ia <= cfg.efficacy_hr_min:
            continue

        # NEW: pool KM median at IA must exceed pool_mos_min_at_ia.
        # Equivalent to S_pool_KM(pool_mos_min_at_ia) > 0.5.
        if cfg.pool_mos_min_at_ia > 0:
            S_at_floor = _km_S_at_T(time_ia_i, ev_ia_i,
                                    cfg.pool_mos_min_at_ia)
            if S_at_floor <= 0.5:
                continue

        death_cal = e_i + s_i
        finite = np.isfinite(death_cal)
        sorted_deaths = np.sort(death_cal[finite])
        if len(sorted_deaths) >= cfg.n_ev_final:
            t80 = float(sorted_deaths[cfg.n_ev_final - 1])
            reached_80 = True
            # NEW: SELLAS announces 80th event within days.  As of today
            # (cfg.current_calendar_month) no announcement -> reject sims
            # where 80th event would have already happened by now.
            if (cfg.current_calendar_month > 0
                    and t80 < cfg.current_calendar_month):
                continue
            fu_fin = np.maximum(t80 - e_i, 0.0)
            time_fin = np.minimum(s_i, fu_fin)
            ev_fin = (s_i <= fu_fin).astype(np.int8)
            z_fin, hr_fin = _logrank_z(time_fin, ev_fin, a_i)
        else:
            t80 = float("nan"); reached_80 = False
            hr_fin = float("nan"); z_fin = float("nan")

        bat_alive_up = int(((s_i > fu_up_i) & (a_i == 0)).sum())
        gps_alive_up = int((((s_i > fu_up_i) | np.isinf(s_i)) & (a_i == 1)).sum())

        accepted_stats.append({
            "n_ev_ia": int(n_ia[i]),
            "n_ev_upd": int(n_up[i]),
            "z_ia": z_ia, "hr_ia": hr_ia,
            "reached_80": reached_80, "t80": t80,
            "hr_final": hr_fin, "z_final": z_fin,
            "bat_alive_upd": bat_alive_up,
            "gps_alive_upd": gps_alive_up,
        })

    return accepted_stats, n_pass_events


def _simulate_one_combo(args):
    """Run up to n_sims trials for one parameter combination.

    Uses a screening pass: first run `n_sims_screen` sims; if fewer than
    `n_screen_min_pass` passed all filters, drop the combo immediately
    (don't pay for the full n_sims_per_combo).
    """
    rec, cfg_dict, n_sims, seed = args
    cfg = Config(**cfg_dict)
    rng = np.random.default_rng(seed)

    # Screening pass
    n_screen = min(cfg.n_sims_screen, n_sims)
    accepted_stats, n_pass_events = _run_sim_chunk(rec, cfg, n_screen, rng)
    n_done = n_screen
    if len(accepted_stats) < cfg.n_screen_min_pass:
        # Hopeless combo: report what we have (likely None)
        if not accepted_stats:
            return None
        # Else fall through to summary

    # Continue with the remaining sims (if budget left and screen passed)
    remaining = n_sims - n_done
    if remaining > 0 and len(accepted_stats) >= cfg.n_screen_min_pass:
        more_stats, more_pass = _run_sim_chunk(rec, cfg, remaining, rng)
        accepted_stats.extend(more_stats)
        n_pass_events += more_pass
        n_done += remaining

    n_pass_futility = len(accepted_stats)
    if not accepted_stats:
        return None

    out = dict(rec)
    arr = lambda key: np.array([s[key] for s in accepted_stats])
    finite80 = arr("t80")[~np.isnan(arr("t80"))]
    hr_arr = arr("hr_final")
    reached = arr("reached_80")
    hr_finite = hr_arr[~np.isnan(hr_arr)]

    # Unconditional outcome counts:
    # - p_reach80          = P(80th event ever occurs in this combo)
    # - p_hr_below_threshold (legacy, conditional) = P(HR<0.636 | reached 80)
    # - p_success_overall  = P(reached 80 AND HR<0.636) -- the honest headline
    # - p_no_readout       = P(80th event never occurs) = 1 - p_reach80
    n_success_uncond = int(np.sum(reached & (hr_arr < 0.636) & ~np.isnan(hr_arr)))
    p_success_overall = n_success_uncond / len(accepted_stats)

    with np.errstate(invalid="ignore"):
        out.update({
            "n_attempts": n_done,
            "n_pass_events": n_pass_events,
            "n_pass_futility": n_pass_futility,
            "n_accepted": len(accepted_stats),
            "acceptance_rate": len(accepted_stats) / n_done,
            "p_reach80": float(reached.mean()),
            "p_no_readout": float(1.0 - reached.mean()),
            "median_hr_final": float(np.median(hr_finite)) if len(hr_finite) else float("nan"),
            "p_hr_below_threshold": (float(np.mean(hr_finite < 0.636))
                                     if len(hr_finite) else float("nan")),
            "p_success_overall": p_success_overall,
            "median_t80_months": float(np.median(finite80)) if len(finite80) else float("nan"),
            "p10_t80_months": float(np.percentile(finite80, 10)) if len(finite80) else float("nan"),
            "p90_t80_months": float(np.percentile(finite80, 90)) if len(finite80) else float("nan"),
            "median_hr_ia": float(np.median(arr("hr_ia"))),
            "median_z_ia": float(np.median(arr("z_ia"))),
            "median_bat_alive_upd": float(np.median(arr("bat_alive_upd"))),
            "median_gps_alive_upd": float(np.median(arr("gps_alive_upd"))),
        })
    return out


# =============================================================================
# DRIVER
# =============================================================================

def run_family(prefilter_func, cfg, label, n_threads):
    print(f"\n[{label}] Stage 1: analytical pre-filter")
    t0 = time.time()
    accepted = prefilter_func(cfg)
    print(f"  -> {len(accepted):,} combos pass analytical filter "
          f"(elapsed {time.time()-t0:.1f}s)")
    if not accepted:
        print(f"  No accepted combos for {label}.  Try wider grid or tolerances.")
        return []

    print(f"\n[{label}] Stage 2: simulation (n_sims={cfg.n_sims_per_combo} "
          f"per combo, {len(accepted):,} combos, {n_threads} threads)")
    t0 = time.time()

    cfg_dict = {k: v for k, v in cfg.__dict__.items()
                if not k.startswith("_")}
    args_list = [(rec, cfg_dict, cfg.n_sims_per_combo,
                  cfg.seed + i * 7919) for i, rec in enumerate(accepted)]

    results = []
    if n_threads <= 1:
        for i, a in enumerate(args_list):
            r = _simulate_one_combo(a)
            if r is not None:
                results.append(r)
            if (i + 1) % max(1, len(args_list) // 20) == 0:
                el = time.time() - t0
                eta = el / (i + 1) * (len(args_list) - i - 1)
                print(f"    {100*(i+1)/len(args_list):5.1f}%  "
                      f"elapsed {el:.0f}s, ETA {eta:.0f}s, kept {len(results)}")
    else:
        n_done = 0
        with ProcessPoolExecutor(max_workers=n_threads) as ex:
            futures = [ex.submit(_simulate_one_combo, a) for a in args_list]
            for fut in as_completed(futures):
                r = fut.result()
                n_done += 1
                if r is not None:
                    results.append(r)
                if n_done % max(1, len(args_list) // 20) == 0:
                    el = time.time() - t0
                    eta = el / n_done * (len(args_list) - n_done)
                    print(f"    {100*n_done/len(args_list):5.1f}%  "
                          f"elapsed {el:.0f}s, ETA {eta:.0f}s, kept {len(results)}")

    print(f"  -> {len(results):,} combos with at least one simulated "
          f"acceptance (elapsed {time.time()-t0:.1f}s)")
    return results


# =============================================================================
# REPORTING / PLOTS
# =============================================================================

def _add_text_page(pdf, title, lines, fontsize=9):
    """Append a text-only page to the PDF."""
    fig = plt.figure(figsize=(8.5, 11))
    fig.suptitle(title, fontsize=14, fontweight="bold", y=0.96)
    ax = fig.add_subplot(111)
    ax.axis("off")
    txt = "\n".join(lines)
    ax.text(0.02, 0.98, txt, va="top", ha="left",
            family="monospace", fontsize=fontsize, transform=ax.transAxes)
    pdf.savefig(fig)
    plt.close(fig)


def _summarize_family(results, family_label):
    """Build a text summary for a model family."""
    if not results:
        return [f"=== {family_label} ===", "  No accepted combos."]
    bat_meds = np.array([r["bat_med"] for r in results])
    median_hr = np.array([r["median_hr_final"] for r in results])
    p_below = np.array([r["p_hr_below_threshold"] for r in results])
    p_reach80 = np.array([r["p_reach80"] for r in results])
    p_overall = np.array([r.get("p_success_overall", float("nan")) for r in results])
    t80 = np.array([r["median_t80_months"] for r in results])
    weights = np.array([r["acceptance_rate"] for r in results])
    weights = weights / weights.sum() if weights.sum() > 0 else weights

    def w_quant(x, qs):
        m = ~np.isnan(x)
        if not m.any():
            return [float("nan")] * len(qs)
        order = np.argsort(x[m])
        cw = np.cumsum(weights[m][order])
        cw = cw / cw[-1]
        out = []
        for q in qs:
            idx = np.searchsorted(cw, q)
            idx = min(idx, len(order) - 1)
            out.append(x[m][order][idx])
        return out

    def w_mean(x):
        m = ~np.isnan(x) & (weights > 0)
        if not m.any():
            return float("nan")
        return float(np.average(x[m], weights=weights[m]))

    lines = [f"=== {family_label} ===",
             f"  Combos accepted (sim phase): {len(results):,}"]

    q = w_quant(bat_meds, [0.05, 0.5, 0.95])
    lines.append(f"  BAT mOS (acc-weighted) :  P05={q[0]:5.1f}m  "
                 f"P50={q[1]:5.1f}m  P95={q[2]:5.1f}m")

    q = w_quant(median_hr, [0.05, 0.5, 0.95])
    lines.append(f"  HR @ 80 events         :  P05={q[0]:5.2f}   "
                 f"P50={q[1]:5.2f}   P95={q[2]:5.2f}")

    # Conditional and unconditional success probabilities
    pm_below = w_mean(p_below)
    pm_reach = w_mean(p_reach80)
    pm_overall = w_mean(p_overall)
    lines.append("")
    lines.append(f"  HEADLINE NUMBERS (acceptance-weighted means):")
    lines.append(f"    P(reach 80 events)            :  {pm_reach*100:5.1f}%")
    lines.append(f"    P(HR<0.636 | reached 80)      :  {pm_below*100:5.1f}%   <- CONDITIONAL")
    lines.append(f"    P(reach 80 AND HR<0.636)      :  {pm_overall*100:5.1f}%   <- UNCONDITIONAL")
    lines.append(f"    P(no readout, never reach 80) :  {(1-pm_reach)*100:5.1f}%")
    lines.append("")

    q = w_quant(t80, [0.05, 0.5, 0.95])
    if not all(np.isnan(q)):
        lines.append(f"  Calendar month of 80th :  P05={q[0]:5.1f}m  "
                     f"P50={q[1]:5.1f}m  P95={q[2]:5.1f}m")

    return lines


# =============================================================================
# BAT-mOS-stratified analyst's view
# =============================================================================

def _bat_mos_curves(results, bin_width=1.0, min_bin_weight=0.0):
    """Compute per-BAT-mOS-bin acceptance-weighted statistics.

    For each bin of BAT mOS, returns:
      - p_success (mean of P(reach80 AND HR<0.636) across combos)
      - p_reach   (mean of P(reach 80))
      - hr_p5/p50/p95 (acceptance-weighted percentiles of median HR_final)
      - hr_ia_p50 (acceptance-weighted median of median HR_IA)
      - bin_weight (sum of acceptance_rate in this bin)

    Each combo is weighted by its acceptance_rate; bins with bin_weight
    less than min_bin_weight return NaN for stability.
    """
    if not results:
        return None
    bat = np.array([r["bat_med"] for r in results])
    weights = np.array([r["acceptance_rate"] for r in results])
    p_success = np.array([r.get("p_success_overall", float("nan"))
                          for r in results])
    p_reach = np.array([r["p_reach80"] for r in results])
    hr_final = np.array([r["median_hr_final"] for r in results])
    hr_ia = np.array([r["median_hr_ia"] for r in results])

    bat_min, bat_max = float(bat.min()), float(bat.max())
    bin_centers = np.arange(np.floor(bat_min),
                            np.ceil(bat_max) + bin_width,
                            bin_width)

    out = {"bat_centers": bin_centers,
           "p_success": [], "p_reach": [],
           "hr_p5": [], "hr_p50": [], "hr_p95": [],
           "hr_ia_p50": [],
           "bin_weight": []}

    for c in bin_centers:
        in_bin = (bat >= c - bin_width / 2) & (bat < c + bin_width / 2)
        m = in_bin & (weights > 0)
        if not m.any() or weights[m].sum() <= min_bin_weight:
            for k in ("p_success", "p_reach", "hr_p5", "hr_p50",
                      "hr_p95", "hr_ia_p50"):
                out[k].append(float("nan"))
            out["bin_weight"].append(0.0)
            continue
        w = weights[m]
        out["bin_weight"].append(float(w.sum()))

        # Acceptance-weighted means
        ps = p_success[m]
        pr = p_reach[m]
        ms = ~np.isnan(ps)
        out["p_success"].append(float(np.average(ps[ms], weights=w[ms]))
                                if ms.any() else float("nan"))
        out["p_reach"].append(float(np.average(pr, weights=w)))

        # Acceptance-weighted percentiles of HR_final and median HR_IA
        for src, key_p5, key_p50, key_p95 in [
            (hr_final, "hr_p5", "hr_p50", "hr_p95"),
        ]:
            v = src[m]
            mv = ~np.isnan(v)
            if not mv.any():
                out[key_p5].append(float("nan"))
                out[key_p50].append(float("nan"))
                out[key_p95].append(float("nan"))
                continue
            order = np.argsort(v[mv])
            cw = np.cumsum(w[mv][order]); cw /= cw[-1]
            for q, key in [(0.05, key_p5), (0.5, key_p50), (0.95, key_p95)]:
                idx = min(int(np.searchsorted(cw, q)), len(order) - 1)
                out[key].append(float(v[mv][order][idx]))

        # HR_IA median (single percentile)
        v = hr_ia[m]
        mv = ~np.isnan(v)
        if mv.any():
            order = np.argsort(v[mv])
            cw = np.cumsum(w[mv][order]); cw /= cw[-1]
            idx = min(int(np.searchsorted(cw, 0.5)), len(order) - 1)
            out["hr_ia_p50"].append(float(v[mv][order][idx]))
        else:
            out["hr_ia_p50"].append(float("nan"))

    for k in out:
        out[k] = np.array(out[k])
    return out


def _plot_bat_mos_view(pdf, all_results, cfg):
    """Headline analyst's view: P(success), HR_final, HR_IA, P(reach 80)
    all stratified by BAT mOS, with one curve per family.  Lets the
    analyst pick whichever BAT mOS they find clinically plausible and
    read off the implied trial-success quantities directly."""
    have = {k: v for k, v in all_results.items() if v}
    if not have:
        return

    fig, axes = plt.subplots(2, 2, figsize=(8.5, 10.5))
    fig.suptitle("Headline view: outcomes as a function of BAT mOS",
                 fontsize=13, fontweight="bold", y=0.97)

    colors = {"Weibull/Weibull": "#4488cc",
              "Cure-fraction GPS": "#aa5599",
              "Leaky-cure GPS": "#cc8844"}

    curves = {label: _bat_mos_curves(results, bin_width=1.0)
              for label, results in have.items()}

    # ----- Top-left: P(success) vs BAT mOS -----
    ax = axes[0, 0]
    for label, c in curves.items():
        if c is None:
            continue
        ax.plot(c["bat_centers"], c["p_success"], "-o", ms=3.5,
                color=colors.get(label, "#888"), label=label, lw=1.6)
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("P(reach 80 AND HR < 0.636)")
    ax.set_title("Trial success probability")
    ax.legend(fontsize=8, loc="best")
    ax.grid(True, alpha=0.3)
    ax.set_ylim(-0.02, 1.02)
    ax.axhline(0.5, ls=":", color="grey", lw=0.5)

    # ----- Top-right: HR_final vs BAT mOS, with P5/P95 band -----
    ax = axes[0, 1]
    ax.axhline(cfg.hr_threshold, ls="--", color="red", lw=1,
               label=f"HR threshold {cfg.hr_threshold}")
    for label, c in curves.items():
        if c is None:
            continue
        col = colors.get(label, "#888")
        ax.plot(c["bat_centers"], c["hr_p50"], "-",
                color=col, label=label, lw=1.6)
        ax.fill_between(c["bat_centers"], c["hr_p5"], c["hr_p95"],
                        color=col, alpha=0.15)
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("HR @ 80 events (P5/P50/P95)")
    ax.set_title("Implied final HR (band = P5..P95)")
    ax.legend(fontsize=8, loc="best")
    ax.grid(True, alpha=0.3)
    ax.set_ylim(0, 1.1)

    # ----- Bottom-left: P(reach 80) vs BAT mOS -----
    ax = axes[1, 0]
    for label, c in curves.items():
        if c is None:
            continue
        ax.plot(c["bat_centers"], c["p_reach"], "-o", ms=3.5,
                color=colors.get(label, "#888"), label=label, lw=1.6)
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("P(reach 80 events)")
    ax.set_title("Probability the trial reads out at all")
    ax.legend(fontsize=8, loc="best")
    ax.grid(True, alpha=0.3)
    ax.set_ylim(-0.02, 1.02)

    # ----- Bottom-right: posterior weight density across BAT mOS -----
    ax = axes[1, 1]
    for label, c in curves.items():
        if c is None:
            continue
        bw = c["bin_weight"]
        if bw.sum() > 0:
            ax.bar(c["bat_centers"], bw / bw.sum(),
                   width=0.9, alpha=0.45, edgecolor="none",
                   color=colors.get(label, "#888"), label=label)
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("Posterior weight (data-driven)")
    ax.set_title("Where the constraints place BAT mOS\n(for context only)")
    ax.legend(fontsize=8, loc="best")
    ax.grid(True, alpha=0.3)

    cap = ("Top row is the headline.  Pick the BAT mOS you find clinically "
           "plausible, read off the implied P(success) and HR.\n"
           "Bottom-left shows readout-completion risk.  Bottom-right shows "
           "where the constraints alone (no clinical priors) place BAT mOS.")
    fig.text(0.5, 0.01, cap, ha="center", fontsize=8, style="italic",
             wrap=True)

    plt.tight_layout(rect=[0, 0.03, 1, 0.95])
    pdf.savefig(fig)
    plt.close(fig)


def _plot_constraints_page(pdf, cfg):
    """Page 1: constraints summary + enrollment plot."""
    fig = plt.figure(figsize=(8.5, 11))
    fig.suptitle("REGAL Constraint Fitter -- Setup",
                 fontsize=14, fontweight="bold", y=0.97)

    # Top: constraints table
    ax1 = fig.add_axes([0.07, 0.55, 0.86, 0.38])
    ax1.axis("off")
    table_text = [
        "HARD CONSTRAINTS (from public disclosures)",
        "",
        "  Trial start (first patient dosed)   :  Feb 8, 2021    (t = 0)",
        "  Enrollment completed                :  April 2024     (~38 months)",
        "  Total randomized                    :  126  (1:1, 63 per arm)",
        "",
        f"  60 events triggered IA at month     :  {cfg.t_ia:.0f}    (~Dec 2024)",
        f"  72 events update at month           :  {cfg.t_upd:.0f}    (~Dec 2025)",
        f"  Final analysis trigger              :  {cfg.n_ev_final} events",
        f"  80th event NOT YET announced as of  :  m{cfg.current_calendar_month:.0f}",
        "",
        f"  Median follow-up at IA              :  13.5 months (range 1 to >36)",
        f"  Pooled (blinded) mOS at IA          :  > {cfg.pool_mos_min_at_ia:.0f} months  (public disclosure)",
        f"  IDMC verdict at IA                  :  Passed futility AND efficacy gates",
        "",
        f"  HR success threshold (per SAP)      :  {cfg.hr_threshold}",
        f"  Futility constraint                 :  HR_IA < {cfg.futility_hr_max}",
        f"  Efficacy lower bound (OBF, info=.75):  HR_IA > {cfg.efficacy_hr_min}",
        "",
        "ABC TOLERANCES",
        f"  Event count IA  :  +/- {cfg.tol_ia:.0f}",
        f"  Event count Upd :  +/- {cfg.tol_upd:.0f}",
        "",
        "MODEL FAMILIES FIT",
        "  1. Weibull / Weibull             (4 params, fully agnostic)",
        "  2. Weibull-BAT + cure-frac GPS   (5 params)",
        "  3. Weibull-BAT + leaky-cure GPS  (6 params)",
    ]
    ax1.text(0.0, 1.0, "\n".join(table_text), va="top", ha="left",
             family="monospace", fontsize=9.5, transform=ax1.transAxes)

    # Bottom: enrollment histogram
    ax2 = fig.add_axes([0.10, 0.07, 0.83, 0.40])
    centers = []
    counts = []
    for lo, hi, n in cfg.enroll_bands:
        centers.append((lo + hi) / 2)
        counts.append(n / max(hi - lo, 0.1))  # density
    ax2.bar([c for c in centers],
            [c * (cfg.enroll_bands[i][1] - cfg.enroll_bands[i][0])
             for i, c in enumerate(counts)],
            width=[hi - lo for lo, hi, _ in cfg.enroll_bands],
            edgecolor="black", color="#4488cc", alpha=0.7)
    ax2.set_xlabel("Calendar month from first enrollment (Feb 2021 = 0)")
    ax2.set_ylabel("Patients enrolled per band")
    ax2.set_title("Enrollment pattern (from PR data, hard constraint)")
    ax2.axvline(cfg.t_ia, ls="--", color="red", label=f"IA: 60 events @ m{cfg.t_ia:.0f}")
    ax2.axvline(cfg.t_upd, ls="--", color="orange", label=f"Upd: 72 events @ m{cfg.t_upd:.0f}")
    ax2.set_xlim(-2, 70)
    ax2.legend()
    ax2.grid(True, alpha=0.3)

    pdf.savefig(fig)
    plt.close(fig)


def _plot_family_summary(pdf, results, family_label):
    """Two pages per family: 4 panels of summary stats + KM-curve page."""
    if not results:
        _add_text_page(pdf, family_label, ["No combos accepted in simulation phase."])
        return

    bat_meds = np.array([r["bat_med"] for r in results])
    median_hr = np.array([r["median_hr_final"] for r in results])
    weights = np.array([r["acceptance_rate"] for r in results])
    p_reach80 = np.array([r["p_reach80"] for r in results])
    t80 = np.array([r["median_t80_months"] for r in results])
    p_below = np.array([r["p_hr_below_threshold"] for r in results])

    fig, axes = plt.subplots(2, 2, figsize=(8.5, 9.5))
    fig.suptitle(f"{family_label} (page 1/2)", fontsize=13, fontweight="bold", y=0.98)

    # Panel 1: BAT mOS vs HR @ 80, sized by acceptance
    ax = axes[0, 0]
    sc = ax.scatter(bat_meds, median_hr, s=2 + 100 * weights / max(weights.max(), 1e-9),
                    c=p_below, cmap="RdYlGn", vmin=0, vmax=1, edgecolor="k", lw=0.2)
    ax.axhline(0.636, ls="--", color="red", lw=1, label="HR threshold 0.636")
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("Median HR @ 80 events")
    ax.set_title("Implied final HR vs BAT mOS")
    ax.set_ylim(0, 1.1)
    ax.grid(True, alpha=0.3)
    ax.legend(loc="upper left", fontsize=8)
    cb = plt.colorbar(sc, ax=ax, fraction=0.04)
    cb.set_label("P(HR<0.636)", fontsize=8)

    # Panel 2: HR distribution (acceptance-weighted)
    ax = axes[0, 1]
    mask = ~np.isnan(median_hr) & (weights > 0)
    if mask.any():
        ax.hist(median_hr[mask], bins=40, weights=weights[mask],
                color="#4488cc", edgecolor="black", alpha=0.8)
        ax.axvline(0.636, ls="--", color="red", lw=1.2,
                   label="HR threshold 0.636")
        ax.set_xlabel("Median HR @ 80 events")
        ax.set_ylabel("Posterior density (weighted)")
        ax.set_title("Final-HR posterior")
        ax.legend(fontsize=8)
        ax.grid(True, alpha=0.3)

    # Panel 3: timing of 80th event with calendar overlay
    ax = axes[1, 0]
    mask = ~np.isnan(t80) & (weights > 0)
    if mask.any():
        ax.hist(t80[mask], bins=40, weights=weights[mask],
                color="#aa5599", edgecolor="black", alpha=0.8)
        ax.axvline(cfg_today_month(), ls="-", color="black", lw=1,
                   label=f"Today (May'26)")
        ax.axvline(58, ls=":", color="orange", lw=1,
                   label=f"72 events (Dec'25)")
        ax.set_xlabel("Calendar month of 80th event")
        ax.set_ylabel("Posterior density (weighted)")
        ax.set_title("Timing of 80th event")
        ax.legend(fontsize=8, loc="upper right")
        ax.grid(True, alpha=0.3)
        if mask.sum() > 0:
            lo = max(46, np.percentile(t80[mask], 1) - 2)
            hi = np.percentile(t80[mask], 99) + 2
            ax.set_xlim(lo, hi)
            _set_calendar_xaxis(ax, lo, hi, n_ticks=6)

    # Panel 4: BAT mOS posterior
    ax = axes[1, 1]
    if weights.sum() > 0:
        ax.hist(bat_meds, bins=40, weights=weights,
                color="#55aa44", edgecolor="black", alpha=0.8)
        ax.set_xlabel("BAT mOS (months)")
        ax.set_ylabel("Posterior density (weighted)")
        ax.set_title("BAT mOS posterior (no biological prior)")
        ax.grid(True, alpha=0.3)

    plt.tight_layout(rect=[0, 0, 1, 0.96])
    pdf.savefig(fig)
    plt.close(fig)

    # Page 2: KM-style curves + per-family acceptance summary
    fig, axes = plt.subplots(2, 1, figsize=(8.5, 10.5))
    fig.suptitle(f"{family_label} (page 2/2)",
                 fontsize=13, fontweight="bold", y=0.98)

    _km_panel(axes[0], results, family_label, weights, top_k=20)

    # Acceptance rate vs BAT mOS
    ax = axes[1]
    ax.scatter(bat_meds, weights * 100, c=p_below, cmap="RdYlGn",
               vmin=0, vmax=1, edgecolor="k", lw=0.2,
               s=20 + 80 * np.array(p_reach80))
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("Simulation acceptance rate (%)")
    ax.set_title("Simulation acceptance rate (events + HR_IA gate + pool mOS)")
    ax.grid(True, alpha=0.3)

    plt.tight_layout(rect=[0, 0, 1, 0.96])
    pdf.savefig(fig)
    plt.close(fig)


def _plot_compare_families(pdf, all_results):
    """Cross-family comparison page."""
    fig, axes = plt.subplots(2, 2, figsize=(8.5, 9.5))
    fig.suptitle("Cross-family comparison", fontsize=13, fontweight="bold", y=0.98)

    colors = {"Weibull/Weibull": "#4488cc",
              "Cure-fraction GPS": "#aa5599",
              "Leaky-cure GPS": "#cc8844"}

    # HR distributions
    ax = axes[0, 0]
    for label, results in all_results.items():
        if not results:
            continue
        median_hr = np.array([r["median_hr_final"] for r in results])
        weights = np.array([r["acceptance_rate"] for r in results])
        mask = ~np.isnan(median_hr) & (weights > 0)
        if mask.any():
            ax.hist(median_hr[mask], bins=40, weights=weights[mask],
                    histtype="step", linewidth=1.8, color=colors.get(label),
                    label=label, density=True)
    ax.axvline(0.636, ls="--", color="red", label="HR=0.636")
    ax.set_xlabel("Median HR @ 80 events")
    ax.set_ylabel("Density")
    ax.set_title("Final-HR posterior by family")
    ax.legend(fontsize=8)
    ax.grid(True, alpha=0.3)

    # Timing distributions
    ax = axes[0, 1]
    # Compute robust shared upper bound across families to avoid one
    # family's pathological tail (e.g. cure-fraction with cure_frac just
    # below 1) blowing out the x-axis on the others.
    all_t80 = []
    all_w = []
    for label, results in all_results.items():
        if not results:
            continue
        t80 = np.array([r["median_t80_months"] for r in results])
        weights = np.array([r["acceptance_rate"] for r in results])
        mask = ~np.isnan(t80) & (weights > 0)
        if mask.any():
            ax.hist(t80[mask], bins=40, weights=weights[mask],
                    histtype="step", linewidth=1.8, color=colors.get(label),
                    label=label, density=True)
            all_t80.append(t80[mask])
            all_w.append(weights[mask])
    ax.axvline(cfg_today_month(), ls="-", color="black", label="Today (May 2026)")
    if all_t80:
        # Pool weighted 99th percentile across families
        pooled = np.concatenate(all_t80)
        pooled_w = np.concatenate(all_w)
        order = np.argsort(pooled)
        cw = np.cumsum(pooled_w[order]); cw /= cw[-1]
        idx = np.searchsorted(cw, 0.99)
        idx = min(idx, len(order) - 1)
        hi = float(pooled[order][idx]) + 2
        lo = max(46, float(pooled.min()) - 2)
        ax.set_xlim(lo, hi)
    ax.set_xlabel("Calendar month of 80th event")
    ax.set_ylabel("Density")
    ax.set_title("80th-event timing posterior by family")
    ax.legend(fontsize=8)
    ax.grid(True, alpha=0.3)

    # BAT mOS
    ax = axes[1, 0]
    for label, results in all_results.items():
        if not results:
            continue
        b = np.array([r["bat_med"] for r in results])
        w = np.array([r["acceptance_rate"] for r in results])
        if w.sum() > 0:
            ax.hist(b, bins=40, weights=w, histtype="step",
                    linewidth=1.8, color=colors.get(label),
                    label=label, density=True)
    ax.set_xlabel("BAT mOS (months)")
    ax.set_ylabel("Density")
    ax.set_title("BAT mOS posterior by family")
    ax.legend(fontsize=8)
    ax.grid(True, alpha=0.3)

    # P(success) bar -- show both conditional and unconditional
    ax = axes[1, 1]
    labels = []
    pmeans_cond = []
    pmeans_uncond = []
    pmeans_reach = []
    for label, results in all_results.items():
        if not results:
            continue
        p_cond = np.array([r["p_hr_below_threshold"] for r in results])
        p_un = np.array([r.get("p_success_overall", float("nan")) for r in results])
        p_re = np.array([r["p_reach80"] for r in results])
        w = np.array([r["acceptance_rate"] for r in results])
        if w.sum() > 0:
            mc = ~np.isnan(p_cond)
            mu = ~np.isnan(p_un)
            mr = ~np.isnan(p_re)
            labels.append(label)
            pmeans_cond.append(float(np.average(p_cond[mc], weights=w[mc])) if mc.any() else float("nan"))
            pmeans_uncond.append(float(np.average(p_un[mu], weights=w[mu])) if mu.any() else float("nan"))
            pmeans_reach.append(float(np.average(p_re[mr], weights=w[mr])) if mr.any() else float("nan"))
    if labels:
        x = np.arange(len(labels))
        bw = 0.27
        ax.bar(x - bw, pmeans_reach, width=bw,
               color="#bbbbbb", edgecolor="black", label="P(reach 80)")
        ax.bar(x, pmeans_cond, width=bw,
               color=[colors.get(l, "#888") for l in labels],
               edgecolor="black", alpha=0.5, label="P(HR<0.636 | reach 80)")
        ax.bar(x + bw, pmeans_uncond, width=bw,
               color=[colors.get(l, "#888") for l in labels],
               edgecolor="black", label="P(success overall)")
        ax.set_xticks(x)
        ax.set_xticklabels(labels, rotation=15, ha="right", fontsize=7)
        ax.set_ylabel("Probability")
        ax.set_ylim(0, 1.05)
        for i, pm in enumerate(pmeans_uncond):
            ax.text(i + bw, pm + 0.02, f"{pm*100:.0f}%", ha="center", fontsize=8)
        ax.set_title("P(success): unconditional vs conditional")
        ax.legend(fontsize=7, loc="lower left")
        ax.grid(True, alpha=0.3)

    plt.tight_layout(rect=[0, 0, 1, 0.96])
    pdf.savefig(fig)
    plt.close(fig)


def cfg_today_month():
    """May 8, 2026 = month ~ 63 since Feb 8, 2021."""
    return 63.0


def month_to_calendar_label(month, fmt="short"):
    """Convert trial month (Feb 2021 = 0) to a calendar label like 'Dec 2025'."""
    import datetime as _dt
    base = _dt.date(2021, 2, 8)
    target = base + _dt.timedelta(days=int(month * 30.4375))
    if fmt == "short":
        return target.strftime("%b'%y")
    return target.strftime("%b %Y")


def _set_calendar_xaxis(ax, lo, hi, n_ticks=8):
    """Add calendar labels as a secondary x-axis."""
    import numpy as _np
    ticks = _np.linspace(lo, hi, n_ticks)
    sec = ax.secondary_xaxis("top")
    sec.set_xticks(ticks)
    sec.set_xticklabels([month_to_calendar_label(t) for t in ticks],
                        rotation=0, fontsize=7)
    sec.tick_params(axis="x", which="both", length=2)


def _km_panel(ax, results, family_label, weights, top_k=20):
    """Plot implied Weibull/cure/leaky survival curves for the top-k
    accepted combos by acceptance rate, with the event-count constraints
    overlaid as horizontal markers."""
    import numpy as _np
    if not results:
        ax.text(0.5, 0.5, "No accepted combos", ha="center", va="center",
                transform=ax.transAxes)
        return

    t = _np.linspace(0, 80, 200)
    order = _np.argsort(-_np.array([r["acceptance_rate"] for r in results]))
    top = [results[i] for i in order[:top_k]]
    top_w = _np.array([r["acceptance_rate"] for r in top])
    top_w = top_w / top_w.sum() if top_w.sum() > 0 else top_w

    # plot each top fit lightly
    for r, w in zip(top, top_w):
        # BAT
        sB = weibull_S(t, r["bat_scale"], r["bat_shape"])
        ax.plot(t, sB, color="#cc4444", alpha=min(0.3, 4 * w), lw=0.8)
        # GPS
        if r["family"] == "weibull":
            sG = weibull_S(t, r["gps_scale"], r["gps_shape"])
        elif r["family"] == "cure":
            sG = cure_S(t, r["cure_frac"], r["unc_scale"], r["unc_shape"])
        else:
            sG = leaky_cure_S(t, r["cure_frac"], r["unc_scale"],
                              r["unc_shape"], r["leak_yr"])
        ax.plot(t, sG, color="#4477cc", alpha=min(0.3, 4 * w), lw=0.8)

    # representative (weighted-mean) curves drawn boldly
    bat_med_w = float(_np.average([r["bat_med"] for r in top], weights=top_w))
    bat_sh_w = float(_np.average([r["bat_shape"] for r in top], weights=top_w))
    bat_scale_w = weibull_scale_from_median(bat_med_w, bat_sh_w)
    sB_rep = weibull_S(t, bat_scale_w, bat_sh_w)
    ax.plot(t, sB_rep, color="#cc4444", lw=2.0, label=f"BAT (rep med={bat_med_w:.1f}m)")
    sG_avg = _np.zeros_like(t)
    for r, w in zip(top, top_w):
        if r["family"] == "weibull":
            sG = weibull_S(t, r["gps_scale"], r["gps_shape"])
        elif r["family"] == "cure":
            sG = cure_S(t, r["cure_frac"], r["unc_scale"], r["unc_shape"])
        else:
            sG = leaky_cure_S(t, r["cure_frac"], r["unc_scale"],
                              r["unc_shape"], r["leak_yr"])
        sG_avg += w * sG
    ax.plot(t, sG_avg, color="#4477cc", lw=2.0, label=f"GPS (weighted mean)")

    ax.axvline(8, ls=":", color="grey", lw=0.5)  # cosmetic
    ax.set_xlabel("Time from randomization (months)")
    ax.set_ylabel("Survival probability")
    ax.set_title("Implied KM-style curves (top 20 accepted combos)")
    ax.set_xlim(0, 80)
    ax.set_ylim(0, 1.02)
    ax.grid(True, alpha=0.3)
    ax.legend(loc="upper right", fontsize=8)


def write_report(cfg, all_results, out_path):
    """Build the PDF."""
    out_path = str(out_path)
    print(f"\nWriting PDF report -> {out_path}")
    with PdfPages(out_path) as pdf:
        _plot_constraints_page(pdf, cfg)

        # Headline analyst's view: outcomes as a function of BAT mOS,
        # placed immediately after setup so it's the first thing seen.
        _plot_bat_mos_view(pdf, all_results, cfg)

        # Summary text page
        lines = ["GLOBAL POSTERIORS  (acceptance-weighted)", ""]
        for fam_label, results in all_results.items():
            lines.extend(_summarize_family(results, fam_label))
            lines.append("")
        _add_text_page(pdf, "Summary across all families", lines)

        for fam_label, results in all_results.items():
            _plot_family_summary(pdf, results, fam_label)

        if sum(len(r) for r in all_results.values()) > 0:
            _plot_compare_families(pdf, all_results)

        # Top combos table
        lines = ["TOP-20 ACCEPTED COMBOS PER FAMILY (by acceptance rate)", ""]
        for fam_label, results in all_results.items():
            lines.append(f"--- {fam_label} ---")
            top = sorted(results, key=lambda r: -r["acceptance_rate"])[:20]
            if not top:
                lines.append("  (none)")
                lines.append("")
                continue
            keys = [k for k in top[0].keys()
                    if k not in ("family", "exp_ev_ia", "exp_ev_upd",
                                 "n_attempts", "n_pass_events",
                                 "n_pass_futility", "n_accepted",
                                 "bat_scale", "gps_scale", "unc_scale")]
            hdr = "  " + "  ".join(f"{k:>10}" for k in keys[:8])
            lines.append(hdr)
            for r in top:
                vals = []
                for k in keys[:8]:
                    v = r.get(k, "")
                    if isinstance(v, float):
                        vals.append(f"{v:10.3f}")
                    else:
                        vals.append(f"{str(v):>10}")
                lines.append("  " + "  ".join(vals))
            lines.append("")
        _add_text_page(pdf, "Top accepted combos", lines, fontsize=7.5)

    print(f"Done.  Report saved to {out_path}")


# =============================================================================
# MAIN
# =============================================================================

def main(argv=None):
    p = argparse.ArgumentParser(description=__doc__,
                                formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--threads", type=int, default=50)
    p.add_argument("--quick", action="store_true",
                   help="coarser grid, fewer sims, for testing")
    p.add_argument("--families", type=str, default="weibull,cure,leaky",
                   help="comma list: weibull,cure,leaky")
    p.add_argument("--n_sims", type=int, default=None)
    p.add_argument("--out", type=str, default="regal_fit_report.pdf")
    p.add_argument("--seed", type=int, default=20260508)
    p.add_argument("--no-resume", action="store_true",
                   help="ignore any pre-existing per-family checkpoint JSONs")
    # NEW: knobs for the IDMC gates and pool-mOS floor.  Set any of these
    # to 0 to disable that constraint (useful for sensitivity analysis).
    p.add_argument("--futility-hr-max", type=float, default=None,
                   help="upper HR_IA bound (didn't stop for futility); "
                        "default 1.0, set 999 to disable")
    p.add_argument("--efficacy-hr-min", type=float, default=None,
                   help="lower HR_IA bound (didn't stop for efficacy); "
                        "default 0.55 (OBF at info=0.75), set 0 to disable")
    p.add_argument("--pool-mos-min", type=float, default=None,
                   help="floor for pool KM median at IA in months; "
                        "default 12.0, set 0 to disable")
    args = p.parse_args(argv)

    cfg = Config()
    cfg.seed = args.seed
    cfg.out_pdf = args.out

    if args.n_sims:
        cfg.n_sims_per_combo = args.n_sims
    if args.futility_hr_max is not None:
        cfg.futility_hr_max = args.futility_hr_max
    if args.efficacy_hr_min is not None:
        cfg.efficacy_hr_min = args.efficacy_hr_min
    if args.pool_mos_min is not None:
        cfg.pool_mos_min_at_ia = args.pool_mos_min

    if args.quick:
        cfg.bat_med_grid = (4.0, 30.01, 1.0)
        cfg.bat_shape_grid = (0.6, 1.81, 0.20)
        cfg.gps_med_grid_n = 18
        cfg.gps_shape_grid = (0.6, 1.81, 0.20)
        cfg.cure_frac_grid = (0.0, 0.91, 0.05)
        cfg.cure_unc_med_grid = (4.0, 30.01, 1.0)
        cfg.cure_unc_shape_grid = (0.6, 1.81, 0.30)
        cfg.leak_grid = (0.0, 0.101, 0.025)
        cfg.n_sims_per_combo = 800
        print("*** QUICK MODE ***")

    print("=" * 70)
    print("REGAL constraint fitter")
    print("=" * 70)
    print(f"  Threads: {args.threads}")
    print(f"  Sims per combo: {cfg.n_sims_per_combo}")
    print(f"  Families: {args.families}")
    print(f"  Output:  {cfg.out_pdf}")
    print(f"  Constraints:")
    print(f"    {cfg.n_ev_ia} events @ m{cfg.t_ia:.0f}, "
          f"{cfg.n_ev_upd} events @ m{cfg.t_upd:.0f}, "
          f"final @ {cfg.n_ev_final} events")
    print(f"    HR_IA gate: {cfg.efficacy_hr_min} < HR_IA < {cfg.futility_hr_max}")
    print(f"    pool mOS at IA > {cfg.pool_mos_min_at_ia} months")
    print(f"    80th event not yet observed (today = m{cfg.current_calendar_month})")

    out_path = Path(cfg.out_dir) / cfg.out_pdf
    base = out_path.with_suffix("")

    # Constraint signature: any change in the IDMC gates, pool-mOS floor,
    # or current_calendar_month should INVALIDATE old checkpoints, otherwise
    # --resume silently loads results computed under different constraints.
    ckpt_tag = (f"_eff{cfg.efficacy_hr_min:g}"
                f"_fut{cfg.futility_hr_max:g}"
                f"_pool{cfg.pool_mos_min_at_ia:g}"
                f"_t{cfg.current_calendar_month:g}")

    def _checkpoint_family(label, results):
        """Dump per-family results to disk so a Ctrl-C doesn't lose progress."""
        if not results:
            return
        safe = label.replace("/", "-").replace(" ", "_")
        ckpt = Path(f"{base}_{safe}{ckpt_tag}.json")
        with open(ckpt, "w") as f:
            json.dump(results, f, indent=1,
                      default=lambda o: o.tolist() if hasattr(o, "tolist") else str(o))
        csv_path = Path(f"{base}_{safe}{ckpt_tag}.csv")
        import csv as _csv
        keys = list(results[0].keys())
        with open(csv_path, "w", newline="") as f:
            w = _csv.DictWriter(f, fieldnames=keys)
            w.writeheader()
            for r in sorted(results, key=lambda x: -x.get("acceptance_rate", 0)):
                w.writerow(r)
        print(f"  Checkpoint saved: {ckpt.name}, {csv_path.name}")

    def _try_resume(label):
        """Look for an existing per-family JSON and load if present.
        Only loads checkpoints with a matching constraint signature."""
        safe = label.replace("/", "-").replace(" ", "_")
        ckpt = Path(f"{base}_{safe}{ckpt_tag}.json")
        if ckpt.exists() and not args.no_resume:
            with open(ckpt) as f:
                results = json.load(f)
            print(f"  RESUMING from {ckpt.name}: {len(results):,} combos loaded")
            return results
        # Older-style checkpoint (no constraint tag) -- ignore but warn
        legacy = Path(f"{base}_{safe}.json")
        if legacy.exists() and not args.no_resume:
            print(f"  NOTE: legacy checkpoint {legacy.name} found but constraints "
                  f"have changed; ignoring (use --no-resume to silence).")
        return None

    all_results = {}
    fams = [f.strip() for f in args.families.split(",") if f.strip()]

    if "weibull" in fams:
        print("\n" + "-" * 70)
        print("Family 1: Weibull / Weibull")
        print("-" * 70)
        prior = _try_resume("Weibull/Weibull")
        if prior is not None:
            all_results["Weibull/Weibull"] = prior
        else:
            all_results["Weibull/Weibull"] = run_family(
                abc_prefilter_weibull, cfg, "Weibull/Weibull", args.threads)
            _checkpoint_family("Weibull/Weibull", all_results["Weibull/Weibull"])

    if "cure" in fams:
        print("\n" + "-" * 70)
        print("Family 2: Weibull-BAT + cure-fraction GPS")
        print("-" * 70)
        prior = _try_resume("Cure-fraction GPS")
        if prior is not None:
            all_results["Cure-fraction GPS"] = prior
        else:
            all_results["Cure-fraction GPS"] = run_family(
                abc_prefilter_cure, cfg, "Cure-fraction GPS", args.threads)
            _checkpoint_family("Cure-fraction GPS", all_results["Cure-fraction GPS"])

    if "leaky" in fams:
        print("\n" + "-" * 70)
        print("Family 3: Weibull-BAT + leaky-cure GPS")
        print("-" * 70)
        prior = _try_resume("Leaky-cure GPS")
        if prior is not None:
            all_results["Leaky-cure GPS"] = prior
        else:
            all_results["Leaky-cure GPS"] = run_family(
                abc_prefilter_leaky, cfg, "Leaky-cure GPS", args.threads)
            _checkpoint_family("Leaky-cure GPS", all_results["Leaky-cure GPS"])

    write_report(cfg, all_results, out_path)

    # Save raw results as JSON for downstream analysis
    json_path = out_path.with_suffix(".json")
    with open(json_path, "w") as f:
        json.dump({k: v for k, v in all_results.items()}, f, indent=1,
                  default=lambda o: o.tolist() if hasattr(o, "tolist") else str(o))
    print(f"Raw results JSON saved to {json_path}")
    print(f"Per-family CSVs: {base}_*.csv")


if __name__ == "__main__":
    main()
