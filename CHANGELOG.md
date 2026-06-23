# Changelog

## v0.4 — Aggregation optimization and advanced visualization results

### Added
- **Patients Alive at 80th Event distribution.** Added bivariate jittered
  scatter plot comparing survivors in BAT and GPS arms at final analysis ($T_{80}$)
  with a diagonal identity line ($Y=X$).
- **BAT Alive Patients distribution.** Added probability density histogram and
  cumulative CDF curve specifically tracking BAT survivors at $T_{80}$.
- **Web Worker aggregation.** Offloaded heavy data processing, stratification,
  binnings, and KM aggregation to background threads (Web Workers) to prevent
  UI thread locking.
- **Card and Tab layout.** Restructured results charts into uniform 360px cards
  organized under interactive tabs for streamlined browsing.

### Changed
- **6x faster aggregation.** Optimized percentile sorting in `get-survival-stats`
  by sorting parameters exactly once per step using zero-overhead JS sorting.
- **Reinstated Successful Paths.** Re-integrated Successful Paths Hazard Ratio
  distribution chart into the Paths tab.

## v0.3 — 78-event anchor + framework hardening

### Added
- **78-event hard anchor.** New PR3 constraint baked in at simulator level: 78 events at month 62.97 (SLS PR May 12, 2026). Applied as both an analytical prefilter and a per-sim acceptance check.
- **Increment-tolerance constraints.** New per-sim filters on event accumulation between anchors:
  - IA→UPD increment (m46→m58, 12 events expected): tolerance ±3.0 events
  - UPD→PR3 increment (m58→m63, 6 events expected): tolerance ±2.0 events
  - Resolves combos that pass each individual anchor but produce implausible event-accumulation paths between them. Materially tightens the posterior at low BAT mOS (cuts ~8-12% of combos that previously passed via "bouncing" between anchors).
- **CLI flag `--use-pr3-anchor`.** Toggles PR3 constraint for sensitivity testing. Default ON.
- **CLI flags** for `--tol-pr3`, `--tol-increment-ia-upd`, `--tol-increment-upd-pr3`. Per-anchor tolerance tuning without Config edits.
- **`exp_ev_pr3` column** in output CSVs. Expected event count at m62.97 for each combo, useful for post-hoc filtering and diagnostic plots.
- **Three-tier framework support.** Tier definitions now configurable via `--tier-spec`. Defaults to v6 framework: BEDROCK (cure≥0.40, leak≤0.10, shape≤1.0, ratio≥0.85), STRONG (cure≥0.45, leak≤0.07, shape≤1.0, ratio≥0.90), MODERATE (cure≥0.50, leak≤0.05, shape≤1.0, ratio≥0.95).
- **WEAK tier deprecated.** Removed from default outputs (n=3 surviving combos was not a robust posterior). Available via `--include-weak-tier` for backward compatibility.

### Changed
- **Ratio floor lowered from ≥1.0 to ≥0.85** across BEDROCK+/STRONG/MODERATE tiers in default tier specs. Rationale: original ≥1.0 floor imported a no-harm prior from placebo-comparison vaccine trials (Vx-001, OPT-822, pancreatic neoantigen AACR 2026), but REGAL's BAT is active treatment (Ven/Aza, HMA, LDAC). The "GPS uncured ≥ BAT uncured" claim requires accounting for salvage-allocation asymmetry, which the placebo-comparison reference class doesn't capture. Honest subjective distribution over true ratio: ~75% P(ratio≥1.0), ~20% P(0.85≤ratio<1.0), ~5% P(ratio<0.85). Floor at 0.85 admits the 20% mass while excluding the thin tail.
- **Shape cap tightened from ≤1.2 to ≤1.0** across all tiers. Theoretically permissive at 1.2 but practically identical to ≤1.0 in this dataset (shape grid populated only at 0.5, 1.0, 1.5, 2.0). Tighter framing honestly reflects what the cap excludes: accelerating-hazard scenarios with no biological mechanism in AML CR2.
- **BEDROCK and BEDROCK+ collapsed** into single BEDROCK tier. The previous v5 framework treated unc_shape and ratio as "soft" priors layered on a no-biology floor; v6 recognizes both have sufficient literature/biology support to belong at the conservative floor itself.
- **Tier-stratified output now reports parametric (true-HR) distributions alongside observed.** New columns: `parametric_p_fail`, `parametric_p_blowout`, `parametric_hr_p05/p50/p95`. Enables Cox-noise decomposition directly from CSV without post-hoc computation.
- **Quick-mode grid coarsened** slightly to compensate for added per-sim work (PR3 + increment checks add ~25% wall-clock per combo). Net runtime roughly unchanged. Full-mode grid unchanged.

### Empirical sensitivity tests run during this version
- **PR3 anchor impact:** Adding the 78-event constraint shifts the posterior mean P(success) by +1.0pp at MODERATE, +0.7pp at STRONG, +0.3pp at BEDROCK. Modest because the constraint primarily rules out combos that were already low-weight in the posterior (high-leak with late-arriving events).
- **Increment-tolerance impact:** Standalone effect of ±3.0/±2.0 increment caps trims ~8-12% of combos at lower BAT mOS that previously passed each individual anchor but produced jagged event-accumulation. Posterior mean P(success) shifts by ~+1pp at BEDROCK, negligible at STRONG/MODERATE.
- **Ratio floor sensitivity:** Moving from ratio≥1.0 to ratio≥0.85: BEDROCK+ −1.8pp, STRONG −1.0pp, MODERATE 0.0pp (other constraints binding at MODERATE). The other tiers are robust to this specific prior; the framework's headline range moves from 89-96% to 84-96%.
- **Shape cap sensitivity:** Confirming ≤1.0 vs ≤1.2 is empirically identical given grid resolution (0pp difference). Documenting for transparency.

### Notes
- Published v6 PDF report (regal_v6_complete_report.pdf) uses the new defaults end-to-end.
- v5 outputs remain reproducible via `--ratio-floor 1.0 --shape-cap 1.2 --no-pr3-anchor --include-bedrock-plus`.

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
