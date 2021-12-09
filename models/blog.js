const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,
        minLength: 2,
        maxLength: 100
    },
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('blog', blogSchema)