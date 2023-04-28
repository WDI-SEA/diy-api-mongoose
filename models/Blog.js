const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: String,   
    title: Number,
    content: String
}, { timestamps: true } )

module.exports = mongoose.model('Blog', BlogSchema)