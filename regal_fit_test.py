import os
import json
import sqlite3
import numpy as np
from hypothesis import given, settings
import hypothesis.strategies as st
import pytest

import regal_fit

DB_PATH = "datasets/generative_tests.db"

# Ensure datasets folder exists
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

# In-memory list to store all generated test cases
TEST_CASES = []


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("DROP TABLE IF EXISTS survival_tests")
    cursor.execute(
        """
        CREATE TABLE survival_tests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            func TEXT NOT NULL,
            args_json TEXT NOT NULL,
            expected_json TEXT NOT NULL
        )
    """
    )
    conn.commit()
    conn.close()


init_db()


def save_test_case(func_name, args, expected):
    # Convert numpy types to native Python types for JSON serialization
    def serialize(v):
        if isinstance(v, np.ndarray):
            return [float(x) for x in v]
        elif isinstance(v, (np.floating, float)):
            return float(v)
        elif isinstance(v, (np.integer, int)):
            return int(v)
        elif isinstance(v, list):
            return [serialize(x) for x in v]
        return v

    args_ser = serialize(args)
    expected_ser = serialize(expected)
    TEST_CASES.append(
        (func_name, json.dumps(args_ser), json.dumps(expected_ser))
    )


@pytest.fixture(scope="session", autouse=True)
def write_to_db_after_tests():
    yield
    # Write everything in a single transaction at the end of the session
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.executemany(
        "INSERT INTO survival_tests (func, args_json, expected_json) VALUES (?, ?, ?)",
        TEST_CASES,
    )
    conn.commit()
    conn.close()


@settings(max_examples=50000)
@given(
    median=st.floats(min_value=1.0, max_value=100.0),
    shape=st.floats(min_value=0.1, max_value=5.0),
)
def test_weibull_scale_from_median(median, shape):
    scale = regal_fit.weibull_scale_from_median(median, shape)
    save_test_case("weibull_scale_from_median", [median, shape], scale)


@settings(max_examples=50000)
@given(
    t=st.lists(
        st.floats(min_value=0.0, max_value=150.0), min_size=1, max_size=10
    ),
    scale=st.floats(min_value=1.0, max_value=200.0),
    shape=st.floats(min_value=0.1, max_value=5.0),
)
def test_weibull_S(t, scale, shape):
    t_arr = np.array(t)
    S = regal_fit.weibull_S(t_arr, scale, shape)
    save_test_case("weibull_S", [t, scale, shape], S)


@settings(max_examples=50000)
@given(
    t=st.lists(
        st.floats(min_value=0.0, max_value=150.0), min_size=1, max_size=10
    ),
    p_cure=st.floats(min_value=0.0, max_value=0.95),
    unc_scale=st.floats(min_value=1.0, max_value=200.0),
    unc_shape=st.floats(min_value=0.1, max_value=5.0),
)
def test_cure_S(t, p_cure, unc_scale, unc_shape):
    t_arr = np.array(t)
    S = regal_fit.cure_S(t_arr, p_cure, unc_scale, unc_shape)
    save_test_case("cure_S", [t, p_cure, unc_scale, unc_shape], S)


@settings(max_examples=50000)
@given(
    t=st.lists(
        st.floats(min_value=0.0, max_value=150.0), min_size=1, max_size=10
    ),
    p_cure=st.floats(min_value=0.0, max_value=0.95),
    unc_scale=st.floats(min_value=1.0, max_value=200.0),
    unc_shape=st.floats(min_value=0.1, max_value=5.0),
    leak_rate_yr=st.floats(min_value=0.0, max_value=0.50),
)
def test_leaky_cure_S(t, p_cure, unc_scale, unc_shape, leak_rate_yr):
    t_arr = np.array(t)
    S = regal_fit.leaky_cure_S(t_arr, p_cure, unc_scale, unc_shape, leak_rate_yr)
    save_test_case(
        "leaky_cure_S", [t, p_cure, unc_scale, unc_shape, leak_rate_yr], S
    )


