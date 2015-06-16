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
        const isAdmin = this.cookies.get('isAdmin', {
            signed: true
        });
        if (isAdmin === 'yes he is') {
            this.redirect('/admin/dashboard');
        };
        this.render('admin', {}, {
            pretty: '  '
        });
    })

    router.post('/admin/login', function *(next) {
        if (this.body.username === 'admin' && this.body.password === 'wangheng') {
            this.cookies.set('isAdmin', 'yes he is', {
                signed: true,
                expires: new Date(Date.now() + 7 * 24 * 3600000)
            });
            this.redirect('/admin/dashboard');
        };
    })

    router.get('/admin/dashboard', function *(next) {
        const isAdmin = this.cookies.get('isAdmin', {
            signed: true
        });
        if (isAdmin !== 'yes he is') {
            this.redirect('/admin');
        };
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