import json
import numpy as np
from regal_fit import _simulate_one_combo

def run():
    rec = {
        "family": "weibull",
        "bat_scale": 12.0,
        "bat_shape": 0.9,
        "gps_scale": 18.0,
        "gps_shape": 0.95,
        "gps_med": 15.0
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
        "tol_ia": 9999,
        "tol_upd": 9999,
        "tol_pr3": 9999,
        "tol_increment_ia_upd": 9999,
        "tol_increment_upd_pr3": 9999,
        "futility_hr_max": 999.0,
        "efficacy_hr_min": -999.0,
        "pool_mos_min_at_ia": 0.0,
        "median_fu_target": 0.0,
        "median_fu_tol": 999.0,
        "enforce_no_80_by_today": False,
        "no_80_slack_months": 999.0,
        "n_sims_screen": 50,
        "n_screen_min_pass": 1
    }

    args = (rec, cfg_dict, 5000, 42)
    res = _simulate_one_combo(args)

    def clean(val):
        if isinstance(val, (np.floating, float)):
            return float(val) if not np.isnan(val) else None
        if isinstance(val, (np.integer, int)):
            return int(val)
        return val

    cleaned_res = {k: clean(v) for k, v in res.items()}
    with open("py_5000.json", "w") as f:
        json.dump(cleaned_res, f, indent=2)
    print("Python simulation complete.")

if __name__ == "__main__":
    run()
