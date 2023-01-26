const mongoose = require('mongoose')

// connect to the mongodb
const dbName = 'diyApiBlog'
const uri = `mongodb://127.0.0.1/${dbName}`
mongoose.connect(uri)

// db connection logging
const db = mongoose.connection

db.once('open', () => console.log(`connected to mongo on ${db.host}:${db.port}`))
db.on('error', (err) => console.log('mongo is upsetti spaghetti 🍝', err))

// export all of our db models
module.exports = {
    Blog: require('./Blog')
}