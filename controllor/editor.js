var Post = require('../model/post.js');
var resHelper = require('../lib/res-helper.js');

var _addArticle = function(seq) {
    return new Post({
        sequence: seq,
        content: '',
        title: '新文章'
    })
}

module.exports = {
    saveArticle: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.content = this.request.body.content;
        post.title = this.request.body.title;
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
    delArticle: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.status = 0;
        yield post.save();
        this.redirect('/admin/dashboard');
    }
}