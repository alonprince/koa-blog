module.exports = {
    adminPage: function *(next) {
        this.render('admin', {}, {
            pretty: '  '
        })
    },
    adminLogin: function *(next) {
        if (this.body.username === 'admin' && this.body.password === 'wangheng') {
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
        this.render('edit', {}, {
            pretty: '  '
        })
    },
    addArticle: function *(next) {
        this.redirect('/admin/edit/' + _getNewArticleId());
    }
}