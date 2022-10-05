// require mongoose
const mongoose = require('mongoose')

// define subdoc schema (bonus)
const CommentSchema = new mongoose.Schema({
    content: {
        type: String
    }
}, {
    timestamps: true
})

// define model schema
const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    },
    comments: [CommentSchema]
}, {
    timestamps: true
})

// create and export model
module.exports = mongoose.model('Blog', BlogSchema)