let mongoose = require('mongoose')

let dbName = 'blogAPI'

let uri = 'mongodb://127.0.0.1/' + dbName
mongoose.connect(uri)

let db = mongoose.connection

db.once('open', () => {
    console.log(`working hard or hardly ${db.host}:${db.port} ⚙`)
})

db.on('error', err => console.log(`wooowee`, err))

module.exports = {
    Blog: require('./Blog')
}