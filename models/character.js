const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    level: {
        type: Number,
        min: 1,
        max: 20,
        required: true
    }, 
    class: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Character', characterSchema)