const mongoose = require('mongoose')

const fishSchema = new mongoose.Schema({
    name: String,
    type: String,
    age: Number
})

module.exports = mongoose.model('Fish',fishSchema)