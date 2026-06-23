import json
import os
import numpy as np
from regal_fit import (
    Config,
    abc_prefilter_weibull,
    abc_prefilter_cure,
    abc_prefilter_leaky,
)

cfg = Config()
# Set tiny grids to run instantly
cfg.bat_med_grid = (8.0, 12.0, 2.0)
cfg.bat_shape_grid = (0.8, 1.2, 0.2)
cfg.gps_med_grid_lo = 10.0
cfg.gps_med_grid_hi = 30.0
cfg.gps_med_grid_n = 2
cfg.gps_shape_grid = (0.8, 1.2, 0.2)

cfg.cure_frac_grid = (0.1, 0.3, 0.1)
cfg.cure_unc_med_grid = (10.0, 15.0, 5.0)
cfg.cure_unc_shape_grid = (0.8, 1.2, 0.2)

cfg.leaky_cure_frac_grid = (0.1, 0.3, 0.1)
cfg.leaky_unc_med_grid = (10.0, 15.0, 5.0)
cfg.leaky_unc_shape_grid = (0.8, 1.2, 0.2)
cfg.leak_grid = (0.01, 0.03, 0.01)

cfg.pool_mos_min_at_ia = 0.0
cfg.use_pr3_anchor = True

# Overwrite high tolerances to ensure some accepted combinations
cfg.prefilter_tol_ia = 9999.0
cfg.prefilter_tol_upd = 9999.0
cfg.prefilter_tol_pr3 = 9999.0
cfg.tol_increment_ia_upd = 9999.0
cfg.tol_increment_upd_pr3 = 9999.0

res_w = abc_prefilter_weibull(cfg)
res_c = abc_prefilter_cure(cfg)
res_l = abc_prefilter_leaky(cfg)


def clean_record(r):
    return {
        k: float(v)
        if isinstance(v, (np.floating, float))
        else int(v)
        if isinstance(v, (np.integer, int))
        else v
        for k, v in r.items()
    }


out = {
    "weibull": [clean_record(r) for r in res_w],
    "cure": [clean_record(r) for r in res_c],
    "leaky": [clean_record(r) for r in res_l],
}

os.makedirs("datasets", exist_ok=True)
with open("datasets/py_prefilter_results.json", "w") as f:
    json.dump(out, f, indent=2)

print("Prefilter checks complete.")
print(f"Weibull accepted count: {len(res_w)}")
print(f"Cure accepted count: {len(res_c)}")
print(f"Leaky accepted count: {len(res_l)}")
