const { By, until } = require("selenium-webdriver");
const { launchApplication, getElement, clickElement } = require("./modules/elements");
const { getDriver } = require("./modules/driverFunctions");
const {expect} =  require("expect");
const { Given, When, Then } = require("@cucumber/cucumber");
Given('The Sauce lab application is launched',async function () {
    try{
        await launchApplication('https://www.saucedemo.com/');
        let loginText = await (await getElement(By.css(`div.login_logo`),20000)).getText();
        console.log(loginText);
        expect(loginText).toBe('Swag Labs');
    }catch (err){
        err.message = `Error in launching the Sauce Lab application.\nError --> ${err}`;
        throw err;
    }
  });

  When('the credentials are provided',async function () {
    try{    
        let userNameField = await getElement(By.css('input#user-name'),20000);
        await userNameField.sendKeys('standard_user');
        let passwordField = await getElement(By.css('input#password'),20000);
        await passwordField.sendKeys('secret_sauce');
        await clickElement(By.css('input#login-button'),20000);
    }catch (err){
        err.message = `Error in launching the Sauce Lab application.\nError --> ${err}`;
        throw err;
    }
  })

  Then('the user logins in',async function () {
    try{
        let driver =  await getDriver();
        if(await driver.wait(until.elementLocated(By.xpath('//div[@id="inventory_container" and @class="inventory_container"]')),20000)){
            console.log("Logged in! Happy shopping!");
        }else{
            console.log("Unable to login");
        }
     }catch (err){
        //err.message = `Error while logging in.\n${err}`;
        throw err;
     } 
  });