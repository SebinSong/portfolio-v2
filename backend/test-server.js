// Sanity check of the DB
const { connectToDB } = require('./db.js')

// models
const Inquiry = require('./models/InquiryModel.js')

// importing .env file
connectToDB(async (err) => {
  if (err) {
    console.error(':: DB start-up error - ', err)
    process.exit(1)
  }
  console.log('::: DB connection open!')

  try {
    await Inquiry.deleteMany()
    const res = await Inquiry.create({
      name: 'Sebin test',
      email: '123@abcdef.com',
      content: 'hello! this is a test content.'
    })

    console.log('successfully added a document: ', res)
    process.exit(0)
  } catch (err) {
    console.error('An error occured while talking to DB: ', err)
  }
})
