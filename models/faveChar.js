const mongoose = require('mongoose')


const faveCharSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 60
    },
    show: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bio: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('FaveChar', faveCharSchema)



