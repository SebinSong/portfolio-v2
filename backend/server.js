const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')
const express = require('express')
const EventEmitter = require('node:events');
const { connectToDB } = require('./db.js')

const serverEvents = new EventEmitter()

// importing .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// routers
const configRouter = require('./routes/configRoutes')
const inquiryRouter = require('./routes/inquiryRoutes.js')
const feedbackRouter = require('./routes/feedbackRoutes.js')

// middlewares
const { globalErrorHandler, notFound } = require('./middlewares/errorMiddlewares')

// constants
const API_CLIENT_PATH = path.resolve(__dirname, '../dist')
const { API_PORT, NODE_ENV, APP_DB_NAME } = process.env

// Create a server instance
const app = express()

// global middlewares
// TODO - add a logger here
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// attach routes
app.use('/api/config', configRouter)
app.use('/api/inquiry', inquiryRouter)
app.use('/api/feedbacks', feedbackRouter)

// static server setup
app.use(express.static(API_CLIENT_PATH))
app.get('*', (req, res) => {
  // any route that is not api will be redirected to the front-end index.html
  res.sendFile(path.join(API_CLIENT_PATH, 'index.html'))
})

// error handling
app.use(notFound)
app.use(globalErrorHandler)

connectToDB((err) => {
  if (err) {
    console.error('::: An Error occurred while starting up with the DB connection: '.underline.bold.red, err)
    process.exit(1)
  }

  console.log('\n\n- Successfully connected to DB:'.brightGreen.bold.underline, `${APP_DB_NAME}`.brightCyan.bold)
  app.listen(API_PORT, () => {
    console.log(`Server running in ${NODE_ENV} mode on port ${API_PORT}`.bold.magenta.underline)
    serverEvents.emit('ready')
  })
})

module.exports = {
  serverEvents
}
