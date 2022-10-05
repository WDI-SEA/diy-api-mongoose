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
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema)