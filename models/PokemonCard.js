const mongoose = require('mongoose')

// child
const CommentSchema = new mongoose.Schema({
    header: {
        type: String
    },
    content: {
        type: String
    }
})

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
    comments: [CommentSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('PokemonCard', PokemonCardSchema)