importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js");

let pyodideReadyPromise;
let pyodideInstance;

async function initPyodide() {
    console.log("Worker: Initializing Pyodide");
    pyodideInstance = await loadPyodide();
    await pyodideInstance.loadPackage(["numpy", "scipy"]);

    const response = await fetch('/regal_fit_browser.py');
    const pythonCode = await response.text();

    pyodideInstance.runPython(pythonCode);
    console.log("Worker: Pyodide ready");
}

pyodideReadyPromise = initPyodide();

self.onmessage = async (event) => {
    const { id, type, data } = event.data;
    await pyodideReadyPromise;

    if (type === 'RUN_SIMULATION') {
        const { rec, cfg_dict, n_sims, seed } = data;
        try {
            const clean_cfg = { ...cfg_dict };
            delete clean_cfg.families;

            pyodideInstance.globals.set("worker_rec", pyodideInstance.toPy(rec));
            pyodideInstance.globals.set("worker_cfg_dict", pyodideInstance.toPy(clean_cfg));
            pyodideInstance.globals.set("worker_n_sims", n_sims);
            pyodideInstance.globals.set("worker_seed", seed);

            const pyResult = pyodideInstance.runPython(`
import json
import math

def clean_for_json(obj):
    if isinstance(obj, float):
        if math.isnan(obj): return None
        if math.isinf(obj): return None
        return obj
    elif isinstance(obj, dict):
        return {k: clean_for_json(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [clean_for_json(v) for v in obj]
    else:
        return obj

try:
    args = (worker_rec.to_py() if hasattr(worker_rec, "to_py") else worker_rec, worker_cfg_dict.to_py() if hasattr(worker_cfg_dict, "to_py") else worker_cfg_dict, worker_n_sims, worker_seed)
    res = _simulate_one_combo(args)
    if res is not None:
        json.dumps(clean_for_json(res))
    else:
        None
except Exception as e:
    import traceback
    json.dumps({"error": traceback.format_exc()})
            `);

            let result = null;
            if (pyResult !== undefined && pyResult !== null) {
                 result = JSON.parse(pyResult);
                 if (result && result.error) {
                     throw new Error(result.error);
                 }
            }
            self.postMessage({ id, type: 'SIMULATION_RESULT', result, success: true });
        } catch (error) {
            console.error("Worker error:", error);
            self.postMessage({ id, type: 'SIMULATION_RESULT', error: error.message, success: false });
        }
    }
};
