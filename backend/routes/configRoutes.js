const express = require('express')
const { downloadHandler } = require('../controllers/configControllers')
const router = express.Router()

router.get('/download', downloadHandler)

module.exports = router
