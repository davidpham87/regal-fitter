
import numpy as np
import json
from regal_fit import (
    weibull_S, weibull_scale_from_median, cure_S, leaky_cure_S,
    expected_enrollment_times, expected_arm_events, Config
)
from regal_stress_test import get_s_curve_enrollment_bands, get_manual_enrollment_bands, km_s_at_t_vectorized

def generate_truth():
    cfg = Config()

    # 1. weibull_scale_from_median
    test_medians = [8.0, 12.0, 15.0]
    test_shapes = [0.8, 1.0, 1.2]
    weibull_scales = []
    for m in test_medians:
        for s in test_shapes:
            weibull_scales.append({
                "median": m,
                "shape": s,
                "scale": float(weibull_scale_from_median(m, s))
            })

    # 2. survival functions
    t_vals = np.array([0.0, 6.0, 12.0, 24.0, 48.0])
    scale = 15.0
    shape = 1.0
    weibull_surv = weibull_S(t_vals, scale, shape).tolist()

    cure_p = 0.2
    cure_surv = cure_S(t_vals, cure_p, scale, shape).tolist()

    leak_yr = 0.05
    leaky_surv = leaky_cure_S(t_vals, cure_p, scale, shape, leak_yr).tolist()

    # 3. expected_arm_events
    e_pts, e_weights = expected_enrollment_times(cfg)
    t_pts = np.array([cfg.t_ia, cfg.t_upd])
    # Use a small grid for testing
    bat_scales = np.array([weibull_scale_from_median(10.0, 1.0)])
    bat_shapes = np.array([1.0])

    bat_ev = expected_arm_events(
        weibull_S, (bat_scales, bat_shapes),
        e_pts, e_weights, t_pts, cfg.n_per_arm, cfg.n_total)

    # 4. Stress test enrollment
    s_curve_bands = get_s_curve_enrollment_bands(126, 38, 19, k=0.3)
    manual_bands = get_manual_enrollment_bands(126)

    # 5. KM Survival
    # Create dummy data for KM
    obs_t = np.array([[5.0, 10.0, 15.0, 20.0, 25.0]])
    is_ev = np.array([[1, 0, 1, 1, 0]]) # 1 if event, 0 if censored
    km_12 = km_s_at_t_vectorized(obs_t, is_ev, 12.0)[0]
    km_20 = km_s_at_t_vectorized(obs_t, is_ev, 20.0)[0]

    truth = {
        "weibull_scales": weibull_scales,
        "t_vals": t_vals.tolist(),
        "weibull_surv": {
            "scale": scale,
            "shape": shape,
            "results": weibull_surv
        },
        "cure_surv": {
            "p_cure": cure_p,
            "scale": scale,
            "shape": shape,
            "results": cure_surv
        },
        "leaky_surv": {
            "p_cure": cure_p,
            "scale": scale,
            "shape": shape,
            "leak_yr": leak_yr,
            "results": leaky_surv
        },
        "expected_arm_events": {
            "bat_med": 10.0,
            "bat_shape": 1.0,
            "results": bat_ev.tolist()
        },
        "enrollment": {
            "s_curve": s_curve_bands,
            "manual": manual_bands
        },
        "km_survival": {
            "obs_t": obs_t.tolist(),
            "is_ev": is_ev.tolist(),
            "targets": [12.0, 20.0],
            "results": [float(km_12), float(km_20)]
        }
    }

    with open("truth.json", "w") as f:
        json.dump(truth, f, indent=2)

if __name__ == "__main__":
    generate_truth()
