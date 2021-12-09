const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/diy-api-mongoose')

const db = mongoose.connection

db.once('open', ()=>{
    console.log(`connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error', (err)=>{
    console.log('database error')
})

module.exports.Blog = require('./blog')