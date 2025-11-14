// features/stepDefinitions/modules/driverFunctions.js
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

let driver = null; // keep a single driver instance

async function buildDriver() {
  try {
    if (driver) {
      console.log('Reusing existing Chrome driver...');
      return driver;
    }

    console.log('Launching new Chrome driver...');

    // Bind Selenium to the local chromedriver binary
    // const service = new chrome.ServiceBuilder(chromedriver.path).build();
    // chrome.setDefaultService(service);

    // Configure Chrome options
    const options = new chrome.Options();
    options.addArguments('--start-maximized', '--incognito');
    // options.addArguments('--headless', '--disable-gpu'); // use these for CI runs

    // Create driver
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    console.log('✅ Chrome driver started successfully');
    return driver;
  } catch (err) {
    console.error('❌ Error while building Chrome driver:', err.message);
    throw err;
  }
}

// optional helpers
function getDriver() {
  if (!driver) throw new Error('Driver not initialized. Call buildDriver() first.');
  return driver;
}

async function quitDriver() {
  if (driver) {
    await driver.quit();
    console.log('🧹 Chrome driver closed successfully');
    driver = null;
  } else {
    console.warn('⚠️ No driver instance to quit.');
  }
}

module.exports = { buildDriver, getDriver, quitDriver };
