var router = require('koa-router')();

module.exports = function(app) {
    router.get('/', function *(next) {
        this.render('index.jade');
    });

    router.get('/admin', function *(next) {
    })


    app.use(router.routes())
        .use(router.allowedMethods());
}