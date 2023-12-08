import { test, expect } from '@chromaui/test-archiver'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mealdrop - find your next meal/)
})
