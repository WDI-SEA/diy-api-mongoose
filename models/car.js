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
    },
    history: [{
        // tell mongoose that his is a reference
        type: mongoose.Schema.Types.ObjectId,
        // tell mongoose what model is being referenced
        ref: 'History'
    }]

})

module.exports = mongoose.model('Car', CarSchema)