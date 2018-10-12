const Sequelize = require('sequelize')
const sequelize = require('../libs/sequelize')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.INTEGER
  },
  createAt: {
    type: Sequelize.DATE
  }
}, {
  freezeTableName: true, //禁用修改表名
  timestamps: false // 取消自动添加时间戳createAt，updateAt
})

sequelize.models.User

module.exports = User
