const mongoose = require('mongoose')

//create a mongodb URI and tell mongoose to connect to it
const dbName = 'Blogs'
const uri = 'mongodb://127.0.0.1/' + dbName

mongoose.connect(uri)

const db = mongoose.connection

//connection success
db.once('open', () => console.log(`mongoDB has connected @ ${db.host}:${db.port}`))
//connection failure
db.on('error', err => console.log(` the data center has burned to the ground:`, err))

//export all of the models
module.exports = {
    Blog: require('./Blog')
}