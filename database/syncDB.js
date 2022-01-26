require('./dbMysql')
const Usuario = require('../model/Usuario.js');

Usuario.sync();