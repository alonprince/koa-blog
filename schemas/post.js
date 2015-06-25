var Schema = require('mongoose').Schema;

var Post = new Schema({
    sequence: { tpye: Number, min: 0 },
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
    fetch: function(query, cb) {
        query = query || {};
        return this.find(query)
                .sort({
                    created: -1
                })
                .exec(cb)
    },
    findById: function(id, cb) {
        return this.findOne({
            _id: id
        })
        .exec(cb)
    }
}

module.exports = Post;