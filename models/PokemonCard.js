const mongoose = require('mongoose')

const PokemonCardSchema = new mongoose.Schema({
    name: {
        type: String
    },
    img_Url: {
        type: String
    },
    rarity: {
        type: String
    },
    description: {
        type: String
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('PokemonCard', PokemonCardSchema)