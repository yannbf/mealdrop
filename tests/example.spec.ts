import { test, expect, takeArchive } from '@chromaui/test-archiver'

test('Home page loads', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page).toHaveTitle(/Mealdrop - find your next meal/)

  await page.waitForTimeout(3000)
})

test('Order created', async ({ page }, testInfo) => {
  await page.goto('http://localhost:3000/restaurants/2')

  await page.waitForTimeout(1000)
  await takeArchive(page, testInfo)

  await page.getByText('Fries').first().click()

  await expect(page.getByTestId('modal')).toBeVisible()
  await takeArchive(page, testInfo)

  await page.getByText(/add for €2\.50/).click()

  await page.waitForTimeout(3000)
})
