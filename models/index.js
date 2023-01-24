const mongoose = require('mongoose')

const dbName = 'diyapi'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

const db = mongoose.connection
db.once('open', () => console.log(`mongoDB has connected @ ${db.host}:${db.port}`))
db.on('error', err => console.log('the datacenter has burned to the ground:', err))

module.exports = {
    Post: require('./Post')
}