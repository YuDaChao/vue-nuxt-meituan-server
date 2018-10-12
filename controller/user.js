const userService = require('../service/user')

/**
 * 用户注册逻辑
 * @param id
 * @param userName
 * @param password
 * @param rePassword
 * @param email
 * @returns {Promise<*>}
 */
exports.register = async function (id, userName, password, rePassword, email) {
  if (
    !id ||
    !userName ||
    !password ||
    !email
  ) {
    return {
      status: 1,
      message: '用户信息不能为空',
      data: {}
    }
  }
  const user = await userService.findUserByEmail(email)
  if (user) {
    return {
      status: 1,
      message: 'email已注册',
      data: {}
    }
  }
  const newUser = await userService.create({
    id: id,
    username: userName,
    password: password,
    email: email,
    createAt: new Date()
  })
  if (newUser) {
    return {
      status: 0,
      message: '注册成功',
      data: {
        id: id,
        username: userName,
        email: email,
        createAt: new Date()
      }
    }
  }
}

exports.login = async function (email, password) {
  if (!email || !password) {
    return {
      status: 1,
      message: '请输入email或密码',
      data: {}
    }
  }
  const user = await userService.findUserByEmailAndPass(email, password)
  if (user) {
    const { id, username, email, createAt } = user
    return {
      status: 0,
      message: '登录成功',
      data: {
        id, username, email, createAt
      }
    }
  } else {
    return {
      status: 1,
      message: 'email或密码错误',
      data: {}
    }
  }
}
