const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = PostSchema