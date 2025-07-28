const express = require('express')
const registercontroler = require('../controllers/authocontroller')

const router = express.Router()

router.post('/rigister',registercontroler)

module.exports = router