const { Given, When, Then } = require('@cucumber/cucumber')
const allureReporting = require('@wdio/allure-reporter').default
const homePage = require('../main/pageObjects/homePage');
const registerPage = require('../main/pageObjects/registerPage')
const baseSetup = require('../main/common/baseSetup')
const testdata = require('../resources/testdata');
const productPage = require('../main/pageObjects/productPage');
const cartPage = require('../main/pageObjects/cartPage');
const paymentPage = require('../main/pageObjects/paymentPage');


Given(/^Open the url and verify using title$/, () => {
    baseSetup.openUrl()
});


When(/^I perform user registration$/, () => {
    homePage.performSignUp()

    registerPage.initiateRegistration(testdata.emailId)

    registerPage.enterDetailsAndSubmit(testdata.firstname, testdata.lastname, testdata.emailId,
        testdata.password, testdata.bday, testdata.bmonth, testdata.byr, testdata.company,
        testdata.address, testdata.city, testdata.state, testdata.postcode, testdata.mobile)

});

Then(/^User registration is successful$/, () => {
    registerPage.validateSuccessfulRegistration(testdata.firstname,testdata.lastname)
});

When(/^I try to add the product after user registration$/, () => {
    homePage.searchForProduct(testdata.product)
    console.log('----------------searching for product---------------')

    productPage.addToCart(testdata.product)
    console.log('----------------product added to cart---------------')

    cartPage.performProceedToCheckoutinCartPage()
    console.log('----------------performing checkout---------------')

});

Then(/^Correct product is added before the payment$/, () => {
    paymentPage.verifyProduct(testdata.product)
    console.log('----------------product validated in payments page---------------')
});