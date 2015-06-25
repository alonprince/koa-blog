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
        this.render('dashboard', {}, {
            pretty: '  '
        });
    },
    editPage: function *(next) {
        this.render('edit', {
            id: this.params.id
        }, {
            pretty: '  '
        })
    },
    addArticle: function *(next) {
        this.redirect('/admin/edit/' + _getNewArticleId());
    }
}