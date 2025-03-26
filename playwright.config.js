const {devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  reporter: 'html',
  
  use: {
    browserName: 'chromium',
    headless: false
  }
};

module.exports = config;