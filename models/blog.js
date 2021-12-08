const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 100
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Blog', blogSchema)