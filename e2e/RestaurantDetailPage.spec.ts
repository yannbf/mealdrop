import { test, expect } from '@playwright/test';

test('should open modal when clicking on the item', async ({ page }) => {
  await page.goto('http://localhost:3000/restaurants/1');

  const item = await page.getByText(/Cheeseburger/i);
  await item.click();

  const modal = await page.getByTestId('modal');
  await expect(modal).toBeVisible();
});
