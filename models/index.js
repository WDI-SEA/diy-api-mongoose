const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/diyApiBlog')

const db = mongoose.connection

db.once('open', () => {
    console.log(`mongdb up and running on ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.log(`something has gone wrong, oh now! ${err}`)
})

module.exports.Blog = require('./blog')