var app = require('koa')(),
    jade = require('koa-jade'),
    serve = require('koa-static');
var [port = 8000] = [process.env.PORT];

// 设置render参数
app.use(jade.middleware({
    viewPath: `${__dirname}/views`,
    debug: false,
    pretty: true,
    compileDebug: false,
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

require('./config/router.js')(app);


app.listen(port);
console.log(`Your app listen on ${port}`);