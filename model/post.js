var postSchema = require('../schemas/post.js');

var Post = require('mongoose').model('Post', postSchema);

module.exports = Post;