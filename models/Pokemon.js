const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    species: {
        type: String
    },
    type: {
        type: String
    },
    nickname: {
        type: String
    },
    level: {
        type: Number   
    },
    shiny: {
        type: Boolean
    },
    trainer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trainer'
    }]
},{timestamps: true})

module.exports = mongoose.model('Pokemon', PokemonSchema)