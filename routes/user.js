const express = require('express')
const router = express.Router()
const { userLogin, userSignUp } = require('../controllers/userControllers')

//connexion
router.post('/login', userLogin)

//inscription
router.post('/inscription', userSignUp)

module.exports = router