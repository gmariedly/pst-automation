import { test, expect } from '../../fixtures/pages';
import { customerUser, adminUser, invalidUser } from '../../data/users';


test.describe('Login Page elements are visible', ()=> {
    
    test('Email input is visible', async({loginPage}) =>{
        await expect (loginPage.emailInput).toBeVisible();
    })

    test('Password input is visible', async({loginPage}) =>{
        await expect (loginPage.passwordInput).toBeVisible();
        await expect (loginPage.passControlText).toHaveText('Password *')
    })

    test('Submit button is visible', async({loginPage}) =>{
        await expect (loginPage.submitButton).toBeVisible();
        await expect (loginPage.submitButton).toHaveText('Login');
    })

    test('Email address text is visible', async({loginPage}) =>{
        await expect (loginPage.emailControlText).toBeVisible();
        await expect (loginPage.emailControlText).toContainText('Email address *');
    })

    test('Your password text is visible', async({loginPage}) =>{
        await expect (loginPage.passControlText).toBeVisible();
        await expect (loginPage.passControlText).toHaveText('Password *');
        await expect (loginPage.visibleButton).toBeVisible();
    })

    test('Login title is visible', async({loginPage}) =>{
        await expect (loginPage.passControlText).toBeVisible();
    })

    test('Sign in with google is visible', async({loginPage}) =>{
        await expect (loginPage.googleBtn).toBeVisible();
    })

    test('Alt login method is visible', async({loginPage}) =>{
        await expect (loginPage.altLoginMethod).toBeVisible();
        await expect (loginPage.altLoginMethod).toHaveText('or use');
    })


    test('Other options at the bottom are visible', async({loginPage}) =>{
        await expect (loginPage.registerText).toBeVisible();
        await expect (loginPage.registerText).toContainText('Not yet an account?');
        await expect (loginPage.registerLink).toBeVisible();
        await expect (loginPage.registerLink).toContainText('Register your account');
        await expect (loginPage.forgotPassLink).toContainText('Forgot your Password?');
        await expect (loginPage.forgotPassLink).toBeVisible();

    })

})

test.describe('Login with valid credentials', ()=>{

    test('Admin user login successful', async({loginPage}) =>{
        await loginPage.login(adminUser.email,adminUser.password);
        await expect(loginPage.page).toHaveURL('/admin/dashboard');
    })

    test('Customer user login successful', async({loginPage}) =>{
        await loginPage.login(customerUser.email,customerUser.password);
        await expect(loginPage.page).toHaveURL('/account');
    })

})

test.describe('Login with invalid credentials', ()=>{

    test('Login with invalid user', async({loginPage}) =>{
        await loginPage.login(invalidUser.email,invalidUser.password);
        await expect(loginPage.errorMessage).toBeVisible();
    })

    test('Email input is empty', async({loginPage}) =>{
        await loginPage.login('','123456');
        await expect(loginPage.emailError).toBeVisible();
    })
    
    test('Password input is empty', async({loginPage}) =>{
        await loginPage.login(invalidUser.email,'');
        await expect(loginPage.passError).toBeVisible();
    })

    test('Inputs with no data', async({loginPage}) =>{
        await loginPage.login('','');
        await expect(loginPage.passError).toBeVisible();
        await expect(loginPage.emailError).toBeVisible();
    })

})

test.describe('Valid links', ()=>{

    test('User clicks on Register your account', async({loginPage}) =>{
        await loginPage.registerLink.click();
        await expect (loginPage.page).toHaveURL('/auth/register');
    })

     test('User clicks on Forgot your password', async({loginPage}) =>{
        await loginPage.forgotPassLink.click();
        await expect (loginPage.page).toHaveURL('/auth/forgot-password');
    })

    test('User clicks on Sign in with Google button', async({loginPage}) =>{
        const popup = await loginPage.clickGoogleSignIn();
        await expect(popup).toHaveURL(/accounts.google.com/);
    })

})