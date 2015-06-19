var Schema = require('mongoose').Schema;

var Post = new Schema({
    no: { tpye: Number, min: 0 },
    content: { type: String },
    created: { type: Date, default: Date.now() },
    history: { type: Array, default:[] },
    updated: { type: Date }
})

module.exports = Post;