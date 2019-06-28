
// bootstrap this app

let Koa = require('koa')
let KoaRouter = require('koa-router')
let koaLog = require('koa-log')
let serve = require('koa-static')
let fs = require('fs')
let path = require('path')

let app = new Koa()
let router = new KoaRouter()

router.get('/', (ctx) => {
  let temp = path.join(__dirname, 'dist', 'index.html')
  ctx.body = fs.createReadStream(temp)
})

router.post('/api', ctx => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('content-type', 'application/json;charset=UTF-8')
  ctx.body = {
    err: 0,
    errMsg: '',
    data: ['hello', 'world']
  }
})

app.use(koaLog())

app.use(serve(__dirname + '/dist/'))

app
  .use(router.routes())
  .use(router.allowedMethods())

app.use(ctx => {
  ctx.body = 'hello'
})

app.listen('8081', () => {
  console.log(`
    ----------------------------------------\n
    pls visit: http://localhost:8081\n
    ----------------------------------------\n
  `)
})
