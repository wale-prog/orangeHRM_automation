const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/*.cy.js',
    retries: 1,
    env: {
      // baseUrl: "https://opensource-demo.orangehrmlive.com/"
      baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    }
  },
});
