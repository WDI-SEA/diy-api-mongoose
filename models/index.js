// Require Mongoose Package
const mongoose = require('mongoose')
require ('dotenv').config()

const connect = () => {
    // Define Atlas URI
    const uri = process.env.MONGO_DB_URI

    // Connect Mongoose to Atlas
    mongoose.connect(uri,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
    })

    db.on('error', err => {
    })
}

// Export function to Connect
module.exports = {
    connect,
    Blog: mongoose.model('Blog', require('./Blog.js'))
}   