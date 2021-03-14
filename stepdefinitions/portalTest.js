// const { addFeature, addStep, endStep, startStep } = require('@wdio/allure-reporter').default
const allureReporting = require('@wdio/allure-reporter').default


describe('Open the Url',function(){

    it('Open the base url', function(){
        allureReporting.addFeature('open the url test reported in allure')
        browser.url('/');
        allureReporting.addStep('performing add step')
        allureReporting.startStep('performing start step')
        console.log('-------------Opened the url------------------');
        expect(browser).toHaveTitle('My Store');
        allureReporting.endStep()
    })


    // it('Should register a user successfully', function(){
    //     const btn_signIn = $('.login');
    //     btn_signIn.click();
    //     console.log('-------------------Now performing user sign up------------------');
    //     browser.pause(5000);

    //     const txt_emailID = $('#email_create');
    //     const btn_createAccount = $('#SubmitCreate')

    //     // txt_emailID.scrollIntoView();
    //     txt_emailID.setValue('test123@somemail.com');
    //     btn_createAccount.click();
    //     browser.pause(5000);
    // })

})