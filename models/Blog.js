const mongoose = require('mongoose')

// define a schema
const BlogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // mongoose will throw an error if we try to CREATE blog w/o this field
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

// create model
// export the model
module.exports = mongoose.model('Blog', BlogSchema)