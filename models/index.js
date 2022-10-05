// require the mongoose package
const mongoose = require('mongoose')

// tell mongoose what our database uri, and connect to it
const uri = 'mongodb://127.0.0.1/diy_api_mongoose'
mongoose.connect(uri)

// use mongoose's connection methods to validate database connection (useful console.logs)
const db = mongoose.connection

// connection success
db.once('open', () => console.log(`mongoDB connected at ${db.host}: ${db.port}`))

// connection failure
db.on('error', (err) =>  console.warn('the datacenter has burned down', err))

// export all of our mongoose models from this file 
module.exports = {
    Expense: require('./Expense'),
    Cateogory: require('./Category'),
}