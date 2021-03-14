const homePage = require('../pageObjects/homePage')
const allureReporting = require('@wdio/allure-reporter').default

class baseSetup{

    openUrl(){
        allureReporting.addStep('Opening the Url')
        browser.url('/');
        browser.maximizeWindow()
        console.log('-------------Opened the url------------------');
        browser.pause(3000)
        allureReporting.startStep('Verifying the url')
        let title =   homePage.getPageTitle()
        console.log('TItle of the page is: '+title)
        // browser.pause(3000)   
        allureReporting.endStep()
    }
}
module.exports = new baseSetup()
// export default new baseSetup();