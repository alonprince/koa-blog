"use strict"

var Schema = require('mongoose').Schema,
    srConf = require('../lib/sr-conf.js'),
    _ = require('underscore');

var Post = new Schema({
    sequence: Number,
    content: String,
    created: Date,
    history: { type: Array, default:[] },
    updated: Date,
    title: String,
    status: { type: Number, default: 0 },
    preview: String
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
                .exec(cb);
    },
    findById: function(id, cb) {
        return this.findOne({
            _id: id
        }).exec(cb);
    },
    all: function(page) {
        page = page || 1;
        const limit = 15;
        var skip = (page - 1) * limit;
        return this.find({
            status: 1
        })
        .sort({
            created: -1
        })
        .skip(skip)
        .limit(limit);
    }
}

module.exports = Post;