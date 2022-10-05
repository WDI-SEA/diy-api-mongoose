const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    name: {type: String},
    class: {type: String},
    background: {type: String},
    age: {type: Number},
    ancestry: {type: String},
    diety: {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Character', CharacterSchema)