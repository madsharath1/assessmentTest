const homePage = require('../main/pageObjects/homePage');
const registerPage = require('../main/pageObjects/registerPage')
const baseSetup = require('../main/common/baseSetup')
// import allureReporter from '@wdio/allure-reporter'
// const allureReporter = require('@wdio/allure-reporter')
const { addFeature } = require('@wdio/allure-reporter').default
const testdata = require('../resources/testdata');
// const { lastname } = require('../main/resources/testdata');
const productPage = require('../main/pageObjects/productPage');
const cartPage = require('../main/pageObjects/cartPage');
const paymentPage = require('../main/pageObjects/paymentPage');


describe('Perform user registration and shopping for a product', function () {

    it('perform registration and shop for the product', function () {
        // addFeature('Perform user registration and shopping for a product')
        console.log('----------------started test---------------')

        baseSetup.openUrl()  
        console.log('----------------Url opened---------------')

        homePage.performSignUp()
        console.log('----------------started with signup action---------------')

        registerPage.initiateRegistration(testdata.emailId)

        registerPage.enterDetailsAndSubmit(testdata.firstname, testdata.lastname, testdata.emailId,
            testdata.password, testdata.bday, testdata.bmonth, testdata.byr, testdata.company,
            testdata.address, testdata.city, testdata.state, testdata.postcode, testdata.mobile)

        registerPage.validateSuccessfulRegistration(testdata.firstname,testdata.lastname)
        console.log('----------------signup completed and confirmed---------------')
    
        homePage.searchForProduct(testdata.product)
        console.log('----------------searching for product---------------')
    
        productPage.addToCart(testdata.product)
        console.log('----------------product added to cart---------------')
    

        cartPage.performProceedToCheckoutinCartPage()
        console.log('----------------performing checkout---------------')
    
        paymentPage.verifyProduct(testdata.product)
        console.log('----------------product validated in payments page---------------')

    })
})