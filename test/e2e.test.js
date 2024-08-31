const cypress = require('cypress')
const config = require('../cypress.config')
const { serverEvents } = require('../backend/server')


serverEvents.on('ready', () => {
  cypress.run({
    browser: 'chrome',
    config
  }).then(() => {
    process.exit(0)
  }).catch(() => {
    process.exit(1)
  })
})
