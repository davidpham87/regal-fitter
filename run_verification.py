import json
import numpy as np
from regal_fit import _simulate_one_combo

def run():
    with open("verify_configs.json", "r") as f:
        configs = json.load(f)

    results = []
    for c in configs:
        name = c["name"]
        rec = c["rec"]
        cfg = c["cfg"]
        cfg.pop("ignore_prefilter?", None)
        cfg.pop("ignore_prefilter", None)
        print(f"Running Python simulation for: {name}...")

        args = (rec, cfg, 5000, 42)
        res = _simulate_one_combo(args)

        def clean(val):
            if isinstance(val, (np.floating, float)):
                return float(val) if not np.isnan(val) else None
            if isinstance(val, (np.integer, int)):
                return int(val)
            return val

        cleaned_res = {k: clean(v) for k, v in res.items()}
        results.append({
            "name": name,
            "res": cleaned_res
        })

    with open("py_verification_results.json", "w") as f:
        json.dump(results, f, indent=2)
    print("Python verification simulation complete.")

if __name__ == "__main__":
    run()
