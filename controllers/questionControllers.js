const Question = require('../models/questionModel')

const getAllQuestions = async(req, res) => {
    res.status(200).json({test : 'Toutes les questions'})
}

const getOneQuestion = async(req, res) => {
    res.status(200).json({test : 'une question'})
}

const addQuestion = async(req, res) => {
    res.status(200).json({test : 'Question'})
}

module.exports = {
    getAllQuestions,
    getOneQuestion,
    addQuestion
}

