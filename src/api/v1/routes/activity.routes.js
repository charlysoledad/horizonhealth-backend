const {Router} = require('express')

const activityRouter = Router();

const activityController = require('../controllers/activity.controller');

activityRouter.get('/', (req, res) => {
  try {
    res.status(200).json({activity: 'activity api'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  activityRouter
}