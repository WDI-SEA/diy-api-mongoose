const mongoose = require('mongoose')

const blogSchema = new mongoose.schema({
    name: String,
    title: String,
    content: Text
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', blogSchema)