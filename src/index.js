const { port, env } = require('./constants')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('./config/cors.config');
const { sequelize, user } = require('./config/database.config')
const userData = require('./api/v1/models/dataUsetTest.json')

const { apiRouter } = require('./api/v1/routes')
const error = require('./middlewares/error')

const app = express()

app.use(logger(env))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, _, next) => {
	req.headers.origin = req.headers.origin || req.headers.host;
	next();
});

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/v1', apiRouter)

app.use(error.converter)
app.use(error.notFound)
app.use(error.handler)

sequelize.sync({ force: false }).then(async () => {
  // const users = await user.findAll();
  // console.log(users.length);
  
  // if (users.length <= 0) {
  //   userData.forEach(async element => {
  //     const values = {
  //       id: element.id,
  //       name: element.name,
  //       email: element.email,
  //       username: element.username,
  //       isPremium: element.isPremium,
  //       last_join: new Date(element.last_join),
  //       created_at: new Date(element.created_at),
  //     updated_at: new Date(element.updated_at)
  //     }
  //     await user.create(values)
  //   })
  // }

  
  app.listen(port, (err) => {
    console.log(`server running on port ${port}, env ${env}`);
  })
})

module.exports = app;