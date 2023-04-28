const mongoose = require("mongoose")
const dbName = 'mongooseChowderCast'

const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`mongo is connected on ${db.host}:${db.port}`))
db.on('error', err => console.log('💥 the datacenter has exploded:', err ))

module.exports = {
    Chowder: require('./Chowder')
}