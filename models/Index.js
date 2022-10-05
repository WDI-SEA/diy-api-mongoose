const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/blogPost'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`mongoDB connected @ ${db.host}:${db.port}`))
db.on('error', err => console.warn('the data center has been burned down', err))

module.exports = {
    Blog: require('./Blog')
}