const router = require('koa-router')()
const uuidv4 = require('uuid/v4')

const userController = require('../controller/user')

router.prefix('/users')

router.post('/register', async (ctx, next) => {
  const { userName, password, rePassword, email, code } = ctx.request.body
  // 获取存放在cookie中的验证码
  const _code = ctx.cookies.get('code')
  if (!code) {
    ctx.body = {
      status: 1,
      message: '请输入验证码',
      data: {}
    }
    return false
  } else if (!_code) {
    ctx.body = {
      status: 1,
      message: '验证码已过期',
      data: {}
    }
    return false
  } else {
    if (_code !== code.toLowerCase()) {
      ctx.body = {
        status: 1,
        message: '验证码错误',
        data: {}
      }
      return false
    }
  }
  const id = uuidv4()
  const result = await userController.register(id, userName, password, rePassword, email)
  ctx.body = result
})

router.post('/login', async (ctx, next) => {
  const { email, password } = ctx.request.body
  const result = await userController.login(email, password)
  if (result.status === 0) {
    // 将用户信息保存到session中
    ctx.session.user = result.data
  }
  ctx.body = result
})


module.exports = router
