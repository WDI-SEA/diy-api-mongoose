const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/diy-api')

const db = mongoose.connection

db.once('open',()=>{
    console.log(`mongoose connected @ ${db.host}:${db.port} ⛓`)
})

db.on('error',(error)=>{
    console.log(`uh oh something happen`)
    console.log(error)
})

module.exports.Fish = require('./fish')
module.exports.Pond = require('./pond')