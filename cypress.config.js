const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    defaultCommandTimeout: 200000,
    requestTimeout: 180000,
    responseTimeout: 180000,
  },
});
