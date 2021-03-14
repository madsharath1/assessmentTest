// const { doClick } = require('../common/commonFunctions');

// const { default: $ } = require("webdriverio/build/commands/browser/$");
const allureReporting = require('@wdio/allure-reporter').default

class homePage{

    //locators
    get btn_signIn() {return $('.login')}
    get txt_searchProduct(){return $('#search_query_top')}
    get btn_submit(){return $("//button[@name='submit_search']")}

    //actions
    getPageTitle(){
      browser.getTitle();
    }

    performSignUp(){
        allureReporting.addStep('Clicking on signUp')
        browser.pause(3000)
        this.btn_signIn.click()
        allureReporting.endStep()
    }

    searchForProduct(product){
      allureReporting.addStep('Searching for the product: '+product)
      // this.txt_searchProduct.waitForDisplayed({timeout:6000})
      this.txt_searchProduct.setValue(product)
      this.btn_submit.click()
      browser.pause(5000)
      allureReporting.endStep()
    }

}

module.exports = new homePage();
// export default new homePage();