import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page.locator('#exampleModalLabel')).toBeVisible();
  await page.locator('#recipient-email').click();
  await page.locator('#recipient-email').fill('ilahmouid@gmail.com');
  await page.getByLabel('Contact Email:').click();
  await page.getByLabel('Contact Email:').fill('imam lahmouid');
  await page.getByLabel('Message:').click();
  await page.getByLabel('Message:').fill('c\'est mieux sans stephou');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.accept().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();

});