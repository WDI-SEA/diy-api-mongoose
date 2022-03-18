const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    header: String, 
    body: String,
    date: Date
})

const bloggerSchema = new mongoose.Schema({
    title:String,
    body: String,
    name: String,
    comments: [commentSchema]
})

const Blogger = mongoose.model('Blogger',bloggerSchema)
module.exports = Blogger