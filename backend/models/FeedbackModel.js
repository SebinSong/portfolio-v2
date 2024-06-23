const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const FeedbackSchema = mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true }, // it's going to be a hash of the password
  content: { type: String, required: true }
}, { timestamps: true })

// doc-level method
FeedbackSchema.methods.matchPassword = async function (queryPassword) {
  return await bcrypt.compare(queryPassword, this.password)
}

// middlewares
FeedbackSchema.pre('save', async function () {
  if (this.isNew) {
    const hashedPassword = await bcrypt.hash(this.password, 10)

    this.password = hashedPassword
  }
})

const FeedbackModel = mongoose.model('Feedback', FeedbackSchema)

module.exports = FeedbackModel
