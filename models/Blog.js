const mongoose = require('mongoose')

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

module.exports = blogSchema