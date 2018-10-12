const Category = require('../models/category')
const Scategory = require('../models/sCategory')

exports.findAll = async function () {
  return Category.findAll({
    order: [['sort', 'ASC']]
  })
}

exports.findAllSecondCategory = async function () {
  return Scategory.findAll()
}
