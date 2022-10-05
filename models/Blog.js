const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)