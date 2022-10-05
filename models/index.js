// require the mongoose package
const mongoose = require ('mongoose')

// connect to a mongoDB URI
const uri = 'mongodb://127.0.0.1/pokemonTCG'

mongoose.connect(uri)

const db = mongoose.connection

// connection success
db.once('open', ()=> console.log(`mongoDB connected @ ${db.host}:${db.port}`))

// connection failure
db.on('error', err => console.warn('Charizard has burned down the Pokemon data server...', err))

module.exports = {
    PokemonCard: require('./PokemonCard')
}