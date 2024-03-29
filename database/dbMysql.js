const Sequelize = require('sequelize');
const config = require('../config/db')

module.exports =  new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: 'mysql',
    logging: false,
    pool:{
        max: 10,
        min: 0,
        idle: 10000
    }
});