import { test, expect } from '@playwright/test';

test('', async({page}) => {
  await page.goto('http://localhost:5000/')
  await page.getByRole('button', {name: 'save'}).click()
  await page.screenshot({ path: 'screenshot.png' })
})

