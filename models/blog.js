const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    }, 
    title: {
        type: String
    },
    content: {
        type: String
    },
    mood: {
        type: String
    }
})

module.exports = mongoose.model('Blog', blogSchema)