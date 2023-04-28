const mongoose = require('mongoose')

const dbName= 'blog'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', ()=> console.log(`Mongo is connected to: ${db.host}:${db.port}`))
db.on('error', err => console.log('this is the error right here', err))

//export modules
module.exports = { 
    Blog: require("./Blog")
}