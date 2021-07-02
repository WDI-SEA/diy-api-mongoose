// require mongoose package
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
        console.log(`👋MongoDB connected on ${db.host}:${db.port}`)
    })
    
    db.on('error', (err) => {
        console.log(`Error! 🔥🔥🔥🔥🔥🔥🔥🔥\n ${err}`)
    })
}

module.exports = {
    connect,
    Post: mongoose.model('Post', require('./Post.js'))
}