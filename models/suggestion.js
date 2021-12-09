const mongoose = require('mongoose')

const suggestionSchema = mongoose.Schema({
    name: String,
    suggestion: String
}, {
    timestamps: true
})

const suggestion = mongoose.model('Suggestion', suggestionSchema)

module.exports = suggestion