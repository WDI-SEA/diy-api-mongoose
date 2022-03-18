const mongoose = require("mongoose")


// define the parent schema
const postSchema = new mongoose.Schema({
    name: String,
    body: String,
    date: Date
}, {timestamps: true })

// exporting the schemas as a model
const Post = mongoose.model("Post", postSchema)

module.exports = Post