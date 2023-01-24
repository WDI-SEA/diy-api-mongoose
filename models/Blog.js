const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Blog', BlogSchema)