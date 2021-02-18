const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/genshinCharacters', {
    useUnifiedTopology: true, // Gives mongo more time to send back a success signal.
    useNewUrlParser: true // If database route isn't exact, that's ok; parse whatever is similar. 
})

// Import character scheme from ./character.js and then export it as '.Character'
module.exports.Character = require('./character')
module.exports.Talent = require('./talent')