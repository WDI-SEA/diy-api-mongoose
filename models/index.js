const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/personalApiBlog')

const db = mongoose.connection

//sucess
db.once('open', () => {
    console.log(`Link mongodb connection at ${dn.host}:${db.port}`)
})

//failure
db.on('error', err => {
    console.warn('The datacenter is non-existent', err)
})

//export modules from this file

module.exports = {
    Blog: require('./blog')
}