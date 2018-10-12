const User = require('../models/user')

/**
 * 创建用户
 * @param user
 * @returns {Promise<user>}
 */
exports.create = async function (user) {
  return User.create(user)
}

/**
 * 更具用户email查询用户
 * @param email
 * @returns {Promise<Model>}
 */
exports.findUserByEmail = async function (email) {
  return User.findOne({
    where: { email }
  })
}

/**
 * 通过email和密码查询用户
 * @param email
 * @param password
 * @returns {Promise<Model>}
 */
exports.findUserByEmailAndPass = async function (email, password) {
  return User.findOne({
    where: {
      email: email,
      password: password
    }
  })
}
