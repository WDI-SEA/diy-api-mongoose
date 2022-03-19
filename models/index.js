const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mernexpr')
const db = mongoose.connection

db.once('open', () => {
    console.log(`Connected to mongodb at ${db.host} : ${db.port}`)
})

db.on('error', err => {
    console.log(`Connection error.`)
    console.log(err)
})

console.log('I thought I would let you know that you are accessing the models directory.')

// module.exports.BlogPost = require('./blog')
module.exports.Expr = require('./expression')