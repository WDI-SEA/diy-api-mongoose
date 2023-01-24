//require mongoose package
const mongoose = require('mongoose')

//create mongoDb URI and connect to it
const dbName = 'BlogAPI'
const uri = `mongodb://127.0.0.1/${dbName}`
mongoose.connect(uri)

//define success and failure debug logs
const db = mongoose.connection 
db.once('open', () => console.log(`Connected to MongoDB at ${db.host}: ${db.port}`))
db.on('error', (error) => console.log(`The datacenter has crashed:`, error))

//export all models here
module.exports = {
    Blog: require('./Blog')
}