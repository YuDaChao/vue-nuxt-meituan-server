const CODE_STR = 'qwertyuiopasdfghjklzxcvbnm1234567890'

/**
 * 获取验证码码
 * @param num 验证码位数 默认4位
 */
const getVerifycode = function (num = 4) {
  let code = ''
  for (let i = 0; i < num; i++) {
    let index = Math.floor(Math.random() * 36)
    code += CODE_STR.substr(index, 1)
  }
  return code
}

exports.getVerifycode = getVerifycode
