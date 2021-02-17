const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Vision: String,
    ATK: Number,
    DEF: Number,
    HP: Number,
    EM: Number,
    CritRate: {
        type: String,
        default: '5%'
    },
    CritDamage: {
        type: String,
        default: '50%'
    }
})

module.exports = mongoose.model('Character', characterSchema)