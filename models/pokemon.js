const mongoose = require('mongoose')

//create ability schema
const abilitySchema = new mongoose.Schema({
    name: String,
    type: String,

})

//create pokemon schema
const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    weakness: String,
    abilities: [abilitySchema],
    captured: {
        type: Boolean,
        default: false
    },
    ownedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }
})

//create the model
const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon