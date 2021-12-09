const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/opera')

const db = mongoose.connection
db.once('open', () => {
    console.log(`Connencted to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', err => {
    console.log('Error connecting to db:', err)
})

module.exports.Opera = require('./opera')
