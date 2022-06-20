// require mongoose
const mongoose = require('mongoose')

// Schema
const CommentSchema = new mongoose.Schema({
    content: {
        type: String
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
    }
}, { timestamps: true })

// export model
module.exports = mongoose.model('comment', CommentSchema)