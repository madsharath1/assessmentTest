class commonFunctions{

    doClick(element){
        element.waitForDisplayed({timeout:3000})
        element.click()
    }

    doSetValue(element,keys){
        element.waitForDisplayed({timeout:3000})
        element.setValue(keys)
    }

    doGetText(element){
        element.waitForDisplayed({timeout:3000})
        return element.getText()
    }

    doGetTitle(){
        return browser.getTitle()
    }


}
module.exports= new commonFunctions();