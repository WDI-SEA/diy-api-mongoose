const mongoose = require('mongoose')

const fishSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number,
    pond: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pond'
    }
})

module.exports = mongoose.model('Fish',fishSchema)