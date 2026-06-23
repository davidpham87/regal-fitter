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

    // Click on the Fitter navigation link in the header using the exact href selector
    console.log("Navigating to 'Fitter' page...");
    const fitterLink = page.locator('header a[href="#/fitter"]');
    await fitterLink.waitFor({ state: 'visible', timeout: 5000 });
    await fitterLink.click();

    // Wait for the "Run Simulation" button to be visible
    const runBtn = page.locator('button:has-text("Run Simulation")');
    console.log("Waiting for 'Run Simulation' button...");
    await runBtn.waitFor({ state: 'visible', timeout: 10000 });
    
    console.log("Clicking 'Run Simulation' button...");
    await runBtn.click();
    
    // Wait for the simulation process to finish.
    console.log("Waiting for simulation to start...");
    await page.waitForSelector('text=Running Stage', { state: 'attached', timeout: 10000 }).catch(() => {});
    console.log("Waiting for simulation to finish...");
    await page.waitForSelector('text=Running Stage', { state: 'detached', timeout: 120000 });
    console.log("Simulation finished.");

    // Wait for the background resampling to start and complete
    console.log("Waiting for resampling to finish...");
    await page.waitForSelector('text=Resampling Across Web Workers', { state: 'attached', timeout: 10000 }).catch(() => {});
    await page.waitForSelector('text=Resampling Across Web Workers', { state: 'detached', timeout: 60000 }).catch(() => {});

    // Wait for the result charts to render
    console.log("Waiting for result charts to render...");
    await page.waitForSelector('.vega-embed', { state: 'visible', timeout: 30000 });

    // Take a screenshot of the Result Charts panel
    const resultChartsPath = '/Users/david/.gemini/antigravity-cli/brain/810b3519-76d9-4099-a793-45557888be58/result_charts.png';
    console.log(`Taking screenshot of Result Charts and saving to ${resultChartsPath}...`);
    await page.screenshot({ path: resultChartsPath, fullPage: true });

    // Click on the Config Distributions tab
    console.log("Clicking 'Config Distributions' tab...");
    const configTab = page.locator('button:has-text("Config Distributions")');
    await configTab.waitFor({ state: 'visible', timeout: 10000 });
    await configTab.click();

    // Log the results metadata from the CLJS DB
    const resultsCount = await page.evaluate(() => {
      try {
        const db = cljs.core.deref(re_frame.db.app_db);
        const results = cljs.core.get(db, cljs.core.keyword("results"));
        const leaky = cljs.core.get(results, cljs.core.keyword("leaky"));
        const count = cljs.core.count(leaky);
        if (count === 0) return { count: 0 };
        const firstItem = cljs.core.first(leaky);
        const keys = cljs.core.keys(firstItem);
        
        return {
          count: count,
          keys: cljs.core.pr_str(keys),
          first: cljs.core.pr_str(firstItem)
        };
      } catch (e) {
        return { error: e.message };
      }
    });
    console.log("RESULTS METADATA:", JSON.stringify(resultsCount, null, 2));

    // Wait for the posterior charts/plots to render
    console.log("Waiting for posterior charts to render...");
    // Since we took a screenshot, let's wait a little bit for the charts to draw
    await page.waitForTimeout(2000);

    // Take a screenshot of the configuration distributions panel
    const screenshotPath = '/Users/david/.gemini/antigravity-cli/brain/810b3519-76d9-4099-a793-45557888be58/config_distributions.png';
    console.log(`Taking screenshot and saving to ${screenshotPath}...`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log("Playwright run complete!");

  } catch (err) {
    console.error("Test execution failed:", err);
    const errorScreenshotPath = '/Users/david/.gemini/antigravity-cli/brain/810b3519-76d9-4099-a793-45557888be58/error_screenshot.png';
    console.log(`Taking error screenshot at ${errorScreenshotPath}...`);
    await page.screenshot({ path: errorScreenshotPath, fullPage: true });
  } finally {
    await browser.close();
  }
})();
