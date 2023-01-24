const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    
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

module.exports = mongoose.model('Blog', BlogSchema)