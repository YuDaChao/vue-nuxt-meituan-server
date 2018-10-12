const Sequelize = require('sequelize')
const config = require('../config/mysql');

const sequelize = new Sequelize(
  config.DATABASE,
  config.USER,
  config.PASSWORD, {
  host: config.HOST,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // SQLite only
  // storage: 'path/to/database.sqlite'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize
