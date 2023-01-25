const mongoose = require('mongoose')
const dbName = 'blogAPI'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)
const db = mongoose.connection
db.once('open',()=> console.log('connection'))
db.on('error', err=> console.log(err))
module.exports={
    Blog: require('./Blog')
}