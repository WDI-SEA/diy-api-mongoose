const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/diy-api')
const db = mongoose.connection

db.once('open', ()=> {
    console.log(`mongoose connected at ${db.host}: ${db.port}`)
})

db.on('error', ()=> {
    console.log(error)
    console.log('error inna di diy api db')
})

module.exports.Blog = require('./blog')