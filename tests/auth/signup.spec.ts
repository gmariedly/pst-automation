import { newUser } from '../../data/users';
import { test, expect } from '../../fixtures/pages';

test.describe('UI Validation, all elements are visible', ()=>{

    test('Signup page title is visible', async({signupPage}) =>{
        await expect (signupPage.signupTitle).toBeVisible()
        await expect (signupPage.signupTitle).toContainText('Customer registration')
    })

    test('First Name input is visible', async({signupPage}) =>{
        await expect (signupPage.firstnameTitle).toBeVisible()
        await expect (signupPage.firstnameTitle).toContainText('First name')
        await expect (signupPage.firstnameInput).toBeVisible()
        await expect (signupPage.firstnameInput).toBeEmpty()
        await expect (signupPage.firstnameInput).toHaveAttribute('placeholder', 'First name *')
    })
    test('Last Name input is visible', async({signupPage}) =>{
        await expect (signupPage.lastnameTitle).toBeVisible()
        await expect (signupPage.lastnameTitle).toContainText('Last name')
        await expect (signupPage.lastnameInput).toBeVisible()
        await expect (signupPage.lastnameInput).toBeEmpty()
        await expect (signupPage.lastnameInput).toBeVisible()
        await expect (signupPage.lastnameInput).toHaveAttribute('placeholder', 'Your last name *')
    })
    test('Date of birth input is visible', async({signupPage}) =>{
        await expect (signupPage.dateofbirthTitle).toBeVisible()
        await expect (signupPage.dateofbirthTitle).toContainText('Date of Birth *')
        await expect (signupPage.dateofbirthInput).toBeVisible()
        await expect (signupPage.dateofbirthInput).toBeEmpty()
        await expect (signupPage.dateofbirthInput).toHaveAttribute('placeholder', 'YYYY-MM-DD')
    })
    test('Street input is visible', async({signupPage}) =>{
        await expect (signupPage.streeTitle).toBeVisible()
        await expect (signupPage.streeTitle).toContainText('Street')
        await expect (signupPage.streetInput).toBeVisible()
        await expect (signupPage.streetInput).toBeEmpty()
        await expect (signupPage.streetInput).toHaveAttribute('placeholder', 'Your Street *')
    })
    test('Postal Code input is visible', async({signupPage}) =>{
        await expect (signupPage.postalcodeTitle).toBeVisible()
        await expect (signupPage.postalcodeTitle).toContainText('Postal code')
        await expect (signupPage.postalcodeInput).toBeVisible()
        await expect (signupPage.postalcodeInput).toBeEmpty()
        await expect (signupPage.postalcodeInput).toHaveAttribute('placeholder', 'Your Postcode *')
    })
    test('City input is visible', async({signupPage}) =>{
        await expect (signupPage.cityTitle).toBeVisible()
        await expect (signupPage.cityTitle).toContainText('City')
        await expect (signupPage.cityInput).toBeVisible()
        await expect (signupPage.cityInput).toBeEmpty()
        await expect (signupPage.cityInput).toHaveAttribute('placeholder', 'Your City *')
    })
    test('State input is visible', async({signupPage}) =>{
        await expect (signupPage.stateTitle).toBeVisible()
        await expect (signupPage.stateTitle).toContainText('State')
        await expect (signupPage.stateInput).toBeVisible()
        await expect (signupPage.stateInput).toBeEmpty()
        await expect (signupPage.stateInput).toHaveAttribute('placeholder', 'Your State *')
    })
    test('Country dropdown is visible', async({signupPage}) =>{
        await expect (signupPage.countryTitle).toBeVisible()
        await expect (signupPage.countryTitle).toContainText('Country')
        await expect (signupPage.countryDropdown).toBeVisible()
    })
    test('Phone input is visible', async({signupPage}) =>{
        await expect (signupPage.phoneTitle).toBeVisible()
        await expect (signupPage.phoneTitle).toContainText('Phone')
        await expect (signupPage.phoneInput).toBeVisible()
        await expect (signupPage.phoneInput).toBeEmpty()
        await expect (signupPage.phoneInput).toHaveAttribute('placeholder', 'Your phone *')
    })
    test('Email address input is visible', async({signupPage}) =>{
        await expect (signupPage.emailaddressTitle).toBeVisible()
        await expect (signupPage.emailaddressTitle).toContainText('Email address')
        await expect (signupPage.emailaddressInput).toBeVisible()
        await expect (signupPage.emailaddressInput).toBeEmpty()
        await expect (signupPage.emailaddressInput).toHaveAttribute('placeholder', 'Your email *')
    })
     test('Password input is visible', async({signupPage}) =>{
        await expect (signupPage.passwordTitle).toBeVisible()
        await expect (signupPage.passwordTitle).toContainText('Password')
        await expect (signupPage.passwordInput).toBeVisible()
        await expect (signupPage.passwordInput).toBeEmpty()
        await expect (signupPage.passwordInput).toHaveAttribute('placeholder', 'Your password')
    })
    test('Password help text is visible', async({signupPage}) =>{
        await expect (signupPage.passwordHelp).toBeVisible()
        await expect (signupPage.passwordHelp).toContainText('Your password must')
        await expect (signupPage.passwordHelp).toContainText('Be at least 8 characters long')
        await expect (signupPage.passwordHelp).toContainText('Contain both uppercase and lowercase letters')
        await expect (signupPage.passwordHelp).toContainText('Include at least one number')
        await expect (signupPage.passwordHelp).toContainText('Have at least one special symbol (e.g., @, #, $, etc.)')
    })
    test('Password strenght text is visible', async({signupPage}) =>{
        await expect (signupPage.passwordStrength).toBeVisible()
        await expect (signupPage.passwordStrength).toContainText('Weak')
        await expect (signupPage.passwordStrength).toContainText('Moderate')
        await expect (signupPage.passwordStrength).toContainText('Strong')
        await expect (signupPage.passwordStrength).toContainText('Very Strong')
        await expect (signupPage.passwordStrength).toContainText('Excellent')
    })
    test('Register button is visible', async({signupPage}) =>{
        await expect (signupPage.registerButton).toBeVisible()
        await expect (signupPage.registerButton).toBeEnabled()
    })
    
})

