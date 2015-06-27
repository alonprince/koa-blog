var Post = require('../model/post.js');
var moment = require('moment');

module.exports = {
    adminPage: function *(next) {
        this.render('admin', {}, {
            pretty: '  '
        })
    },
    adminLogin: function *(next) {
        if (this.request.body.username === 'admin' && this.request.body.password === 'wangheng') {
            this.cookies.set('isAdmin', 'yes he is', {
                signed: true,
                expires: new Date(Date.now() + 7 * 24 * 3600000)
            });
            this.redirect('/admin/dashboard');
        };
    },
    dashboard: function *(next) {
        var result = yield Post.fetch();
        this.render('dashboard', {
            posts: result
        }, {
            pretty: '  '
        });
    },
    editPage: function *(next) {
        var _id = this.params.id;
        var post = yield Post.findById(_id);
        this.render('edit', {
            id: this.params.id,
            content: decodeURIComponent(post.content),
            title: post.title
        }, {
            pretty: '  '
        })
    }
}