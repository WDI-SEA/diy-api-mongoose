const mongoose = require('mongoose')

// embed child schema
const commentSchema = new mongoose.Schema({
    content: String
}, {timestamps: true})

// parent schema
const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        comments: [commentSchema]
    }
}, {timestamps: true})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog