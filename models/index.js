// connect ot the mongoDb

const mongoose = require('mongoose') 
const uri = 'mongodb://127.0.0.1/blogApi'
mongoose.connect(uri)
const db = mongoose.connection 

db.once('open', () => {
    console.log(`mongoDB connection @ ${db.host}: ${db.port}`)
})

db.on('error', err => {
    console.warn('error!', err)
})

module.exports = {
    Blog: require('./blog'),
}