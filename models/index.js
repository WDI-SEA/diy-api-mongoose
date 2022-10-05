// require mongoose package
const mongoose = require('mongoose')

// tell mongoose what our database uri is, and connect to it
const uri = 'mongodb://127.0.0.1/blogServer'
mongoose.connect(uri)

// use mongoose's connection methods to validate the database connection
const db = mongoose.connection
db.once('open', () => console.log(`mongoDB connected @${db.host}:${db.port}`))
db.on(`error`, err => console.warn(`the data center is having issues bruh`, err))
// export all our mongoose files from this file
module.exports = {
    Blog: require('./Blog')
}


