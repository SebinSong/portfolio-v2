const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')
const express = require('express')

// importing .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') })

// middlewares
const { globalErrorHandler, notFound } = require('./middlewares/errorMiddlewares')

// constants
const API_CLIENT_PATH = path.resolve(__dirname, '../dist')
const { API_PORT, NODE_ENV } = process.env

// Create a server instance
const app = express()

// static server setup
app.use(express.static(API_CLIENT_PATH))
app.get('*', (req, res) => {
  // any route that is not api will be redirected to the front-end index.html
  res.sendFile(path.join(API_CLIENT_PATH, 'index.html'))
})

// error handling
app.use(notFound)
app.use(globalErrorHandler)

app.listen(API_PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${API_PORT}..`.bold.yellow.underline)
})
