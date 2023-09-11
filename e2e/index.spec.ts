import { test, expect } from '@playwright/test';

const host = process.env.APP_HOST ? process.env.APP_HOST : "localhost"

test('', async({page}) => {
  await page.goto('http://'+host+':5000/')
  await page.getByRole('button', {name: '+'}).click()
  await page.getByRole('button', {name: '+'}).click()
  await page.getByRole('button', {name: '+'}).click()
  await page.getByRole('button', {name: '-'}).click()
  await page.getByRole('button', {name: 'save'}).click()
  await page.screenshot({ path: 'screenshot.png' })
})

