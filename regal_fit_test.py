import os
import json
import sqlite3
import numpy as np
from hypothesis import given, settings
import hypothesis.strategies as st
import pytest

import regal_fit

DB_PATH = "datasets/generative_tests.db"
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
TEST_CASES = []

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS survival_tests")
    cursor.execute("""
        CREATE TABLE survival_tests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            func TEXT NOT NULL,
            args_json TEXT NOT NULL,
            expected_json TEXT NOT NULL,
            cljs_passed INTEGER DEFAULT NULL
        )
    """)
    conn.commit()
    conn.close()

if "PYTEST_XDIST_WORKER" not in os.environ:
    init_db()

def save_test_case(func_name, args, expected):
    def serialize(v):
        if isinstance(v, np.ndarray):
            return serialize(v.tolist())
        elif isinstance(v, (np.floating, float)):
            if np.isnan(v): return "NaN"
            if np.isinf(v): return "Infinity" if v > 0 else "-Infinity"
            return float(v)
        elif isinstance(v, (np.integer, int)):
            return int(v)
        elif isinstance(v, list):
            return [serialize(x) for x in v]
        elif isinstance(v, tuple):
            return [serialize(x) for x in v]
        elif isinstance(v, dict):
            return {k: serialize(val) for k, val in v.items()}
        elif hasattr(v, "__dict__"):
            return serialize(vars(v))
        return v

    args_ser = serialize(args)
    expected_ser = serialize(expected)
    TEST_CASES.append((func_name, json.dumps(args_ser), json.dumps(expected_ser)))

@pytest.fixture(scope="session", autouse=True)
def write_to_db_after_tests():
    yield
    conn = sqlite3.connect(DB_PATH, timeout=60.0)
    cursor = conn.cursor()
    cursor.executemany(
        "INSERT INTO survival_tests (func, args_json, expected_json) VALUES (?, ?, ?)",
        TEST_CASES,
    )
    conn.commit()
    conn.close()

# Strategy for Config
def build_cfg(d):
    cfg = regal_fit.Config()
    for k, v in d.items():
        setattr(cfg, k, v)
    return cfg

cfg_strategy = st.fixed_dictionaries({
    "bat_med_grid": st.tuples(st.floats(8.0, 10.0), st.floats(10.0, 12.0), st.just(1.0)),
    "bat_shape_grid": st.tuples(st.floats(0.8, 1.0), st.floats(1.0, 1.2), st.just(0.1)),
    "gps_med_grid_lo": st.floats(10.0, 12.0),
    "gps_med_grid_hi": st.floats(15.0, 20.0),
    "gps_med_grid_n": st.integers(2, 5),
    "gps_shape_grid": st.tuples(st.floats(0.8, 1.0), st.floats(1.0, 1.2), st.just(0.1)),
    "cure_frac_grid": st.tuples(st.floats(0.1, 0.2), st.floats(0.2, 0.3), st.just(0.1)),
    "cure_unc_med_grid": st.tuples(st.floats(10.0, 11.0), st.floats(11.0, 12.0), st.just(1.0)),
    "cure_unc_shape_grid": st.tuples(st.floats(0.8, 1.0), st.floats(1.0, 1.2), st.just(0.1)),
    "leaky_cure_frac_grid": st.tuples(st.floats(0.1, 0.2), st.floats(0.2, 0.3), st.just(0.1)),
    "leaky_unc_med_grid": st.tuples(st.floats(10.0, 11.0), st.floats(11.0, 12.0), st.just(1.0)),
    "leaky_unc_shape_grid": st.tuples(st.floats(0.8, 1.0), st.floats(1.0, 1.2), st.just(0.1)),
    "leak_grid": st.tuples(st.floats(0.01, 0.02), st.floats(0.02, 0.03), st.just(0.01)),
    "pool_mos_min_at_ia": st.floats(0.0, 5.0),
    "prefilter_tol_ia": st.floats(10.0, 50.0),
    "prefilter_tol_upd": st.floats(10.0, 50.0),
    "prefilter_tol_pr3": st.floats(10.0, 50.0),
    "tol_increment_ia_upd": st.floats(0.0, 5.0),
    "tol_increment_upd_pr3": st.floats(0.0, 5.0),
    "n_total": st.just(126),
    "n_per_arm": st.just(63),
    "enroll_bands": st.just([[0.0, 12.0, 15], [12.0, 24.0, 50], [24.0, 36.0, 56], [36.0, 38.0, 5]]),
    "t_ia": st.just(46.0),
    "t_upd": st.just(58.0),
    "t_pr3": st.just(62.97),
    "n_ev_ia": st.just(60),
    "n_ev_upd": st.just(72),
    "n_ev_pr3": st.just(78),
    "n_ev_final": st.just(80),
})

