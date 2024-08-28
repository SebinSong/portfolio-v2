
const { defineConfig } = require('cypress')
const dotenv = require('dotenv')

dotenv.config()
const { API_PORT } = process.env


module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    baseUrl: `http://localhost:${API_PORT}`,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    supportFile: 'test/cypress/support/index.js',
    specPattern: 'test/cypress/integrations/**/*.{js,jsx,ts,tsx}'
  }
})
