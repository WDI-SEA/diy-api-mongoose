const mongoose = require ('mongoose')

let playerSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 100
    },
    team: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    years: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Player', playerSchema)