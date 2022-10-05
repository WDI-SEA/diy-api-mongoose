const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/characterBank'
mongoose.connect(uri)
const db = mongoose.connection
db.once('open', () => console.log(`Open at ${db.host}:${db.port}`))
db.on('error', err => console.warn('Server failure,', err))

module.exports = {}