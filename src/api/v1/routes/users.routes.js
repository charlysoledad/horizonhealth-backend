const {Router} = require('express')

const userRouter = Router();

const userController = require('../controllers/user.controller');

userRouter.get('/', (req, res) => userController.getUsers(req,res))

userRouter.get('/user',  (req, res) => {
  try {
    res.status(200).json({user: 'user'})
  } catch (error) {
    res.status(500)
  }
})

module.exports = {
  userRouter
}