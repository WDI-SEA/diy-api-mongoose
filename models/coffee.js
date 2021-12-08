const mongoose = require('mongoose')

let coffeeSchema = new mongoose.Schema({
    coffeeName: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 100,
    },
    roaster: {
        type: String,
        require: false,
        minlength: 1,
        maxlength: 100,
    },
    servingType: {
        type: String,
        require: true,
        mixlength: 1,
        maxlength: 100
    },
    price: {
        type: Number,
        require: false,
    }
})

module.exports = mongoose.model('Coffee', coffeeSchema)