# REGAL Constraint Fitter

A constraint-based ABC (Approximate Bayesian Computation) model that estimates the probability of trial success in the REGAL Phase 3 trial of galinpepimut-S (GPS) in AML CR2 maintenance, using only publicly disclosed information.

This is an independent rebuild inspired by [CW/yg19's published analysis](https://x.com/IH_Cap/status/1968712117552435578). To my knowledge his source code isn't public; this is what I came up with from scratch trying to replicate his approach. **I am not affiliated with him, SELLAS, or any related party. I am long SLS shares, which is why I built this. Treat as an analytical exercise, not financial advice.**

## What it does

Fits parametric survival models to the REGAL trial constraints **without using Phase 2 GPS data, historical AML benchmarks, or any other biological priors**. The data alone speaks. Reports posterior distributions for:

- Hazard ratio at the final analysis (80 events)
- Probability of trial success (HR < 0.636, the SAP threshold)
- Calendar timing of the 80th event
- Implied BAT and GPS arm survival

Stratified by BAT median OS so the analyst can pick whichever value they find clinically plausible and read off the implied trial outcomes directly.

## Hard constraints used

All from public disclosures (SELLAS press releases, OncLive, Future Oncology 2024):

| Constraint | Value |
|---|---|
| Trial start (first patient dosed) | Feb 8, 2021 (calendar t=0) |
| Total enrolled, 1:1 randomization | 126 patients |
| Enrollment completion | April 2024 |
| Events at IA | 60 events @ ~Dec 2024 (m46) |
| Events at update | 72 events @ ~Dec 2025 (m58) |
| Events triggering final analysis | 80 |
| Pool blinded mOS at IA | > 12 months |
| IDMC verdict at IA | Continued without modification |
| 80th event status | Not yet announced (as of May 9, 2026) |
| HR success threshold | 0.636 (per SAP) |

## Quick start

```bash
pip install -r requirements.txt
python regal_fit.py --threads 8 --quick      # ~2 min, smaller grid for testing
python regal_fit.py --threads 50              # full run, ~30-60 min on 50 cores
```

Outputs:
- `regal_fit_report.pdf` — multi-page report with stratified results
- `regal_fit_report_<family>_<constraints>.csv` — per-family raw posteriors
- `regal_fit_report_<family>_<constraints>.json` — checkpoint for resume

## Methodology

### Two-stage ABC

**Stage 1 (analytical pre-filter):** For each (BAT params, GPS params) combo, compute expected event counts at each anchor analytically. Reject combos whose expected counts deviate beyond tolerance. Cross-product structure makes this O(|BAT_grid| + |GPS_grid|) instead of O(|BAT_grid| × |GPS_grid|).

**Stage 2 (simulation):** For each surviving combo, simulate full trials including stochastic enrollment + arm assignment + survival draws. Per-sim filters:
- 60 ± `tol_ia` events at calendar t=46
- 72 ± `tol_upd` events at calendar t=58
- `efficacy_hr_min` < HR_IA < `futility_hr_max`
- Pool KM(12) > 0.5 (sample pool median > 12)
- t80 > current calendar month (80 events not yet observed)

For passing sims, record HR at 80 events, calendar timing of 80th event, and per-arm survivor counts. Aggregate across sims per combo, then across combos weighted by acceptance rate.

### Three model families

1. **Weibull/Weibull** (4 params) — fully agnostic, no cure structure
2. **Weibull-BAT + cure-fraction GPS** (5 params) — explicit cure plateau
3. **Weibull-BAT + leaky-cure GPS** (6 params) — cure with small residual hazard rate

The leaky-cure family is the most internally consistent — it has the cure-tail mechanism without the immortality artifact that pure cure-fraction creates (cured patients = infinite survival, which can prevent the trial from ever reaching 80 events in simulation).

### Key methodological choices

These are **judgment calls, not data-determined**, and the script lets you sweep them:

1. **Efficacy floor on HR_IA** (`efficacy_hr_min`, default 0.55). The OBF efficacy boundary at info=60/80=0.75 with 1-sided alpha=0.025 maps to HR ≈ 0.557. Strict reading: trial would have stopped if HR_IA < 0.55. Fleming and DeMets (1993) explicitly note IDMCs commonly continue past borderline crossings. Default of 0.55 is the strict reading. Use 0.40 for a "soft" floor (allows borderline OBF crossings, rejects overwhelming ones), or 0 to disable entirely.

2. **Futility ceiling on HR_IA** (`futility_hr_max`, default 0.90). The SAP doesn't publicly disclose the futility rule; I use 0.90 as the defensible reading of "exceeded predetermined futility criteria" per SELLAS PR language. Use 1.0 for the loosest possible reading.

3. **Pool mOS floor** (`pool_mos_min_at_ia`, default 12). OncLive disclosed pool mOS at IA exceeds 12 months. Some sources cite ≥13.5. Tighter floor gives more bullish posterior on BAT mOS but tighter HR.

4. **Posterior averaging vs point estimation.** This script reports the posterior averaged across all combos within ABC tolerance. To replicate a yg19/CW-style point estimate, filter the per-family CSV to your preferred parameter regime and report stats for that subset.

## Configuration

All knobs live in the `Config` dataclass at the top of `regal_fit.py`. Edit there rather than via CLI for reproducibility. CLI flags exist for sensitivity sweeps:

```bash
python regal_fit.py --efficacy-hr-min 0.40   # soft OBF floor
python regal_fit.py --efficacy-hr-min 0      # no floor (matches CW's permissive reading)
python regal_fit.py --pool-mos-min 14         # tighter pool mOS anchor
python regal_fit.py --futility-hr-max 1.0    # loose futility
```

## Output structure

The PDF has the following pages:

1. **Setup** — constraints applied, enrollment pattern
2. **Headline view** — P(success), HR_final, P(reach 80), and BAT mOS density, all stratified by BAT mOS, one curve per family. **This is the page to read first.** Pick the BAT mOS you find plausible, read off the implied success probability and HR.
3. **Summary text** — global posteriors per family
4. **Per-family pages** (×3) — detailed scatter and histogram views
5. **Cross-family comparison** — overlay of HR posteriors and timing
6. **Top accepted combos table** — top 20 combos per family by acceptance rate

## Caveats and limitations

- **No biological priors.** The constraint set alone doesn't pick a unique answer; it admits a range of (BAT, GPS) parameter regimes. Posterior averaging across this range can give a meaningfully different answer than point estimation at a single best-fit combo.
- **Cure-shape ambiguity.** All three families produce broadly compatible HR estimates within their accepted regions, but they differ on extrapolation past the observation window. Pure Weibull with stretched parameters (median > 100m) is functionally cure-equivalent.
- **IDMC behavior interpretation.** Whether OBF efficacy boundary is binding affects results meaningfully at low BAT mOS. Fleming/DeMets's writings support non-binding interpretation but the strength of that argument depends on how strongly the boundary was crossed.
- **The "80 events not yet" filter.** Should be updated when re-running on a different date. Currently set to `current_calendar_month = 63.0` (May 9, 2026). Edit this in Config when you re-run.

## How this differs from yg19/CW's analysis

Same architecture and constraints, but three methodological choices differ:

| Choice | This script | yg19/CW |
|---|---|---|
| Selection rule | Posterior across all combos within tolerance | Best-fit single combo per (BAT, leak) cell |
| 80-event anchor | "Not yet observed" (one-sided) | "At May 2026" exact (two-sided fitting target) |
| GPS shape | Three families, analyst weights | Leaky-cure variants only |
| ABC tolerance | Explicit ±4 on event counts | Implicit (residual minimization) |

Within his strong-cure regime (cure_frac 0.55-0.7, leak < 0.05) my model gets HR_final ≈ 0.42, P(success) ≈ 96% at BAT=16, basically matching his 99%. The difference at the marginal level is mostly that my posterior includes weaker-cure regimes that pass the constraints loosely; he commits to the regime that fits residuals tightest.

His 99% is **conditionally correct given his biological commitments**. Without those commitments, posterior averaging lands at ~70-80% under cure-shape biology, ~60-65% across all three families.

## Acknowledgments

Inspired by CW/yg19's published REGAL analysis. Constraints, anchors, and general approach follow his lead. All methodology choices, numerical results, and any errors are mine.

## License

MIT. Do whatever you want with this. Pull requests welcome.
