const { Before, BeforeAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { buildDriver } = require('../modules/driverFunctions');
setDefaultTimeout(30 * 1000);

BeforeAll( async function(){
    console.log("Executing before all hooks...")
    await buildDriver();
});

Before({ tags: '@ui' }, async function(){
    await newUserLogin();
});
 
