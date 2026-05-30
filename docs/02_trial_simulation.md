# Trial Simulation Algorithm Review

Once individual survival times and enrollment models are defined, the simulation models a full clinical trial.

## Enrollment Time Simulation

**Python Implementation (`regal_fit.py`):**
```python
def make_enrollment_times(cfg, rng):
    times = []
    for lo, hi, n in cfg.enroll_bands:
        if n > 0:
            times.append(rng.uniform(lo, hi, n))
    return np.sort(np.concatenate(times))
```

**ClojureScript Implementation (`src/app/regal_fit/simulate.cljs`):**
```clojure
(let [raw-enroll (js/Array.)]
  (doseq [[lo hi n] bands]
    (when (> n 0) (doseq [r (np/nd-to-array (np-random/uniform random-gen lo hi n))] (.push raw-enroll r))))
  (.sort raw-enroll (fn [a b] (- a b))))
```

**Step-by-Step Calculation:**
1. A series of non-overlapping "enrollment bands" are defined, specified as `[start_month, end_month, number_of_patients]`.
2. For each band, `number_of_patients` enrollment times are drawn uniformly between `start_month` and `end_month`.
3. All drawn times are concatenated and sorted to produce the final enrollment schedule.

## Arm Assignment Simulation

Patients are randomized to either the BAT or GPS arm.

**Python Implementation:**
```python
arms = np.zeros((n_sims, n_total), dtype=np.int8)
perm = np.argsort(rng.random((n_sims, n_total)), axis=1)
rows = np.arange(n_sims)[:, None]
arms[rows, perm[:, :n_per_arm]] = 1
```

**ClojureScript Implementation:**
```clojure
(let [assignment-order (np/nd-to-array (np/argsort (np-random/random random-gen n-total)))]
  (dotimes [i n-total] (aset enroll i (aget raw-enroll i)))
  (assign-arms arms assignment-order n-per-arm))
```

**Step-by-Step Calculation:**
1. Generate an array of size `n_total` containing uniform random values.
2. Sort the array and keep the original indices (`argsort`).
3. Take the first `n_per_arm` indices from the sorted array and assign them to Arm 1 (GPS).
4. The remaining indices belong to Arm 0 (BAT).
This approach cleanly randomizes exactly `n_per_arm` patients to the experimental arm, without replacement.

## Generating Outcomes

With `enrollment_times`, `survival_times`, and `arm_assignments`, the simulation tracks patient outcomes at interim/final follow-up times (`t_ia`, `t_upd`).

**ClojureScript/Python Concept:**
For any cut-off time $T$:
1. Patient's follow-up time: $FU = \max(T - enrollment\_time, 0.0)$
2. If $survival\_time \leq FU$: patient had the event (death), survival count observed is $survival\_time$.
3. If $survival\_time > FU$: patient is right-censored, survival count observed is $FU$.

**Inconsistencies Check:**
The implementations between `regal_fit.py` and `simulate.cljs` match in their statistical approaches. Python heavily utilizes NumPy vectorization to parallelize operations over the `n_sims` dimension simultaneously, whereas ClojureScript simulates each trial row iteratively due to environment constraints. However, the exact mathematical calculations and randomness models are 1-to-1 identical.
