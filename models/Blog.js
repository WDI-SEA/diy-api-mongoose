const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title: {
        type: String
    },
    subTitle: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = BlogSchema