test.describe('New user, Signup success', ()=>{
    test('Happy Path', async({signupPage})=>{
        await signupPage.register(newUser.firstName, newUser.lastName, newUser.dateBirth, newUser.street, newUser.postalCode, newUser.city, newUser.state, newUser.country, newUser.phone, newUser.email, newUser.password)

        await expect(signupPage.page).toHaveURL('/auth/login')
    })
})

test.describe('Password format validation', ()=>{
    test('User set a password with > 8 characters long', async({signupPage})=>{
        await signupPage.register(newUser.firstName, newUser.lastName, newUser.dateBirth, newUser.street, newUser.postalCode, newUser.city, newUser.state, newUser.country, newUser.phone, newUser.email, 'passW1#')
        
        await expect(signupPage.page.getByText('Password must be minimal 6 characters long.')).toBeVisible()
    })
        test('User set a password without uppercase', async({signupPage})=>{
        await signupPage.register(newUser.firstName, newUser.lastName, newUser.dateBirth, newUser.street, newUser.postalCode, newUser.city, newUser.state, newUser.country, newUser.phone, newUser.email, 'password1#')

        await expect(signupPage.page.getByText('Password can not include invalid characters.')).toBeVisible()
    })
        test('User set a password without lowercase', async({signupPage})=>{
        await signupPage.register(newUser.firstName, newUser.lastName, newUser.dateBirth, newUser.street, newUser.postalCode, newUser.city, newUser.state, newUser.country, newUser.phone, newUser.email, 'PASSWORD1#')

        await expect(signupPage.page.getByText('Password can not include invalid characters.')).toBeVisible()
    })
        test('User set a password without at least one number', async({signupPage})=>{
        await signupPage.register(newUser.firstName, newUser.lastName, newUser.dateBirth, newUser.street, newUser.postalCode, newUser.city, newUser.state, newUser.country, newUser.phone, newUser.email, 'PassWords#')

        await expect(signupPage.page.getByText('Password can not include invalid characters.')).toBeVisible()
    })

})