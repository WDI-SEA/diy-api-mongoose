const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/viet-cuisine')

const db = mongoose.connection

db.once('open', () => {
    console.log(`connected to MongoDB at  ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error('Database Error!', err)
})

module.exports.Cuisine = require('./cuisine')