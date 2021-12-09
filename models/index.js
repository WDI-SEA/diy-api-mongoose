const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/dinosaur-list')
 
const db =mongoose.connection

db.once('open', ()=>{
    console.log(`connected to Mongodb at ${db.host}: ${db.port}`)
})

db.on('error', (err)=>{
    console.error(`Database err: \n${err}`)
})

module.exports.Dinosaur = require('./dinosaur')