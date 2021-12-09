const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    author: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 100
    },
    title: {
        type:String,
        require: true,
    },
    content: {
        type: String,
        require: true
    }

})

module.exports = mongoose.model('Blog', blogSchema)