// require mongoose
const mongoose = require('mongoose')

// connect mongoose to mongodb
mongoose.connect("mongodb://localhost/diyApi")

// alias
const db = mongoose.connection

// mongoose event handlers
db.once('open', () => {
    console.log(`connected to ${db.host}:${db.port}`)
})

db.on('error', error => {
    console.warn(`DB error: ${error}`)
})

// export models
module.exports = {
    Blog: require('./Blog')
}