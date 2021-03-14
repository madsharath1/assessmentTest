// const { default: $ } = require("webdriverio/build/commands/element/$");
const allureReporting = require('@wdio/allure-reporter').default

class productPage{

    get area_productList(){return $("//ul[contains(@class,'product_list')]")}
    get btn_product(){return $("(//div[@class='product-container']//a[contains(text(),'Printed Summer Dress')])[1]")}
    get btn_addToCart(){return $("//span[text()='Add to cart']")}
    get btn_proceedToChkout(){return $("//span[contains(text(),'Proceed to checkout')]")}

    addToCart(product){
        allureReporting.addStep('Successfully found the product: '+ product)
        allureReporting.startStep('Adding this product to cart')
        this.area_productList.scrollIntoView();
        expect($("(//div[@class='product-container']//a[contains(text(),'"+product+"')])[1]")).toBeExisting()
        // if($("(//div[@class='product-container']//a[contains(text(),'"+product+"')])[1]").isExisting){
        $("(//div[@class='product-container']//a[contains(text(),'"+product+"')])[1]").click()
        browser.pause(8000)
        this.btn_addToCart.scrollIntoView();
        this.btn_addToCart.click()
        browser.pause(5000)
        this.btn_proceedToChkout.click()
        browser.pause(5000)
        
    // }else{
        // console.log("Product unavailable")
    // }
    allureReporting.endStep()
    }
}
module.exports = new productPage()