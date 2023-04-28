const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    location: {
        type: String
    }, 
    rating: {
        type: Number
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    tags: {
        type: Array
    }    
}, {
    timestamps: true
})

module.exports = mongoose.model("Review", ReviewSchema)