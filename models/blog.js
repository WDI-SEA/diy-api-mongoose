const mongoose = require('mongoose')

// define the embedded 'child' schema
const commentSchema = new mongoose.Schema({
    content: String,
})

// create the schema
const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: String,
    comments: [commentSchema],
}, {timestamps: true})

// create the model
const Blog = mongoose.model('Blog', blogSchema)
// export the model
module.exports = Blog
// OR CAN COMBINE WITH
// module.exports = mongoose.model('Blog', blogSchema)
