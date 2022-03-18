const mongoose = require('mongoose')

// define the embedded child schema
const commentSchema = new mongoose.Schema({
    content: String,
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
    name: String,
    comments: [commentSchema]
})

module.exports = mongoose.model('Blog', blogSchema)
// module.exports = mongoose.model('Comment', commentSchema)