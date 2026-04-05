import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page

  readonly emailInput: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly errorMessage: Locator
  readonly emailControlText: Locator
  readonly passControlText: Locator
  readonly loginTitleText: Locator
  readonly googleBtn: Locator
  readonly altLoginMethod: Locator
  readonly emailTitle: Locator
  readonly passwordTitle: Locator
  readonly visibleButton: Locator
  readonly registerText: Locator
  readonly registerLink: Locator
  readonly forgotPassLink: Locator
  readonly emailError: Locator
  readonly passError: Locator

  constructor(page: Page) {

    this.page = page;
    this.emailInput    = page.locator('[data-test="email"]')
    this.passwordInput = page.locator('#password')
    this.submitButton  = page.locator('[type="submit"]')
    this.errorMessage  = page.locator('[data-test="login-error"]')
    this.emailControlText = page.locator('label[for="email"]')
    this.passControlText = page.locator('label[for="password"]')
    this.loginTitleText = page.getByTitle('Login')
    this.googleBtn = page.locator('[class="google-sign-in-button"]')
    this.altLoginMethod = page.getByLabel('Alternative login methods')
    this.emailTitle = page.locator('#form-label')
    this.passwordTitle = page.locator('label[for="password"]')
    this.visibleButton = page.locator('[data-icon="eye"]')
    this.registerText = page.getByText('Not yet an account?')
    this.registerLink = page.getByText('Register your account')
    this.forgotPassLink = page.locator('[data-test="forgot-password-link"]')
    this.emailError = page.locator('#email-error')
    this.passError = page.locator('#password-error')
    

  }

  async goto() {
    await this.page.goto('/auth/login')
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }


  async clickGoogleSignIn() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.googleBtn.click();
    return await popupPromise;   
  }
}