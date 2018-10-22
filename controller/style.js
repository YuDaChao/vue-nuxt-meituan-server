const styleService = require('../service/style')

exports.findStyleList = async function (tab, type) {
  const styleTabs = await styleService.findAllStyleTabs(type)
  if (!tab) {
    tab = styleTabs[0]['tab']
  }
  const styles = await styleService.findAllStyle(tab, type)
  const data = []
  styles.forEach(item => {
    if (item.tags) {
      item.tags = item.tags.split(',')
    }
    data.push(item)
  })

  return {
    data: styles,
    tabs: styleTabs,
    currentTab: tab
  }
}
