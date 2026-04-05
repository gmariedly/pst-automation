import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/login';

type Pages = {
  loginPage: LoginPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';