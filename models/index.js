// connect to mongodb
const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/cars'
mongoose.connect(uri)

const db = mongoose.connection

// success
db.once('open', ()=>{
    console.log(`🔗 mongoDB connection @ ${db.host}:${db.port}`)
})

// failure
db.on('error', err =>{
    console.warn('the data center is on fire 🔥', err)
})

// export all of our models from this file
module.exports = {
    cars: require('./cars')
}