def test_stage1_prefilters():
    cfg = regal_fit.Config()
    cfg.bat_med_grid = (8.0, 10.0, 2.0)
    cfg.bat_shape_grid = (0.8, 1.0, 0.2)
    cfg.gps_med_grid_lo = 10.0
    cfg.gps_med_grid_hi = 20.0
    cfg.gps_med_grid_n = 2
    cfg.gps_shape_grid = (0.8, 1.0, 0.2)
    cfg.cure_frac_grid = (0.1, 0.2, 0.1)
    cfg.cure_unc_med_grid = (10.0, 11.0, 1.0)
    cfg.cure_unc_shape_grid = (0.8, 1.0, 0.2)
    cfg.leaky_cure_frac_grid = (0.1, 0.2, 0.1)
    cfg.leaky_unc_med_grid = (10.0, 11.0, 1.0)
    cfg.leaky_unc_shape_grid = (0.8, 1.0, 0.2)
    cfg.leak_grid = (0.01, 0.02, 0.01)
    cfg.pool_mos_min_at_ia = 0.0
    cfg.prefilter_tol_ia = 999.0
    cfg.prefilter_tol_upd = 999.0

    res_w = regal_fit.abc_prefilter_weibull(cfg)
    res_c = regal_fit.abc_prefilter_cure(cfg)
    res_l = regal_fit.abc_prefilter_leaky(cfg)

    assert len(res_w) > 0
    assert len(res_c) > 0
    assert len(res_l) > 0


# Strategies for generating random inputs for simulation test
rec_strategy = st.fixed_dictionaries({
    "family": st.sampled_from(["weibull", "cure", "leaky"]),
    "bat_scale": st.floats(min_value=8.0, max_value=25.0),
    "bat_shape": st.floats(min_value=0.6, max_value=1.5),
    "gps_scale": st.floats(min_value=10.0, max_value=40.0),
    "gps_shape": st.floats(min_value=0.6, max_value=1.5),
    "gps_med": st.floats(min_value=8.0, max_value=30.0),
    "cure_frac": st.floats(min_value=0.05, max_value=0.5),
    "unc_scale": st.floats(min_value=8.0, max_value=30.0),
    "unc_shape": st.floats(min_value=0.6, max_value=1.5),
    "leak_yr": st.floats(min_value=0.01, max_value=0.15)
})

cfg_dict_strategy = st.fixed_dictionaries({
    "n_total": st.just(126),
    "n_per_arm": st.just(63),
    "enroll_bands": st.just([
        [0.0, 12.0, 15],
        [12.0, 24.0, 50],
        [24.0, 36.0, 56],
        [36.0, 38.0, 5],
    ]),
    "t_ia": st.floats(min_value=43.0, max_value=48.0),
    "t_upd": st.floats(min_value=55.0, max_value=60.0),
    "t_pr3": st.floats(min_value=61.0, max_value=64.0),
    "n_ev_ia": st.integers(min_value=55, max_value=65),
    "n_ev_upd": st.integers(min_value=68, max_value=76),
    "n_ev_pr3": st.integers(min_value=74, max_value=82),
    "n_ev_final": st.integers(min_value=78, max_value=84),
    "use_pr3_anchor": st.booleans(),
    "tol_ia": st.just(9999.0),
    "tol_upd": st.just(9999.0),
    "tol_pr3": st.just(9999.0),
    "tol_increment_ia_upd": st.just(9999.0),
    "tol_increment_upd_pr3": st.just(9999.0),
    "futility_hr_max": st.just(999.0),
    "efficacy_hr_min": st.just(-999.0),
    "pool_mos_min_at_ia": st.just(0.0),
    "median_fu_target": st.just(0.0),
    "median_fu_tol": st.just(999.0),
    "enforce_no_80_by_today": st.just(False),
    "no_80_slack_months": st.just(999.0),
    "n_sims_screen": st.just(50),
    "n_screen_min_pass": st.just(1)
})


@settings(max_examples=50, deadline=None)
@given(rec=rec_strategy, cfg_dict=cfg_dict_strategy)
def test_stage2_simulation(rec, cfg_dict):
    n_sims = 500
    seed = 42
    args = (rec, cfg_dict, n_sims, seed)
    res = regal_fit._simulate_one_combo(args)
    save_test_case("simulation", [rec, cfg_dict, n_sims, seed], res)
