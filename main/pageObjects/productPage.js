// const { default: $ } = require("webdriverio/build/commands/element/$");
const allureReporting = require('@wdio/allure-reporter').default
const { waitForElementDisplayed, doClick, scrollToView } = require('../common/commonFunctions')

class productPage {

    get area_productList() { return $("//ul[contains(@class,'product_list')]") }
    get btn_product() { return $("(//div[@class='product-container']//a[contains(text(),'Printed Summer Dress')])[1]") }
    get btn_addToCart() { return $("//span[text()='Add to cart']") }
    get btn_proceedToChkout() { return $("//span[contains(text(),'Proceed to checkout')]") }

    addToCart(product) {
        allureReporting.addStep('Successfully found the product: ' + product)
        allureReporting.startStep('Adding this product to cart')
        this.area_productList.scrollIntoView();
        expect($("(//div[@class='product-container']//a[contains(text(),'" + product + "')])[1]")).toBeExisting()
        $("(//div[@class='product-container']//a[contains(text(),'" + product + "')])[1]").click()
        waitForElementDisplayed(this.btn_addToCart)
        scrollToView(this.btn_addToCart)
        doClick(this.btn_addToCart)
        doClick(this.btn_proceedToChkout)
        allureReporting.endStep()
    }
}
module.exports = new productPage()