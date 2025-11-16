const reporter = require('cucumber-html-reporter');

reporter.generate({
  jsonFile: 'reports/cucumber.json',
  output: 'reports/cucumber.html',
  reportSuiteAsScenarios: true,
  screenshotsDirectory: 'reports/screenshots',
  storeScreenshots: true,
  theme: 'bootstrap'
});
