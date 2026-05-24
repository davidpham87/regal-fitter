#!/usr/bin/env python3
"""
REGAL Stress Test
=================

Goal: assume both BAT and GPS arm are the same (Null Hypothesis),
how likely is it to see the information we have been seeing in the trial?

Inspired by regal_fit.py

Parameters:
- Grid search mOS: 11 to 20 months, increment 0.5
- Shape k: 0.8, 0.9, 1.0
- Trials: 100,000 simulations per combination

Information being seen:
1. Passed IA: HR_IA < 1.0 and pooled median OS at IA > 12 months.
2. Count of deaths at IA (month 46): <= 60 events.
3. Deceleration of event rate at Dec 2025 (m46->m58): <= 12 events.
4. Return to the mean by May 2026 (m58->m63): <= 6 events.

Output:
- JSON files in public/sims/ for each mOS.
- summary.json with the best-fit k for each mOS.
"""

import numpy as np
import json
import os
import argparse
import sys
from concurrent.futures import ProcessPoolExecutor

def get_s_curve_enrollment_bands(n_total, total_months, median_month, k=0.3):
    """
    Generate monthly enrollment bands following an S-curve (logistic).
    Returns list of (lo, hi, n).
    """
    def logistic(t):
        return 1.0 / (1.0 + np.exp(-k * (t - median_month)))

    t = np.arange(total_months + 1)
    c = logistic(t)
    # Normalize to [0, n_total]
    c = (c - c[0]) / (c[-1] - c[0]) * n_total

    # Monthly increments
    n_monthly = np.diff(c)

    # Ensure they sum to n_total exactly due to rounding
    n_int = np.round(n_monthly).astype(int)
    diff = n_total - n_int.sum()
    if diff != 0:
        # Adjust the largest month or last month
        n_int[-1] += diff

    bands = []
    for i in range(len(n_int)):
        if n_int[i] > 0:
            bands.append((float(i), float(i+1), int(n_int[i])))
    return bands

def get_manual_enrollment_bands():
    """
    Allows users to input the exact enrollment months and patient counts.
    Format: [[start_month, end_month, n_patients], ...]
    """
    # Less concentrated enrollment starting at month 0 (k=0.1, median=19):
    return [
        [0.0, 1.0, 2], [1.0, 2.0, 2], [2.0, 3.0, 2], [3.0, 4.0, 2],
        [4.0, 5.0, 3], [5.0, 6.0, 3], [6.0, 7.0, 3], [7.0, 8.0, 3],
        [8.0, 9.0, 3], [9.0, 10.0, 3], [10.0, 11.0, 4], [11.0, 12.0, 4],
        [12.0, 13.0, 4], [13.0, 14.0, 4], [14.0, 15.0, 4], [15.0, 16.0, 4],
        [16.0, 17.0, 4], [17.0, 18.0, 4], [18.0, 19.0, 4], [19.0, 20.0, 4],
        [20.0, 21.0, 4], [21.0, 22.0, 4], [22.0, 23.0, 4], [23.0, 24.0, 4],
        [24.0, 25.0, 4], [25.0, 26.0, 4], [26.0, 27.0, 4], [27.0, 28.0, 4],
        [28.0, 29.0, 3], [29.0, 30.0, 3], [30.0, 31.0, 3], [31.0, 32.0, 3],
        [32.0, 33.0, 3], [33.0, 34.0, 3], [34.0, 35.0, 2], [35.0, 36.0, 2],
        [36.0, 37.0, 2], [37.0, 38.0, 4]
    ]

# --- Configuration (from regal_fit.py) ---
ENROLL_BANDS = get_manual_enrollment_bands()
N_TOTAL = sum(band[2] for band in ENROLL_BANDS)
N_PER_ARM = N_TOTAL // 2
T_IA = 46.0      # month 46 (~Dec 2024)
T_UPD = 58.0     # month 58 (~Dec 2025)
T_PR3 = 62.97    # month 63 (~May 2026)

