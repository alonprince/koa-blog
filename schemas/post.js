var Schema = require('mongoose').Schema;

var Post = new Schema({
    sequence: Number,
    content: String,
    created: Date,
    history: { type: Array, default:[] },
    updated: Date,
    title: String,
    status: { type: Number, default: 1 }
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
        query = query || {status: 1};
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