const mongoose = require('mongoose')

const dbName = 'DIY-API'
const uri = 'mongodb://127.0.1/' + dbName

mongoose.connect(uri)

const db = mongoose.connection
db.once('open', () => console.log(`mongoDB has connected @ ${db.host}:${db.port}`))

db.on('error', err => console.log('data center is lit', err))

module.exports = {
    Blog: require('./Blog')
}