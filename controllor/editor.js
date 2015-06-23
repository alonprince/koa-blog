var Post = require('../model/post.js');

module.exports = {
    saveArticle: function *(next) {
        var _this = this;
        var post = new Post({
            content: this.body.content,
            sequence: this.body.sequence
        });
        post.save(function(err, post) {
            console.log(post);
            _this.body = {
                result: 'success'
            }
        });
    }
}