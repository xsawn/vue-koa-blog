const Koa = require('koa');
var app = new Koa();
app.use(async ctx => {
	ctx.body = 'hello world!'
})
app.listen(8888)

console.log('koa server listening at 8888')