#!/bin/bash
set -e

# Run compilation and Python data generation in parallel
npx shadow-cljs compile \
  verify compare-py-cljs prefilter-test generative-tests &
PID_CLJS=$!

PYTHONPATH=. python3 scripts/run_verification.py &
PID_VERIFY=$!

PYTHONPATH=. python3 scripts/run_py_5000.py &
PID_PY5000=$!

PYTHONPATH=. python3 scripts/run_prefilter_comparison.py &
PID_PREFILTER=$!

wait $PID_CLJS $PID_VERIFY $PID_PY5000 $PID_PREFILTER

echo ""
echo "=== Running Generative Tests (Python Hypothesis with -n auto) ==="
PYTHONPATH=. python3 -m pytest -n auto regal_fit_test.py

echo ""
echo "=== Running ClojureScript Verification Tests in Parallel ==="
node out/verify.js &
PID_NODE_VERIFY=$!

node out/compare_py_cljs.js &
PID_NODE_COMPARE=$!

node out/run_prefilter_test.js &
PID_NODE_PRE=$!

PIDS=""
for i in {0..7}; do
  node out/run_generative_tests.js $i 8 &
  PIDS="$PIDS $!"
done

wait $PID_NODE_VERIFY $PID_NODE_COMPARE $PID_NODE_PRE $PIDS

echo ""
echo "=== All Stage 1, 2, and 3 Family Verification Tests Passed Successfully! ==="
