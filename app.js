"use strict"

var app = require('koa')(),
    jade = require('koa-jade'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser'),
    mongoose = require('mongoose'),
    moment = require('moment');
var port = process.env.PORT || 8000;

const MONGO_URL = 'mongodb://localhost/blog';

mongoose.connect(MONGO_URL);

var db = mongoose.connection;

db.once('open', function() {
    console.log('connect to mongodb');
});

db.on('error', function() {
    console.log('database connect error');
})

app.keys = ['phishing']

// 记录日志
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log(`${this.method} ${this.url} - ${ms}ms`);
});

app.use(bodyParser());

// app.use(function *(next) {
//     this.request = this.request.body;
//     yield next;
// });

// 设置render参数
app.use(jade.middleware({
    viewPath: `${__dirname}/views`,
    debug: false,
    pretty: '  ',
    compileDebug: false,
    noCache: process.env === 'development',
    locals: {
        moment: moment
    },
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


console.log(`Your app listen on ${port} with ${app.env}`);