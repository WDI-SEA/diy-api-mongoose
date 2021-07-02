// require mongoose
const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    const uri = process.env.MONGO_DB_URI

    // connect mongoose to atlas v5 connection methods
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`You have connected 🎧 ${db.host}:${db.port}`);
    })

db.on('error', (err) => `NO DATA 🔥 ${err}`)

}

module.exports = {
    connect,
    Blog: mongoose.model('Blog', require('./Blog.js'))
}