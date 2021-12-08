const mongoose = require("mongoose")

let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    post: {
        type: String,
        require: true,
        minlength: 5
    }

})

module.exports = mongoose.model('Blog', blogSchema)