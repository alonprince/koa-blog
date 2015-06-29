var Post = require('../model/post.js');
var resHelper = require('../lib/res-helper.js');

var _addArticle = function(seq) {
    return new Post({
        sequence: seq,
        content: '',
        title: '',
        preview: ''
    })
}

module.exports = {
    saveArticle: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.history.unshift({
            content: post.content,
            date: post.updated
        });
        if (post.history.length > 5) post.history.length = 5;
        post.content = this.request.body.content;
        post.title = this.request.body.title;
        post.preview = this.request.body.preview;
        yield post.save();
        this.body = resHelper.right({
            _id: post._id
        });
    },
    addArticle: function *(next) {
        var seq = yield Post.count();
        var post = _addArticle(seq);
        var result = yield post.save();
        this.redirect(`/admin/edit/${result._id}`);
    },
    recycle: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.status = 0;
        yield post.save();
        this.redirect('/admin/dashboard');
    },
    publish: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.status = 1;
        yield post.save();
        this.redirect('/admin/dashboard');
    },
    delete: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.status = -1;
        yield post.save();
        this.redirect('/admin/dashboard');
    }
}