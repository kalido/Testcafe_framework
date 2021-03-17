import { Selector } from 'testcafe'

class ProductsPage{
    constructor(){
        this.productsTitle = Selector('#inventory_filter_container .product_label')
        this.firstElement = Selector('.btn_primary.btn_inventory').nth(0)
    }
}

export default new ProductsPage