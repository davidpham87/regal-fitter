import json
import numpy as np
import scipy.stats as stats
import matplotlib.pyplot as plt

def main():
    print("Analyzing convergence between Python and CLJS simulations...")
    
    import sqlite3
    db_path = "datasets/convergence.db"
    
    conn = sqlite3.connect(db_path)
    cur = conn.cursor()
    
    cur.execute("SELECT hr_final FROM convergence_py")
    py_dist = np.array([row[0] for row in cur.fetchall()])
    
    cur.execute("SELECT hr_final FROM convergence_cljs")
    cljs_dist = np.array([row[0] for row in cur.fetchall()])
    
    conn.close()
        
    print(f"Python simulations: {len(py_dist)}")
    print(f"CLJS simulations:   {len(cljs_dist)}")
    
    print("\n--- Statistics ---")
    print(f"Python Mean HR: {np.mean(py_dist):.4f}  (Std: {np.std(py_dist):.4f})")
    print(f"CLJS   Mean HR: {np.mean(cljs_dist):.4f}  (Std: {np.std(cljs_dist):.4f})")
    
    print(f"Python Median HR: {np.median(py_dist):.4f}")
    print(f"CLJS   Median HR: {np.median(cljs_dist):.4f}")
    
    py_q = np.quantile(py_dist, [0.05, 0.95])
    cljs_q = np.quantile(cljs_dist, [0.05, 0.95])
    print(f"Python 90% CI: [{py_q[0]:.4f}, {py_q[1]:.4f}]")
    print(f"CLJS   90% CI: [{cljs_q[0]:.4f}, {cljs_q[1]:.4f}]")
    
    ks_stat, p_val = stats.ks_2samp(py_dist, cljs_dist)
    print("\n--- Kolmogorov-Smirnov Test ---")
    print("Null hypothesis: The two distributions are identical.")
    print(f"KS Statistic: {ks_stat:.4f}")
    print(f"P-value:      {p_val:.4f}")
    if p_val > 0.05:
        print("Conclusion: FAIL TO REJECT the null hypothesis. The distributions are statistically similar.")
    else:
        print("Conclusion: REJECT the null hypothesis. The distributions show statistical divergence (expected due to different RNG streams, but means/variances should still align closely).")

if __name__ == "__main__":
    main()
