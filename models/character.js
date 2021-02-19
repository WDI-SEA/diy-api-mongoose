const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    vision: String,
    ATK: Number,
    DEF: Number,
    HP: Number,
    EM: Number,
    critRate: {
        type: String,
        default: '5%'
    },
    critDamage: {
        type: String,
        default: '50%'
    }
})

module.exports = mongoose.model('Character', characterSchema)