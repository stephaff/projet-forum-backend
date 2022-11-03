const express = require('express')
const router = express.Router()

const {
    getAllQuestions,
    getOneQuestion,
    addQuestion
} = require('../controllers/questionControllers')


router.get('/', getAllQuestions)

router.get('/:id', getOneQuestion)

router.post('/', addQuestion)

module.exports = router