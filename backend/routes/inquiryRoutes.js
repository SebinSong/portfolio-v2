const express = require('express')
const {
  getAllInquiries, postInquiry
} = require('../controllers/inquiryControllers')
const router = express.Router()

router.get('/', getAllInquiries)
router.post('/', postInquiry)

module.exports = router
