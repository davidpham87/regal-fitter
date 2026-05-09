# Reading the Output

When you run `python regal_fit.py`, the PDF report contains the following pages in order. **Page 2 is the headline — read it first.**

## Page 1: Setup
Lists all hard constraints applied, ABC tolerances, model families fit, and shows the inferred enrollment pattern.

## Page 2: Headline view (P(success) and HR vs BAT mOS)
Four panels, all with BAT mOS on the x-axis and one curve per family:
- **Top-left:** P(reach 80 AND HR<0.636). Pick the BAT you find clinically plausible, read off the P(success).
- **Top-right:** Median HR_final with P5/P95 band. Crosses the 0.636 success line at the BAT value where the trial transitions from likely-win to likely-fail.
- **Bottom-left:** P(reach 80 events). Should be ~100% in leaky-cure and Weibull; pure cure-fraction has lower values at high cure_frac due to the immortality artifact.
- **Bottom-right:** Posterior weight density across BAT values. Where the model thinks BAT mOS lives based on constraints alone.

## Page 3: Summary text
Per-family marginal headlines (BAT mOS, HR, P(success), 80th event timing).

## Pages 4-9: Per-family detailed views (×3 families × 2 pages each)
- Page 1 of each family: scatter of HR vs BAT, HR posterior histogram, 80th-event timing histogram, BAT mOS posterior.
- Page 2 of each family: implied KM-style curves and acceptance rate by BAT mOS.

## Page 10: Cross-family comparison
Overlays of HR posterior, timing posterior, BAT mOS posterior, and bar comparison of P(success) per family.

## Page 11: Top accepted combos table
Top 20 combos per family by acceptance rate, with their parameters and outcome statistics.

## Per-family CSVs
Each family also dumps a CSV with one row per accepted (BAT, GPS) parameter combo. Columns include:
- Parameter values (bat_med, bat_shape, gps_med/cure_frac/unc_med/unc_shape/leak_yr, etc.)
- Acceptance rate (fraction of sims passing all filters)
- HR_IA P50, HR_final P50
- t80 P50, P5, P95
- p_success_overall = P(reach 80 AND HR<0.636)
- p_hr_below_threshold = P(HR<0.636 | reached 80)

These let you do your own subsetting/aggregation. For example, to see what the model says under yg19/CW-style point selection, filter to the cure regime he uses (cure_frac 0.55-0.7, leak ≤ 0.04, unc_med 4-10) and look at the acceptance-weighted statistics for that subset.

## Sample numbers (default constraints)

These are roughly what you should see at the default settings (efficacy_hr_min=0.55, futility_hr_max=0.9, pool_mos_min=12, current_calendar_month=63):

| BAT mOS | Weibull/Weibull | Cure-fraction | Leaky-cure |
|---|---|---|---|
| 11 | ~70% | ~82% | ~76% |
| 12 | ~68% | ~79% | ~73% |
| 14 | ~60% | ~75% | ~68% |
| 16 | ~51% | ~72% | ~64% |
| 18 | ~41% | ~67% | ~57% |
| 20 | ~29% | ~57% | ~46% |
| 22 | ~17% | ~44% | ~33% |
| 25 | ~5% | ~23% | ~16% |

Numbers vary 5-10 points run-to-run based on stochastic seed and exact tolerance settings. Set `efficacy_hr_min` to lower values (0, 0.40) for sensitivity sweeps.
