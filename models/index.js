// this page has the mongo connection stuff before hitting the mongo db
const mongoose = require('mongoose')
require ('dotenv').config()

const connect = () => {
    const uri = process.env.ATLAS_URI

    // connect mongoose to atlas
    mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`mongoDB connected on ${db.host}:${db.port}`)
    })
    db.on('error', err => {
        console.log('oh no!')
    })
}

module.exports = {
  connect,
  Blog: mongoose.model('Blog', require('./Blog.js'))
}

