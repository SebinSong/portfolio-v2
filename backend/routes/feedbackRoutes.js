const express = require('express')
const {
  getAllFeedbacks,
  postFeedback,
  deleteFeedback
} = require('../controllers/feedbackControllers')
const router = express.Router()

router.get('/', getAllFeedbacks)
router.post('/', postFeedback)
router.put('delete/:id', deleteFeedback)

module.exports = router
