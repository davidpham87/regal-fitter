import sqlite3
import pandas as pd
import numpy as np

def run_analysis():
    db_path = "datasets/combo_stats.db"
    conn = sqlite3.connect(db_path)
    
    # Load all data
    df = pd.read_sql("SELECT * FROM combo_stats", conn)
    conn.close()
    
    if df.empty:
        print("No data found in combo_stats.db")
        return
        
    print("=== RAW DATA ===\n")
    print(df.to_string())
    print("\n")
    
    # 1. Weighted Averages
    print("=== WEIGHTED AVERAGES (by n_accepted) ===\n")
    def weighted_average(group):
        n = group["n_accepted"].sum()
        if n == 0:
            return pd.Series({"p_reach80": np.nan, "median_hr_final": np.nan, "p_success_overall": np.nan, "n_accepted": 0})
        
        return pd.Series({
            "p_reach80": (group["p_reach80"] * group["n_accepted"]).sum() / n,
            "median_hr_final": (group["median_hr_final"] * group["n_accepted"]).sum() / n,
            "p_success_overall": (group["p_success_overall"] * group["n_accepted"]).sum() / n,
            "total_accepted": n
        })
        
    wa_df = df.groupby("env").apply(weighted_average).reset_index()
    print(wa_df.to_string())
    print("\n")
    
    # 2. Pairwise Differences for the Same Parameter Set (test_id)
    print("=== STATISTICAL DIFFERENCES FOR THE SAME SET OF PARAMETERS ===\n")
    # Pivot so python and cljs are columns
    pivot = df.pivot(index="test_id", columns="env")
    
    diffs = {}
    metrics = ["p_reach80", "median_hr_final", "p_success_overall", "n_accepted"]
    
    has_valid_diffs = False
    for metric in metrics:
        if metric in pivot:
            col_py = pivot[(metric, "python")]
            col_cljs = pivot[(metric, "cljs")]
            
            # Absolute differences
            diff = (col_py - col_cljs).abs()
            
            # Filter out NaNs
            diff = diff.dropna()
            
            if len(diff) > 0:
                has_valid_diffs = True
                diffs[metric] = {
                    "mean_diff": diff.mean(),
                    "std_diff": diff.std() if len(diff) > 1 else 0.0,
                    "max_diff": diff.max(),
                    "count": len(diff)
                }
                
    if has_valid_diffs:
        diff_df = pd.DataFrame.from_dict(diffs, orient="index")
        print(diff_df.to_string())
    else:
        print("No overlapping test_ids between Python and CLJS to compare.")

if __name__ == "__main__":
    run_analysis()
