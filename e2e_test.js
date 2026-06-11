const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to app
  await page.goto('http://127.0.0.1:3000');

  // Wait for the app to initialize
  await page.waitForTimeout(2000);

  // Set up console log listening to catch errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });

  // Force a simulation to test the worker
  // Based on your UI logic, but let's try calling worker directly from page
  const workerWorks = await page.evaluate(() => {
    return new Promise((resolve, reject) => {
      try {
        const worker = new Worker('js/worker/worker.js');
        worker.onmessage = (e) => {
          resolve(true);
        };
        worker.onerror = (e) => {
          reject(e.message || 'Worker failed to initialize');
        };

        // Post a dummy message to check if worker is alive
        worker.postMessage({
          id: 1,
          type: "RUN_SIMULATION",
          data: { type: "PING" }
        });

        // Give it 2 seconds to respond
        setTimeout(() => reject('Worker timeout'), 2000);
      } catch (err) {
        reject(err.message);
      }
    });
  });

  console.log("Worker initialized and responded successfully:", workerWorks);
  if (errors.length > 0) {
    console.error("Errors found:", errors);
    process.exit(1);
  }

  await browser.close();
  process.exit(0);
})();
