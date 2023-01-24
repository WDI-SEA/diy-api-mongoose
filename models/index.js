const mongoose = require('mongoose')
const dbName = 'blogApi'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)
// console.log(url)
const db = mongoose.connection
db.once('open', ()=> console.log(`mongodb has connected @ ${db.host}:${db.port} `))
db.on('error', err => console.log(`connection failed :`, err))

module.exports = {
    Blog: require('./Blog')
}