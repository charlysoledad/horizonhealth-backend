const {Router} = require('express')

const apiRouter = Router();

const {userRouter} = require('./users.routes')
const {activityRouter} = require('./activity.routes')
const {exerciseRouter} = require('./exercise.routes')
const {meditationRouter} = require('./meditation.routes')
const {profileRouter} = require('./profile.routes')
const {questionRouter} = require('./question.routes')
const {readingRouter} = require('./reading.routes')
const {testRouter} = require('./test.routes')


apiRouter.get('/', (req, res) => {
  res.status(200).json({message: 'API OK'})
})

apiRouter.use('/users',userRouter)
apiRouter.use('/activities',activityRouter)
apiRouter.use('/excercises',exerciseRouter)
apiRouter.use('/meditations',meditationRouter)
apiRouter.use('/profile',profileRouter)
apiRouter.use('/questions',questionRouter)
apiRouter.use('/readings',readingRouter)
apiRouter.use('/test',testRouter)

module.exports = {apiRouter};