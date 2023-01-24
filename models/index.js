const mongoose = require('mongoose')

const dbName = 'diy-blog'
const uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

const db = mongoose.connection

// connection success
db.once('open', () => console.log(`mongoDB has connected @ ${db.host}:${db.port}🔗🔗🔗`))
// connection failure
db.on('error', err => console.log('🔥🔥🔥 datacenter burned to ground:', err))

module.exports = {
    blog: require('./blog')
}