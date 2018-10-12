const Sequelize = require('sequelize')
const sequelize = require('../libs/sequelize')

const SCategory = sequelize.define('s_category', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  p_name: {
    type: Sequelize.STRING
  },
  s_id: {
    type: Sequelize.STRING
  },
  category_id: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true, //禁用修改表名
  timestamps: false // 取消自动添加时间戳createAt，updateAt
})

sequelize.models.s_category

module.exports = SCategory
