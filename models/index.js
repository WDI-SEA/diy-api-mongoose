const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/music')
    //need to do this to get findOneAndUpdate
    // useFindAndModify: false

const db = mongoose.connection

db.once('open', ()=> {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', ()=> {
    console.log('Database Error', err)
})

module.exports.Artist = require('./artist')