import { test, expect } from '@playwright/test';

test('Проверка телефона', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  const phoneLink = page.getByRole('link', { name: '+358 9 000' });
  await phoneLink.click();

  await expect(phoneLink).toHaveAttribute('href', 'tel:+3589000');
});

test('Навигация по сайту', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  const initialURL = page.url();

  await page.locator('.main__header__logo').click();
  await expect(page).toHaveURL('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Insurance', exact: true }).click();
  await expect(page).toHaveURL(/insurance/);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'About us' }).first().click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Blog' }).first().click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Review' }).first().click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'My account' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('button', { name: 'Get started' }).click();
  await expect(page).toHaveURL(/insurance/);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('button', { name: 'Сhoose insurance' }).click();
  await expect(page).toHaveURL(/insurance/);
});

test('Переключение языка', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('combobox').selectOption('fin');
  await expect(page.locator('html')).toHaveAttribute('lang', 'fi');

  await page.getByRole('combobox').selectOption('en');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  
});

test('Проверка вычисления цены', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Calculate the price' }).first().click();
  await expect(page).toHaveURL(/insurance/);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Calculate the price' }).nth(1).click();
  await expect(page).toHaveURL(/insurance/);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Calculate the price' }).nth(2).click();
  await expect(page).toHaveURL(/insurance/);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Calculate the price' }).nth(3).click();
  await expect(page).toHaveURL(/insurance/);
});

test('Переключение отзывов', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  const reviewsList = page.locator('.reviews__list');
  await expect(reviewsList).toBeVisible();

  const activeReview = page.locator('.reviews__list .review').first();
  const initialText = await activeReview.textContent(); 

  await page.locator('.arrow-right').click();
  await expect(activeReview).not.toHaveText(initialText); 

  await page.locator('.arrow-left').click();
  await expect(activeReview).toHaveText(initialText);

});

test('Проверка ссылок в подвале', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  const initialURL = page.url();

  await page.getByRole('link', { name: 'Car insurance' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Home insurance' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Travel insurance' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Pet insurance' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link', { name: 'About us' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Partners' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link', { name: 'Review' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Contact us' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Terms' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Privacy' }).click();
  await expect(page).not.toHaveURL(initialURL);
  
  await page.goto('https://polis812.github.io/vacuu/#');
  
  await page.getByRole('link', { name: 'Cookies' }).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).first().click();
  await expect(page).toHaveURL(/insurance/);
});

test('Проверка подписки по e-mail', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  const emailInput = page.getByRole('textbox', { name: 'Email address' });
  await expect(emailInput).toBeVisible();
  await expect(emailInput).toBeEnabled();

  await emailInput.fill('example@gmail.com');

  const submitButton = page.locator('.submit-btn');
  await expect(submitButton).toBeVisible();
  await expect(submitButton).toBeEnabled();

  await submitButton.click();

  const successMessage = page.locator('.swal2-confirm.swal2-styled');
  const okButton = page.getByRole('button', { name: 'OK' });
  await okButton.waitFor();

  await expect(successMessage.or(okButton)).toBeVisible();

  if (await okButton.isVisible()) {
    await okButton.click();
  }
});

test('Проверка ссылок на соц. сети', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  const initialURL = page.url();

  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(2).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
  await expect(page).not.toHaveURL(initialURL);

  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(4).click();
  await expect(page).not.toHaveURL(initialURL);
});