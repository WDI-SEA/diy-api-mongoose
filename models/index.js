// require mongoose package
const mongoose = require('mongoose')

// tell mongoose to connect to mongo URI
const uri = 'mongodb://127.0.0.1/superhero'
mongoose.connect(uri, {

})

// db connection method for console log debugging
const db = mongoose.connection

// if success
db.once('open', () => {
    console.log(`Mongo connection @ ${db.host}:${db.port}`)
})

// failure
db.on('error', err => {
    console.warn('error', err)
})

// exporting all of the models from this file
module.exports = {
    Superhero: require('./superhero'),
    SuperheroType: require('./superherotype')
}