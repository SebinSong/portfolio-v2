const mongoose = require('mongoose')

const InquirySchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: false, default: 'No-title' },
  content: { type: String, required: true }
}, { timestamps: true })

const InquiryModel = mongoose.model('Inquiry', InquirySchema)

module.exports = InquiryModel
