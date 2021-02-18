const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/characters', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

module.exports.character = require('./character')