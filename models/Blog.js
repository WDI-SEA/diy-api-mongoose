const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    // _id: {
    //     type: Interger,
    // },
    name: {
        type: String,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
}, {timestamps: true})

module.exports = mongoose.model('Blog', BlogSchema)
