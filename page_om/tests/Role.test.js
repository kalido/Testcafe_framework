import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'
import {Role} from 'testcafe'

const normalUser = Role('https://www.saucedemo.com/', async t => {
	await t
        .typeText(LoginPage.userNameField, CREDENTIALS.STANDARD_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.STANDARD_USER.PASSWORD)
        .click(LoginPage.loginButton)
    await t.expect(ProductsPage.productsTitle.exists).ok()
    
});

fixture('Optional feature testing')

//Test-01
test('Login_using_a_Role', async t => {
    await t.useRole(normalUser)  
})