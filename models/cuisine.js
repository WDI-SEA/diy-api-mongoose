const mongoose = require('mongoose')

const cuisineSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 100
    },
    type: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Cuisine', cuisineSchema)