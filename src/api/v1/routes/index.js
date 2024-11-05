const {Router} = require('express')

const apiRouter = Router();

const {userRouter} = require('./users.routes')


apiRouter.get('/', (req, res) => {
  res.status(200).json({message: 'API OK'})
})

apiRouter.use('/users',userRouter)

module.exports = {apiRouter};