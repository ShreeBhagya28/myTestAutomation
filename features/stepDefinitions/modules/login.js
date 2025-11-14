const {By} = require("selenium-webdriver");
const fs = require('fs');
const { launchApplication, clickElement, enterText } = require("./elements");


async function newUserLogin(){
    try{
        await launchApplication('http://localhost:3000/#/');
        await clickElement(By.xpath(`//button[@aria-label="Close Welcome Banner"]`), 30000);
        await clickElement(By.xpath(`//button[@id="navbarAccount"]`),20000);
        await clickElement(By.xpath(`//button[@id="navbarLoginButton"]`), 20000);
        await enterText(By.xpath(`//input[@id="email"]`),process.env.user,20000);
        await enterText(By.xpath(`//input[@id="password"]`),process.env.password,20000);
        await clickElement(By.xpath(`//button[@id="loginButton"]`),20000);
    }catch(err){
        throw `user failed to login.${err}`;
    }
}

module.exports = {newUserLogin}