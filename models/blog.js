const mongoose = require('mongoose')

//blog schema
const BlogSchema = new mongoose.Schema({
    title: String,
    body: String,
    comments: {CommentSchema},
    blogger: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

// Comment Schema
const CommentSchema = new mongoose.Schema ({
    header: String,
    content: String,
    }, {
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)