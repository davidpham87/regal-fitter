# Python to ClojureScript Function Mapping

Here is the mapping between the Python functions in `regal_fit.py` and their corresponding ClojureScript implementations.

Note that functions related to plotting or top-level orchestration (like multiprocessing chunks) generally don't have direct 1-to-1 mappings in the ClojureScript translation because plotting stays in Python and parallelization is handled by Node.js worker shell scripts.

### Core Utilities & Configuration
| Python (`regal_fit.py`)           | ClojureScript Namespace    | ClojureScript Function      | Notes                                                                                           |
|:----------------------------------|:---------------------------|:----------------------------|:------------------------------------------------------------------------------------------------|
| `cfg_today_month()`               | *N/A*                      | *N/A*                       | Configuration processing/time extraction handled natively without a dedicated utility function. |
| `make_enrollment_times(cfg, rng)` | *N/A*                      | *N/A*                       | Random enrollment generation is done directly inside the vectorized loop generation.            |
| `expected_enrollment_times(cfg)`  | `app.regal-fit.enrollment` | `expected-enrollment-times` | Direct translation.                                                                             |
| `month_to_calendar_label(...)`    | *N/A*                      | *N/A*                       | Python-only plotting utility.                                                                   |

### Survival Models & Probabilities

| Python (`regal_fit.py`)          | ClojureScript Namespace    | ClojureScript Function            |
|:---------------------------------|:---------------------------|:----------------------------------|
| `weibull_S(t, scale, shape)`     | `app.regal-fit.survival`   | `weibull-survival-probability`    |
| `weibull_scale_from_median(...)` | `app.regal-fit.survival`   | `weibull-scale-from-median`       |
| `cure_S(...)`                    | `app.regal-fit.survival`   | `cure-survival-probability`       |
| `leaky_cure_S(...)`              | `app.regal-fit.survival`   | `leaky-cure-survival-probability` |
| `expected_arm_events(...)`       | `app.regal-fit.enrollment` | `expected-arm-events`             |

### Approximate Bayesian Computation (ABC) Pre-filtering

| Python (`regal_fit.py`)      | ClojureScript Namespace   | ClojureScript Function    |
|:-----------------------------|:--------------------------|:--------------------------|
| `abc_prefilter_weibull(cfg)` | `app.regal-fit.prefilter` | `apply-prefilter-weibull` |
| `abc_prefilter_cure(cfg)`    | `app.regal-fit.prefilter` | `apply-prefilter-cure`    |
| `abc_prefilter_leaky(cfg)`   | `app.regal-fit.prefilter` | `apply-prefilter-leaky`   |
| `_cross_filter(...)`         | `app.regal-fit.prefilter` | `cross-filter`            |

### Simulation Generation & Evaluation

| Python (`regal_fit.py`)             | ClojureScript Namespace               | ClojureScript Function      | Notes                                                                        |
|:------------------------------------|:--------------------------------------|:----------------------------|:-----------------------------------------------------------------------------|
| `run_family(...)`                   | *N/A*                                 | *N/A*                       | High-level orchestrator; logic moved to Node worker shells.                  |
| `_simulate_one_combo(args)`         | `app.regal-fit.simulation-vectorized` | `simulate-one-combo`        | Main entry point for the optimized parallel arrays simulations.              |
| `_run_sim_chunk(...)`               | `app.regal-fit.simulation-vectorized` | `simulate-one-combo-2d`     | Handles a 2D chunk of samples at once instead of individual iterators.       |
| `_proc_chunk(start_idx)`            | *N/A*                                 | *N/A*                       | Chunking is managed externally via Node CLI arguments and shell scripts now. |
| `_logrank_z(times, events, groups)` | `app.regal-fit.stats`                 | `logrank-z`                 | Direct translation.                                                          |
| `_draw_gps_times(rec, n, rng)`      | `app.regal-fit.simulation-vectorized` | `draw-gps-times-vectorized` | Vectorized alternative generating times efficiently.                         |
| `_draw_bat_times(rec, n, rng)`      | `app.regal-fit.simulation-vectorized` | `draw-bat-times-vectorized` | Vectorized alternative generating times efficiently.                         |
| `_km_S_at_T(...)`                   | `app.regal-fit.stats`                 | `km-survival-at-time`       | Direct translation.                                                          |
