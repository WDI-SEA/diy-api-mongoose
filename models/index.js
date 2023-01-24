let mongoose = require('mongoose')

let dbName = 'diyApiBlog'
let uri = `mongodb://127.0.0.1/` + dbName
mongoose.connect(uri)

let db = mongoose.connection

db.once('open', () => {
    console.log(`connection to ${db.host}:${db.port} 🔗`);
})
db.on('error', err => console.log('🔥🔥🔥error', err))

module.exports = {
    Blog: require('./Blog')
}