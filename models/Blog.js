const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    subject: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = BlogSchema