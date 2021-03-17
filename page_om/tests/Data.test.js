import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import TopbarPage from '../pages/TopbarPage'
import { CREDENTIALS } from '../data/Constants'
import ShopPage from '../pages/ShopPage'
import CheckoutPage from '../pages/CheckoutPage'

const dataSet = require('../data/data.json');

fixture `Data-Driven Tests`
    .page `https://www.saucedemo.com/`;

dataSet.forEach(data => {
    test(`Fill information as '${data.firstName}'`, async t => {
        await t
        await LoginPage.submitLogin(CREDENTIALS.STANDARD_USER.USERNAME,CREDENTIALS.STANDARD_USER.PASSWORD);
        await t
            .click(ProductsPage.firstElement)
            .click(TopbarPage.shopCarIcon)
            .click(ShopPage.checkOut)
        await CheckoutPage.fillInformation(data.firstName,data.lastName,data.zip)
    
        await t.expect(CheckoutPage.finishButton.exists).ok()
    });
});