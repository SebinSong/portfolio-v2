const Feedback = require('../models/FeedbackModel')
const asyncHandler = require('../middlewares/asyncHandler')
const { checkRequiredFieldsAndThrow, sendBadRequestErr } = require('../utils')
const { sendFeedbackNotification } = require('../external-services/mail-sender')

// Get all feedback items from the DB
const getAllFeedbacks = asyncHandler(async (req, res, next) => {
  const feedbacks = await Feedback.find({}).sort({ createdAt: -1 })
  const data = feedbacks.map(feedback => {
    const { _id, name, content, password, updatedAt } = feedback
    return {
      _id,
      name,
      content,
      updatedAt,
      sk: password
    }
  })
  res.status(200).json(data)
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

// delete feedback item from the DB
const deleteFeedback = asyncHandler(async (req, res,next) => {
  const { id: feedbackId } = req.params
  const { password } = req.body
  const doc = await Feedback.findById(feedbackId)
  if (!doc) {
    sendBadRequestErr(
      res,
      `document not found for id - ${feedbackId}`,
      { errType: 'invalid-field', key: 'id' }
    )
  } else {
    const matches = await doc.matchPassword(password)

    if (!matches) {
      sendBadRequestErr(
        res,
        "password doesn't match",
        { errType: 'invalid-field', key: 'password' }
      )
    }

    await Feedback.findByIdAndDelete(feedbackId)
    res.status(200).json({
      message: 'Successfully deleted',
      id: feedbackId
    })
  }
})


module.exports = {
  getAllFeedbacks,
  postFeedback,
  deleteFeedback
}

