const { Given, When, Then } = require('@cucumber/cucumber')
const allureReporting = require('@wdio/allure-reporter').default
const homePage = require('../main/pageObjects/homePage');
const registerPage = require('../main/pageObjects/registerPage')
const baseSetup = require('../main/common/baseSetup')
const testdata = require('../resources/testdata');
const productPage = require('../main/pageObjects/productPage');
const cartPage = require('../main/pageObjects/cartPage');
const paymentPage = require('../main/pageObjects/paymentPage');
const commonFunctions = require('../main/common/commonFunctions')


Given(/^Open the url and verify using title$/, () => {
    baseSetup.openUrl()
});


When(/^I perform user registration$/, () => {
    let email = commonFunctions.generateRandomEmailId(4);
    console.log('EmailId being used is: '+email)

    homePage.performSignUp()

    registerPage.initiateRegistration(email)

    registerPage.enterDetailsAndSubmit(testdata.firstname, testdata.lastname, email,
        testdata.password, testdata.bday, testdata.bmonth, testdata.byr, testdata.company,
        testdata.address, testdata.city, testdata.state, testdata.postcode, testdata.mobile)

});

Then(/^User registration is successful$/, () => {
    allureReporting.addStep('Validating successful registration')
    let registeredName = registerPage.validateSuccessfulRegistration()
    expect(registeredName).toHaveText(testdata.firstname+" "+testdata.lastname)
    allureReporting.startStep('Confirmed successful user registration')
    allureReporting.endStep()
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
    allureReporting.addStep('Validating if the actual product picked is the expected one')
    let actualProductPicked = paymentPage.verifyProduct()
    expect(actualProductPicked).toHaveText(testdata.product)
    allureReporting.startStep('Product has been confimed to be as expected')
    allureReporting.endStep()
    console.log('----------------product validated in payments page---------------')
});