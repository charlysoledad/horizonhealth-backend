const {Router} = require('express')

const exerciseRouter = Router();

const exerciseController = require('../controllers/exercise.controller');

exerciseRouter.get('/', (req, res) => {
  try {
    res.status(200).json({exercise: 'exercise api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  exerciseRouter
}