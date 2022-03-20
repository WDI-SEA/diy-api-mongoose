const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    date: Date
},{timestamps:true})

const blogSchema = new mongoose.Schema({
    author: String,
    title: String,
    body: String,
    imgurl: String,    
    comments:[commentSchema]
},{timestamps:true})

module.exports = mongoose.model('BlogPost', blogSchema)