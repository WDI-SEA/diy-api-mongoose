// require the mongoose package 
const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: String,
    opinions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crush'
    }
})

module.exports = mongoose.model('Comment', CommentSchema)