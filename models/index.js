// require mongoose package
const mongoose = require("mongoose")

// connect to mongodb
const dbName = "blogServer"
const uri = "mongodb://127.0.0.1/" + dbName
mongoose.connect(uri)

// config console logs for mongoose connection
const db = mongoose.connection
db.once("open", () => console.log(`mongo is connected on  ${db.host}:${db.port} ⛓️`))
db.on("error", err => console.log('💥 the datacenter has exploded: ', err))


module.exports = {
    // export our models here
    Post: require("./Post")
}