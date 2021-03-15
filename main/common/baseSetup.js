const homePage = require('../pageObjects/homePage')
const allureReporting = require('@wdio/allure-reporter').default

class baseSetup{

    openUrl(){
        allureReporting.addStep('Opening the Url')
        browser.url('/');
        browser.maximizeWindow()
        console.log('-------------Opened the url------------------');
        let title =   homePage.getPageTitle()
        console.log('TItle of the page is: '+title)
        expect(browser).toHaveTitle('My Store');
        allureReporting.startStep('Url has been verified using title')
        allureReporting.endStep()
    }
}
module.exports = new baseSetup()
// export default new baseSetup();