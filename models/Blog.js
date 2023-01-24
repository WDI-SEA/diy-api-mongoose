const mongoose = require('mongoose')

// define Schema
const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true //mongoose will throw an error if we try to CREATE blog without this field
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)