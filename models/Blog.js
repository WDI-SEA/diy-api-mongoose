const mongoose = require('mongoose')

const blogSchema = new mongoose.schema({
    name:{
        type: String,
    },
    title: {
        type: String,
    },
    content: {
    type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)