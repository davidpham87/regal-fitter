import json
import sqlite3
import subprocess
import numpy as np
import os
import math
import uuid
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
    "n_sims_screen": 500,
    "n_screen_min_pass": 1
}

def init_db():
    db_path = "datasets/combo_stats.db"
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("""CREATE TABLE IF NOT EXISTS combo_stats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        test_id TEXT,
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

def run_python_simulation(rec, cfg_dict, n_sims, seed):
    py_args = (rec, cfg_dict, n_sims, seed)
    return _simulate_one_combo(py_args)

def run_cljs_simulation(rec, cfg_dict, n_sims, seed, chunk_size, payload_path, out_path):
    c_size = 5000
    sims_done = 0
    total_accepted = 0
    agg = {}
    
    while sims_done < n_sims:
        current_chunk = min(c_size, n_sims - sims_done)
        payload = {
            "rec": rec,
            "cfg_dict": cfg_dict,
            "n_sims": current_chunk,
            "seed": seed + sims_done,
            "chunk_size": current_chunk
        }
        with open(payload_path, "w") as f:
            json.dump(payload, f)
        
        subprocess.run(["node", "out/run_combo.js", payload_path, out_path], check=True)
        
        with open(out_path, "r") as f:
            chunk_out = json.load(f)
            
        if chunk_out is not None:
            n_acc = chunk_out.get("n_accepted", 0)
            if n_acc > 0:
                for k in ["p_reach80", "median_hr_final", "p_success_overall"]:
                    val = chunk_out.get(k)
                    if val is not None and not math.isnan(val):
                        agg[k] = agg.get(k, 0.0) + val * n_acc
                total_accepted += n_acc
                if "acceptance_rate" not in agg:
                    agg.update({k: v for k, v in chunk_out.items() if k not in ["p_reach80", "median_hr_final", "p_success_overall", "n_accepted"]})
        
        sims_done += current_chunk

    if total_accepted == 0:
        return None
        
    for k in ["p_reach80", "median_hr_final", "p_success_overall"]:
        if k in agg:
            agg[k] = agg[k] / total_accepted
    agg["n_accepted"] = total_accepted
    return agg

def record_results_to_db(db_path, test_id, py_out, cljs_out):
    conn = sqlite3.connect(db_path, timeout=30.0)
    cur = conn.cursor()

    if py_out is not None:
        cur.execute("INSERT INTO combo_stats (test_id, env, p_reach80, median_hr_final, p_success_overall, n_accepted) VALUES (?, ?, ?, ?, ?, ?)",
            (test_id, "python", py_out.get("p_reach80"), py_out.get("median_hr_final"), py_out.get("p_success_overall"), py_out.get("n_accepted"))
        )
    if cljs_out is not None:
        cur.execute("INSERT INTO combo_stats (test_id, env, p_reach80, median_hr_final, p_success_overall, n_accepted) VALUES (?, ?, ?, ?, ?, ?)",
            (test_id, "cljs", cljs_out.get("p_reach80"), cljs_out.get("median_hr_final"), cljs_out.get("p_success_overall"), cljs_out.get("n_accepted"))
        )
    conn.commit()
    conn.close()

@settings(max_examples=3, deadline=None)
@given(rec=rec_strategy())
def test_simulate_one_combo(rec):
    n_sims = 50000
    seed = 42
    # Chunking happens dynamically now
    n_screen = min(cfg_dict.get("n_sims_screen", 500), n_sims)
    chunk_size = 5000

    py_out = run_python_simulation(rec, cfg_dict, n_sims, seed)

    test_id = str(uuid.uuid4())
    payload_path = f"datasets/combo_payload_{test_id}.json"
    out_path = f"datasets/combo_out_{test_id}.json"

    try:
        cljs_out = run_cljs_simulation(
            rec, cfg_dict, n_sims, seed, chunk_size,
            payload_path=payload_path,
            out_path=out_path
        )
    finally:
        if os.path.exists(payload_path): os.remove(payload_path)
        if os.path.exists(out_path): os.remove(out_path)

    record_results_to_db("datasets/combo_stats.db", test_id, py_out, cljs_out)
