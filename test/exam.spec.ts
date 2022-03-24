import { test, expect } from '@playwright/test'

test("Simple basic test", async({ page }) => {
    await page.goto("https://www.google.com")
})