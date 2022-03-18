const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: Date
})

const blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    date: Date,
    comments:[commentSchema]
})

module.exports = mongoose.model('BlogPost', blogSchema)