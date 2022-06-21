// connect to mogno db
const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1/blogApi'

mongoose.connect(uri)

const db = mongoose.connection

db.once('open', () => {
    console.log(`link ${db.host}:${db.port}`)
})
db.on('error', err =>{
    console.log(' ')
})
// export models



module.exports = {
    Blog: require('./blog')
}
