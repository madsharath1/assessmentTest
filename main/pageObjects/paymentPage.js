const allureReporting = require('@wdio/allure-reporter').default

class paymentPage{
    //locators
    get txt_productConfirmation(){return $("//td[@class='cart_description']/p[@class='product-name']/a")}
   
    // actions
    verifyProduct(product){
        allureReporting.addStep('Verifying if the product is correctly fetched on payments page')
        browser.pause(3000)
        this.txt_productConfirmation.scrollIntoView()
        expect(this.txt_productConfirmation).toHaveText(product)
        allureReporting.startStep('Verified that the product successfully added is: '+product)
        allureReporting.endStep()
    }
}
module.exports = new paymentPage()