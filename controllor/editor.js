var Post = require('../model/post.js');
var resHelper = require('../lib/res-helper.js');

module.exports = {
    saveArticle: function *(next) {
        var _id = this.request.body._id;
        var post = yield Post.findById(_id);
        post.content = this.request.body.content;
        yield post.save(post);
        this.body = resHelper.right({
            _id: post._id
        });
    }
}