const mongoose = require('mongoose')
require('dotenv').config()
const connect = () => {

    // define my atlas uri
    const uri = process.env.ATLAS_URI

    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open',() => {
        console.log(`🔗 Connected to mongoose ${db.host}:${db.port}`)
    })
    db.on('error', err => {
        console.log(` error: ${err}`)
    })
}

module.exports = {
    connect,
    Blog: mongoose.model("Blog", require('./Blog.js'))
}





