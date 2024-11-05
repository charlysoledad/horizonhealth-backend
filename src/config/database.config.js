const { Sequelize, DataTypes } = require("sequelize");
const models = require("../api/v1/models");

// const sequelize = new Sequelize({
//   username: '',
//   password: '',
//   dialect: 'sqlite',
//   host: 'localhost',
//   database: 'horizon',
//   storage: '../database/horizon.db'
// })

const sequelize = new Sequelize(process.env.DATABASE)

async function authenticateDB() { 
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

authenticateDB()

const user = models.User(sequelize, DataTypes)

module.exports={sequelize, user}