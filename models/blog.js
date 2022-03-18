const mongoose = require('mongoose')

// create model schema
const commentSchema = new mongoose.Schema({
    content: String
})

const blogSchema = new mongoose.Schema({
    name: String,
    title: Number,
    content: String,
    comments: [commentSchema]

}, {timestamps: true})



// Create the model
const Blog = mongoose.model('Blog', blogSchema)

// export the model
module.exports = Blog