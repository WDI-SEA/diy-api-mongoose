const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/musicians')

const db = mongoose.connection

db.once('open',()=>{
    console.log(`connected to mongodb at ${db.host}:${db.port}`)
})

db.on('error',(err)=>{
    console.log(err,'something is seriously wrong')

})

module.exports.Musician = require('./musician')
module.exports.Album = require('./albums')