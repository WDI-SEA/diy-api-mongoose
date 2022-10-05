const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/diyApiMongoose'
mongoose.connect(uri)

const db = mongoose.connection
db.once('open', () => console.log(`mongodb connected @ ${db.host}:${db.port}`))
db.on('error', err => console.warn(`the data not working`, err))

module.exports = {
    Inventor: require('./Inventor')
}