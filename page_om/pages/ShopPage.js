import { Selector, t} from 'testcafe'
import CheckoutPage from './CheckoutPage'

class ShopPage{
    constructor(){
        this.shopCartTitle = Selector('.subheader').withText('Cart')
        this.oneCartItem = Selector('.cart_item').nth(0)   
        this.oneItemTitle = Selector('.inventory_item_name').nth(0)       
        this.checkOut = Selector('.checkout_button')
        this.shopCarIcon = Selector('#shopping_cart_container')
    }
    async multipleItems () {
        var addItem = Selector('.btn_inventory')
        var count = await addItem.count
        var itemAdded = Selector('.cart_item')
        var cartAdded = itemAdded.nth(count-1)
            for (var i = 0; i < count; i++) {
                await t.click(addItem.nth(i))
            }
        await t.click(this.shopCarIcon)
        await t.expect(cartAdded.exists).ok()
    }
    async compareItems(){
        this.firstElement = Selector('.btn_primary.btn_inventory').nth(0)
        const nameX = Selector('.inventory_item_name').nth(0)
        const valueNameX = await nameX.innerText

        await t
            .click(this.firstElement)
            .click(this.shopCarIcon)
            .click(this.checkOut)
        await CheckoutPage.fillInformation('test','test','test')

        const nameY = Selector('.inventory_item_name').nth(0)
        const valueNameY = await nameY.innerText

        await t.expect(valueNameY).eql(valueNameX)
    }
}

export default new ShopPage