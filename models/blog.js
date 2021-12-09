const mongoose = require('mongoose')

let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxlength: 50
    },
    topic: {
        type: String,
        maxlength: 50
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Blog', blogSchema)