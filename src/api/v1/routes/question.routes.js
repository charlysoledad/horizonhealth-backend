const {Router} = require('express')

const questionRouter = Router();

const questionController = require('../controllers/question.controller');

questionRouter.get('/', (req, res) => {
  try {
    res.status(200).json({question: 'question api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  questionRouter
}