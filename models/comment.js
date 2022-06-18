const mongoose = require('mongoose')

// create comment schema
const CommentSchema = new mongoose.Schema({
    content: String,
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog'
    }
}, {
    timestamps: true
})

//  export a comment model
module.exports = mongoose.model('comment', CommentSchema)