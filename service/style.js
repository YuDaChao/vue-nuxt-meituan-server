const Style = require('../models/style')
const StyleTabs = require('../models/style-tabs')

exports.findAllStyle = async function(tab, type) {
  return Style.findAll({
    where: { tab: tab, type: type }
  })
}

exports.findAllStyleTabs = async function(type) {
  return StyleTabs.findAll({
    where: { type: type },
    order: [['tab', 'ASC']]
  })
}
