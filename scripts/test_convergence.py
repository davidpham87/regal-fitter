import json
import sqlite3
import subprocess
import numpy as np
from scipy import stats
from hypothesis import given, settings, strategies as st
from regal_fit import _run_sim_chunk, Config

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

cfg = Config(
    n_total=126,
    n_per_arm=63,
    enroll_bands=[
        [0.0, 12.0, 15],
        [12.0, 24.0, 50],
        [24.0, 36.0, 56],
        [36.0, 38.0, 5]
    ],
    t_ia=46.0,
    t_upd=58.0,
    t_pr3=62.97,
    n_ev_ia=60,
    n_ev_upd=72,
    n_ev_pr3=78,
    n_ev_final=80,
    use_pr3_anchor=True,
    pool_mos_min_at_ia=12.0,
    median_fu_target=13.5,
    median_fu_tol=3.0,
    futility_hr_max=0.83,
    efficacy_hr_min=0.35,
    tol_ia=4.0,
    tol_upd=4.0,
    tol_pr3=2.0,
    tol_increment_ia_upd=3.0,
    tol_increment_upd_pr3=2.0,
    enforce_no_80_by_today=True,
    t_now=63.0,
    no_80_slack_months=1.0
)

# Compile CLJS once before tests run
subprocess.run(["npx", "shadow-cljs", "compile", "convergence-test"], check=True)

@settings(max_examples=10, deadline=None) # Reduce max_examples to keep runtime reasonable
@given(rec=rec_strategy())
def test_convergence_distributions(rec):
    # 1. Generate Python Distribution
    rng = np.random.default_rng(42)
    n_sims = 1000
    
    accepted_stats, _ = _run_sim_chunk(rec, cfg, n_sims, rng)
    py_hr_finals = [s["hr_final"] for s in accepted_stats if not np.isnan(s.get("hr_final", np.nan))]
    
    # Write Python DB
    db_path = "datasets/convergence.db"
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS convergence_py (id INTEGER PRIMARY KEY, hr_final REAL)")
    cur.execute("DELETE FROM convergence_py")
    cur.executemany("INSERT INTO convergence_py (hr_final) VALUES (?)", [(hr,) for hr in py_hr_finals])
    conn.commit()
    conn.close()
    
    # 2. Serialize rec for CLJS
    with open("datasets/convergence_rec.json", "w") as f:
        json.dump(rec, f)
        
    # 3. Generate CLJS Distribution
    subprocess.run(["node", "out/convergence_test.js"], check=True)
    
    # 4. Analyze
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    cur.execute("SELECT hr_final FROM convergence_py")
    py_dist = np.array([row[0] for row in cur.fetchall()])
    
    cur.execute("SELECT hr_final FROM convergence_cljs")
    cljs_dist = np.array([row[0] for row in cur.fetchall()])
    conn.close()
    
    if len(py_dist) < 10 or len(cljs_dist) < 10:
        # Not enough passing simulations to do a meaningful KS test. This is expected for some configs.
        return
        
    stat, p_value = stats.ks_2samp(py_dist, cljs_dist)
    
    # We assert p_value is above 0.01 (99% confidence the distributions are NOT completely different)
    assert p_value > 0.01, f"KS Test failed! stat={stat}, p_value={p_value}, py_mean={py_dist.mean()}, cljs_mean={cljs_dist.mean()}"
