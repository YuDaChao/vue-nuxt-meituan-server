const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const logger = require('koa-logger')

const sessionConfig = require('./config/session')
const mysqlConfig = require('./config/mysql')

const index = require('./routes/index')
const users = require('./routes/users')


const mysqlStore = new MysqlStore({
  user: mysqlConfig.USER,
  password: mysqlConfig.PASSWORD,
  database: mysqlConfig.DATABASE,
  host: mysqlConfig.HOST
})

sessionConfig.store = mysqlStore


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(session(sessionConfig, app))
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
