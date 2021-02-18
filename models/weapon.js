// require mongoose
const mongoose = require('mongoose')

//create a weapon schema
const weaponSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stabBonus: {
        type: Number,
        default: 0
    },
    slashBonus: {
        type: Number,
        default: 0
    },
    crushBonus: {
        type: Number,
        default: 0
    },
    strengthBonus: {
        type: Number,
        default: 0
    },
    specialAttack: {
        type: String,
        default: 'None'
    }
})

module.exports = mongoose.model('Weapon', weaponSchema)