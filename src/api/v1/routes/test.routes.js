const {Router} = require('express')

const testRouter = Router();

const testController = require('../controllers/test.controller');

testRouter.get('/', (req, res) => {
  try {
    res.status(200).json({test: 'test api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  testRouter
}