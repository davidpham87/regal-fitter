import json
import numpy as np
from regal_fit import _simulate_one_combo, Config

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
    "n_sims_screen": 5000,
    "n_screen_min_pass": 1
}

def find_high_acc():
    high_acc_recs = []
    rng = np.random.default_rng(42)
    cfg = Config(**cfg_dict)
    cfg.n_sims_screen = 5000
    
    from regal_fit import _run_sim_chunk
    
    print("Searching for high acceptance configs...")
    
    for i in range(1000):
        bat_med = rng.uniform(8.0, 20.0)
        bat_shape = rng.uniform(0.8, 1.2)
        bat_scale = bat_med / (np.log(2.0) ** (1.0 / bat_shape))

        gps_med = rng.uniform(15.0, 30.0)
        gps_shape = rng.uniform(0.8, 1.2)
        gps_scale = gps_med / (np.log(2.0) ** (1.0 / gps_shape))

        cure_frac = rng.uniform(0.0, 0.4)
        unc_med = rng.uniform(8.0, 20.0)
        unc_shape = rng.uniform(0.8, 1.2)
        unc_scale = unc_med / (np.log(2.0) ** (1.0 / unc_shape))

        leak_yr = rng.uniform(0.0, 0.05)
        
        rec = {
            "family": "leaky",
            "bat_scale": float(bat_scale),
            "bat_shape": float(bat_shape),
            "gps_scale": float(gps_scale),
            "gps_shape": float(gps_shape),
            "cure_frac": float(cure_frac),
            "unc_scale": float(unc_scale),
            "unc_shape": float(unc_shape),
            "leak_yr": float(leak_yr)
        }
        
        acc_screen, _ = _run_sim_chunk(rec, cfg, cfg.n_sims_screen, rng)
        n_accepted = len(acc_screen)
        
        if n_accepted > 0:
            print(f"Iter {i}: Found {n_accepted}/5000 accepted!")
        
        if n_accepted >= 100: # >= 2%
            rec["n_accepted_estimated"] = n_accepted
            high_acc_recs.append(rec)
            print(f"--> SAVED! {n_accepted}/5000")
            
            with open("datasets/high_acc_recs.json", "w") as f:
                json.dump(high_acc_recs, f, indent=2)
                
            if len(high_acc_recs) >= 3:
                break

if __name__ == "__main__":
    find_high_acc()
