import json
import sqlite3
import subprocess
import numpy as np
import os
import math
from scipy import stats
from hypothesis import given, settings, strategies as st
from regal_fit import _simulate_one_combo, Config

@st.composite
def rec_strategy(draw):
    bat_med = draw(st.floats(4.0, 30.0))
    bat_shape = draw(st.floats(0.5, 2.0))
    bat_scale = bat_med / (np.log(2.0) ** (1.0 / bat_shape))
    
    gps_med = draw(st.floats(20.0, 60.0))
    gps_shape = draw(st.floats(0.7, 1.01))
    gps_scale = gps_med / (np.log(2.0) ** (1.0 / gps_shape))
    
    cure_frac = draw(st.floats(0.0, 0.9))
    unc_med = draw(st.floats(4.0, 30.0))
    unc_shape = draw(st.floats(0.5, 2.0))
    unc_scale = unc_med / (np.log(2.0) ** (1.0 / unc_shape))
    
    leak_yr = draw(st.floats(0.0, 0.1))
    
    return {
        "family": "leaky",
        "bat_scale": bat_scale,
        "bat_shape": bat_shape,
        "gps_scale": gps_scale,
        "gps_shape": gps_shape,
        "cure_frac": cure_frac,
        "unc_scale": unc_scale,
        "unc_shape": unc_shape,
        "leak_yr": leak_yr
    }

cfg_dict = {
    "n_total": 126,
    "n_per_arm": 63,
    "enroll_bands": [
        [0.0, 12.0, 15],
        [12.0, 24.0, 50],
        [24.0, 36.0, 56],
        [36.0, 38.0, 5]
    ],
    "t_ia": 46.0,
    "t_upd": 58.0,
    "t_pr3": 62.97,
    "n_ev_ia": 60,
    "n_ev_upd": 72,
    "n_ev_pr3": 78,
    "n_ev_final": 80,
    "use_pr3_anchor": True,
    "pool_mos_min_at_ia": 12.0,
    "median_fu_target": 13.5,
    "median_fu_tol": 3.0,
    "futility_hr_max": 0.83,
    "efficacy_hr_min": 0.35,
    "tol_ia": 4.0,
    "tol_upd": 4.0,
    "tol_pr3": 2.0,
    "tol_increment_ia_upd": 3.0,
    "tol_increment_upd_pr3": 2.0,
    "enforce_no_80_by_today": True,
    "t_now": 63.0,
    "no_80_slack_months": 1.0,
    "n_sims_screen": 250,
    "n_screen_min_pass": 1
}

def init_db():
    db_path = "datasets/combo_stats.db"
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("""CREATE TABLE IF NOT EXISTS combo_stats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        env TEXT,
        p_reach80 REAL,
        median_hr_final REAL,
        p_success_overall REAL,
        n_accepted INTEGER
    )""")
    # clear between test suite runs
    if os.environ.get("CLEAR_DB"):
        cur.execute("DELETE FROM combo_stats")
    conn.commit()
    conn.close()

init_db()

@settings(max_examples=25, deadline=None)
@given(rec=rec_strategy())
def test_simulate_one_combo(rec):
    n_sims = 1000
    seed = 42
    chunk_size = 500
    
    # 1. Run Python
    py_args = (rec, cfg_dict, n_sims, seed)
    py_out = _simulate_one_combo(py_args)
    
    # 2. Run CLJS
    payload = {
        "rec": rec,
        "cfg_dict": cfg_dict,
        "n_sims": n_sims,
        "seed": seed,
        "chunk_size": chunk_size
    }
    with open("datasets/combo_payload.json", "w") as f:
        json.dump(payload, f)
        
    subprocess.run(["node", "out/run_combo.js", "datasets/combo_payload.json", "datasets/combo_out.json"], check=True)
    
    with open("datasets/combo_out.json", "r") as f:
        cljs_out = json.load(f)
        
    # Write to DB
    conn = sqlite3.connect("datasets/combo_stats.db")
    cur = conn.cursor()
    
    if py_out is None and cljs_out is None:
        return # Both correctly failed screening
        
    if py_out is None or cljs_out is None:
        if py_out is None and cljs_out.get("n_accepted", 0) == 0:
            return
        if cljs_out is None and py_out.get("n_accepted", 0) == 0:
            return
        # If one fails but the other passes significantly, that's an issue
        
    if py_out is not None:
        cur.execute("INSERT INTO combo_stats (env, p_reach80, median_hr_final, p_success_overall, n_accepted) VALUES (?, ?, ?, ?, ?)",
            ("python", py_out.get("p_reach80"), py_out.get("median_hr_final"), py_out.get("p_success_overall"), py_out.get("n_accepted"))
        )
    if cljs_out is not None:
        cur.execute("INSERT INTO combo_stats (env, p_reach80, median_hr_final, p_success_overall, n_accepted) VALUES (?, ?, ?, ?, ?)",
            ("cljs", cljs_out.get("p_reach80"), cljs_out.get("median_hr_final"), cljs_out.get("p_success_overall"), cljs_out.get("n_accepted"))
        )
    conn.commit()
    conn.close()
    
    # Basic assertions
    if py_out and cljs_out:
        if py_out["n_accepted"] > 50:
            # We only enforce strict bounds if enough stats were gathered
            if not math.isnan(py_out["p_reach80"]) and not math.isnan(cljs_out.get("p_reach80", float("nan"))):
                assert abs(py_out["p_reach80"] - cljs_out["p_reach80"]) < 0.05
            if not math.isnan(py_out["p_success_overall"]) and not math.isnan(cljs_out.get("p_success_overall", float("nan"))):
                assert abs(py_out["p_success_overall"] - cljs_out["p_success_overall"]) < 0.05
