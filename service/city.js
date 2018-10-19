const sequelize = require('../libs/sequelize')
const City = require('../models/city')

exports.findAllCity = async function () {
  return City.findAll({
    order: [['city_label', 'ASC']]
  })
}

exports.findProvinceList = async function () {
  const sql = 'select city.*, province.`name`, province.`code` from city\n' +
    'join province on city.province_code = province.`code`\n' +
    'ORDER BY province.`code`'
  return sequelize.query(sql, { type: sequelize.QueryTypes.SELECT})
}
