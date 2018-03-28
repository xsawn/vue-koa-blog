const Koa = require('koa');
const koaStatic = require('koa-static');
var app = new Koa();


app.use(koaStatic('./assets/'));
app.use(async ctx => {
	ctx.body = 'hello world!'
})
app.listen(8888)

console.log('koa server listening at 8888')