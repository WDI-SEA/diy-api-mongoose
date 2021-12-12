const { contentType } = require('express/lib/response')
const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    name: String,
    title: Number,
    content: String
})