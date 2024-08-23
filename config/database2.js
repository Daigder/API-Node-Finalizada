const Sequelize = require ('sequelize')
const config = require ('../database')

const Endereco = require ('../Endereco')

const connection = new Sequelize(config)

Endereco.init(connection)
Endereco.associate(connection.models)

ModelManager.exports = connection