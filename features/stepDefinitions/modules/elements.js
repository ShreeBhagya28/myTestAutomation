const { until } = require("selenium-webdriver");
const { getDriver } = require("./driverFunctions");


async function launchApplication(applicationURL){
    try{
        let driver = await getDriver();
        // await driver.get('http://localhost:3000/#/');
        await driver.get(applicationURL);
    }catch(err){
        err.message = `\nUnable to launch the application.\n${err}`;
        throw err;
    }
}

async function getElement(locator, timeout){
    try{
        let driver = await getDriver();
        let elementFound = await driver.wait(until.elementLocated(locator),timeout);
        return elementFound;
    }catch(err){
        err.message = `\nUnable to find element with locator - ${locator}.\n${err}`;
        throw err;
    }
}

async function clickElement(locator, timeout){
    try{
        let driver = await getDriver();
        let elementFound = await driver.wait(until.elementLocated(locator),timeout);
        await elementFound.click();
    }catch(err){
        err.message =`\nUnable to click element with locator - ${locator}.\n${err}`;
        throw err;
    }
}

async function enterText(locator, value, timeout){
    try{
        let driver = await getDriver();
        let elementFound = await driver.wait(until.elementLocated(locator),timeout);
        await elementFound.clear();
        await elementFound.sendKeys(value);
    }catch(err){
        err.message = `\nUnable to enter the text ${value} in the locator ${locator}.\n${err}`;
        throw err;
    }
}

async function selectByText(locator,value, timeout){
    try{
        let driver = await getDriver();
        let elementFound = await driver.wait(until.elementLocated(locator),timeout);
        await elementFound.click();
        let OptionFound = await elementFound.findElement(By.xpath(`//option[@value=${value}]`),timeout);
        await OptionFound.click();
    }catch(err){
        err.message = `\nUnable to select ${value}.\n${err}`;
        throw err;
    }
}

module.exports = { getElement, launchApplication, clickElement, enterText, selectByText}