const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Car', CarSchema)