const Sequelize = require('sequelize')
const sequelize = require('../config/db');

const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
    },
    telefone: {
        type: Sequelize.CHAR(20),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
    }
});

module.exports = Usuario;