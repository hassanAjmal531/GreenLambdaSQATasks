const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://demo.netbox.dev/",
    downloadsFolder: "cypress/downloads",
    defaultCommandTimeout: 5000,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
