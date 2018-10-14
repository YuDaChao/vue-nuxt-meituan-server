const City = require('../models/city')

exports.findAllCity = async function () {
  return City.findAll({
    order: [['city_label', 'ASC']]
  })
}
