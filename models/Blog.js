const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // mongoose will throw errorr if try to create blog without
        // this field
    },
    title: {
        type: String,
        required: true
    }, 
    content: {
        type: String,
        required: true
    }
}, { timestamps: true }
)


module.exports = mongoose.model('Blog', BlogSchema)