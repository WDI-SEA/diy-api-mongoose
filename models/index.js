const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {
    const uri = process.env.BLOG_URI

    // connect mongoose to atlas
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })

    const db = mongoose.connection

    db.once('open', () => {
        console.log(`⛓ mongoDB connection ${db.host}:${db.port}`)
    })

    db.on('error', err => {
        console.log(`🔥 oh no! the datacenter burned down!\n ${err}`)
    })
}

// export a function to connect
module.exports = {
    connect,
    Post: mongoose.model('Post', require('./Post.js'))
}