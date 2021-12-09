const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/blog')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', () => {
    console.error(`Database error:\n${err}`)
})

module.exports.Blog = require('./blog')