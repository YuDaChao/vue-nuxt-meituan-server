const Sequelize = require('sequelize')
const sequelize = require('../libs/sequelize')

const Style = sequelize.define('style', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  sub_title: {
    type: Sequelize.STRING
  },
  img_url: {
    type: Sequelize.STRING
  },
  current_price: {
    type: Sequelize.INTEGER
  },
  old_price: {
    type: Sequelize.STRING
  },
  bottom_info: {
    type: Sequelize.STRING
  },
  tab: {
    type: Sequelize.STRING
  },
  tags: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true, //禁用修改表名
  timestamps: false // 取消自动添加时间戳createAt，updateAt
})

sequelize.models.style

module.exports = Style
