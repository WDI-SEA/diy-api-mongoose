const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/diy-api')

db = mongoose.connection

db.once('open', ()=> {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('open', (err) => {
    console.error('Database error: '. err)
})

module.exports.Blog = require('./blog')