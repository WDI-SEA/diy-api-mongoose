const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    const uri = process.env.ATLAS_URI

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify:false
    })

    const db= mongoose.connection
    db.once('open', () => {
        console.log(`mongoose connected ${db.host}: ${db.port}`)
    })

    db.on('error', err => {
        console.log(`oh no ${err}`)
    })
}

module.exports = {
    connect, 
    Beer: mongoose.model('Beer', require('./Beer.js'))
}