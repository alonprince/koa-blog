"use strict"

var router = require('koa-router')(),
    auth   = require('../middleware/auth.js'),
    admin  = require('../controllor/admin.js'),
    editor = require('../controllor/editor.js'),
    article = require('../controllor/article.js');

module.exports = function(app) {
    // home
    router.get('/', article.index);

    // admin
    router.get('/admin', auth.goDash, admin.adminPage);

    router.post('/admin/login', admin.adminLogin)

    router.get('/admin/dashboard', auth.isLogin, admin.dashboard)

    router.get('/admin/edit/:id', auth.isLogin, admin.editPage);

    // CURD
    router.get('/admin/add/article', auth.isLogin, editor.addArticle);

    router.post('/admin/add/article/:id', auth.isLogin, editor.saveArticle);

    router.post('/admin/recycle/article', auth.isLogin, editor.recycle);

    router.post('/admin/publish/article', auth.isLogin, editor.publish);

    router.post('/admin/delete/article', auth.isLogin, editor.delete);

    // about
    router.get('/about', function *(next) {
        this.render('about', {}, {
            pretty: '  '
        });
    })

    // article
    router.get('/page/:num', function *(next) {

    })

    router.get('/articles/:id', article.detail)




    app.use(router.routes())
        .use(router.allowedMethods());
}