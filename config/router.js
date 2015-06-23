"use strict"

var router = require('koa-router')(),
    auth   = require('../middleware/auth.js'),
    admin  = require('../controllor/admin.js'),
    editor = require('../controllor/editor.js');

var num = 0;

var _getNewArticleId = function() {
    return num;
}

module.exports = function(app) {
    // home
    router.get('/', function *(next) {
        this.render('index', {}, {
            pretty: '  '
        });
    });

    // admin
    router.get('/admin', auth.goDash, admin.adminPage);

    router.post('/admin/login', admin.adminLogin)

    router.get('/admin/dashboard', auth.isLogin, admin.dashboard)

    router.get('/admin/edit/:id', auth.isLogin, admin.editPage);

    router.get('/admin/add/article', auth.isLogin, admin.addArticle);

    // CURD
    router.post('/admin/add/article/:id', auth.isLogin, editor.saveArticle);

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