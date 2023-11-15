const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testedb', 'root', '1a2b3c4d', {
  host: '127.0.0.1',
  dialect: 'mysql',
  // other options...
});

module.exports = sequelize;