// import mongoose
const mongoose = require('mongoose')
// set up connection string
mongoose.connect('mongodb://localhost:27017/personal-blog');
// create a shortcut (db) to the connection object
const db = mongoose.connection
// set up an event listener to fire once the connection opens
db.once('open', ()=>{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})
db.on('error', ()=>{
    console.log('Database Error')
})
//import all models here:
module.exports.Blog = require('./blog')