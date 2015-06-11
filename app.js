var app = require('koa')(),
    jade = require('koa-jade'),
    serve = require('koa-static');
var [port = 8000] = [process.env.PORT];

// 记录日志
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log(`${this.method} ${this.url} - ${ms}ms`);
});

// 设置render参数
app.use(jade.middleware({
    viewPath: `${__dirname}/views`,
    debug: false,
    pretty: '  ',
    compileDebug: false,
    noCache: process.env === 'development',
    // locals: global_locals_for_all_pages,
    basedir: `${__dirname}/views/extends`,
    // helperPath: [
    //     'path/to/jade/helpers',
    //     { random: 'path/to/lib.js' },
    //     { _: require('lodash') }
    // ]
}))

app.use(serve('bower_components/'));
app.use(serve('public/'));
app.use(serve('node_modules/gulp-babel/node_modules/babel-core/browser.min.js'))

require('./config/router.js')(app);


app.listen(port);
console.log(`Your app listen on ${port}`);