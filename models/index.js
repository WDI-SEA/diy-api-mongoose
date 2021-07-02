const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    const uri = process.env.ATLAS_URI

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`connected to ${db.host}: ${db.port}`)
    })

    db.on('error', error => {
        console.log(`not good boss \n ${error}`)
    })
}

module.exports = {
    connect,
    Blog: mongoose.model('Blog', require('./Blog'))
}