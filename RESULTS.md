# Reading the Output

When you run `python regal_fit.py`, the PDF report contains the following
pages. **Page 3 is the headline — read it first.**

## Page 1: Setup
Lists all hard constraints applied, ABC tolerances, model families fit, and
the inferred enrollment pattern.

## Page 2: Summary text
Per-family marginal headlines (BAT mOS, HR, P(success), 80th event timing) for
all three families. Quick numerical reference.

## Page 3: Stratified BAT-mOS plot
Two panels:
- **Top panel (P(success) by BAT mOS):** P(reach 80 AND HR<.636) curves per
  family. Pick the BAT you find clinically plausible, read off the implied
  success probability.
- **Bottom panel (Implied final HR):** Posterior P50 line per family with
  P5..P95 band, plus best-fit point estimates as X markers (yg19/CW-style
  point selection). Shows both averaged-over-uncertainty (line) and
  committed-to-one-combo (X) views side by side.

## Pages 4-9: Per-family stratified tables
For each family, two tables:
- **Posterior table:** P(success), HR percentiles, 80th-event timing per BAT
  mOS bin. Acceptance-weighted across all combos in that bin.
- **Best-fit table:** Single residual-minimization combo per BAT bin with its
  parameter values, P(success), HR, t80. Direct apples-to-apples with
  yg19/CW's framework.

## Pages 10-15: Per-family detailed views
Scatter plots, HR/timing/BAT histograms, KM curves, acceptance rates.

## Page 16: Cross-family comparison
Overlay of HR posteriors, timing, BAT mOS, and bar chart of P(success) per
family.

## Page 17: Top accepted combos table
Top 20 per family by acceptance rate.

## Per-family CSVs
Each family also dumps a CSV with one row per accepted parameter
combo. Columns include parameter values, acceptance rate, HR_IA P50, HR_final
P50, t80 percentiles, P(reach 80), P(HR<0.636 | reach 80), and P(success
overall).

These let you do your own subsetting/aggregation. For example, to replicate
yg19/CW-style point selection within a specific cure regime, filter the
leaky-cure CSV to `cure_frac in [0.55, 0.7] AND leak_yr <= 0.04 AND unc_med in
[4, 10]` and look at acceptance-weighted statistics for that subset.

## Sample numbers (default constraints)

Default settings: efficacy_hr_min=0.40, futility_hr_max=0.9, pool_mos_min=12,
median_fu_target=13.5±2, ABC ±2.5/±4.

**Marginal P(success):**

| Family          | P(success) | HR P50 | BAT mOS P50 | t80 P50  |
|-----------------|------------|--------|-------------|----------|
| Weibull/Weibull | 56%        | 0.61   | 17.5m       | Aug 2026 |
| Cure-fraction   | 72%        | 0.51   | 17.5m       | Oct 2026 |
| Leaky-cure      | 66%        | 0.56   | 17.5m       | Oct 2026 |

**P(reach 80) = 100% across all three families.** The median FU filter
eliminates the immortality artifact in pure cure-fraction.

**Leaky-cure P(success) by BAT mOS:**

| BAT mOS   | Posterior P(success) | Posterior HR P50 | Best-fit HR | Best-fit P(success) |
|-----------|----------------------|------------------|-------------|---------------------|
| 10-11     | 96%                  | 0.44             | 0.25        | 100%                |
| 11-12     | 94%                  | 0.45             | 0.25        | 100%                |
| 13-14     | 91%                  | 0.45             | 0.22        | 100%                |
| 15-16     | 84%                  | 0.49             | 0.29        | 100%                |
| **16-17** | **78%**              | **0.52**         | **0.32**    | **100%**            |
| 18-19     | 65%                  | 0.58             | 0.64        | 51%                 |
| 20-21     | 50%                  | 0.65             | 0.52        | 87%                 |
| 22-23     | 34%                  | 0.70             | 0.61        | 63%                 |
| 25-26     | 18%                  | 0.77             | 0.66        | 31%                 |

Numbers vary 1-3 points run-to-run based on stochastic seed.

## Reproducing common comparisons

**To match yg19/CW's framework as closely as possible:**

```bash
python regal_fit.py --efficacy-hr-min 0 --futility-hr-max 1.0
```

Then read the **best-fit table** for leaky-cure at your BAT of interest. At
BAT=16 you should see HR ≈ 0.32, P(success) = 100%, close to his published
HR=0.44 / P~99%.

**To see the strict OBF reading:**

```bash
python regal_fit.py --efficacy-hr-min 0.55
```

This rejects combos with HR_IA < 0.55 (the OBF efficacy boundary). Posterior
P(success) shifts down 5-10 points across families.

**To disable the median FU filter:**

```bash
python regal_fit.py --median-fu-target 0
```

This re-introduces the immortality artifact in pure cure-fraction (P(reach 80)
drops to ~72% in cure-fraction family). Useful for sensitivity but the filter
is a real public constraint, so disabling it is mostly for diagnostic
purposes.
