// require the mongoose package 
const mongoose = require('mongoose')
//tell mongoose to connect to the URi
const uri = 'mongodb://127.0.0.1/diy-api-mongoose'
const db = mongoose.connection

db.once('open', () => {
    console.log(`The Connector her: ${db.host}:${db.port}`);
})
db.on('error', err => {
    console.warn('Wrong aprroach', err)
})
//export all of our models from index.js -this file-
module.exports.Blog = require('./blog')