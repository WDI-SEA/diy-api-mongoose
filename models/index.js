// require mongoose package
const mongoose = require('mongoose')
require('dotenv').config()

const connect = () => {

    //define atlas URI
    const uri = process.env.ATLAS_URI
    
    //connect mongoose to atlas
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    
    const db = mongoose.connection
    
    db.once('open', () => {
        console.log(`mongo connected on ${db.host}:${db.port}`)
    })
    
    db.on('error', err => {
        console.log(`error! \n ${err}`)
    })
}


// export a function to connect
module.exports = {
    connect,
    Post: mongoose.model('blogpost', require('./Posts.js'))
}