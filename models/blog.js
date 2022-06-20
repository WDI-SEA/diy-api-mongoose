// require mongoose
const mongoose = require('mongoose')

// Schema
const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 1,
        maxlength: 40,
        required: true
    },
    title: {
        type: String,
        minlength: 1,
        maxlength: 40,
        required: true
    },
    content: {
        type: String,
        minlength: 5,
        maxlength: 500
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
}, { timestamps: true })

// export model
module.exports = mongoose.model('blog', BlogSchema)