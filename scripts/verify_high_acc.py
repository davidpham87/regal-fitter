import json
import uuid
import os
from test_combo import run_python_simulation, run_cljs_simulation, record_results_to_db, cfg_dict

def verify_high_acc():
    with open("datasets/high_acc_recs.json", "r") as f:
        recs = json.load(f)
    
    n_sims = 50000
    chunk_size = 5000
    seed = 42
    db_path = "datasets/combo_stats.db"
    
    # Optional: clear db
    if os.environ.get("CLEAR_DB"):
        import sqlite3
        conn = sqlite3.connect(db_path)
        conn.cursor().execute("DELETE FROM combo_stats")
        conn.commit()
        conn.close()
    
    print(f"Loaded {len(recs)} high acceptance recs.")
    
    for i, rec in enumerate(recs):
        test_id = str(uuid.uuid4())
        print(f"\n--- Verifying Rec {i+1} / {len(recs)} ---")
        print(f"Test ID: {test_id}")
        
        # Remove estimated key before passing to simulation
        rec_clean = {k: v for k, v in rec.items() if k != "n_accepted_estimated"}
        
        print("Running Python...")
        py_out = run_python_simulation(rec_clean, cfg_dict, n_sims, seed)
        print(f"Python output: {py_out}")
        
        print("Running ClojureScript in chunks...")
        payload_path = f"datasets/combo_payload_{test_id}.json"
        out_path = f"datasets/combo_out_{test_id}.json"
        try:
            cljs_out = run_cljs_simulation(
                rec_clean, cfg_dict, n_sims, seed, chunk_size,
                payload_path=payload_path,
                out_path=out_path
            )
            print(f"ClojureScript output: {cljs_out}")
        finally:
            if os.path.exists(payload_path): os.remove(payload_path)
            if os.path.exists(out_path): os.remove(out_path)
            
        record_results_to_db(db_path, test_id, py_out, cljs_out)
        print("Recorded results.")

if __name__ == "__main__":
    verify_high_acc()
    import stats_analysis
    stats_analysis.run_analysis()
