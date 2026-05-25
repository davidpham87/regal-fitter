from playwright.sync_api import sync_playwright
import unittest
import time

class TestFormInputs(unittest.TestCase):
    def setUp(self):
        self.playwright = sync_playwright().start()
        self.browser = self.playwright.chromium.launch(headless=True)
        self.context = self.browser.new_context()
        self.page = self.context.new_page()

    def tearDown(self):
        self.context.close()
        self.browser.close()
        self.playwright.stop()

    def test_discovery_view_inputs(self):
        page = self.page
        page.goto("http://localhost:8080")
        page.get_by_role("button", name="Discovery", exact=True).click()
        page.wait_for_timeout(1000)

        # Test BAT Median input
        # It's the first number input
        bat_median_input = page.locator("input[type='number']").nth(0)
        bat_median_input.fill("15.5")
        page.wait_for_timeout(500)
        self.assertEqual(bat_median_input.input_value(), "15.5")

        # Test Placebo Mode checkbox
        placebo_checkbox = page.locator("#placebo-mode")
        placebo_checkbox.click()
        page.wait_for_timeout(1000)
        self.assertTrue(placebo_checkbox.is_checked())

        # When placebo mode is on, GPS Median should equal BAT Median
        # GPS Median is the 3rd number input in Weibull mode
        gps_median_input = page.locator("input[type='number']").nth(2)
        self.assertEqual(gps_median_input.input_value(), "15.5")

    def test_placebo_stress_view_inputs(self):
        page = self.page
        page.goto("http://localhost:8080")
        page.get_by_role("button", name="Placebo Stress", exact=True).click()
        page.wait_for_timeout(1000)

        # Test Sims per Combo input
        sims_input = page.locator("input[name='n-sims']")
        sims_input.fill("5000")
        page.wait_for_timeout(500)
        self.assertEqual(sims_input.input_value(), "5000")

        # Test mOS Grid input (first one)
        mos_grid_first = page.locator("input[type='number']").nth(0)
        mos_grid_first.fill("12")
        page.wait_for_timeout(500)
        self.assertEqual(mos_grid_first.input_value(), "12")

if __name__ == "__main__":
    unittest.main()
