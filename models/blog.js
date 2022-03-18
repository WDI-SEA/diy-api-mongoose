const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    content: String
})

// define the parent schema
const postSchema = new mongoose.Schema({
    name: String,
    body: String,
    date: Date,
    comments: [commentSchema]
}, {timestamps: true })

// exporting the schemas as a model
const Post = mongoose.model("Post", postSchema)

module.exports = Post