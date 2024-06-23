const express = require('express')
const {
  getAllFeedbacks,
  postFeedback
} = require('../controllers/feedbackControllers')
const router = express.Router()

router.get('/', getAllFeedbacks)
router.post('/', postFeedback)

module.exports = router
