const Sequelize = require('sequelize');

const Sequelize = require('sequelize');
module.exports = new Sequelize('usuarios', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// let match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
// module.exports = new Sequelize(match[5], match[1], match[2], {
//     dialect: 'postgres',
//     protocol: 'postgres',
//     port: match[4],
//     host: match[3],
//     logging: false,
//     dialectOptions: {
//         ssl: true
//     }
// });
