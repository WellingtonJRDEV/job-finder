const Sequelize = require('sequelize')

const sequelise = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.db'
})

module.exports = sequelise