# ==== Survival Models & Probabilities ====

@settings(max_examples=50, deadline=None)
@given(median=st.floats(1.0, 100.0), shape=st.floats(0.1, 5.0))
def test_weibull_scale_from_median(median, shape):
    scale = regal_fit.weibull_scale_from_median(median, shape)
    save_test_case("weibull_scale_from_median", [median, shape], scale)

@settings(max_examples=50, deadline=None)
@given(t=st.lists(st.floats(0.0, 150.0), min_size=1, max_size=10), scale=st.floats(1.0, 200.0), shape=st.floats(0.1, 5.0))
def test_weibull_S(t, scale, shape):
    S = regal_fit.weibull_S(np.array(t), scale, shape)
    save_test_case("weibull_S", [t, scale, shape], S)

@settings(max_examples=50, deadline=None)
@given(t=st.lists(st.floats(0.0, 150.0), min_size=1, max_size=10), p_cure=st.floats(0.0, 0.95), unc_scale=st.floats(1.0, 200.0), unc_shape=st.floats(0.1, 5.0))
def test_cure_S(t, p_cure, unc_scale, unc_shape):
    S = regal_fit.cure_S(np.array(t), p_cure, unc_scale, unc_shape)
    save_test_case("cure_S", [t, p_cure, unc_scale, unc_shape], S)

@settings(max_examples=50, deadline=None)
@given(t=st.lists(st.floats(0.0, 150.0), min_size=1, max_size=10), p_cure=st.floats(0.0, 0.95), unc_scale=st.floats(1.0, 200.0), unc_shape=st.floats(0.1, 5.0), leak_rate=st.floats(0.0, 0.5))
def test_leaky_cure_S(t, p_cure, unc_scale, unc_shape, leak_rate):
    S = regal_fit.leaky_cure_S(np.array(t), p_cure, unc_scale, unc_shape, leak_rate)
    save_test_case("leaky_cure_S", [t, p_cure, unc_scale, unc_shape, leak_rate], S)

@settings(max_examples=50, deadline=None)
@given(
    scale=st.floats(10.0, 50.0),
    shape=st.floats(0.5, 2.0),
    e_pts=st.lists(st.floats(0.0, 36.0), min_size=5, max_size=5),
    e_weights=st.lists(st.floats(0.0, 10.0), min_size=5, max_size=5),
    t_ia=st.floats(40.0, 45.0),
    t_upd=st.floats(46.0, 55.0),
    t_pr3=st.floats(56.0, 65.0)
)
def test_expected_arm_events(scale, shape, e_pts, e_weights, t_ia, t_upd, t_pr3):
    params_grid = (np.array([scale]), np.array([shape]))
    S_func = regal_fit.weibull_S
    cal_times = np.array([t_ia, t_upd, t_pr3])
    res = regal_fit.expected_arm_events(S_func, params_grid, np.array(e_pts), np.array(e_weights), cal_times, 63, 126)
    save_test_case("expected_arm_events", ["weibull_S", [[scale, shape]], e_pts, e_weights, cal_times.tolist(), 63, 126], res)

# ==== ABC Pre-filtering ====

@settings(max_examples=50, deadline=None)
@given(cfg_dict=cfg_strategy)
def test_abc_prefilter_weibull(cfg_dict):
    cfg = build_cfg(cfg_dict)
    res = regal_fit.abc_prefilter_weibull(cfg)
    save_test_case("abc_prefilter_weibull", [cfg_dict], res)

@settings(max_examples=50, deadline=None)
@given(cfg_dict=cfg_strategy)
def test_abc_prefilter_cure(cfg_dict):
    cfg = build_cfg(cfg_dict)
    res = regal_fit.abc_prefilter_cure(cfg)
    save_test_case("abc_prefilter_cure", [cfg_dict], res)

@settings(max_examples=50, deadline=None)
@given(cfg_dict=cfg_strategy)
def test_abc_prefilter_leaky(cfg_dict):
    cfg = build_cfg(cfg_dict)
    res = regal_fit.abc_prefilter_leaky(cfg)
    save_test_case("abc_prefilter_leaky", [cfg_dict], res)

