const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nba-player')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.log('Database Error!', err)
})

module.exports.Player = require('./player')