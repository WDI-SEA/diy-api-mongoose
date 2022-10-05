const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

const BlogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    },
    comments: [CommentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)