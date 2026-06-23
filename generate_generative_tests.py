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
            return [float(x) for x in v]
        elif isinstance(v, (np.floating, float)):
            return float(v)
        elif isinstance(v, (np.integer, int)):
            return int(v)
        elif isinstance(v, list):
            return [serialize(x) for x in v]
        elif isinstance(v, tuple):
            return [serialize(x) for x in v]
        elif isinstance(v, dict):
            return {k: serialize(val) for k, val in v.items()}
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

# Survival Models
@settings(max_examples=50)
@given(median=st.floats(1.0, 100.0), shape=st.floats(0.1, 5.0))
def test_weibull_scale_from_median(median, shape):
    scale = regal_fit.weibull_scale_from_median(median, shape)
    save_test_case("weibull_scale_from_median", [median, shape], scale)

@settings(max_examples=50)
@given(t=st.lists(st.floats(0.0, 150.0), min_size=1, max_size=10), scale=st.floats(1.0, 200.0), shape=st.floats(0.1, 5.0))
def test_weibull_S(t, scale, shape):
    S = regal_fit.weibull_S(np.array(t), scale, shape)
    save_test_case("weibull_S", [t, scale, shape], S)

@settings(max_examples=50)
@given(t=st.lists(st.floats(0.0, 150.0), min_size=1, max_size=10), p_cure=st.floats(0.0, 0.95), unc_scale=st.floats(1.0, 200.0), unc_shape=st.floats(0.1, 5.0))
def test_cure_S(t, p_cure, unc_scale, unc_shape):
    S = regal_fit.cure_S(np.array(t), p_cure, unc_scale, unc_shape)
    save_test_case("cure_S", [t, p_cure, unc_scale, unc_shape], S)

@settings(max_examples=50)
@given(t=st.lists(st.floats(0.0, 150.0), min_size=1, max_size=10), p_cure=st.floats(0.0, 0.95), unc_scale=st.floats(1.0, 200.0), unc_shape=st.floats(0.1, 5.0), leak_rate=st.floats(0.0, 0.5))
def test_leaky_cure_S(t, p_cure, unc_scale, unc_shape, leak_rate):
    S = regal_fit.leaky_cure_S(np.array(t), p_cure, unc_scale, unc_shape, leak_rate)
    save_test_case("leaky_cure_S", [t, p_cure, unc_scale, unc_shape, leak_rate], S)

# Stats functions
@settings(max_examples=50)
@given(
    times=st.lists(st.floats(0.1, 100.0), min_size=5, max_size=20),
    events=st.lists(st.integers(0, 1), min_size=5, max_size=20),
    groups=st.lists(st.integers(0, 1), min_size=5, max_size=20)
)
def test_logrank_z(times, events, groups):
    # Ensure same length
    n = min(len(times), len(events), len(groups))
    # logrank_z assumes arrays
    t = np.array(times[:n])
    e = np.array(events[:n])
    g = np.array(groups[:n])
    if len(np.unique(g)) < 2: return # Needs two groups
    z = regal_fit._logrank_z(t, e, g)
    if not np.isnan(z):
        save_test_case("_logrank_z", [t.tolist(), e.tolist(), g.tolist()], z)

@settings(max_examples=50)
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

# TODO: the remaining functions for expected events, prefilters, random draws
