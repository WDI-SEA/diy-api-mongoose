// this page has the mongo connection stuff before hitting the mongo db
const mongoose = require('mongoose')

const connect = () => {
    mongoose.connect(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindandModify: false
    }
    const db = mongoose.connection
    db.once('open', () => {
        console.log(`mongoDB connection ${db.host}:${db.port}`)
    })
    db.on('error', err => {
        console.log('oh no!')
    })
}

module.exports = {
  connect,
  Blog: mongoose.model('Blog', require('./Blog.js'))
}

