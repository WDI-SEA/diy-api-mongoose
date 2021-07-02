// require the mongoose package
const mongoose = require('mongoose')

// define a mongoose schema
const PostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: [String]
}, {
    timestamps: true
})

// export the schema
module.exports = PostSchema