const mongoose = require('mongoose')

const TestimonialSchema = mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  organization: { type: String, required: true },
  content: { type: String, required: true },
  originalDate: { type: Date }
}, { timestamps: true })

const TestimonialModel = mongoose.model('Testimonial', TestimonialSchema)

module.exports = TestimonialModel
