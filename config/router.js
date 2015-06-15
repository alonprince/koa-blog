"use strict"

var router = require('koa-router')();

module.exports = function(app) {
    // home
    router.get('/', function *(next) {
        this.render('index', {}, {
            pretty: '  '
        });
    });

    // admin
    router.get('/admin', function *(next) {
        this.render('admin', {}, {
            pretty: '  '
        });
    })

    router.post('/admin/login', function *(next) {
        if (this.body.username === 'admin' && this.body.password === 'wangheng') {
            this.redirect('/admin/dashboard');
        };
    })

    router.get('/admin/dashboard', function *(next) {
        this.render('dashboard', {}, {
            pretty: '  '
        });
    })

    // about
    router.get('/about', function *(next) {
        this.render('about', {}, {
            pretty: '  '
        });
    })

    // article
    router.get('/page/:num', function *(next) {

    })




    app.use(router.routes())
        .use(router.allowedMethods());
}