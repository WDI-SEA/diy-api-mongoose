const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/suggestions')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}: ${db.port}`)
})

db.on('error', (err) => {
    console.log(`Database error: ${err}`)
})

module.exports.Suggestion = require('./suggestion')