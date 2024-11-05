const { port, env } = require('./constants')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('./config/cors.config');
const { sequelize } = require('./config/database.config')

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

app.get('/', (req, res) => res.send('Welcome to the API for the HorizonHealth!'))

app.use('/api/v1', apiRouter)

app.use(error.converter)
app.use(error.notFound)
app.use(error.handler)

sequelize.sync({ force: false }).then(async () => {  
  app.listen(port, (err) => {
    console.log(`server running on port ${port}, env ${env}`);
  })
})

module.exports = app;