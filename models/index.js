// require the mongoose package
const mongoose = require('mongoose')

// create a mongodb URI and tell mongoose to connect to it
const dbName = 'houseServer'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

// use mongoose's connection methods to validate the db connection
const db = mongoose.connection
// connection success
db.once('open', () => console.log(`mongoDB has connected @${db.host}:${db.port}`))
// connection failure
db.on('error', err => console.log('🔥 the datacenter has burned to the ground: ', err))

// export all of our models
module.exports = {
    houseware: require('./houseware')
}