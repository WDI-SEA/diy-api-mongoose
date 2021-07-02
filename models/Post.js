// require mongoose package
const mongoose = require('mongoose')

// define a schema
const PostSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    tags: {
        type: Array
    },
    content: {
        type: String
    }
    }, {
    timestamps: true
    })

    // export model build
    module.exports = PostSchema