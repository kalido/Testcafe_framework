import { Selector, t } from 'testcafe'

class CheckoutPage{
    constructor(){
        this.firstName = Selector('input#first-name.form_input')
        this.lastName = Selector('input#last-name.form_input')
        this.postalCode = Selector('input#postal-code.form_input')
        this.continueButton = Selector('input.btn_primary.cart_button')
        this.overviewTitle = Selector('.subheader').withText('Checkout:')
        this.errorMessage = Selector('button.error-button')
        this.firstItemNamed = Selector('.inventory_item_name').nth(0)
        this.finishButton = Selector('.btn_action').withText('FINISH')
        this.finishTitle = Selector('.complete-text').withText('Your order has been dispatched')
    }

    async fillInformation(first,last,zip){
        await t       
        .typeText(this.firstName, first)
        .typeText(this.lastName, last)
        .typeText(this.postalCode, zip)
        .click(this.continueButton);
    }
}

export default new CheckoutPage