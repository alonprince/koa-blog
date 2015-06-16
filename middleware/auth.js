var isLogin = function *(next) {
    const isAdmin = this.cookies.get('isAdmin', {
        signed: true
    });
    if (isAdmin !== 'yes he is') {
        this.redirect('/admin');
    };
    yield next;
}

var goDash = function *(next) {
    const isAdmin = this.cookies.get('isAdmin', {
        signed: true
    });
    if (isAdmin === 'yes he is') {
        this.redirect('/admin/dashboard');
    };
    yield next;
}

exports.isLogin = isLogin;

exports.goDash = goDash;