# Observed thresholds for the "information we have been seeing"
OBS_EV_IA = 60
OBS_INC_UPD = 12
OBS_INC_PR3 = 6
FUTILITY_HR_MAX = 1.0
POOL_MOS_MIN = 12.0

def weibull_scale_from_median(median, shape):
    """Convert median + shape to Weibull scale."""
    return median / (np.log(2.0) ** (1.0 / shape))

def generate_enrollment(n_sims, rng):
    """Generate enrollment times for n_sims trials."""
    enroll = np.empty((n_sims, N_TOTAL))
    col = 0
    for lo, hi, n in ENROLL_BANDS:
        enroll[:, col:col+n] = rng.uniform(lo, hi, (n_sims, n))
        col += n
    enroll.sort(axis=1)
    return enroll

def km_s_at_t_vectorized(obs_t, is_event, target):
    """Vectorized Kaplan-Meier survival at time 'target' for many simulations."""
    n_sims, n_pts = obs_t.shape
    # Sort by observed time
    order = np.argsort(obs_t, axis=1)
    obs_t_s = np.take_along_axis(obs_t, order, axis=1)
    is_event_s = np.take_along_axis(is_event, order, axis=1)

    n_at_risk = n_pts - np.arange(n_pts)
    # At each step, if it's an event and time <= target, the survival multiplier is (1 - 1/n_at_risk)
    step_mult = np.where(is_event_s & (obs_t_s <= target), 1.0 - 1.0 / n_at_risk, 1.0)
    return np.prod(step_mult, axis=1)

