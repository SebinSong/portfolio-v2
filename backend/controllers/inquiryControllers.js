const Inquiry = require('../models/InquiryModel')
const asyncHandler = require('../middlewares/asyncHandler')
const { confirmInquiryReceipt } = require('../external-services/mail-sender')

const getAllInquiries = asyncHandler(async (req, res, next) => {
  const inquiries = await Inquiry.find({}).sort({ createdAt: -1 })
  res.status(200).json(inquiries)
})

const postInquiry = asyncHandler(async (req, res, next) => {
  const { name, email, title = '', content } = req.body
  
  // create a new inquiry and save it to the DB
  const doc = await Inquiry.create({
    name, email, content,
    title: title || undefined 
  })
  res.status(201).json({ id: doc._id, data: doc })

  confirmInquiryReceipt({ name, to: email })
    .catch(err => {
      console.error('Failed to send a inquiry receipt confirmation mail - ', err)
    })
})

module.exports = {
  getAllInquiries,
  postInquiry
}
