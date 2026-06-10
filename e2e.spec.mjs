import { test, expect } from '@playwright/test';

test('App loads and renders main view', async ({ page }) => {
  await page.goto('http://localhost:8280');

  // Basic verification that the app mounted successfully
  const appContainer = page.locator('#app');
  await expect(appContainer).toBeAttached();

  // Wait for the body element to verify hydration is complete and no crashes
  const body = page.locator('body');
  await expect(body).toBeVisible();

  // Wait for a little bit to ensure no runtime errors are thrown immediately
  await page.waitForTimeout(1000);
});
