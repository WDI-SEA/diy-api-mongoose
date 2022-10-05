const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/recipeJournal'
mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => console.log(`mongoDB connected @ ${db.host}:${db.port}`))

// connection failure
db.on('error', err => console.warn(`I'm not feeling too good `, err))

// export all of our mongoose models from this file
module.exports = {
    Recipe: require('./Recipe')

}