# Sampling Algorithms Review

The core clinical trial simulation uses mathematical models to generate simulated patient survival times. There are three key distributions used to model event times across different patient arms:

## Base Survival Distributions

### 1. Standard Weibull Model (Baseline/BAT arm)
The baseline survival times (usually applied to the BAT arm or uncured portions) follow a standard Weibull distribution.

**Python Implementation (`regal_fit.py`):**
```python
def _draw_bat_times(rec, n, rng):
    return rec["bat_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["bat_shape"])
```

**ClojureScript Implementation (`src/app/regal_fit/random.cljs`):**
```clojure
(defn draw-weibull-samples
  [n-samples random-gen scale shape]
  (let [random-values (np-random/random random-gen n-samples)
        neg-log-vals (np/multiply (np/log random-values) -1.0)
        powered-vals (np/power neg-log-vals (/ 1.0 shape))]
    (np/multiply powered-vals scale)))
```

**Step-by-Step Calculation:**
1. Generate uniform random numbers $U \sim \text{Uniform}(0, 1)$
2. Compute the negative logarithm: $-\ln(U)$
3. Raise to the power of inverse shape parameter: $(-\ln(U))^{1/shape}$
4. Multiply by scale parameter: $scale \times (-\ln(U))^{1/shape}$

This correctly implements inverse transform sampling for the Weibull distribution.

### 2. Standard Cure Model (GPS arm)
The GPS arm can be modelled using a standard cure fraction model. A fixed proportion of patients are assumed to be "cured" (survival time = $\infty$), while the rest follow a Weibull distribution.

**Python Implementation:**
```python
is_cured = rng.random(n) < rec["cure_frac"]
unc = rec["unc_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["unc_shape"])
out = np.where(is_cured, np.inf, unc)
```

**ClojureScript Implementation:**
```clojure
(let [random-cure-flags (.toArray (np-random/random random-gen n-samples))
      uncured-times (draw-weibull-samples n-samples random-gen unc-scale unc-shape)
      uncured-times-arr (.toArray uncured-times)
      output-seq (map (fn [r u] (if (< r cure-frac) np/inf u))
                      random-cure-flags uncured-times-arr)]
  (np/array (to-array output-seq)))
```

**Step-by-Step Calculation:**
1. Generate uniform random numbers $R \sim \text{Uniform}(0, 1)$ to determine cure status.
2. If $R < cure\_frac$, the patient is cured (survival time = $\infty$).
3. Otherwise, the patient is uncured, and survival time is drawn from the Weibull distribution as detailed above.

### 3. Leaky Cure Model (GPS arm)
The leaky cure model modifies the standard cure model by replacing the infinite survival time for "cured" patients with an exponentially distributed failure time, representing an ongoing small risk of event.

**Python Implementation:**
```python
is_cured = rng.random(n) < rec["cure_frac"]
unc = rec["unc_scale"] * (-np.log(rng.random(n))) ** (1.0 / rec["unc_shape"])
leak_m = rec["leak_yr"] / 12.0
if leak_m > 0:
    cured_t = -np.log(rng.random(n)) / leak_m
else:
    cured_t = np.full(n, np.inf)
return np.where(is_cured, cured_t, unc)
```

**ClojureScript Implementation:**
```clojure
(let [random-cure-flags (.toArray (np-random/random random-gen n-samples))
      uncured-times-arr (.toArray (draw-weibull-samples n-samples random-gen unc-scale unc-shape))
      leak-rate-monthly (/ leak-yr 12.0)
      random-leak-vals (.toArray (np-random/random random-gen n-samples))
      output-seq (map (fn [r u l]
                        (if (< r cure-frac)
                          (if (> leak-rate-monthly 0) (/ (- (js/Math.log l)) leak-rate-monthly) np/inf)
                          u))
                      random-cure-flags uncured-times-arr random-leak-vals)]
  (np/array (to-array output-seq)))
```

**Step-by-Step Calculation:**
1. Generate $R \sim \text{Uniform}(0, 1)$ for cure status.
2. If $R < cure\_frac$, the patient is initially marked "cured".
   - Generate $L \sim \text{Uniform}(0, 1)$ for the leak failure time.
   - The failure time is drawn from an exponential distribution with rate parameter $leak\_m = leak\_yr / 12.0$.
   - Using inverse transform sampling: $t = -\ln(L) / leak\_m$.
3. Otherwise, the patient is uncured, and the failure time is drawn from the standard Weibull distribution.

**Inconsistencies Check:**
The implementations in `regal_fit.py` and `src/app/regal_fit/random.cljs` are conceptually aligned and mathematically identical. No inconsistencies were found in the random generation formulas for survival times.
