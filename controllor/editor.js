var Post = require('../model/post.js');
var thunkify = require('thunkify');


module.exports = {
    saveArticle: function *(next) {
        var _this = this;
        var post = new Post({
            content: this.request.body.content,
            sequence: this.request.body.sequence
        });
        var save = thunkify(post.save);
        yield save();
        this.body = {
            result: 'hahahah'
        };
    }
}