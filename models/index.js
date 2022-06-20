// require mongoose & connect to mongo uri
const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/blogs'
mongoose.connect(uri)
const db = mongoose.connection

// succes
db.once('open', () => {
    console.log(`link 🔗 connection @ ${db.host}:${db.port}`)
})

// failure
db.on('error', error => {
    console.warn('Datacenter on 🔥', error)
})


module.exports = {
    blog: require('./blog'),
    comment: require('/')
}