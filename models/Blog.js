const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    name: {
        type: String
    }, 
    title: {
        type: Number, 
        validate: {
        validator: Number.isInteger,
        message: `{VALUE} is not an integer value`
        }
    }, 
    content: {
        type: String
    }
},{ 
    timestamps: true
})

module.exports = mongoose.model('Blog', BlogSchema)