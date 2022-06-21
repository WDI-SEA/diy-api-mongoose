const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
    }
})

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    image: String,
    comments: [CommentSchema]
}, {
    timestamps:true
})


module.exports = mongoose.model('Blog', BlogSchema)