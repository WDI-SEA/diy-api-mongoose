//setup mongoose connection
const mongoose = require('mongoose')

// Mongo connection string
mongoose.connect('mongodb://localhost/pokemonapi')

//shortcut to db
const db = mongoose.connection

// event listeners
db.once('open', () => {
    console.log(`Connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error(`Database error: \n ${err}`)
})

module.exports.Pokemon = require('./pokemon')