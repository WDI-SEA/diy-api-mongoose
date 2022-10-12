// require packages
const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/villain-server'
mongoose.connect(uri)

const db = mongoose.connection

// cinnection success
db.once('open', () => console.log(`mongoDB connect @ ${db.host}:${db.port}`))
// connect failure
db.on('error', err => console.warn('the data has burned down', err))

// exports models
module.exports = {
    Villain: require('./Villain')
}