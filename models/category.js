const Sequelize = require('sequelize')
const sequelize = require('../libs/sequelize')

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  sort: {
    type: Sequelize.INTEGER
  }
}, {
  freezeTableName: true, //禁用修改表名
  timestamps: false // 取消自动添加时间戳createAt，updateAt
})

sequelize.models.category

module.exports = Category
