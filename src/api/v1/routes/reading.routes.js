const {Router} = require('express')

const readingRouter = Router();

const readingController = require('../controllers/reading.controller');

readingRouter.get('/', (req, res) => {
  try {
    res.status(200).json({reading: 'reading api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  readingRouter
}