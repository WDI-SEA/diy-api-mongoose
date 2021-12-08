// import mongoose 
const mongoose = require('mongoose')

// schema goes here 
const projectSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minglenght: 2,
        maxlenght: 100
    },
    techStack: {
        type: String,
        required: true,
    },
    description: {
        type: String, 
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    liveUrl: {
        type: String, 
        required: true
    },
    gitUrl: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Project', projectSchema)