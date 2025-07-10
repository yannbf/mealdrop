// playwright test go to google.com
import { test, expect } from '@playwright/test'

test('button', async ({ page }) => {
  await page.goto('https://www.google.com')
  await expect(page).toHaveTitle(/Google/i)
})
