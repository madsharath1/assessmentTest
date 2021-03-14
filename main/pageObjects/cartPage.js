const { default: AllureReporter } = require("@wdio/allure-reporter")

class cartPage{

    get btn_proceedToChkout2(){return $("(//span[contains(text(),'Proceed to checkout')])[last()]")}
    get btn_agreement(){return $("//label[contains(text(),'I agree')]/preceding::input[1]")}
   
    performProceedToCheckoutinCartPage(){
        AllureReporter.addStep('Performing proceed to checkout')
        AllureReporter.startStep('Proceding with summary page')
         //summary page
         this.performProceedToChkout()
         AllureReporter.startStep('Proceding with address page')
         // address page
         this.performProceedToChkout()
         AllureReporter.startStep('Proceding with shipping page')
         // shipping page
         browser.pause(10000)
         this.btn_agreement.scrollIntoView()
         this.btn_agreement.click()
         this.performProceedToChkout()
         AllureReporter.endStep()
    }

    performProceedToChkout(){
        browser.pause(5000)
        this.btn_proceedToChkout2.scrollIntoView()
        this.btn_proceedToChkout2.click()
    }

}
module.exports = new cartPage()