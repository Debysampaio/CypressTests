const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mpdiuw',
  e2e: {
    baseUrl: 'https://www.automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
