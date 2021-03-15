const {doSetValue,doClick} = require('../common/commonFunctions')
const allureReporting = require('@wdio/allure-reporter').default

// const { default: scrollIntoView } = require("webdriverio/build/commands/element/scrollIntoView")

class registerPage {
    get txt_emailId() { return $('#email_create') }
    get btn_createAccount() { return $('#SubmitCreate') }
    get btn_createAccount2() { return $("//button[@name='SubmitCreate']") }
    get btn_gender() { return $('#id_gender1') }
    get txt_firstName() { return $('#customer_firstname') }
    get txt_LastName() { return $('#customer_lastname') }
    get txt_email() { return $('#email') }
    get txt_pwd() { return $('#passwd') }
    get sel_days() { return $('#days') }
    get sel_months() { return $('#months') }
    get sel_years() { return $('#years') }
    get txt_addressFirstName() { return $("//h3[text()='Your address']/..//input[@id='firstname']") }
    get txt_addressLastName() { return $("//h3[text()='Your address']/..//input[@id='lastname']") }
    get txt_company() { return $('#company') }
    get txt_address() { return $('#address1') }
    get txt_city() { return $('#city') }
    get sel_state() { return $('#id_state') }
    get txt_postcode() { return $('#postcode') }
    get sel_country() { return $('#id_country') }
    get txt_mobilePhone() { return $('#phone_mobile') }
    get txt_alias() { return $('#alias') }
    get btn_submit() { return $('#submitAccount') }
    get txt_verifyName() { return $("//a[@class='account']/span") }

    initiateRegistration(email) {
        allureReporting.addStep('Adding emailId to register')
        doSetValue(this.txt_emailId,email)
        doClick(this.btn_createAccount)
        allureReporting.endStep()
    }

    enterDetailsAndSubmit(firstname, lastname, email, pwd, bdate, bmnth, byr, company, address, city, state, postcode, mobile) {
        allureReporting.addStep('Adding the personal details and proceding with submit option')
        doClick(this.btn_gender)
        this.txt_firstName.setValue(firstname)
        this.txt_LastName.setValue(lastname)
        this.txt_email.waitForDisplayed({ timeout: 3000 })
        allureReporting.startStep('Validating if correct emailID has been fetched')
        expect(this.txt_email).toHaveAttribute('value', email)
        this.txt_pwd.setValue(pwd)
        this.sel_days.selectByAttribute('value', bdate)
        this.sel_months.selectByAttribute('value', bmnth)
        this.sel_years.selectByAttribute('value', byr)
        this.txt_addressFirstName.waitForDisplayed({ timeout: 3000 })
        expect(this.txt_addressFirstName).toHaveAttribute('value', firstname)
        expect(this.txt_addressLastName).toHaveAttribute('value', lastname)
        this.txt_company.setValue(company)
        this.txt_address.setValue(address)
        this.txt_city.setValue(city)
        this.sel_state.selectByVisibleText(state)
        this.txt_postcode.setValue(postcode)
        this.txt_mobilePhone.setValue(mobile)
        this.txt_alias.setValue(address)
        this.btn_submit.click()
        allureReporting.endStep()
    }

    validateSuccessfulRegistration() {
        this.txt_verifyName.waitForDisplayed();
        return this.txt_verifyName;
    }
}

module.exports = new registerPage()
// export default new registerPage();