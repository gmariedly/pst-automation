import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

const env = process.env.TEST_ENV ?? 'dev';
dotenv.config({ path: path.resolve(__dirname, `.env.${env}`) });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 10,
  reporter: [
    ['html', { open: 'on-failure' }],
    ['list'],
  ],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
      locale: 'en-US',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});