const styleService = require('../service/style')

exports.findStyleList = async function (tab) {
  const styleTabs = await styleService.findAllStyleTabs()
  if (!tab) {
    tab = styleTabs[0]['tab']
  }
  const styles = await styleService.findAllStyle(tab)

  return {
    data: styles,
    tabs: styleTabs,
    currentTab: tab
  }
}
