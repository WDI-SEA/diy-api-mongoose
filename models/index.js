//require moongoose
const mongoose = require("mongoose")
// tell mongoose what our datbase is uri, then connect them
const uri = 'mongodb://127.0.0.1/diy-api' //! DB name 
mongoose.connect(uri)

//use moongoose connection methods to vakidate the database 
const db = mongoose.connection

//connection success 
db.once('open', () => console.log(`mongodb connected @ ${db.host}:${db.port}`))

//connection failure
db.on('error', err => console.warn(`did not connect thats crazy: ${err}`))

//export all mongoose models files
module.exports = {
    Movie: require('./Movie')
}