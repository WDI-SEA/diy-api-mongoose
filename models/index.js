//require mongoose 
const mongoose = require('mongoose')


const uri = 'mongodb://127.0.0.1/diyApiBlog'
//the mongoose connect tells the code to connect or look for the mongo database 
//if it doesnt find it it will create one with the specified name )diyApiBlog
//the uri comes from the above code 
mongoose.connect(uri, {})


//we use mongoose to check if we properly connected 
//we see if we properly connected with the console.logs below
const db = mongoose.connection

// succesfully connected
db.once('open', () => {
    console.log(`🔗 mongoDB connection @ ${db.host}:${db.port}`)
})

// failured to connect
db.on('error', err => {
    console.warn('🔥 The Datacenter has burned to the ground', err)
})

// export all of our models from this file
module.exports = {
    Blog: require('./blog'),
    Comment: require('./comment')
}