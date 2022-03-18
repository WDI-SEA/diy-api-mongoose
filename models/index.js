const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.error(`Database error: \n ${err}`)
})

module.exports.Blog = require('./blog')
// module.exports.Comment = require('./comment')