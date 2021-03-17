import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import TopbarPage from '../pages/TopbarPage'
import { CREDENTIALS } from '../data/Constants'
import ShopPage from '../pages/ShopPage'
import CheckoutPage from '../pages/CheckoutPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

//Test-01

test('Login_with_a_VALID_user', async t => {
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t.expect(ProductsPage.productsTitle.exists).ok()
})

//Test-02
test('Login_with_a_INVALID_user', async t => {
    await LoginPage.submitLogin(CREDENTIALS.INVALID_USER.USERNAME,CREDENTIALS.INVALID_USER.PASSWORD);
    await t.expect(LoginPage.errorMessage.exists).ok()
}) 

//Test-03
test('Logout_from_products_page', async t => {
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t
        .click(TopbarPage.burgerMenu)
        .click(TopbarPage.logoutButton)

    await t.expect(LoginPage.loginButton.exists).ok()
}) 

//Test-04
test('Navigate_to_the_shopping_cart', async t => {
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t
        .click(TopbarPage.shopCarIcon)
    
    await t.expect(ShopPage.shopCartTitle.exists).ok()
}) 

//Test-05
test('Add_a_single_item_to_the_shopping_cart', async t => {
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t
        .click(ProductsPage.firstElement)
        .click(TopbarPage.shopCarIcon)

    await t.expect(ShopPage.oneCartItem.exists).ok()
}) 

//Test-06 
test('Add_multiple_items_to_the_shopping_cart', async t => {  
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);  
    await ShopPage.multipleItems()
    //expect is on the multipleItems Function.
}) 

//Test-07
test('Continue_with_missing_mail_information', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t
        .click(ProductsPage.firstElement)
        .click(TopbarPage.shopCarIcon)
        .click(ShopPage.checkOut)
        .click(CheckoutPage.continueButton)

    await t.expect(CheckoutPage.errorMessage.exists).ok()
})

//Test-8
test('Fill_user_s_information', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t
        .click(ProductsPage.firstElement)
        .click(TopbarPage.shopCarIcon)
        .click(ShopPage.checkOut)
    await CheckoutPage.fillInformation('test','test','test')

    await t.expect(CheckoutPage.finishButton.exists).ok()
})

//Test-9
test('Final_order_items', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await ShopPage.compareItems()
    //expect is on the compareItems Function.
})

//Test-10
test('Complete_a_purchase', async t =>{
    await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
    await t
        .click(ProductsPage.firstElement)
        .click(TopbarPage.shopCarIcon)
        .click(ShopPage.checkOut)
    await CheckoutPage.fillInformation('test','test','test')
    await t
        .click(CheckoutPage.finishButton)

    await t.expect(CheckoutPage.finishTitle.exists).ok()
})