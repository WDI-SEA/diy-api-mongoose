const mongoose = require('mongoose')

const dbName = 'futbol'
const uri = 'mongodb://127.0.0.1/' + dbName

mongoose.connect(uri)
const db = mongoose.connection

db.once('open', ()=>console.log('connection is great'))
db.on('error', err=> console.log('error', err))


module.exports = {
    Futbol: require('./Futbol')
}