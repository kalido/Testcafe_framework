import { Selector } from 'testcafe'

class TopbarPage{
    constructor(){
        this.burgerMenu = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shopCarIcon = Selector('#shopping_cart_container')
    }

}

export default new TopbarPage