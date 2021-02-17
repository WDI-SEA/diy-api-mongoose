const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/characters', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports.character = require('./character')