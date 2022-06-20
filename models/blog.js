// require mongoose
const mongoose = require('mongoose')

// BlogSchema
const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 40,
        required: true
    },
    title: {
        type: String,
        maxlength: 40,
        required: true
    },
    content: {
        type: String,
        maxlength: 500
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    }]
}, { timestamps: true })

// export model
module.exports = mongoose.model('blog', BlogSchema)