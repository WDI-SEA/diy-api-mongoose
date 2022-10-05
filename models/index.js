const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/godServer'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log('mongoDB is connected'))

db.on('error', err => console.warn('the gods are at it again', err))

module.exports = {
    God: require('./God'),
    Child: require('./Child')
}