const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/diy-api-mongoose'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`mongoDB connected @ ${db.host}:${db.port}`))

db.on('error', () => console.warn('the data center has burned down', err))

module.exports = {
    Boba: require('./Boba')
}
