// connect to the mango db
const mongoose = require('mongoose')

// export models
const uri = 'mongodb://127.0.0.1/crushesDb'
mongoose.connect(uri)
const db = mongoose.connection

// success
db.once('open', () => {
    console.log(`mongoDB connection at ${db.host}:${db.port}`)
})

// error
db.on('error', err => {
    console.warn('the datacenter has burned to the ground', err)
})

module.exports = {
    Crush: require('./crush'),
    Comment: require('./comment')
}