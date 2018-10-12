const router = require('koa-router')()
const collect = require('collect.js')

const { getVerifycode } = require('../utils/getVerifycode')

const categoryService = require('../service/category')
const mailerService = require('../service/mailer')


router.get('/category', async (ctx, next) => {
  const result = await categoryService.findAll()
  ctx.body = {
    status: 0,
    message: '成功',
    data: result
  }
})

router.get('/s_category', async (ctx, next) => {
  const result = await categoryService.findAllSecondCategory()

  const collection = collect(result)
  const grouped = collection.groupBy('p_name')
  let data = []
  for (let key in grouped.items) {
    data.push({
      id: grouped.items[key].items[0].category_id,
      title: key,
      list: grouped.items[key].items
    })
  }

  ctx.body = {
    status: 0,
    message: '成功',
    data: data
  }
})

router.get('/send_mail', async (ctx, next) => {
  const { email } = ctx.request.query
  if (!email) {
    ctx.body = {
      status: 1,
      message: '邮箱地址不能为空',
      data: {}
    }
    return false
  }
  const code = getVerifycode()
  // 将验证码暂存在cookie中
  ctx.cookies.set('code', code, {
    maxAge: 1000 * 60 // 一分钟
  })
  const subject = '来自(vue全家桶, nuxt.js高仿美团)的验证邮件, 您的验证码是: ' + code
  try {
    const info = await mailerService.sendMail(email, subject)
    ctx.body = {
      status: 0,
      message: '发送成功',
      data: {}
    }
  } catch (e) {
    ctx.body = {
      status: 1,
      message: '发送email失败',
      data: {}
    }
  }
})

router.get('/code', async (ctx, next) => {
  const code = ctx.cookies.get('code')
  ctx.body = code
})

module.exports = router
