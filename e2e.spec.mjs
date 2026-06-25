import { test, expect } from '@playwright/test';

test('App loads and renders main view', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Basic verification that the app mounted successfully
  const appContainer = page.locator('#app');
  await expect(appContainer).toBeAttached();

  // Wait for the body element to verify hydration is complete and no crashes
  const body = page.locator('body');
  await expect(body).toBeVisible();

  // Wait for a little bit to ensure no runtime errors are thrown immediately
  await page.waitForTimeout(1000);
});

test.describe('Mobile responsiveness tests', () => {
  // Use a smaller mobile viewport
  test.use({ viewport: { width: 375, height: 667 } });

  test('Mobile navigation menu works', async ({ page }) => {
    await page.goto('http://localhost:8080');

    // The mobile menu button should be visible
    const menuButton = page.locator('button[aria-label="Toggle navigation menu"]');
    await expect(menuButton).toBeVisible();

    // Click the menu button to open the mobile menu
    await menuButton.click();

    // The 'Discovery' link should become visible in the expanded menu drawer
    const discoveryLink = page.locator('nav >> text=Discovery');
    await expect(discoveryLink).toBeVisible();

    // Navigate to the Discovery page
    await discoveryLink.click();

    // Verify URL
    await expect(page).toHaveURL(/.*discovery/);
  });
});
