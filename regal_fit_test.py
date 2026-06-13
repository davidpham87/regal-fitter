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
