const {Router} = require('express')

const meditationRouter = Router();

const meditationController = require('../controllers/meditation.controller');

meditationRouter.get('/', (req, res) => {
  try {
    res.status(200).json({meditation: 'meditation api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  meditationRouter
}