const Feedback = require('../models/FeedbackModel')
const asyncHandler = require('../middlewares/asyncHandler')
const { checkRequiredFieldsAndThrow } = require('../utils')
const { sendFeedbackNotification } = require('../external-services/mail-sender')

// Get all feedback items from the DB
const getAllFeedbacks = asyncHandler(async (req, res, next) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 })
  res.status(200).json(feedbacks)
})

// create a feedback item to DB
const postFeedback = asyncHandler(async (req, res, next) => {
  // check the required fields first
  checkRequiredFieldsAndThrow(req, res, ['name', 'password', 'content'])

  const { name, password, content } = req.body
  const newFeedback = await Feedback.create({ name, password, content })

  res.status(201).json({ id: newFeedback._id })

  sendFeedbackNotification(newFeedback)
    .catch(err => {
      console.error('Failed to send a feedback notification - ', err)
    })
})

module.exports = {
  getAllFeedbacks,
  postFeedback
}
