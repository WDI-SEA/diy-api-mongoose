const mongoose = require('mongoose')

// define the embedded child schema
const commentSchema = new mongoose.Schema({
    header: String,
    body: String,
})

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [commentSchema]
})

module.exports = mongoose.model('Blog', blogSchema)