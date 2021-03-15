const allureReporting = require('@wdio/allure-reporter').default
const {waitForElementDisplayed, scrollToView}=require('../common/commonFunctions')

class paymentPage{
    //locators
    get txt_productConfirmation(){return $("//td[@class='cart_description']/p[@class='product-name']/a")}
   
    // actions
    verifyProduct(){
        allureReporting.startStep('Checking product on payments page')
        waitForElementDisplayed(this.txt_productConfirmation)
        scrollToView(this.txt_productConfirmation)
        return this.txt_productConfirmation
    }
}

module.exports = new paymentPage()