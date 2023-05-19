const DbConfig = require('../config/db')

const Sequelize = require('sequelize')
const connex = new Sequelize(DbConfig.DB, DbConfig.USER, DbConfig.PASSWORD, {
    host: DbConfig.HOST,
    dialect: DbConfig.dialect,
    port: 3306,
    operatorsAliases: false
})

const db = {}
db.Sequelize = Sequelize
db.connex = connex
db.products = require('./product.model.js')(connex, Sequelize)
module.exports = db