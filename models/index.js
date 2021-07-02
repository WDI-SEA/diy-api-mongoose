const mongoose = require('mongoose')

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
        console.log(`connected to MongoDB Atlas ${db.host}:${db.port}`)
    })
}

module.exports = {
    connect,
    Post: mongoose.model('post', require('./Post.js'))
}