const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    title: {
        type: Number,
        required: true
    }, 
    content: {
        type: String, 
        required: true
    }
}, {
    timestamps: true
})

module.exports = BlogSchema