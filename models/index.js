
//require mongoose packages
const mongoose = require('mongoose')
require('dotenv').config()

//define atlas URI
const connect = () => {
    const uri = process.env.ATLAS_URI


    //connect mongoose to atlas
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`MongoDB connection ${db.host}:${db.port}`)
    })

    db.on('error', err => {
        console.log(`MongoDB ${err}`)
    })
}

//export a function to connect

module.exports = {
    connect,
    Blog: mongoose.model('Blog', require('./Blog.js'))
}
