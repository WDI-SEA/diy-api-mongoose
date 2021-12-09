//  require mongoose
const mongoose = require('mongoose')
//  set up connection
mongoose.connect('mongodb://localhost:27017/poem', {
})

//  creating a reference shortcut for mongoose connect.
const db = mongoose.connection

db.once('open', ()=>{
    console.log(`connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err)=>{
    console.error(`Database error:/n${err}`)
})

module.exports.Poem = require('./poem')
