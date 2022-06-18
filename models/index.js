// require mongoose
const mongoose = require('mongoose')
// connect to mongo uri
const uri = 'mongodb://127.0.0.1/blogs'
mongoose.connect(uri)

const db = mongoose.connection

// success
db.once('open', () => {
    console.log(`🔗  mongoDB connection @ ${db.host}:${db.port}`)
})

// failure
db.on('error', err => {
    console.log('🔥🔥🔥🔥🔥🔥 The datacenter has burned to the ground', err)
})

//export models
module.exports = {
    blog: require('./blog'),
    comment: require('./comment')
}