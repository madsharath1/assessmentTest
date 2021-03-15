class commonFunctions{

    doClick(element){
        browser.waitUntil(() => {
            return element.isDisplayed();
        }, 10000, element+ "is not displayed");
        element.click()
    }

    doSetValue(element,keys){
        browser.waitUntil(()=>{
            return element.isDisplayed();
        },10000,element+' is not displayed');
        element.setValue(keys)
    }

    doGetText(element){
        element.waitForDisplayed({timeout:3000})
        return element.getText()
    }

    doGetTitle(){
        return browser.getTitle()
    }

    generateRandomEmailId(length) {
        const characters = 'abcdefghijklmnopqrstuvwxyz123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return "test"+result+"@somemail.com";
    }

    waitForElementDisplayed(element){
        browser.waitUntil(()=>{
            return element.isDisplayed();
        },10000,element+' is not displayed');
    }

    waitForElementExists(element){
        element.waitForExist({timeout:10000})
    }

    scrollToView(element){
        // browser.waitUntil(()=>{
        //     return element.isDisplayed();
        // },10000,element+' is not displayed');
        element.waitForExist({timeout:10000})
        element.scrollIntoView()
    }
}
module.exports= new commonFunctions();