@settings(max_examples=50, deadline=None)
@given(
    cfg_dict=cfg_strategy,
    bat_ev=st.lists(st.lists(st.floats(10.0, 30.0), min_size=2, max_size=2), min_size=1, max_size=1),
    gps_ev=st.lists(st.lists(st.floats(10.0, 30.0), min_size=2, max_size=2), min_size=1, max_size=1),
    bat_params=st.lists(st.lists(st.floats(1.0, 5.0), min_size=2, max_size=2), min_size=1, max_size=1),
    gps_params=st.lists(st.lists(st.floats(1.0, 5.0), min_size=2, max_size=2), min_size=1, max_size=1),
)
def test_cross_filter(cfg_dict, bat_ev, gps_ev, bat_params, gps_params):
    cfg = build_cfg(cfg_dict)
    # Using Weibull to simplify parameter lengths
    res = regal_fit._cross_filter(cfg, np.array(bat_ev), np.array(gps_ev), bat_params, gps_params, "weibull", None, None)
    save_test_case("_cross_filter", [cfg_dict, bat_ev, gps_ev, bat_params, gps_params, "weibull"], res)

# ==== Simulation Generation & Evaluation ====

rec_strategy = st.fixed_dictionaries({
    "family": st.sampled_from(["weibull", "cure", "leaky"]),
    "bat_scale": st.floats(8.0, 25.0),
    "bat_shape": st.floats(0.6, 1.5),
    "gps_scale": st.floats(10.0, 40.0),
    "gps_shape": st.floats(0.6, 1.5),
    "gps_med": st.floats(8.0, 30.0),
    "cure_frac": st.floats(0.05, 0.5),
    "unc_scale": st.floats(8.0, 30.0),
    "unc_shape": st.floats(0.6, 1.5),
    "leak_yr": st.floats(0.01, 0.15)
})

@settings(max_examples=50, deadline=None)
@given(rec=rec_strategy, cfg_dict=cfg_strategy)
def test_simulate_one_combo(rec, cfg_dict):
    # simulate_one_combo needs specific fields that might not be in basic cfg_strategy
    cfg_dict["n_sims_screen"] = 50
    cfg_dict["n_screen_min_pass"] = 1
    cfg_dict["futility_hr_max"] = 999.0
    cfg_dict["efficacy_hr_min"] = -999.0
    cfg_dict["median_fu_target"] = 0.0
    cfg_dict["median_fu_tol"] = 999.0
    cfg_dict["enforce_no_80_by_today"] = False
    cfg_dict["no_80_slack_months"] = 999.0
    cfg_dict["use_pr3_anchor"] = True
    cfg_dict["tol_ia"] = 9999.0
    cfg_dict["tol_upd"] = 9999.0
    cfg_dict["tol_pr3"] = 9999.0
    n_sims = 10
    seed = 42
    args = (rec, cfg_dict, n_sims, seed)
    res = regal_fit._simulate_one_combo(args)
    save_test_case("_simulate_one_combo", [rec, cfg_dict, n_sims, seed], res)

@settings(max_examples=50, deadline=None)
@given(
    times=st.lists(st.floats(0.1, 100.0), min_size=5, max_size=20),
    events=st.lists(st.integers(0, 1), min_size=5, max_size=20),
    groups=st.lists(st.integers(0, 1), min_size=5, max_size=20)
)
def test_logrank_z(times, events, groups):
    n = min(len(times), len(events), len(groups))
    t = np.array(times[:n])
    e = np.array(events[:n])
    g = np.array(groups[:n])
    if len(np.unique(g)) < 2: return
    z = regal_fit._logrank_z(t, e, g)
    if not np.any(np.isnan(z)):
        save_test_case("_logrank_z", [t.tolist(), e.tolist(), g.tolist()], z)

@settings(max_examples=50, deadline=None)
@given(rec=rec_strategy, n=st.integers(10, 50))
def test_draw_gps_times(rec, n):
    rng = np.random.default_rng(42)
    res = regal_fit._draw_gps_times(rec, n, rng)
    save_test_case("_draw_gps_times", [rec, n, 42], res)

@settings(max_examples=50, deadline=None)
@given(rec=rec_strategy, n=st.integers(10, 50))
def test_draw_bat_times(rec, n):
    rng = np.random.default_rng(42)
    res = regal_fit._draw_bat_times(rec, n, rng)
    save_test_case("_draw_bat_times", [rec, n, 42], res)

@settings(max_examples=50, deadline=None)
@given(
    times=st.lists(st.floats(0.1, 100.0), min_size=5, max_size=20),
    events=st.lists(st.integers(0, 1), min_size=5, max_size=20),
    T=st.floats(1.0, 50.0)
)
def test_km_S_at_T(times, events, T):
    n = min(len(times), len(events))
    t = np.array(times[:n])
    e = np.array(events[:n])
    s = regal_fit._km_S_at_T(t, e, T)
    save_test_case("_km_S_at_T", [t.tolist(), e.tolist(), T], s)