def simulate_combo(args):
    """Simulate a single (mOS, k) combination."""
    mos, k, n_sims, seed = args
    rng = np.random.default_rng(seed)
    scale = weibull_scale_from_median(mos, k)

    # 1. Generate enrollment and survival times
    enroll = generate_enrollment(n_sims, rng)
    # Survival follows Weibull(scale, k)
    surv = scale * (-np.log(rng.random((n_sims, N_TOTAL)))) ** (1.0 / k)

    # 2. Milestones - follow-up times
    fu_ia = np.maximum(T_IA - enroll, 0.0)
    fu_upd = np.maximum(T_UPD - enroll, 0.0)
    fu_pr3 = np.maximum(T_PR3 - enroll, 0.0)

    # Total event counts
    ev_ia = (surv <= fu_ia).sum(axis=1)
    ev_upd = (surv <= fu_upd).sum(axis=1)
    ev_pr3 = (surv <= fu_pr3).sum(axis=1)

    # Increments
    inc_upd = ev_upd - ev_ia
    inc_pr3 = ev_pr3 - ev_upd

    # 3. Constraint: Passing IA
    # a) HR_IA < 0.83
    # Random arm assignment (1:1)
    arms = np.zeros((n_sims, N_TOTAL), dtype=np.int8)
    perm = np.argsort(rng.random((n_sims, N_TOTAL)), axis=1)
    rows = np.arange(n_sims)[:, None]
    arms[rows, perm[:, :N_PER_ARM]] = 1

    gps_ev_ia = ((surv <= fu_ia) & (arms == 1)).sum(axis=1)
    # Under H0, GPS events given Total Events follows a hypergeometric distribution,
    # approximated by Binomial(ev_ia, 0.5) for large trials.
    # HR < 0.83 is approximately o_gps < (0.83 * ev_ia / 1.83)
    pass_hr = gps_ev_ia < (FUTILITY_HR_MAX * ev_ia / (1.0 + FUTILITY_HR_MAX))

    # b) Pooled median > 12 months at IA
    obs_t_ia = np.minimum(surv, fu_ia)
    is_ev_ia = surv <= fu_ia
    s_12 = km_s_at_t_vectorized(obs_t_ia, is_ev_ia, POOL_MOS_MIN)
    pass_pool = s_12 > 0.5

    passed_ia_all = pass_hr & pass_pool

    # 4. Success criteria (information we have been seeing)
    c_passed_ia = passed_ia_all
    c_ev_ia_le_60 = ev_ia <= OBS_EV_IA
    c_inc_upd_le_12 = inc_upd <= OBS_INC_UPD
    c_inc_pr3_le_6 = inc_pr3 <= OBS_INC_PR3

    # Joint probability
    p_joint = np.mean(c_passed_ia & c_ev_ia_le_60 & c_inc_upd_le_12 & c_inc_pr3_le_6)

    # Expected values for finding "best k" (residual minimization)
    exp_ev_ia = np.mean(ev_ia)
    exp_inc_upd = np.mean(inc_upd)
    exp_inc_pr3 = np.mean(inc_pr3)

    # Residual: how far is the MEAN of this combo from the OBSERVED counts?
    residual = max(abs(exp_ev_ia - OBS_EV_IA),
                   abs(exp_inc_upd - OBS_INC_UPD),
                   abs(exp_inc_pr3 - OBS_INC_PR3))

    return {
        "mos": mos,
        "k": k,
        "p_pass_ia": float(np.mean(c_passed_ia)),
        "p_ev_ia_le_60": float(np.mean(c_ev_ia_le_60)),
        "p_inc_upd_le_12": float(np.mean(c_inc_upd_le_12)),
        "p_inc_pr3_le_6": float(np.mean(c_inc_pr3_le_6)),
        "p_joint": float(p_joint),
        "expected_ev_ia": float(exp_ev_ia),
        "expected_inc_upd": float(exp_inc_upd),
        "expected_inc_pr3": float(exp_inc_pr3),
        "residual": float(residual)
    }

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--quick", action="store_true", help="Run with small grid and fewer sims")
    parser.add_argument("--threads", type=int, default=16, help="Number of parallel threads")
    parser.add_argument("--sims", type=int, default=100000, help="Simulations per combination")
    args = parser.parse_args()

    if args.quick:
        mos_grid = np.arange(11.0, 20.1, 2.0)
        k_grid = np.array([0.8, 0.9, 1.0])
        n_sims = 1000
    else:
        mos_grid = np.arange(11.0, 20.1, 0.5)
        k_grid = np.array([0.8, 0.9, 1.0])
        n_sims = args.sims

    print(f"Starting Stress Test: {len(mos_grid) * len(k_grid)} combinations")
    print(f"Parameters: n_sims={n_sims}, threads={args.threads}")

    work = []
    for i, mos in enumerate(mos_grid):
        for j, k in enumerate(k_grid):
            work.append((float(mos), float(k), n_sims, 42 + i * 100 + j))

    with ProcessPoolExecutor(max_workers=args.threads) as executor:
        results = list(executor.map(simulate_combo, work))

    os.makedirs("public/sims", exist_ok=True)

    # Group results by mOS
    by_mos = {}
    for r in results:
        m = r["mos"]
        if m not in by_mos:
            by_mos[m] = []
        by_mos[m].append(r)

    summary = []
    for m in sorted(by_mos.keys()):
        # Find best-fit k for this mOS
        best = min(by_mos[m], key=lambda x: x["residual"])
        summary.append(best)

    # Save summary of best-fit k parameters
    with open("public/sims/summary.json", "w") as f:
        json.dump(summary, f, indent=2)

    # Save all results concatenated
    all_results_path = "public/sims/all_results.json"
    with open(all_results_path, "w") as f:
        json.dump(results, f, indent=2)

    print(f"\nDone. Results saved in public/sims/")
    print(f"{'mOS':>5} | {'Best k':>6} | {'p_joint':>8} | {'E[IA]':>6} | {'E[Upd]':>6} | {'E[PR3]':>6}")
    print("-" * 60)
    for s in summary:
        print(f"{s['mos']:5.1f} | {s['k']:6.1f} | {s['p_joint']*100:7.2f}% | {s['expected_ev_ia']:6.1f} | {s['expected_inc_upd']:6.1f} | {s['expected_inc_pr3']:6.1f}")

if __name__ == "__main__":
    main()
