const {Router} = require('express')

const profileRouter = Router();

const profileController = require('../controllers/profile.controller');

profileRouter.get('/', (req, res) => {
  try {
    res.status(200).json({profile: 'profile api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  profileRouter
}