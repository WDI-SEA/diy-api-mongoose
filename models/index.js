const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/coffee-api')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to DB at ${db.lost}:${db.port}`);
})

db.on('error', (err) => {
    console.log('DB error: ', err);
})

module.exports.Coffee = require('./coffee')