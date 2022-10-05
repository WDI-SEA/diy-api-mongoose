// require the mongoose package
const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    header: {
        type: String
    },
    content: {
        type: String
    },
    // array of object ids that reference the blogs that the user has made
    pokemoncards:[{
        // tell mongoose that this is a reference
        // tell mongoose what is being referenced ??
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PokemonCard'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('Comment', CommentSchema)