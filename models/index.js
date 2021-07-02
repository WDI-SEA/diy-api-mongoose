//require mongoose package
const mongoose = require('mongoose')
require('dotenv').config()

//CREATING CONNECTION TO DATABASE
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
//debugging connection
const db = mongoose.connection

db.once('open', () => {
    console.log(`🌈mongoDB connection🪆 ${db.host}:${db.port}`)
})
db.on('error', err => {
    console.log(`oh noe! datacenter 🔥burned down! ${err}`)
})
//node ./models/index.js
}
module.exports = {
    connect,
    Blog: mongoose.model('Blog', require('./Blog.js'))
}
