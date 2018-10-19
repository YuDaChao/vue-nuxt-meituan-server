const Style = require('../models/style')
const StyleTabs = require('../models/style-tabs')

exports.findAllStyle = async function(tab) {
  return Style.findAll({
    where: { tab: tab }
  })
}

exports.findAllStyleTabs = async function() {
  return StyleTabs.findAll({
    order: [['tab', 'ASC']]
  })
}
