// import message
const mongoose = require('mongoose')
// set up connection string
mongoose.connect('mongodb://localhost:27017/my-projects')

// create a shortcut (db) to the connection object
const db = mongoose.connection

// set up an even listener to fire once the connection opens
db.once('open', ()=>{
    console.log(`Connected to MongoDb at ${db.host}:${db.port}`)
})

// set up an event listener to fire when error is thrown
db.on('error', (err)=>{
    console.error('Database Error!', err)
})

module.exports.Project = require('./project')