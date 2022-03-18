const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/blog')


const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to mongoDB at ${db.host}: ${db.port}`)
})

db.on('error', (err) => {
    console.log(`Database error: \n ${err}`)
})


module.exports.Blog = require('./blog')