var postSchema = require('../schemas/post.js'),
    model = require('mongoose').model;

var Post = model('post', postSchema);

module.exports = Post;