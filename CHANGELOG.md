# Changelog

## v0.2 — Methodology refinements following community feedback

### Added
- **Median follow-up filter** (13.5 ± 2 months). New per-sim constraint based on SELLAS public disclosure. Eliminates extreme cure regimes where cured patients pile up alive at IA, inflating observed median FU. Resolves the "trial never reads out" artifact in pure cure-fraction.
- **Best-fit point-estimate output.** Per-BAT residual-minimization table reported alongside the posterior-averaged stratified table. Direct apples-to-apples with yg19/CW-style point selection methodology.
- **Best-fit point markers (X) on the headline plot.** Posterior P50 line and best-fit point estimates shown side by side for each family.
- **Dynamic `t_now`.** Auto-updates to current calendar month on each rerun via `cfg_today_month()`. No need to manually edit the date for the "80 events not yet" filter.
- **CLI flags** for `--futility-hr-max`, `--efficacy-hr-min`, `--pool-mos-min`, `--median-fu-target`, `--median-fu-tol`, `--bat-strat-bin`. Sensitivity sweeps no longer require Config edits.
- Prefilter tolerance added to checkpoint signature so future tolerance changes auto-invalidate cached results.

### Changed
- **Leak grid step** from 0.025 → 0.01. Now evaluates 0.02 and 0.03 explicitly (previously skipped CW's anchor cells).
- **Default `efficacy_hr_min`** from 0.55 (strict OBF) → 0.40 (Fleming/DeMets-defensible middle). Sensitivity sweep at 0 and 0.55 still available via CLI.
- **Default `futility_hr_max`** from 1.0 → 0.9. Defensible reading of "exceeded predetermined futility criteria."

### Empirical sensitivity tests run during this version
- **ABC tolerance:** Tightened analytical prefilter from ±2.5 → ±1.5. Combos accepted dropped 60-65% but marginal P(success) moved <2 points across all three families. Confirms tolerance is not the source of the gap with yg19/CW.
- **Best-fit at BAT=16:** With broader ABC, residual-minimization picks HR=0.32, P=100% at BAT 16-17 leaky-cure. Approximately matches yg19/CW's HR=0.44, P~99% point fit.

## v0.1 — Initial release

- Two-stage ABC over Weibull/Weibull, cure-fraction, and leaky-cure GPS families
- Hard constraints: 60@m46, 72@m58, IDMC continued, pool mOS > 12, 80 events not yet observed
- Strict OBF efficacy floor at 0.55 as default
- Posterior-averaged P(success) stratified by BAT mOS as primary output
