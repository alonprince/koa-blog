var router = require('koa-router')();

module.exports = function(app) {
    // home
    router.get('/', function *(next) {
        this.render('index');
    });

    // admin
    router.get('/admin', function *(next) {
        this.render('admin');
    })

    // about
    router.get('/about', function *(next) {
        this.render('about');
    })

    // article
    router.get('/page/:num', function *(next) {

    })




    app.use(router.routes())
        .use(router.allowedMethods());
}