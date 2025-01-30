import { test, expect } from "@playwright/test";

const goToHomepage = async ({ page }) =>
  await page.goto("http://localhost:3000/");

test("login ui interaction", async ({ page }) => {
  await goToHomepage({ page });

  await expect(
    page.getByRole("paragraph").filter({ hasText: "Log in" })
  ).toBeVisible();

  await expect(page.locator('input[name="email"]')).toBeEditable();
  await expect(page.locator('input[name="password"]')).toBeEditable();
});
