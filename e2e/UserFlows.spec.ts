import { test, expect } from '@playwright/test';

test('should complete the full user journey from home to success page', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Navigate to Restaurants page
  await page.getByText('View all restaurants').click();

  // Select "Burgers" category
  await page.getByTestId('Burgers').click();

  // Select the first restaurant from the list
  const restaurantCards = await page.locator('[data-testid="restaurant-card"]');
  await restaurantCards.first().click();

  // Add Cheeseburger to the cart
  const foodItem = await page.getByText(/Cheeseburger/i);
  await foodItem.click();

  // Increase quantity by one in the modal
  await page.locator('[aria-label="increase quantity by one"]').click();
  await page.locator('[aria-label="confirm"]').click();

  // Verify that the quantity is updated to 2
  const cheeseburgerItem = foodItem.locator('..');
  await expect(cheeseburgerItem.locator('[aria-label="food quantity"]')).toHaveText('2');

  // Verify sidebar contains 2 items
  await page.locator('[aria-label="food cart"]').click();
  const sidebar = await page.locator('[data-testid="sidebar"]');

  const foodItemSelector = sidebar.getByRole('combobox');
  await expect(foodItemSelector).toHaveValue('2');

  // Go to "Checkout" page
  await page.getByText(/checkout/i).click();

  // Fill in user details
  await page.getByPlaceholder('John').fill('Jane');
  await page.getByPlaceholder('Doe').fill('Doe');
  await page.getByPlaceholder('email address').fill('janedoe@gmail.com');
  await page.getByPlaceholder('phone number').fill('0612345678');

  // Go to the next step
  await page.getByRole('button', { name: 'Next' }).click();

  // Fill in delivery details
  await page.getByPlaceholder('Some street,').click();
  await page.getByPlaceholder('Some street,').fill('Somestreet 14');
  await page.getByPlaceholder('AAAAXX').click();
  await page.getByPlaceholder('AAAAXX').fill('1043DX');
  await page.getByPlaceholder('Amsterdam').click();
  await page.getByPlaceholder('Amsterdam').fill('Amsterdam');

  // Complete the order
  await page.getByRole('button', { name: 'Complete order' }).click();

  await expect(page.locator('h1')).toContainText('Order confirmed!');
});


// await page.goto('http://localhost:3000/');
// await page.getByRole('button', { name: 'View all restaurants' }).click();
// await page.getByRole('link', { name: 'Burgers' }).click();
// await page.getByRole('heading', { name: 'Burger Kingdom' }).click();
// await page.locator('div').filter({ hasText: /^CheeseburgerNice grilled burger with cheese€8\.50$/ }).first().click();
// await page.getByLabel('increase quantity by one').click();
// await page.getByLabel('confirm').click();
// await page.getByLabel('food cart').click();
// await page.getByRole('button', { name: 'Checkout' }).click();
// await page.getByPlaceholder('John').click();
// await page.getByPlaceholder('John').fill('Jane');
// await page.getByPlaceholder('John').press('Tab');
// await page.getByPlaceholder('Doe').fill('Doe');
// await page.getByPlaceholder('Doe').press('Tab');
// await page.getByPlaceholder('email address').fill('janedoe@gmail.com');
// await page.getByPlaceholder('email address').press('Tab');
// await page.getByPlaceholder('phone number').fill('testing');
// await page.getByPlaceholder('phone number').press('Enter');
// await page.getByRole('button', { name: 'Next' }).click();
// await page.getByPlaceholder('Some street,').click();
// await page.getByPlaceholder('Some street,').fill('sdasd');
// await page.getByPlaceholder('AAAAXX').click();
// await page.getByPlaceholder('AAAAXX').fill('asd');
// await page.getByPlaceholder('Amsterdam').click();
// await page.getByPlaceholder('Amsterdam').fill('sdas');
// await page.getByRole('button', { name: 'Complete order' }).click();
