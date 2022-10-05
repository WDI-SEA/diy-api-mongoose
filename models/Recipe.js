const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String
    },
    ingredients: {
        type: String
    },
    directions: {
        type: String
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)