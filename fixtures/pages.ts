import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/auth/LoginPage';
import { SignupPage } from '../pages/auth/SignupPage';

type Pages = {
  loginPage: LoginPage
  signupPage: SignupPage
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await use(loginPage)
  },
  signupPage: async ({ page }, use ) => {
    const signupPage = new SignupPage(page)
    await signupPage.goto()
    await use(signupPage)
  }
});



export { expect } from '@playwright/test';