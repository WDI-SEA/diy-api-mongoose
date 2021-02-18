const mongoose = require('mongoose')

const spellSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    spellName: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true,
        min: 1,
        max: 9
    },
    desc: {
        type: String,
        required: true
    }
})

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
    },
    spells: [spellSchema]
})

module.exports = mongoose.model('Character', characterSchema)