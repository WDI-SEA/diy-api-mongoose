const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2, 
        maxlength: 100
    },
    title: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 200
    },
    content: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Blog', blogSchema)