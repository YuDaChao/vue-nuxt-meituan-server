const router = require('koa-router')()
const uuidv4 = require('uuid/v4')

const userController = require('../controller/user')

router.prefix('/users')

router.post('/register', async (ctx, next) => {
  const { userName, password, rePassword, email } = ctx.request.body
  const id = uuidv4()
  const result = await userController.register(id, userName, password, rePassword, email)
  ctx.body = result
})

router.post('/login', async (ctx, next) => {
  const { email, password } = ctx.request.body
  const result = await userController.login(email, password)
  ctx.body = result
})


module.exports = router
