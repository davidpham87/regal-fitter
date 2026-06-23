import sqlite3
import json

DB_PATH = "../datasets/generative_tests.db"

def main():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    print("=== Table Summary ===")
    cursor.execute("SELECT func, COUNT(*) FROM survival_tests GROUP BY func")
    rows = cursor.fetchall()
    print(f"{'Function':<30} | {'Count':<10}")
    print("-" * 43)
    for func, count in rows:
        print(f"{func:<30} | {count:<10}")
    
    print("\n=== Sample Record ===")
    cursor.execute("SELECT id, func, args_json, expected_json FROM survival_tests LIMIT 1")
    sample = cursor.fetchone()
    if sample:
        record_id, func, args, expected = sample
        print(f"ID: {record_id}")
        print(f"Function: {func}")
        print("Arguments:")
        print(json.dumps(json.loads(args), indent=2))
        print("Expected Output:")
        print(json.dumps(json.loads(expected), indent=2))
    
    conn.close()

if __name__ == "__main__":
    main()
