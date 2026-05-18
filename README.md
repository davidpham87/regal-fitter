# REGAL Constraint Fitter

A constraint-based ABC (Approximate Bayesian Computation) model that estimates the probability of trial success in the REGAL Phase 3 trial of galinpepimut-S (GPS) in AML CR2 maintenance, using only publicly disclosed information.

This is an independent rebuild inspired by CW/yg19's published analysis. To my knowledge his source code isn't public; this is what I came up with from scratch trying to replicate his approach. **I am not affiliated with him, SELLAS, or any related party. I am long SLS shares, which is why I built this. Treat as an analytical exercise, not financial advice.**

## What it does

Fits parametric survival models to the REGAL trial constraints **without using Phase 2 GPS data, historical AML benchmarks, or any other biological priors**. Reports posterior distributions for:

- Hazard ratio at the final analysis (80 events)
- Probability of trial success (HR < 0.636, the SAP threshold)
- Calendar timing of the 80th event
- Implied BAT and GPS arm survival

Stratified by BAT median OS so the analyst can pick whichever value they find clinically plausible and read off the implied trial outcomes directly. Both posterior-averaged and best-fit point-estimate outputs are reported side by side.

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
| Median follow-up at IA | 13.5 ± 2 months |
| IDMC verdict at IA | Continued without modification |
| 80th event status | Not yet announced (auto-updated to current date) |
| HR success threshold | 0.636 (per SAP) |

## Quick start

```bash
pip install -r requirements.txt
python regal_fit.py --threads 8 --quick      # ~2 min, smaller grid for testing
python regal_fit.py --threads 50              # full run, ~10-30 min on 50 cores
```

Outputs: `regal_fit_report.pdf`, per-family CSV/JSON files.

## Methodology

### Two-stage ABC

**Stage 1 (analytical pre-filter):** For each (BAT params, GPS params) combo, compute expected event counts at each anchor analytically. Reject combos whose expected counts deviate beyond tolerance.

**Stage 2 (simulation):** For surviving combos, simulate 1,000 full trials. Per-sim filters: 60 ± 4 events at m46, 72 ± 4 at m58, HR_IA in (efficacy_hr_min, futility_hr_max), pool KM(12) > 0.5, median FU within 13.5 ± 2, t80 > today.

### Three model families

1. **Weibull/Weibull** — fully agnostic, no cure structure
2. **Weibull-BAT + cure-fraction GPS** — explicit cure plateau
3. **Weibull-BAT + leaky-cure GPS** — cure with small residual hazard rate (most internally consistent — has the cure-tail mechanism without the immortality artifact in pure cure-fraction)

### Two outputs side by side

For each family the PDF reports:

- **Posterior-averaged P(success) by BAT mOS** — marginal across all combos within ABC tolerance, weighted by acceptance rate. Smooth, monotone in BAT, robust to ABC tolerance choices.
- **Best-fit point estimate by BAT mOS** — single combo per BAT bin minimizing max-residual against (60@m46, 72@m58, t80=today). yg19/CW-style point selection. Reported for direct apples-to-apples comparison.

### Key methodological choices

These are **judgment calls, not data-determined**, and the script lets you sweep them:

1. **Efficacy floor on HR_IA** (default **0.40**). The OBF efficacy boundary at info=0.75 with 1-sided alpha=0.025 maps to HR ≈ 0.557. Fleming and DeMets (1993) explicitly note IDMCs commonly continue past borderline boundary crossings, so the strict 0.55 reading is too rigid. Default of 0.40 admits Fleming/DeMets non-binding interpretations for borderline crossings but rejects implausible non-stops at HR_IA < 0.40 (Z > 3.5+). Sensitivity sweep with `--efficacy-hr-min 0` (no floor, matches yg19/CW) or `--efficacy-hr-min 0.55` (strict OBF).

2. **Futility ceiling on HR_IA** (default 0.9). Defensible reading of "exceeded predetermined futility criteria."

3. **Pool mOS floor** (default 12 months). Public disclosure.

4. **Median follow-up filter** (13.5 ± 2 months). Public disclosure. Does real work — eliminates extreme cure regimes where cured patients pile up alive at IA, inflating observed median FU.

