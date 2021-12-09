const mongoose = require('mongoose')

// connection string to connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blog')

const db = mongoose.connection

// set up event listener to fire once the connection opens
db.once('open', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

// event listener to listen for error
db.on('error', (err) => {
    console.error('Database Error! ', err)
})

module.exports.Blog = require('./blog')