import { test, expect } from '@playwright/test';

test('Проверка телефона', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');
  await page.getByRole('link', { name: '+358 9 000' }).click();

});

test('Навигация по сайту', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.locator('.main__header__logo').click();
  await page.getByRole('link', { name: 'Insurance', exact: true }).click();
  await page.getByRole('link', { name: 'About us' }).first().click();
  await page.getByText('Blog').first().click();
  await page.getByRole('link', { name: 'Review' }).first().click();
  await page.getByRole('link', { name: 'Contact', exact: true }).click();
  await page.getByRole('link', { name: 'My account' }).click();
  await page.getByRole('button', { name: 'Get started' }).click();
  await page.getByRole('button', { name: 'Сhoose insurance' }).click();
});

test('Переключение языка', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('combobox').selectOption('fin');
  await page.getByRole('combobox').selectOption('en');

});

test('Проверка вычисления цены', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Calculate the price' }).first().click();
  await page.getByRole('link', { name: 'Calculate the price' }).nth(1).click();
  await page.getByRole('link', { name: 'Calculate the price' }).nth(2).click();
  await page.getByRole('link', { name: 'Calculate the price' }).nth(3).click();
});

test('Переключение отзывов', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.locator('.arrow-right').click();
  await page.locator('.arrow-left').click();

});

test('Проверка ссылок в подвале', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('link', { name: 'Car insurance' }).click();
  await page.getByRole('link', { name: 'Home insurance' }).click();
  await page.getByRole('link', { name: 'Travel insurance' }).click();
  await page.getByRole('link', { name: 'Pet insurance' }).click();
  await page.getByRole('link', { name: 'Blog' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'About us' }).click();
  await page.getByRole('link', { name: 'Partners' }).click();
  await page.getByRole('contentinfo').getByRole('link', { name: 'Review' }).click();
  await page.getByRole('link', { name: 'Contact us' }).click();
  await page.getByRole('link', { name: 'Terms' }).click();
  await page.getByRole('link', { name: 'Privacy' }).click();
  await page.getByRole('link', { name: 'Cookies' }).click();
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).first().click();
});

test('Проверка подписки по e-mail', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('textbox', { name: 'Email address' }).click();
  await page.getByRole('textbox', { name: 'Email address' }).fill('example@gmail.com');
  await page.locator('.submit-btn').click();
  await page.getByRole('button', { name: 'OK' }).click();
});

test('Проверка ссылок на соц. сети', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/#');

  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(1).click();
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(2).click();
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('contentinfo').getByRole('link').filter({ hasText: /^$/ }).nth(4).click();
});