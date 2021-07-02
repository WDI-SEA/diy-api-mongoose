const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: { type: String },
    author: { type: String },
    content: { type: String }
}, { timestamps: true })

module.exports = BlogSchema