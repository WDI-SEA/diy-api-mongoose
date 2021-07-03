// Require Mongoose
const mongoose = require('mongoose')

// Write Schema
const BlogSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        widgets: {
            type: Number
        }, 
        content: {
            type: String,
            required: true
        },
        purpose: {
            type: String
        }
    }, {
        timestamps: true
})

module.exports = BlogSchema
