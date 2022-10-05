const mongoose = require('mongoose')

const uri = 'mongodb://127.0.0.1/diyApi'
mongoose.connect(uri)

const db = mongoose.connection
db.once('open', () => console.log(`mongoDB connected successfully ✔`)) 
db.on('error', err => console.log(`Database connection unsuccessful ❌`, err))

module.exports = {
  Video: require('./Video')
}