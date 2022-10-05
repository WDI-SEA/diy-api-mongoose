const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/diyAPI')

const db = mongoose.connection

db.once('open', () => console.log(`mongodb up an runnin on ${db.host}:${db.port} ⛓`))
db.on('error', err => console.log(`something has gon wrong, oh no! ${err}`))

module.exports.Blog = require('../controllers/blog')