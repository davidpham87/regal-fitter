import os
import json
import sqlite3
import random
import numpy as np
from concurrent.futures import ProcessPoolExecutor
from regal_fit import _simulate_one_combo

DB_PATH = "datasets/generative_tests.db"


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


def generate_one_case_args():
    rec = {
        "family": random.choice(["weibull", "cure", "leaky"]),
        "bat_scale": random.uniform(8.0, 25.0),
        "bat_shape": random.uniform(0.6, 1.5),
        "gps_scale": random.uniform(10.0, 40.0),
        "gps_shape": random.uniform(0.6, 1.5),
        "gps_med": random.uniform(8.0, 30.0),
        "cure_frac": random.uniform(0.05, 0.5),
        "unc_scale": random.uniform(8.0, 30.0),
        "unc_shape": random.uniform(0.6, 1.5),
        "leak_yr": random.uniform(0.01, 0.15),
    }
    cfg_dict = {
        "n_total": 126,
        "n_per_arm": 63,
        "enroll_bands": [
            [0.0, 12.0, 15],
            [12.0, 24.0, 50],
            [24.0, 36.0, 56],
            [36.0, 38.0, 5],
        ],
        "t_ia": 46.0,
        "t_upd": 58.0,
        "t_pr3": 62.97,
        "n_ev_ia": 60,
        "n_ev_upd": 72,
        "n_ev_pr3": 78,
        "n_ev_final": 80,
        "use_pr3_anchor": True,
        "tol_ia": 9999.0,
        "tol_upd": 9999.0,
        "tol_pr3": 9999.0,
        "tol_increment_ia_upd": 9999.0,
        "tol_increment_upd_pr3": 9999.0,
        "futility_hr_max": 999.0,
        "efficacy_hr_min": -999.0,
        "pool_mos_min_at_ia": 0.0,
        "median_fu_target": 0.0,
        "median_fu_tol": 999.0,
        "enforce_no_80_by_today": False,
        "no_80_slack_months": 999.0,
        "n_sims_screen": 50,
        "n_screen_min_pass": 1,
    }
    return rec, cfg_dict, 500, 42


def worker_task(i):
    rec, cfg_dict, n_sims, seed = generate_one_case_args()
    res = _simulate_one_combo((rec, cfg_dict, n_sims, seed))

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

    args_ser = serialize([rec, cfg_dict, n_sims, seed])
    res_ser = serialize(res)
    return "simulation", json.dumps(args_ser), json.dumps(res_ser)


def main():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    init_db()

    num_cases = 10000
    print(f"Generating {num_cases} simulation test cases in parallel...")

    results = []
    with ProcessPoolExecutor() as executor:
        futures = [executor.submit(worker_task, i) for i in range(num_cases)]
        for idx, fut in enumerate(futures):
            results.append(fut.result())
            if (idx + 1) % 1000 == 0:
                print(f"  Completed {idx + 1}/{num_cases} cases...")

    print("Writing cases to SQLite database...")
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.executemany(
        "INSERT INTO survival_tests (func, args_json, expected_json) VALUES (?, ?, ?)",
        results,
    )
    conn.commit()
    conn.close()
    print("Successfully completed parallel test generation.")


if __name__ == "__main__":
    main()
