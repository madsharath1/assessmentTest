const { doClick,doSetValue } = require('../common/commonFunctions');

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
        doClick(this.btn_signIn)
        allureReporting.endStep()
    }

    searchForProduct(product){
      allureReporting.addStep('Searching for the product: '+product)
      doSetValue(this.txt_searchProduct,product)
      doClick(this.btn_submit)
      browser.pause(3000)
      allureReporting.endStep()
    }

}

module.exports = new homePage();
// export default new homePage();