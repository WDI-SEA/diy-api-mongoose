const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', PostSchema)