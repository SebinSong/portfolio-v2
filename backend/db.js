const mongoose = require('mongoose')
const colors = require('colors')
const path = require('node:path')
const dotenv = require('dotenv')

// importing .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') })
const { DB_URI, APP_DB_NAME } = process.env

exports.connectToDB = async (cb) => {
  try {
    const { connection } = await mongoose.connect(DB_URI, { dbName: APP_DB_NAME })

    // register event handlers for DB connection.
    connection.once('open', () => {
      console.log('DB connection open and ready!'.bgGreen)
    })

    connection.on('disconnected', err => {
      console.error('::: DB disconnected: '.brightWhite.bgBrightRed, err)
    })

    connection.on('reconnected', () => {
      console.error('::: DB reconnected!'.brightWhite.bgBrightGreen)
    })

    connection.on('error', err => {
      console.error('::: DB operation error: ', err)
      process.exit(1)
    })

    cb && cb()
  } catch (err) {
    // catches the error from the initial DB-connection attempt!
    console.error('::: DB startup error: ', err)
    cb && cb(err)
  }
}
