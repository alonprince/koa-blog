var Schema = require('mongoose').Schema;

var Post = new Schema({
    no: { tpye: Number, min: 0 },
    content: String,
    created: Date,
    history: { type: Array, default:[] },
    updated: Date
})

Post.pre('save', function (next) {
    if (this.isNew) {
        this.created = this.updated = new Date();
    }else {
        this.updated = new Date();
    };
    next();
})  

Post.statics = {
    find: function(query, cb) {
        query = query || {};
        return this.find(query)
                .sort({
                    created: -1
                })
                .exec(cb)
    }
}

module.exports = Post;