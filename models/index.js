const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/art')

const db = mongoose.connection

// set up an event listener to fire once the connection opens
db.once('open', ()=>{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

// set up an event listener to fire when an error is thrown
db.on('error', (err)=>{
    console.error('Database Error!', err)
})

module.exports.Art = require('./art')