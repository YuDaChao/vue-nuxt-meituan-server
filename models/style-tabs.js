const Sequelize = require('sequelize')
const sequelize = require('../libs/sequelize')

const StyleTabs = sequelize.define('style_tabs', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  tab: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true, //禁用修改表名
  timestamps: false // 取消自动添加时间戳createAt，updateAt
})

sequelize.models.style_tabs

module.exports = StyleTabs
