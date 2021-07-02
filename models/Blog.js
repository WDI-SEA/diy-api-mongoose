const mongoose = require('mongoose')
let db = require('./models')
let router = require('express').Router()

// set up array of information 
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true},
    author: {
        type: String
    },
    published: {
        type: Date
    }
})

// const Blog = mongoose.model('Blog', blogSchema)
module.exports = blogSchema