"use strict"

var Post = require('../model/post.js'),
    _ = require('underscore'),
    srConf = require('../lib/sr-conf.js');

module.exports = {
    index: function *(next) {
        var posts = yield Post.all();
        _.each(posts, function(obj) {
            obj.sr = _.sample(srConf);
        });
        this.render('index', {
            posts: posts
        }, {
            pretty: '  '
        });
    },
    detail: function *(next) {
        var id = this.params.id;
        var article = yield Post.findById(id)
        this.render('detail', {
            article: article
        }, {
            pretty: '  '
        })
    }
}