const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Forward page console logs to the terminal
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER EXCEPTION:', err.toString()));

  try {
    console.log("Navigating to http://localhost:8080/index.html...");
    await page.goto('http://localhost:8080/index.html');
    
    // Wait for the app container to load
    await page.waitForSelector('#app');
    console.log("Page loaded.");

    // Open the navigation drawer menu
    console.log("Opening navigation menu drawer...");
    const menuBtn = page.locator('button[aria-label="Toggle navigation menu"]');
    await menuBtn.waitFor({ state: 'visible', timeout: 5000 });
    await menuBtn.click();

    // Click on the Fitter navigation link inside the drawer
    console.log("Navigating to 'Fitter' page from drawer...");
    const fitterLink = page.locator('nav a[href="#/fitter"]');
    await fitterLink.waitFor({ state: 'visible', timeout: 5000 });
    await fitterLink.click();

    // The default leaky grid is huge (takes ~1m). 
    // To test Leaky directly while maintaining E2E runtime sanity, we will switch to JSON View
    // and programmatically update the config maps to a sparse leaky grid layout.
    console.log("Clicking 'JSON View' tab...");
    const jsonTab = page.locator('button:has-text("JSON View")');
    await jsonTab.waitFor({ state: 'visible', timeout: 5000 });
    await jsonTab.click();

    console.log("Replacing JSON configuration text with sparse Leaky grid config...");
    const editorArea = page.locator('.cm-content, textarea, [contenteditable="true"]').first();
    await editorArea.waitFor({ state: 'visible', timeout: 5000 });
    
    // Select all and type the modified config
    await editorArea.focus();
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    const sparseConfig = {
      "trial": {
        "n-total": 126,
        "n-per-arm": 63,
        "enroll-bands": [[0, 12, 126]],
        "enforce-no-80-by-today": false,
        "t-now": 28,
        "no-80-slack-months": 2
      },
      "timing": {
        "t-ia": 18,
        "tol-ia": 10,
        "t-upd": 24,
        "tol-upd": 10,
        "t-pr3": 28,
        "tol-pr3": 10,
        "use-pr3-anchor": false
      },
      "bat": {
        "bat-med-grid": [10, 20, 5],
        "bat-shape-grid": [0.8, 1.2, 0.4],
        "bat-strat-bin": 0,
        "bat-leaky-cure-frac-grid": [0.0, 0.2, 0.2],
        "bat-leaky-unc-med-grid": [10, 20, 10],
        "bat-leaky-unc-shape-grid": [0.8, 1.0, 0.2],
        "bat-leak-grid": [0.03, 0.09, 0.06]
      },
      "gps": {
        "gps-med-grid-lo": 12,
        "gps-med-grid-hi": 40,
        "gps-med-grid-n": 3,
        "gps-shape-grid": [0.8, 1.2, 0.4]
      },
      "cure": {
        "cure-frac-grid": [0.0, 0.2, 0.2],
        "cure-unc-med-grid": [10, 30, 20],
        "cure-unc-shape-grid": [0.8, 1.2, 0.4]
      },
      "leaky": {
        "leaky-cure-frac-grid": [0.0, 0.2, 0.2],
        "leaky-unc-med-grid": [10, 30, 20],
        "leaky-unc-shape-grid": [0.8, 1.2, 0.4],
        "leak-grid": [0.03, 0.09, 0.06]
      },
      "prefilter": {
        "prefilter-tol-ia": 2,
        "prefilter-tol-upd": 2,
        "prefilter-tol-pr3": 2,
        "tol-increment-ia-upd": 1,
        "tol-increment-upd-pr3": 1,
        "pool-mos-min-at-ia": 10,
        "bat-surv-36m-max": 0
      },
      "other": {
        "n-sims-screen": 10,
        "n-sims-per-combo": 10,
        "n-ev-ia": 40,
        "n-ev-upd": 60,
        "n-ev-pr3": 70,
        "n-ev-final": 80,
        "n-screen-min-pass": 1,
        "efficacy-hr-min": 0.3,
        "futility-hr-max": 0.8,
        "median-fu-target": 22,
        "median-fu-tol": 4,
        "hr-threshold": 0.65,
        "seed": 42,
        "families": ["leaky"],
        "n-sims-aggregation": 100
      }
    };

    await editorArea.type(JSON.stringify(sparseConfig, null, 2), { delay: 1 });
    
    // Trigger editor blur event to commit form state changes
    console.log("Triggering commit...");
    const headerLabel = page.locator('h2:has-text("Config (JSON)")');
    await headerLabel.click();
    await page.waitForTimeout(2500); // Wait for debounced state updates

    // Click back to Form View to verify changes loaded
    const formTab2 = page.locator('button:has-text("Form View")');
    await formTab2.click();

    // Wait for the "Run Simulation" button to be visible
    const runBtn = page.locator('button:has-text("Run Simulation")');
    console.log("Waiting for 'Run Simulation' button...");
    await runBtn.waitFor({ state: 'visible', timeout: 10000 });
    
    console.log("Clicking 'Run Simulation' button...");
    await runBtn.click();
    
    // Wait for the simulation process to finish.
    console.log("Waiting for simulation to start...");
    await page.waitForSelector('text=Running Stage', { state: 'attached', timeout: 15000 }).catch(() => {});
    console.log("Waiting for simulation to finish...");
    
    await page.waitForSelector('text=Running Stage', { state: 'detached', timeout: 90000 });
    console.log("Simulation finished.");

    // Wait for the background resampling to start and complete
    console.log("Waiting for resampling to finish...");
    await page.waitForSelector('text=Resampling Across Web Workers', { state: 'attached', timeout: 15000 }).catch(() => {});
    await page.waitForSelector('text=Resampling Across Web Workers', { state: 'detached', timeout: 90000 }).catch(() => {});

    // Wait for the result charts to render
    console.log("Waiting for result charts to render...");
    await page.waitForSelector('.vega-embed', { state: 'visible', timeout: 45000 });

    // Take a screenshot of the Result Charts panel
    const resultChartsPath = './result_charts.png';
    console.log(`Taking screenshot of Result Charts and saving to ${resultChartsPath}...`);
    await page.screenshot({ path: resultChartsPath, fullPage: true });

    // Click on the Config Distributions tab
    console.log("Clicking 'Config Distributions' tab...");
    const configTab = page.locator('button:has-text("Config Distributions")');
    await configTab.waitFor({ state: 'visible', timeout: 15000 });
    await configTab.click();

    // Wait for the posterior charts/plots to render
    console.log("Waiting for posterior charts to render...");
    await page.waitForTimeout(4000);

    // Take a screenshot of the configuration distributions panel
    const screenshotPath = './config_distributions.png';
    console.log(`Taking screenshot and saving to ${screenshotPath}...`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log("Playwright run complete!");

  } catch (err) {
    console.error("Test execution failed:", err);
    const errorScreenshotPath = './error_screenshot.png';
    console.log(`Taking error screenshot at ${errorScreenshotPath}...`);
    await page.screenshot({ path: errorScreenshotPath, fullPage: true });
  } finally {
    await browser.close();
  }
})();
