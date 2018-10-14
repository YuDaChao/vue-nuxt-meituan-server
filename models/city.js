const Sequelize = require('sequelize')
const sequelize = require('../libs/sequelize')

const City = sequelize.define('city', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  city: {
    type: Sequelize.STRING
  },
  city_label: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true, //禁用修改表名
  timestamps: false // 取消自动添加时间戳createAt，updateAt
})

sequelize.models.City

module.exports = City