5. **Posterior averaging vs point estimation.** Both reported.

## Configuration

Edit defaults in the `Config` dataclass at the top of `regal_fit.py`. CLI flags for sensitivity sweeps:

```bash
python regal_fit.py --efficacy-hr-min 0.55   # strict OBF reading
python regal_fit.py --efficacy-hr-min 0      # no floor (matches yg19/CW)
python regal_fit.py --pool-mos-min 14
python regal_fit.py --futility-hr-max 1.0
python regal_fit.py --median-fu-target 0     # disable FU filter
```

## Sample numbers (default constraints)

**Marginal P(success):** Weibull/Weibull 56%, Cure-fraction 72%, Leaky-cure 66%

**Leaky-cure P(success) by BAT mOS:**

| BAT mOS | Posterior P(success) | HR P50 | Best-fit HR | Best-fit P(success) |
|---|---|---|---|---|
| 11-12 | 94% | 0.45 | 0.25 | 100% |
| 13-14 | 91% | 0.45 | 0.22 | 100% |
| 15-16 | 84% | 0.49 | 0.29 | 100% |
| **16-17** | **78%** | **0.52** | **0.32** | **100%** |
| 18-19 | 65% | 0.58 | 0.64 | 51% |
| 20-21 | 50% | 0.65 | 0.52 | 87% |

Numbers vary 1-3 points run-to-run based on stochastic seed.

## How this differs from yg19/CW

Same architecture and constraints, but four methodological choices differ:

| Choice | This script | yg19/CW |
|---|---|---|
| Selection rule | Posterior across all combos within tolerance + best-fit cell reported | Best-fit single combo per (BAT, leak) cell |
| 80-event anchor | "Not yet observed" (one-sided) | "At May 2026" exact (two-sided fitting target) |
| GPS shape | Three families, analyst weights | Leaky-cure variants only |
| ABC tolerance | Explicit ±4 events per-sim, ±2.5 analytical prefilter | Implicit (residual minimization) |

### Empirical sensitivity tests

- **ABC tolerance:** Tightened analytical prefilter from ±2.5 to ±1.5. Combos accepted dropped 60-65% but marginal P(success) moved <2 points across all three families. **Tolerance is not the source of the gap with yg19/CW.**
- **Best-fit at BAT=16:** With broader ABC, my residual-minimization picks HR=0.32 (P=100%) at BAT 16-17 leaky-cure — close to yg19/CW's HR=0.44 (P~99%). **Point-fit-to-point-fit, this script roughly matches him at the BAT value that matters.**

### The actual methodological gap

Point estimation vs posterior averaging. Not anything tractable as a code bug:

| Framework | P(success) at BAT=16 leaky-cure |
|---|---|
| yg19/CW point fit | ~99% |
| This script point fit | **~100%** (matches) |
| Posterior subset to yg19/CW's cure regime | ~95% |
| Posterior, full leaky-cure family | **~78%** |
| Posterior, all three families | **~66%** |

yg19/CW's 99% is conditionally correct under his biological commitments (strong-cure regime + point estimation). The marginal at 78% averages across cure regimes from strong (~99%) to weak (~50%), all of which pass the public constraints. The right number for an analyst depends on whether you want to commit to one regime a priori or integrate over admissible regimes.

## Caveats and limitations

- **No biological priors.** The constraint set alone admits a range of (BAT, GPS) parameter regimes. Posterior averaging across this range can give a different answer than point estimation at a single best-fit combo.
- **IDMC behavior interpretation.** Whether OBF efficacy boundary is binding affects results meaningfully at low BAT mOS. Default soft floor at 0.40 is the Fleming/DeMets-defensible middle.
- **Best-fit fragility at borderline BAT.** Residual-minimization can produce non-monotone P(success) at some BAT values. The smooth posterior-averaged curve is more coherent.

## Acknowledgments

Inspired by CW/yg19's published REGAL analysis. Constraints, anchors, and general approach follow his lead. All methodology choices, numerical results, and any errors are mine.

## License

MIT.
# clojure_base_template
My own default clojure template in order to built new stuff.
