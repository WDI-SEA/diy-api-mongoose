const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/recordDatabase'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`mongoose connected @ ${db.host}:${db.port} `))

db.on('error', err => console.warn('data problem', err))

module.exports = {
    Band: require('./Band')
}