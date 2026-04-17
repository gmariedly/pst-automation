import { Page, Locator } from '@playwright/test';

export class SignupPage {
    readonly page: Page

    readonly signupTitle: Locator
    readonly firstnameTitle: Locator
    readonly firstnameInput: Locator
    readonly lastnameTitle: Locator
    readonly lastnameInput: Locator
    readonly dateofbirthTitle: Locator
    readonly dateofbirthInput: Locator
    readonly streeTitle: Locator
    readonly streetInput: Locator
    readonly postalcodeTitle: Locator
    readonly postalcodeInput: Locator
    readonly cityTitle: Locator
    readonly cityInput: Locator
    readonly stateTitle: Locator
    readonly stateInput: Locator
    readonly countryTitle: Locator
    readonly countryDropdown: Locator
    readonly phoneTitle: Locator
    readonly phoneInput: Locator
    readonly emailaddressTitle: Locator
    readonly emailaddressInput: Locator
    readonly passwordTitle: Locator
    readonly passwordInput: Locator
    readonly passwordHelp: Locator;
    readonly visibleButton: Locator
    readonly passwordStrength: Locator
    readonly registerButton: Locator

    constructor (page: Page){

        this.page = page
        this.signupTitle = page.getByRole('heading', { name: 'Customer registration' })
        this.firstnameTitle = page.locator('label[for="first_name"]')
        this.firstnameInput = page.locator('[data-test="first-name"]')
        this.lastnameTitle = page.locator('label[for="last_name"]')
        this.lastnameInput = page.locator('[data-test="last-name"]')
        this.dateofbirthTitle = page.locator('label[for="dob"]')
        this.dateofbirthInput = page.locator('[data-test="dob"]')
        this.streeTitle = page.locator('label[for="street"]')
        this.streetInput = page.locator('[data-test="street"]')
        this.postalcodeTitle = page.locator('label[for="postal_code"]')
        this.postalcodeInput = page.locator('[data-test="postal_code"]')
        this.cityTitle = page.locator('label[for="city"]')
        this.cityInput = page.locator('[data-test="city"]')
        this.stateTitle = page.locator('label[for="state"]')
        this.stateInput = page.locator('[data-test="state"]')
        this.countryTitle = page.locator('label[for="country"]')
        this.countryDropdown = page.locator('[data-test="country"]')
        this.phoneTitle = page.locator('label[for="phone"]')
        this.phoneInput = page.locator('[data-test="phone"]')
        this.emailaddressTitle = page.locator('label[for="email"]')
        this.emailaddressInput = page.locator('[data-test="email"]')
        this.passwordTitle = page.locator('label[for="password"]')
        this.passwordInput = page.locator('[data-test="password"]')
        this.visibleButton = page.locator('[data-icon="eye"]')
        this.passwordHelp = page.locator('#passwordHelp')
        this.passwordStrength = page.locator('.password-strength')
        this.registerButton = page.locator('[data-test="register-submit"]')

    }

    async goto() {
    await this.page.goto('/auth/register')
    }

    async register(firstName:string, lastName: string, dateBirth:string, street:string, postalCode:string, city:string, state:string, country:string, phone:string, email:string, password:string){
        await this.firstnameInput.fill(firstName)
        await this.lastnameInput.fill(lastName)
        await this.dateofbirthInput.fill(dateBirth)
        await this.streetInput.fill(street)
        await this.postalcodeInput.fill(postalCode)
        await this.cityInput.fill(city)
        await this.stateInput.fill(state)
        await this.countryDropdown.selectOption(country)
        await this.phoneInput.fill(phone)
        await this.emailaddressInput.fill(email)
        await this.passwordInput.fill(password)
        await this.registerButton.click()
    }

    
}