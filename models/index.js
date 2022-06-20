const mongoose = require('mongoose')
// connect to the mongodb
const uri = 'mongodb://127.0.0.1/diy-api'

mongoose.connect(uri)

const db = mongoose.connection

// success
db.once( 'open', () => {
    console.log(`mongoDB connection @ ${db.host}:${db.port}`)
})

// failure
db.on('error', err => {
    console.warn( 'Data not working', err)
})

module.exports = {
    Car: require('./car'),
    History: require('./history')
}